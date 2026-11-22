import { computeSheet, loadRuleset, startAction } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const ch = parse(readFileSync('examples/characters/sagas-test.yaml', 'utf8'));
const s: any = computeSheet(r.ruleset, ch);
console.log('erreurs:', JSON.stringify(s.errors));
console.log('dodge.reflex =', s.values['sagas-core:dodge.reflex']?.value, '(attendu 10)');
console.log('actions:', s.actions.map((a: any) => a.id + (a.entry ? '@' + a.entry : '')).join(', '));
const q = [3, 4];
const dice = (n: number) => Array.from({ length: n }, () => q.shift() ?? 1);
const res: any = (startAction as any)(r.ruleset, ch, {
  action: { id: 'sagas-core:skill-check', entry: 'dodge' },
}, dice);
console.log(res.status, JSON.stringify(res.outcome ?? res.errors ?? res).slice(0, 300));
