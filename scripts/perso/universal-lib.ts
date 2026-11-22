// Shared server of universal-create and universal-play: any pack of packs/, in the browser, with
// nothing of the pack written here. It loads a pack with its dependencies and English text, keeps
// the character and any paused action per session, runs actions with the engine (startAction /
// continueAction) and hands each pause to the page with its text (describeNeed): a choice, an
// allocation (a budget or a list of values). Finished actions' changes for the character are
// applied (applyChanges); their rolls and outcome go back to the page. Forms for actions come
// from describeAction; input fields are set with `set` changes; characters are saved to
// examples/characters/.

import {
  applyChanges,
  computeSheet,
  continueAction,
  describeAction,
  loadRuleset,
  startAction,
} from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import {
  createText,
  describeNeed,
  type Messages,
  type Text,
} from '../../packages/text/src/index.ts';
import { parse, stringify } from 'yaml';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { join } from 'node:path';
import { exec } from 'node:child_process';
import { randomUUID } from 'node:crypto';

const root = join(import.meta.dirname, '..', '..');
const packsDir = join(root, 'packs');
const charsDir = join(root, 'examples', 'characters');
const specText = parse(
  readFileSync(join(root, 'packages', 'spec', 'i18n', 'en.yaml'), 'utf8'),
) as Messages;

type Any = any; // engine data is plain JSON; the page only reads it

// ---------------------------------------------------------------------------------------------
// Packs: every packs/<game>/<pack>/pack.yaml, loaded on demand with its dependencies.

const yamlFiles = (dir: string): string[] =>
  existsSync(dir)
    ? readdirSync(dir)
        .toSorted()
        .flatMap((n) =>
          statSync(join(dir, n)).isDirectory()
            ? yamlFiles(join(dir, n))
            : n.endsWith('.yaml')
              ? [join(dir, n)]
              : [],
        )
    : [];
const readYaml = (file: string): Any => parse(readFileSync(file, 'utf8'));

const packDirs = new Map<string, string>();
for (const game of readdirSync(packsDir)) {
  const g = join(packsDir, game);
  if (!statSync(g).isDirectory()) continue;
  for (const pack of readdirSync(g)) {
    const file = join(g, pack, 'pack.yaml');
    if (existsSync(file)) packDirs.set(readYaml(file).id as string, join(g, pack));
  }
}

/** A pack's English text: i18n/en.yaml and i18n/en/*.yaml, merged. */
const english = (dir: string): Messages =>
  Object.assign(
    {},
    ...[join(dir, 'i18n', 'en.yaml'), ...yamlFiles(join(dir, 'i18n', 'en'))]
      .filter(existsSync)
      .map(readYaml),
  );

interface Loaded {
  id: string;
  ruleset: Any;
  text: Text;
  releases: Any[];
}
const loadedPacks = new Map<string, Loaded>();

/** The pack and its dependencies, dependencies first. */
function loadPack(id: string): Loaded {
  const hit = loadedPacks.get(id);
  if (hit) return hit;
  const order: string[] = [];
  const visit = (p: string) => {
    if (order.includes(p)) return;
    const dir = packDirs.get(p);
    if (!dir) throw new Error(`pack ${p} not found under packs/`);
    for (const dep of Object.keys(readYaml(join(dir, 'pack.yaml')).dependencies ?? {})) visit(dep);
    order.push(p);
  };
  visit(id);
  const releases = order.map((p) => readPack(packDirs.get(p)!));
  const result: Any = loadRuleset(releases);
  if (!result.ok)
    throw new Error(`cannot load ${id}: ${JSON.stringify(result.errors).slice(0, 500)}`);
  const ruleset = result.ruleset;
  const text = createText({
    languages: ['en'],
    packs: { en: Object.fromEntries(order.map((p) => [p, english(packDirs.get(p)!)])) },
    spec: { en: specText },
    contentTypes: ruleset.contentTypes,
    content: ruleset.content,
    display: ruleset.rules?.display,
    enumOrigins: ruleset.enumOrigins,
    optionOrigins: ruleset.optionOrigins,
    familyOrigins: ruleset.familyOrigins,
  });
  const loaded = { id, ruleset, text, releases };
  loadedPacks.set(id, loaded);
  return loaded;
}

const local = (qid: string) => qid.slice(qid.indexOf(':') + 1);
const packOf = (qid: string) => qid.slice(0, qid.indexOf(':'));

/** A message from the pack that owns a qualified ID, else from any loaded pack. */
function packMessage(L: Loaded, owner: string, key: string): string | undefined {
  return (
    L.text.message(owner, key) ??
    L.releases.map((r) => L.text.message(r.manifest.id, key)).find((m) => m !== undefined)
  );
}

function packList() {
  return [...packDirs.entries()]
    .map(([id, dir]) => {
      // Whether the pack declares creation starts (read without loading the pack).
      const creation = yamlFiles(join(dir, 'rules')).some((f) =>
        /^creation:/m.test(readFileSync(f, 'utf8')),
      );
      return { id, name: (english(dir)['pack.name'] as string | undefined) ?? id, creation };
    })
    .toSorted((a, b) => a.name.localeCompare(b.name));
}

function startsOf(L: Loaded) {
  return (L.ruleset.creation ?? []).map((s: Any) => ({
    id: s.id,
    pack: s.pack,
    random: !!s.random,
    name: L.text.message(s.pack, `creation.${s.id}.name`) ?? s.id,
    description: L.text.message(s.pack, `creation.${s.id}.description`) ?? '',
  }));
}

// ---------------------------------------------------------------------------------------------
// Sessions: the character and the paused action, kept here between the page's calls.

interface Session {
  pack: string;
  character: Any;
  paused?: Any;
  policy?: Any;
  /** The running action, for the outcome's text. */
  action?: { id: string; entry?: string };
  file?: string;
}
const sessions = new Map<string, Session>();
const PAUSE = { choices: 'pause', allocations: 'pause' }; // dice are rolled by the engine

function newCharacter(L: Loaded, id: string) {
  return {
    specVersion: L.releases[0].manifest.specVersion,
    id,
    packs: L.releases.map((r) => ({ id: r.manifest.id, version: r.manifest.version })),
    creating: true,
  };
}

const show = (v: unknown): string =>
  v === undefined || v === null
    ? ''
    : typeof v === 'object'
      ? ((v as Any).text ?? (v as Any).notation ?? JSON.stringify(v))
      : String(v);
const errorText = (L: Loaded, errors: Any[]) =>
  errors.map((e: Any) => L.text.error(e) || e.code).join('; ');
const allCopies = (character: Any): Any[] => [
  ...(character.features ?? []),
  ...(character.inventory ?? []),
];

/** A copy's name: its item's (or nameFrom's), with its text state (a specialty…) when it has one. */
function copyName(L: Loaded, sheet: Any, c: Any) {
  const name = sheet?.copyNames?.[c.id] || L.text.copy({ item: c.item, templates: c.templates });
  const extra = Object.values(c.state ?? {}).find(
    (v) => typeof v === 'string' && v !== '' && v !== name,
  );
  return extra ? `${name} (${extra})` : name;
}

/** An action as the sheet lists it, named; an item's action carries its copy's name. */
function actionLabel(L: Loaded, character: Any, sheet: Any, a: { id: string; entry?: string }) {
  const name = L.text.action(a.id);
  const c = a.entry ? allCopies(character).find((x) => x.id === a.entry) : undefined;
  return c ? `${copyName(L, sheet, c)}: ${name}` : name;
}

/** What the page shows of the character: fields by display group, copies, issues, actions. */
function view(sid: string, extra: Record<string, unknown> = {}) {
  const S = sessions.get(sid)!;
  const L = loadPack(S.pack);
  const R = L.ruleset;
  const t = L.text;
  const sheet: Any = computeSheet(R, S.character);
  const values = sheet.values ?? {};
  const fieldRow = (id: string) => {
    const def = R.fields[id] ?? {};
    const v = values[id]?.value;
    return {
      id,
      label: t.field(id),
      value: def.type === 'enum' && typeof v === 'string' ? t.fieldValue(id, v) : show(v),
    };
  };
  // Field groups from the display hints; without them, every shown field in ruleset order.
  const fieldGroups = (sheet.groups ?? []).filter(
    (g: Any) => g.shown !== false && g.fields?.length,
  );
  const groups = fieldGroups.length
    ? fieldGroups.map((g: Any) => ({
        label:
          L.releases.map((r) => t.message(r.manifest.id, `groups.${g.id}.label`)).find(Boolean) ??
          g.id,
        fields: g.fields.map(fieldRow),
      }))
    : [
        {
          label: 'Fields',
          fields: Object.keys(values)
            .filter((id) => values[id]?.shown !== false && R.fields[id])
            .map(fieldRow),
        },
      ];
  const copy = (c: Any, where: string) => {
    const type = R.content[c.item]?.type;
    return {
      id: c.id,
      where,
      type: type ? t.type(type) : '',
      label: sheet.copyNames?.[c.id] || t.copy({ item: c.item, templates: c.templates }),
      equipped: !!c.equipped,
      quantity: c.quantity,
      state: Object.entries(c.state ?? {}).map(([k, v]) => ({
        label: t.state(c.item, k, type),
        value: show(v),
      })),
      computed: Object.entries(sheet.copies?.[c.id] ?? {}).map(([k, v]) => ({
        key: k,
        value: show(v),
      })),
    };
  };
  const copies = [
    ...(S.character.features ?? []).map((c: Any) => copy(c, 'features')),
    ...(S.character.inventory ?? []).map((c: Any) => copy(c, 'inventory')),
  ];
  // The actions available now, the rules' and the items' (`entry`, the copy).
  // `start`: run from a creation start; `forCreation`: tagged `creation` (local or qualified).
  const actions = (sheet.actions ?? [])
    .filter((a: Any) => a.listed !== false)
    .map((a: Any) => {
      const ref = {
        id: a.action,
        ...(a.entry ? { entry: a.entry } : {}),
        ...(a.source ? { source: a.source } : {}),
      };
      const d: Any = describeAction(R, S.character, ref as Any);
      const tags: string[] = d.action?.tags ?? [];
      return {
        ...ref,
        label: actionLabel(L, S.character, sheet, ref),
        name: t.action(a.action),
        start: !a.entry && (R.creation ?? []).some((s: Any) => s.action === a.action),
        forCreation: tags.some((x) => x === 'creation' || x.endsWith(':creation')),
      };
    });
  const inputs = Object.entries(R.fields)
    .filter(
      ([, d]: Any) =>
        d.input && ['string', 'integer', 'boolean', 'enum', 'decimal'].includes(d.type),
    )
    .map(([id, d]: Any) => ({
      id,
      label: t.field(id),
      type: d.type,
      value: S.character.values?.[id] ?? d.default ?? '',
      values:
        d.type === 'enum'
          ? (d.values ?? []).map((v: string) => ({ id: v, label: t.fieldValue(id, v) }))
          : undefined,
      min: typeof d.min === 'number' ? d.min : undefined,
      max: typeof d.max === 'number' ? d.max : undefined,
    }));
  // What the rules offer now: an action to run (with `followUp`), or changes to apply.
  const offers = (sheet.offers ?? []).map((o: Any) => ({
    id: o.id,
    kind: o.kind,
    required: !!o.required,
    action: o.action,
    params: o.params,
    changes: o.changes,
    forOther: !!o.character || (o.to && o.to !== 'self'),
    label: o.action
      ? actionLabel(L, S.character, sheet, o.action)
      : (t.message(packOf(o.followUp ?? ''), `followUps.${local(o.followUp ?? '')}.name`) ??
        o.followUp ??
        o.id),
  }));
  return {
    sid,
    pack: S.pack,
    file: S.file,
    character: S.character,
    creating: !!S.character.creating,
    groups,
    copies,
    issues: (sheet.issues ?? []).map((i: Any) => t.issue(i)),
    pending: (sheet.pending ?? []).length,
    actions,
    situational: (sheet.situational ?? []).map((id: string) => ({ id, label: t.situational(id) })),
    offers,
    inputs,
    starts: startsOf(L),
    paused: S.paused ? pauseView(L, S) : undefined,
    ...extra,
  };
}

/** A pause as the page shows it: the step's title, the options or fields with their labels. */
function pauseView(L: Loaded, S: Session) {
  const needs = S.paused.needs;
  const described: Any = describeNeed(L.ruleset, L.text, needs, { character: S.character });
  const copies = allCopies(S.character);
  // A copy the running action has just added isn't on the character yet: its generated instance
  // ID is the item's local ID with dashes and a number (skills-handcrafts-1 for skills.handcrafts).
  const copyLabel = (id: string) => {
    const c = copies.find((x: Any) => x.id === id);
    if (c) return copyName(L, undefined, c);
    const stem = id.replace(/-\d+$/, '');
    const item = Object.keys(L.ruleset.content).find((q) => local(q).replace(/\./g, '-') === stem);
    return item ? `${L.text.content(item)} (new)` : id;
  };
  const label = (id: string) => {
    const l = described.options?.find((o: Any) => o.id === id)?.label;
    return l === undefined || l === id ? copyLabel(id) : l;
  };
  return {
    action: L.text.action(needs.action),
    kind: needs.kind,
    title: described.title,
    options: (needs.options ?? []).map((id: string) => ({ id, label: label(id) })),
    recommended: needs.recommended,
    allocate: needs.allocate
      ? {
          ...needs.allocate,
          fields: needs.allocate.fields.map((f: Any) => ({
            ...f,
            label: described.fields?.find((x: Any) => x.id === f.id)?.label ?? L.text.field(f.id),
          })),
        }
      : undefined,
    dice: described.dice,
    unsupported: !['choice', 'allocate', 'dice'].includes(needs.kind),
  };
}

/** A text, or the fallback when the text helper has none (or throws). */
const named = (f: () => string, fallback: string) => {
  try {
    return f() || fallback;
  } catch {
    return fallback;
  }
};

/** The rolls of a finished action's log: the step's name, the dice and faces, total and band. */
function rollsOf(L: Loaded, log: Any[]) {
  return (log ?? [])
    .filter((e: Any) => e.kind === 'dice' && e.items)
    .map((e: Any) => ({
      label: named(() => L.text.stepName({ action: e.action, step: e.step }), e.step),
      roll: named(() => L.text.roll(e.items), ''),
      faces: e.faces,
      total: e.total,
      band: e.band ? named(() => L.text.band(e.bandSet, e.band), e.band) : undefined,
      draw: !!e.draw,
    }));
}

/** A finished, paused or failed action: apply the changes for the character, or keep the pause. */
function settle(sid: string, result: Any) {
  const S = sessions.get(sid)!;
  const L = loadPack(S.pack);
  if (result.ok === false) {
    S.paused = undefined;
    return view(sid, { error: errorText(L, result.errors) });
  }
  if (result.status === 'paused') {
    S.paused = result;
    return view(sid);
  }
  S.paused = undefined;
  const proposed: Any[] = result.proposedChanges ?? [];
  const mine = proposed.filter((p) => p.to === 'self' && !p.character).map((p) => p.change);
  // Changes for a target, a role or a link belong to other characters: listed, not applied.
  const others = proposed
    .filter((p) => !(p.to === 'self' && !p.character))
    .map((p) => ({ to: typeof p.to === 'string' ? p.to : JSON.stringify(p.to), change: p.change }));
  const before = computeSheet(L.ruleset, S.character) as Any;
  if (mine.length) {
    const applied: Any = applyChanges(L.ruleset, S.character, mine);
    if (!applied.ok) return view(sid, { error: errorText(L, applied.errors) });
    S.character = applied.character;
  }
  const after = computeSheet(L.ruleset, S.character) as Any;
  // What the changes did to the character's fields, as the page shows them.
  const changed = Object.keys(after.values ?? {})
    .filter(
      (id) =>
        L.ruleset.fields[id] && show(before.values?.[id]?.value) !== show(after.values[id].value),
    )
    .map((id) => ({
      label: L.text.field(id),
      from: show(before.values?.[id]?.value),
      to: show(after.values[id].value),
    }));
  const action = S.action ?? { id: '' };
  const res = result.outcome?.result;
  const resultText = res
    ? (packMessage(L, packOf(action.id), `actions.${local(action.id)}.results.${res}.name`) ?? res)
    : '';
  const outcome = {
    action: actionLabel(L, S.character, after, action),
    result: resultText,
    data: Object.entries(result.outcome?.data ?? {}).map(([k, v]) => ({ key: k, value: show(v) })),
    rolls: rollsOf(L, result.log),
    changed,
    others,
  };
  return view(sid, { outcome, message: `${outcome.action}: ${resultText || 'done'}` });
}

/** describeAction, with labels for the parameters, their values and the IDs they take. */
function describe(
  L: Loaded,
  character: Any,
  action: { id: string; entry?: string; source?: string },
) {
  const d: Any = describeAction(L.ruleset, character, action as Any);
  if (!d.action) return { error: errorText(L, d.errors ?? []) };
  const a = d.action;
  const nameOf = (id: string) =>
    L.ruleset.content[id]
      ? L.text.content(id)
      : L.ruleset.fields[id]
        ? L.text.field(id)
        : L.text.tag(id);
  return {
    ...action,
    label: actionLabel(L, character, computeSheet(L.ruleset, character), action),
    params: (a.params ?? [])
      .filter((p: Any) => !p.fixed && !p.derived)
      .map((p: Any) => ({
        ...p,
        label: p.addedBy ? L.text.addedParam(p.addedBy, p.name) : L.text.param(a.definedBy, p.name),
        values: p.values?.map((v: string) => ({
          id: v,
          label: L.text.paramValue(a.definedBy, p.name, v),
        })),
        options: p.options?.map((id: string) => ({ id, label: nameOf(id) })),
      })),
  };
}

// ---------------------------------------------------------------------------------------------
// HTTP

const send = (
  res: ServerResponse,
  status: number,
  body: unknown,
  type = 'application/json; charset=utf-8',
) => {
  res.writeHead(status, { 'content-type': type });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
};
const body = (req: IncomingMessage): Promise<Any> =>
  new Promise((ok, fail) => {
    let s = '';
    req.on('data', (c) => (s += c));
    req.on('end', () => {
      try {
        ok(s ? JSON.parse(s) : {});
      } catch (e) {
        fail(e);
      }
    });
  });
const session = (sid: string) => {
  const S = sessions.get(sid);
  if (!S) throw new Error('unknown session: start or load a character again');
  return S;
};
const safeName = (s: string) => s.replace(/[^\w.-]+/g, '-').replace(/^-+|-+$/g, '');

/** Serves `page` (next to this file) and the API on 127.0.0.1; `--port` and `--no-open` from argv. */
export function serve(title: string, page: string, defaultPort: number) {
  const argv = process.argv.slice(2);
  const port = Number(argv[argv.indexOf('--port') + 1]) || defaultPort;
  const pagePath = join(import.meta.dirname, page);

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://localhost');
      const p = url.pathname;
      if (p === '/' || p === '/index.html')
        return send(res, 200, readFileSync(pagePath, 'utf8'), 'text/html; charset=utf-8');
      if (p === '/api/packs') return send(res, 200, packList());
      if (p === '/api/characters') {
        const pack = url.searchParams.get('pack');
        const list = readdirSync(charsDir)
          .filter((f) => f.endsWith('.yaml'))
          .filter((f) => {
            try {
              return (
                !pack || (readYaml(join(charsDir, f)).packs ?? []).some((x: Any) => x.id === pack)
              );
            } catch {
              return false;
            }
          });
        return send(res, 200, list);
      }
      if (req.method !== 'POST') return send(res, 404, { error: 'not found' });
      const b = await body(req);

      if (p === '/api/new') {
        const L = loadPack(b.pack);
        const sid = randomUUID();
        sessions.set(sid, {
          pack: b.pack,
          character: newCharacter(L, safeName(b.id || `${b.pack}-${Date.now().toString(36)}`)),
        });
        return send(res, 200, view(sid));
      }
      if (p === '/api/load') {
        const file = safeName(b.file);
        const character = readYaml(join(charsDir, file));
        // The pack asked for if the character uses it, else the character's last pack.
        const ids: string[] = (character.packs ?? []).map((x: Any) => x.id);
        const pack = b.pack && ids.includes(b.pack) ? b.pack : ids.at(-1);
        if (!pack) throw new Error(`${file} names no pack`);
        loadPack(pack);
        const sid = randomUUID();
        sessions.set(sid, { pack, character, file });
        return send(res, 200, view(sid));
      }
      if (p === '/api/view') return send(res, 200, view((session(b.sid), b.sid)));

      if (p === '/api/start') {
        // A creation start: its action and params; a random start runs on its own.
        const S = session(b.sid);
        const L = loadPack(S.pack);
        const start = (L.ruleset.creation ?? []).find(
          (s: Any) => s.id === b.start && (!b.startPack || s.pack === b.startPack),
        );
        if (!start) return send(res, 400, { error: `no creation start ${b.start}` });
        S.action = { id: start.action };
        S.policy = start.random ? {} : PAUSE;
        return send(
          res,
          200,
          settle(
            b.sid,
            startAction(L.ruleset, S.character, {
              action: { id: start.action },
              params: start.params ?? {},
              policy: S.policy,
            } as Any),
          ),
        );
      }
      if (p === '/api/describe') {
        const S = session(b.sid);
        return send(
          res,
          200,
          describe(loadPack(S.pack), S.character, {
            id: b.action,
            ...(b.entry ? { entry: b.entry } : {}),
            ...(b.source ? { source: b.source } : {}),
          }),
        );
      }
      if (p === '/api/run') {
        // An action: the rules' or an item's (`entry`), an offer's (`followUp`), with params and
        // situational choices; `auto` takes every recommendation.
        const S = session(b.sid);
        const L = loadPack(S.pack);
        const ref = {
          id: b.action,
          ...(b.entry ? { entry: b.entry } : {}),
          ...(b.source ? { source: b.source } : {}),
          ...(b.followUp ? { followUp: b.followUp } : {}),
        };
        S.action = { id: b.action, ...(b.entry ? { entry: b.entry } : {}) };
        S.policy = b.auto ? {} : PAUSE;
        const input = {
          action: ref,
          params: b.params ?? {},
          situational: b.situational ?? {},
          policy: S.policy,
        };
        return send(res, 200, settle(b.sid, startAction(L.ruleset, S.character, input as Any)));
      }
      if (p === '/api/answer') {
        // One answer to the pause; `auto` lets the engine take every later recommendation.
        const S = session(b.sid);
        if (!S.paused) return send(res, 400, { error: 'nothing is paused' });
        const L = loadPack(S.pack);
        if (b.auto) S.policy = {};
        return send(
          res,
          200,
          settle(b.sid, continueAction(L.ruleset, S.paused, b.answer, S.policy)),
        );
      }
      if (p === '/api/cancel') {
        session(b.sid).paused = undefined;
        return send(res, 200, view(b.sid, { message: 'Action cancelled; nothing was applied.' }));
      }
      if (p === '/api/set' || p === '/api/changes') {
        // A field's input value, or any changes (an offer's, dismissing a follow-up…).
        const S = session(b.sid);
        const L = loadPack(S.pack);
        const changes =
          p === '/api/set' ? [{ type: 'set', field: b.field, value: b.value }] : b.changes;
        const applied: Any = applyChanges(L.ruleset, S.character, changes as Any);
        if (!applied.ok)
          return send(res, 200, view(b.sid, { error: errorText(L, applied.errors) }));
        S.character = applied.character;
        return send(res, 200, view(b.sid, b.message ? { message: b.message } : {}));
      }
      if (p === '/api/yaml')
        return send(res, 200, stringify(session(b.sid).character), 'text/yaml; charset=utf-8');
      if (p === '/api/save') {
        const S = session(b.sid);
        const file = safeName(b.file || `${S.character.id}.yaml`).replace(/(\.yaml)?$/, '.yaml');
        const path = join(charsDir, file);
        if (existsSync(path) && !b.overwrite && file !== S.file)
          return send(res, 409, { error: `${file} already exists` });
        writeFileSync(path, stringify(S.character));
        S.file = file;
        return send(res, 200, { saved: `examples/characters/${file}` });
      }
      return send(res, 404, { error: 'not found' });
    } catch (e) {
      return send(res, 500, { error: e instanceof Error ? e.message : String(e) });
    }
  });

  server.listen(port, '127.0.0.1', () => {
    const url = `http://127.0.0.1:${port}/`;
    console.log(`${title}: ${url}  (Ctrl+C to stop)`);
    if (!argv.includes('--no-open'))
      exec(
        process.platform === 'win32'
          ? `start "" "${url}"`
          : process.platform === 'darwin'
            ? `open "${url}"`
            : `xdg-open "${url}"`,
      );
  });
}
