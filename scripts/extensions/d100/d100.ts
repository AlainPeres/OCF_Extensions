// The D100 heroic sheet: one page, two modes, Create (d100-create.html) and Play
// (d100-play.html), each framed, sharing the server's session.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/d100/d100.ts [--port 5181] [--no-open]

import { serve } from '../universal-lib.ts';

serve('D100 heroic sheet', 'd100/d100.html', 5181, {
  pages: { '/create': 'd100/d100-create.html', '/play': 'd100/d100-play.html' },
});
