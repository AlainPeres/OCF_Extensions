// Universal sheet: any pack of packs/, any character of examples/characters/, in the browser,
// with nothing of the pack written here. Two modes, switched on the page:
// - Create: pick a pack, start a new character with one of the pack's creation starts (guided:
//   each pause becomes a form; random: it runs on its own), the creation actions by the pack's
//   groups, input fields, and the sheet as it stands.
// - Play: the sheet (fields by display group, abilities and items with their actions and filters),
//   the rules' actions by the pack's groups, the situation, what the rules offer, and a log of
//   rolls and outcomes.
// A new character starts in Create, a loaded one in Create while being created, else in Play. The
// server is universal-lib.ts.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/universal.ts [--port 5176] [--no-open]

import { serve } from './universal-lib.ts';

serve('Universal sheet', 'universal.html', 5176);
