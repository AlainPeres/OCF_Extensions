// The SagaS sheet: one page, two modes, Create (sagas-create.html) and Play (sagas-play.html),
// each framed, the character passed from one to the other. The server is universal-lib.ts with the
// routes of sagas-lib.ts.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/sagas.ts [--port 5180] [--no-open]

import { serve } from '../universal-lib.ts';
import { sheetRoutes } from './sagas-lib.ts';

serve('SagaS sheet', 'sagas/sagas.html', 5180, {
  pack: 'sagas-core',
  routes: sheetRoutes,
  pages: { '/create': 'sagas/sagas-create.html', '/play': 'sagas/sagas-play.html' },
});
