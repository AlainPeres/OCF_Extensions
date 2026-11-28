// The Jazz Age sheet (lovecraft-jazz-age): one page, two modes, Create and Play. It is the
// universal sheet (universal.html) served for this pack alone: /api/sheet names the pack and the
// title, and the page then hides the pack's list. Pages of its own, as SagaS and D100 heroic have,
// may follow.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/Eternal_C_Jazz/jazz.ts [--port 5182] [--no-open]

import { serve } from '../universal-lib.ts';

const PACK = 'lovecraft-jazz-age';

serve('Jazz Age sheet', 'universal.html', 5182, {
  pack: PACK,
  routes: (path) => (path === '/api/sheet' ? { pack: PACK, title: 'Jazz Age Sheet' } : undefined),
});
