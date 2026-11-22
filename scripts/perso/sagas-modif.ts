import { loadRuleset, startAction } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const ch = parse(readFileSync('examples/characters/sagas-test.yaml', 'utf8'));
function go(label: string, action: string, params: any, faces: number[], situational?: any) {
  const q = [...faces];
  const dice = (n: number) => Array.from({ length: n }, () => q.shift() ?? 1);
  const res: any = (startAction as any)(r.ruleset, ch, { action: { id: 'sagas-core:' + action }, params, situational }, dice);
  console.log(label, '->', res.status, JSON.stringify(res.outcome ?? res.errors ?? res).slice(0, 220));
}
const str = 'sagas-core:chars.str';
go('FOR 12, jet 7 (degré 1), difficile -1', 'characteristic-check', { characteristic: str, difficulty: 'difficult' }, [3, 4]);   // 1-1 = 0
go('FOR 12, jet 7, très facile +2', 'characteristic-check', { characteristic: str, difficulty: 'very-easy' }, [3, 4]);          // 3
go('FOR 12, jet 15 (échec) +2 : reste 0+2', 'characteristic-check', { characteristic: str, modifier: 2 }, [6, 3, 6]);           // check
go('FOR 12, jet 7, dans le dos +1', 'characteristic-check', { characteristic: str }, [3, 4], { 'sagas-core:attackInBack': true });          // 2
go('Opposition 12 contre 8', 'opposed-check', { score: 12, opponentScore: 8 }, [3, 4, 4, 4]);                                  // 1 vs 1 -> draw
go('Opposition 12 contre 8 (2 vs 0)', 'opposed-check', { score: 12, opponentScore: 8 }, [2, 4, 5, 6, 6, 6]);
