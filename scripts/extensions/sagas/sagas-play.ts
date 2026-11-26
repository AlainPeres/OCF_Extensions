// SagaS character sheet in the browser, for play: skill and characteristic rolls, dealing damage
// with a weapon, taking damage, rest, and progression (experience points spent on
// characteristics and skills, new skills, the universe's technological level). The page keeps
// the character; the server is the universal tools' (universal-lib.ts, its stateless calls:
// compute the sheet, run an action and apply its changes, files), with SagaS's own data from
// sagas-lib.ts.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/sagas-play.ts [--port 5175] [--no-open]

import { serve } from '../universal-lib.ts';
import { playRoutes } from './sagas-lib.ts';

serve('SagaS play', 'sagas/sagas-play.html', 5175, { pack: 'sagas-core', routes: playRoutes });
