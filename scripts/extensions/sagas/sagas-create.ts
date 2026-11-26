// SagaS character creation in the browser: the page builds the character itself (power level,
// characteristics, skills, gear…) and the server computes the sheet at each change, or rolls a
// random character. The server is the universal tools' (universal-lib.ts, its stateless calls),
// with SagaS's own data and random roll from sagas-lib.ts.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/sagas-create.ts [--port 5174] [--no-open]

import { serve } from '../universal-lib.ts';
import { createRoutes } from './sagas-lib.ts';

serve('SagaS creation', 'sagas/sagas-create.html', 5174, {
  pack: 'sagas-core',
  routes: createRoutes,
});
