// What only the SagaS sheet's pages need from the server, as routes of the universal tools'
// server (universal-lib.ts): the data each mode's page builds on (characteristics, skills, weapons and armor as
// the pack's files write them, their names, the technological levels…) and sagas-create's random
// character. Everything else (computing the sheet, running actions, files) is the universal
// server's stateless calls.

import { computeSheet } from '../../../packages/engine/src/index.ts';
import { loadPack, packMessages } from '../universal-lib.ts';
import { parse } from 'yaml';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const PACK = 'sagas-core';
const packDir = join(import.meta.dirname, '..', '..', '..', 'packs', 'sagas', 'core');
const names = packMessages(PACK) as Record<string, string>;
const nameOf = (key: string) => names[`${key}.name`] ?? key;
const key = (field: string) => `${PACK}:${field}`;

type Item = { id: string; name: string; fields: Record<string, unknown> };
/** A content folder's items as their files write them (local references), by name. */
const readContent = (folder: string): Item[] =>
  readdirSync(join(packDir, 'content', folder))
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => parse(readFileSync(join(packDir, 'content', folder, f), 'utf8')))
    .map((c) => ({ id: c.id, name: nameOf(c.id), fields: c.fields ?? {} }))
    .toSorted((a, b) => a.name.localeCompare(b.name));

const CHARS = ['str', 'agi', 'end', 'dex', 'wit', 'wil', 'pre', 'ins'];
const SECONDARY = ['cco', 'rco', 'spd', 'ini'];
const skills = readContent('skills');
const weapons = readContent('weapons');
const armors = readContent('armor');
// The universe's technological levels, TL0 to TL8, by their names.
const techLevels = Array.from({ length: 9 }, (_, n) =>
  nameOf(`actions.set-tech-level.options.${n}`),
);

/** sagas-create's data. */
const createData = {
  pack: PACK,
  chars: CHARS.map((c) => ({ key: `chars.${c}`, name: nameOf(`fields.chars.${c}`) })),
  secondary: SECONDARY.map((c) => ({ key: c, name: nameOf(`fields.sec.${c}`) })),
  skills,
  weapons,
  armors,
  techLevels,
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

/** sagas-play's data. */
const playData = {
  pack: PACK,
  chars: CHARS.map((c) => ({ key: `chars.${c}`, name: nameOf(`fields.chars.${c}`) })),
  secondary: SECONDARY.map((c) => ({ key: `sec.${c}`, name: nameOf(`fields.sec.${c}`) })),
  situational: Object.keys(loadPack(PACK).ruleset.rules?.situational ?? {})
    .filter((q) => q.startsWith(`${PACK}:`))
    .map((q) => {
      const id = q.slice(PACK.length + 1);
      return { id, name: nameOf(`situational.${id}`) };
    }),
  bands: Object.fromEntries(
    ['natural-two', 'natural-twelve', 'success', 'automatic-failure', 'failure'].map((b) => [
      b,
      nameOf(`bands.degree.${b}`),
    ]),
  ),
  items: Object.fromEntries([...skills, ...weapons, ...armors].map((i) => [key(i.id), i])),
  techLevels,
};

// --- sagas-create's random character ------------------------------------------------------------
type Character = {
  specVersion: string;
  id: string;
  packs: { id: string; version: string }[];
  values: Record<string, number>;
  features: { id: string; item: string; state: { learning: number } }[];
  inventory: { id: string; item: string; equipped: boolean }[];
};
const stdId = (qid: string) => qid.replace(':', '-').replace(/\./g, '-');
const standard = new Set(
  skills.filter((s) => !s.fields.generic && !s.fields.variableBase).map((s) => key(s.id)),
);
// The points left, alone (asked at every step).
const remaining = (ch: Character) =>
  (
    computeSheet(loadPack(PACK).ruleset, ch as never) as unknown as {
      values: Record<string, { value: unknown }>;
    }
  ).values[key('points.remaining')]?.value as number;
const pick = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)]!;
const addGear = (ch: Character, item: Item) => {
  let local = item.id.split('.')[1] ?? item.id;
  while (ch.inventory.some((i) => i.id === local)) local += '-2';
  ch.inventory.push({ id: local, item: key(item.id), equipped: true });
};
/** Skills and gear exist from their technological level on. */
const inUniverse = (item: Item, tl: number) => Number(item.fields.techLevel ?? 0) <= tl;

/** Same roll as sagas-create-cli.ts --random, among the skills and gear of the universe's level. */
function randomCharacter(points: number, id: string, tl: number): Character {
  const ch: Character = {
    specVersion: '0.4.0',
    id,
    packs: [{ id: PACK, version: '0.1.0' }],
    values: { [key('creation.points')]: points, [key('universe.techLevel')]: tl },
    features: [],
    inventory: [],
  };
  const ok = (list: Item[]) => list.filter((s) => inUniverse(s, tl));
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
  const chosen = ok(skills)
    .filter((s) => standard.has(key(s.id)))
    .toSorted(() => Math.random() - 0.5)
    .slice(0, 4 + Math.floor(Math.random() * 5));
  for (const sk of chosen)
    ch.features.push({
      id: stdId(key(sk.id)),
      item: key(sk.id),
      state: { learning: Number(sk.fields.base ?? 0) },
    });
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
  const usable = ok(weapons).filter((w) =>
    ch.features.some((f) => f.item === key(String(w.fields.skill))),
  );
  if (ok(weapons).length) addGear(ch, pick(usable.length ? usable : ok(weapons)));
  // A light protection: leather or kevlar, else any of the universe.
  const light = ok(armors).filter((a) => /leather|kevlar/.test(a.id));
  if (ok(armors).length) addGear(ch, pick(light.length ? light : ok(armors)));
  return ch;
}

/** The SagaS sheet's routes (sagas.ts): each mode's data (`?for=create|play`), a random character. */
export const sheetRoutes = (path: string, query: URLSearchParams) => {
  if (path === '/api/data') return query.get('for') === 'play' ? playData : createData;
  if (path === '/api/random') {
    const points = Number(query.get('points') ?? 150);
    const tl = Math.min(8, Math.max(0, Number(query.get('tl') ?? 2) || 0));
    return randomCharacter(points, query.get('id') || `sagas-${Date.now().toString(36)}`, tl);
  }
  return undefined;
};
