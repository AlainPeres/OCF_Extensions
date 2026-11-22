import { computeSheet, loadRuleset, startAction, applyChanges } from '../../packages/engine/src/index.ts';
import { readPack } from '../../packages/engine/test/packs.ts';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const r = loadRuleset([readPack(join(process.cwd(), 'packs', 'sagas', 'core'))]);
if (!r.ok) { console.log(r.errors); process.exit(1); }
const ch = parse(readFileSync('examples/characters/sagas-test.yaml', 'utf8'));
function go(params: any, faces: number[]) {
  const q = [...faces];
  const dice = (n: number) => Array.from({ length: n }, () => q.shift() ?? 1);
  const res: any = (startAction as any)(r.ruleset, ch, { action: { id: 'sagas-core:take-damage' }, params }, dice);
  console.log(JSON.stringify(params), res.status, JSON.stringify(res.outcome ?? res.errors ?? res).slice(0, 200));
  console.log('  changes:', JSON.stringify(res.changes ?? res.proposedChanges ?? '').slice(0, 400));
}
go({ kind: 'physical', amount: 10 }, []);              // below the shock threshold 14
go({ kind: 'physical', amount: 20, stun: true }, [6, 6, 1, 1]);  // shock: END 9, roll 14 > 9: failed
go({ kind: 'physical', amount: 80, stun: true }, [1, 1]);        // stun capped at 64, 16 injuries
