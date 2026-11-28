// The Jazz Age SRD (scripts/extensions/Eternal_C_Jazz/, Open Game Content) into the
// lovecraft-jazz-age pack: content/skills/*.yaml (the base ratings table and each skill's
// description), content/archetypes/*.yaml (section 2.5.2), content/weapons and content/armor
// (the example tables of 4.5 and 4.9.3), and their texts (i18n/en/srd.yaml). Run it again after
// changing the SRD's Markdown; it replaces those files.
//
//   node scripts/extensions/Eternal_C_Jazz/srd-import.mjs

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { stringify } from 'yaml';

const PACK = 'packs/lovecraft/jazz-age';
const RULES = 'scripts/extensions/Eternal_C_Jazz/3_PART_I_RULES_OF_THE_GAME.md';
const lines = readFileSync(RULES, 'utf8').replace(/\r\n/g, '\n').split('\n');
const report = [];
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/\(type\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
// Markdown emphasis, headings and highlights stripped.
const plain = (l) =>
  l
    .replace(/<\/?mark>/g, '')
    .replace(/[#*_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
const section = (from, to) => {
  const a = lines.findIndex((l) => l.includes(from));
  const b = lines.findIndex((l, i) => i > a && l.includes(to));
  if (a < 0 || b < 0) throw new Error(`section ${from}`);
  return lines.slice(a + 1, b);
};
const texts = {};

// --- Skills: the base ratings table, each skill's description -----------------------------------
// Typed skills ("Science (Type)") take a specialty; the four adversity skills (2.6) are the only
// ones adversity picks raise.
const ADVERSITY = ['first-aid', 'military-training', 'regional-lore', 'survival'];
const skills = new Map();
for (const l of section('Base Ratings for Skills', '2.10.2 How Skills Work'))
  for (const cell of l.split('|').slice(1, -1)) {
    const m = /^\s*(.+?)\s*\((\d+)\)\s*$/.exec(cell);
    if (!m) continue;
    const name = m[1].trim().replace(/\s+/g, ' ');
    const typed = /\(Type\)/.test(name);
    const id = `skills.${slug(name)}`;
    skills.set(name.replace(/\s*\(Type\)/, ''), {
      id,
      name: name.replace(/\s*\(Type\)/, ''),
      fields: {
        base: Number(m[2]),
        ...(typed ? { typed: true } : {}),
        ...(ADVERSITY.includes(slug(name)) ? { adversity: true } : {}),
      },
    });
  }
// Descriptions: an italic name, "Base Rating: X%", then the text up to the next skill.
{
  const body = section('2.10.5 Skill Descriptions', '2.11 Detailed Description');
  let cur = null;
  for (const raw of body) {
    const l = raw.trim();
    const head = /^(?:#+\s*)?_([^_]+)_\s*$/.exec(l);
    const name = head && plain(head[1]).replace(/\s*\(Type\)/, '');
    if (head && skills.has(name)) {
      cur = skills.get(name);
      cur.text = [];
      continue;
    }
    if (!cur || !l || /^\d+$/.test(l) || l.startsWith('Base Rating:')) continue;
    cur.text.push(plain(l.replace(/^#+\s*/, '')));
  }
}
for (const s of skills.values()) {
  texts[`${s.id}.name`] = s.name;
  if (s.text?.length) texts[`${s.id}.description`] = s.text.join('\n\n');
  else report.push(`skill ${s.name}: no description`);
}

// --- Archetypes (2.5.2) -------------------------------------------------------------------------
const NUMBER = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };
const STAT = {
  STR: 'stats.str',
  CON: 'stats.con',
  DEX: 'stats.dex',
  INT: 'stats.int',
  POW: 'stats.pow',
  CHA: 'stats.cha',
};
const archetypes = [];
{
  let cur = null;
  let mode = null;
  for (const raw of section('2.5.2 List of Archetypes', '2.6 Detailed Description: Adversity')) {
    const l = plain(raw);
    if (!l || /^\d+$/.test(l) || l.startsWith('The following Archetypes')) continue;
    const rec = /^(.*?)\s*RECOMMENDED STATS:\s*(.*)$/.exec(l);
    if (rec) {
      if (rec[1]) archetypes.push((cur = { name: rec[1].trim(), skills: [], options: [] }));
      cur.recommended = rec[2]
        .split(/,\s*/)
        .map((s) => STAT[s.trim()])
        .filter(Boolean);
      mode = null;
      continue;
    }
    if (l === 'ARCHETYPAL SKILLS:') {
      mode = 'skills';
      continue;
    }
    const ch = /^Choose any (\w+) of these/.exec(l);
    if (ch) {
      mode = 'options';
      cur.choose = NUMBER[ch[1].toLowerCase()] ?? Number(ch[1]);
      continue;
    }
    const res = /^STARTING RESOURCES:\s*(\d+)/.exec(l);
    if (res) {
      cur.resources = Number(res[1]);
      continue;
    }
    const bonds = /^BONDS:\s*(\d+)/.exec(l);
    if (bonds) {
      cur.bonds = Number(bonds[1]);
      continue;
    }
    const sk = /^-\s*(.+?)\s+(\d+)%/.exec(l);
    if (sk && mode) {
      const name = sk[1].trim().replace(/\s*\(Type\)/, '');
      const s = skills.get(name);
      if (!s) report.push(`${cur.name}: no skill "${sk[1]}"`);
      else cur[mode].push({ id: s.id, rating: Number(sk[2]) });
      continue;
    }
    if (!sk && !l.startsWith('-')) {
      archetypes.push((cur = { name: l, skills: [], options: [] }));
      mode = null;
      continue;
    }
    report.push(`archetypes: unread "${l}"`);
  }
}
for (const a of archetypes) {
  a.id = `archetypes.${slug(a.name.split('/')[0])}`;
  texts[`${a.id}.name`] = a.name;
}

// --- Weapons and armor (4.5, 4.9.3): the example tables ------------------------------------------
// Damage with "*" adds the damage bonus (hand-to-hand and thrown); a Lethality rating replaces
// damage dice; armor piercing reduces armor. Ranges are text (the tables mix yards and STR).
const WEAPONS = [
  ['Bare hands and feet', 'unarmed-combat', '1d4-1', { bonus: true, unarmed: true }],
  ['Brass knuckles or steel-toe boot', 'unarmed-combat', '1d4', { bonus: true }],
  ['Ordinary knife, switchblade', 'melee-weapons', '1d4', { bonus: true }],
  ['Hatchet or sickle', 'melee-weapons', '1d6+1', { bonus: true }],
  ['Blackjack or cricket/baseball bat', 'melee-weapons', '1d8', { bonus: true }],
  ['Large sword', 'melee-weapons', '2d6', { bonus: true }],
  ['Crossbow', 'firearms', '1d8+2', { range: '50 yards' }],
  ['Thrown rock', 'athletics', '1d4', { bonus: true, range: '20 yards' }],
  ['Thrown knife', 'athletics', '1d4', { bonus: true, range: 'STR×5 feet' }],
  ['Thrown spear', 'athletics', '1d8', { bonus: true, range: 'STR×5 yards' }],
  [
    'Thrown hand grenade',
    'athletics',
    null,
    { lethality: 12, radius: '4 yards', range: 'STR×3 yards' },
  ],
  ['Derringer', 'firearms', '1d8', { range: '5 yards' }],
  ['Medium pistol', 'firearms', '1d10', { range: '15 yards' }],
  ['Large caliber pistol', 'firearms', '1d10+2', { range: '10 yards' }],
  ['Rifle', 'firearms', '1d12+2', { ap: 3, range: '60 yards' }],
  [
    'Shotgun blast',
    'firearms',
    '2d10',
    { range: '50 yards (full damage up to 10, 1D10 to 20, 1D6 beyond)' },
  ],
  [
    'Thompson sub-machine gun',
    'firearms',
    null,
    { lethality: 15, radius: '1–3 yards by mode', ap: 5, range: '40 yards (80 mounted)' },
  ],
  [
    'WW1 machinegun (mounted)',
    'heavy-machinery',
    null,
    { lethality: 20, radius: '3 yards', ap: 5, range: '140 yards' },
  ],
  ['Dynamite stick', 'military-training', null, { lethality: 15, radius: '1 yard' }],
  ['Pipe bomb', 'military-training', null, { lethality: 20, radius: '2 yards' }],
];
const weapons = WEAPONS.map(([name, skill, damage, o]) => {
  const fields = { skill: `skills.${skill}` };
  if (damage) fields.damage = damage;
  if (o.lethality) fields.lethality = o.lethality;
  if (o.bonus) fields.damageBonus = true;
  if (o.ap) fields.armorPiercing = o.ap;
  if (!skills.has([...skills.values()].find((s) => s.id === fields.skill)?.name))
    report.push(`weapon ${name}: no skill ${skill}`);
  const id = `weapons.${slug(name)}`;
  texts[`${id}.name`] = name;
  const notes = [
    o.range && `Base range ${o.range}.`,
    o.radius && `Kill radius ${o.radius}.`,
  ].filter(Boolean);
  if (notes.length) texts[`${id}.description`] = notes.join(' ');
  return { id, type: 'weapon', fields };
});
const ARMOR = [
  ['Heavy robes or leather jacket', 1],
  ['Trench coat', 2],
  ['Steel-lined vest', 5],
];
const armor = ARMOR.map(([name, rating]) => {
  const id = `armor.${slug(name)}`;
  texts[`${id}.name`] = name;
  return { id, type: 'armor', fields: { armor: rating } };
});

// --- Writing ------------------------------------------------------------------------------------
const write = (folder, items) => {
  rmSync(`${PACK}/content/${folder}`, { recursive: true, force: true });
  mkdirSync(`${PACK}/content/${folder}`, { recursive: true });
  for (const it of items)
    writeFileSync(`${PACK}/content/${it.id.replace('.', '/')}.yaml`, stringify(it));
};
write(
  'skills',
  [...skills.values()].map((s) => ({ id: s.id, type: 'skill', fields: s.fields })),
);
write(
  'archetypes',
  archetypes.map((a) => ({
    id: a.id,
    type: 'archetype',
    fields: {
      recommended: a.recommended,
      skills: a.skills.map((s) => s.id),
      ratings: a.skills.map((s) => s.rating),
      // Their standard copies' IDs (the qualified item ID with hyphens), for the creation's
      // forEach.
      entries: a.skills.map((s) => `lovecraft-jazz-age-${s.id.replace('.', '-')}`),
      options: a.options.map((s) => s.id),
      optionRatings: a.options.map((s) => s.rating),
      choose: a.choose ?? 0,
      resources: a.resources,
      bonds: a.bonds,
      // One entry per Bond, for the creation's forEach (formulas have no range).
      bondSlots: Array.from({ length: a.bonds }, (_, i) => i + 1),
    },
  })),
);
write('weapons', weapons);
write('armor', armor);
mkdirSync(`${PACK}/i18n/en`, { recursive: true });
writeFileSync(
  `${PACK}/i18n/en/srd.yaml`,
  "# The SRD's skills, archetypes, weapons and armor (scripts/extensions/Eternal_C_Jazz/):\n# generated by srd-import.mjs.\n" +
    stringify(texts, { lineWidth: 100, blockQuote: 'literal' }),
);
console.log(
  `${skills.size} skills, ${archetypes.length} archetypes, ${weapons.length} weapons, ${armor.length} armor`,
);
if (report.length) console.log(report.join('\n'));
