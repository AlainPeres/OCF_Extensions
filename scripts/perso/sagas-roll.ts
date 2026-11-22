import { loadRuleset, startAction } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const ch = parse(readFileSync('examples/characters/sagas-test.yaml', 'utf8'));

function run(char: string, queue: number[]) {
  const q = [...queue];
  const dice = (count: number) => Array.from({ length: count }, () => q.shift() ?? 1);
  const res: any = (startAction as any)(r.ruleset, ch, {
    action: { id: 'sagas-core:characteristic-check' },
    params: { characteristic: 'sagas-core:' + char },
  }, dice);
  console.log(char, JSON.stringify(queue), '->', res.status, JSON.stringify(res.outcome ?? res.errors ?? res).slice(0, 300));
}
run('chars.str', [3, 4]);        // 7 <= 12 : degree 1
run('chars.str', [1, 1]);        // natural 2 : degree 6
run('chars.str', [6, 6, 1, 1]);  // natural 12 then failure
run('chars.str', [6, 2, 3]);     // 6 explodes: 8+3 = 11
run('chars.dex', [6, 5, 6, 2]);  // > 2 x 8 : automatic failure
run('chars.dex', [2, 3]);        // 5 <= 8 : degree 1
