// OpenQuest character creation in the browser: the pack's guided or random start, step by step,
// with the skill pools spread on one table, then skills with a descriptor, Personal Magic spells,
// the character's text (concept, motives, background) and the end of the creation. The server is
// the universal tools' (universal-lib.ts); only the page (openquest-create.html) is OpenQuest's.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/openquest/openquest-create.ts [--port 5178] [--no-open]

import { serve } from '../universal-lib.ts';

serve('OpenQuest character creation', 'openquest/openquest-create.html', 5178);
