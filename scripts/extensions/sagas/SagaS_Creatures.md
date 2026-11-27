# SagaS Bestiary

_Draft v0.3: 123 entries. For Rules of SagaS 0.995 LLL._

## How to Read a Stat Block

- **Characteristics.** The eight main characteristics; an average human has 5 in each (SPD 8).
- **Derived values** (INI, CCO, RCO, SPD, hit points, shock thresholds) use the formulas of section 3.1. Natural creatures use a _base species_ value for SPD, given in the Speed line. Creatures with several movement modes list them all.
- **Max Impact** = 2 x Protection + Physical Shock Threshold.
- **Skills** are total levels (characteristic + learning level). **Reflex Dodge** = 2 + Dodge / 2.
- **Size** is the linear ratio to a human (1.8 m): x1/16, x1/4, x1/2, x1, x2, x4, x8, x16.
- **Attacks.** _Dmg_ is the weapon's (or natural weapon's) damage bonus; _Total_ adds the STR bonus for close combat. One d6* is rolled per degree of success, up to DMAX; total damage is never below 0. _(The v0.995 text does not spell out the general damage formula; this reading follows its explosive and automatic-fire rules.)_
- **Venoms and diseases** give a Virulence, a period and an effect, resolved as in section 6.1. The rules leave effects to the referee; those given here are proposals.
- **Threat** compares the creature to a 150-point starting character in a one-on-one fight: _Negligible_ (harmless), _Low_ (fair match for an untrained character), _Moderate_ (a serious fight), _High_ (likely to win), _Deadly_ (kills most characters), _Legendary_ (needs a party of heroes).
- **Racial template** (fantasy peoples): modifiers to the human baseline of 5; the stat block is a typical trained adult of that people.
- **Multiple Attacks.** Creatures marked so (multi-headed monsters, many-armed horrors) may make the listed number of attacks per round, each at -I if more than one is made. _Proposal._
- **Strength and Speed** are capped at 20 and 16 only for normal humans. Animals and monsters follow the Universal Table (a 1-ton animal has STR 24).
- **Natural weapons** take the Dmg and DMAX of the weapon they resemble; the STR bonus makes the difference. Tiny creatures (Size x1/4 and smaller): base +0, but the dagger's DMAX 4 for piercing and cutting natural weapons. Otherwise fangs, claws, talons, beaks and stings: dagger (+2, DMAX 4), or short sword (+4) for Size x8 and larger. Horns and tusks: dagger for Size x1/2 or smaller, short sword (+4, DMAX 4) from Size x1. Blunt blows (kicks, tails, slams, stomps, trunks, tentacles): bare hands (+0, DMAX 2) up to Size x1, club (+4, DMAX 3) from Size x2. Fists and special attacks (spit, tongue, breath, touches, wails, swarms) keep their own values.

---

## Part I: Animals

### Canids

#### Domestic Dog (Guard / Hunting)

_A medium-to-large dog trained to guard, hunt or track. Loyal, fast, and able to pin down an unarmed person._

**Type:** Animal (canid) · **Size:** x1/2 · **Weight:** 35 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  4  |  8  |  5  |  3  |  3  |  4  |  3  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  | 14  |    26    |    30    |      8      |      6       |   0   |     8      |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** -2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  10   | +2  |  4   |  +0   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 13, Tracking 13 (by scent), Stealth 9, Run 15, Swimming 10

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Trainable.** Can be trained with Animal Handling to obey simple commands.

**Variants**

- **War Dog / Mastiff** (70 kg): STR 6, END 7. Recompute derived values.
- **Hunting Hound:** SPD base 12, Tracking +3.

#### Wolf

_A wild pack hunter: patient, tireless and wary of humans unless starving._

**Type:** Animal (canid) · **Size:** x1/2 · **Weight:** 40 kg · **Threat:** Low (Moderate in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  8  |  7  |  3  |  3  |  5  |  4  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  | 14  |    34    |    34    |     10      |      8       |   0   |     10     |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** +0

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  10   | +2  |  4   |  +2   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 13, Tracking 13 (by scent), Stealth 11, Run 16, Swimming 10

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Endurance Runner.** Can trot for hours without fatigue.

#### Dire Wolf

_A huge prehistoric wolf, also found in fantasy wilds. Hunts large game in packs._

**Type:** Animal (canid) · **Size:** x1 · **Weight:** 90 kg · **Threat:** Moderate (High in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  9  |  7  |  9  |  3  |  3  |  6  |  5  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  7  |  5  | 15  |    48    |    38    |     12      |      10      |   1   |     14     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  12   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 13, Tracking 13 (by scent), Stealth 9, Run 16

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Night Vision.** No penalty in dim light.

#### Jackal

_A small scavenging canid living in arid lands, bold in packs._

**Type:** Animal (canid) · **Size:** x1/4 · **Weight:** 10 kg · **Threat:** Negligible (Low in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  8  |  5  |  3  |  3  |  3  |  3  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  4  | 14  |    20    |    26    |      4      |      6       |   0   |     4      |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** -6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   8   | +0  |  4   |  -6   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 11, Tracking 10 (by scent), Run 15

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Scavenger.** Resistant to rot: +I to Physical Resistance against disease from carrion.

#### Fox

_A small, cunning omnivore, more likely to flee than to fight._

**Type:** Animal (canid) · **Size:** x1/4 · **Weight:** 6 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  9  |  4  |  4  |  4  |  3  |  3  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  5  | 13  |    18    |    28    |      4      |      6       |   0   |     4      |

**Speed:** 13 (base 10): 35 km/h, 29 m/round · **STR bonus:** -6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   9   | +0  |  4   |  -6   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 13, Perception 13, Stealth 13, Run 13, Tracking 11 (by scent)

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Night Vision.** No penalty in dim light.
- **Cunning.** Excellent at evading pursuers: +I to Run or Stealth when fleeing.

#### Coyote

_An adaptable, opportunistic canid of open country that hunts alone or in small packs._

**Type:** Animal (canid) · **Size:** x1/4 · **Weight:** 15 kg · **Threat:** Negligible (Low in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  8  |  5  |  3  |  3  |  4  |  3  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  4  | 14  |    24    |    28    |      6      |      6       |   0   |     6      |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** -4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   9   | +0  |  4   |  -4   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 11, Tracking 10 (by scent), Run 15

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._

### Ursids

#### Black Bear

_A forest omnivore, usually shy but extremely dangerous when cornered, surprised or protecting cubs._

**Type:** Animal (ursid) · **Size:** x1 · **Weight:** 120 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 14  |  6  | 12  |  3  |  3  |  6  |  6  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  8  |  5  | 14  |    64    |    40    |     15      |      11      |   2   |     19     |

**Speed:** 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +5

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  12   | +2  |  4   |  +7   |       |
| Bite   |  10   | +2  |  4   |  +7   |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 11, Tracking 11 (by scent), Stealth 6, Climb 9, Run 14, Swimming 10

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Bear Hug.** May grapple with a successful Claws attack (Strength vs. Strength, see Grappling).
- **Climber.** Climbs trees easily.

**Variants**

- **Brown Bear / Grizzly** and **Polar Bear** have their own entries.

#### Brown Bear / Grizzly

_A massive bear of forests and mountains, ferocious when surprised or defending its young._

**Type:** Animal (ursid) · **Size:** x2 · **Weight:** 300 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  6  | 14  |  3  |  3  |  7  |  7  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  5  | 15  |    82    |    44    |     18      |      11      |   3   |     24     |

**Speed:** 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  13   | +2  |  4   |  +10  |       |
| Bite   |  12   | +2  |  4   |  +10  |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 11, Tracking 11 (by scent), Stealth 6, Run 15, Swimming 11

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Bear Hug.** May grapple with a successful Claws attack (Strength vs. Strength).
- **Charge.** Creature Charge: +10 damage (2 x speed bonus +5), limited by Max Impact Bonus.

**Variants**

- **Kodiak:** weight 450 kg, STR 22.

#### Polar Bear

_A powerful white bear of the frozen north, the largest land carnivore, an ambush hunter on ice._

**Type:** Animal (ursid) · **Size:** x2 · **Weight:** 450 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  6  | 15  |  3  |  3  |  7  |  7  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  | 10  |  5  | 15  |    88    |    46    |     22      |      11      |   3   |     28     |

**Speed:** 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +12

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  14   | +2  |  4   |  +14  |       |
| Bite   |  13   | +2  |  4   |  +14  |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 12, Tracking 13 (by scent), Stealth 7 (+I on snow), Swimming 15, Run 15

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Cold Adapted.** Immune to normal cold; +I to Physical Resistance against fatigue in cold.
- **Bear Hug.** May grapple with a successful Claws attack.

#### Cave Bear

_A prehistoric bear, larger and heavier than any living bear. Dwells in caves._

**Type:** Animal (ursid) · **Size:** x2 · **Weight:** 600 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 23  |  5  | 15  |  3  |  3  |  7  |  7  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 15  |    90    |    42    |     25      |      11      |   3   |     31     |

**Speed:** 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +15

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  13   | +2  |  4   |  +17  |       |
| Bite   |  12   | +2  |  4   |  +17  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Perception 10, Tracking 9 (by scent), Run 15

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Night Vision.** No penalty in dim light.
- **Territorial.** Aggressive near its den; fights to the death if cornered.

### Felines

#### Housecat

_A small, agile predator. Harmless to most people, deadly to mice and birds._

**Type:** Animal (feline) · **Size:** x1/4 · **Weight:** 4 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  | 10  |  3  |  5  |  3  |  3  |  4  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  5  | 13  |    14    |    28    |      2      |      8       |   0   |     2      |

**Speed:** 13 (base 10): 35 km/h, 29 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |   8   | +0  |  4   |  -8   |       |
| Bite   |   8   | +0  |  4   |  -8   |       |

**Reflex Dodge:** 9

**Skills:** Dodge 15, Stealth 14, Climb 13, Perception 11, Jump 14, Run 13

**Special**

- **Always Lands on Feet.** Reduce falling damage by 2d6*.
- **Night Vision.** No penalty in dim light.

**Variants**

- **Kitten:** STR 0, END 2, Physical HP and thresholds recomputed.

#### Lynx

_A medium wildcat with tufted ears, an elusive ambush hunter of cold forests._

**Type:** Animal (feline) · **Size:** x1/2 · **Weight:** 20 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  4  | 10  |  5  |  5  |  3  |  4  |  3  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  6  | 13  |    26    |    32    |      8      |      6       |   0   |     8      |

**Speed:** 13 (base 10): 35 km/h, 29 m/round · **STR bonus:** -2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  10   | +2  |  4   |  +0   |       |
| Bite   |  10   | +2  |  4   |  +0   |       |

**Reflex Dodge:** 9

**Skills:** Dodge 14, Stealth 15, Perception 13, Climb 13, Jump 14, Run 13

**Special**

- **Night Vision.** No penalty in dim light.
- **Ambush.** Pounces from hiding: attack by surprise (+I).

#### Cougar

_A large solitary cat, a silent stalker able to leap on prey many times its size._

**Type:** Animal (feline) · **Size:** x1 · **Weight:** 60 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  7  | 10  |  7  |  4  |  3  |  5  |  4  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  8  |  5  | 15  |    38    |    34    |     11      |      8       |   0   |     11     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +1

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  12   | +2  |  4   |  +3   |       |
| Bite   |  11   | +2  |  4   |  +3   |       |

**Reflex Dodge:** 9

**Skills:** Dodge 14, Stealth 15, Perception 12, Climb 13, Jump 17, Run 15

**Special**

- **Night Vision.** No penalty in dim light.
- **Ambush.** Pounces from hiding: attack by surprise (+I).
- **Leaper.** Jumps up to 6 m in a single bound.

#### Leopard / Jaguar

_A powerful spotted cat that climbs, swims and drags prey into trees._

**Type:** Animal (feline) · **Size:** x1 · **Weight:** 70 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  | 10  |  7  |  4  |  3  |  5  |  4  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  8  |  5  | 15  |    40    |    34    |     12      |      8       |   0   |     12     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  12   | +2  |  4   |  +4   |       |
| Bite   |  11   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 9

**Skills:** Dodge 14, Stealth 16, Perception 12, Climb 15, Swimming 12, Run 15

**Special**

- **Night Vision.** No penalty in dim light.
- **Ambush.** Pounces from hiding: attack by surprise (+I).
- **Tree Hunter.** Can carry prey twice its weight up a tree.

#### Lion

_A large social cat of the savannah. Lionesses hunt in groups, males defend the pride._

**Type:** Animal (feline) · **Size:** x2 · **Weight:** 190 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 16  |  9  | 10  |  3  |  3  |  7  |  8  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  5  | 15  |    66    |    46    |     16      |      12      |   1   |     18     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  13   | +2  |  4   |  +8   |       |
| Bite   |  12   | +2  |  4   |  +8   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Stealth 12, Perception 12, Intimidation 12, Run 15

**Special**

- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Roar.** Intimidation vs. Mental Resistance at close range.
- **Night Vision.** No penalty in dim light.

#### Tiger

_The largest cat, a solitary and relentless hunter of forests and jungles._

**Type:** Animal (feline) · **Size:** x2 · **Weight:** 220 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 17  |  9  | 11  |  3  |  3  |  8  |  8  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  | 10  |  5  | 16  |    72    |    48    |     16      |      12      |   1   |     18     |

**Speed:** 16 (base 11): 48 km/h, 40 m/round · **STR bonus:** +6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  14   | +2  |  4   |  +8   |       |
| Bite   |  13   | +2  |  4   |  +8   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Stealth 14, Perception 12, Swimming 14, Intimidation 11, Run 16

**Special**

- **Night Vision.** No penalty in dim light.
- **Ambush.** Attacks by surprise (+I) from cover.
- **Swimmer.** Hunts in water without penalty.

#### Sabre-toothed Cat

_A powerful prehistoric cat with huge canines, specialized in killing large prey._

**Type:** Animal (feline) · **Size:** x2 · **Weight:** 300 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  8  | 12  |  3  |  3  |  7  |  8  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  4  | 15  |    78    |    44    |     18      |      12      |   2   |     22     |

**Speed:** 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +8

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes |
| :---------- | :---: | :-: | :--: | :---: | :---- |
| Claws       |  14   | +2  |  4   |  +10  |       |
| Sabre fangs |  13   | +2  |  4   |  +10  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Stealth 11, Perception 10, Run 15

**Special**

- **Night Vision.** No penalty in dim light.
- **Sabre Fangs.** Bites a grappled or helpless target with +I and half-armor.
- **Ambush.** Attacks by surprise (+I) from cover.

### Reptiles and Amphibians

#### Venomous Snake (Viper / Cobra)

_A small snake relying on camouflage and a fast, venomous strike._

**Type:** Animal (reptile) · **Size:** x1/4 · **Weight:** 1.5 kg · **Threat:** Low (venom can be lethal)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  9  |  4  |  4  |  2  |  3  |  2  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  4  |  5  |    16    |    22    |      2      |      4       |   0   |     2      |

**Speed:** 5 (base 2): 14 km/h, 12 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes                                                 |
| :----- | :---: | :-: | :--: | :---: | :---------------------------------------------------- |
| Bite   |  11   | +0  |  4   |  -8   | Injects venom if at least 1 damage gets through armor |

**Reflex Dodge:** 8

**Skills:** Dodge 13, Stealth 13 (+I in natural terrain), Perception 8 (+I heat sense at close range)

**Special**

- **Venom.** Virulence 12, period 1 minute, effect 1d6* Physical Injury at the end of each period until the victim succeeds a Physical Resistance roll (see 6.1). _Effect values are proposals._
- **Ambush Predator.** Typically attacks by surprise (+I).

**Variants**

- **Cobra:** length 2 m (Size x1/2), Virulence 14.

#### Giant Constrictor (Python / Anaconda)

_A 6 m snake that ambushes prey, coils around it and suffocates it._

**Type:** Animal (reptile) · **Size:** x2 · **Weight:** 100 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 13  |  5  |  9  |  3  |  2  |  4  |  3  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  6  |  4  |  5  |    52    |    26    |     14      |      6       |   1   |     16     |

**Speed:** 5 (base 2): 14 km/h, 12 m/round · **STR bonus:** +4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes                 |
| :----- | :---: | :-: | :--: | :---: | :-------------------- |
| Coil   |  10   | +4  |  3   |  +8   | Grapple (see Special) |
| Bite   |   8   | +2  |  4   |  +6   |                       |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Stealth 9, Perception 8, Climb 8, Swimming 6

**Special**

- **Constriction.** A successful Coil grapples the target. Each round it wins Strength vs. Strength, the victim takes Physical Stun equal to the Coil's damage (suffocation). _Proposal._
- **Ambush.** Attacks by surprise (+I) from water or foliage.

**Variants**

- **Anaconda:** swims with SPD base 6, Stealth +I in water.

#### Crocodile

_A 4 m ambush predator of rivers and swamps, with a bone-crushing bite._

**Type:** Animal (reptile) · **Size:** x2 · **Weight:** 500 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 23  |  5  | 12  |  2  |  2  |  6  |  5  |  7  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  9  |  4  | 12 / 9 |    82    |    36    |     25      |      10      |   4   |     33     |

**Speed:** swimming 12 (base 8): 31 km/h, 26 m/round; ground 9 (base 5): 24 km/h, 20 m/round · **STR bonus:** +15

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes                    |
| :-------- | :---: | :-: | :--: | :---: | :----------------------- |
| Bite      |  12   | +2  |  4   |  +17  | Death Roll (see Special) |
| Tail slap |  11   | +4  |  3   |  +19  |                          |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Stealth 10 (+I in water), Perception 10, Swimming 16

**Special**

- **Death Roll.** A Bite with relative degree II or more grapples the target and adds 1d6* damage each round it holds. _Proposal._
- **Ambush.** Attacks by surprise (+I) from the water's edge.
- **Aquatic Hunter.** Moves at its swimming speed; sluggish out of water.

**Variants**

- **Saltwater Crocodile:** weight 1000 kg, STR 24, Size x4.

#### Komodo Dragon / Giant Lizard

_A large monitor lizard whose bite carries a septic venom. It tracks wounded prey for days._

**Type:** Animal (reptile) · **Size:** x1 · **Weight:** 80 kg · **Threat:** Low (Moderate with venom)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  9  |  6  |  8  |  3  |  2  |  5  |  3  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  6  |  5  |  8  |    44    |    32    |     12      |      6       |   2   |     16     |

**Speed:** 8 (base 5): 22 km/h, 18 m/round · **STR bonus:** +2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   9   | +2  |  4   |  +4   | Venom |
| Claws  |   9   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 12, Tracking 11 (by scent), Stealth 8, Climb 8, Swimming 8, Run 9

**Special**

- **Septic Venom.** Virulence 10, period 1 hour, effect 1 Physical Injury and -I to all rolls until resisted. _Proposal._
- **Scavenger.** Smells carrion from far away.

**Variants**

- **Giant Lizard (fantasy):** weight 400 kg, Size x2, STR 21.

#### Giant Tortoise

_A slow, ancient grazer protected by a heavy shell. It withdraws rather than fights._

**Type:** Animal (reptile) · **Size:** x1 · **Weight:** 300 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 17  |  1  | 14  |  2  |  2  |  5  |  3  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  1  |  5  |  2  |  3  |    72    |    24    |     16      |      6       |   8   |     32     |

**Speed:** 3 (base 0): 3.5 km/h, 3 m/round · **STR bonus:** +6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   8   | +2  |  4   |  +8   |       |

**Reflex Dodge:** 3

**Skills:** Dodge 2, Perception 4

**Special**

- **Shell.** Already counted in Protection.
- **Withdrawal.** Protection 12 against all attacks, but it cannot attack or move.
- **Long-lived.** Can live for 150 years or more.

#### Giant Toad

_A swamp-dwelling amphibian the size of a large dog. It snatches prey with a sticky tongue._

**Type:** Animal (amphibian) · **Size:** x1/2 · **Weight:** 50 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  5  |  6  |  3  |  2  |  4  |  2  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  5  |  4  |  6  |    30    |    24    |     10      |      4       |   0   |     10     |

**Speed:** 6 (base 4): 17 km/h, 14 m/round · **STR bonus:** +0

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes              |
| :----- | :---: | :-: | :--: | :---: | :----------------- |
| Tongue |   8   | +0  |  1   |  +0   | Grapple, reach 6 m |
| Bite   |   7   | +2  |  4   |  +2   |                    |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Stealth 8 (+I in swamp), Perception 9, Jump 9, Swimming 6

**Special**

- **Sticky Tongue.** A hit grapples the target and pulls it adjacent (Strength vs. Strength to resist). _Proposal._
- **Toxic Skin.** Contact poison: Virulence 10, period 10 minutes, effect 1d6* Physical Stun. _Proposal._

### Birds

#### Hawk / Falcon

_A diurnal bird of prey with exceptional eyesight, hunting small animals from the air._

**Type:** Animal (bird) · **Size:** x1/4 · **Weight:** 1 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  | 11  |  3  |  5  |  3  |  4  |  3  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  7  |  6  | 17 / 4 |    16    |    30    |      2      |      6       |   0   |     2      |

**Speed:** flying 17 (base 14): 54 km/h, 45 m/round; ground 4 (base 1): 7 km/h, 6 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Talons |  10   | +0  |  4   |  -8   |       |
| Beak   |  10   | +0  |  4   |  -8   |       |

**Reflex Dodge:** 9

**Skills:** Dodge 14, Perception 16 (+I by sight), Flight 19

**Special**

- **Flight.** Uses the flying speed above.
- **Stoop.** An attack diving from above and unseen counts as an attack by surprise (+I).

**Variants**

- **Eagle** and **Owl** have their own entries.

#### Eagle

_A large bird of prey, a strong flyer with extraordinary eyesight._

**Type:** Animal (bird) · **Size:** x1/2 · **Weight:** 5 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  | 10  |  4  |  5  |  3  |  5  |  4  |  9  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  6  | 17 / 4 |    22    |    36    |      4      |      8       |   0   |     4      |

**Speed:** flying 17 (base 14): 54 km/h, 45 m/round; ground 4 (base 1): 7 km/h, 6 m/round · **STR bonus:** -6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Talons |  10   | +2  |  4   |  -4   |       |
| Beak   |  10   | +2  |  4   |  -4   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 13, Perception 17 (+I by sight), Flight 19

**Special**

- **Flight.** Uses the flying speed above.
- **Stoop.** An attack diving from above and unseen counts as an attack by surprise (+I).

**Variants**

- **Golden / Sea Eagle:** can carry up to 6 kg.

#### Owl

_A nocturnal raptor with silent flight and superb hearing._

**Type:** Animal (bird) · **Size:** x1/4 · **Weight:** 2 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  9  |  3  |  5  |  3  |  4  |  4  |  9  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  6  | 15 / 4 |    16    |    34    |      2      |      8       |   0   |     2      |

**Speed:** flying 15 (base 12): 43 km/h, 36 m/round; ground 4 (base 1): 7 km/h, 6 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Talons |   9   | +0  |  4   |  -8   |       |
| Beak   |   9   | +0  |  4   |  -8   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Perception 17 (+I by hearing), Stealth 15, Flight 16

**Special**

- **Flight.** Uses the flying speed above.
- **Silent Flight.** +II to Stealth while flying.
- **Night Hunter.** No penalty in dim light, only -I in total darkness.

#### Raven / Crow

_A clever black bird that scavenges, mimics sounds and gathers in flocks._

**Type:** Animal (bird) · **Size:** x1/4 · **Weight:** 1 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  9  |  3  |  5  |  5  |  4  |  3  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  6  |  6  | 15 / 4 |    16    |    30    |      2      |      6       |   0   |     2      |

**Speed:** flying 15 (base 12): 43 km/h, 36 m/round; ground 4 (base 1): 7 km/h, 6 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |   9   | +0  |  4   |  -8   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Perception 12, Flight 16

**Special**

- **Flight.** Uses the flying speed above.
- **Clever.** Can learn simple tasks and mimic sounds.
- **Scavenger.** Gathers around carrion and battlefields.

#### Vulture

_A large carrion bird that soars for hours looking for the dying._

**Type:** Animal (bird) · **Size:** x1/2 · **Weight:** 6 kg · **Threat:** Negligible

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  6  |  5  |  3  |  3  |  5  |  3  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  5  |  5  | 15 / 3 |    24    |    32    |      4      |      6       |   0   |     4      |

**Speed:** flying 15 (base 13): 43 km/h, 36 m/round; ground 3 (base 1): 3.5 km/h, 3 m/round · **STR bonus:** -6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |   8   | +2  |  4   |  -4   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 15, Flight 16

**Special**

- **Flight.** Uses the flying speed above.
- **Soaring.** Flies for hours without fatigue.
- **Carrion Eater.** +I to Physical Resistance against disease.

#### Ostrich

_A tall flightless bird, the fastest on land, with a powerful kick._

**Type:** Animal (bird) · **Size:** x1 · **Weight:** 120 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  7  |  9  |  3  |  2  |  5  |  3  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  7  |  4  | 17  |    52    |    30    |     14      |      6       |   0   |     14     |

**Speed:** 17 (base 13): 54 km/h, 45 m/round · **STR bonus:** +4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Kick   |  10   | +0  |  2   |  +4   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 12, Run 20

**Special**

- **Runner.** Keeps its top speed over long distances.
- **Skittish.** Prefers to flee, but a cornered bird kicks hard.

#### Terror Bird

_A giant, flightless predator of the prehistoric plains, with a hooked beak and powerful legs._

**Type:** Animal (bird) · **Size:** x2 · **Weight:** 150 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 14  |  7  |  9  |  3  |  3  |  6  |  5  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  8  |  4  | 17  |    58    |    36    |     15      |      10      |   1   |     17     |

**Speed:** 17 (base 13): 54 km/h, 45 m/round · **STR bonus:** +5

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |  12   | +2  |  4   |  +7   |       |
| Kick   |  11   | +4  |  3   |  +9   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 11, Run 19

**Special**

- **Swift Pursuit.** Runs down prey over short distances.
- **Prehistoric.** Native to TL0 settings.

#### Roc

_A legendary bird of colossal size, said to carry off elephants._

**Type:** Animal (giant bird) · **Size:** x8 · **Weight:** 2000 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 25  |  6  | 14  |  3  |  4  |  8  |  8  |  9  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  5  | 20 / 9 |    94    |    50    |     31      |      12      |   3   |     37     |

**Speed:** flying 20 (base 15): 72 km/h, 60 m/round; ground 9 (base 4): 24 km/h, 20 m/round · **STR bonus:** +21

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Talons |  13   | +4  |  4   |  +25  |       |
| Beak   |  13   | +4  |  4   |  +25  |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 16, Flight 21

**Special**

- **Flight.** Uses the flying speed above.
- **Diving Strike.** Creature Charge in flight: +16 damage (2 x speed bonus +8), limited by Max Impact Bonus.
- **Carry Off.** Can lift a load of up to 1.5 tons in flight.

### Dinosaurs and Prehistoric Reptiles

#### Compsognathus

_A chicken-sized, fast, two-legged carnivore that hunts small prey and scavenges, often in packs._

**Type:** Animal (dinosaur) · **Size:** x1/4 · **Weight:** 3 kg · **Threat:** Negligible (Low in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  | 10  |  3  |  4  |  2  |  3  |  2  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  5  | 14  |    14    |    24    |      2      |      4       |   0   |     2      |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** -8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   9   | +0  |  4   |  -8   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 13, Perception 11, Stealth 12, Run 15

**Special**

- **Pack Hunter.** Usually met in packs of 6 to 12.
- **Skittish.** Flees when it has lost half its Physical HP.

#### Velociraptor / Deinonychus

_A man-sized, feathered pack hunter with a sickle-shaped claw on each foot._

**Type:** Animal (dinosaur) · **Size:** x1 · **Weight:** 70 kg · **Threat:** Moderate (High in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  9  |  7  |  4  |  4  |  5  |  4  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  5  | 14  |    40    |    34    |     12      |      8       |   1   |     14     |

**Speed:** 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +2

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes |
| :---------- | :---: | :-: | :--: | :---: | :---- |
| Sickle claw |  11   | +2  |  4   |  +4   |       |
| Bite        |  10   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Perception 12, Stealth 11, Run 15, Jump 13

**Special**

- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Pounce.** Leaps on prey from up to 4 m, clinging with its claws (+I when attacking by surprise).

#### Dilophosaurus

_A 6 m crested predator that hunts by ambush and keeps its prey at a distance._

**Type:** Animal (dinosaur) · **Size:** x2 · **Weight:** 400 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  7  | 10  |  3  |  3  |  6  |  5  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  9  |  4  | 14  |    72    |    36    |     18      |      10      |   2   |     22     |

**Speed:** 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes             |
| :----- | :---: | :-: | :--: | :---: | :---------------- |
| Bite   |  12   | +2  |  4   |  +10  |                   |
| Claws  |  12   | +2  |  4   |  +10  |                   |
| Spit   |   6   | +0  |  1   |  +0   | Venom, range UT 4 |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 10, Run 14

**Special**

- **Venom Spit.** Aimed at the eyes. Virulence 12, period 1 hour: blinded until resisted. _Proposal (fictional ability)._
- **Crest Display.** Intimidation PRE+3.

#### Allosaurus

_A 9 m Jurassic predator, fast and powerful, that hunts large herbivores._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 2000 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 25  |  5  | 13  |  2  |  3  |  7  |  6  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 15  |    90    |    40    |     31      |      11      |   3   |     37     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +21

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  12   | +2  |  4   |  +23  |       |
| Claws  |  12   | +2  |  4   |  +23  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Perception 10, Tracking 8 (by scent), Run 15

**Special**

- **Ambusher.** Charges prey from cover (Creature Charge: +8, 2 x speed bonus +4, limited by Max Impact Bonus).
- **Rending Bite.** A Bite with relative degree II or more tears the target: +1d6*.

#### Tyrannosaurus

_A 12 m apex predator of the late Cretaceous. Its bite crushes bone and its roar can paralyze._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 8000 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 29  |  4  | 16  |  2  |  3  |  8  |  8  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  | 10  |  4  | 14  |   106    |    48    |     45      |      12      |   4   |     53     |

**Speed:** 14 (base 9): 38 km/h, 32 m/round · **STR bonus:** +35

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes |
| :--------- | :---: | :-: | :--: | :---: | :---- |
| Bite       |  13   | +2  |  4   |  +37  | AP 1  |
| Tail swipe |  12   | +4  |  3   |  +39  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 13, Tracking 12 (by scent), Intimidation 14, Run 14

**Special**

- **Bone Crusher.** Its Bite has Armor Piercing 1 (armor value halved).
- **Terrifying Roar.** Intimidation vs. Mental Resistance; a failure inflicts Psychical Stun 1d6* (range UT 6). _Proposal._
- **Keen Smell.** +I to Perception and Tracking rolls based on scent.

#### Spinosaurus

_A semi-aquatic giant with a sail on its back, a crocodile-like snout and claws to snatch fish and prey._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 7000 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 28  |  4  | 15  |  2  |  3  |  7  |  7  |  8  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  | 10  |  4  | 13 / 12 |   100    |    44    |     40      |      11      |   4   |     48     |

**Speed:** ground 13 (base 9): 35 km/h, 29 m/round; swimming 12 (base 8): 31 km/h, 26 m/round · **STR bonus:** +30

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  13   | +2  |  4   |  +32  |       |
| Claws  |  13   | +2  |  4   |  +32  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 12, Swimming 16, Intimidation 10

**Special**

- **Semi-aquatic.** Uses the ground speed on land, the swimming speed in water.
- **Sail Display.** Intimidation vs. rivals; +I against other animals.

#### Triceratops

_A 9 m herbivore with a bony frill and three horns. It defends the herd by charging._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 6000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 28  |  4  | 15  |  2  |  2  |  7  |  6  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  9  |  3  | 13  |   100    |    38    |     40      |      11      |   6   |     52     |

**Speed:** 13 (base 9): 35 km/h, 29 m/round · **STR bonus:** +30

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Horns  |  12   | +4  |  4   |  +34  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 9, Run 13

**Special**

- **Charge.** Creature Charge: +8 damage (2 x speed bonus +4), limited by Max Impact Bonus.
- **Frill.** Already counted in Protection.
- **Horn Parry.** Can parry with its horns using its attack skill.

#### Stegosaurus

_A 9 m herbivore with a double row of plates and a spiked tail it swings against predators._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 4000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 27  |  3  | 14  |  2  |  2  |  6  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  8  |  3  |  9  |    94    |    30    |     37      |      8       |   5   |     47     |

**Speed:** 9 (base 5): 24 km/h, 20 m/round · **STR bonus:** +27

**Attacks**

| Attack            | Skill | Dmg | DMAX | Total | Notes                 |
| :---------------- | :---: | :-: | :--: | :---: | :-------------------- |
| Thagomizer (tail) |  11   | +4  |  4   |  +31  | Sweeps targets behind |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 7

**Special**

- **Tail Swing.** Can strike any target behind it or at its side, without turning.
- **Slow.** Rarely pursues.

#### Ankylosaurus

_A living tank covered with bony plates and armed with a heavy bone club at the end of its tail._

**Type:** Animal (dinosaur) · **Size:** x4 · **Weight:** 6000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 28  |  2  | 16  |  2  |  2  |  7  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  8  |  3  |  9  |   102    |    32    |     40      |      8       |  10   |     60     |

**Speed:** 9 (base 5): 24 km/h, 20 m/round · **STR bonus:** +30

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes                                    |
| :-------- | :---: | :-: | :--: | :---: | :--------------------------------------- |
| Tail club |  11   | +4  |  3   |  +34  | Halves target's Physical Shock Threshold |

**Reflex Dodge:** 3

**Skills:** Dodge 2, Perception 7

**Special**

- **Armored.** Already counted in Protection.
- **Bone Breaker.** Its club blows halve the target's Physical Shock Threshold (as a called shot, with no penalty to hit).

#### Diplodocus / Brachiosaurus

_A gigantic long-necked herbivore, harmless but for its size, its stomp and a whipping tail._

**Type:** Animal (dinosaur) · **Size:** x8 · **Weight:** 20000 kg · **Threat:** Deadly if provoked

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 30  |  2  | 18  |  1  |  2  |  6  |  5  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  8  |  2  |  8  |   108    |    30    |     50      |      10      |   4   |     58     |

**Speed:** 8 (base 3): 22 km/h, 18 m/round · **STR bonus:** +40

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes |
| :-------- | :---: | :-: | :--: | :---: | :---- |
| Tail whip |  11   | +4  |  3   |  +44  |       |
| Stomp     |  11   | +4  |  3   |  +44  |       |

**Reflex Dodge:** 3

**Skills:** Dodge 2, Perception 6

**Special**

- **Gigantic.** Anything smaller than a ton can be walked over without notice.
- **Herd Animal.** Moves in herds; stampedes if panicked.

**Variants**

- **Brachiosaurus:** weight 40000 kg, STR 31, taller, no tail whip.

#### Pteranodon

_A large flying reptile with a 6 m wingspan, a long beak and a head crest. It catches fish and small prey._

**Type:** Animal (pterosaur) · **Size:** x2 · **Weight:** 25 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  8  |  4  |  4  |  3  |  4  |  3  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  | 15 / 4 |    22    |    30    |      6      |      6       |   0   |     6      |

**Speed:** flying 15 (base 12): 43 km/h, 36 m/round; ground 4 (base 1): 7 km/h, 6 m/round · **STR bonus:** -4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |   9   | +2  |  4   |  -2   |       |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 13, Flight 16

**Special**

- **Flight.** Uses the flying speed above.
- **Fisher.** Snatches prey from water in passing.
- **Colony Bird.** Often found in flocks.

#### Plesiosaur

_A long-necked marine reptile, a 7 m predator of coastal waters._

**Type:** Animal (marine reptile) · **Size:** x4 · **Weight:** 1500 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 24  |  5  | 12  |  2  |  2  |  6  |  5  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  9  |  4  | 11  |    84    |    36    |     28      |      10      |   2   |     32     |

**Speed:** swimming 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +18

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes     |
| :----- | :---: | :-: | :--: | :---: | :-------- |
| Bite   |  12   | +2  |  4   |  +20  | Reach 4 m |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 10, Swimming 16

**Special**

- **Long Neck.** Attacks from up to 4 m away.
- **Aquatic.** Helpless out of water.

### Other Mammals

#### Horse (Riding)

_A strong, fast herbivore used for riding, war and draft. Kicks and bites when cornered, but prefers to flee._

**Type:** Animal (equine) · **Size:** x2 · **Weight:** 500 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  7  | 12  |  3  |  3  |  5  |  4  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  9  |  4  | 18  |    74    |    32    |     18      |      8       |   1   |     20     |

**Speed:** 18 (base 14): 60 km/h, 50 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Kick   |   9   | +4  |  3   |  +12  |       |
| Bite   |   9   | +2  |  4   |  +10  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 10, Run 19, Jump 15, Swimming 12

**Special**

- **Trample.** Creature Charge: damage +14 (2 x speed bonus +7), limited by Max Impact Bonus.
- **Mount.** Carries up to 300 kg (UT).
- **Skittish.** Loud noises may panic an untrained horse (Riding or Animal Handling roll).

**Variants**

- **War Horse:** STR 21, END 13, Kick and Bite skill +4, barding adds Protection.
- **Draft Horse:** STR 23, END 14, SPD base 10.

#### Ox / Bull

_A massive domestic bovine. An ox is placid, a bull in rut or defending its herd is not._

**Type:** Animal (bovine) · **Size:** x2 · **Weight:** 700 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  5  | 12  |  2  |  2  |  5  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  8  |  3  | 12  |    78    |    28    |     22      |      8       |   1   |     24     |

**Speed:** 12 (base 8): 31 km/h, 26 m/round · **STR bonus:** +12

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Horns  |  11   | +4  |  4   |  +16  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Perception 7, Run 12

**Special**

- **Charge.** Creature Charge: +8 damage (2 x speed bonus +4), limited by Max Impact Bonus.
- **Draft Animal.** An ox can pull up to 1.5 tons (UT).

**Variants**

- **Ox:** placid, no Charge unless provoked.

#### Wild Boar

_A stocky, short-tempered forest pig with sharp tusks that charges when cornered._

**Type:** Animal (suid) · **Size:** x1/2 · **Weight:** 120 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  6  |  9  |  2  |  3  |  6  |  4  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  7  |  4  | 13  |    54    |    34    |     14      |      8       |   2   |     18     |

**Speed:** 13 (base 10): 35 km/h, 29 m/round · **STR bonus:** +4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Tusks  |  11   | +2  |  4   |  +6   |       |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Perception 10, Tracking 10 (by scent), Run 13

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Charge.** Creature Charge: +8 damage (2 x speed bonus +4), limited by Max Impact Bonus.
- **Savage.** +I to Endurance rolls against Physical Shock.

#### Hyena

_A scavenging and hunting carnivore with powerful jaws, living in clans._

**Type:** Animal (carnivore) · **Size:** x1/2 · **Weight:** 60 kg · **Threat:** Low (Moderate in clans)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  7  |  8  |  3  |  4  |  5  |  5  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  7  |  5  | 14  |    42    |    36    |     12      |      10      |   0   |     12     |

**Speed:** 14 (base 11): 38 km/h, 32 m/round · **STR bonus:** +2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  11   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 12, Tracking 11 (by scent), Run 14

**Special**

- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Bone Crusher.** Bite damage halves the Protection of armor made of bone, hide or leather.

#### Gorilla

_A huge, peaceful ape that defends its group with tremendous strength if threatened._

**Type:** Animal (primate) · **Size:** x1 · **Weight:** 160 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 17  |  6  | 10  |  4  |  4  |  6  |  6  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  8  |  5  |  8  |    66    |    38    |     16      |      11      |   0   |     16     |

**Speed:** 8 (base 4): 22 km/h, 18 m/round · **STR bonus:** +6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Slam   |  11   | +0  |  2   |  +6   |       |
| Bite   |  11   | +2  |  4   |  +8   |       |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Perception 10, Climb 10, Intimidation 10

**Special**

- **Chest Beat.** Intimidation vs. Mental Resistance as a warning display.
- **Grappler.** May grapple a target and bite it.

#### Rhinoceros

_A 2-ton herbivore with a thick hide and a heavy horn, short-sighted and prone to charge anything that moves._

**Type:** Animal (rhinoceros) · **Size:** x2 · **Weight:** 2000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 25  |  4  | 14  |  2  |  2  |  6  |  5  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  8  |  2  | 16  |    90    |    30    |     31      |      10      |   5   |     41     |

**Speed:** 16 (base 12): 48 km/h, 40 m/round · **STR bonus:** +21

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Horn   |  11   | +4  |  4   |  +25  |       |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 5, Run 16

**Special**

- **Charge.** Creature Charge: +12 damage (2 x speed bonus +6), limited by Max Impact Bonus.
- **Poor Sight.** -I on Perception beyond 20 m.
- **Thick Hide.** Already counted in Protection.

#### Hippopotamus

_A territorial, 1.5 ton amphibious herbivore, among the most dangerous large animals._

**Type:** Animal (hippopotamid) · **Size:** x2 · **Weight:** 1500 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 25  |  3  | 14  |  2  |  2  |  6  |  5  |  5  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  8  |  3  | 12 / 10 |    90    |    32    |     31      |      10      |   3   |     37     |

**Speed:** ground 12 (base 8): 31 km/h, 26 m/round; swimming 10 (base 6): 26 km/h, 22 m/round · **STR bonus:** +21

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  11   | +2  |  4   |  +23  |       |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 7, Swimming 16

**Special**

- **Territorial.** Attacks anything that comes between it and water.
- **Amphibious.** Can hold its breath for 5 minutes and walk on the river bed.

#### Elephant

_A 5-ton herbivore, intelligent and long-lived, able to uproot trees. Also used as a war beast._

**Type:** Animal (proboscid) · **Size:** x4 · **Weight:** 5000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 28  |  3  | 16  |  3  |  5  |  7  |  6  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 14  |   102    |    38    |     40      |      11      |   4   |     48     |

**Speed:** 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +30

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes         |
| :----- | :---: | :-: | :--: | :---: | :------------ |
| Tusks  |  12   | +4  |  4   |  +34  |               |
| Trunk  |  12   | +4  |  3   |  +34  | Grapple       |
| Stomp  |  12   | +4  |  3   |  +34  | Prone targets |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 8, Run 14

**Special**

- **Charge.** Creature Charge: +10 damage (2 x speed bonus +5), limited by Max Impact Bonus.
- **Trunk Grab.** May grapple a target with the Trunk and hurl or crush it.
- **Memory.** Never forgets a friend or an enemy.

**Variants**

- **War Elephant:** trained, carries a howdah and up to 4 riders (portable weight 5 tons).

#### Mammoth

_A shaggy, long-tusked elephant of the glacial era._

**Type:** Animal (proboscid) · **Size:** x4 · **Weight:** 6000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 29  |  3  | 17  |  3  |  5  |  7  |  6  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 14  |   106    |    38    |     45      |      11      |   5   |     55     |

**Speed:** 14 (base 9): 38 km/h, 32 m/round · **STR bonus:** +35

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes   |
| :----- | :---: | :-: | :--: | :---: | :------ |
| Tusks  |  12   | +4  |  4   |  +39  |         |
| Trunk  |  12   | +4  |  3   |  +39  | Grapple |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 8, Run 14

**Special**

- **Cold Adapted.** Immune to normal cold.
- **Charge.** Creature Charge: +10 damage (2 x speed bonus +5), limited by Max Impact Bonus.

### Aquatic Life

#### Great White Shark

_A 4.5 m apex predator, an ambush hunter attracted by blood._

**Type:** Animal (fish) · **Size:** x2 · **Weight:** 1000 kg · **Threat:** Deadly (in water)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 24  |  8  | 12  |  2  |  2  |  6  |  5  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 11  |  4  | 13  |    84    |    40    |     28      |      10      |   2   |     32     |

**Speed:** swimming 13 (base 8): 35 km/h, 29 m/round · **STR bonus:** +18

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  13   | +2  |  4   |  +20  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 14, Tracking 15 (blood and electro-sense), Swimming 18

**Special**

- **Aquatic.** Helpless out of water.
- **Blood Frenzy.** +I on attacks against bleeding targets.
- **Bite and Retreat.** Usually strikes then circles back.

#### Orca

_A 7 m intelligent apex predator that hunts in coordinated pods._

**Type:** Animal (marine mammal) · **Size:** x4 · **Weight:** 4000 kg · **Threat:** Deadly (in water)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 27  |  6  | 14  |  2  |  5  |  7  |  7  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  4  | 17  |    96    |    44    |     37      |      11      |   2   |     41     |

**Speed:** swimming 17 (base 12): 54 km/h, 45 m/round · **STR bonus:** +27

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes |
| :-------- | :---: | :-: | :--: | :---: | :---- |
| Bite      |  13   | +2  |  4   |  +29  |       |
| Tail slap |  12   | +4  |  3   |  +31  | Stun  |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Perception 13 (+I echolocation), Swimming 20, Tracking 11

**Special**

- **Aquatic.** Helpless out of water.
- **Pod Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Tail Slap.** Damage may be inflicted as Physical Stun with no penalty.

#### Giant Squid

_A 12 m deep-sea cephalopod with ten arms, a hard beak and eyes the size of dinner plates._

**Type:** Animal (cephalopod) · **Size:** x8 · **Weight:** 500 kg · **Threat:** High (in water)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  5  | 10  |  5  |  3  |  5  |  3  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  8  |  5  | 11  |    74    |    28    |     22      |      6       |   1   |     24     |

**Speed:** swimming 11 (base 8): 29 km/h, 24 m/round · **STR bonus:** +12

**Attacks**

| Attack   | Skill | Dmg | DMAX | Total | Notes                         |
| :------- | :---: | :-: | :--: | :---: | :---------------------------- |
| Tentacle |  11   | +4  |  3   |  +16  | Grapple, Multiple Attacks (2) |
| Beak     |  11   | +4  |  4   |  +16  | Grappled target               |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 9, Swimming 16, Stealth 7

**Special**

- **Multiple Attacks.** Two tentacle attacks per round.
- **Ink Cloud.** Once per fight: a 10 m cloud blocks vision (-II to all attacks within) and the squid jets away at +4 SPD.
- **Aquatic.** Helpless out of water.

### Vermin and Invertebrates

#### Giant Rat

_A dog-sized, disease-ridden rodent living in sewers, ruins and dungeons._

**Type:** Animal (rodent) · **Size:** x1/4 · **Weight:** 6 kg · **Threat:** Negligible (Low in numbers)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  8  |  5  |  4  |  3  |  3  |  2  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  5  | 10  |    20    |    24    |      4      |      4       |   0   |     4      |

**Speed:** 10 (base 7): 26 km/h, 22 m/round · **STR bonus:** -6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes   |
| :----- | :---: | :-: | :--: | :---: | :------ |
| Bite   |   8   | +0  |  4   |  -6   | Disease |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 11, Stealth 11, Climb 10, Swimming 7, Run 10

**Special**

- **Filth Fever.** Virulence 8, period 1 day, effect 1 Physical Injury and -I to all rolls until resisted. _Proposal._
- **Night Vision.** No penalty in dim light.

#### Rat Swarm

_Dozens of rats surging together over everything in their path._

**Type:** Animal swarm (rodent) · **Size:** x1 · **Weight:** 15 kg total · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  4  |  8  |  8  |  3  |  3  |  5  |  2  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  4  |  9  |    34    |    28    |      8      |      4       |   0   |     8      |

**Speed:** 9 (base 5): 24 km/h, 20 m/round · **STR bonus:** -2

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                      |
| :---------- | :---: | :-: | :--: | :---: | :------------------------- |
| Swarm bites |   9   | +4  |  3   |  +2   | All characters in the zone |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 11, Climb 10, Swimming 6

**Special**

- **Swarm.** Occupies a zone about 3 m across and attacks every character in it. Single-target attacks inflict only half damage on it; area attacks, fire and explosions inflict full damage. It disperses when it has lost half its Physical HP. _Proposal._
- **Filth Fever.** Virulence 8, period 1 day, effect 1 Physical Injury and -I to all rolls until resisted. _Proposal._

#### Bat Swarm

_A cloud of bats bursting from a cave or a ruin, blinding and biting anything in their way._

**Type:** Animal swarm (bat) · **Size:** x1 · **Weight:** 5 kg total · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  | 10  |  5  |  3  |  2  |  3  |  2  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  5  | 11  |    20    |    28    |      4      |      4       |   0   |     4      |

**Speed:** flying 11 (base 8): 29 km/h, 24 m/round · **STR bonus:** -6

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                      |
| :---------- | :---: | :-: | :--: | :---: | :------------------------- |
| Swarm bites |   9   | +3  |  2   |  -3   | All characters in the zone |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 14

**Special**

- **Swarm.** Occupies a zone about 3 m across and attacks every character in it. Single-target attacks inflict only half damage on it; area attacks, fire and explosions inflict full damage. It disperses when it has lost half its Physical HP. _Proposal._
- **Flight.** Uses the flying speed above.
- **Blinding Cloud.** All actions of characters in the zone are at -I.
- **Fear of Light.** Disperses when exposed to bright light.

#### Giant Spider

_A 2 m (leg span) hunting spider that ambushes prey from webs._

**Type:** Animal (arachnid) · **Size:** x1 · **Weight:** 40 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  8  |  6  |  6  |  3  |  5  |  3  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  6  |  8  |    34    |    30    |     11      |      6       |   1   |     13     |

**Speed:** 8 (base 5): 22 km/h, 18 m/round · **STR bonus:** +1

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes                 |
| :----- | :---: | :-: | :--: | :---: | :-------------------- |
| Bite   |   9   | +2  |  4   |  +3   | Venom                 |
| Web    |   9   | +0  |  1   |  +0   | Entangles, range UT 4 |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Stealth 12, Perception 10, Climb 14

**Special**

- **Venom.** Virulence 13, period 1 minute, effect 1d6* Physical Stun per failed period (paralysis). _Proposal._
- **Web.** A hit entangles the target; freeing himself requires Strength vs. Strength 10.
- **Wall Walker.** Climbs any surface.

#### Scorpion

_A small arachnid with a venomous sting, hiding under stones and in boots._

**Type:** Animal (arachnid) · **Size:** x1/16 · **Weight:** 0.05 kg · **Threat:** Negligible (Low with venom)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  6  |  3  |  4  |  1  |  3  |  1  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  4  |  4  |  4  |    12    |    18    |      0      |      2       |   1   |     2      |

**Speed:** 4 (base 2): 7 km/h, 6 m/round · **STR bonus:** -10

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Sting  |   7   | +0  |  4   |  -10  | Venom |
| Claws  |   6   | +0  |  4   |  -10  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Stealth 11, Perception 7

**Special**

- **Venom.** Virulence 12, period 10 minutes, effect 1d6* Physical Injury per failed period. _Proposal._
- **Hidden.** Almost invisible: -II to spot it before it strikes.

**Variants**

- **Giant Scorpion:** Size x2, weight 200 kg, STR 19, claws DMAX 3 with grapple, Virulence 14.

#### Giant Centipede

_A 1.5 m predatory arthropod that hides in dark corners and lunges at prey._

**Type:** Animal (arthropod) · **Size:** x1/2 · **Weight:** 10 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  8  |  5  |  5  |  1  |  4  |  2  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  5  |  5  |  9  |    24    |    24    |      6      |      4       |   1   |     8      |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** -4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |   8   | +2  |  4   |  -2   | Venom |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Stealth 11, Perception 8, Climb 12

**Special**

- **Venom.** Virulence 11, period 1 minute, effect 1d6* Physical Injury per failed period. _Proposal._
- **Many Legs.** +I to Climb and to resist being knocked down.

---

## Part II: Fantasy Peoples

### Elves

#### High Elf (Warden)

_Graceful, long-lived folk with keen senses and a love of bow and blade._

**Type:** Humanoid (elf) · **Size:** x1 · **Weight:** 65 kg · **Threat:** Moderate

**Racial template:** AGI +2, DEX +2, WIT +1, WIL +1, PRE +2, INS +2 (vs. human baseline 5). Warden training adds AGI +2, DEX +1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  9  |  5  |  8  |  6  |  6  |  7  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  7  |  8  |  9  |    32    |    42    |     10      |      11      |   2   |     14     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +0

**Equipment:** Rigid leather armor (2), long sword, longbow, dagger.

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes      |
| :--------- | :---: | :-: | :--: | :---: | :--------- |
| Long sword |  14   | +6  |  4   |  +6   |            |
| Longbow    |  16   | +9  |  4   |  +9   | Range UT 9 |
| Dagger     |  11   | +2  |  4   |  +2   |            |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Stealth 14, Perception 13, Survival 11, Tracking 11, Music 12

**Special**

- **Keen Senses.** +I to Perception in dim light and by hearing.
- **Fey Resolve.** +I to Mental Resistance against magical charm and compulsion.
- **Long-lived.** Lives for several centuries.

**Variants**

- Wood Elf, Dark Elf and other roles use the same template with adjusted characteristics and skills.

#### Wood Elf (Hunter)

_Reclusive forest dwellers, masters of tracking, camouflage and the bow._

**Type:** Humanoid (elf) · **Size:** x1 · **Weight:** 60 kg · **Threat:** Moderate

**Racial template:** AGI +2, DEX +2, PRE +1, INS +3. Hunter training adds AGI +2, DEX +1, END +1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  9  |  6  |  8  |  5  |  5  |  6  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  7  |  8  |  9  |    32    |    40    |     10      |      11      |   1   |     12     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +0

**Equipment:** Soft leather armor (1), shortbow, spear, dagger.

**Attacks**

| Attack   | Skill | Dmg | DMAX | Total | Notes      |
| :------- | :---: | :-: | :--: | :---: | :--------- |
| Shortbow |  16   | +6  |  4   |  +6   | Range UT 9 |
| Spear    |  12   | +6  |  4   |  +6   |            |
| Dagger   |  11   | +2  |  4   |  +2   |            |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Stealth 15, Perception 14, Survival 13, Tracking 13, Climb 11

**Special**

- **Keen Senses.** +I to Perception in dim light and by hearing.
- **Forest Stride.** No movement penalty in woods; +I to Stealth in forest.
- **Fey Resolve.** +I to Mental Resistance against magical charm and compulsion.

**Variants**

- **Other roles** (shaman, noble, scout) use the same template.

#### Dark Elf (Skirmisher)

_Cruel, secretive elves of the underworld, raiders who strike from the shadows with poisoned bolts._

**Type:** Humanoid (elf) · **Size:** x1 · **Weight:** 60 kg · **Threat:** Moderate

**Racial template:** AGI +2, DEX +2, WIT +2, WIL +2, PRE +2, INS +1. Skirmisher training adds AGI +2, DEX +1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  9  |  5  |  8  |  7  |  7  |  7  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  8  |  7  |  7  |  9  |    34    |    42    |     10      |      11      |   2   |     14     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +0

**Equipment:** Rigid leather armor (2), short sword, light crossbow, dagger.

**Attacks**

| Attack         | Skill | Dmg | DMAX | Total | Notes                      |
| :------------- | :---: | :-: | :--: | :---: | :------------------------- |
| Short sword    |  11   | +4  |  4   |  +4   |                            |
| Light crossbow |  13   | +6  |  4   |  +6   | Range UT 9, poisoned bolts |
| Dagger         |  11   | +2  |  4   |  +2   |                            |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Stealth 14, Perception 11, Persuasion 10, Handcrafts (poisons) 11

**Special**

- **Night Vision.** No penalty in dim light.
- **Light Sensitivity.** -I to all actions in bright sunlight.
- **Sleep Poison.** Virulence 12, period 1 minute: unconscious until resisted. _Proposal._
- **Fey Resolve.** +I to Mental Resistance against magical charm and compulsion.

### Dwarves

#### Mountain Dwarf (Warrior)

_Short, broad folk, master smiths and stubborn fighters._

**Type:** Humanoid (dwarf) · **Size:** x1 · **Weight:** 80 kg · **Threat:** Moderate

**Racial template:** STR +2, AGI -1, END +3, WIL +2, PRE -1. Warrior training adds STR +1, AGI +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  5  |  8  |  5  |  5  |  7  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  |  7  |    46    |    32    |     12      |      8       |   5   |     22     |

**Speed:** 7 (base 4): 19 km/h, 16 m/round · **STR bonus:** +2

**Equipment:** Chainmail (4) and helmet (+1), axe, medium shield, light crossbow.

**Attacks**

| Attack         | Skill | Dmg | DMAX | Total | Notes      |
| :------------- | :---: | :-: | :--: | :---: | :--------- |
| Axe            |  15   | +8  |  3   |  +10  |            |
| Light crossbow |  10   | +6  |  4   |  +6   | Range UT 9 |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Shield 12 (+I parry vs frontal attacks), Perception 7, Physical Resistance 11, Handcrafts (smithing) 13

**Special**

- **Dwarven Resilience.** +I to Physical Resistance against poison and disease.
- **Underground Sense.** No penalty in dim light; always knows direction underground.
- **Short Legs.** SPD base 4.

**Variants**

- Hill Dwarf: less armor, +1 INS, -1 END.

#### Hill Dwarf (Craftsman / Militia)

_Friendly, hardy dwarves of the hills and valleys, farmers, smiths and part-time soldiers._

**Type:** Humanoid (dwarf) · **Size:** x1 · **Weight:** 75 kg · **Threat:** Low

**Racial template:** STR +1, END +3, WIL +2, INS +1. Craftsman training adds DEX +1, WIT +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  5  |  8  |  6  |  6  |  7  |  5  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  6  |  7  |    42    |    36    |     11      |      10      |   3   |     17     |

**Speed:** 7 (base 4): 19 km/h, 16 m/round · **STR bonus:** +1

**Equipment:** Leather apron (2), helmet (+1), hammer (Axe / Mace), dagger.

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Hammer |  13   | +8  |  3   |  +9   |       |
| Dagger |   8   | +2  |  4   |  +3   |       |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Handcrafts (smithing) 15, Mechanical 11, Physical Resistance 11, Perception 8

**Special**

- **Dwarven Resilience.** +I to Physical Resistance against poison and disease.
- **Master Craft.** +I when making weapons and armor.
- **Short Legs.** SPD base 4.

### Orcs and Goblinoids

#### Orc (Warrior)

_Strong, brutish and aggressive humanoids organized in warbands._

**Type:** Humanoid (orc) · **Size:** x1 · **Weight:** 80 kg · **Threat:** Moderate

**Racial template:** STR +2, END +2, WIT -1, WIL +1, INS +1. Warrior training adds STR +1, AGI +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  6  |  7  |  5  |  4  |  6  |  5  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  |  9  |    42    |    34    |     12      |      10      |   3   |     18     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +2

**Equipment:** Rigid leather armor (2) and helmet (+1), axe, small shield, three javelins.

**Attacks**

| Attack  | Skill | Dmg | DMAX | Total | Notes      |
| :------ | :---: | :-: | :--: | :---: | :--------- |
| Axe     |  14   | +8  |  3   |  +10  |            |
| Javelin |  10   | +6  |  4   |  +6   | Range UT 5 |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Shield 11, Intimidation 10, Perception 9, Stealth 8, Survival 9, Physical Resistance 9

**Special**

- **Night Vision.** No penalty in dim light.
- **Savage Resilience.** +I to Endurance rolls against Physical Shock.

**Variants**

- **Orc Warchief:** STR 10, AGI 7, END 8, WIL 8, PRE 7, Axe skill +4, chainmail (4) and helmet. Recompute derived values.

#### Orc Warchief

_A hardened orc leader who rules a warband by strength and cunning._

**Type:** Humanoid (orc) · **Size:** x1 · **Weight:** 100 kg · **Threat:** High

**Racial template:** STR +2, END +2, WIT -1, WIL +1, INS +1. Chief training adds STR +2, AGI +1, WIL +2, PRE +2.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 10  |  7  |  8  |  5  |  5  |  8  |  7  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  5  |  9  |    52    |    42    |     13      |      11      |   5   |     23     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +3

**Equipment:** Chainmail (4) and helmet (+1), great axe, axe.

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes    |
| :-------- | :---: | :-: | :--: | :---: | :------- |
| Great axe |  16   | +12 |  3   |  +15  | 2-handed |
| Axe       |  15   | +8  |  3   |  +11  |          |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Intimidation 14, Command 13, Perception 10, Survival 10, Physical Resistance 11

**Special**

- **Night Vision.** No penalty in dim light.
- **Savage Resilience.** +I to Endurance rolls against Physical Shock.
- **War Cry.** Allies within 20 m get +I to Mental Resistance against fear and a free Reflex Dodge (+I) for 1 round. _Proposal._

#### Goblin

_A small, malicious and cowardly raider, dangerous only in numbers or from ambush._

**Type:** Humanoid (goblinoid) · **Size:** x1/2 · **Weight:** 30 kg · **Threat:** Negligible (Low in groups)

**Racial template:** STR -2, AGI +2, END -1, DEX +1, WIT -1, WIL -1, PRE -2, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  7  |  4  |  6  |  4  |  4  |  3  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  6  |  8  |    22    |    26    |      6      |      6       |   1   |     8      |

**Speed:** 8 (base 6): 22 km/h, 18 m/round · **STR bonus:** -4

**Equipment:** Soft leather armor (1), dagger, shortbow.

**Attacks**

| Attack   | Skill | Dmg | DMAX | Total | Notes      |
| :------- | :---: | :-: | :--: | :---: | :--------- |
| Dagger   |   9   | +2  |  4   |  -2   |            |
| Shortbow |  11   | +6  |  4   |  +6   | Range UT 9 |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Stealth 11, Perception 9, Survival 8

**Special**

- **Night Vision.** No penalty in dim light.
- **Cowardly.** -I to Mental Resistance against fear; flees when its leader falls or half its Physical HP is lost.
- **Ambusher.** Fights best from hiding (+I when attacking by surprise).

#### Hobgoblin

_A disciplined, militaristic goblinoid soldier._

**Type:** Humanoid (goblinoid) · **Size:** x1 · **Weight:** 85 kg · **Threat:** Moderate

**Racial template:** STR +1, END +2, WIL +2.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  7  |  6  |  7  |  5  |  5  |  7  |  5  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  |  9  |    42    |    34    |     11      |      10      |   3   |     17     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +1

**Equipment:** Rigid leather (2) and helmet (+1), long sword, medium shield, javelins.

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes      |
| :--------- | :---: | :-: | :--: | :---: | :--------- |
| Long sword |  13   | +6  |  4   |  +7   |            |
| Javelin    |  10   | +6  |  4   |  +6   | Range UT 5 |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Shield 12 (+I parry vs frontal), Command 8, Perception 8, Physical Resistance 9

**Special**

- **Night Vision.** No penalty in dim light.
- **Formation.** +I to parry with a shield when an ally is adjacent.
- **Disciplined.** +I to Mental Resistance against fear in formation.

#### Bugbear

_A hulking, hairy goblinoid that stalks prey in silence despite its size._

**Type:** Humanoid (goblinoid) · **Size:** x1 · **Weight:** 120 kg · **Threat:** Moderate

**Racial template:** STR +6, END +3, DEX -1, WIT -1, PRE -1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 11  |  6  |  8  |  4  |  4  |  6  |  4  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  7  |  4  |  9  |    50    |    32    |     13      |      8       |   2   |     17     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +3

**Equipment:** Hide armor (2), morningstar.

**Attacks**

| Attack             | Skill | Dmg | DMAX | Total | Notes |
| :----------------- | :---: | :-: | :--: | :---: | :---- |
| Morningstar (mace) |  14   | +8  |  3   |  +11  |       |
| Fists              |  11   | +0  |  2   |  +3   |       |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Stealth 11, Perception 9, Intimidation 8

**Special**

- **Night Vision.** No penalty in dim light.
- **Ambusher.** Attacks by surprise (+I) from hiding.
- **Long Arms.** Reach 2 m.

#### Kobold

_A small, reptilian trapmaker that lurks in dungeons and fights from the shadows._

**Type:** Humanoid (reptilian) · **Size:** x1/2 · **Weight:** 20 kg · **Threat:** Negligible (Low in numbers)

**Racial template:** STR -3, AGI +2, END -2, WIL -2, PRE -2, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  7  |  3  |  5  |  4  |  3  |  3  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  5  |  5  |  8  |    16    |    24    |      4      |      6       |   1   |     6      |

**Speed:** 8 (base 6): 22 km/h, 18 m/round · **STR bonus:** -6

**Equipment:** Scaly hide (1), spear, sling.

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes      |
| :----- | :---: | :-: | :--: | :---: | :--------- |
| Spear  |   9   | +6  |  4   |  +0   |            |
| Sling  |  10   | +4  |  3   |  +4   | Range UT 9 |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Stealth 11, Perception 9, Mechanical (traps) 8

**Special**

- **Night Vision.** No penalty in dim light.
- **Trapmaker.** Sets traps with +I.
- **Cowardly.** Flees when half its Physical HP is lost.

### Other Humanoids

#### Halfling (Scout)

_Small, nimble and unassuming folk, quiet but surprisingly brave._

**Type:** Humanoid (halfling) · **Size:** x1/2 · **Weight:** 40 kg · **Threat:** Low

**Racial template:** STR -2, AGI +1, DEX +2, WIL +1, INS +1. Scout training adds AGI +1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  3  |  7  |  5  |  7  |  5  |  6  |  5  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  7  |  8  |    28    |    36    |      6      |      10      |   1   |     8      |

**Speed:** 8 (base 5): 22 km/h, 18 m/round · **STR bonus:** -4

**Equipment:** Soft leather armor (1), sling, dagger.

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes      |
| :----- | :---: | :-: | :--: | :---: | :--------- |
| Sling  |  14   | +4  |  3   |  +4   | Range UT 9 |
| Dagger |  11   | +2  |  4   |  -2   |            |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Stealth 13, Perception 10, Survival 9, Climb 9

**Special**

- **Stout-hearted.** +I to Mental Resistance against fear and intimidation.
- **Small.** Size x1/2: harder to hit at range.

#### Gnoll

_A hyena-headed raider with a taste for carrion and a laugh that unnerves._

**Type:** Humanoid (gnoll) · **Size:** x1 · **Weight:** 90 kg · **Threat:** Moderate

**Racial template:** STR +3, END +2, WIT -1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  6  |  7  |  5  |  4  |  5  |  4  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  |  9  |    40    |    30    |     12      |      8       |   2   |     16     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +2

**Equipment:** Hide and leather (2), spear, shortbow.

**Attacks**

| Attack   | Skill | Dmg | DMAX | Total | Notes      |
| :------- | :---: | :-: | :--: | :---: | :--------- |
| Spear    |  13   | +6  |  4   |  +8   |            |
| Bite     |   9   | +2  |  4   |  +4   |            |
| Shortbow |  10   | +6  |  4   |  +6   | Range UT 9 |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 10, Tracking 9 (by scent), Intimidation 7

**Special**

- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._
- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Night Vision.** No penalty in dim light.

#### Lizardfolk

_Amphibious reptilian humanoids of swamps and coasts, patient hunters and fierce defenders of their territory._

**Type:** Humanoid (reptilian) · **Size:** x1 · **Weight:** 90 kg · **Threat:** Moderate

**Racial template:** STR +3, END +3, WIT -1, WIL +1, PRE -1, INS +1.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  6  |  8  |  5  |  4  |  6  |  4  |  6  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  | 8 / 10 |    44    |    32    |     12      |      8       |   3   |     18     |

**Speed:** ground 8 (base 5): 22 km/h, 18 m/round; swimming 10 (base 7): 26 km/h, 22 m/round · **STR bonus:** +2

**Equipment:** Natural scales (3), spear, javelins.

**Attacks**

| Attack  | Skill | Dmg | DMAX | Total | Notes      |
| :------ | :---: | :-: | :--: | :---: | :--------- |
| Spear   |  13   | +6  |  4   |  +8   |            |
| Bite    |   9   | +2  |  4   |  +4   |            |
| Javelin |  10   | +6  |  4   |  +6   | Range UT 5 |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Swimming 12, Stealth 9, Perception 9, Survival 10

**Special**

- **Hold Breath.** Can stay underwater for 30 minutes.
- **Cold-blooded.** -I to all actions in cold weather.
- **Scaly Hide.** Already counted in Protection.

### Giants and Brutes

#### Ogre

_A hulking, slow-witted brute about 2.7 m tall, strong enough to swing a tree trunk like a club._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 300 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 21  |  4  | 10  |  3  |  3  |  5  |  4  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  7  |  3  | 10  |    72    |    26    |     19      |      8       |   2   |     23     |

**Speed:** 10 (base 7): 26 km/h, 22 m/round · **STR bonus:** +9

**Equipment:** Hides (included in Protection), great club (2-handed mace).

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes                                         |
| :--------- | :---: | :-: | :--: | :---: | :-------------------------------------------- |
| Great club |  14   | +12 |  3   |  +21  | +I oversized weapon (size x2) on top of skill |
| Fists      |  11   | +0  |  2   |  +9   |                                               |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Intimidation 10, Perception 7, Physical Resistance 12

**Special**

- **Dull-witted.** -I to Mental Resistance against Bluff and Persuasion.
- **Thick Hide.** Already counted in Protection.

**Variants**

- **Ogre Chieftain:** STR 23, END 12, club skill +3.

#### Troll (Cave / Hill)

_A 3 m brute with gnarled skin and an appetite for anything alive. Its wounds close as fast as they open._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 400 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  5  | 14  |  3  |  3  |  6  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  8  |  3  | 11  |    84    |    30    |     22      |      8       |   3   |     28     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +12

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  12   | +2  |  4   |  +14  |       |
| Bite   |  11   | +2  |  4   |  +14  |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 7, Intimidation 9, Physical Resistance 17

**Special**

- **Regeneration.** Recovers 3 Physical Injury per round, unless it took fire or acid damage in the last 3 rounds. Fire or acid damage must be inflicted to finish it. _Proposal._
- **Multiple Attacks.** Claws and Bite in the same round, each at -I.
- **Night Vision.** No penalty in dim light.

**Variants**

- **Cave Troll:** turns to stone in sunlight. **Hill Troll:** no weakness to light.

#### Hill Giant

_A crude, 4 m giant of the highlands, armed with a tree-trunk club and a pile of boulders._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 800 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 23  |  4  | 12  |  3  |  3  |  6  |  5  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  8  |  3  | 11  |    82    |    30    |     25      |      10      |   2   |     29     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +15

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes                |
| :--------- | :---: | :-: | :--: | :---: | :------------------- |
| Great club |  16   | +12 |  3   |  +27  | +II oversized weapon |
| Boulder    |   8   | +12 |  3   |  +12  | Range UT 5           |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Intimidation 9, Perception 7

**Special**

- **Rock Thrower.** Always has a few boulders at hand.
- **Dim.** -I to Mental Resistance against Bluff and Persuasion.

#### Frost Giant

_A pale, 4.5 m raider of the frozen north, immune to the cold it brings._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 1000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 24  |  5  | 13  |  3  |  4  |  7  |  6  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  3  | 11  |    88    |    36    |     28      |      11      |   4   |     36     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +18

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                |
| :---------- | :---: | :-: | :--: | :---: | :------------------- |
| Great axe   |  17   | +12 |  3   |  +30  | +II oversized weapon |
| Ice boulder |   8   | +12 |  3   |  +12  | Range UT 5           |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Intimidation 11, Perception 8, Survival 9

**Special**

- **Cold Immune.** Immune to normal cold.
- **Frost Rime.** Its weapon blows can inflict damage as Physical Stun with no penalty. _Proposal._

#### Fire Giant

_A 4.5 m smith-lord of volcanic forges, clad in black iron._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 1000 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 24  |  5  | 13  |  4  |  4  |  7  |  6  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 11  |    88    |    36    |     28      |      11      |   5   |     38     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +18

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                       |
| :---------- | :---: | :-: | :--: | :---: | :-------------------------- |
| Greatsword  |  17   | +12 |  3   |  +30  | +II oversized weapon, burns |
| Molten rock |   9   | +12 |  3   |  +12  | Range UT 5, burns           |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Intimidation 11, Perception 8, Handcrafts (smithing) 12

**Special**

- **Fire Immune.** Immune to normal fire and heat.
- **Burning Blows.** Each hit also sets the target on fire (1d6* Physical Injury per round for 3 rounds unless extinguished). _Proposal._

#### Cyclops

_A one-eyed giant, forgemaster and herder, with a temper as large as its stature._

**Type:** Giant humanoid · **Size:** x2 · **Weight:** 600 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  4  | 12  |  3  |  3  |  6  |  5  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  8  |  3  | 11  |    80    |    32    |     22      |      10      |   2   |     26     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +12

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes                |
| :--------- | :---: | :-: | :--: | :---: | :------------------- |
| Great club |  15   | +12 |  3   |  +24  | +II oversized weapon |
| Boulder    |   8   | +12 |  3   |  +12  | Range UT 5           |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Intimidation 9, Perception 8, Handcrafts (smithing) 10

**Special**

- **Single Eye.** -I on ranged attacks and on judging distances.
- **Forge Master.** +I when working metal.

---

## Part III: The Undead

### Undead

#### Skeleton

_A reanimated skeleton bound to obey its master. Mindless, relentless, never tires._

**Type:** Undead · **Size:** x1 · **Weight:** 15 kg + gear · **Threat:** Low (Moderate in groups)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  6  |  6  |  5  |  1  |  6  |  1  |  4  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  5  |  4  |  9  |    36    |  immune  | 11 (immune) |    immune    |   1   |     13     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +1

**Equipment:** Rusty sword, small shield.

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes |
| :---------- | :---: | :-: | :--: | :---: | :---- |
| Rusty sword |   9   | +6  |  4   |  +7   |       |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Shield 8, Perception 6

**Special**

- **Undead.** Immune to Physical Shock, Stun, poison, disease, suffocation, and to all psychical damage, fear and influence.
- **Brittle.** Collapses when it has taken Physical damage equal to its Physical HP (it never falls unconscious).
- **Hollow.** Piercing weapons and missiles deal half damage; blunt weapons deal full damage.

**Variants**

- **Skeleton Archer:** replaces sword and shield with a shortbow (Bow 8, +6, DMAX 4).

#### Zombie

_A reanimated corpse, slow and relentless, shambling forward until it is destroyed._

**Type:** Undead · **Size:** x1 · **Weight:** 70 kg · **Threat:** Low (Moderate in hordes)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  7  |  3  |  9  |  3  |  1  |  6  |  1  |  3  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  4  |  3  |  6  |    44    |  immune  |     11      |    immune    |   0   |     11     |

**Speed:** 6 (base 3): 17 km/h, 14 m/round · **STR bonus:** +1

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes     |
| :----- | :---: | :-: | :--: | :---: | :-------- |
| Slam   |   6   | +0  |  2   |  +1   |           |
| Bite   |   6   | +2  |  4   |  +3   | Grave rot |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 4

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Mindless.** Immune to psychical damage, fear and influence.
- **Slow.** Acts last in every round.
- **Relentless.** Immune to Physical Shock; it only stops when its Physical damage reaches its Physical HP.
- **Grave Rot.** Virulence 12, period 1 day, effect 1 Physical Injury and -I to all rolls until resisted. _Proposal._

#### Ghoul

_A carrion-eating undead creature whose touch paralyzes the living._

**Type:** Undead · **Size:** x1 · **Weight:** 60 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  7  |  7  |  7  |  5  |  4  |  6  |  3  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  |  6  |  5  |  9  |    40    |    32    |     11      |      6       |   1   |     13     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +1

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes     |
| :----- | :---: | :-: | :--: | :---: | :-------- |
| Claws  |  10   | +2  |  4   |  +3   | Paralysis |
| Bite   |   9   | +2  |  4   |  +3   | Disease   |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Stealth 10, Perception 10, Tracking 10 (carrion)

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Paralyzing Touch.** Virulence 12, period 1 round: paralyzed until resisted. _Proposal._
- **Carrion Stench.** -I to actions of living creatures within 2 m unless they resist (Physical Resistance).
- **Night Vision.** No penalty in dim light.

#### Wight

_A once-mighty warrior risen from the grave, wearing ancient armor and draining life from the living._

**Type:** Undead · **Size:** x1 · **Weight:** 70 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  6  |  8  |  5  |  6  |  9  |  7  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  5  |  9  |    50    |    46    |     12      |      11      |   3   |     18     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +2

**Attacks**

| Attack         | Skill | Dmg | DMAX | Total | Notes       |
| :------------- | :---: | :-: | :--: | :---: | :---------- |
| Long sword     |  13   | +6  |  4   |  +8   |             |
| Draining touch |  11   | +4  |  3   |  +6   | Drains life |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Intimidation 12, Command 11, Perception 10

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Life Drain.** Its draining touch inflicts Physical Injury; the wight recovers half the damage dealt.
- **Aura of Dread.** Characters who see it must succeed a Mental Resistance roll or suffer Psychical Stun 1d6*. _Proposal._

#### Ghost / Wraith

_The restless spirit of a dead person, an incorporeal thing of cold and grief, bound to a place or a purpose._

**Type:** Undead (incorporeal) · **Size:** x1 · **Weight:** none · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  8  |  8  |  5  |  5  |  8  |  8  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  6  | 10  |    34    |    48    |      2      |      12      |   0   |     2      |

**Speed:** flying 10 (base 6): 26 km/h, 22 m/round · **STR bonus:** -8

**Attacks**

| Attack         | Skill | Dmg | DMAX | Total | Notes                                        |
| :------------- | :---: | :-: | :--: | :---: | :------------------------------------------- |
| Draining touch |   9   | +8  |  3   |  +8   | Physical damage ignoring armor, no STR bonus |
| Wail           |  13   | +6  |  3   |  +6   | Psychical Stun, range UT 5                   |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Stealth 13, Perception 12, Intimidation 12

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Incorporeal.** Passes through walls and objects; ordinary weapons cannot harm it. Silver, blessed or magical weapons do.
- **Flight.** Uses the flying speed above.
- **Terror.** Characters who see it must succeed a Mental Resistance roll or suffer Psychical Stun 1d6*. _Proposal._

#### Banshee

_The wailing spirit of a woman whose cry announces death._

**Type:** Undead (incorporeal) · **Size:** x1 · **Weight:** none · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  8  |  7  |  4  |  5  |  8  | 10  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  6  |  5  |  9  |    32    |    52    |      2      |      13      |   0   |     2      |

**Speed:** flying 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** -8

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                        |
| :---------- | :---: | :-: | :--: | :---: | :--------------------------- |
| Death wail  |  15   | +14 |  4   |  +14  | Psychical damage, range UT 6 |
| Chill touch |   9   | +4  |  2   |  +4   | Physical, ignores armor      |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 12, Intimidation 16

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Incorporeal.** Passes through walls; ordinary weapons cannot harm it.
- **Flight.** Uses the flying speed above.
- **Death Wail.** Each target in range makes a Mental Resistance roll; a failure inflicts the full wail damage. _Proposal._

#### Mummy

_A preserved corpse animated by an ancient curse, guardian of tombs._

**Type:** Undead · **Size:** x1 · **Weight:** 60 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  4  | 12  |  3  |  4  |  8  |  6  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  6  |  3  |  8  |    64    |    38    |     14      |      11      |   2   |     18     |

**Speed:** 8 (base 4): 22 km/h, 18 m/round · **STR bonus:** +4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes     |
| :----- | :---: | :-: | :--: | :---: | :-------- |
| Slam   |  10   | +0  |  2   |  +4   | Mummy rot |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Intimidation 10, Perception 7

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Mummy Rot.** Virulence 14, period 1 day: wounds do not heal naturally until the victim resists. _Proposal._
- **Vulnerable to Fire.** Fire damage is doubled.
- **Aura of Dread.** Mental Resistance or Psychical Stun 1d6* when first seen. _Proposal._

#### Vampire (Lesser)

_A predator that feeds on the blood of the living, charming, cunning and immortal._

**Type:** Undead · **Size:** x1 · **Weight:** 75 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  9  | 10  |  7  |  8  |  8  | 10  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  8  |  9  |  7  | 10  |    60    |    54    |     14      |      13      |   0   |     14     |

**Speed:** 10 (base 6): 26 km/h, 22 m/round · **STR bonus:** +4

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes                                    |
| :----- | :---: | :-: | :--: | :---: | :--------------------------------------- |
| Claws  |  13   | +2  |  4   |  +6   |                                          |
| Bite   |  12   | +2  |  4   |  +6   | Drains blood, grappled or charmed target |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Charm 16, Persuasion 15, Stealth 13, Perception 13, Intimidation 14

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Blood Drain.** Its bite on a grappled or charmed target inflicts Physical Injury; the vampire recovers the same amount.
- **Charm.** Charm vs. Mental Resistance at close range.
- **Regeneration.** 2 Physical Injury per round, except from fire, sunlight or holy sources. _Proposal._
- **Weaknesses.** Sunlight (1d6* Physical Injury per round), a stake through the heart (destroys it), holy symbols, running water.

**Variants**

- **Vampire Lord (Elder):** STR 18, AGI 10, END 12, WIL 11, PRE 13, regeneration 5 per round, +4 to all skills.

#### Lich

_A sorcerer who bound his soul to a vessel to escape death. The undead master of ancient magic._

**Type:** Undead · **Size:** x1 · **Weight:** 40 kg · **Threat:** Legendary

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  5  |  8  |  6  | 12  | 12  |  9  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  8  |  7  |  7  |  9  |    50    |    60    |     10      |      12      |   2   |     14     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +0

**Attacks**

| Attack           | Skill | Dmg | DMAX | Total | Notes        |
| :--------------- | :---: | :-: | :--: | :---: | :----------- |
| Paralyzing touch |  10   | +6  |  3   |  +6   | Virulence 14 |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Occultism 18, Mental Resistance 18, Intimidation 15, Persuasion 13, Perception 13

**Special**

- **Undead.** Immune to Physical Stun, suffocation, poison, disease and fatigue.
- **Magic.** Casts spells according to the game universe (Occultism 18); the referee chooses its repertoire.
- **Phylactery.** A destroyed lich reforms near its phylactery in 1d6 days unless the vessel is destroyed.
- **Paralyzing Touch.** Virulence 14, period 1 round: paralyzed until resisted. _Proposal._
- **Command Undead.** Controls lesser undead within sight.

---

## Part IV: Mythological and Fantastic Monsters

### Dragonkind

#### Wyvern

_A two-legged dragon-kin with leathery wings and a venomous tail sting. Cunning but not truly intelligent._

**Type:** Dragonkind · **Size:** x4 · **Weight:** 800 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 23  |  8  | 12  |  3  |  3  |  7  |  6  |  8  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  5  | 20 / 10 |    84    |    42    |     25      |      11      |   4   |     33     |

**Speed:** flying 20 (base 15): 72 km/h, 60 m/round; ground 10 (base 5): 26 km/h, 22 m/round · **STR bonus:** +15

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes               |
| :--------- | :---: | :-: | :--: | :---: | :------------------ |
| Bite       |  13   | +2  |  4   |  +17  |                     |
| Tail sting |  13   | +2  |  4   |  +17  | Venom               |
| Talons     |  13   | +2  |  4   |  +17  | Best used in a dive |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 13, Flight 21, Intimidation 9

**Special**

- **Flight.** Uses the flying speed above.
- **Venom.** Virulence 14, period 1 minute, effect 2d6* Physical Injury per failed period. _Proposal._
- **Diving Strike.** Creature Charge in flight: +16 damage (2 x speed bonus +8), limited by Max Impact Bonus.

#### Drake

_A wingless, fire-breathing relative of dragons: a 6 m reptile with armored scales and a savage temper._

**Type:** Dragonkind · **Size:** x2 · **Weight:** 600 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  6  | 12  |  3  |  3  |  7  |  6  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 11  |    82    |    40    |     22      |      11      |   4   |     30     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +12

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                                       |
| :---------- | :---: | :-: | :--: | :---: | :------------------------------------------ |
| Bite        |  12   | +2  |  4   |  +14  |                                             |
| Claws       |  12   | +2  |  4   |  +14  |                                             |
| Fire breath |  10   | +16 |  3   |  +16  | Cone 30°, range UT 4, burns, every 3 rounds |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Perception 12, Intimidation 10

**Special**

- **Fire Breath.** An area attack as for explosives (30° cone), usable once every 3 rounds; burns targets for 1d6* Physical Injury per round for 2 rounds. _Proposal._
- **Fire Resistant.** Fire damage is halved.

#### Dragon (Adult)

_A colossal, intelligent winged reptile that hoards treasure and breathes fire. The apex predator of fantasy._

**Type:** Dragonkind · **Size:** x8 · **Weight:** 5000 kg · **Threat:** Legendary

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 28  |  5  | 16  |  3  |  9  | 12  | 14  | 10  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  | 12  |  5  | 19 / 13 |   112    |    72    |     40      |      15      |  10   |     60     |

**Speed:** flying 19 (base 14): 66 km/h, 55 m/round; ground 13 (base 8): 35 km/h, 29 m/round · **STR bonus:** +30

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                                        |
| :---------- | :---: | :-: | :--: | :---: | :------------------------------------------- |
| Bite        |  15   | +4  |  4   |  +34  |                                              |
| Claws       |  15   | +4  |  4   |  +34  |                                              |
| Tail        |  14   | +4  |  3   |  +34  | Sweeps all behind                            |
| Fire breath |  13   | +36 |  6   |  +36  | Cone 30°, range UT 10, burns, every 3 rounds |

**Reflex Dodge:** 4

**Skills:** Dodge 5, Perception 16, Intimidation 22, Persuasion 18, Mental Resistance 18, Occultism 15

**Special**

- **Flight.** Uses the flying speed above.
- **Dragon Fear.** Any character who sees it must succeed a Mental Resistance roll or suffer Psychical Stun 2d6*. _Proposal._
- **Fire Breath.** An area attack (30° cone), usable once every 3 rounds; burns for 2d6* Physical Injury per round for 3 rounds. _Proposal._
- **Fire Immune.** Immune to normal fire.
- **Intelligent.** Speaks, schemes and hoards treasure.
- **Multiple Attacks.** Bite, claws and tail in the same round, each at -I.

**Variants**

- **Young Dragon:** Size x4, 1500 kg, STR 25, Protection 6, Breath +24. **Ancient Dragon:** Size x16, 20000 kg, STR 30, Protection 12, Breath +48. Recompute derived values.

### Hybrids and Beasts

#### Griffin

_A proud hybrid with the body of a lion and the head, wings and talons of an eagle._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 400 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 21  |  9  | 10  |  3  |  4  |  7  |  6  |  9  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  | 11  |  5  | 20 / 13 |    76    |    44    |     19      |      11      |   2   |     23     |

**Speed:** flying 20 (base 16): 72 km/h, 60 m/round; ground 13 (base 9): 35 km/h, 29 m/round · **STR bonus:** +9

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |  14   | +2  |  4   |  +11  |       |
| Talons |  14   | +2  |  4   |  +11  |       |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Perception 16 (+I by sight), Flight 21, Intimidation 8

**Special**

- **Flight.** Uses the flying speed above.
- **Diving Strike.** Creature Charge in flight: +16 damage, limited by Max Impact Bonus.
- **Proud Mount.** Can carry one rider (up to 300 kg), but only one who has earned its trust.

#### Hippogriff

_A creature with the forequarters of an eagle and the body of a horse. Proud, but it can be tamed._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 450 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  8  | 10  |  3  |  3  |  6  |  5  |  8  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  5  | 18 / 15 |    72    |    38    |     18      |      10      |   1   |     20     |

**Speed:** flying 18 (base 14): 60 km/h, 50 m/round; ground 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Beak   |  13   | +2  |  4   |  +10  |       |
| Talons |  13   | +2  |  4   |  +10  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 13, Flight 19

**Special**

- **Flight.** Uses the flying speed above.
- **Mount.** Can carry one rider (up to 300 kg) once it trusts him.
- **Proud.** Attacks anyone who does not show proper respect (Animal Handling roll to calm it).

#### Chimera

_A monster with a lion's body and head, a goat's head on its back and a serpent for a tail._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 500 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  7  | 12  |  3  |  3  |  7  |  6  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  4  | 14  |    82    |    40    |     22      |      11      |   3   |     28     |

**Speed:** 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +12

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                                       |
| :---------- | :---: | :-: | :--: | :---: | :------------------------------------------ |
| Lion bite   |  13   | +2  |  4   |  +14  |                                             |
| Goat horns  |  13   | +4  |  4   |  +16  |                                             |
| Snake tail  |  13   | +2  |  4   |  +14  | Venom                                       |
| Fire breath |   8   | +16 |  3   |  +16  | Cone 30°, range UT 4, burns, every 3 rounds |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 11, Intimidation 10

**Special**

- **Multiple Attacks.** One attack per head (3 per round); each is made at -I if more than one is made. _Proposal._
- **Venom.** Virulence 14, period 1 minute, effect 1d6* Physical Injury per failed period. _Proposal._
- **Fire Breath.** From the goat's head; burns for 1d6* Physical Injury per round for 2 rounds. _Proposal._
- **Alert.** Its three heads cannot be surprised from behind.

#### Manticore

_A beast with a lion's body, a human face, bat wings and a tail studded with spikes that it shoots at prey._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 350 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  7  | 11  |  5  |  5  |  6  |  6  |  8  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  6  | 16 / 14 |    74    |    40    |     18      |      11      |   2   |     22     |

**Speed:** flying 16 (base 12): 48 km/h, 40 m/round; ground 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +8

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                         |
| :---------- | :---: | :-: | :--: | :---: | :---------------------------- |
| Claws       |  13   | +2  |  4   |  +10  |                               |
| Bite        |  12   | +2  |  4   |  +10  |                               |
| Tail spikes |  10   | +10 |  3   |  +10  | Range UT 6, up to 3 per round |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 12, Persuasion 9

**Special**

- **Flight.** Uses the flying speed above.
- **Spike Volley.** Up to 3 spikes per round at one target (+1d6* damage for each spike beyond the first, as semi-automatic fire).
- **Man-eater.** Intelligent enough to speak, taunt and bargain.

#### Basilisk

_A 6 m serpent, the king of snakes, whose gaze turns living beings to stone and whose bite is deadly._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 300 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  5  | 12  |  3  |  3  |  7  |  7  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  8  |  4  |  7  |    78    |    40    |     18      |      11      |   4   |     26     |

**Speed:** 7 (base 3): 19 km/h, 16 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Bite   |  11   | +2  |  4   |  +10  | Venom |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 9, Stealth 8

**Special**

- **Petrifying Gaze.** Virulence 14, range UT 4, treated as a poison each round a victim can see its eyes: failed Physical Resistance rolls inflict 2d6* Physical Stun; a victim whose Physical Stun reaches his Physical HP is turned to stone. _Proposal._
- **Deadly Venom.** Virulence 15, period 1 minute, effect 2d6* Physical Injury per failed period. _Proposal._
- **Weakness.** Seeing its own reflection exposes it to its own gaze.

#### Cerberus

_A three-headed hound that guards the gates of the underworld._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 600 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  7  | 13  |  3  |  4  |  8  |  8  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  5  | 10  |  5  | 15  |    86    |    50    |     22      |      12      |   3   |     28     |

**Speed:** 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +12

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes    |
| :----- | :---: | :-: | :--: | :---: | :------- |
| Bite   |  13   | +2  |  4   |  +14  | Per head |

**Reflex Dodge:** 6

**Skills:** Dodge 8, Perception 15, Tracking 14, Intimidation 12

**Special**

- **Multiple Attacks.** One attack per head (3 per round); each is made at -I if more than one is made. _Proposal._
- **Hellish Howl.** Intimidation vs. Mental Resistance; a failure inflicts Psychical Stun 1d6* (range UT 6). _Proposal._
- **Never Surprised.** Three heads watch every direction.
- **Keen Smell.** +I to Perception and Tracking rolls based on scent.

#### Hydra

_A multi-headed swamp serpent whose heads regrow when severed._

**Type:** Hybrid beast · **Size:** x4 · **Weight:** 3000 kg · **Threat:** Deadly

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 26  |  4  | 14  |  3  |  3  |  8  |  6  |  6  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  9  |  4  | 10 / 12 |    96    |    40    |     34      |      11      |   4   |     42     |

**Speed:** ground 10 (base 6): 26 km/h, 22 m/round; swimming 12 (base 8): 31 km/h, 26 m/round · **STR bonus:** +24

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes    |
| :----- | :---: | :-: | :--: | :---: | :------- |
| Bite   |  12   | +2  |  4   |  +26  | Per head |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 9, Swimming 13

**Special**

- **Multiple Attacks.** One attack per head (5 per round); each is made at -I if more than one is made. _Proposal._
- **Regeneration.** 3 Physical Injury per round, except from fire or acid in the last 3 rounds. _Proposal._
- **Regrowing Heads.** A severed head (called shot and Physical damage over 1/5 of its PHP) regrows in 1 day; unless the stump is burned, two heads grow back.
- **Aquatic.** Uses its swimming speed in water.

#### Sphinx

_A lion with a human head and eagle wings, a keeper of riddles and secrets._

**Type:** Hybrid beast · **Size:** x2 · **Weight:** 600 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 22  |  7  | 11  |  4  | 12  |  9  | 10  | 10  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  9  | 11  |  6  | 16 / 14 |    84    |    58    |     22      |      13      |   2   |     26     |

**Speed:** flying 16 (base 12): 48 km/h, 40 m/round; ground 14 (base 10): 38 km/h, 32 m/round · **STR bonus:** +12

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Claws  |  15   | +2  |  4   |  +14  |       |
| Bite   |  14   | +2  |  4   |  +14  |       |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Mind games 16, Occultism 18, Persuasion 14, Perception 15, Intimidation 14

**Special**

- **Flight.** Uses the flying speed above.
- **Riddle Duel.** A long-term action: its Mind games vs. the challenger's WIT. The loser suffers Psychical Stun 2d6* per failed round. _Proposal._
- **Guardian.** Rarely attacks unless a riddle is failed or a secret threatened.

#### Minotaur

_A bull-headed giant, the monster of the labyrinth._

**Type:** Hybrid beast · **Size:** x1 · **Weight:** 300 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  6  | 12  |  3  |  3  |  7  |  6  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  9  |  4  | 11  |    78    |    38    |     18      |      11      |   2   |     22     |

**Speed:** 11 (base 7): 29 km/h, 24 m/round · **STR bonus:** +8

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes    |
| :-------- | :---: | :-: | :--: | :---: | :------- |
| Great axe |  13   | +12 |  3   |  +20  | 2-handed |
| Gore      |  12   | +4  |  4   |  +12  |          |

**Reflex Dodge:** 5

**Skills:** Dodge 7, Perception 9, Intimidation 10, Survival 9

**Special**

- **Gore Charge.** Creature Charge: +6 damage (2 x speed bonus +3), limited by Max Impact Bonus.
- **Labyrinth Sense.** Never lost in mazes (+II to orient itself).
- **Bull Rage.** +I to attack when wounded below half its Physical HP, -I to defense.

#### Centaur

_A creature with a human torso on a horse's body. Archer, hunter and wanderer of the plains and forests._

**Type:** Hybrid (humanoid) · **Size:** x2 · **Weight:** 500 kg · **Threat:** Moderate

**Racial template:** Horse-man hybrid: STR +13, END +6, AGI +2.

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 18  |  7  | 11  |  6  |  5  |  6  |  5  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  6  | 17  |    70    |    36    |     17      |      10      |   3   |     23     |

**Speed:** 17 (base 13): 54 km/h, 45 m/round · **STR bonus:** +7

**Equipment:** Leather (2) over natural hide (1), spear, longbow.

**Attacks**

| Attack  | Skill | Dmg | DMAX | Total | Notes      |
| :------ | :---: | :-: | :--: | :---: | :--------- |
| Spear   |  15   | +6  |  4   |  +13  |            |
| Hooves  |  11   | +4  |  3   |  +11  |            |
| Longbow |  14   | +9  |  4   |  +9   | Range UT 9 |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Perception 10, Survival 11, Run 18

**Special**

- **Trample.** Creature Charge: +12 damage (2 x speed bonus +6), limited by Max Impact Bonus.
- **Hit and Run.** Can move and shoot without penalty.

### Winged and Aquatic Monsters

#### Harpy

_A winged, bird-footed woman with a haunting voice, feeding on carrion and the weak._

**Type:** Monstrous humanoid · **Size:** x1 · **Weight:** 55 kg · **Threat:** Low (Moderate in flocks)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  5  |  9  |  5  |  6  |  4  |  5  |  6  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  7  |  6  | 16 / 8 |    30    |    38    |     10      |      11      |   0   |     10     |

**Speed:** flying 16 (base 13): 48 km/h, 40 m/round; ground 8 (base 5): 22 km/h, 18 m/round · **STR bonus:** +0

**Attacks**

| Attack  | Skill | Dmg | DMAX | Total | Notes                                                     |
| :------ | :---: | :-: | :--: | :---: | :-------------------------------------------------------- |
| Talons  |  11   | +2  |  4   |  +2   |                                                           |
| Screech |  12   | +4  |  3   |  +4   | Psychical Stun; resisted by Mental Resistance; range UT 5 |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 13, Flight 17, Stealth 9

**Special**

- **Flight.** Uses the flying speed above.
- **Carrion Eater.** +I to Physical Resistance against disease.
- **Flocks.** Often attacks in groups of 3 to 8.

#### Siren

_A sea-dwelling woman whose song lures sailors to their doom._

**Type:** Monstrous humanoid · **Size:** x1 · **Weight:** 55 kg · **Threat:** Moderate (deadly to sailors)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  4  |  8  |  7  |  5  |  6  |  6  | 10  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  6  |  6  | 11 / 6 |    34    |    48    |      8      |      13      |   0   |     8      |

**Speed:** swimming 11 (base 8): 29 km/h, 24 m/round; ground 6 (base 3): 17 km/h, 14 m/round · **STR bonus:** -2

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes             |
| :--------- | :---: | :-: | :--: | :---: | :---------------- |
| Claws      |  10   | +2  |  4   |  +0   |                   |
| Siren song |  16   | +0  |  3   |  +0   | Charm, range UT 8 |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Swimming 15, Charm 16, Perception 11

**Special**

- **Siren Song.** Everyone who hears it makes a Mental Resistance roll against the siren's Charm; a failure compels him to move toward her. Wax in the ears protects. _Proposal._
- **Aquatic.** Weak and slow on land.

#### Kraken

_A colossal sea monster that drags ships to the depths._

**Type:** Colossal sea monster · **Size:** x16 · **Weight:** 20000 kg · **Threat:** Legendary

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 30  |  4  | 18  |  4  |  4  | 10  |  8  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  | 11  |  5  | 15  |   116    |    50    |     50      |      12      |   5   |     60     |

**Speed:** swimming 15 (base 10): 43 km/h, 36 m/round · **STR bonus:** +40

**Attacks**

| Attack   | Skill | Dmg | DMAX | Total | Notes                |
| :------- | :---: | :-: | :--: | :---: | :------------------- |
| Tentacle |  14   | +4  |  3   |  +44  | Grapple, 8 per round |
| Beak     |  14   | +4  |  4   |  +44  | Grappled target      |

**Reflex Dodge:** 4

**Skills:** Dodge 4, Perception 11, Swimming 20

**Special**

- **Multiple Attacks.** Up to 8 tentacle attacks per round, each at -I if more than one is made. _Proposal._
- **Drag Down.** A grappled victim is pulled underwater and takes drowning damage.
- **Ink Cloud.** Blinds everything within 30 m (-II) and lets it jet away.
- **Aquatic.** Helpless out of water.

#### Phoenix

_A bird of fire that dies in flames and is reborn from its ashes._

**Type:** Magical beast · **Size:** x2 · **Weight:** 100 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  8  |  9  |  8  |  5  |  6  |  9  |  9  |  9  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  8  |  6  | 19 / 9 |    50    |    54    |     12      |      12      |   0   |     12     |

**Speed:** flying 19 (base 15): 66 km/h, 55 m/round; ground 9 (base 5): 24 km/h, 20 m/round · **STR bonus:** +2

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Talons |  11   | +2  |  4   |  +4   | Burns |
| Beak   |  11   | +2  |  4   |  +4   |       |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Perception 13, Flight 20

**Special**

- **Flight.** Uses the flying speed above.
- **Fire Aura.** Anyone grappling or hit in melee takes 1d6* fire damage. Immune to fire.
- **Rebirth.** When destroyed, it bursts into flames (area +12, radius 5 m) and is reborn from its ashes after 1d6 days, unless the ashes are scattered or doused.
- **Healing Tears.** Its tears add +II to Physical Resistance rolls and heal wounds (Endurance degree recovered).

### Cursed and Magical Creatures

#### Medusa / Gorgon

_A cursed woman with serpents for hair, whose gaze turns living creatures to stone._

**Type:** Monstrous humanoid · **Size:** x1 · **Weight:** 70 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  8  |  6  |  7  |  7  |  9  |  9  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  7  |  7  |  9  |    42    |    52    |     11      |      12      |   1   |     13     |

**Speed:** 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +1

**Equipment:** Shortbow, short sword.

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes      |
| :---------- | :---: | :-: | :--: | :---: | :--------- |
| Shortbow    |  13   | +6  |  4   |  +6   | Range UT 9 |
| Short sword |  13   | +4  |  4   |  +5   |            |
| Snake hair  |  11   | +2  |  4   |  +3   | Venom      |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Stealth 13, Perception 12, Intimidation 14, Mental Resistance 13, Persuasion 12

**Special**

- **Petrifying Gaze.** Virulence 15, range UT 5, treated as a poison (6.1) each round a victim can see her eyes: on a failed Physical Resistance roll, 2d6* Physical Stun. A victim whose Physical Stun reaches his Physical HP is turned to stone instead of fainting. _Proposal._
- **Averting the Eyes.** Immunity to the gaze, but -II on attacks against her.
- **Venomous Hair.** Virulence 12, as the Venomous Snake.

#### Lamia

_A serpent-bodied woman, a seducer who preys on travelers._

**Type:** Monstrous humanoid · **Size:** x2 · **Weight:** 150 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  7  |  8  |  6  |  7  |  8  |  9  |  8  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  8  |  6  |  8  |    56    |    50    |     14      |      12      |   1   |     16     |

**Speed:** ground 8 (base 5): 22 km/h, 18 m/round · **STR bonus:** +4

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes   |
| :---------- | :---: | :-: | :--: | :---: | :------ |
| Coil        |  11   | +4  |  3   |  +8   | Grapple |
| Short sword |  12   | +4  |  4   |  +8   |         |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Charm 14, Persuasion 13, Stealth 10, Perception 12

**Special**

- **Charm.** Charm vs. Mental Resistance at close range.
- **Constriction.** A successful Coil grapples; each round it wins Strength vs. Strength, the victim takes Physical Stun equal to the Coil's damage. _Proposal._
- **Disguise.** Can pass for a beautiful human woman (+II to Disguise).

#### Werewolf

_A man cursed to become a wolf-like monster under the moon, strong, fast and nearly unkillable._

**Type:** Shapechanger · **Size:** x1 · **Weight:** 120 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 14  |  9  | 12  |  4  |  4  |  7  |  5  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  6  | 16  |    66    |    42    |     15      |      10      |   1   |     17     |

**Speed:** 16 (base 11): 48 km/h, 40 m/round · **STR bonus:** +5

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes       |
| :----- | :---: | :-: | :--: | :---: | :---------- |
| Claws  |  13   | +2  |  4   |  +7   |             |
| Bite   |  12   | +2  |  4   |  +7   | Lycanthropy |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 14, Tracking 14 (by scent), Stealth 12, Intimidation 9

**Special**

- **Regeneration.** 2 Physical Injury per round, except for wounds from silver. _Proposal._
- **Lycanthropy.** Virulence 14, period 1 month, effect: the victim becomes a werewolf.
- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Human Form.** In human form it has ordinary human stats.

#### Stone Golem

_A man-shaped construct of stone, animated by magic and obeying its creator literally._

**Type:** Construct · **Size:** x2 · **Weight:** 800 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 23  |  3  | 14  |  2  |  1  | 10  |  1  |  3  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  2  |  8  |  2  |  7  |    94    |  immune  |     25      |    immune    |  15   |     55     |

**Speed:** 7 (base 3): 19 km/h, 16 m/round · **STR bonus:** +15

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Slam   |  11   | +4  |  3   |  +19  |       |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 4

**Special**

- **Construct.** Immune to Physical Stun, Physical Shock, poison, disease, suffocation, fatigue and all mental effects.
- **Stone Body.** Edged and piercing weapons inflict half damage.
- **Literal.** Follows its creator's orders word by word.
- **Slow.** Always acts last in a round.

#### Unicorn

_A white horse with a spiral horn, shy and swift, that can heal wounds and purify poison._

**Type:** Magical beast · **Size:** x2 · **Weight:** 450 kg · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  8  | 12  |  3  |  5  |  9  | 10  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  | 10  |  5  | 20  |    82    |    56    |     18      |      13      |   1   |     20     |

**Speed:** 20 (base 15): 72 km/h, 60 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Horn   |  13   | +4  |  4   |  +12  |       |
| Kick   |  12   | +4  |  3   |  +12  |       |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 13, Run 21

**Special**

- **Charge.** Creature Charge: +16 damage (2 x speed bonus +8), limited by Max Impact Bonus.
- **Healing Horn.** Its touch adds +II to Physical Resistance against poison and disease and heals Physical Injury equal to a Presence roll degree x 5.
- **Elusive.** Can only be approached by the pure of heart; flees from others.
- **Magic Resistance.** +II to Mental Resistance against magic.

#### Pegasus

_A winged horse, noble and swift. It can be trained as a mount._

**Type:** Magical beast · **Size:** x2 · **Weight:** 500 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20  |  8  | 12  |  3  |  4  |  6  |  6  |  7  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  4  | 19 / 18 |    76    |    38    |     18      |      11      |   1   |     20     |

**Speed:** flying 19 (base 14): 66 km/h, 55 m/round; ground 18 (base 13): 60 km/h, 50 m/round · **STR bonus:** +8

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Kick   |  11   | +4  |  3   |  +12  |       |
| Bite   |  11   | +2  |  4   |  +10  |       |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 10, Flight 20

**Special**

- **Flight.** Uses the flying speed above.
- **Mount.** Carries one rider up to 300 kg in flight.
- **Skittish.** Panics easily; Riding or Animal Handling roll to control.

### Demons and Devils

#### Imp

_A tiny winged fiend, a messenger and spy of greater demons, with a stinging tail and a wicked tongue._

**Type:** Fiend · **Size:** x1/4 · **Weight:** 8 kg · **Threat:** Low

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  2  |  9  |  6  |  6  |  6  |  6  |  5  |  8  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  |  6  |  6  | 13 / 7 |    28    |    38    |      4      |      10      |   1   |     6      |

**Speed:** flying 13 (base 10): 35 km/h, 29 m/round; ground 7 (base 4): 19 km/h, 16 m/round · **STR bonus:** -6

**Attacks**

| Attack     | Skill | Dmg | DMAX | Total | Notes |
| :--------- | :---: | :-: | :--: | :---: | :---- |
| Claws      |   9   | +0  |  4   |  -6   |       |
| Tail sting |   9   | +0  |  4   |  -6   | Venom |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Stealth 13, Perception 12, Persuasion 8

**Special**

- **Infernal.** Immune to normal fire and heat; resists poison (+II to Physical Resistance). Destroyed on the mortal plane, it returns to the Pit and may come back after a century.
- **Flight.** Uses the flying speed above.
- **Venom.** Virulence 12, period 1 minute, effect 1d6* Physical Stun per failed period. _Proposal._
- **Invisibility.** Can turn invisible at will; the referee decides the duration and any limits.

#### Hellhound

_A black, fire-eyed hound that exhales flames, hunted down in packs by infernal masters._

**Type:** Fiend (canid) · **Size:** x1 · **Weight:** 100 kg · **Threat:** Moderate (High in packs)

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 10  |  8  | 10  |  3  |  4  |  7  |  6  |  9  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  8  |  5  | 15  |    54    |    44    |     13      |      11      |   2   |     17     |

**Speed:** 15 (base 11): 43 km/h, 36 m/round · **STR bonus:** +3

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                                       |
| :---------- | :---: | :-: | :--: | :---: | :------------------------------------------ |
| Bite        |  11   | +2  |  4   |  +5   | Burns                                       |
| Fire breath |   8   | +12 |  2   |  +12  | Cone 30°, range UT 4, burns, every 3 rounds |

**Reflex Dodge:** 7

**Skills:** Dodge 10, Perception 14, Tracking 14 (by scent), Intimidation 9

**Special**

- **Infernal.** Immune to normal fire and heat; resists poison (+II to Physical Resistance). Destroyed on the mortal plane, it returns to the Pit and may come back after a century.
- **Burning Bite.** A hit sets the target on fire: 1d6* Physical Injury per round for 2 rounds unless extinguished. _Proposal._
- **Keen Smell.** +I to Perception and Tracking rolls based on scent.
- **Pack Tactics.** +I on attacks against a target already attacked by a packmate this round. _Optional._

#### Succubus / Incubus

_A beautiful seducer of mortals, a demon who drains the will and the life of its lovers._

**Type:** Fiend · **Size:** x1 · **Weight:** 65 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  8  |  7  |  7  |  8  |  9  | 12  |  9  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  8  |  8  |  7  | 13 / 9 |    44    |    60    |     11      |      14      |   0   |     11     |

**Speed:** flying 13 (base 10): 35 km/h, 29 m/round; ground 9 (base 6): 24 km/h, 20 m/round · **STR bonus:** +1

**Attacks**

| Attack        | Skill | Dmg | DMAX | Total | Notes                                        |
| :------------ | :---: | :-: | :--: | :---: | :------------------------------------------- |
| Claws         |  12   | +2  |  4   |  +3   |                                              |
| Draining kiss |  12   | +6  |  3   |  +6   | Charmed or grappled target, psychical damage |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Charm 20, Persuasion 18, Bluff 17, Psychology 14, Perception 13

**Special**

- **Infernal.** Immune to normal fire and heat; resists poison (+II to Physical Resistance). Destroyed on the mortal plane, it returns to the Pit and may come back after a century.
- **Flight.** Uses the flying speed above. (if winged form).
- **Charm.** Charm vs. Mental Resistance at close range; a charmed victim obeys simple requests.
- **Draining Kiss.** Inflicts Psychical Injury; the demon recovers half of it. _Proposal._
- **Shapechange.** Can pass for a human of either sex (+II to Disguise).

#### Lesser Demon (Fiend Warrior)

_A 2.5 m horned and armored fiend, the soldier of infernal armies._

**Type:** Fiend · **Size:** x2 · **Weight:** 250 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 18  |  7  | 11  |  5  |  5  |  8  |  8  |  7  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  9  |  5  | 10  |    74    |    46    |     17      |      12      |   5   |     27     |

**Speed:** 10 (base 6): 26 km/h, 22 m/round · **STR bonus:** +7

**Attacks**

| Attack         | Skill | Dmg | DMAX | Total | Notes                               |
| :------------- | :---: | :-: | :--: | :---: | :---------------------------------- |
| Infernal blade |  13   | +12 |  3   |  +19  | 2-handed sword, +I oversized, burns |
| Claws          |  12   | +2  |  4   |  +9   |                                     |

**Reflex Dodge:** 6

**Skills:** Dodge 9, Intimidation 14, Command 12, Perception 10

**Special**

- **Infernal.** Immune to normal fire and heat; resists poison (+II to Physical Resistance). Destroyed on the mortal plane, it returns to the Pit and may come back after a century.
- **Burning Blade.** A hit sets the target on fire: 1d6* Physical Injury per round for 2 rounds unless extinguished. _Proposal._
- **Aura of Dread.** Characters who see it must succeed a Mental Resistance roll or suffer Psychical Stun 1d6*. _Proposal._
- **Infernal Hide.** Already counted in Protection.

**Variants**

- **Winged Fiend:** adds flight (flying SPD base 12).

#### Greater Demon

_A 6 m infernal lord wreathed in hellfire, a ruler of legions and breaker of worlds._

**Type:** Fiend · **Size:** x4 · **Weight:** 3000 kg · **Threat:** Legendary

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 26  |  6  | 16  |  5  |  9  | 12  | 13  | 10  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  | 12  |  7  | 17 / 11 |   108    |    70    |     34      |      14      |   8   |     50     |

**Speed:** flying 17 (base 12): 54 km/h, 45 m/round; ground 11 (base 6): 29 km/h, 24 m/round · **STR bonus:** +24

**Attacks**

| Attack      | Skill | Dmg | DMAX | Total | Notes                                |
| :---------- | :---: | :-: | :--: | :---: | :----------------------------------- |
| Great blade |  16   | +12 |  3   |  +36  | 2-handed sword, +II oversized, burns |
| Claws       |  15   | +2  |  4   |  +26  |                                      |
| Hellfire    |  13   | +24 |  5   |  +24  | Area, radius 5 m, range UT 8, burns  |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Intimidation 21, Persuasion 17, Mental Resistance 18, Occultism 15, Perception 15

**Special**

- **Infernal.** Immune to normal fire and heat; resists poison (+II to Physical Resistance). Destroyed on the mortal plane, it returns to the Pit and may come back after a century.
- **Flight.** Uses the flying speed above.
- **Terrifying Presence.** Characters who see it must succeed a Mental Resistance roll or suffer Psychical Stun 2d6*. _Proposal._
- **Hellfire.** Area attack (as explosives); targets burn for 1d6* Physical Injury per round for 3 rounds. _Proposal._
- **Magic.** Casts spells according to the game universe; the referee chooses its repertoire.
- **Command Lesser Fiends.** Commands lesser demons and imps within sight.
- **Multiple Attacks.** Blade and claws in the same round, each at -I.

### Elementals and Spirits

#### Fire Elemental

_A living column of flame, summoned or born of volcanoes and great fires._

**Type:** Elemental · **Size:** x2 · **Weight:** none · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  9  | 12  |  4  |  3  |  8  |  5  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  6  |  8  |  4  | 13  |    64    |    36    |     14      |      10      |   0   |     14     |

**Speed:** 13 (base 8): 35 km/h, 29 m/round · **STR bonus:** +4

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes             |
| :-------- | :---: | :-: | :--: | :---: | :---------------- |
| Fire lash |  11   | +8  |  3   |  +12  | Burns             |
| Fire bolt |   8   | +12 |  3   |  +12  | Range UT 5, burns |

**Reflex Dodge:** 7

**Skills:** Dodge 11, Perception 7, Intimidation 8

**Special**

- **Elemental.** Immune to poison, disease, suffocation, fatigue and mental influence.
- **Body of Flame.** Ignites flammable materials on contact; anyone grappling or hit in melee takes 1d6* fire damage. Non-magical weapons inflict half damage.
- **Burning Blows.** A hit sets the target on fire: 1d6* Physical Injury per round for 2 rounds unless extinguished. _Proposal._
- **Weakness.** Water inflicts double damage.

**Variants**

- **Lesser (Size x1):** STR 8, END 8, Fire lash +4. **Greater (Size x4):** STR 20, END 16, Fire lash +12.

#### Water Elemental

_A towering wave given form and will, drowning anything that enters its domain._

**Type:** Elemental · **Size:** x2 · **Weight:** none · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 16  |  6  | 14  |  3  |  3  |  8  |  5  |  5  |

| INI | CCO | RCO |  SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  4  |  8  |  3  | 15 / 8 |    76    |    36    |     16      |      10      |   2   |     20     |

**Speed:** swimming 15 (base 10): 43 km/h, 36 m/round; ground 8 (base 3): 22 km/h, 18 m/round · **STR bonus:** +6

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes             |
| :----- | :---: | :-: | :--: | :---: | :---------------- |
| Slam   |  11   | +4  |  3   |  +10  |                   |
| Engulf |  11   | +0  |  1   |  +6   | Grapple, drowning |

**Reflex Dodge:** 5

**Skills:** Dodge 6, Perception 7, Swimming 19

**Special**

- **Elemental.** Immune to poison, disease, suffocation, fatigue and mental influence.
- **Fluid Body.** Piercing weapons inflict half damage.
- **Engulf.** A grappled victim is drowned (see 6.3): 1d6* Physical Stun per round.
- **Bound to Water.** Moves at full speed in water, half speed on land.
- **Weakness.** Cold slows it (-3 SPD).

#### Air Elemental

_A whirling storm of wind and dust, deadly to anything it can lift off the ground._

**Type:** Elemental · **Size:** x4 · **Weight:** none · **Threat:** Moderate

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 14  | 12  | 10  |  5  |  3  |  7  |  5  |  6  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  7  | 10  |  5  | 20  |    62    |    36    |     15      |      10      |   0   |     15     |

**Speed:** flying 20 (base 15): 72 km/h, 60 m/round · **STR bonus:** +5

**Attacks**

| Attack    | Skill | Dmg | DMAX | Total | Notes                                  |
| :-------- | :---: | :-: | :--: | :---: | :------------------------------------- |
| Buffet    |  13   | +6  |  3   |  +11  | Blunt                                  |
| Whirlwind |  13   | +6  |  3   |  +11  | All in 3 m, grapple, hurls victims 6 m |

**Reflex Dodge:** 9

**Skills:** Dodge 15, Perception 8

**Special**

- **Elemental.** Immune to poison, disease, suffocation, fatigue and mental influence.
- **Flight.** Uses the flying speed above.
- **Winds.** Non-magical weapons inflict half damage; missiles against it are at -II.
- **Whirlwind.** Victims must win Strength vs. Strength or be lifted and hurled 6 m (falling damage). _Proposal._

#### Earth Elemental

_A walking mass of stone and soil, slow but irresistible._

**Type:** Elemental · **Size:** x2 · **Weight:** none · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 24  |  3  | 16  |  2  |  3  |  9  |  4  |  5  |

| INI | CCO | RCO | SPD | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  3  |  8  |  3  |  7  |    98    |    36    |     28      |      8       |  12   |     52     |

**Speed:** 7 (base 3): 19 km/h, 16 m/round · **STR bonus:** +18

**Attacks**

| Attack | Skill | Dmg | DMAX | Total | Notes |
| :----- | :---: | :-: | :--: | :---: | :---- |
| Slam   |  11   | +4  |  3   |  +22  | Blunt |

**Reflex Dodge:** 3

**Skills:** Dodge 3, Perception 7

**Special**

- **Elemental.** Immune to poison, disease, suffocation, fatigue and mental influence.
- **Stone Body.** Edged and piercing weapons inflict half damage. Already counted in Protection.
- **Earth Glide.** Moves through earth and stone at its normal speed without disturbing them.
- **Slow.** Acts last in every round.

#### Djinn / Efreet

_A powerful spirit of air (djinn) or fire (efreet), proud, cunning and bound by pacts and wishes._

**Type:** Spirit · **Size:** x2 · **Weight:** 150 kg · **Threat:** High

| STR | AGI | END | DEX | WIT | WIL | PRE | INS |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 12  |  9  |  9  |  6  |  9  | 11  | 12  | 10  |

| INI | CCO | RCO |   SPD   | Phys. HP | Ment. HP | Phys. Shock | Psych. Shock | Prot. | Max Impact |
| :-: | :-: | :-: | :-----: | :------: | :------: | :---------: | :----------: | :---: | :--------: |
|  9  | 10  |  7  | 18 / 10 |    64    |    66    |     14      |      14      |   2   |     18     |

**Speed:** flying 18 (base 14): 60 km/h, 50 m/round; ground 10 (base 6): 26 km/h, 22 m/round · **STR bonus:** +4

**Attacks**

| Attack          | Skill | Dmg | DMAX | Total | Notes                     |
| :-------------- | :---: | :-: | :--: | :---: | :------------------------ |
| Scimitar        |  16   | +6  |  4   |  +10  |                           |
| Elemental blast |  12   | +18 |  3   |  +18  | Wind or flame, range UT 6 |

**Reflex Dodge:** 8

**Skills:** Dodge 12, Persuasion 18, Perception 14, Occultism 15, Mental Resistance 15

**Special**

- **Flight.** Uses the flying speed above.
- **Magic.** Casts spells according to the game universe; the referee chooses its repertoire.
- **Bargain.** Can grant wishes under the terms of a pact; bound to its vessel or master.
- **Shapechange.** Can take the form of a smoke, a whirlwind or a human.
- **Elemental Nature.** Immune to poison, disease and its own element (wind or fire).

---

_Open Game Content, for use with Rules of SagaS 0.995 LLL (OGL 1.0a). Include the OGL text when distributing._
