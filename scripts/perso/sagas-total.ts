import { computeSheet, loadRuleset } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const s: any = computeSheet(r.ruleset, parse(readFileSync(''+(process.argv[2]??'examples/characters/sagas-test.yaml')+'', 'utf8')));
console.log('erreurs:', JSON.stringify(s.errors));
console.log(JSON.stringify(s.copies, null, 0)); console.log('problèmes:', JSON.stringify(s.issues ?? s.rulesIssues ?? []));
