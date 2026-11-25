// SagaS character creation in the browser.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/sagas-create.ts [--port 5174]
//
// A small local server (127.0.0.1 only) serves sagas-create.html and runs the engine: the page sends
// the character, the server sends back the computed sheet. Costs come from the pack's formulas
// (points.remaining); no rule is recoded here.
import { computeSheet, loadRuleset } from '../../../packages/engine/src/index.ts';
import { readPack } from '../../../packages/engine/test/packs.ts';
import { hiddenCopies, hiddenItems } from '../display-lib.ts';
import { parse, stringify } from 'yaml';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { join } from 'node:path';
import { exec } from 'node:child_process';

const PACK = 'sagas-core';
const root = process.cwd();
const packDir = join(root, 'packs', 'sagas', 'core');
const charDir = join(root, 'examples', 'characters', 'extensions');
const pagePath = join(import.meta.dirname, 'sagas-create.html');
const portArg = process.argv.indexOf('--port');
const port = portArg >= 0 ? Number(process.argv[portArg + 1]) : 5174;

// --- Pack --------------------------------------------------------------------------------------
const loaded = loadRuleset([readPack(packDir)]);
if (!loaded.ok) {
  console.log(loaded.errors);
  process.exit(1);
}
const ruleset = loaded.ruleset;
const names: Record<string, string> = parse(readFileSync(join(packDir, 'i18n', 'en.yaml'), 'utf8'));
const nameOf = (key: string) => names[`${key}.name`] ?? key;

type Item = { id: string; name: string; fields: Record<string, unknown> };
const readContent = (folder: string): Item[] =>
  readdirSync(join(packDir, 'content', folder))
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => parse(readFileSync(join(packDir, 'content', folder, f), 'utf8')))
    .map((c) => ({ id: c.id, name: nameOf(c.id), fields: c.fields ?? {} }))
    .toSorted((a, b) => a.name.localeCompare(b.name));

const CHARS = ['str', 'agi', 'end', 'dex', 'wit', 'wil', 'pre', 'ins'];
const SECONDARY = ['cco', 'rco', 'spd', 'ini'];
const data = {
  pack: PACK,
  chars: CHARS.map((c) => ({ key: `chars.${c}`, name: nameOf(`fields.chars.${c}`) })),
  secondary: SECONDARY.map((c) => ({ key: c, name: nameOf(`fields.sec.${c}`) })),
  skills: readContent('skills'),
  weapons: readContent('weapons'),
  armors: readContent('armor'),
  // The universe's technological levels, TL0 to TL8, by their names.
  techLevels: Array.from({ length: 9 }, (_, n) => nameOf(`actions.set-tech-level.options.${n}`)),
  // Constraint messages, by constraint ID.
  constraints: Object.fromEntries(
    Object.entries(names)
      .filter(([k]) => k.startsWith('constraints.'))
      .map(([k, v]) => [k.slice('constraints.'.length), v]),
  ),
  fieldNames: Object.fromEntries(
    [...CHARS.map((c) => `chars.${c}`), ...SECONDARY.map((c) => `sec.${c}`)].map((k) => [
      k,
      nameOf(`fields.${k}`),
    ]),
  ),
};

// --- Character --------------------------------------------------------------------------------
type Feature = { id: string; item: string; state: { learning: number } };
type Gear = { id: string; item: string; equipped: boolean };
type Character = {
  specVersion: string;
  id: string;
  packs: { id: string; version: string }[];
  values: Record<string, number>;
  features: Feature[];
  inventory: Gear[];
};
const key = (field: string) => `${PACK}:${field}`;

// A skill that isn't generic is a standard copy on every sheet; its copy's ID is fixed: the
// qualified ID with hyphens (sagas-core-skills-dodge). Older files named it freely ("dodge"):
// they are renamed when loaded.
const stdId = (qid: string) => qid.replace(':', '-').replace(/\./g, '-');
const standard = new Set(
  data.skills.filter((s) => !s.fields.generic && !s.fields.variableBase).map((s) => key(s.id)),
);
const adopt = <T extends { features?: { id: string; item: string }[] }>(ch: T): T => {
  for (const f of ch.features ?? []) if (standard.has(f.item)) f.id = stdId(f.item);
  return ch;
};

const compute = (ch: Character) => {
  const s = computeSheet(ruleset, ch as never) as unknown as {
    values: Record<string, { value: unknown }>;
    copies: Record<string, Record<string, unknown>>;
    issues?: unknown[];
    errors?: unknown[];
  };
  const values: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(s.values)) values[k.replace(`${PACK}:`, '')] = v.value;
  // What the pack's display hints hide: copies (skills above the universe's technological
  // level, never raised), and items that would be once held: gear above it (all of it, as the
  // page offers gear whether carried or not) and generic skills not learned.
  const held = new Set((ch.features ?? []).map((c) => c.item));
  const candidates = [
    ...data.skills.filter((sk) => !standard.has(key(sk.id)) && !held.has(key(sk.id))),
    ...data.weapons,
    ...data.armors,
  ].map((i) => key(i.id));
  return {
    values,
    copies: s.copies,
    issues: [...(s.errors ?? []), ...(s.issues ?? [])],
    hidden: [...hiddenCopies(s)],
    hiddenItems: [...hiddenItems(ruleset, ch, s, candidates)],
  };
};
// The points left, alone (the random roll asks it at every step: no display hints needed).
const remaining = (ch: Character) =>
  (computeSheet(ruleset, ch as never) as unknown as { values: Record<string, { value: unknown }> })
    .values[key('points.remaining')]?.value as number;

const pick = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)]!;
const addGear = (ch: Character, item: Item) => {
  let local = item.id.split('.')[1] ?? item.id;
  while (ch.inventory.some((i) => i.id === local)) local += '-2';
  ch.inventory.push({ id: local, item: key(item.id), equipped: true });
};

/** Skills and gear exist from their technological level on. */
const inUniverse = (item: Item, tl: number) => Number(item.fields.techLevel ?? 0) <= tl;

/** Same roll as sagas-create-cli.ts --random, among the skills and gear of the universe's level. */
const randomCharacter = (points: number, id: string, tl: number): Character => {
  const ch: Character = {
    specVersion: '0.4.0',
    id,
    packs: [{ id: PACK, version: '0.1.0' }],
    values: { [key('creation.points')]: points, [key('universe.techLevel')]: tl },
    features: [],
    inventory: [],
  };
  const skills = data.skills.filter((s) => inUniverse(s, tl));
  const weapons = data.weapons.filter((w) => inUniverse(w, tl));
  const armors = data.armors.filter((a) => inUniverse(a, tl));
  for (const c of CHARS) ch.values[key(`chars.${c}`)] = 5;
  const budget = remaining(ch);
  let fails = 0;
  while (remaining(ch) > budget / 2 && fails < 50) {
    const k = key(`chars.${pick(CHARS)}`);
    const before = ch.values[k] ?? 5;
    if (before >= 15) {
      fails++;
      continue;
    }
    ch.values[k] = before + 1;
    if (remaining(ch) < budget / 2) {
      ch.values[k] = before;
      fails++;
    }
  }
  // Generic skills are left out: they need a specialty, which only the player can name. The
  // others are standard copies, saved once raised.
  const chosen = skills
    .filter((s) => standard.has(key(s.id)))
    .toSorted(() => Math.random() - 0.5)
    .slice(0, 4 + Math.floor(Math.random() * 5));
  for (const sk of chosen) {
    ch.features.push({
      id: stdId(key(sk.id)),
      item: key(sk.id),
      state: { learning: Number(sk.fields.base ?? 0) },
    });
  }
  fails = 0;
  while (fails < 50) {
    const f = pick(ch.features);
    const before = f.state.learning;
    // Steps of 5 below 0 (-15, -10, -5, 0), then 1 by 1.
    f.state.learning = before < 0 ? before + 5 : before + 1;
    if (remaining(ch) < 0) {
      f.state.learning = before;
      fails++;
    }
  }
  const usable = weapons.filter((w) =>
    ch.features.some((f) => f.item === key(String(w.fields.skill))),
  );
  if (weapons.length) addGear(ch, pick(usable.length ? usable : weapons));
  // A light protection: leather or kevlar, else any of the universe.
  const light = armors.filter((a) => /leather|kevlar/.test(a.id));
  if (armors.length) addGear(ch, pick(light.length ? light : armors));
  return ch;
};

// --- HTTP --------------------------------------------------------------------------------------
const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const body = (req: IncomingMessage) =>
  new Promise<any>((res, rej) => {
    let s = '';
    req.on('data', (c) => (s += c));
    req.on('end', () => {
      try {
        res(s ? JSON.parse(s) : {});
      } catch (e) {
        rej(e);
      }
    });
  });
const send = (res: ServerResponse, status: number, payload: unknown, type = 'application/json') => {
  res.writeHead(status, { 'content-type': `${type}; charset=utf-8` });
  res.end(type === 'application/json' ? JSON.stringify(payload) : String(payload));
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  try {
    if (url.pathname === '/') return send(res, 200, readFileSync(pagePath, 'utf8'), 'text/html');
    if (url.pathname === '/api/data') return send(res, 200, data);
    if (url.pathname === '/api/compute' && req.method === 'POST')
      return send(res, 200, compute((await body(req)).character));
    if (url.pathname === '/api/yaml' && req.method === 'POST') {
      return send(res, 200, stringify((await body(req)).character), 'text/plain');
    }
    if (url.pathname === '/api/random') {
      const points = Number(url.searchParams.get('points') ?? 150);
      const tl = Math.min(8, Math.max(0, Number(url.searchParams.get('tl') ?? 2) || 0));
      return send(
        res,
        200,
        randomCharacter(
          points,
          url.searchParams.get('id') || `sagas-${Date.now().toString(36)}`,
          tl,
        ),
      );
    }
    if (url.pathname === '/api/characters') {
      return send(
        res,
        200,
        readdirSync(charDir).filter((f) => f.startsWith('sagas') && f.endsWith('.yaml')),
      );
    }
    if (url.pathname === '/api/load') {
      const file = url.searchParams.get('file') ?? '';
      if (!/^[a-z0-9-]+\.yaml$/.test(file)) return send(res, 400, { error: 'invalid file name' });
      return send(res, 200, adopt(parse(readFileSync(join(charDir, file), 'utf8'))));
    }
    if (url.pathname === '/api/save' && req.method === 'POST') {
      const { character, overwrite } = await body(req);
      if (!ID.test(character?.id ?? ''))
        return send(res, 400, { error: 'invalid ID (lowercase letters, digits, hyphens)' });
      const file = join(charDir, `${character.id}.yaml`);
      if (existsSync(file) && !overwrite) return send(res, 409, { error: 'exists', file });
      mkdirSync(charDir, { recursive: true });
      writeFileSync(file, stringify(character));
      console.log(`Saved: ${file}`);
      return send(res, 200, { file });
    }
    send(res, 404, { error: 'not found' });
  } catch (e) {
    send(res, 500, { error: String(e) });
  }
});

server.listen(port, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${port}/`;
  console.log(`SagaS creation: ${url}  (Ctrl+C or the terminal's trash icon to stop)`);
  const open =
    process.platform === 'win32'
      ? `start "" "${url}"`
      : process.platform === 'darwin'
        ? `open ${url}`
        : `xdg-open ${url}`;
  if (!process.argv.includes('--no-open')) exec(open);
});
