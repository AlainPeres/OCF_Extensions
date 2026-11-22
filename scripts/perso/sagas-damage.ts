import { loadRuleset, startAction } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const ch = parse(readFileSync('examples/characters/sagas-test.yaml', 'utf8'));
for (const [melee, faces] of [[true, [2, 5, 4]], [true, [6, 3, 4, 1]]] as const) {
  const q = [...faces];
  const dice = (n: number) => Array.from({ length: n }, () => q.shift() ?? 1);
  const res: any = (startAction as any)(r.ruleset, ch, {
    action: { id: 'sagas-core:damage', entry: 'sword' }, params: { degree: 3 },
  }, dice);
  console.log('melee', melee, faces, res.status, JSON.stringify(res.outcome ?? res.errors ?? res).slice(0, 200));
}
