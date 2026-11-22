# RULES OF SAGAS

Rules of SagaS, 0.995 LLL (OGL) version.

---

## 1. PRELIMINARIES

### 1.1. LICENSE

The following rules are proposed under the OGL (« Open Game License »). The OGL 1.0a, Version from Wizards of the Coast, is given at the end of this document.

### 1.2. CONVENTIONS AND SPECIAL TERMS

* In all the formulas of this text where divisions are involved, the rounding convention is to take the first integer value below the result of the division (floor division).
* It will often be referred later to an "Universal Table" (UT) given in the appendix.
* A convenient unit of time often used in the rules is the **"round"**. It represents **3 seconds**.

---

## 2. SAGAS IN A SHORT STORY

### 2.1. THE PRINCIPLES

SagaS is meant to be a generic role-playing system. It has mechanisms common to most role-playing universes. It has been used in games where magic was present, in universes with superpowers, and in science fiction contexts. Over time, the game system has evolved and the present document describes its latest version.

In SagaS, the specificities of the game world are seen as add-ons to the rules you are currently reading. These current rules are default rules applicable to all the universes in which you play SagaS. However, in some universes, specific rules may apply and they will always have priority over the basic rules presented here.

### 2.2. THE BASIC ELEMENTS OF SAGAS

SagaS is based on **Characteristics** and **Skills**.

#### THE MAIN CHARACTERISTICS

* STRENGTH
* AGILITY
* ENDURANCE
* DEXTERITY
* WIT
* WILL
* PRESENCE
* INSTINCT

#### THE SECONDARY CHARACTERISTICS

* INITIATIVE
* CLOSE COMBAT
* RANGED COMBAT
* SPEED

The man (or the woman) from the street has about **5** in each characteristic, except for the **SPEED** where he/she has **8**.

#### HOW TO ROLL A DIE IN SAGAS?

In SagaS we use 6-sided dice in a special way. By convention we note: $1D6^{*}$ the result of a $1D6$ roll, where, if we roll a 6, a 6 is added and the die is thrown again until it is no longer a 6. Then the last value of the die (different from 6) is added to the total, which is the result of the $1D6^{*}$ roll.

*For example: if you roll $1D6$ and the result is 3, the result of $1D6^{*}$ is 3. If you roll $1D6$ and the result is 6 you reroll the die, and if the new result is 6 you reroll, and if you obtain 3, the result of the $1D6^{*}$ roll is: $6 + 6 + 3 = 15$.*

#### HOW TO RESOLVE AN ACTION IN SAGAS?

To resolve an action in SagaS we generally make a roll under a skill (the exception being in some cases to make a roll under a characteristic); this is called a Skill (or Characteristic) test. To the result of this roll, which we call a **degree**, we can add situation modifiers which are positive or negative degrees.

To resolve an action you have to:

* Make a roll of $2D6^{*}$ (thus throw twice $1D6^{*}$ as previously described and sum the results), and divide the value of the skill by the result of the roll and round down the result: this is called the **degree**. Then you have to add degree modifiers to get the final degree.
* If during the roll of the dice you roll a **2** (critical hit) or **12** (potential fumble) on the first roll, this is a special case to handle with the referee.
* If you roll strictly more than $2 \times$ your skill value, it is a failure regardless of any degree bonuses. Yes, it's hard, but obviously, you've been too bad to take advantage of any situation bonus.

For those who are refractory to mental arithmetic, it is possible to use a small table given in Section 18 to determine this degree.

#### THE TIME SCALE IN SAGAS

In SagaS we distinguish:

* **The narrative play mode:** where the passage of time is sufficiently elastic and is determined by the referee.
* **The tactical game mode:** where the unit of time is the round of $3\text{s}$.

The tactical mode is adapted to tense situations (combat, pursuit between vehicles...) whereas the narrative mode is more adapted to situations of information sharing and collective thinking.

---

## 3. CHARACTER CREATION

### 3.1. THE CHARACTERISTICS

The characteristics quantitatively describe aspects of the character necessary for the mechanics of the game, in particular the resolution of actions.

> **Remark:** Even if the characteristics are very important in terms of play, we remind you that in a role-playing game, a character cannot be reduced to these values: his motives, his tastes, his purpose in life are not described by characteristics and should be developed by the player with the possible contribution of the referee. The rules that follow do not really treat this aspect, which does not mean that it must be ignored in a game.

There are two types of characteristics:

* **Main characteristics:** They quantitatively define the most important abilities of the character. They can be modified during the creation and evolution of the character.
* **Secondary characteristics:** They depend on the main characteristics and some of them can be modified during the creation and evolution of the character.

#### MAIN CHARACTERISTICS

| Characteristic | Abbr. | Description |
| :--- | :--- | :--- |
| **STRENGTH** | **(STR)** | Represents physical strength and strength of the body. Strength is useful for inflicting damage in close combat. It also allows for a better resistance to physical damage. Maximum weight portable by the character depends on Strength and is given by the UT. Strength is limited to 20 for normal humans. |
| **AGILITY** | **(AGI)** | Represents the ability to move one's entire body with ease and sense of balance. Agility also allows you to dodge melee or ranged attacks. |
| **ENDURANCE** | **(END)** | Represents the resistance to poisons, diseases, the ability to recover, and fatigue resistance. |
| **DEXTERITY** | **(DEX)** | Represents the precision of small movements, and the ability to focus to perform the right gesture. |
| **WIT** | **(WIT)** | Represents the capacity for abstraction and reasoning, as well as memory and general knowledge. |
| **WILL** | **(WIL)** | Represents mental strength, the ability to resist influence and to follow one's goal at all costs. |
| **PRESENCE** | **(PRE)** | Represents the ability to influence, convince, charm, intimidate. |
| **INSTINCT** | **(INS)** | Represents the sixth sense, empathy, perception. |

#### SECONDARY CHARACTERISTICS

* **CLOSE COMBAT (CCO)**
  $$\text{Close Combat (CCO)} = \frac{\text{Strength} + 2 \times \text{Agility} + \text{Instinct} + \text{Will}}{5} + \text{creation bonus}$$
  Represents the combat capability in melee: with bare hands or with a contact weapon.

* **RANGED COMBAT (RCO)**
  $$\text{Ranged Combat (RCO)} = \frac{3 \times \text{Dexterity} + 2 \times \text{Instinct}}{5} + \text{creation bonus}$$
  Represents the ability to perform a ranged attack correctly.

* **SPEED (SPD)**
  $$\text{Speed (SPD)} = \text{base species} + \frac{\text{Endurance} + \text{Agility}}{4} + \text{creation bonus}$$
  * Base species $= 6$ for normal humans.
  * Speed is limited to $16$ for normal humans.
  * Speed represents the character's ability to move at a rate given on the UT. It also serves as a base for athletics skills.

* **INITIATIVE (INI)**
  $$\text{Initiative (INI)} = \frac{\text{Agility} + \text{Wit}}{2} + \text{creation bonus}$$
  Represents the ability to react quickly under stress.

#### CHARACTERISTICS BONUS

In the course of the game, some actions are based on characteristics. If the value of the characteristic is high enough, then a bonus on the result of the action performed with a skill using this characteristic may exist. This bonus for a characteristic is given in the Universal Table. For characteristic values between 5 and 20, the characteristic bonus is:
$$\text{Characteristic Bonus} = \left\lfloor \frac{\text{Value of the characteristic}}{2} \right\rfloor - 2$$

#### OTHER CHARACTERISTICS

##### THRESHOLDS AND HEALTH POINTS

* $\text{Physical Shock Threshold} = 10 + \text{Strength characteristic bonus}$
* $\text{Psychical Shock Threshold} = 10 + \text{Presence characteristic bonus}$
* $\text{Maximum Physical Hit Points} = 2 \times (\text{Strength} + \text{Endurance} + \text{Will})$
* $\text{Maximum Mental Hit Points} = 2 \times (\text{Presence} + \text{Will} + \text{Instinct})$

##### IMPACT BONUS

The characters (or more generally the « entities » in the game: creatures, non-player characters or vehicles) may have a protection which represents an armor and may absorb damage. The maximum impact bonus is then given by:
$$\text{Maximum Impact Bonus} = 2 \times \text{Protection} + \text{Physical Shock Threshold}$$
This is the maximum damage bonus that can be inflicted by using one's body as a weapon and aiming at full speed against an obstacle or an enemy that one seeks to damage.
> **Remark:** This does not represent the maximum damage that can be suffered during an impact.

##### REFLEX DODGE VALUE

In addition to the characteristics, each character has skills that represent his/her knowledge, skills, and experiences in various fields. The Dodge skill plays a special role. Indeed, Reflex Dodge is based on the Dodge skill of the character. It is very important because it is often the character's ultimate defense against physical aggression.

* The value of the Reflex Dodge is:
  $$\text{Reflex Dodge} = 2 + \left\lfloor \frac{\text{Dodge}}{2} \right\rfloor$$
* Against any attack with no defense maneuver (dodging or parrying), a Reflex Dodge can oppose the attack. One can do a Reflex Dodge even on an unseen attack if one is in combat (for more details, see the combat rules).
* Out of combat and without special warning, a character totally surprised by an attack does not have the possibility to perform a Reflex Dodge.

---

### 3.2. SKILLS

#### LIMITS AND LEVELS

A character has skills. Each skill is associated with a primary or secondary characteristic. Each skill is characterized by a **learning level** that the character can increase. To obtain the **total level** of a skill, we add the value of the associated characteristic and the learning level.

The initial learning level of a skill is **-15, -10, -5 or 0**. Skills whose initial learning level is -15 are considered the most difficult. The referee may decide that the skill is not usable without a minimum of training, even if the associated characteristic is very high. *For example, reading an unknown language is in general impossible (in this case the referee may however decide that a partial understanding is possible if the character knows a neighboring language).*

The following table gives a qualitative interpretation of the total level in a skill:

| Total Level | Qualitative Description |
| :--- | :--- |
| Less than or equal to 0 | Incompetent |
| Between 1 and 5 | Beginner |
| Between 6 and 10 | Amateur |
| Between 11 and 15 | Professional |
| Between 16 and 20 | Expert |
| More than 21 | Master |

It should be noted that the list and the basic level of the skills are related to the universe in which one plays. The available skills depend on the level of technology of the universe in which the character evolves. The available skills tables are given in Section 17.

---

### 3.3. CHARACTER CREATION

#### CREATION OF BEGINNING CHARACTERS

To create a character, points are used to buy skills or characteristics. The number of creation points for a beginning character is **150**.

To have a reference, the average person usually has one to two main characteristics at 8 and has a learning level between 5 and 10 in the skills useful for his trade, which gives him between 50 and 100 points.

Points are used to increase characteristics and skills. All main characteristics have a base of **5**. To increase a main characteristic by 1, you have to pay:

* **3** if the final characteristic is less than or equal to 5 (in the case where one would have less than 5 for background reasons to be approved by the referee)
* **6** if the final characteristic is between 6 and 10
* **12** if the final characteristic is between 11 and 15
* **24** if the final characteristic is between 16 and 20
* **48** if the final characteristic is greater than or equal to 21

The secondary characteristics are then deduced (do not forget to calculate the secondary characteristics again if one or more main characteristics are modified). To buy a bonus of 1 for secondary characteristics (Close Combat, Ranged Combat, Initiative, and Speed), the costs defined for the main characteristics are **multiplied by 3**.

To increase the learning level of a skill by 1, you have to pay:

* **1** to go from -15 to -10 (one step of 5 levels)
* **1** to go from -10 to -5 (one step of 5 levels)
* **1** to go from -5 to 0 (one step of 5 levels)

Below 0, the learning level only moves in steps of 5: it is -15, -10, -5 or 0.

* **1** if the final level is 1 to 5
* **2** if the final level is 6 to 10
* **4** if the final level is 11 to 15
* **8** if the final level is 16 to 20
* **16** if the final level is greater than or equal to 21

The available skills depend on the level of technology of the game universe and are described in Section 17.

#### CHARACTER CREATION WITH PRELIMINARY EXPERIENCE

In some cases, the referee will want to start his scenario or his campaign with more experienced characters. This is particularly the case if he wishes to move towards action scenarios rather than inquiry scenarios.

We can distinguish three levels of campaigns:

1. **"Low" level (Default):** The characters are a little better than ordinary people. However, they remain vulnerable and must be cautious. This corresponds to contemporary investigation scenarios or low-level Heroic-Fantasy scenarios. Literary references include detective stories as well as the horror stories of Lovecraft and his followers. In Heroic-Fantasy, we are close to universes like *"The Black Company"* by Glenn Cook.
2. **"Intermediate" level:** The characters are more powerful than the average individual. This corresponds to scenarios where risky actions can be attempted. Literary references are the pulps of the 30s, contemporary spy and action stories, or in the cinematic field, the *Indiana Jones* series.
3. **"High" level:** The characters are far more powerful than the average individual. We are close to the field of superheroes, at least in their original version as *The Shadow*, *Doc Savage*, or original *Batman*. In Heroic-Fantasy, we are in the domain of "High Fantasy" or "Sword and Sorcery" with heroes like *Conan*, *Fafhrd and the Grey Mouser*, or *Elric the Necromancer*.

As a reminder, the player can create his characters at one of the 3 levels proposed, but the referee is the only judge to validate this choice and accept the character in his scenario.

| Characters | Campaign Type | Cinematographic and Literary References | Creation Points |
| :--- | :--- | :--- | :--- |
| **A little more powerful than normal** | Investigation / Action, Heroic-Fantasy, Science-Fiction | • Continental Op in *"Red Harvest"* by Dashiell Hammett • Robert Olmstead in *"The Shadow over Innsmouth"* by H.P. Lovecraft • Croaker (Toubib) in *"The Black Company"* by Glenn Cook • Jon Snow in *"A Song of Ice and Fire"* by George R.R. Martin • John Gordon in *"The Star Kings"* by Edmond Hamilton • Ellen Ripley in *"Alien"* by Ridley Scott | **150** |
| **More powerful than normal** | Investigation / Action, Heroic-Fantasy, Science-Fiction | • James Bond in *"Dr. No"* by Ian Fleming • André Moreau in *"Scaramouche"* by George Sidney • Indiana Jones in *"Indiana Jones and the Last Crusade"* by Steven Spielberg • Boromir in *"The Lord of the Rings"* by J.R.R. Tolkien • Etienne de Navarre in *"Ladyhawke"* by Richard Donner • Northwest Smith in *"Shambleau"* by C.L. Moore | **250** |
| **Much more powerful than normal** | Investigation / Action, Heroic-Fantasy, Science-Fiction | • Kent Allard in *"The Shadow"* by Maxwell Grant • Bruce Wayne in *"The Batman"* by Bob Kane and Bill Finger • Clark Savage Jr. in *"Doc Savage"* by Kenneth Robeson • Conan in *"The Scarlet Citadel"* by Robert E. Howard • Elric in *"Stormbringer"* by Michael Moorcock • Fafhrd and the Grey Mouser in *"Swords of Lankhmar"* by Fritz Leiber • Luke Skywalker in *"Star Wars: Return of the Jedi"* by Richard Marquand • Eric John Stark in *"The People of the Talisman"* by Leigh Brackett | **350** |

#### WHAT TO DO IF YOU WANT A SKILL NOT LISTED?

When a skill does not appear in the list corresponding to the level of technology in which the skill exists, there are several cases:

* If it is very close to a listed skill, consider that it is the one on the list.
* If this is a completely new skill, the player must determine with the referee whether it is appropriate to create it and to which characteristic to attach it.
* Finally, since no list of skills can be exhaustive, some skills are considered generic (present in the list in italics/underlined) and must be specialized. This is the case, for example, with foreign languages.

#### PROFESSION AND SOCIAL LEVEL

In the above, the profession and the social level of the character have not been addressed.

* **Profession:** It is important that the skills of the character reflect their profession. As an indication, practicing a profession at a competent level requires at least **11** in the skills associated with this trade. Rather than providing endless tables combining professions and associated skills, we prefer that the referee and the player are co-responsible for consistency between the profession of the character and their skills.
* **Social Level:** For social level and income, the characters are supposed to be part of the middle class of the society in which they evolve. They can obtain coherent goods and services of this average level.
  * A player may, in agreement with the referee, ask that his character be part of a more privileged social class, which will cost him **10 creation points**, with extended goods and services in return.
  * He can also ask that his character be part of a less favored social class, which allows him to earn **10 creation points**.
  * We do not recommend (except where the general context is appropriate) for the referee to let players embody "super-rich" or "super-poor" characters. In each of these cases, the characters will likely have concerns that will prevent them from getting into an adventure.

---

### 3.4. EVOLUTION OF THE CHARACTERS

#### GENERAL PRINCIPLES

* The referee gives each player **5 experience points** after each scenario. A scenario is not necessarily a game session; it must correspond to the achievement of an intermediate objective by the players. As an indication, you must allocate these points after a maximum of 3 sessions of play.
* A player who has embodied his character in an exceptional way can be awarded up to **5 additional points**. This must remain rare and correspond to good role-playing in full agreement with the character. This rule is totally optional and the referee must be able to justify it to other players (remarkable ideas, exceptional risk-taking, intense role-playing).
* The character's evolution must be done with the agreement of the referee on the choice of characteristics/competences and must preserve a maximum of realism (in the sense of the universe where the scenario takes place).
* The cost of progression is identical to the purchase cost during the creation phase of the character.
* Unspent experience points can be kept from one scenario to another.

#### SPECIAL RULES

* In the presence of a trainer (total skill level greater than or equal to $+5$ compared to that of the student character), the cost is **halved**.
* The total number of skills and characteristics that can be studied simultaneously is equal to:
  $$\left\lfloor \frac{\min(\text{Wit}, \text{Will})}{2} \right\rfloor$$

---

## 4. THE GAME SYSTEM

### 4.1. DETERMINATION OF DEGREES OF SUCCESS

#### D6 OPEN OR $D6^{*}$

We define the result of the throw of a $d6^{*}$ in the following way: roll $1d6$. If the result is 6, the die must be re-rolled and accumulated to the previous result. The last die (not a 6!) is then added to the total.

#### ROLL UNDER A CHARACTERISTIC OR SKILL

In SagaS, a roll of dice under a characteristic or the total level of a skill is obtained by throwing two $d6^{*}$ and summing their results ($2d6^{*}$).

#### DEGREE OF A ROLL UNDER A CHARACTERISTIC OR SKILL

The result of a roll under a characteristic or the total level of a skill is measured by a **degree**. The higher the degree, the better the result. This degree from the roll of dice can be strictly positive or zero.

The degree of a roll under a characteristic or under the total level of a skill is calculated as follows (the term "score" refers to the value of the characteristic or the total level of the skill):

* If the value of the roll is less than or equal to the score, the degree is:
  $$\text{Degree} = \left\lfloor \frac{\text{score}}{\text{throw}} \right\rfloor$$
* If the value of the roll is strictly greater than the score, the degree is **0**: this is in principle a failure, but positive situation modifiers can transform it into a success.
* If the value of the roll is strictly greater than twice the score ($> 2 \times \text{score}$), it is an **automatic failure**; the degree is always **0**, whatever the subsequent degree modifiers are.

Degrees due to circumstance modifiers may be added or subtracted from the resulting degree of this roll to obtain the final degree. Degrees other than 0 are often noted in the form of Roman numerals (for example, $+\text{III}$ for a degree 3).

#### ROLL OF A NATURAL 2

Obtaining a natural **2** ($1+1$) when it allows the success of the action taken may give the character an advantage if the referee agrees. This applies to both Player and Non-Player Characters. In the case of Player Characters, the Referee may let the player imagine his advantage and negotiate it in the interest of the story. In the case of an action in opposition (described in the next section), the success of an action still requires a final degree at least equal to $\text{I}$.

#### ROLL OF A NATURAL 12

Obtaining a natural **12** in the first roll of dice ($6$ and $6$) will require additional rolls of dice (because the dice explode). When at the end of these rolls, the action taken leads to a degree 0 (so a failure including situational modifiers), the referee may give a penalty (fumble) to the character. In the case of a Player Character, the Referee may let the player imagine his penalty and negotiate it in the interest of the story. The player may negotiate a short-term penalty that gives him an advantage in the longer term.

> **Note: Total Level of a Skill Less Than or Equal to 0**  
> If the total level of a skill is less than or equal to 0, you have no chance of succeeding in an action using this skill, unless the referee decides it is so simple that success is automatic.

---

### 4.2. SIMPLE ACTIONS AND OPPOSING ACTIONS

In SagaS, we distinguish **simple actions**, where only one of the protagonists must make one or more rolls of dice, and **actions in opposition**, where each of the protagonists rolls, the winner being the one having the highest degree.

#### SINGLE ACTION RESOLUTION

One who tries the action must make a roll and get a degree of at least $\text{I}$. Situation modifiers may apply. The degree of success is then the total degree obtained including the situation modifiers. In case of failure, you can try again if you have a higher skill level (this is the case if you get help) or a bigger situation modifier.

#### RESOLVING AN OPPOSING ACTION

Opposing actions are to be used in situations where active opposition may be considered. In this case, to succeed, it is not enough to obtain a degree of at least $\text{I}$; it is also necessary that this degree be strictly greater than that of the opposition.

In an opposition, the **degree of success** is the difference of degrees between the two opponents. Be careful, in this case, the degree of success may be negative; for example, if one of the protagonists gets a degree $\text{I}$ and his opponent a degree $\text{II}$, the resulting degree is $\text{I} - \text{II} = -\text{I}$.

* **Characteristic vs. Characteristic Opposition:** We determine a degree using the characteristic value of each protagonist, then we calculate the degree of success as above. *(Example: Strength vs. Strength can be used to prevent an opponent from opening a door).*
* **Skill vs. Skill Opposition:** We determine a degree below the score in the skill of each protagonist, then we calculate the degree of success as above. *(Example: Stealth against Perception to progress without the knowledge of a sentinel).*

The winner of a roll in opposition is the one who has a strictly positive degree of success and who has achieved at least a degree $\text{I}$ on his action. If there is no winner, the situation does not change. If the situation must necessarily evolve, the referee can ask for another roll in opposition.

---

### 4.3. RESOLUTION OF LONG-TERM ACTIONS

In SagaS, one also distinguishes rather short actions (which generally require a single roll or a sequence of rolls) from actions of longer duration (which require several rolls and the accumulation of their results during the execution of the action).

Important actions for the fate of the characters are treated as long-lasting actions in order to avoid giving too much importance to a single roll of dice. For example, a fight is a form of long-term action with a specific method of resolution given later. Another example might be an oratory or eloquence challenge, where a character tries to prove his or her good faith to a suspicious audience, or even to jurors in the case of a trial.

A general rule is given here that the referee may modify if deemed necessary:

1. The referee indicates the time interval between two rolls of dice.
2. The referee determines (and may or may not communicate to the players) the number of degrees of success to accumulate for the task to be considered complete.
3. The referee can also communicate the negative degree threshold that, if achieved, irretrievably fails the action.
4. The referee determines the value of the opposition.
5. When the time has come to make a roll, the character(s) wishing to perform the action accumulate their degrees, the referee does the same for the opposition, and we determine a net degree of success for the characters (which can be positive or negative).
6. This degree of success is added to the cumulative total degree of the characters.
7. If the total degree is greater than or equal to the cumulative degrees required, then the action is a success; if it is less than or equal to the negative degree threshold, then it is a failure.
8. Time can also enter into account: if the situation is not resolved within a time limit, one of the two sides can win, or if a winner is required at all costs, it is determined according to the sign of the current cumulative degree of success.

---

### 4.4. HELP OF A CHARACTER BY ANOTHER CHARACTER

There are cases where the help of a character by other characters is easy to evaluate: for example, to lift a heavy stone, we can add the maximum weights that may be lifted by the characters to know if the stone is moved.

In other cases, the solution is less simple: the referee may allow characters (auxiliary actors) to help a character (main actor) for the use of a skill.

* The first auxiliary actor adds **half** of his skill to that of the main actor.
* The second auxiliary actor adds a **quarter** of his skill, and so on.

This rule is available only where there is no other obvious solution.

---

### 4.5. MANAGEMENT OF NEIGHBORING SKILLS

When a character does not have a skill but has a neighboring skill (to be approved by the referee), he may, if he so desires, use the neighboring skill in place of the required skill: he may use **half of its value** rather than using the default base value.

---

### 4.6. SKILLS USED SIMULTANEOUSLY

When two skills are used simultaneously, the value of the **weakest skill** must be taken to determine the eventual success of the action. This is, for instance, the case for two-weapon actions, fighting on a mount, or attacking while driving a vehicle.

---

## 5. CHARACTER HEALTH: DAMAGES AND INJURIES

### 5.1. INJURIES AND STUN

Damage is divided into four types:

* **Physical Injuries:** They last a long time and their accumulation can kill.
* **Physical Stun:** They are temporary, but their accumulation can cause unconsciousness.
* **Psychical Injuries:** Their accumulation can lead to madness.
* **Psychical Stun:** They are temporary, but their accumulation can cause a state of confusion.

---

### 5.2. PHYSICAL DAMAGE

* The total physical damage taken by a character is the sum of **Physical Injuries** and **Physical Stun**.
* If the total physical damage is greater than or equal to the character's **Physical Hit Points**, the character is **unconscious and dying**; he takes **1 point of Physical Injury every 4 rounds ($12\text{s}$)** unless he is healed.
* When the total of Physical Injuries attains $\text{Maximum Physical Hit Points} + \text{Endurance}$, the character **dies**.
* When the total Physical Stun points taken by the character is greater than or equal to the character's Physical Hit Points, any further Physical Stun damage suffered is transformed into **Physical Injury**.

---

### 5.3. PSYCHICAL DAMAGE: CONFUSION AND MADNESS

* The total psychical damage taken by a character is the sum of **Psychical Injuries** and **Psychical Stun**.
* When the total psychical damage is greater than or equal to the **Psychical Hit Points**, the character is **confused**: he no longer behaves coherently.
* When the Psychical Injuries taken by a character reach $\text{Psychical Hit Points} + \text{Presence}$, he becomes **mad**.
* Note that some situations can create Psychical Stun.
* When the total Psychical Stun points taken by a character is greater than or equal to the character's Psychical Hit Points, any further Psychical Stun damage incurred is transformed into a **Psychical Injury**.
* **State of Confusion:** The character has difficulty making coherent decisions outside reflex acts. If attacked, he will defend himself or flee. Otherwise, he will wait without doing anything. A roll intended to influence him (persuasion, intimidation, or charm) is necessary to make him act. The character will not perform actions against his nature. He will come out of his state of confusion by reducing the sum of $\text{Psychical Stun} + \text{Psychical Injuries}$ strictly lower than his Psychical Hit Points.
* **State of Madness:** When he goes crazy, the character is initially confused as above, but in addition, he develops a permanent mental illness to be determined with the referee.

---

### 5.4. PHYSICAL SHOCK

* $$\text{Physical Shock Threshold} = 10 + \text{Strength characteristic bonus}$$
* As soon as a character receives Physical Damage (after subtraction of his physical protection) **strictly superior** to the Physical Shock Threshold, he must make an **Endurance roll**. If the degree is lower than or equal to 0, the character **faints**.
* At the discretion of the referee, a Minor Non-Player Character may be considered **dead** if he or she is shocked due to physical damage.

---

### 5.5. PSYCHIC SHOCK

* $$\text{Psychical Shock Threshold} = 10 + \text{Presence characteristic bonus}$$
* As soon as a character receives Psychical Damage (after subtraction of his psychical protection) **strictly superior** to the Psychical Shock Threshold, he must make a **Presence roll**. If the degree is lower than or equal to 0, the character becomes **confused**.
* At the discretion of the referee, a Minor Non-Player Character can be considered **mad** if he suffers a Psychical Shock.

---

### 5.6. RECOVERY OF PHYSICAL AND PSYCHOLOGICAL INJURIES

* **Once a day after a sleep**, a character recovers:
  * The degree of success of an **Endurance roll** applied to Physical Injuries.
  * The degree of success of a **Presence roll** applied to Psychical Injuries.
  * Physical and Psychical Stun are fully cured.
* **After having suffered damage**, a character may, **after 10 minutes of rest**:
  * Recover $5 \times \text{degree}$ of an Endurance roll applied to the Physical damage (this simulates the fact that some apparent injuries were "only scratches").
  * Physical and Psychical Stun damage are completely cured after this period.
  * An unconscious character wakes up.
  * A confused person recovers his spirits.
* **The use of the First Aid skill** allows you to:
  * Treat diseases and poisoning: the degree of success of First Aid is added to the degree of success of the victim's Physical Resistance roll.
  * Wake up someone from a shock.
  * Stop the descent to death when a character is dying. If the skill fails, nothing happens. In case of critical failure (fumble), it goes wrong: there may be complications and the victim dies if a shock roll is missed.
* If the rest is **complete**, the Endurance roll has a **$+\text{I}$** degree of success bonus.
* In a **medical institution with complete rest**, the total damage recovered is **doubled**.
* **Madness** can be cured only when the psychic wounds have been canceled and after treatment at the discretion of the referee.

---

## 6. THE DANGERS OF THE ENVIRONMENT

### 6.1. POISONS AND DISEASES

Every poison or disease has a **virulence** rating.

* At inoculation and at each time interval, the poison attacks with its virulence and the character makes an opposition roll with his **Physical Resistance** skill.
* If the character makes a final degree $\ge \text{I}$ at inoculation, he is not affected.
* If the character makes a final degree $\ge \text{I}$ at the end of a period, he is no longer affected.
* Otherwise, he suffers the effect of the poison or disease at the end of the period.

### 6.2. DAMAGE CAUSED BY FALLS

* For objects weighing at least $1\text{kg}$, the basic damage is **$1d6^{*}$ per $3\text{m}$** (maximum $20d6^{*}$).
* Falling on soft ground can divide the damage; falling on hard and rugged ground can increase it.
* Very light, elastic, or low-density objects take less damage.

### 6.3. DAMAGE CAUSED BY CHOKING / DROWNING

* In case of suffocation or drowning, the victim loses **$1d6^{*}$ per round**.
* If prepared, one may hold his breath for **$2 \times \text{Endurance}$ rounds** automatically. After this time, one must make an Endurance roll for the following $2 \times \text{Endurance}$ rounds, and an Endurance roll with a cumulative **$-\text{I}$** for each subsequent $2 \times \text{Endurance}$ rounds.
* In case of no preparation, the $2 \times \text{Endurance}$ round automatic breath-holding is not available.
* The **Swimming** or **Diving** skill may be used instead of the Endurance roll.
* The damage incurred is **Physical Stun**.

### 6.4. DAMAGE CAUSED BY FLAMES

* **$1d6^{*}$ of Physical Injuries** per round of exposure to flames for a small fire.
* **$2d6^{*}$** for a big fire.

---

## 7. THE FIGHT

### 7.1. BATTLE SEQUENCE

Combat sequences are broken down into $3\text{s}$ rounds. The order of action in the round is as follows:

1. **Surprise:** If a character is surprised, he is not entitled to any defense, not even a Reflex Dodge. To avoid being surprised, a character has to make a Perception roll in opposition, or he must expect the danger.
2. **Determination of Initiative:** $1d6^{*} + \text{Initiative}$. The highest begins. The initiative is kept for all rounds of the fight. In case of a tie, the character with the highest Initiative characteristic acts first.
3. **Actions Resolution:** Actions are resolved in descending order of initiative.
   * It is not necessary, for a character whose turn of initiative it is not, to declare in advance what he will do.
   * A character may **delay his action** by waiting to see how the situation evolves, or by conditioning it to an event. The rank of initiative where the character acts determines his new rank of initiative for the following rounds.
   * An opposition roll under Initiative may be necessary to determine if one is able to stop an action that was expected. If a character wins the opposition, he may intervene just before his opponent's action, in the same rank of initiative. Otherwise, he intervenes just after in the same rank of initiative.
   * One can use a defensive action like dodging or parrying before his initiative. It is counted as a combat action for the round.
   * A character may pass a round without doing anything to be able to restart an initiative at **$+10$** the next round.
4. **Action Phase:** The following actions are possible:
   * Move within the limit of its maximum movement per round (given by the UT).
   * Move within the limit of half of its maximum movement per round, then make an offensive action (which ends the movement).
   * Do an action out of combat.
   * Break a fight.
   * **Charge:** Move at full speed and make an attack.
   * Make a **move-by attack** (see special situations below).

#### COMBAT OPTIONS

One must choose an option in combat:

* **Offensive Option:** Attack. Only one attack is possible. We attack at our initiative.
* **Defensive Option:** Parry or dodge. Several defensive actions are possible. One can defend oneself from an attack even outside of one's initiative provided that the attack is perceived.

Choosing a defensive option prohibits an attack option. The choice of an offensive option forbids any defense except the **Reflex Dodge**.

#### COMPLEMENTARY RULES

* A successful **parry** with a relative degree $\ge \text{II}$ allows an immediate **counterattack** against the parried opponent. A counterattack cannot be parried or dodged, though a Reflex Dodge is always possible.
* A successful **dodge** with a relative degree $\ge \text{II}$ allows an action with **$+\text{II}$** next round against the opponent who has been dodged and against whom this degree was obtained.
* The only always-available defense against a perceived attack is the **Reflex Dodge**.

---

### 7.2. OFFENSIVE ACTIONS

#### MAXIMUM WEAPON EFFECT DICE (DMAX)

This is the maximum number of $d6^{*}$ that is thrown to produce damage with a weapon.

#### CHARGE

* When a character charges without a mount, he attacks at the end of his movement and may add to his strength bonus **$2 \times$ the bonus corresponding to his speed on the UT**. The total damage bonus is limited by the **Maximum Impact Bonus** of the character charging.
* When a character charges, he is more vulnerable and has **$-\text{I}$** for any parry or dodge, including the Reflex Dodge.
* **Charge on a mount:** When a character charges on a mount, he may add to his strength bonus **$2 \times$ the bonus corresponding to the speed of his mount on the UT**. This damage bonus is limited by the Maximum Impact Bonus of the character. His mount may also use its body to inflict damage (if the rider so wishes, happening on the rider's initiative) but will suffer damage in return (see below).
* **Creature Charge:** A creature can charge using its body as a weapon. It is a natural weapons attack and the creature may add to its damage $2 \times$ its speed bonus (limited to its Maximum Impact Bonus). If successful, the attacking creature takes **half of the damage**.

---

### 7.3. DEFENSIVE ACTIONS

#### DODGE

* Dodge allows you to subtract its degree from the attacker's degree. If the attacker has a relative degree $\ge \text{I}$, he deals damage.
* If the attacker has a relative degree $\le -\text{II}$, he automatically loses the initiative against the one who dodged, and the defender gains **$+\text{II}$** in the next round.
* One can make a dodge roll against each attack. Attacks must be anticipated, in contact and at a distance.

#### PARRY

* A parry can be used to subtract its degree of success from the attacker's degree. If the attacker has a relative degree $\ge \text{I}$, he deals damage.
* If the attacker has a relative degree $\le -\text{II}$, the one who parried wins an immediate **counterattack**. This attack can be done with a different weapon than the one that parried. One can neither parry nor dodge this counterattack, though a Reflex Dodge remains possible.
* One can make a parry roll against each attack. Attacks must be anticipated.
* A hand-to-hand parry against an attack with a weapon is at **$-\text{I}$**. Attacks with natural weapons like claws or fangs are considered attacks with a weapon.
* Against large weapons parried with small weapons, the parry penalty is **$-\text{I}$** combined with the penalty for inferior strength (if any).
* Against creatures or characters whose Strength is at least **10 greater** than the one who parries, the parry penalty is **$-\text{II}$**.
* One may parry missiles if a suitable means of defense exists. There is a penalty of **$-\text{I}$** against rapid missiles.

#### REFLEX DODGE

* The value of the Reflex Dodge is:
  $$\text{Reflex Dodge} = 2 + \left\lfloor \frac{\text{Dodge}}{2} \right\rfloor$$
* For any attack against a character who has not actively defended himself (by dodging or parrying), he can make a Reflex Dodge roll that he subtracts from the degree of the attack. He can do a Reflex Dodge on an unseen attack if he is in combat.

#### USE OF A SHIELD

* To use a shield, use the **Shield** skill.
* **Against a close combat attack:** The shield brings **$+\text{I}$** to the parry on one attack with a small shield, and for all frontal attacks for medium and large shields.
* **Against a ranged attack:** A medium shield gives **$+\text{I}$** and a large shield gives **$+\text{II}$** to parry against attacks with visible missiles.
* A shield may also be used in 2-weapon combat as a second weapon.

---

### 7.4. SITUATIONS AND VARIOUS COMBAT ACTIONS

#### BREAK A FIGHT

When at the start of a round a character is in contact with an opponent, in order to get away from him, it is necessary to break the fight:

1. The character must take **dodge** as a defensive action. This action is performed normally.
2. He may then attempt to break the fight at his initiative:
   * He has to be able to move.
   * Against any opponent likely to attack, he must pass an opposition test with his **Speed against the Speed of the opponent**. If the test fails, the opponent is entitled to an immediate attack against which only a Reflex Dodge can be made.
   * He can then move at full speed.

#### MOVING NEAR AN ACTIVE OPPONENT

When a character moves at close combat range near an active opponent who has perceived him, the character has to make a **Speed vs. Speed** opposition to avoid an attack from this opponent.

#### MOVE-BY ATTACK

When a character moves near an opponent, he may attack him with a "move-by" attack. This attack is at **$-\text{I}$** and may be used with a base movement (half movement) or a charge (with full movement, but with **$-\text{I}$** to defense actions, including Reflex Dodge).

#### FIGHTING WITH TWO WEAPONS

* The character rolls for each weapon and chooses the roll he wants from the two attacks. The skill level of each weapon is limited by the level of the skill **"Close Combat 2 weapons"** for close combat attacks or **"Ranged Combat 2 weapons"** for ranged attacks.
* **Note:** The "non-primary hand" penalty does not apply in this case.
* Some martial arts skills (see the "Martial Arts" section below), such as boxing, automatically grant a level of "combat with 2 weapons" equal to the martial arts level.
* In the event of a counterattack following a parry, this two-weapon combat skill can be used for the counterattack.

#### GRAPPLING

To grapple, it is necessary to:

* Declare the intention before the attack roll.
* Hit the opponent (adding possible martial arts skills to grapple).

In case of success, the opponent is grappled and receives no damage. He can release himself immediately by succeeding in an opposition test **Strength vs. Strength**, for which he has a **$+\text{I}$** situation bonus.

* Each round, the grappler can generate an attack degree ($DA$) on Strength. The one who is grabbed can automatically try to free himself by trying to generate a defense degree $DD > DA$ with his Strength (this is not considered a combat action).
* The victim may also attack using his weapon while attempting to defeat the $DA$ degree of the grappler.
* The attacker can inflict combat damage with his bare hands or use a weapon, in which case he suffers a penalty equal to $DD$ on his attack.
* Each protagonist only has a Reflex Dodge as a defense against external attacks.
* A character can grapple to prevent his opponent from using a weapon (dealing no damage). The opponent cannot use the weapon (contact weapon or firearm), though he may attack with bare hands. A successful Strength vs. Strength opposition makes the opponent drop the weapon.
* Equivalent Strength coming from the use of martial arts can be used.

#### PASSING THROUGH AN OPPONENT

It is necessary to perform a **Strength vs. Strength** opposition to pass through an opponent. This is considered an offensive action.

#### CALLED SHOT

A called shot must be announced before the round and imposes a penalty on the attacker. The same type of called shot on the following table can only be chosen once in the same action round:

| Called Shot Effect | Modifier |
| :--- | :--- |
| Divide the armor of the opponent by two | $-\text{I}$ |
| Grapple a specific part of the opponent's body | $-\text{I}$ |
| Hit a specific part of the opponent's body | $-\text{I}$ |
| Divide the opponent's Physical Shock Threshold by two | $-\text{I}$ |

*(The modifiers are cumulative).*

#### INFLICTING STUN INSTEAD OF INJURY

* Blunt weapons can inflict their damage as Stun at the cost of a **$-\text{I}$** penalty.
* Non-blunt weapons can inflict their damage as Stun at the cost of a **$-\text{II}$** penalty.

#### EXPLOSIVES OR AREA OF EFFECT ATTACKS

* A single attack roll is made for the whole area.
* Within its radius of action, the explosive acts using the degree of the thrower / explosive setter.
* A character can dodge by opposing a roll of Dodge or Reflex Dodge (representing throwing oneself to the ground for cover).
* The character always suffers the base damage plus $\text{relative degree} \times 1d6^{*}$ (note: the relative degree can be negative, which reduces the suffered damage).
* Heavy machine gun fire spreads bullets in an area of effect of a $30^{\circ}$ angular sector. Each character in the area receives an attack based on the machine gun skill of the firer, resolved like explosives.

#### SHOOTING WITH AUTOMATIC WEAPONS

The required skill is **"Automatic Weapons"**. A number of shots may be fired in a round less than or equal to the Rate of Fire (ROF) of the weapon:

* The firer must focus on a single target or an area of $30^{\circ}$.
* The maximum number of targets affected is equal to the number of bullets fired in the first burst. Targets in the area are chosen.
* In a burst, there is a number of bullets equal to $1d6^{*} + 1$.
* The damage inflicted on a target is that corresponding to a single bullet, plus **$+1d6^{*}$ per burst** fired at that target (respecting the weapon's `DMAX`). If there are not enough bullets to finish a burst, the magazine is empty and there is no extra $+1d6^{*}$.
* Focusing on a single target gives **$+\text{I}$** on this target.

#### SEMIAUTOMATIC AND DOUBLE ACTION WEAPONS

This includes modern weapons with a rapid fire rate (not considered automatic weapons) and automatic weapons with a shooting mode that limits the number of bullets fired.

* You can shoot up to **3 bullets per round** on a single target.
* The damage inflicted on a target is that corresponding to a single bullet, plus **$+1d6^{*}$ for each bullet shot beyond 1** (respecting the weapon's `DMAX`).
* *Remark: The skill to use is Rifle for Machine Guns (long-barreled) and Pistol for Machine Pistols.*

#### SHOTGUNS AND FLAMETHROWERS

* The modifier is **$+\text{I}$** on the target.
* Anyone within $1\text{m}$ of the target can also be hit (with no $+\text{I}$ bonus); the attacker simply needs to succeed in the attack roll.

#### PREPARE A WEAPON

To prepare a weapon: if one succeeds in drawing it using the **Draw Weapon** skill, it is ready at normal initiative this turn; if not, it is ready at normal initiative the following turn.

#### DESTRUCTION OF AN OBJECT OR STRUCTURE

* Every object has at least $1$ Physical Hit Point, or a number of Physical Hit Points equal to its protection/structure rating if it has one.
* An object or structure taking Physical Injuries greater than or equal to its Hit Points is considered reduced to small fragments.
* A **Physical Shock** does not completely destroy the object, but is enough to make it non-functional. Shock is achieved when you inflict more than **$1/5$ of the object's Physical Hit Points** at once.
* A character destroying an object with bare hands/body takes damage equal to that inflicted, limited to the Maximum Impact Bonus of the object. A character can break an object without taking damage by spending a full round, though damage inflicted on the object is divided by 2.

#### ARMOR PIERCING AND RESILIENT ARMOR

Some weapons have an **Armor Piercing** rating (noted `AP`), which is compared against the **Resilient Armor** rating of the armor (noted `RA`, default $0$). Per point of higher `AP`, the armor value is **divided by 2**. Firearms generally have an `AP` of $1$.

---

### 7.5. MARTIAL ARTS

#### GENRES AND DOMAINS

* Starts at learning level **-15**.
* Martial arts are divided into three domains:
  1. **Blows (Strikes)**
  2. **Projections (Throws)**
  3. **Holds (Grappling)**
* Each domain is associated with a skill.
* The use of the Martial Arts skill allows the character, if desired, to modify their **equivalent Strength**. The equivalent Strength corresponds to: $\text{Learning Level in the Martial Arts domain} + 5$ on the UT.
* When attacking with martial arts, a character must decide the type of attack (blows / projections / holds) before rolling the dice.

#### STRIKES

Strike with a part of the body. The damage bonus is given by the equivalent Strength from the UT. Depending on the style of martial art considered, it can either:

* Grant a `DMAX` number of **3** (instead of 2 for a bare-handed attack), OR
* Grant an automatic use of a **two-weapon combat skill** for that type of attack (allowing the character to make two rolls and take the best).

#### PROJECTIONS

If successful, the opponent is projected a distance equal to one-quarter of the distance traveled during the previous round (or thrown at the feet of the one who projects).

* The weight limit is given by the equivalent Strength on the UT.
* The damage is $1d6^{*} + 1d6^{*}$ per $3\text{m}$ thrown. The degree of a successful roll of **Acrobatics** or **Martial Arts (Projection)** can be subtracted from the number of damage dice. The nature of the ground on which one falls can inflict additional damage.
* You can only project someone who is moving or attacking.

#### HOLDS

Can be used to grapple. The Strength used is the equivalent Strength from the UT. This extra Strength cannot be used to project someone.

#### DODGE WITH MARTIAL ARTS

The Martial Arts skill gives a **Dodge** skill at least equal to $n$, where $n$ is the **learning level** of the skill (not the total level).

#### PARRY WITH MARTIAL ARTS

No penalty of $-\text{I}$ to parry against an armed opponent.

#### INITIATIVE

The Martial Arts skill gives an **Initiative** characteristic at least equal to $n$, where $n$ is the **learning level** of the skill (not the total level).

#### EXAMPLES OF MARTIAL ARTS (20TH AND 21ST CENTURY)

If the referee desires, he can detail each martial art by giving learning level modifiers in the three domains:

| Martial Art | Strikes | Projections | Holds |
| :--- | :--- | :--- | :--- |
| **Karate, Taekwondo...** | $0$ (`3 DMAX` instead of `2` on bare hands) | — | — |
| **Boxing (English, Savate, Thai)** | $0$ (allows fighting as 2 weapons) | — | — |
| **Kung Fu** | $0$ (`3 DMAX` or 2 weapons; choice at creation) | — | — |
| **Aikido** | — | $-5$ | $0$ |
| **Wrestling, Sumo** | — | $-5$ | $0$ |
| **Judo, Jiu-Jitsu** | — | $0$ | $-5$ |
| **Krav Maga** | $0$ | $-5$ | $-5$ |

*Example: A character with Krav Maga at learning level 10 will strike with a learning level of $10$, and project or hold with a learning level of $10 - 5 = 5$.*

---

## 8. SOCIAL INTERACTIONS

Social interactions often occur in a scenario. Generally, they are not heavily codified because this is the area of choice for role-playing where dialogue should be used instead of rolling dice. SagaS proposes some simple rules that the referee may adapt:

### 8.1. INFLUENCE

To influence the behavior of others, the skills to use are:

* **Intimidation:** To scare; attempting to impress physically or mentally (requires arguments/leverage).
* **Persuasion:** Covers bluffing and in-depth discussion to convince others.
* **Charm:** Covers seduction and flattery.
* **Comedy / Acting:** To play a role and pretend to be what one is not in order to influence others.
* **Eloquence:** When influencing an audience overall (less effective than direct, personal influence).

As a general rule, resolve this as a **quick action in opposition**, resisted with a roll of **Mental Resistance**.

* The player embodying the character must roleplay the attempt appropriately; otherwise, they suffer a **$-\text{I}$** penalty (or gain **$+\text{I}$** if played remarkably).
* In case of failure, nothing happens, though one can try again with a higher situational bonus.
* If successful, the referee determines the outcome. In case of a **marginal victory**, the winner obtains a **$+\text{I}$** situational bonus to use when desired during the current scene against the influenced target (must be declared before rolling).

### 8.2. INTERROGATION

An interrogation resolves as a **long-term action**. The **Interrogation** skill is used to determine if the right questions are asked properly (the player plays a vital role by providing the actual questions). One can alternate with **Intimidation** sequences that also contribute to the cumulative degree of the interrogation.

### 8.3. DECEPTION

To lie, one can use **Persuasion**, **Charm**, or **Comedy/Bluff**.

* Resolved as a **quick action in opposition**: the opponent resists with a roll of **Psychology**.
* Roleplaying quality applies a $-\text{I}$ or $+\text{I}$ modifier.
* In case of failure, the opponent knows a lie was told, though not necessarily what the truth is.

### 8.4. SEDUCTION

This is a form of influence that can only be exercised as a **long-term action** using the **Charm** skill. Given the strong implications a sentimental relationship can have on a scenario, it is up to the referee to manage the outcome.

---

## 9. CHASES

A chase is set as a **long-term action** using rolls with **Speed** (or the speed of vehicles/mounts) modified by appropriate piloting/driving/riding skills.

Combat between vehicles is regulated in the same way as combat between characters: if a vehicle suffers a **Shock**, it can stop working or one of its functions can be rendered inoperative (determined by the referee).

---

## TABLES AND APPENDICES

## 10. UNIVERSAL TABLE

| Score | Effect Bonus | Portable Weight | Speed ($\text{km/h}$) | Speed ($\text{m/r}$) | Duration | Distance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | $-10$ | $1\text{ kg}$ | $0.25\text{ km/h}$ | $0.20\text{ m/r}$ | $1\text{s}$ | $0.2\text{ m}$ |
| **1** | $-8$ | $3\text{ kg}$ | $0.7\text{ km/h}$ | $0.60\text{ m/r}$ | $3\text{s}$ | $0.6\text{ m}$ |
| **2** | $-6$ | $6\text{ kg}$ | $1.5\text{ km/h}$ | $1.20\text{ m/r}$ | $6\text{s}$ | $1.2\text{ m}$ |
| **3** | $-4$ | $15\text{ kg}$ | $3.5\text{ km/h}$ | $3\text{ m/r}$ | $15\text{s}$ | $3\text{ m}$ |
| **4** | $-2$ | $30\text{ kg}$ | $7\text{ km/h}$ | $6\text{ m/r}$ | $30\text{s}$ | $6\text{ m}$ |
| **5** | $0$ | $60\text{ kg}$ | $14\text{ km/h}$ | $12\text{ m/r}$ | $1\text{ min}$ | $12\text{ m}$ |
| **6** | $+1$ | $70\text{ kg}$ | $17\text{ km/h}$ | $14\text{ m/r}$ | $1\text{ min } 10\text{s}$ | $14\text{ m}$ |
| **7** | $+1$ | $80\text{ kg}$ | $19\text{ km/h}$ | $16\text{ m/r}$ | $1\text{ min } 20\text{s}$ | $16\text{ m}$ |
| **8** | $+2$ | $90\text{ kg}$ | $22\text{ km/h}$ | $18\text{ m/r}$ | $1\text{ min } 30\text{s}$ | $18\text{ m}$ |
| **9** | $+2$ | $100\text{ kg}$ | $24\text{ km/h}$ | $20\text{ m/r}$ | $1\text{ min } 40\text{s}$ | $20\text{ m}$ |
| **10** | $+3$ | $110\text{ kg}$ | $26\text{ km/h}$ | $22\text{ m/r}$ | $1\text{ min } 50\text{s}$ | $22\text{ m}$ |
| **11** | $+3$ | $120\text{ kg}$ | $29\text{ km/h}$ | $24\text{ m/r}$ | $2\text{ min}$ | $24\text{ m}$ |
| **12** | $+4$ | $130\text{ kg}$ | $31\text{ km/h}$ | $26\text{ m/r}$ | $2\text{ min } 10\text{s}$ | $26\text{ m}$ |
| **13** | $+4$ | $145\text{ kg}$ | $35\text{ km/h}$ | $29\text{ m/r}$ | $2\text{ min } 25\text{s}$ | $29\text{ m}$ |
| **14** | $+5$ | $160\text{ kg}$ | $38\text{ km/h}$ | $32\text{ m/r}$ | $2\text{ min } 40\text{s}$ | $32\text{ m}$ |
| **15** | $+5$ | $180\text{ kg}$ | $43\text{ km/h}$ | $36\text{ m/r}$ | $3\text{ min}$ | $36\text{ m}$ |
| **16** | $+6$ | $200\text{ kg}$ | $48\text{ km/h}$ | $40\text{ m/r}$ | $3\text{ min } 20\text{s}$ | $40\text{ m}$ |
| **17** | $+6$ | $225\text{ kg}$ | $54\text{ km/h}$ | $45\text{ m/r}$ | $3\text{ min } 45\text{s}$ | $45\text{ m}$ |
| **18** | $+7$ | $250\text{ kg}$ | $60\text{ km/h}$ | $50\text{ m/r}$ | $4\text{ min } 10\text{s}$ | $50\text{ m}$ |
| **19** | $+7$ | $275\text{ kg}$ | $66\text{ km/h}$ | $55\text{ m/r}$ | $4\text{ min } 35\text{s}$ | $55\text{ m}$ |
| **20** | $+8$ | $300\text{ kg}$ | $72\text{ km/h}$ | $60\text{ m/r}$ | $5\text{ min}$ | $60\text{ m}$ |
| **21** | $+9$ | $400\text{ kg}$ | $96\text{ km/h}$ | $80\text{ m/r}$ | $6\text{ min } 40\text{s}$ | $80\text{ m}$ |
| **22** | $+12$ | $500\text{ kg}$ | $120\text{ km/h}$ | $100\text{ m/r}$ | $8\text{ min } 20\text{s}$ | $100\text{ m}$ |
| **23** | $+15$ | $750\text{ kg}$ | $180\text{ km/h}$ | $150\text{ m/r}$ | $12\text{ min } 30\text{s}$ | $150\text{ m}$ |
| **24** | $+18$ | $1\text{ ton}$ | $240\text{ km/h}$ | $200\text{ m/r}$ | $17\text{ min}$ | $200\text{ m}$ |
| **25** | $+21$ | $1.5\text{ tons}$ | $360\text{ km/h}$ | $300\text{ m/r}$ | $25\text{ min}$ | $300\text{ m}$ |
| **26** | $+24$ | $2.5\text{ tons}$ | $600\text{ km/h}$ | $500\text{ m/r}$ | $40\text{ min}$ | $500\text{ m}$ |
| **27** | $+27$ | $3.75\text{ tons}$ | $900\text{ km/h}$ | $750\text{ m/r}$ | $60\text{ min}$ | $750\text{ m}$ |
| **28** | $+30$ | $5\text{ tons}$ | $1,200\text{ km/h}$ | $1,000\text{ m/r}$ | $80\text{ min}$ | $1\text{ km}$ |
| **29** | $+35$ | $10\text{ tons}$ | $2,400\text{ km/h}$ | $2,000\text{ m/r}$ | $2\text{ hr } 30\text{ min}$ | $2\text{ km}$ |
| **30** | $+40$ | $20\text{ tons}$ | $4,800\text{ km/h}$ | $4,000\text{ m/r}$ | $5\text{ hr } 30\text{ min}$ | $4\text{ km}$ |
| **31** | $+45$ | $40\text{ tons}$ | $9,600\text{ km/h}$ | $8,000\text{ m/r}$ | $11\text{ hr}$ | $8\text{ km}$ |
| **32** | $+50$ | $75\text{ tons}$ | $18,000\text{ km/h}$ | $15,000\text{ m/r}$ | $21\text{ hr}$ | $15\text{ km}$ |
| **33** | $+55$ | $250\text{ tons}$ | $60,000\text{ km/h}$ | $50\text{ km/r}$ | $3\text{ days}$ | $50\text{ km}$ |
| **34** | $+60$ | $1,000\text{ tons}$ | $240,000\text{ km/h}$ | $200\text{ km/r}$ | $12\text{ days}$ | $200\text{ km}$ |
| **35** | $+65$ | $4,000\text{ tons}$ | $960,000\text{ km/h}$ | $800\text{ km/r}$ | $50\text{ days}$ | $800\text{ km}$ |
| **36** | $+70$ | $17,500\text{ tons}$ | $4,200,000\text{ km/h}$ | $3,500\text{ km/r}$ | $200\text{ days}$ | $3,500\text{ km}$ |
| **37** | $+75$ | $70,000\text{ tons}$ | $17,000,000\text{ km/h}$ | $14,000\text{ km/r}$ | $2\text{ yr } 80\text{ days}$ | $14,000\text{ km}$ |
| **38** | $+80$ | $0.315\text{ Mt}$ | $0.2\ C$ | $180,000\text{ km/r}$ | $10\text{ yr}$ | $63,000\text{ km}$ |
| **39** | $+85$ | $1.125\text{ Mt}$ | $0.75\ C$ | $660,000\text{ km/r}$ | $36\text{ yr}$ | $225,000\text{ km}$ |
| **40** | $+90$ | $4.5\text{ Mt}$ | $C$ | $900,000\text{ km/r}$ | $143\text{ yr}$ | $900,000\text{ km}$ |
| **$+1$** | $+5$ | $\times 4$ | $\times 4$ | $\times 4$ | $\times 4$ | $\times 4$ |

*Abbreviations: $C = \text{speed of light} = 300,000\text{ km/s}$, $\text{Mt} = \text{Megaton} = 1,000,000,000\text{ kg}$.*

---

## 11. TABLE OF DIFFICULTY LEVEL

| Difficulty Level | Degree Modifier |
| :--- | :--- |
| Obvious | $+\text{IV}$ |
| Very easy | $+\text{II}$ |
| Easy | $+\text{I}$ |
| Difficult | $-\text{I}$ |
| Very difficult | $-\text{II}$ |
| Extremely difficult | $-\text{III}$ |
| Almost impossible | $-\text{IV}$ |
| Theoretically impossible | $-\text{VIII}$ |

---

## 12. CUMULATIVE COMBAT MODIFIERS

### 12.1. CLOSE COMBAT

| Position / Situation | Degree Modifier |
| :--- | :--- |
| Attack an invisible opponent | Impossible if no clue on location; $-\text{I}$ otherwise |
| Defend against an invisible opponent | $-\text{I}$ (opponent gains back/surprise bonuses on 1st attack) |
| Opponent in the back | $-\text{I}$ |
| To be on the ground (prone) | $-\text{I}$ |
| Attack in the back | $+\text{I}$ |
| Attack by surprise | $+\text{I}$ |
| Called shot | $-\text{I}$ |
| Size of the weapon used: $2 \times$ human | $+\text{I}$ |
| Size of the weapon used: $4 \times$ human | $+\text{II}$ |
| Size of the weapon used: $8 \times$ human | $+\text{III}$, etc. |
| Using secondary hand | $-\text{I}$ |
| Parry with a shield in contact | $+\text{I}$ |
| Parry with medium / large shield at a distance | $+\text{I} / +\text{II}$ |
| Fight on mount | Weapon skill limited by Riding skill |
| Fight with 2 weapons | Weapon skill limited by Close Combat with 2 Weapons |
| Parry a weapon attack with bare hands | $-\text{I}$ |
| Parry a very strong creature attack (Strength $+10$ or more) | $-\text{II}$ |
| Parry an attack of a larger weapon | $-\text{I}$ |
| Parry a fast missile | $-\text{I}$ |
| Totally helpless opponent | $+\text{IV}$ |
| Strength less than required minimum | $-\text{I}$ |
| Parry or dodge (including reflex) while charging | $-\text{I}$ |

### 12.2. RANGED COMBAT

| Position / Situation | Degree Modifier |
| :--- | :--- |
| Invisible opponent | Impossible if no clue on location; $-\text{II}$ otherwise |
| Range: Short / Normal / Long / Extreme | $+\text{I} / 0 / -\text{I} / -\text{II}$ |
| Aim carefully \*\* | $+\text{I}$ |
| Called shot | $-\text{I}$ |
| Partially concealed target | $-\text{I} / -\text{II} / -\text{III}$ |
| Target size | Range modification \*\*\* |
| Use secondary hand | $-\text{I}$ |
| Shoot at a single target (burst/auto) | $+\text{I}$ |
| Shoot with a shotgun | $+\text{I}$ on target person |
| Fight with 2 ranged weapons | Weapon skill limited by Combat with 2 Ranged Weapons |
| Target in transverse motion | $-\lfloor (\text{Speed Effect Bonus on UT}) / 5 \rfloor$ |
| Strength less than required minimum | $-\text{I}$ |
| Point blank (distance $< 1\text{m}$) | $+\text{I}$ (cannot be cumulated with short range) |

*\* A normal projectile has a sufficiently low speed to be parried.*  
*\*\* Spend a round aiming at a still target without moving.*  
*\*\*\* Multiply the useful range of the weapon by the ratio: $\frac{\text{human size}}{\text{size of the target}}$.*

---

## 13. TECHNOLOGICAL LEVELS

| Technological Level | Examples of Technology |
| :--- | :--- |
| **TL0** | **The Stone Age:** bow, arrows, knives, teeth, fists... |
| **TL1** | **The Bronze Age:** swords, shields, spears... |
| **TL2** | **The Middle Ages (before gunpowder):** maces, crossbows... |
| **TL3** | **Late Middle Ages (discovery of gunpowder):** arquebuses, cannons... |
| **TL4** | **The Industrial Revolution:** trains, cars, electricity... |
| **TL5** | **The 20th Century:** planes, rockets, nuclear science, computers... |
| **TL6** | **The 21st Century:** networks, artificial intelligences, robots, nanotechnologies... |
| **TL7** | **Futuristic I:** climatic machines, sub-quantum energies... |
| **TL8** | **Futuristic II:** far space travel |

---

## 14. EQUIPMENT

### 14.1. TABLE OF CLOSE COMBAT WEAPONS

| Skill | Covered Weapons | Str Req. | Damage Bonus | DMAX | Size | TL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BARE HANDS** | Fist | — | $+0$ | 2 | 1 | 0 |
| **DAGGER** | Knife | 3 | $+2$ | 4 | 1 | 0 |
| | Dagger | 3 | $+2$ | 4 | 1 | 1 |
| | Short sword | 3 | $+4$ | 4 | 1 | 1 |
| **SWORD** | Long sword | 5 | $+6$ | 4 | 2 | 2 |
| | Broadsword (wide sword) | 5 | $+6$ | 4 | 2 | 2 |
| | Saber | 5 | $+6$ | 4 | 2 | 2 |
| | Scimitar | 5 | $+6$ | 4 | 2 | 2 |
| | Short sword | 3 | $+4$ | 4 | 1 | 1 |
| | Rapier | 3 | $+4$ | 4 | 2 | 3 |
| | Stick / Club | 4 | $+4$ | 3 | 2 | 0 |
| **RAPIER\*** | Rapier | 3 | $+4$ | 5 | 2 | 3 |
| **AXE / MACE** | Axe | 5 | $+8$ | 3 | 2 | 0 |
| | Mace | 5 | $+8$ | 3 | 2 | 0 |
| **FLAIL** | Flail | 5 | $+9$ | 3 | 2 | 2 |
| | Whip | 4 | $+2$ | 2 | 2 | 1 |
| **2-HANDED SWORD** | 2-handed sword | 8 | $+12$ | 3 | 3 | 2 |
| | 2-handed stick / staff | 5 | $+8$ | 4 | 3 | 2 |
| **2-HANDED AXE** | 2-handed axe | 8 | $+12$ | 3 | 3 | 2 |
| | 2-handed mace | 8 | $+12$ | 3 | 3 | 2 |
| **LONG WEAPONS** | Pike | 8 | $+12$ | 3 | 3 | 2 |
| | Halberd | 8 | $+12$ | 3 | 3 | 2 |
| | 2-handed spear | 8 | $+12$ | 3 | 3 | 0 |
| **SPEAR** | 1-handed spear | 5 | $+6$ | 4 | 2 | 0 |
| | 2-handed spear | 8 | $+12$ | 4 | 3 | 0 |
| | 1-handed stick | 4 | $+4$ | 3 | 2 | 0 |
| | 2-handed stick | 5 | $+8$ | 4 | 3 | 0 |
| **SHIELD** | Small shield | 4 | $+1$ | 2 | 1 | 1 |
| | Medium shield | 5 | $+2$ | 2 | 3 | 1 |
| | Large shield | 5 | $+3$ | 2 | 3 | 1 |

*Note: Below the required Strength, the wielder suffers $-\text{I}$ due to lack of maneuverability.*  
*\* The Rapier skill optimizes the use of this weapon (`DMAX` 5 instead of 4).*

### 14.2. RANGED WEAPONS TABLE

| Skill | Weapons | Damage Bonus | Str Req. | DMAX | Range (UT) | TL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CROSSBOW** | Light crossbow | $+6$ | 4 | 4 | 9 | 2 |
| | Heavy crossbow | $+12$ | 5 | 4 | 16 | 2 |
| **BOW** | Longbow | $+9$ | 5 | 4 | 9 | 1 |
| | Shortbow | $+6$ | 4 | 4 | 9 | 1 |
| **SLING** | Sling | $+4$ | 3 | 3 | 9 | 0 |
| **DAGGER** | Throwing dagger | $+2$ | 3 | 4 | 4 | 0 |
| **AXE** | Throwing axe | $+6$ | 5 | 3 | 4 | 0 |
| | Small throwing axe | $+3$ | 3 | 3 | 4 | 0 |
| **JAVELIN** | Javelin | $+6$ | 5 | 4 | 5 | 0 |
| **PISTOL** | Small caliber | $+3\ (\text{AP}=1)$ | 3 | 4 | 16 | 3 |
| | Medium caliber | $+6\ (\text{AP}=1)$ | 4 | 4 | 16 | 3 |
| | Large caliber | $+9\ (\text{AP}=1)$ | 5 | 4 | 16 | 4 |
| | Very large caliber | $+12\ (\text{AP}=1)$ | 8 | 4 | 16 | 4 |
| **RIFLE (GUN)** | Small caliber | $+6\ (\text{AP}=1)$ | 4 | 4 | 21 | 3 |
| | Medium caliber | $+9\ (\text{AP}=1)$ | 4 | 4 | 21 | 3 |
| | Large caliber | $+12\ (\text{AP}=1)$ | 5 | 4 | 21 | 4 |
| | Very large caliber (I) | $+15\ (\text{AP}=2)$ | 8 | 4 | 21 | 4 |
| | Very large caliber (II) | $+18\ (\text{AP}=2)$ | 10 | 4 | 21 | 4 |
| | Very large caliber (III) | $+21\ (\text{AP}=2)$ | 12 | 4 | 21 | 4 |
| **SHOTGUN\*** | Buckshot | $+12$ | 5 | 3 | 5 | 4 |
| | Sawed-off barrel | $+12$ | 5 | 3 | 4 | 4 |
| **AUTOMATIC WEAPONS** | Submachine gun (small) | $+6\ (\text{AP}=1)$ | 4 | 4 | 18 | 5 |
| | Submachine gun (medium) | $+9\ (\text{AP}=1)$ | 4 | 4 | 18 | 5 |
| | Assault rifle / Machine gun | $+12\ (\text{AP}=1)$ | 5 | 4 | 23 | 5 |
| **HEAVY WEAPONS** | Cannon / Gun | $+50$ (burst 16 on $10\text{m}$, $\text{AP}=3$) | — | 3 | 30 | 3 |
| | Mortar | $+18$ (burst 16 on $5\text{m}$, $\text{AP}=1$) | — | 3 | 27 | 5 |
| | Heavy machine gun | $+21$ in zone ($\text{AP}=2$) | — | 3 | 25 | 5 |
| | Bazooka | $+27\ (\text{AP}=3)$ | — | 3 | 25 | 4 |
| | Flamethrower | $+12$ and burns | — | 2 | 4 | 5 |
| **THROWN** | Defensive grenade | $+20/15/10$ (burst 16 on $5\text{m}/10\text{m}/15\text{m}$, $\text{AP}=1$) | — | 5 | 5 | 5 |
| | Offensive grenade | $+12/8/4$ (burst 16 on $3\text{m}/6\text{m}/9\text{m}$) | — | 5 | 5 | 5 |
| | Dynamite | $+24/18/12$ (burst 16 on $5\text{m}/10\text{m}/15\text{m}$) | — | 5 | 5 | 5 |

*Note: Below the required Strength, the shooter suffers $-\text{I}$ due to recoil.*  
*\* Shotguns: At long range, damage is divided by 2; at extreme range, damage is divided by 4.*  
*Range Modifiers on UT: Short range $= \text{Base Range} - 10$; Long range $= \text{Base Range} + 3$; Extreme range $= \text{Base Range} + 6$.*

### 14.3. EXAMPLES OF TL4 OR TL5 RANGED WEAPONS

#### AUTOMATIC PISTOLS (SEMI-AUTOMATIC)

| Weapon | Date & Origin | Range | Damage | DMAX | Shots | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **WALTHER PPK 7.65** | 1929 DE | 16 | $+6\ (\text{AP}=1)$ | 4 | 7 | 0.6 | 4 |
| **BERETTA 9mm** | 1976 IT | 16 | $+6\ (\text{AP}=1)$ | 4 | 15 | 1.2 | 4 |
| **LUGER P08 9mm** | 1904 DE | 16 | $+7\ (\text{AP}=1)$ | 4 | 9 / 32 | 1.0 | 4 |
| **MAUSER C96 .30** | 1896 DE | 16 | $+7\ (\text{AP}=1)$ | 4 | 10 | 1.4 | 4 |
| **COLT .45** | 1910 US | 16 | $+9\ (\text{AP}=1)$ | 4 | 7 | 1.4 | 5 |
| **AUTOMAG .44M** | 1971 US | 16 | $+12\ (\text{AP}=1)$ | 4 | 7 | 1.6 | 8 |
| **IMI EAGLE .44M** | 1982 US/IL | 16 | $+12\ (\text{AP}=1)$ | 4 | 9 | 2.0 | 8 |

#### REVOLVERS

| Weapon | Date & Origin | Range | Damage | DMAX | Shots | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DERRINGER 95 M** | 1866 US | 9 | $+3$ | 4 | 2 | 0.3 | 3 |
| **S&W .38 Special** | 1902 US | 16 | $+6\ (\text{AP}=1)$ | 4 | 6 | 1.0 | 4 |
| **COLT Python .357M** | 1955 US | 16 | $+10\ (\text{AP}=1)$ | 4 | 6 | 1.5 | 5 |
| **S&W M29 .44M** | 1956 US | 16 | $+12\ (\text{AP}=1)$ | 4 | 6 | 1.7 | 8 |

#### RIFLES

| Weapon | Date & Origin | Range | Damage | DMAX | Shots | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Winchester 44-40** | 1873 US | 21 | $+9\ (\text{AP}=1)$ | 5 | 11 | 3.5 | 4 |
| **Winchester 30-30** | 1894 US | 21 | $+12\ (\text{AP}=1)$ | 5 | 6 | 3.5 | 5 |
| **LEBEL 86** | 1886 FR | 21 | $+12\ (\text{AP}=1)$ | 5 | 8 | 4.5 | 5 |
| **SPRINGFIELD 30-06** | 1906 US | 21 | $+12\ (\text{AP}=1)$ | 5 | 5 | 4.0 | 5 |
| **M1 GARAND .30-06** | 1936 US | 21 | $+12\ (\text{AP}=1)$ | 5 | 8 | 5.0 | 5 |
| **ENFIELD .303** | 1895 GB | 21 | $+12\ (\text{AP}=1)$ | 5 | 5 | 4.1 | 5 |
| **MARLIN 444** | 1964 US | 21 | $+15\ (\text{AP}=2)$ | 5 | 5 | 3.2 | 8 |
| **RIFLE .375 H&H** | 1912 GB | 21 | $+15\ (\text{AP}=2)$ | 5 | 3 | 4.3 | 8 |
| **WINCHESTER .458M** | 1956 US | 21 | $+18\ (\text{AP}=2)$ | 5 | 3 | 4.5 | 10 |
| **WEATHERBY .460** | 1957 GB | 21 | $+18\ (\text{AP}=2)$ | 5 | 3 | 5.0 | 10 |
| **RIFLE .600 H&H** | 1903 GB | 21 | $+21\ (\text{AP}=2)$ | 5 | 3 | 7.0 | 12 |

#### ASSAULT RIFLES

| Weapon | Date & Origin | Range | Damage | DMAX | Shots / ROF | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AK-47 7.62** | 1949 RU | 21 | $+12\ (\text{AP}=1)$ | 5 | $30 / 2$ | 5.0 | 5 |
| **M16 .223 REM** | 1964 US | 21 | $+12\ (\text{AP}=1)$ | 5 | $30 / 3$ | 4.0 | 5 |
| **BARRETT M82 .50** | 1982 US | 23 | $+21\ (\text{AP}=2)$ | 5 | $10 / 2$ | 17.5 | TRIPOD |

#### SUBMACHINE GUNS

| Weapon | Date & Origin | Range | Damage | DMAX | Shots / ROF | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **MINI UZI 9mm** | 1948 IL | 16 | $+6\ (\text{AP}=1)$ | 4 | $32 / 3$ | 3.0 | 4 |
| **INGRAM M11 .38** | 1970 US | 16 | $+6\ (\text{AP}=1)$ | 4 | $32\text{ or }16 / 3$ | 2.0 | 4 |
| **THOMPSON .45** | 1922 US | 16 | $+9\ (\text{AP}=1)$ | 4 | $30 / 3$ | 6.0 | 5 |
| **INGRAM M10 9mm** | 1964 US | 16 | $+9\ (\text{AP}=1)$ | 4 | $32 / 3$ | 4.0 | 4 |
| **UZI 9mm** | 1952 IL | 16 | $+9\ (\text{AP}=1)$ | 4 | $32 / 3$ | 4.0 | 4 |

#### SHOTGUNS (HUNTING RIFLES)

| Weapon | Date & Origin | Range | Damage | DMAX | Shots | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Remington M70 12G** | 1950 US | 5 | $+12$ | 3 | 5 | 6.0 | 5 |
| **Ithaca 37 M&P** | 1937 US | 5 | $+12$ | 3 | 8 | 3.0 | 5 |

#### MACHINE GUNS

| Weapon | Date & Origin | Range | Damage | DMAX | Shots / ROF | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **VZ 52** | 1952 CZ | 21 | $+21\ (\text{AP}=2)$ | 5 | $100 / 3$ | 8.0 | TRIPOD |

#### HEAVY WEAPONS

| Weapon | Range | Damage | DMAX | Shots | Weight ($\text{kg}$) | Str Req. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BAZOOKA (RPG)** | 21 | $+27\ (\text{AP}=3)$ | 3 | 1 | 13.0 | 8 |
| **LIGHT MORTAR** | 27 | $+18\text{ EX }(\text{AP}=1)$ | 3 | 1 | 10.0 | TRIPOD |
| **FLAMETHROWER** | 3 | $+12\text{ BURNS}$ | 2 | 1 | 25.0 | 8 |

---

## 15. PROTECTIONS

| Category | Type | Effect / Protection | TL |
| :--- | :--- | :--- | :--- |
| **SHIELD** | Small shield | $+\text{I}$ parry against 1 contact attack; $+0$ parry against normal projectile | 1 |
| | Medium shield | $+\text{I}$ parry against any contact attack; $+\text{I}$ parry against normal projectile | 1 |
| | Large shield | $+\text{I}$ parry against any contact attack; $+\text{II}$ parry against normal projectile | 1 |
| **ARMOR** | Soft leather | $1$ | 1 |
| | Rigid leather | $2$ | 1 |
| | Chainmail | $4$ | 2 |
| | Plate armor | $6$ | 1 |
| | Full plate armor | $8$ | 2 |
| | Normal helmet | $+1$ | 1 |
| | Full helmet (only with plate or full plate) | $+2$ | 2 |
| | Lightweight Kevlar garment / small bulletproof vest | $3,\ \text{RA}=1$ ($6$ against bullets and impact) | 5 |
| | Heavy Kevlar garment / large bulletproof vest | $6,\ \text{RA}=1$ ($9$ against bullets and impact) | 5 |
| | Light futuristic armor | $12,\ \text{RA}=1$ | 6 |
| | Heavy futuristic armor | $25,\ \text{RA}=1$ | 7 |

---

## 16. PROTECTION TABLES AND RESISTANCE OF STRUCTURES

| Material | Armor | Hit Points ($1\text{m} \times 1\text{m} \times 0.1\text{m}$) | TL |
| :--- | :--- | :--- | :--- |
| **Softwood** | $3$ | $30$ | 0 |
| **Hardwood** | $6$ | $60$ | 0 |
| **Earth** | $3$ | $60$ | 0 |
| **Brick** | $6$ | $30$ | 3 |
| **Ice** | $9$ | $10$ | 0 |
| **Concrete** | $15$ | $60$ | 4 |
| **Rock** | $20$ | $80$ | 2 |
| **Soft metal** | $12$ | $120$ | 1 |
| **Hard metal** | $15,\ \text{RA}=1$ | $120$ | 2 |
| **Very hard metal** | $20,\ \text{RA}=2$ | $120$ | 5 |
| **Super metal** | $50,\ \text{RA}=3$ | $200$ | 7 |

---

## 17. BASIC SKILLS AND THEIR MINIMAL TECHNOLOGICAL LEVEL

In the following, SagaS skills are listed alongside the basic, minimal technology level (`TL`) where the skills are applicable, along with succinct descriptions.

The exact use of a skill depends on its level of technology. An excellent physicist of the seventeenth century (for example, 16 in Physics) will not know the atomic physics developed in the twentieth century. If projected into the twentieth century, it would take a period of learning to recover their level of 16.

### BASED ON STRENGTH

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Arm wrestling** | $0$ | 0 | Talent at the sport of arm wrestling. A confrontation usually requires a long-term action with a cumulative degree of success and a threshold to exceed. |
| **Weight lifting** | $0$ | 0 | Competence in the sport of weightlifting. Can be used to find out if a weight heavier than normal lifting capacity can be lifted for a very short time. |
| **Weight throwing** | $0$ | 0 | Skill in throwing heavy weights. Can be used to launch a heavy object as far as possible. |
| *Other* | Variable | Variable | Other skills requiring mainly Strength to be used. |

### BASED ON AGILITY

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Climb** | $0$ | 0 | The ability to climb. A failure indicates a lack of progression and a potential fall. A second roll may catch the first or confirm the fall. |
| **Acrobatics** | $-15$ | 0 | The ability to make acrobatic movements: dangerous jumps, tightrope walking. Can substitute for climbing. |
| **Stealth** | $0$ | 0 | Move silently and hide. |
| **Dodge** | $0$ | 0 | Avoid obstacles or threats that have been perceived. Used in the calculation of the Reflex Dodge level. |
| **Dance** | $0$ | 0 | The ability to dance harmoniously. |
| *Other* | Variable | Variable | Other skills requiring mainly Agility to be used. |

### BASED ON DEXTERITY

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Lock picking** | $-5$ | 0 | The ability to pick locks. Mechanics can be used as a neighboring skill. Does not work against electronic security systems. |
| **Sleight of hand** | $-15$ | 0 | The ability to perform small magic tricks (palming small objects...) and pick pockets. |
| **Driving car** | $-5$ | 4 | The ability to drive a car. |
| **Motorcycle driving** | $-5$ | 4 | The ability to ride a motorcycle. |
| **Airplane piloting** | $-10$ | 5 | The ability to fly an airplane. |
| **Helicopter piloting** | $-10$ | 5 | The ability to fly a helicopter. |
| **Driving aquatic machine** | $-5$ | 4 | The ability to drive a motorized watercraft. |
| **Driving heavy vehicle** | $-5$ | 4 | The ability to drive a heavy vehicle: big truck, construction equipment, or armored vehicle. |
| **Pilot spacecraft** | $-5$ | 7 | The ability to fly a spaceship. |
| **Battle Armor** | $-5$ | 6 | The ability to master combat armor with power amplification. |
| **Games of accuracy** | $-5$ | Variable | Skill in games of accuracy (billiards, pinball, video games...). |
| *Other* | Variable | Variable | Other skills requiring mainly Dexterity to be used. |

### BASED ON ENDURANCE

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Physical resistance** | $0$ | 0 | Ability to withstand fatigue or long-lasting damage. Used to fight against disease and poison and to determine fatigue levels after prolonged physical exertion. |
| *Other* | Variable | Variable | Other skills requiring mainly Endurance/stamina to be used. |

### BASED ON WIT

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **General culture** | $-10$ | 0 | General knowledge corresponding to the environment and period in which the character lives. |
| **Native language** | $0$ | 0 | The mother tongue, supposedly spoken and written (except in particular cases to handle with the referee). |
| **Investigation** | $0$ | 0 | The ability to conduct an investigation by searching places and analyzing clues. Does not substitute for player decisions to pursue a particular trail, but can serve as a guide. Further analysis requires technical or scientific skills. |
| **Computer science** | $-10$ | 5 | Allows you to use a computer, program, and hack. |
| **Security systems** | $-10$ | 5 | Knowledge of main security systems and how to disable them. Mechanical systems require Lock Picking. |
| **Explosives** | $-10$ | 3 | Knowledge of explosives, how to use them, and where they do the most damage. |
| **Electricity** | $-10$ | 4 | Ability to analyze and repair electrical equipment. |
| **Electronics** | $-10$ | 5 | Ability to analyze and repair electronic equipment. |
| **Mechanical** | $-10$ | 1 | Ability to analyze and repair mechanical equipment. |
| **Physics** | $-15$ | 3 | Knowledge and capacity to apply physical theories. Can be used to design new equipment. |
| **Chemistry** | $-15$ | 3 | Knowledge of chemistry and ability to apply it. Physics can be used as a neighboring skill. |
| **Astronomy** | $-15$ | 1 | Knowledge of astronomy and ability to apply it. Physics can be used as a neighboring skill. |
| **Zoology** | $-15$ | 1 | Knowledge about the animal kingdom and ability to apply it. |
| **Botany** | $-15$ | 1 | Knowledge about the plant kingdom and ability to apply it. |
| **Biology** | $-15$ | 4 | Knowledge of living organisms and ability to apply it. Zoology and Botany can be used as related skills. |
| **Geology** | $-15$ | 4 | Knowledge of rocks/earth sciences and how to apply it. |
| **Archeology** | $-15$ | 4 | Knowledge of lost civilizations. History can be used as a neighboring skill. |
| **History** | $-15$ | 3 | Knowledge of human history. |
| **Paleontology** | $-15$ | 4 | Knowledge of extinct animal and plant species. Zoology and Botany can be used as neighboring skills. |
| **Law** | $-15$ | 3 | Knowledge of the law. Can be used to solve bureaucratic problems. |
| **Medicine** | $-15$ | 2 | The ability to heal living beings. |
| **Psychiatry** | $-15$ | 5 | Ability to cure mental illness. |
| **Occultism** | $-15$ | 1 | Knowledge of the occult sciences. |
| *Handcrafts* | $-10$ | Variable | Craftsmanship skills: pottery, jewelry, forging... |
| *Other knowledge* | $-15$ | Variable | Various knowledge fields: foreign culture, role-playing, heavy metal bands of the 80s... |
| *Foreign languages* | $-15$ | Variable | Knowledge of foreign languages. |
| *Other sciences* | $-15$ | Variable | Knowledge of other scientific fields. |
| *Other techniques* | $-10$ | Variable | Knowledge of other technical fields. |
| *Mind games* | $-5$ | Variable | Knowledge of strategy/puzzle games like chess, Go... |
| *Other* | Variable | Variable | Other skills mainly requiring Wit to be used. |

### BASED ON WILL

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Mental Resistance** | $0$ | 0 | Ability to resist mental fatigue or mental influence. Used especially to resist torture. |
| *Other* | Variable | Variable | Other skills requiring mainly Willpower to be used. |

### BASED ON PRESENCE

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Persuasion** | $0$ | 0 | The ability to convince, rather in personal relationships than in a group setting. |
| **Intimidation** | $0$ | 0 | The ability to inspire fear. |
| **Interrogation** | $0$ | 0 | The ability to conduct an interrogation. |
| **Command** | $0$ | 0 | The ability to control a large group. |
| **Disguise** | $-10$ | 0 | The ability to physically pass for someone else. |
| **Bluff** | $0$ | 5 | The ability to lie. |
| **Charm** | $0$ | 4 | The ability to seduce others. |
| **Eloquence** | $0$ | 4 | The ability to speak well and influence a group. |
| *Other* | Variable | Variable | Other skills requiring mainly Presence to be used. |

### BASED ON INSTINCT

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Perception** | $0$ | 0 | Sensory acuity. |
| **Psychology** | $-5$ | 0 | The ability to grasp the motivations of an interlocutor. |
| **Pedagogy** | $0$ | 0 | The ability to teach an interlocutor. |
| **First aid** | $-10$ | 0 | Allows you to provide makeshift care while waiting for more substantial medical intervention. |
| **Animal Handling** | $-5$ | 0 | Allows you to train an animal. |
| **Tracking** | $-10$ | 0 | Allows you to follow outdoor tracks. |
| **Survival** | $-5$ | 0 | Helps survive in the wild by being able to orient and find food. |
| **Horse riding** | $-10$ | 0 | Allows mounting and riding a horse or equivalent creature. |
| **Painting** | $-15$ | 0 | The art of painting. |
| **Music** | $-15$ | 0 | The art of music. |
| **Writing** | $-15$ | 1 | The art of writing. |
| **Sculpture** | $-15$ | 0 | The art of sculpture. |
| **Dramatic Arts** | $-15$ | 0 | The art of theater. Can sometimes be used advantageously instead of Disguise or Bluff. |
| *Other Arts* | $-15$ | Variable | Other artistic skills. |
| *Other* | Variable | Variable | Other skills requiring mainly Instinct to be used. |

### BASED ON CLOSE COMBAT

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Brawling** | $0$ | 0 | Fighting with bare hands without special technique. |
| **Axe / Mace** | $0$ | 0 | Use of unbalanced weapons in contact combat. |
| **Dagger** | $0$ | 0 | Use of short-bladed weapons in contact combat. |
| **Sword** | $0$ | 1 | Use of long-bladed weapons in contact combat. Also covers the one-handed stick/club. |
| **2-handed sword** | $0$ | 1 | Use of heavy weapons with long blades in contact combat. Also covers the two-handed stick/staff. |
| **Axe / Mace with 2 hands** | $0$ | 0 | Use of heavy unbalanced weapons in contact combat. |
| **Flail** | $0$ | 1 | Use of flexible weapons in contact combat. Also covers the whip. |
| **Spear** | $0$ | 0 | Use of long-handled thrusting weapons in contact combat. Also covers one- and two-handed sticks. |
| **Long weapon** | $0$ | 2 | Use of polearms and long-handled thrusting weapons in contact combat. Also covers one- and two-handed sticks. |
| **Shield** | $0$ | 1 | Covers the use of small, medium, and large shields. |
| **Cavalry Spear** | $0$ | 2 | The use of the horse lance. |
| **Close Combat with 2 weapons** | $-10$ | 0 | Ability to simultaneously use two weapons in contact combat (make two attack rolls and keep the chosen one). |
| **Draw weapon (close)** | $-10$ | 0 | Ability to quickly draw a contact weapon. On success, it is ready at current initiative and you attack using $\min(\text{Attack Skill}, \text{Draw Skill})$. |
| **Martial Arts** | $-15$ | Variable | Different techniques of martial arts. |
| *Other* | Variable | Variable | Other skills requiring mainly Close Combat to be used. |

### BASED ON RANGED COMBAT

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Bow** | $-5$ | 0 | The ability to use a bow. |
| **Crossbow** | $0$ | 0 | The ability to use a crossbow. |
| **Dagger (thrown)** | $-5$ | 0 | The ability to throw a dagger. |
| **Axe (thrown)** | $-5$ | 1 | The ability to throw an axe. |
| **Sling** | $-5$ | 0 | The ability to use a sling. |
| **Throw** | $0$ | 0 | The ability to throw an object like a stone or grenade. |
| **Javelin** | $0$ | 0 | The ability to throw a javelin. |
| **Gun (Rifle)** | $0$ | 3 | The ability to use a long-barreled rifle. |
| **Pistol** | $0$ | 3 | The ability to use a short-barreled pistol. |
| **Automatic weapons** | $0$ | 4 | Ability to operate automatic weapons with a high ROF. Uses $\min(\text{Automatic Weapons}, \text{Gun/Pistol})$. |
| **Draw weapon (ranged)** | $-10$ | 0 | Ability to quickly draw a ranged weapon. On success, it is ready at current initiative and you attack using $\min(\text{Attack Skill}, \text{Draw Skill})$. |
| **Combat 2 ranged weapons** | $-10$ | 0 | Ability to simultaneously use two ranged weapons (make two rolls and choose one). If mixing melee and ranged, take $\min(\text{CC 2 Weapons}, \text{RC 2 Weapons})$. |
| **Heavy weapons** | $-10$ | 4 | Ability to use heavy weapons such as anti-tank, mortar, flamethrower, or cannon. |
| *Others* | Variable | Variable | Other skills primarily requiring Ranged Combat to be used. |

### BASED ON SPEED

| Name | Base | TL | Description |
| :--- | :--- | :--- | :--- |
| **Run** | $0$ | 0 | The ability to run fast. Used during chases or competitions. |
| **Jump** | $0$ | 0 | The ability to jump high and far. |
| **Swimming** | $-5$ | 0 | Allows keeping your head out of water, holding breath (apnea), and swimming faster. |
| **Skiing** | $-15$ | 3 | Allows skiing fast without falling. |
| **Tennis** | $-15$ | 3 | To play tennis well. |
| **Hang-glider** | $-10$ | 5 | Know how to use a hang glider. |
| **Sail** | $-10$ | 0 | Know how to maneuver a sailing boat. |
| **Skydiving** | $-5$ | 5 | Know how to parachute jump and land at the desired location. |
| **Diving** | $-5$ | 5 | Know how to use diving equipment (Swimming can be used as a neighboring skill). |
| *Other Sports* | Variable | Variable | Sports based on movement. |
| *Others* | Variable | Variable | Other skills requiring mainly Speed to be used. |

---

## 18. CALCULATION TABLE OF THE DEGREE

Formula: $\text{Degree} = \left\lfloor \frac{\text{Skill}}{\text{Dice Roll}} \right\rfloor$ (where $\text{Dice Roll} \le 2 \times \text{Skill}$; otherwise `0` / Failure).

| Skill \ Roll | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31+ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **2** | 1 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **3** | 1 | 1 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **4** | 2 | 1 | 1 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **5** | 2 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **6** | 3 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **7** | 3 | 2 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **8** | 4 | 2 | 2 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **9** | 4 | 3 | 2 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F | F | F |
| **10** | 5 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F | F | F |
| **11** | 5 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F | F | F |
| **12** | 6 | 4 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F | F | F |
| **13** | 6 | 4 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F | F | F |
| **14** | 7 | 4 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F | F | F |
| **15** | 7 | 5 | 3 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | F |
| **16** | 8 | 5 | 4 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **17** | 8 | 5 | 4 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **18** | 9 | 6 | 4 | 3 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **19** | 9 | 6 | 4 | 3 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **20** | 10 | 6 | 5 | 4 | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **21** | 10 | 7 | 5 | 4 | 3 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **22** | 11 | 7 | 5 | 4 | 3 | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **23** | 11 | 7 | 5 | 4 | 3 | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **24** | 12 | 8 | 6 | 4 | 4 | 3 | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **25** | 12 | 8 | 6 | 5 | 4 | 3 | 3 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |

*(Note: `F` indicates an automatic failure where the roll exceeds $2 \times \text{Skill}$).*

---

## LEGAL & OPEN GAME LICENSE

**DESIGNATION OF PRODUCT IDENTITY**  
The name SagaS and all artwork, logos, and layout are Product Identity.

**DESIGNATION OF OPEN GAME CONTENT**  
All text and tables are Open Game Content.

### OPEN GAME LICENSE Version 1.0a

The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.

1. **Definitions:** (a) "Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b) "Derivative Material" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute" means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d) "Open Game Content" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity" means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor; (g) "Use", "Used" or "Using" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content; (h) "You" or "Your" means the licensee in terms of this agreement.
2. **The License:** This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.
3. **Offer and Acceptance:** By Using the Open Game Content You indicate Your acceptance of the terms of this License.
4. **Grant and Consideration:** In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.
5. **Representation of Authority to Contribute:** If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.
6. **Notice of License Copyright:** You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.
7. **Use of Product Identity:** You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.
8. **Identification:** If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.
9. **Updating the License:** Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.
10. **Copy of this License:** You MUST include a copy of this License with every copy of the Open Game Content You Distribute.
11. **Use of Contributor Credits:** You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.
12. **Inability to Comply:** If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.
13. **Termination:** This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.
14. **Reformation:** If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.
15. **COPYRIGHT NOTICE:** Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc.
