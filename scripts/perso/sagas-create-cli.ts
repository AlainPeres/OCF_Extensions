// SagaS character creation (sagas-core pack) in the terminal, interactive or random.
//
//   node --import tsx --conditions @opencharacter/source scripts/perso/sagas-create-cli.ts [options]
//
// Options:
//   --random          roll a random character (no questions)
//   --points N        creation points: 150, 250 or 350 (default 150)
//   --id ID           character ID (default sagas-<timestamp>)
//   --out FILE        output file (default examples/characters/<id>.yaml)
//
// The engine computes the point costs (the pack's points.remaining field): this script recodes no
// rule, it only fills in the character file.
import { computeSheet, loadRuleset } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse, stringify } from 'yaml';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const PACK = 'sagas-core';
const packDir = join(process.cwd(), 'packs', 'sagas', 'core');

// --- Arguments ---------------------------------------------------------------------------------
const argv = process.argv.slice(2);
const opt = (name: string) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const random = argv.includes('--random');

// --- Pack: rules, content and names ------------------------------------------------------------
const r = loadRuleset([readPack(packDir)]);
if (!r.ok) {
  console.log(r.errors);
  process.exit(1);
}
const ruleset = r.ruleset;
const names: Record<string, string> = parse(readFileSync(join(packDir, 'i18n', 'en.yaml'), 'utf8'));
const nameOf = (key: string) => names[`${key}.name`] ?? key;

type Item = { id: string; name: string; fields: Record<string, any> };
const readContent = (folder: string): Item[] =>
  readdirSync(join(packDir, 'content', folder))
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => parse(readFileSync(join(packDir, 'content', folder, f), 'utf8')))
    .map((c) => ({ id: c.id, name: nameOf(c.id), fields: c.fields ?? {} }));
const skills = readContent('skills');
const weapons = readContent('weapons');
const armors = readContent('armor');

const CHARS = ['str', 'agi', 'end', 'dex', 'wit', 'wil', 'pre', 'ins'];
const SECONDARY = ['cco', 'rco', 'spd', 'ini'];

// --- Character ---------------------------------------------------------------------------------
const id = opt('id') ?? `sagas-${Date.now().toString(36)}`;
type Feature = {
  id: string;
  item: string;
  state: { learning: number; specialty?: string; initial?: number };
};
type Gear = { id: string; item: string; equipped: boolean };
const ch = {
  specVersion: '0.4.0',
  id,
  packs: [{ id: PACK, version: '0.1.0' }],
  values: {} as Record<string, number | string>,
  features: [] as Feature[],
  inventory: [] as Gear[],
};
const key = (field: string) => `${PACK}:${field}`;
const get = (field: string, def = 0): number => Number(ch.values[key(field)] ?? def);
const set = (field: string, v: number | string) => (ch.values[key(field)] = v);

const sheet = (): any => computeSheet(ruleset, ch);
const value = (s: any, field: string) => s.values[key(field)]?.value;
const remaining = () => value(sheet(), 'points.remaining') as number;

/** A generic skill is learned once per specialty; any other skill once. */
const addSkill = (item: Item, learning: number, specialty = '', initial?: number) => {
  const local = item.id.replace('skills.', '');
  const slug = specialty
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const existing = ch.features.find(
    (f) => f.item === `${PACK}:${item.id}` && (f.state.specialty ?? '') === specialty,
  );
  if (existing) {
    existing.state.learning = learning;
    if (initial !== undefined) existing.state.initial = initial;
    return;
  }
  let featureId = slug ? `${local}-${slug}` : local;
  for (let n = 2; ch.features.some((f) => f.id === featureId); n++)
    featureId = `${slug ? `${local}-${slug}` : local}-${n}`;
  const state: Feature['state'] = { learning };
  if (specialty) state.specialty = specialty;
  if (initial !== undefined) state.initial = initial;
  ch.features.push({ id: featureId, item: `${PACK}:${item.id}`, state });
};
const addGear = (item: Item) => {
  let local = item.id.split('.')[1] ?? item.id;
  while (ch.inventory.some((i) => i.id === local)) local += '-2';
  ch.inventory.push({ id: local, item: `${PACK}:${item.id}`, equipped: true });
};

// --- Display -----------------------------------------------------------------------------------
const summary = () => {
  const s = sheet();
  const v = (f: string) => value(s, f);
  const who = [v('identity.name'), v('identity.species'), v('identity.profession')]
    .filter(Boolean)
    .join(', ');
  console.log(
    `\n=== ${who || id}: ${v('points.spent')} points spent of ${v('points.budget')}, ${v('points.remaining')} left ===`,
  );
  console.log(CHARS.map((c) => `${nameOf(`fields.chars.${c}`)} ${v(`chars.${c}`)}`).join(' | '));
  console.log(SECONDARY.map((c) => `${nameOf(`fields.sec.${c}`)} ${v(`sec.${c}`)}`).join(' | '));
  console.log(
    `Hit points: physical ${v('hp.physical.max')}, psychical ${v('hp.psychical.max')} | shock ${v('shock.physical')}/${v('shock.psychical')} | Reflex Dodge ${v('dodge.reflex')}`,
  );
  if (ch.features.length) {
    console.log(
      'Skills: ' +
        ch.features
          .map(
            (f) =>
              `${nameOf(f.item.replace(`${PACK}:`, ''))}${f.state.specialty ? ` (${f.state.specialty})` : ''} ${f.state.learning}`,
          )
          .join(', '),
    );
  }
  if (ch.inventory.length) {
    console.log(
      'Equipment: ' + ch.inventory.map((i) => nameOf(i.item.replace(`${PACK}:`, ''))).join(', '),
    );
  }
  const issues = [...(s.errors ?? []), ...(s.issues ?? [])];
  if (issues.length) console.log('Issues:', JSON.stringify(issues, null, 1));
};

// --- Random mode -------------------------------------------------------------------------------
const pick = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)]!;

const randomCharacter = () => {
  // 5 everywhere (free), then small purchases while the budget holds.
  for (const c of CHARS) set(`chars.${c}`, 5);
  // About half the points in characteristics.
  const budget = remaining();
  let fails = 0;
  while (remaining() > budget / 2 && fails < 50) {
    const c = `chars.${pick(CHARS)}`;
    const before = get(c, 5);
    if (before >= 15) {
      fails++;
      continue;
    }
    set(c, before + 1);
    if (remaining() < budget / 2) {
      set(c, before);
      fails++;
    }
  }
  // The rest in 4 to 8 skills.
  // Generic skills are left out: they need a specialty, which only the player can name.
  const chosen = skills
    .filter((s) => !s.fields.generic)
    .toSorted(() => Math.random() - 0.5)
    .slice(0, 4 + Math.floor(Math.random() * 5));
  for (const sk of chosen) addSkill(sk, sk.fields.base ?? 0);
  fails = 0;
  while (fails < 50) {
    const f = pick(ch.features);
    const before = f.state.learning;
    // Steps of 5 below 0 (-15, -10, -5, 0), then 1 by 1.
    f.state.learning = before < 0 ? before + 5 : before + 1;
    if (remaining() < 0) {
      f.state.learning = before;
      fails++;
    }
  }
  // A weapon of a chosen skill (if any) and a light protection.
  const usable = weapons.filter((w) =>
    ch.features.some((f) => f.item === `${PACK}:${w.fields.skill}`),
  );
  addGear(pick(usable.length ? usable : weapons));
  addGear(pick(armors.filter((a) => /leather|kevlar/.test(a.id))));
};

// --- Interactive mode --------------------------------------------------------------------------
// Lines read are queued, so nothing is lost when the input is piped.
const rl = random
  ? undefined
  : createInterface({ input: stdin, output: stdout, terminal: stdin.isTTY });
const lines: string[] = [];
const waiting: ((l: string | undefined) => void)[] = [];
let closed = false;
rl?.on('line', (l) => (waiting.length ? waiting.shift()!(l) : lines.push(l)));
// Stop: "q" at any question, or Ctrl+C (caught by readline or by the process).
const stop = (): never => {
  console.log('\nInterrupted, nothing was saved.');
  process.exit(130);
};
rl?.on('SIGINT', stop);
process.on('SIGINT', stop);
rl?.on('close', () => {
  closed = true;
  waiting.splice(0).forEach((w) => w(undefined));
});
const ask = async (q: string, def?: string) => {
  stdout.write(def !== undefined && def !== '' ? `${q} [${def}] ` : `${q} `);
  const l = lines.length
    ? lines.shift()
    : closed
      ? undefined
      : await new Promise<string | undefined>((res) => waiting.push(res));
  if (l === undefined) {
    console.log('\nInput ended, giving up.');
    process.exit(1);
  }
  if (!stdin.isTTY) console.log(l);
  const a = l.trim();
  if (/^(q|quit)$/i.test(a)) stop();
  return a === '' ? (def ?? '') : a;
};
const askInt = async (q: string, def: number, min = -Infinity, max = Infinity): Promise<number> => {
  for (;;) {
    const n = Number(await ask(q, String(def)));
    if (Number.isInteger(n) && n >= min && n <= max) return n;
    console.log(`  Expected a whole number between ${min} and ${max}.`);
  }
};
/** Free text; an empty answer keeps the field out of the file. */
const askText = async (field: string, def = '') => {
  const a = await ask(`${nameOf(`fields.identity.${field}`)}:`, def);
  if (a && a !== def) set(`identity.${field}`, a);
};
const search = async (label: string, list: Item[]): Promise<Item | undefined> => {
  for (;;) {
    const q = (await ask(`${label} (text to search, empty to finish):`)).toLowerCase();
    if (!q) return undefined;
    const found = list.filter((i) => i.name.toLowerCase().includes(q) || i.id.includes(q));
    if (!found.length) {
      console.log('  Nothing found.');
      continue;
    }
    found.slice(0, 20).forEach((i, n) => console.log(`  ${n + 1}. ${i.name} (${i.id})`));
    if (found.length > 20) console.log(`  … ${found.length - 20} more, narrow the search.`);
    const n = await askInt(
      '  Number (0 to search again):',
      found.length === 1 ? 1 : 0,
      0,
      Math.min(found.length, 20),
    );
    if (n > 0) return found[n - 1];
  }
};

const interactiveCharacter = async () => {
  console.log('\n--- Identity (empty to skip) ---');
  await askText('name');
  await askText('species', 'Human');
  await askText('profession');
  await askText('description');
  await askText('background');
  const possessions: string[] = [];
  for (;;) {
    const p = await ask(
      possessions.length
        ? '  Another possession (empty to finish):'
        : 'Possessions besides weapons and protections, one at a time (empty to finish):',
    );
    if (!p) break;
    possessions.push(p);
  }
  if (possessions.length) set('identity.possessions', possessions.join('\n'));

  console.log(
    '\n--- Characteristics (5 is free; cost per point 3/6/12/24/48 by the final value) ---',
  );
  for (const c of CHARS) {
    set(`chars.${c}`, await askInt(`${nameOf(`fields.chars.${c}`)}:`, get(`chars.${c}`, 5), 0, 40));
    console.log(`  ${remaining()} points left`);
  }

  console.log('\n--- Secondary characteristic bonuses (cost x3) ---');
  const s = sheet();
  for (const c of SECONDARY) {
    const b = await askInt(
      `${nameOf(`fields.sec.${c}`)} (base ${value(s, `raw.${c}`)}), bonus:`,
      get(`creation.${c}`),
      0,
    );
    if (b) set(`creation.${c}`, b);
    console.log(`  ${remaining()} points left`);
  }

  console.log('\n--- Skills ---');
  for (;;) {
    const sk = await search('Skill', skills);
    if (!sk) break;
    let base = sk.fields.base ?? 0;
    let specialty = '';
    while (sk.fields.generic && !specialty) {
      specialty = await ask(`  ${sk.name} is generic: specialty:`);
    }
    // "Other" skills: the initial level is chosen (-15, -10, -5 or 0).
    while (sk.fields.variableBase) {
      const v = await askInt('  Initial level (-15, -10, -5 or 0):', -15, -15, 0);
      if (v % 5 === 0) {
        base = v;
        break;
      }
    }
    let lvl = await askInt(
      `  Learning level (initial ${base}; below 0 only -15, -10 or -5):`,
      base,
      base,
    );
    while (lvl < 0 && lvl % 5 !== 0) {
      console.log('  Below 0 the learning level moves in steps of 5: -15, -10, -5 or 0.');
      lvl = await askInt(`  Learning level (initial ${base}):`, base, base);
    }
    addSkill(sk, lvl, specialty, sk.fields.variableBase ? base : undefined);
    console.log(`  ${remaining()} points left`);
  }

  console.log('\n--- Equipment ---');
  for (;;) {
    const it = await search('Weapon or protection', [...weapons, ...armors]);
    if (!it) break;
    addGear(it);
    console.log(`  added: ${it.name}`);
  }
};

// --- Program -----------------------------------------------------------------------------------
const main = async () => {
  if (random) {
    set('creation.points', Number(opt('points') ?? pick([150, 250, 350])));
    randomCharacter();
  } else {
    console.log(`SagaS character creation (${id}). Type q at any time to quit.`);
    set(
      'creation.points',
      await askInt('Creation points (150, 250 or 350):', Number(opt('points') ?? 150), 0),
    );
    const social = await askInt(
      'Social class: -1 less favored (+10 pts), 0 middle class, 1 privileged (-10 pts):',
      0,
      -1,
      1,
    );
    if (social) set('creation.social', social);
    await interactiveCharacter();
  }

  summary();
  if (remaining() < 0) console.log(`\nWarning: over budget by ${-remaining()} points.`);

  const out = opt('out') ?? join('examples', 'characters', `${id}.yaml`);
  if (rl) {
    const ok = await ask(
      `\nSave to ${out}?${existsSync(out) ? ' (the file exists and will be replaced)' : ''} (y/n)`,
      'y',
    );
    rl.close();
    if (!/^y/i.test(ok)) return;
  }
  writeFileSync(out, stringify(ch));
  console.log(`Saved: ${out}`);
};

await main();
