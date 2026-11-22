// Universal play sheet: any character of examples/characters/, any pack, in the browser, with
// nothing of the pack written here. The page shows the sheet (fields by display group, content
// with its computed values, rules issues), runs the actions the sheet lists (the rules' and each
// item's: rolls, damage, rests…) with the situational choices offered, shows their rolls and
// outcome, applies their changes for the character, runs or dismisses what the rules offer, sets
// input fields (hit points…) and saves the character back. The server is universal-lib.ts, shared
// with universal-create.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/universal-play.ts [--port 5177] [--no-open]

import { serve } from './universal-lib.ts';

serve('Universal play sheet', 'universal-play.html', 5177);
