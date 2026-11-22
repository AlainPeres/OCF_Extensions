import { computeSheet, loadRuleset } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const s: any = computeSheet(r.ruleset, parse(readFileSync(''+(process.argv[2]??'examples/characters/sagas-test.yaml')+'', 'utf8')));
console.log('erreurs:', JSON.stringify(s.errors));
console.log('protection =', s.values['sagas-core:protection']?.value, '(attendu 7)');
console.log('impact.max =', s.values['sagas-core:impact.max']?.value, '(attendu 28)');
console.log('actions:', s.actions.map((a: any) => a.id + '@' + a.entry).join(', '));
for (const k of ['points.budget', 'points.chars', 'points.secondary', 'points.skills', 'points.spent', 'points.remaining'])
  console.log(k, '=', s.values['sagas-core:' + k]?.value);
