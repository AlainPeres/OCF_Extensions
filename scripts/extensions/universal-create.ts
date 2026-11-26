// Universal character creator: any pack of packs/, in the browser, with nothing of the pack
// written here. The page picks a pack and one of its creation starts; the server runs the start's
// action with the engine and hands each pause to the page with its text from the pack's i18n: a
// choice, an allocation (a budget or a list of values). The page then runs any other action the
// rules list (those tagged `creation` first), sets input fields, and saves the character to
// examples/characters/. The server is universal-lib.ts, shared with universal-play.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/universal-create.ts [--port 5176] [--no-open]

import { serve } from './universal-lib.ts';

serve('Universal creator', 'universal-create.html', 5176, { creationView: true });
