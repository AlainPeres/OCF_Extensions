// OpenQuest play sheet in the browser: skill tests, attacks, damage and defence with the combat
// situations, health, magic (casting, spells on the character, stores), the spot rules, social
// combat and growth. The server is the universal tools' (universal-lib.ts); only the page
// (openquest-play.html) is OpenQuest's.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/openquest/openquest-play.ts [--port 5179] [--no-open]

import { serve } from '../universal-lib.ts';

serve('OpenQuest play sheet', 'openquest/openquest-play.html', 5179);
