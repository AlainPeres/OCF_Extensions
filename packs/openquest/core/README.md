# OpenQuest 3 Core (OCF pack)

From the _OpenQuest 3rd Edition System Resource Document_ (v1.2, D101 Games, Creative Commons
Attribution):

- the seven characteristics; damage modifier (STR + SIZ), hit points, magic points, movement
  rate, armour points, encumbrance (STR + SIZ, overloaded), fortune points, money and the
  optional Wealth rule;
- 32 skills with their bases: each one without a descriptor is a standard copy, on every sheet at
  its base; Culture (Other), Language (Other), Lore and Religion (Other) are taken once per
  descriptor, Shamanism only by a Shaman. A skill's total is its base, its creation points and its
  growth, at most 100% (a Master);
- 43 weapons (close, missile, thrown, shields), 5 armours and 42 items of equipment and food;
- 163 spells (70 Personal Magic, 39 Sorcery, 54 Divine Magic) with their traits;
- actions: `skill-test` (D100 under the skill: critical and fumble on doubles, 00 always a fumble
  except for a Master, who doesn't roll; one difficulty, a magic modifier, assistance, -20% to a
  physical skill when overloaded; a growth point on a critical or a fumble), `opposed-test`
  (against the opponent's result and roll, Masters included), `attack` and `unarmed-attack` with
  the combat situations, `defend` (Dodge, parry, Unarmed Combat; -20% for each defence after the
  first), `damage` (critical, Great Attack, charge, thrown), `unarmed-damage` (strike, hold,
  throw), `take-damage` (armour, mortal wounds), `healing-received` (what a healer's Healing test
  did: revive, minor injury, stabilise, surgery), `magic-healing`, `natural-healing`,
  `recover-magic`, `spend-fortune`;
- magic: `cast-personal`, `cast-sorcery` (magnitude, duration and range manipulated), `cast-divine`
  and `regain-divine`; learning and raising spells (`learn-personal-spell`,
  `raise-personal-spell`, `learn-sorcery-spell`, `learn-divine-spell`, `raise-divine-spell`); the
  paths (`become-specialist` for a Shaman or a Wise, `sorcery-rank`, `religion-rank`,
  `leave-religion`); `spirit-combat`; the spells on the character (`onSelf`, `spell-received`,
  `end-spell`), whose effects change armour, skills, damage, movement and hit points; magic point
  stores (the sorcerer's stone, `make-store`, `draw-store`, `charge-store`), the Wise's magical
  places and the pinnacles of the paths (`apotheosis`; a Magus transcends);
- non-human adventurers: 13 species besides humans (Beastling, Centaur, Duck, Dwarf, Elf, Goblin,
  Lizardman, Merpeople, Minotaur, Orc, Pixie, Satyr, Troll), with their dice, averages,
  movement, natural armour and weapons and characteristic maximums; `regenerate` for a Troll;
- creature sheets for the Referee: 72 creatures and animals (the `creature` start), with their
  characteristics, skills at the book's values, attacks, armour, movement and Personal Magic;
- creation (`create-character`), guided and random: the species, characteristics by points or by dice, cash or
  the Wealth skill, the four skill pools +5% at a time (30 at most a skill), six points of
  Personal Magic, an arms package, the age; `learn-specialty` for a skill with a descriptor,
  `learn-personal-spell` and `finish-creation`;
- growth: `gain-growth`, `improve-skill` (+5% once a downtime, at the cost of its expertise),
  `improve-characteristic` (5 points, never SIZ, 21 at most), `end-downtime` (which also regains
  the Divine spells spent);
- spot rules: fatigue (`fatigue-test`, `rest-fatigue`), exposure, starvation and thirst
  (`deprivation`), `travel-day`, `fall`, `suffocate`, `burn`, `resist-poison`,
  `resist-disease`;
- social combat: `fast-talk`, `oratory-start`, `oratory`, `oratory-defence`, `intimidate`,
  `social-exchange`.

Not yet modelled: the effects of spells that don't change a number of the sheet, or aim at one
skill or characteristic (the player adds them as a modifier), the familiar and the Allied Spirit
(each its own character), the effects of poisons and diseases other than damage, ships,
creatures' special abilities (text).
