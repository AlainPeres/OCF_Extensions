// The SagaS bestiary (scripts/extensions/sagas/SagaS_Creatures.md, Open Game Content for SagaS
// 0.995 LLL) into the sagas-core pack: content/creatures/*.yaml (each creature's characteristics,
// base Speed, protection, skills as learning levels, attacks and their scores), its attacks as
// natural weapons (content/weapons/cr-*.yaml), and the texts (i18n/en/creatures.yaml: each
// creature's name, and the rest of its stat block as its description). Run it again after
// changing the bestiary; it replaces those files and reports what the pack can't keep as written
// (a learning level below 0 that isn't a step of 5, a skill below its initial level).
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/bestiary-import.mjs [--check]
//
// --check: instead, runs each creature through the pack's creature start and compares its sheet
// with the bestiary (derived values, Reflex Dodge, attack scores), and lists its rules issues.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { parse, stringify } from 'yaml';

const PACK = 'packs/sagas/core';
const BESTIARY = 'scripts/extensions/sagas/SagaS_Creatures.md';

/** A table row's cells. */
const cells = (l) =>
  l
    .split('|')
    .slice(1, -1)
    .map((c) => c.trim());
// A number as the bestiary writes it, the first of several ("11 (immune)", "18 / 10").
const first = (s) => Number(String(s).trim().replace(/^\+/, '').split(/[\s/]/)[0]);

/** One record per creature: its part and group, its tables, lines and lists, as written. */
function parseBestiary() {
  const md = readFileSync(BESTIARY, 'utf8').replace(/\r\n/g, '\n');
  const lines = md.split('\n');
  const creatures = [];
  let part = '',
    group = '',
    cur = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith('## Part ')) {
      part = l.replace(/^## /, '');
      continue;
    }
    if (l.startsWith('### ')) {
      group = l.replace(/^### /, '');
      continue;
    }
    if (l.startsWith('#### ')) {
      cur = {
        name: l.replace(/^#### /, ''),
        part,
        group,
        text: [],
        attacks: [],
        special: [],
        variants: [],
        other: [],
      };
      creatures.push(cur);
      continue;
    }
    if (!cur) continue;
    cur.text.push(l);
  }
  for (const c of creatures) {
    const t = c.text;
    const desc = t.map((l) => l.trim()).find((l) => /^_[^_].*_$/.test(l) || /^\*[^*].*\*$/.test(l));
    c.description = desc?.slice(1, -1);
    const meta = t.find((l) => l.startsWith('**Type:**'));
    c.meta = meta;
    for (const m of (meta ?? '').split('·')) {
      const mm = /\*\*(\w[\w ]*):\*\*\s*(.*)/.exec(m.trim());
      if (mm) c[mm[1].toLowerCase()] = mm[2].trim();
    }
    // Tables: header line then separator then rows.
    const tables = [];
    for (let i = 0; i < t.length; i++)
      if (t[i].startsWith('|') && /^\|\s*:?-/.test(t[i + 1] ?? '')) {
        const head = cells(t[i]);
        const rows = [];
        for (let j = i + 2; t[j]?.startsWith('|'); j++) rows.push(cells(t[j]));
        tables.push({ head, rows });
      }
    c.tables = tables;
    const chars = tables.find((x) => x.head[0] === 'STR');
    c.chars = chars ? Object.fromEntries(chars.head.map((h, i) => [h, chars.rows[0][i]])) : null;
    const der = tables.find((x) => x.head[0] === 'INI');
    c.derived = der ? Object.fromEntries(der.head.map((h, i) => [h, der.rows[0][i]])) : null;
    const att = tables.find((x) => x.head[0] === 'Attack');
    c.attacks = att
      ? att.rows.map((r) => Object.fromEntries(att.head.map((h, i) => [h, r[i]])))
      : [];
    const line = (k) =>
      t
        .find((l) => l.startsWith(`**${k}:**`))
        ?.replace(`**${k}:**`, '')
        .trim();
    c.speed = line('Speed');
    c.reflex = line('Reflex Dodge');
    c.skills = line('Skills');
    // Bullet sections.
    let sec = null;
    for (const l of t) {
      const h = /^\*\*([A-Za-z ]+)\*\*\s*$/.exec(l);
      if (h) {
        sec = h[1];
        continue;
      }
      if (l.startsWith('- ') && sec) (c[sec.toLowerCase()] ??= []).push(l.slice(2));
      else if (l.startsWith('**') && !/^\*\*(Type|Speed|Reflex Dodge|Skills):/.test(l) && !h)
        c.other.push(l);
    }
    delete c.text;
    delete c.tables;
  }
  return creatures;
}
const creatures = parseBestiary();
if (process.argv.includes('--check')) {
  await check(creatures);
  process.exit(0);
}
const report = [];

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
// A number as the bestiary writes it: "+2", "-1", or the first of several ("18 / 10": flying,
// then on the ground).
const num = (s) =>
  Number(
    String(s)
      .trim()
      .replace(/^\+/, '')
      .split(/\s*\/\s*/)[0],
  );

// The pack's skills: local ID -> characteristic, base, generic.
const skills = {};
for (const f of readdirSync(`${PACK}/content/skills`)) {
  const s = parse(readFileSync(`${PACK}/content/skills/${f}`, 'utf8'));
  skills[s.id.slice('skills.'.length)] = s.fields;
}
// The bestiary's skill names -> the pack's; Flight has none, so it is "Other (Agility)".
const SKILL = {
  Dodge: 'dodge',
  Perception: 'perception',
  Stealth: 'stealth',
  Run: 'run',
  Intimidation: 'intimidation',
  Swimming: 'swimming',
  Tracking: 'tracking',
  Climb: 'climb',
  Flight: 'other-agi',
  Persuasion: 'persuasion',
  Survival: 'survival',
  'Physical Resistance': 'physical-resistance',
  Jump: 'jump',
  Occultism: 'occultism',
  'Mental Resistance': 'mental-resistance',
  Shield: 'shield',
  Handcrafts: 'handcrafts',
  Command: 'command',
  Charm: 'charm',
  Music: 'music',
  Mechanical: 'mechanical',
  'Mind games': 'mind-games',
  Bluff: 'bluff',
  Psychology: 'psychology',
};
const CHAR = {
  'chars.str': 'STR',
  'chars.agi': 'AGI',
  'chars.end': 'END',
  'chars.dex': 'DEX',
  'chars.wit': 'WIT',
  'chars.wil': 'WIL',
  'chars.pre': 'PRE',
  'chars.ins': 'INS',
  'sec.cco': 'CCO',
  'sec.rco': 'RCO',
  'sec.spd': 'SPD',
};
const CATEGORY = {
  'Part I: Animals': 'animal',
  'Part II: Fantasy Peoples': 'people',
  'Part III: The Undead': 'undead',
  'Part IV: Mythological and Fantastic Monsters': 'monster',
};
const RANGED_NAME = /bow|crossbow|sling|javelin|boulder|spit|breath|blast|thrown/i;

// --- Attacks: one natural weapon per name, damage bonus, DMAX, kind and range -------------------
const weapons = new Map();
const weaponOf = (c, a) => {
  const strBonus = num(/STR bonus:\*\*\s*([+-]?\d+)/.exec(c.speed)?.[1] ?? '0');
  const dmg = num(a.Dmg);
  const total = num(a.Total);
  const range = /range UT (\d+)/i.exec(a.Notes)?.[1];
  // Damage without the Strength bonus (a shot, a breath, a touch that ignores it) is "ranged":
  // the damage action adds the Strength bonus to melee attacks only.
  const melee = strBonus !== 0 ? total === dmg + strBonus : !(range || RANGED_NAME.test(a.Attack));
  if (strBonus !== 0 && total !== dmg + strBonus && total !== dmg)
    report.push(`${c.name}: ${a.Attack} total ${a.Total} isn't Dmg ${a.Dmg} (+ STR ${strBonus})`);
  const name = a.Attack.replace(/\s*\(.*\)$/, '');
  const id = `weapons.cr-${slug(name)}-${dmg < 0 ? 'm' + -dmg : dmg}-${num(a.DMAX)}${melee ? '' : `-r${range ?? 0}`}`;
  if (!weapons.has(id))
    weapons.set(id, {
      id,
      name,
      fields: {
        kind: melee ? 'melee' : 'ranged',
        damageBonus: dmg,
        dmax: num(a.DMAX),
        ...(range ? { range: Number(range) } : {}),
        natural: true,
      },
    });
  return id;
};

// --- Creatures ---------------------------------------------------------------------------------
const items = [];
const texts = {};
const seen = new Set();
for (const c of creatures) {
  let id = `creatures.${slug(c.name)}`;
  if (seen.has(id)) throw new Error('duplicate ' + id);
  seen.add(id);
  const ch = Object.fromEntries(Object.entries(c.chars).map(([k, v]) => [k, num(v)]));
  const d = c.derived;
  const val = { ...ch, CCO: num(d.CCO), RCO: num(d.RCO), SPD: num(d.SPD) };
  const base = num(/base (\d+)/.exec(c.speed)?.[1] ?? NaN);
  if (Number.isNaN(base)) report.push(`${c.name}: no base speed`);
  const fields = {
    category: CATEGORY[c.part],
    // "Low (Moderate in packs)": the first word; the rest stays in the description.
    threat: c.threat.split(/\s/)[0].toLowerCase(),
    size: c.size,
    str: ch.STR,
    agi: ch.AGI,
    end: ch.END,
    dex: ch.DEX,
    wit: ch.WIT,
    wil: ch.WIL,
    pre: ch.PRE,
    ins: ch.INS,
    speed: base,
    protection: num(d['Prot.']),
    skillNames: [],
    skillLearning: [],
    genericSkills: [],
    genericSpecialties: [],
    genericInitial: [],
    genericLearning: [],
    attacks: [],
    attackScores: [],
  };
  if (!fields.category) throw new Error('category of ' + c.part);
  for (const raw of c.skills.split(/,(?![^(]*\))/).map((s) => s.trim())) {
    const m = /^(.+?)(?:\s*\(([^)]*)\))?\s+(-?\d+)(?:\s*\(([^)]*)\))?$/.exec(raw);
    if (!m) {
      report.push(`${c.name}: skill "${raw}" unread`);
      continue;
    }
    const [, name, before, total, after] = m;
    const local = SKILL[name.trim()];
    if (!local) {
      report.push(`${c.name}: no skill for "${name}"`);
      continue;
    }
    const s = skills[local];
    const charValue = val[CHAR[s.characteristic]];
    let learning = Number(total) - charValue;
    // Below 0 the learning level moves in steps of 5: the nearest step, never below the initial
    // level.
    const step = (l, initial) => {
      if (l >= 0 || l % 5 === 0) return l;
      const near = Math.max(initial, Math.round(l / 5) * 5) || 0;
      report.push(
        `${c.name}: ${name} ${total} needs learning ${l}, not a step of 5: ${near} (total ${charValue + near})`,
      );
      return near;
    };
    if (s.generic) {
      // The specialty: the bestiary's word in brackets, Flight's own name, or "General".
      const specialty = name.trim() === 'Flight' ? 'Flight' : before || after || 'General';
      // A variable initial level (an "Other" skill): the highest that the learning level reaches.
      let initial = s.variableBase
        ? ([0, -5, -10, -15].find((x) => x <= learning) ?? -15)
        : (s.base ?? 0);
      learning = step(learning, initial);
      if (learning < initial) report.push(`${c.name}: ${name} ${total} below its initial level`);
      fields.genericSkills.push(`skills.${local}`);
      fields.genericSpecialties.push(specialty);
      fields.genericInitial.push(initial);
      fields.genericLearning.push(learning);
    } else {
      const initial = s.base ?? 0;
      if (learning < initial) {
        report.push(
          `${c.name}: ${name} ${total} < ${CHAR[s.characteristic]} ${charValue} + initial ${initial}: kept at the initial level (total ${charValue + initial})`,
        );
        continue;
      }
      learning = step(learning, initial);
      if (learning === initial) continue; // the standard copy as it is
      fields.skillNames.push(local);
      fields.skillLearning.push(learning);
    }
  }
  for (const a of c.attacks) {
    fields.attacks.push(weaponOf(c, a));
    fields.attackScores.push(num(a.Skill));
  }
  items.push({ id, type: 'creature', fields });

  // The text: everything the stat block says that isn't on the sheet's numbers.
  const md = [];
  if (c.description) md.push(`*${c.description}*`, '');
  md.push(
    `**Type:** ${c.type} · **Size:** ${c.size} · **Weight:** ${c.weight} · **Threat:** ${c.threat}`,
    '',
  );
  md.push(`**Speed:** ${c.speed.replace(/\s*·\s*\*\*STR bonus:\*\*.*$/, '')}`, '');
  md.push('**Attacks:**', '');
  for (const a of c.attacks)
    md.push(
      `- ${a.Attack}: skill ${a.Skill}, damage ${a.Dmg}, DMAX ${a.DMAX}, total ${a.Total}${a.Notes ? ` (${a.Notes})` : ''}`,
    );
  md.push('', `**Skills:** ${c.skills}`);
  for (const o of c.other) md.push('', o);
  const list = (title, l) => l.length && md.push('', `**${title}**`, '', ...l.map((x) => `- ${x}`));
  list('Special', c.special);
  list('Variants', c.variants);
  for (const [k, v] of Object.entries(c))
    if (Array.isArray(v) && !['attacks', 'special', 'variants', 'other'].includes(k) && v.length)
      list(k[0].toUpperCase() + k.slice(1), v);
  texts[`${id}.name`] = c.name;
  texts[`${id}.description`] = md.join('\n');
}

// --- Writing ------------------------------------------------------------------------------------
rmSync(`${PACK}/content/creatures`, { recursive: true, force: true });
mkdirSync(`${PACK}/content/creatures`, { recursive: true });
for (const it of items)
  writeFileSync(`${PACK}/content/${it.id.replace('.', '/')}.yaml`, stringify(it, { lineWidth: 0 }));
for (const f of readdirSync(`${PACK}/content/weapons`))
  if (f.startsWith('cr-')) rmSync(`${PACK}/content/weapons/${f}`);
for (const w of weapons.values()) {
  writeFileSync(
    `${PACK}/content/${w.id.replace('.', '/')}.yaml`,
    stringify({ id: w.id, type: 'weapon', fields: w.fields }),
  );
  texts[`${w.id}.name`] = w.name;
}
mkdirSync(`${PACK}/i18n/en`, { recursive: true });
writeFileSync(
  `${PACK}/i18n/en/creatures.yaml`,
  "# The creatures of the bestiary (scripts/extensions/sagas/SagaS_Creatures.md) and their attacks:\n# generated from it, with the rest of the stat block as each creature's description.\n" +
    stringify(texts, { lineWidth: 100, blockQuote: 'literal' }),
);
console.log(`${items.length} creatures, ${weapons.size} natural weapons`);
console.log(report.join('\n'));

/**
 * Each creature through the pack's creature start, its sheet against the bestiary: the derived
 * values, Reflex Dodge, the attacks' scores, and no rules issue. ("immune" mental values aren't
 * compared: the pack has no immunity.)
 */
async function check(list) {
  const { applyChanges, computeSheet, startAction } =
    await import('../../../packages/engine/src/index.ts');
  const { loadPack, packMessages } = await import('../universal-lib.ts');
  const R = loadPack('sagas-core').ruleset;
  const names = packMessages('sagas-core');
  const ids = Object.keys(R.content).filter((q) => String(R.content[q].type).endsWith(':creature'));
  const byName = new Map(ids.map((q) => [names[`${q.split(':')[1]}.name`], q]));
  let good = 0;
  const problems = [];
  for (const c of list) {
    const q = byName.get(c.name);
    if (!q) {
      problems.push(`${c.name}: not in the pack (run the import)`);
      continue;
    }
    const ch = {
      specVersion: '0.4.0',
      id: 'creature-check',
      packs: [{ id: 'sagas-core', version: '0.1.0' }],
      creating: true,
      values: {},
      features: [],
      inventory: [],
    };
    const r = startAction(R, ch, {
      action: { id: 'sagas-core:create-creature' },
      answers: [{ option: q }],
      policy: { choices: 'pause' },
    });
    if (r.status !== 'finished') {
      problems.push(`${c.name}: the start ${r.status}`);
      continue;
    }
    const a = applyChanges(
      R,
      ch,
      r.proposedChanges.filter((x) => x.to === 'self').map((x) => x.change),
    );
    if (!a.ok) {
      problems.push(`${c.name}: ${JSON.stringify(a.errors).slice(0, 200)}`);
      continue;
    }
    const s = computeSheet(R, a.character);
    const V = (f) => s.values[`sagas-core:${f}`]?.value;
    const d = c.derived;
    const pairs = {
      INI: [d.INI, V('sec.ini')],
      CCO: [d.CCO, V('sec.cco')],
      RCO: [d.RCO, V('sec.rco')],
      SPD: [d.SPD, V('sec.spd')],
      'Phys. HP': [d['Phys. HP'], V('hp.physical.max')],
      'Phys. Shock': [d['Phys. Shock'], V('shock.physical')],
      'Prot.': [d['Prot.'], V('protection')],
      'Max Impact': [d['Max Impact'], V('impact.max')],
      'Reflex Dodge': [c.reflex, V('dodge.reflex')],
      'Ment. HP': [d['Ment. HP'], V('hp.psychical.max')],
      'Psych. Shock': [d['Psych. Shock'], V('shock.psychical')],
    };
    const bad = Object.entries(pairs)
      .filter(([, [book]]) => !/immune/.test(book))
      .filter(([, [book, sheet]]) => first(book) !== sheet)
      .map(([k, [book, sheet]]) => `${k} ${book} ≠ ${sheet}`);
    const scores = a.character.inventory
      .filter((x) => R.content[x.item]?.fields.natural)
      .map((x) => x.state?.score);
    const wanted = c.attacks.map((x) => first(x.Skill));
    if (scores.join() !== wanted.join()) bad.push(`attack scores ${wanted} ≠ ${scores}`);
    const issues = [...(s.errors ?? []), ...(s.issues ?? [])];
    if (issues.length) bad.push(`rules issues: ${issues.map((i) => i.code ?? i.id).join(', ')}`);
    if (bad.length) problems.push(`${c.name}: ${bad.join('; ')}`);
    else good++;
  }
  console.log(`${good}/${list.length} creatures as the bestiary gives them.`);
  if (problems.length) console.log(problems.join('\n'));
}
