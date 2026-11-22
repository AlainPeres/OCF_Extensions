// SagaS character sheet in the browser, for play: skill and characteristic rolls, dealing damage
// with a weapon, taking damage, rest.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas-play.ts [--port 5175] [--no-open]
//
// A small local server (127.0.0.1 only) serves sagas-play.html and runs the pack's actions with the
// engine (startAction, random dice); changes an action proposes for the character (injuries, stun)
// are applied with applyChanges. The page saves the character back to examples/characters/extensions/.
import {
  applyChanges,
  computeSheet,
  loadRuleset,
  startAction,
} from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse, stringify } from 'yaml';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { join } from 'node:path';
import { exec } from 'node:child_process';

const PACK = 'sagas-core';
const root = process.cwd();
const packDir = join(root, 'packs', 'sagas', 'core');
const charDir = join(root, 'examples', 'characters', 'extensions');
const pagePath = join(import.meta.dirname, 'sagas-play.html');
const portArg = process.argv.indexOf('--port');
const port = portArg >= 0 ? Number(process.argv[portArg + 1]) : 5175;

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
    .map((c) => ({ id: c.id, name: nameOf(c.id), fields: c.fields ?? {} }));

const CHARS = ['str', 'agi', 'end', 'dex', 'wit', 'wil', 'pre', 'ins'];
const SECONDARY = ['cco', 'rco', 'spd', 'ini'];
const SITUATIONAL = (
  parse(readFileSync(join(packDir, 'rules', 'checks.yaml'), 'utf8')).situational as { id: string }[]
).map((s) => ({
  id: s.id,
  name: nameOf(`situational.${s.id}`),
}));
const data = {
  pack: PACK,
  chars: CHARS.map((c) => ({ key: `chars.${c}`, name: nameOf(`fields.chars.${c}`) })),
  secondary: SECONDARY.map((c) => ({ key: `sec.${c}`, name: nameOf(`fields.sec.${c}`) })),
  situational: SITUATIONAL,
  bands: Object.fromEntries(
    ['natural-two', 'natural-twelve', 'success', 'automatic-failure', 'failure'].map((b) => [
      b,
      nameOf(`bands.degree.${b}`),
    ]),
  ),
  items: Object.fromEntries(
    [...readContent('skills'), ...readContent('weapons'), ...readContent('armor')].map((i) => [
      `${PACK}:${i.id}`,
      i,
    ]),
  ),
};

// --- Engine ------------------------------------------------------------------------------------
type Character = { values?: Record<string, unknown>; [k: string]: unknown };

const sheetOf = (ch: Character) => {
  const s = computeSheet(ruleset, ch as never) as unknown as {
    values: Record<string, { value: unknown }>;
    copies: Record<string, Record<string, unknown>>;
    issues?: unknown[];
    errors?: unknown[];
  };
  const values: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(s.values)) values[k.replace(`${PACK}:`, '')] = v.value;
  return { values, copies: s.copies, issues: [...(s.errors ?? []), ...(s.issues ?? [])] };
};

type LogEntry = {
  step: string;
  kind: string;
  total?: number;
  band?: string;
  bandValue?: number;
  items?: { kind: string; value: number; faces?: { value: number; exploded?: boolean }[] }[];
  summary?: { flags?: { score?: number; modifier?: number } };
};

/** Runs one action; changes it proposes for the character are applied. */
const act = (ch: Character, input: unknown) => {
  const res = startAction(ruleset, ch as never, input as never) as unknown as {
    status: string;
    outcome?: { result: string; data?: Record<string, unknown> };
    proposedChanges?: { to: string; change: unknown }[];
    log?: LogEntry[];
    errors?: unknown[];
    needs?: unknown;
  };
  if (res.status !== 'finished')
    return { result: { status: res.status, errors: res.errors, needs: res.needs }, character: ch };
  const rolls = (res.log ?? [])
    .filter((l) => l.kind === 'dice')
    .map((l) => ({
      step: l.step,
      total: l.total,
      band: l.band,
      degree: l.bandValue,
      score: l.summary?.flags?.score,
      modifier: l.summary?.flags?.modifier,
      parts: (l.items ?? []).map((i) =>
        i.kind === 'dice'
          ? { dice: (i.faces ?? []).map((f) => ({ v: f.value, x: !!f.exploded })) }
          : { flat: i.value },
      ),
    }));
  let character = ch;
  const changes = (res.proposedChanges ?? []).filter((c) => c.to === 'self').map((c) => c.change);
  let applyErrors: unknown;
  if (changes.length) {
    const applied = applyChanges(ruleset, ch as never, changes as never) as unknown as {
      ok: boolean;
      character?: Character;
      errors?: unknown;
    };
    if (applied.ok && applied.character) character = applied.character;
    else applyErrors = applied.errors;
  }
  return {
    result: { status: res.status, outcome: res.outcome, rolls, changes, applyErrors },
    character,
  };
};

// --- HTTP --------------------------------------------------------------------------------------
const FILE = /^[a-z0-9-]+\.yaml$/;
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
    if (url.pathname === '/api/characters') {
      return send(
        res,
        200,
        readdirSync(charDir).filter((f) => f.startsWith('sagas') && FILE.test(f)),
      );
    }
    if (url.pathname === '/api/load') {
      const file = url.searchParams.get('file') ?? '';
      if (!FILE.test(file)) return send(res, 400, { error: 'invalid file name' });
      const character = parse(readFileSync(join(charDir, file), 'utf8'));
      return send(res, 200, { character, sheet: sheetOf(character) });
    }
    if (url.pathname === '/api/sheet' && req.method === 'POST')
      return send(res, 200, sheetOf((await body(req)).character));
    if (url.pathname === '/api/act' && req.method === 'POST') {
      const { character, input } = await body(req);
      const out = act(character, input);
      return send(res, 200, { ...out, sheet: sheetOf(out.character) });
    }
    if (url.pathname === '/api/save' && req.method === 'POST') {
      const { character, file } = await body(req);
      if (!FILE.test(file ?? '')) return send(res, 400, { error: 'invalid file name' });
      mkdirSync(charDir, { recursive: true });
      writeFileSync(join(charDir, file), stringify(character));
      console.log(`Saved: ${join(charDir, file)}`);
      return send(res, 200, { file: join(charDir, file) });
    }
    send(res, 404, { error: 'not found' });
  } catch (e) {
    send(res, 500, { error: String(e) });
  }
});

server.listen(port, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${port}/`;
  console.log(`SagaS play: ${url}  (Ctrl+C or the terminal's trash icon to stop)`);
  const open =
    process.platform === 'win32'
      ? `start "" "${url}"`
      : process.platform === 'darwin'
        ? `open ${url}`
        : `xdg-open ${url}`;
  if (!process.argv.includes('--no-open')) exec(open);
});
