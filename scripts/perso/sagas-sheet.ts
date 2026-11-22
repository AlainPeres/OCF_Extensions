import { computeSheet, loadRuleset } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const file = process.argv[2] ?? 'examples/characters/sagas-test.yaml';
const ch = parse(readFileSync(file, 'utf8'));
const s: any = computeSheet(r.ruleset, ch);
console.log('erreurs:', s.errors);
for (const [k, v] of Object.entries(s.values)) console.log(k.replace('sagas-core:', ''), (v as any).value);