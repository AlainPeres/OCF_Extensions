// The OpenQuest sheet: one page, two modes, Create (openquest-create.html) and Play
// (openquest-play.html), each framed, sharing the server's session.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/openquest/openquest.ts [--port 5181] [--no-open]

import { serve } from '../universal-lib.ts';

serve('OpenQuest sheet', 'openquest/openquest.html', 5181, {
  pages: { '/create': 'openquest/openquest-create.html', '/play': 'openquest/openquest-play.html' },
});
