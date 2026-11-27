# Extensions

Additions to the Open Character Format (OCF) repository: a pack for the _Rules of SagaS 0.995 LLL
(OGL)_, with its bestiary, and a D100 heroic fantasy pack from a System Resource Document under
Creative Commons Attribution 4.0, each with a sheet to create and play characters in the browser,
and a universal sheet for any pack. This repository
(<https://github.com/AlainPeres/OCF_Extensions>, the `origin` remote) keeps OCF's whole history,
with OCF's repository as the `upstream` remote. None of the additions is part of OCF; the rest of
the repo (spec, engine, other packs) is OCF's, unchanged.

Everything runs from the repo's TypeScript sources, so nothing needs a build: the scripts import
`packages/engine/src` and `packages/text/src` directly.

## Getting the repository

| System          | Procedure                                                  | What you get                                      | Tested                             |
| --------------- | ---------------------------------------------------------- | ------------------------------------------------- | ---------------------------------- |
| Linux           | [Linux](#linux)                                            | Everything: 17 packs, ORC included                | Not yet                            |
| macOS           | [macOS](#macos)                                            | Everything: 17 packs, ORC included                | Not yet                            |
| Windows         | [Windows](#windows)                                        | 15 packs on disk; ORC only in the universal tools | Yes, clone from GitHub, 2026-11-23 |
| Windows via WSL | [Windows, cloned through WSL](#windows-cloned-through-wsl) | As Windows; a full clone stays in WSL             | Yes, 2026-11-24                    |

Linux and macOS take the same commands. Windows needs a few more (no checkout at first,
`core.protectNTFS`, a sparse checkout, two links to remove) because of `boosts/con.yaml` ([The ORC
packs are left out](#the-orc-packs-are-left-out)).

### Requirements

- **Git**: see each system below.
- **Node 26** (`.nvmrc`; the root `package.json` asks for `>=26`). A version manager is the easy
  way: in the repo folder, `nvm install` (nvm, on Linux and macOS) or `fnm use --install-if-missing`
  (fnm, anywhere) read `.nvmrc`; with nvm-windows, `nvm install 26` then `nvm use 26`.
- **pnpm 10** (`packageManager: pnpm@10.20.0`): `npm install -g pnpm@10.20.0`. Node 25 and later
  no longer ship Corepack, so `corepack enable` isn't there with Node 26.

Check them: `git --version`, `node --version` (v26…), `pnpm --version` (10.20.0).

### Linux

Git from the distribution (`sudo apt install git` on Debian and Ubuntu, `sudo dnf install git` on
Fedora). Then, in the folder that will hold the clone:

```sh
git clone https://github.com/AlainPeres/OCF_Extensions.git
cd OCF_Extensions
git remote add upstream https://github.com/pixelqueue/opencharacter.git
pnpm install --frozen-lockfile
pnpm validate
```

What you should get:

- `pnpm install` ends with `Done in …`;
- `pnpm validate` ends with `Validated 17 pack(s) […] 51 character file(s) and 1 export(s): 0
  error(s), 0 warning(s)` (the 17 packs include `orc-2e` and `orc-sf-2e`; the 51 characters, OCF's
  examples, the 19 ORC ones and our 4 in `extensions/`);
- `git status` says `nothing to commit, working tree clean`.

No sparse checkout and no `core.protectNTFS`: every file is on disk, and the universal tools read
the ORC packs from it. `pnpm test` runs, but a few OCF tests that list the official packs fail
because of `packs/sagas/core` and `packs/d100/heroic` ([GitHub setup](#github-setup)).

### macOS

Git from the Xcode command-line tools (`xcode-select --install`) or Homebrew (`brew install git`),
Node from nvm, fnm or Homebrew (`brew install node@26`). Then the same commands and results as
[Linux](#linux).

The macOS file system ignores case by default (`a.yaml` and `A.yaml` would be one file), but no two
paths in the repository differ only by case, so nothing clashes. The tools open the browser with
`open`.

### Windows

Git for Windows (<https://git-scm.com/download/win>), with its defaults. Node from the installer at
<https://nodejs.org> or a version manager. PowerShell, in the folder that will hold the clone (here
`D:\Developpement\FichiersTypescript\OCF_Test`, for instance):

```powershell
git clone --no-checkout https://github.com/AlainPeres/OCF_Extensions.git
cd OCF_Extensions
git config core.protectNTFS false
git sparse-checkout set --no-cone '/*' '!packs/orc/' '!examples/characters/orc-*.yaml'
git checkout main
git remote add upstream https://github.com/pixelqueue/opencharacter.git
pnpm install --frozen-lockfile
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-2e
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-sf-2e
pnpm validate
```

Step by step:

1. **`git clone --no-checkout`** downloads the history (about 15 MB) and writes no file yet: a plain
   clone would stop on `error: invalid path 'packs/orc/2e/content/boosts/con.yaml'`.
2. **`git config core.protectNTFS false`**, in the clone's folder: lets git hold `con.yaml` in its
   index. It is never written to disk, but without this git refuses it even there
   ([`core.protectNTFS`](#coreprotectntfs) below).
3. **`git sparse-checkout set`** leaves out `packs/orc/` and the 19 `orc-*.yaml` example
   characters, whose pack is missing.
4. **`git checkout main`** writes the files: `Updating files: 100% (20545/20545), done.` (the
   count grows with the repository: 19,702 when tested), then `Already on 'main'`.
5. **`git remote add upstream`**: OCF's repository, to keep up with it
   ([After cloning](#after-cloning)).
6. **`pnpm install --frozen-lockfile`** ends with `Done in …`. Its warning `Ignored build scripts:
   esbuild` is pnpm 10's default and harmless.
7. **The two `rmdir`** remove the links pnpm makes to the missing ORC packs
   ([pnpm's links to the ORC packs](#pnpms-links-to-the-orc-packs)). They print nothing.
8. **`pnpm validate`** takes a few seconds, then ends with `Validated 15 pack(s) […] 32 character
   file(s) and 1 export(s): 0 error(s), 0 warning(s)`.

`git status` then says `nothing to commit, working tree clean`, with `You are in a sparse checkout
with 74% of tracked files present`.

In Git Bash instead of PowerShell, the commands are the same except the two `rmdir`:
`cmd //c rmdir 'packages\packs\node_modules\@opencharacter\orc-2e'` (and the same for
`orc-sf-2e`). To delete a clone later, use `cmd /c rmdir /s /q <folder>` from PowerShell: it
never follows a link, and it is the fastest. A clone's links all point inside it, which
`check-links.ts` confirms ([Deleting a folder that holds
junctions](#deleting-a-folder-that-holds-junctions)).

What works: the SagaS and D100 heroic sheets, the universal sheet (which even loads the ORC packs,
from git: [PF2 in the universal tools](#pf2-in-the-universal-tools)), `pnpm validate` on the 15
packs on disk, `pnpm typecheck`, and merges from `upstream`. What doesn't: `pnpm validate` and `pnpm
test` on the
ORC packs, editing them, and `pnpm lint` on OCF's files ([GitHub setup](#github-setup)).

#### `core.protectNTFS`

On Windows, git refuses paths NTFS would treat specially: reserved names (`CON`, `PRN`, `AUX`,
`NUL`, `COM1`…), 8.3 short names (`GIT~1` can stand for `.git`), names ending in a dot or a space,
alternate data streams (`file:stream`). It is a security check: a crafted repository could
otherwise write into `.git` (a hook git then runs). Without `--global`,
`git config core.protectNTFS false` writes to this clone's `.git/config` only; other repositories
keep the check, and a clone never inherits it, so every Windows clone sets it again. The risk is
limited to what this repository fetches, its own `origin` and OCF's `upstream`; don't use the
setting to clone unknown repositories. `git config core.protectNTFS true` undoes it, but then any
command that reads the whole tree (`checkout` of another commit, `merge`, `restore`) fails on
`con.yaml` and can leave the index broken.

- **Without it,** `git checkout main` stops on `error: invalid path '…/boosts/con.yaml'` and writes
  nothing (`pnpm install` then finds no `package.json`).

- **If it was turned back on and the index broke** (`git status` showing `pnpm-lock.yaml` and
  `pnpm-workspace.yaml` deleted although they are on disk): set it to `false` again, then rebuild
  the index from `HEAD` and reapply the sparse checkout. Neither touches the files on disk:

  ```sh
  git config core.protectNTFS false
  git read-tree HEAD
  git sparse-checkout reapply
  git status    # clean
  ```

- **To keep the check on,** a cone-mode sparse checkout with a sparse index works
  (`git sparse-checkout set --cone --sparse-index` with every folder but `packs/orc`): `packs/orc/`
  stays one folder entry in the index, so `con.yaml` never shows up. But cone mode can't leave out
  single files: the 19 `orc-*.yaml` example characters come back on disk, and `pnpm validate` then
  reports some 300 errors about them.

### Windows, cloned through WSL

WSL (a Linux inside Windows) serves only to clone here: in its own file system `con.yaml` is an
ordinary name, so a plain `git clone` works. The clone is then copied to a Windows folder, without
the ORC files, and used there as a [Windows](#windows) clone. Node and pnpm aren't needed in WSL,
only git and rsync. Tested on 2026-11-24 (Ubuntu 22.04).

The result is the same as the [Windows](#windows) procedure, which is quicker (no copy). This route
is for when a full clone, `packs/orc/` included, is wanted somewhere: in WSL, it can be kept.

#### 1. Install WSL and Ubuntu (once)

In an administrator PowerShell:

```powershell
wsl --install -d Ubuntu      # then restart Windows
wsl -l -v                    # lists the installed distributions, for instance Ubuntu-22.04
```

At the first start, Ubuntu asks for a Linux user name and password (for `sudo`; they have nothing
to do with the Windows account). Open it from the Start menu ("Ubuntu") or with `wsl` in PowerShell.

#### 2. Install git and rsync (once)

In the Ubuntu terminal:

```sh
sudo apt update && sudo apt install -y git rsync
git --version                # 2.34 or later (Ubuntu 22.04 has 2.34.1)
```

#### 3. Clone in WSL

In the Linux home folder (`~`), not under `/mnt/c` or `/mnt/d`: those are the Windows disks, where
Windows' naming rules apply (`con.yaml` again).

```sh
cd ~
git clone https://github.com/AlainPeres/OCF_Extensions.git
cd OCF_Extensions
git remote add upstream https://github.com/pixelqueue/opencharacter.git
ls packs/orc/2e/content/boosts    # cha.yaml con.yaml dex.yaml int.yaml str.yaml wis.yaml
git status                        # nothing to commit, working tree clean
```

The remotes are set here, so the copy has them too.

`~` is `/home/<user>`, inside the distribution's virtual disk, one `ext4.vhdx` file (under
`%LOCALAPPDATA%\Packages\CanonicalGroupLimited.Ubuntu…\LocalState\` by default, or wherever the
distribution was moved; `wsl --unregister` deletes it). Windows Explorer shows it at
`\\wsl.localhost\Ubuntu-22.04\home\<user>`, or under "Linux" in its left pane: reading files there
is fine, but don't open or edit the `.vhdx` itself.

#### 4. Copy to a Windows folder

Still in Ubuntu:

```sh
mkdir -p /mnt/d/Developpement/FichiersTypescript/OCF_Test
rsync -a --exclude '/packs/orc/' --exclude '/examples/characters/orc-*.yaml' \
  ~/OCF_Extensions/ /mnt/d/Developpement/FichiersTypescript/OCF_Test/OCF_Extensions/
echo $?                           # 0: everything copied
```

- `D:\Developpement\FichiersTypescript\OCF_Test` is
  `/mnt/d/Developpement/FichiersTypescript/OCF_Test`
  in WSL.
- The two `--exclude` leave out `packs/orc/` (it holds the two `con.yaml`, which Windows can't
  create) and the 19 ORC example characters (their pack is missing), as a Windows clone does. Their
  leading `/` ties each pattern to the clone's root.
- The source ends with `/`: rsync copies the folder's content into `OCF_Extensions/`.
- `.git` goes along whole: history, remotes, branches and stashes.
- The copy takes several minutes (about 20,000 files, crossing to the Windows disk) and prints
  nothing until it ends. Run again, it copies only what changed.
- Don't copy with Windows Explorer from `\\wsl.localhost\…`: it stops on `con.yaml`.

#### 5. Adopt the copy in Windows

In PowerShell:

```powershell
cd D:\Developpement\FichiersTypescript\OCF_Test\OCF_Extensions
git status --short | Measure-Object    # Count about 6,950: the ORC files, seen as deleted
git config core.protectNTFS false
git sparse-checkout set --no-cone '/*' '!packs/orc/' '!examples/characters/orc-*.yaml'
git status                             # nothing to commit, working tree clean, 74% present
pnpm install --frozen-lockfile
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-2e
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-sf-2e
pnpm validate                          # Validated 15 pack(s) […] 32 character file(s) […] 0 error(s)
```

- The copied `.git` comes from Linux, without a sparse checkout, so git first sees the left-out
  ORC files as deleted. The sparse checkout tells it they are left out on purpose.
- `core.protectNTFS false` isn't needed for that, but it is for every later command that reads the
  whole tree: without it, `git checkout` of another commit or `git merge upstream/main` stops on
  `con.yaml` and leaves `pnpm-lock.yaml` and `pnpm-workspace.yaml` deleted in the index
  ([`core.protectNTFS`](#coreprotectntfs) says how to repair that).
- `pnpm install` and the two `rmdir` are those of [Windows](#windows), steps 6 and 7.
- Line endings: the files keep Linux's LF. With Git for Windows' default (`core.autocrlf true`) git
  sees no change, and files it writes later get CRLF; both are fine.

The copy is then an ordinary Windows clone: everything in [Windows](#windows) applies.

#### 6. Clean up

- **The WSL clone,** once copied: keep it as a full reference, or remove it with
  `rm -rf ~/OCF_Extensions` in Ubuntu (Linux's `rm` doesn't follow links, so it touches nothing
  outside the folder). If kept, don't work in both: push from the Windows copy, and
  `git pull` in WSL before copying again.
- **To copy again from scratch,** delete the Windows copy first, with `cmd /c rmdir /s /q <folder>`
  from PowerShell ([Deleting a folder that holds
  junctions](#deleting-a-folder-that-holds-junctions)).
- **WSL itself,** if it served only for this: `wsl --unregister Ubuntu-22.04` deletes the
  distribution and **everything** in it.

### After cloning

Keep up with OCF:

```sh
git fetch upstream
git log --oneline HEAD..upstream/main    # what OCF has that this repository doesn't
git merge upstream/main
pnpm install --frozen-lockfile           # if the merge changed pnpm-lock.yaml
```

On Windows, remove the two ORC links again after the install. Then run the checks of [GitHub
setup](#github-setup) before pushing, and restart a running tool.

## OCF version

Merged with this commit of the OCF repository, `upstream/main` on 2026-11-26:

|                 |                                                                  |
| --------------- | ---------------------------------------------------------------- |
| Repository      | <https://github.com/pixelqueue/opencharacter> (branch `main`)    |
| Commit          | `5a560a87e9f0fc5b1db739ab1b7865de478de2ad`                       |
| Date            | 2026-11-24                                                       |
| Message         | Engine and text: add-on pack bugs (#281) (#283)                  |
| Release tag     | `@opencharacter/5e-srd-5.1@0.4.0` (the latest; no release since) |
| Spec and engine | 0.4.0                                                            |

History of the merges:

| Date       | OCF commit | What it brought                                                                                                      |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| 2026-11-02 | `c3a1de41` | The base: Version Packages (#209)                                                                                    |
| 2026-11-24 | `48b47969` | Dependency updates only: semver, intl-messageformat, astro, starlight, oxfmt 0.79, oxlint, vitest, vite              |
| 2026-11-26 | `5a560a87` | Engine and text: add-on pack bug fixes; Draw Steel: edges against a creature, next-turn durations; conformance cases |

A later OCF commit may change the spec or the engine and break the pack or the tools: merge as in
[After cloning](#after-cloning), then run the checks and the tools. To see which OCF commit a clone
holds: `git log -1 upstream/main`, or `git merge-base HEAD upstream/main`.

## What was added

| Path                                                        | What                                                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `packs/sagas/core/`                                         | The `sagas-core` pack (rules, 119 skills, 98 weapons, 14 armor, 15 species, 123 creatures)  |
| `scripts/extensions/sagas/sagas.ts` + `.html`               | SagaS sheet: Create and Play in one page                                                    |
| `scripts/extensions/sagas/sagas-create.html`                | The SagaS sheet's Create mode                                                               |
| `scripts/extensions/sagas/sagas-play.html`                  | The SagaS sheet's Play mode                                                                 |
| `scripts/extensions/sagas/sagas-lib.ts`                     | The SagaS pages' own routes: their data, a random character                                 |
| `scripts/extensions/universal-lib.ts`                       | Shared server of the universal, SagaS and D100 heroic tools                                 |
| `scripts/extensions/display-lib.ts`                         | What a pack's display hints hide, for the SagaS and universal tools                         |
| `scripts/extensions/universal.ts` + `.html`                 | Universal sheet for any pack: Create and Play                                               |
| `scripts/extensions/sagas/rules_of_sagas_v0_995_lll_ogl.md` | The rules the pack models (OGL)                                                             |
| `scripts/extensions/sagas/SagaS_Creatures.md`               | The bestiary the creatures come from (Open Game Content)                                    |
| `scripts/extensions/sagas/bestiary-import.mjs`              | The bestiary into the pack: creatures, species (`--check`: each creature)                   |
| `packs/d100/heroic/`                                        | The `d100-heroic` pack (rules, 33 skills, 93 weapons, 163 spells, 14 species, 72 creatures) |
| `scripts/extensions/d100/`                                  | The SRD chapters the pack models (Markdown), and its terms of use                           |
| `scripts/extensions/d100/d100.ts` + `.html`                 | D100 heroic sheet: Create and Play in one page                                              |
| `scripts/extensions/d100/d100-create.html`                  | The D100 heroic sheet's Create mode                                                         |
| `scripts/extensions/d100/d100-play.html`                    | The D100 heroic sheet's Play mode                                                           |
| `scripts/extensions/validate-pack.ts`                       | `pnpm validate`'s checks on one pack and its characters                                     |
| `scripts/extensions/check-links.ts`                         | Before deleting a folder: where its links point, without following                          |
| `examples/characters/extensions/`                           | SagaS and D100 heroic example characters, and those the sheets save                         |
| `.vscode/launch.json`, `.vscode/settings.json`              | Run and debug the current TS file from VS Code                                              |

Our files stay apart from OCF's: scripts in `scripts/extensions/`, characters in
`examples/characters/extensions/`. `pnpm validate` reads `examples/characters/` with its
sub-folders, so it still checks them.

## Running the tools

Each tool is a TypeScript file run with `tsx` and the repo's source condition, from the repo root:

```sh
node --import tsx --conditions @opencharacter/source scripts/extensions/<tool>.ts [options]
```

The SagaS tools are in `scripts/extensions/sagas/`: `scripts/extensions/sagas/<tool>.ts`; the
D100 heroic tools in `scripts/extensions/d100/`.

In VS Code, open the file and press F5 (launch configuration "Exécuter le fichier TS courant
(tsx)") or the Code Runner ▶ button. Run the `.ts` file, not the `.html`: the script starts a local
server (127.0.0.1 only) and opens the page in the browser. `--port N` changes the port and
`--no-open` doesn't open the browser. Ctrl+C stops the server.

| Tool           | Port | Options               |
| -------------- | ---- | --------------------- |
| `sagas.ts`     | 5180 | `--port`, `--no-open` |
| `d100.ts`      | 5181 | `--port`, `--no-open` |
| `universal.ts` | 5176 | `--port`, `--no-open` |

Characters are saved to `examples/characters/extensions/` (an existing file is never overwritten
without asking). The SagaS and D100 heroic sheets list the characters of `examples/characters/` that
use their pack. The universal sheet lists OCF's example characters (`examples/characters/`) and ours
(`extensions/…`); a loaded character is saved back where it was, and a new one, or one saved under
another name, goes to `extensions/`.

## The SagaS pack (`packs/sagas/core`)

Pack ID `sagas-core`, version 0.1.0, spec 0.4.0, licensed under OGL 1.0a (license text and
section 15 in `pack.yaml`, the bestiary's line included). Mechanics live in `rules/` and
`content/`, all English text in `i18n/en.yaml`, but the creatures' and the species' in
`i18n/en/creatures.yaml` and `i18n/en/species.yaml`.
`pnpm validate` passes with no error or warning.

### Rules (`rules/`)

- **`stats.yaml`**: the eight main characteristics (base 5), the secondary ones (Close Combat,
  Ranged Combat, Speed, Initiative) with their creation bonuses, the species' base Speed
  (`species.speed`, 6 for a human: Speed = base Speed + (END + AGI) / 4 + creation bonus),
  characteristic bonuses from the Universal Table, shock thresholds, physical and psychical hit
  points, injuries and stun, states (unconscious, dead, confused, mad), protection and impact
  bonus, simultaneous studies, Reflex Dodge, and the creation points: budget (150/250/350 and the
  social class), the cost of the characteristics (3/6/12/24/48 a point, from the species'
  baseline: 5 plus its modifier), of the secondary ones (three times as much) and of the skills.
- **`identity.yaml`**: free-text fields: name, species (default Human; emptied when a species or a
  creature copy says what the character is), profession, description, background, possessions.
- **`skills.yaml`**: the skill content type. Each copy has a learning level, an initial level and a
  specialty. Its total is the characteristic plus the learning level, and its grade runs from
  incompetent to master. Every character knows every skill at its initial level at least (an
  unlearned skill can still be rolled), so each skill that isn't generic is a **standard copy**
  (`standardCopies`): on every sheet, with its total and its roll, saved in the character file
  only once raised, under a fixed ID, the qualified ID with hyphens (`sagas-core-skills-dodge`).
  Generic and "Other" skills have one copy per specialty, added with `learn-specialty`. The list
  of standard copies is fixed when the pack loads, so it can't follow the universe's
  technological level: skills above it are on the sheet too, at their initial level, and the
  actions don't raise them. Constraints:
  - learning never below the initial level;
  - below 0, learning moves in steps of 5: −15 → −10 → −5 → 0, 1 point each;
  - a generic skill needs a specialty;
  - only a generic skill may be taken more than once (once per specialty);
  - the initial level is the skill's own, or −15, −10, −5 or 0 for an "Other" skill.
- **`checks.yaml`**: the 2d6\* roll under a score (`degree-roll`), with the degree, natural 2 and
  12, automatic failure, difficulty and situation degree modifiers, and situational choices
  (attack in the back, aim…). `characteristic-check`, `skill-check` and `opposed-check` use it.
  `damage` rolls the degree's dice, capped at the weapon's DMAX. `take-damage` subtracts the
  protection less the armor piercing (or none for an attack that ignores armor), then deals stun
  or injuries and rolls shock. Recovery (section 5.6): `rest-short` (10 minutes after damage: stun
  cured, 5 physical injuries healed per degree of an Endurance roll) and `rest-day` (once a day
  after a sleep: stun cured, the degree of an Endurance roll in physical injuries, +I with
  complete rest, and of a Presence roll in psychical ones; doubled in a medical institution). A
  failed shock roll faints (`state.fainted`, physical) or confuses (`state.shaken`, psychical);
  the rests clear both. A character at its hit points is dying (`state.dying`): `bleed` loses 1
  injury every 4 rounds. First aid is rolled by the helper on their own sheet (a skill check), and
  the patient's player reports it with `first-aid-received`: woken, stabilized
  (`state.stabilized`, ended by new physical damage), or a fumble (an Endurance shock roll;
  failed, the injuries go to the death threshold). `resist-poison`: Physical Resistance against
  the virulence, plus first aid's degree as reported; a final degree of I resists. No sheet acts
  on another: what one character does to another goes through the players.
- **`gear.yaml`**: weapons (kind, skill, damage bonus, required Strength, DMAX, range on the
  Universal Table, armor piercing (AP), technological level; for the examples of 14.3, shots,
  rate of fire, weight, tripod) with their damage action: extra dice for bursts and bullets, a
  charge's speed bonus; armor and shields: protection, bullet protection, resilient armor (RA)
  and shield parry bonuses count while equipped. `take-damage` halves the protection for each
  point of AP above the RA (7.4), using the bullet protection against bullets or impact.
- **`creation.yaml`**: the creation starts and their actions (below).
- **`advancement.yaml`**: the evolution of the characters
  ([below](#advancement-rulesadvancementyaml)).
- **`display.yaml`**: display hints (never part of the calculations). Field groups, for the sheets
  that follow them (the universal sheet in Play): identity, characteristics, secondary
  characteristics, bonuses, shock thresholds and protection, health, combat, martial arts (with a
  style), a long-term action
  (while one is on), progression, creation points (while creating). Action groups, by their tags:
  checks, combat, health and rest, dangers, the long-term action, progression (with learning a
  generic skill), creation (while creating; the others then hidden). Content groups keep to the
  universe's technological level: skills of that level (and any raised above it), weapons and
  armor of that level; what lies above goes to hidden groups (`showWhen: 'false'`), so an app
  doesn't show it. A carried weapon above the level still shows: a group holding a copy that
  isn't standard always does.
- **`combat.yaml`**: the fight (7): `roll-initiative` (1d6* + Initiative, kept in
  `combat.initiative`, +10 after a round passed), `reflex-dodge`, shield parry bonuses, the
  Speed bonus of a charge, and the martial arts (7.5): a style (`martial.style`) giving each domain
  (strikes, projections, holds) its learning level and equivalent Strength, a strike's damage
  (`martial-strike-damage`: DMAX 2 or 3, the equivalent Strength's bonus), a projection's
  (`projection-damage`), and Dodge and Initiative at least the martial arts learning level. The
  combat modifiers of section 12 are situations (range, concealment, invisible opponent, parry
  modifiers, shield, stun instead of injury, move-by attack, shotgun). Parry and dodge are skill
  rolls; the degree is reported to the attacker.
- **`dangers.yaml`**: falls (1d6* per 3 m), holding one's breath (2 x Endurance rounds, then
  Endurance rolls at -I more each period), suffocation (1d6* stun a round), flames (1d6* or
  2d6*) and explosions (base + relative degree x 1d6*, with armor piercing), each taken with
  `take-damage`. The book doesn't say whether armor protects from falls, suffocation and flames:
  it doesn't here.
- **`long-term.yaml`**: long-term actions (4.3): `long-start` (degrees to reach, failure
  threshold), `long-step` (a roll less the opposition's, added to the total).
- **`checks.yaml`** also gives skill rolls help (4.4: the first helper adds half their total,
  the second a quarter, the third an eighth), a neighboring skill (4.5: half its total) and a
  skill used at the same time (4.6: the weaker total).
- **`species.yaml`**: the species of a player character ([below](#species-rulesspeciesyaml)).
- **`creatures.yaml`**: creature sheets, for the referee ([below](#creatures-rulescreaturesyaml)).
- **`tags.yaml`**: the tags `advancement`, `characteristic`, `check`, `combat`, `creation`,
  `damage`, `danger`, `health` and `secondary-bonus`.

### Content (`content/`)

- **Skills (119)**: the 108 of section 17, plus an "Other" skill per characteristic (Other
  (Strength) … Other (Speed)) whose initial level is chosen when learned. Generic skills, to be
  specialized: Foreign languages, Handcrafts, Mind games, Games of accuracy, Other arts, Other
  knowledge, Other sciences, Other techniques, and the eleven "Other" skills.
- **Weapons (98)**: sections 14.1 and 14.2, each with its DMAX, plus its range and AP for the
  ranged ones; and the 36 TL4/TL5 examples of 14.3 (`weapons.example-…`: pistols, revolvers,
  rifles, assault rifles, submachine guns, shotguns, a machine gun, heavy weapons), TL4 before
  1900 and TL5 after.
- **Armor (14)**: section 15, shields included.
- **Species (15)**: human and the bestiary's 14 fantasy peoples
  ([below](#species-rulesspeciesyaml)).
- **Creatures (123)** and their attacks (89 natural weapons, `weapons.cr-…`): the bestiary's
  ([below](#creatures-rulescreaturesyaml)).

### Creation (`rules/creation.yaml`)

Three creation starts: the guided and the random one, as every OCF pack that starts a sheet has,
and the creature start ([Creatures](#creatures-rulescreaturesyaml)).

- **Guided** (`create-character`): it asks, in order:

  1. the species (human recommended);
  2. the power level (150, 250 or 350 points);
  3. the social class (privileged −10, average, less favored +10);
  4. the universe's technological level (TL0–TL8), which limits the skills and gear offered;
  5. the main characteristics, bought at their cost from the species' baseline;
  6. the secondary characteristic bonuses;
  7. the skills of the universe to raise, one step at a time while the points last;
  8. weapons and armor.

  It leaves the character being created (`creating: true`), so generic skills can be added next.

- **Random**: the same action, which keeps a human, draws the power level, spends three fifths
  of the points on the characteristics, draws 1d6 + 3 skills to study, raises each one step and
  spreads the rest of the points over them, and takes a weapon and an armor. It finishes the
  creation itself.

- Both record the technological level in `universe.techLevel`, for the advancement actions.

- **`learn-specialty`**: learns a generic skill with a specialty (a text parameter), its initial
  level for an "Other" skill, then its level step by step: with creation points while the
  character is being created, with experience points afterwards.

- **`finish-creation`**: ends a creation the guided start left open.

- **Constraint `creation-within-budget`**: while the character is being created, no more points
  may be spent than the budget allows; a creature isn't bought with points.

The creation actions (`create-character`, `choose-species`, `learn-specialty`,
`finish-creation`, `create-creature`) carry the `creation` tag, which the universal sheet's Create
mode uses to show them first when a pack has no action groups.

### Creatures (`rules/creatures.yaml`)

From the bestiary `scripts/extensions/sagas/SagaS_Creatures.md` (draft v0.3, 123 creatures: animals,
fantasy peoples, undead, monsters; Open Game Content for SagaS 0.995 LLL), by
`scripts/extensions/sagas/bestiary-import.mjs`. A creature sheet is a character made with the
**creature** start (`create-creature`): it asks the creature, then sets its eight characteristics,
its species' base Speed and its protection, raises its skills, adds its attacks (equipped) and
finishes the sheet at once.

- **The derived values are the pack's formulas**: Initiative, Close and Ranged Combat, Speed, hit
  points, shock thresholds, Max Impact and Reflex Dodge. The bestiary uses the same, and
  `bestiary-import.mjs --check` finds every creature's sheet as the bestiary gives it (its
  "immune" mental values aside: the pack has no immunity).
- **Skills** are learning levels over their characteristic, so that the total is the bestiary's;
  Flight, which the pack has no skill for, is "Other (Agility)" with the specialty Flight. Below
  0 a learning level moves in steps of 5, and a skill is never below its initial level, so 11
  totals differ from the bestiary's by 1 to 3: Swimming for the Domestic Dog, Wolf, Black and
  Brown Bears, Leopard, Tiger, Horse, Giant Rat and Rat Swarm, Jump for the Horse and the
  Velociraptor. The import lists them.
- **Attacks** are natural weapons (`natural`), one per name, damage bonus, DMAX and range, shared
  by the creatures that have them. Each copy holds its score (`score`): its attack is the
  `natural-attack` action, a degree roll at that score, with no skill; its damage is the usual
  `damage`. An attack without the Strength bonus (a shot, a breath, a draining touch) is
  "ranged", since the damage action adds the bonus to melee attacks only.
- **Text**: the creature's description (`i18n/en/creatures.yaml`) holds the rest of its stat
  block: type, size, weight and threat, every movement mode, its attacks with their notes
  (venom, grapple, reach…), its skills as written, its special abilities and variants. They are
  the referee's to apply.
- The bestiary is a draft: after changing it, run the import again, then `--check` and
  `validate-pack.ts sagas-core`:

  ```sh
  node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/bestiary-import.mjs
  node --import tsx --conditions @opencharacter/source scripts/extensions/sagas/bestiary-import.mjs --check
  ```

### Species (`rules/species.yaml`)

A player character's species: human, the rules' baseline (5 in every main characteristic, base
Speed 6), or one of the bestiary's 14 fantasy peoples with a "Racial template" (High, Wood and
Dark Elf, Mountain and Hill Dwarf, Orc, Goblin, Hobgoblin, Bugbear, Kobold, Halfling, Gnoll,
Lizardfolk, and the Centaur, a horse-man hybrid). `bestiary-import.mjs` makes them with the
creatures; peoples with the same template are one (the Orc Warchief is an Orc), and a trained
individual's own additions ("Warden training adds…") aren't the species'.

- A species is a copy on the character, one at most (constraint `one-species`). Its modifiers add
  to the main characteristics (effects), and its base Speed is the character's (`species.speed`).
- **The modifiers are free**: the creation points are the cost of each final value less that of
  the species' baseline (5 plus the modifier, `race.*`). A point above it costs what the final
  value says (3/6/12/24/48), as for a human: a dwarf's END 10 costs 12, as a human's from 8.
- **`choose-species`** (while creating) picks it, replacing any other; the guided start asks it
  first. Both empty the species field (free text): the sheets name the species from its copy.
- Its description holds the template as written, its size and base Speed, and the special
  abilities of the bestiary's stat block (night vision, keen senses, dwarven resilience…): the
  referee's to apply.
- Characters without a species copy are humans, as before.

### Advancement (`rules/advancement.yaml`)

The evolution of the characters (section 3.4), once the creation is finished. Experience points
go to a pool, `xp.current`; each purchase takes its price from it, at the creation costs for the
current value. The creation counters (`points.*`) don't take part: a budget recomputed from the
values would charge again for the secondary bonuses when a main characteristic rises (their raw
value rises with it), and a skill bought with a trainer at full price.

| Action                   | Does                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gain-experience`        | 5 points after a scenario, plus a bonus of 0 to 5 for exceptional role-playing (`xp.earned` totals them)                                                                                               |
| `improve-characteristic` | +1 to a main characteristic: 3, 6, 12, 24 or 48 points by the new value                                                                                                                                |
| `improve-secondary`      | +1 to a secondary one (to its bought bonus, `creation.cco`…): three times as much                                                                                                                      |
| `improve-skill`          | one step of a skill of the universe (any copy: a standard one, from its initial level, or a specialty's): 1 point a step of 5 below 0, then 1, 2, 4, 8 or 16 a level; half (rounded up) with a trainer |
| `set-tech-level`         | the universe's technological level; skills above it lose their points (not given back): a standard one goes back to its initial level, a generic one's specialties are removed                         |

The improvements are offered as soon as the creation is finished, and end with "not enough
experience points" when the pool can't pay. A generic or "Other" skill's new specialty is
learned with `learn-specialty`, which asks it (and its initial level). The trainer halves skills
only, as
the book says ("total skill level"). Not modelled: the referee's agreement on each choice, and the
limit on simultaneous studies (`study.limit`, shown as a reminder). Characters made before this
have `universe.techLevel` 2 by default: `set-tech-level` corrects it. Files written before the
standard copies named a skill's copy freely (`dodge`): the SagaS sheet renames it when it loads it
(`sagas-core-skills-dodge`); the two characters in `extensions/` are converted.

### Not yet modelled

Grappling and two-weapon rolls (rolls the players make with the skills as they are), a mount's
charge, weapon size modifiers, the number of bullets of a burst (1d6* + 1, rolled at the table),
social interactions and chases (oppositions and long-term actions), structures, the French
translation.

## The SagaS tools

**`sagas.ts`** is the SagaS sheet: one page with two modes, Create (`sagas-create.html`) and Play
(`sagas-play.html`), switched in its header. Each mode is its page, framed and kept loaded, so each
keeps what it shows. Changing modes passes the character on when it changed since it was last
passed on (a load, a roll, an edit), with the file it came from. Each page asks for its own data
(`/api/data?for=create|play`) and has a small hook (`window.ocfCharacter`) the sheet uses.

The sheet is the universal tools' server (`universal-lib.ts`) with pages of its own, like the
D100 heroic sheet. Unlike it, the SagaS pages keep the character themselves and send it with each
request: they use the server's stateless calls.

| Call                                                 | Does                                                                                           |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `GET /api/characters?pack=sagas-core`                | The characters of `examples/characters/` that use the pack                                     |
| `GET /api/file?file=`                                | A character file, its standard copies under their fixed IDs                                    |
| `POST /api/compute {character}`                      | The sheet: values without the pack's prefix, copies, issues, what the hints hide               |
| `POST /api/act {character, input}`                   | Runs one action, applies its changes to the character: the result, the character and its sheet |
| `POST /api/yaml-file {character}`                    | The character as YAML                                                                          |
| `POST /api/save-file {character, file?, overwrite?}` | Saves to `extensions/` (`<id>.yaml` by default); 409 if the file exists without `overwrite`    |

`serve(title, page, port, {pack, routes, pages})` takes the default pack, the other pages it serves
(a sheet's modes, `/create` and `/play`) and the routes only SagaS needs
(`sagas-lib.ts`): `/api/data` (characteristics, skills, weapons and armor as the pack's files
write them, their names, the situations, the technological levels, and for Create the bestiary's
creatures) and, for Create, `/api/random?points&tl&id`. Nothing of the rules is recoded there: the
costs, totals and actions
come from the engine.

- **Create** (`sagas-create.html`): point costs come from the pack's formulas; the page
  recodes no rule. Its sections, in order:

  1. identity: name, people ("People": the species), species (free text), **Base Speed**,
     profession, description. Base Speed is the species' base Speed, which Speed starts from
     (Speed = base Speed + (END + AGI) / 4 + creation bonus). A species sets it (4 for a dwarf,
     5 for a halfling, 6 for a human or an elf, 13 for a centaur) and the field shows it, locked;
     without one it is typed (6 by default, left out of the file);
  2. creation points (150/250/350 or any number), social class and the universe's technological
     level: what the pack's display hints hide isn't offered (skills, weapons and protections
     above it), and lowering it removes the skills learned above it (after a confirmation);
  3. characteristics and secondary bonuses;
  4. skills, grouped by characteristic: specialties for generic skills, an initial level for the
     "Other" ones;
  5. weapons and armor: DMAX for every weapon, range with its distance for ranged ones;
  6. possessions and background.

  A live summary of the points and rules issues runs alongside, with a random character button,
  load and save. "Creature…" makes a creature sheet of the bestiary (the pack's creature start),
  for the referee; natural weapons aren't offered as gear. In the identity, "People" picks the
  species (its copy, as `choose-species` does): each characteristic then shows its species
  modifier and its total, and Base Speed follows the species.

- **Play** (`sagas-play.html`): a play sheet, its sections by theme (character, checks, combat,
  health and dangers, long-term action, progression), the header linking to each:

  - identity, with Initiative, Speed and Reflex Dodge in the header;
  - characteristic and skill rolls with difficulty, modifier and situation. Skills are grouped by
    characteristic and filtered (all, points spent, total > 0), with one row per specialty;
  - weapons with attack, damage and parry, DMAX, AP and range (a creature's attack at its own
    score, without parry); extra dice (bursts, bullets) and charge for the damage; help,
    neighboring and simultaneous skills for skill rolls;
  - combat: initiative (kept for the fight), Reflex Dodge, Dodge, martial arts (style, strike and
    projection damage), the combat modifiers among the situations;
  - dangers: fall, holding one's breath and suffocation, flames, explosion; a long-term action
    (start, then a roll a step with a skill, against an opposition);
  - taking damage with armor piercing, bullets or impact, or ignoring armor; recovery: 10 minutes
    of rest, a day's rest (complete rest, medical institution), healing by hand; first aid
    received (woken, stabilized, fumble), bleeding while dying, resisting a poison; badges for
    fainted, dying, stabilized and confused by a shock;
  - progression, with the pack's advancement actions: experience points at the end of a
    scenario (plus a bonus), a main or secondary characteristic raised (its cost in each option,
    marked when the XP can't pay), a skill raised one step with ▲ in the skills table (with a
    trainer: half cost; from its initial level for one never raised), a generic one learned with
    its specialty, and the universe's technological level set (skills above it lose their
    points, after a confirmation). The skills table lists what the pack's display hints show
    (the skills of that level, plus any raised above it), with the engine's totals (every skill
    is a standard copy); so does the list of generic skills to learn;
  - possessions, background and a roll log, where each progression shows the XP left.

## The D100 heroic pack (`packs/d100/heroic`)

Pack ID `d100-heroic`, version 0.1.0, spec 0.4.0, licensed under `CC-BY-4.0`. It models a System
Resource Document (v1.2) whose chapters are in `scripts/extensions/d100/`, with its "How to Use the
SRD" (`how_to_use_the_openquest_srd.md`). That document sets the terms the pack follows:

- its **Attribution Notice**, verbatim, is the pack's `credit` (in `pack.yaml` and `LICENSE`);
- **no trademark outside the license text**: the game's name appears only in that notice, so the
  pack, its ID and its sheet carry a generic name (as OCF's `orc-2e` does for its game). Its
  former ID, which named the game, changed on 2026-11-27;
- **no logo**, and **the SRD's text only**: nothing from the full rulebook. A `not-affiliated`
  notice says the pack isn't the publisher's product.

The D100 heroic sheet ([below](#the-d100-heroic-tools)) and the universal sheet show it;
`examples/characters/extensions/d100-test.yaml` is a character made by its random start,
`d100-dragon.yaml` a creature. `pnpm validate` passes with no error or warning.

### Rules (`rules/`)

- **`stats.yaml`**:
  - the characteristics (8 by default);
  - the damage modifier, a dice value from STR + SIZ (-1D6 to +1D6, then a D6 more for every 15);
  - hit points ((SIZ + CON) / 2 rounded up), with the damage taken kept as wounds (`hp.wounds`);
  - magic points (POW) and those spent; movement (15 m, halved when overloaded);
  - the states: mortal wound (0 hit points or fewer), stabilised, surgery done, unconscious, no
    magic points left;
  - armour points: the best armour worn, since armours don't layer;
  - encumbrance (the items' ENC against STR + SIZ), fortune points, money in silver pieces and
    the optional Wealth rule;
  - the combat skills and resistances as fields, for the combat actions (a copy's computed total
    can't feed a field).
- **`identity.yaml`**: name, species, concept, Saga and Quest motives, background, appearance,
  age, other possessions.
- **`skills.yaml`**: the `skill` type. Its base comes from one or two characteristics, a
  multiplier and a bonus (`(char1 + char2) x times + plus`); its state holds the creation points
  (30 at most) and the growth (+5% steps). The total is at most 100%; expertise and "physical"
  (DEX or STR) are computed. Every skill without a descriptor is a standard copy.
- **`checks.yaml`**: the `test` bands (critical, success, fumble, failure on D100: doubles, 00
  read as 100), `skill-test` and `opposed-test`. A skill test runs from a skill (its copy), an
  attack from a weapon: an action content uses is listed only on its copies.
- **`combat.yaml`**:
  - the `weapon` type (kind, damage dice, hands, ENC, cost, range, rounds per shot, mechanism,
    thrown damage, shield size) and the `armour` type;
  - 29 combat situations (the close and ranged tables, cover, Great and All-Out Attacks, the
    shield actions…);
  - `attack`, `unarmed-attack`, `defend`, `damage`, `unarmed-damage`, `take-damage`.
- **`health.yaml`**:
  - `healing-received`: the patient records the healer's successful test, since one sheet never
    acts on another;
  - `magic-healing`: a Resilience test wakes a mortally wounded patient;
  - `natural-healing`: CON / 4 a day, mortal wounds only after surgery or magic;
  - `recover-magic`, and `spend-fortune` (avoiding death sets 1 hit point and unconscious).
- **`creation.yaml`**: the guided and random starts, the four pools as constraints,
  `learn-specialty`, `finish-creation`.
- **`advancement.yaml`**: growth points, `gain-growth`, `improve-skill`,
  `improve-characteristic`, `end-downtime`.
- **`magic.yaml`**:
  - the casting skills and Religion (Own) as fields; the paths: a Personal Magic specialist
    (Shaman, Wise), a Sorcery rank (Apprentice, Adept, Magus), a religion (its name) and its rank
    (lay member, Initiate, Priest, Holy Warrior); the magnitude known and its limit (POW, twice
    for a Wise), the spells a wand or staff focuses;
  - three spell types, `personal`, `sorcery` and `divine` (a type name is one lowercase word:
    one schema forbids hyphens, another capitals), with the same traits (magnitude, variable,
    resist, touch, instant, permanent, concentration, ranged, area, duration, common, descriptor);
  - `cast-personal` (calm: it just works; under duress a Personal Magic Casting test: the
    magnitude in magic points, 1 on a critical or a failure, the magnitude on a fumble; a variable
    spell may be cast lower), `cast-sorcery` (magnitude, duration and range manipulated up to the
    skill's step, a magic point a step; +20% with the focus; a critical costs only the base point;
    magic points from the stone or bound spirits apart), `cast-divine` (always cast, no magic
    points, spent until regained; a variable spell split) and `regain-divine` (a worshipper duty
    or a fortune point; the downtime regains them all);
  - learning: `learn-personal-spell` (1 growth point a magnitude, free within the six points at
    creation), `raise-personal-spell`, `learn-sorcery-spell` (3), `learn-divine-spell` (2 a
    magnitude, 2 at most below Priest), `raise-divine-spell`;
  - the paths: `become-specialist` (Shaman or Wise: POW 14, Personal Magic Casting 50%, five
    points; a Shaman gets the Shamanism skill), `sorcery-rank` (Apprentice 25% and two points:
    Personal and Divine Magic given up, their growth points back, Mystic Vision free; Adept 50%,
    POW 15, five spells, five points; Magus 90%, ten spells, ten points), `religion-rank` (20%,
    40% and two points, 75% and five, 50% with a combat skill at 75% and five) and
    `leave-religion`;
  - `spirit-combat`: Shamanism or Persistence against the spirit's result; the loser loses 1D6
    magic points less a Spirit Shield, plus 1D6 for every ten POW above 20 of the winner;
  - constraints: the magnitude limits, six points at creation, Divine Magic for an Initiate or
    higher, a sorcerer without Personal or Divine Magic, a Wise without Divine Magic, the focus
    limit;
  - the spells on the character: a spell cast with `onSelf`, or recorded with `spell-received`
    when another character cast it (one sheet never acts on another), is an applied entry at its
    magnitude, until `end-spell` (listed on it). The spells that change a number carry
    `scope: applied` effects on `spell.*` fields, which the actions read: Protection and Shield
    (armour points), Weapon Enhance, Fanaticism, Berserk, Speedart, Coordination (skill
    bonuses), Strength, Damage Boosting, Dull Weapon (damage), Fireblade (+1D10), True (Weapon)
    (doubled dice), Pierce (armour ignored, passed to the target's `take-damage`), Mobility,
    Haste, Slow, Hamper (movement), Vigour (hit points, at most doubled), Damage Resistance,
    Spirit Shield, Demoralise (combat skills halved) and Befuddle (INT skills -20%). A weapon
    spell counts for every attack of the character while it lasts;
  - the Wise's magical places (`create-magic-place`: a seclusion or sanctuary holds its magic
    points, `mp.locked`, until `end-magic-place`; a place of power is a store), `make-store`
    (Create Magic Point Store's item, reusable for a growth point), and `apotheosis`: Great
    Spirit, One with Reality, Ascended Immortal or Deity (POW then grows past its maximum); a
    Magus transcends on reaching the rank: damage goes to magic points, and physical healing no
    longer works.
- **`stores.yaml`**: the `store` type (the sorcerer's stone, holding up to POW, magic point
  stores, places of power, bound magic spirits), `draw-store` (magic points ready to cast with,
  `mp.borrowed`, which the casting actions spend first) and `charge-store` (refilled from the
  character's own). An Apprentice gets the wand; an Adept the stone and the staff (1D10, two
  hands).
- **`spot.yaml`** (Spot Rules):
  - fatigue (`fatigue.level`): `fatigue-test` (Resilience after draining activity, -20% for
    heavy activity while fatigued, -20% overloaded or deprived; failed, fatigued, then heavily
    fatigued; a fumble, unconscious 3D6 minutes) and `rest-fatigue` (20 - CON hours). Fatigued,
    every skill test is at -20% (-50% heavily), DEX and INT -3 (rules effects on the
    characteristics, so every skill based on them follows) and movement down a quarter;
  - exposure, starvation and thirst (`deprivation`: 1D6 a day each; no natural healing
    meanwhile); `travel-day` (the movement rate in kilometres, a Natural Lore test off road);
  - `fall` (1D6 a metre after the first, the Athletics test, a soft surface), `suffocate`
    (holding one's breath CON rounds, then Resilience at -10% a round; water, vacuum, smoke,
    poison gas), `burn` (1 to 3D6 a round; metal armour no help);
  - poisons and diseases: `resist-poison` and `resist-disease`, Resilience against the Potency,
    both rolled on the sheet (the potency is no character), with a healer's tenth of Healing;
    their damage rolled and taken; a disease is tested again after each delay until shaken off.
- **`creatures.yaml`**: creature sheets, for the Referee. The `creature` type holds a creature
  of the Creatures chapter: characteristic dice and averages (none for a spirit's STR, CON, DEX
  and SIZ: no body, so never a mortal wound), movement, flying and swimming, armour, Loot Factor,
  its skills at the book's values (local skill IDs and percentages in step, and skills with a
  descriptor: Lore (Undead)…), its attacks, its Personal Magic spells and a Troll's regeneration
  (`regenerate`, 1D6 a round). The `creature` start
  (`create-creature`) takes the averages or rolls, sets each skill's `fixed` state (a value in
  place of base, points and growth: every field that totals a skill reads it first), adds the
  attacks (ready) and spells, and finishes the sheet at once. A creature's characteristics may
  pass a human's limits, and its spells the creation's six points. Spirit Combat is a skill of
  its own (`magic.spiritCombat`), which `spirit-combat` uses first.
- **`species.yaml`**: non-human adventurers (optional, with the Referee's permission): the
  `species` type (characteristic dice, the averages in brackets, movement, flying and swimming,
  natural armour, natural weapons, a Troll's regeneration). Its effects set each
  characteristic's maximum (`charmax.*`: the highest roll plus three, 21 for a human), the
  movement and the natural armour (the best of it and worn armour: armours don't layer).
  `regenerate` heals a Troll 1D6 a round.
- **`social.yaml`** (social combat): `fast-talk` (opposed Influence, -20% for each failed
  argument, convinced 1D20 minutes or for good), `oratory-start`, `oratory` (1D10 of the
  audience a success, +/-10 on a critical or fumble, -20% after a failure) and `oratory-defence`
  (the defending orator's result), `intimidate` (a test, its one modifier) and
  `social-exchange` (a prolonged social combat's score); -20% beyond two metres unless a Master.
- **`gear.yaml`**, **`display.yaml`**, **`tags.yaml`**: general items (ENC, cost, what a
  container holds); the sheet's groups, fields and actions (tests, combat, health and rest,
  dangers and travel, social combat, magic, growth, creation); the tags.

### Content (`content/`)

- **Skills (33)**: the Characters chapter's 32 skill bases, and Spirit Combat, a creature's own
  (`rules/creatures.yaml`). Culture (Other), Language (Other), Lore and Religion (Other) are taken
  once per descriptor; Shamanism only by a Shaman.
- **Weapons (93)**: the tables' 43 (close weapons, shields, missile and thrown weapons, one item
  per name: "Club, Hatchet" is two items), the sorcerer's staff (`stores.yaml`), the species'
  5 natural weapons (`weapons.natural-…`: bite, claw, gore, head-butt, kick) and the creatures'
  44 attacks of their own (`weapons.cr-…`, below).
- **Armour (5)** and **gear (43)**: the general items, ammunition and food, and the sorcerer's
  wand.
- **Species (14)**: human and the 13 non-human adventurers (`rules/species.yaml`).
- **Spells (163)**: 70 of Personal Magic, 39 of Sorcery, 54 of Divine Magic (the Axe Maidens'
  Earth Scream included), their traits read from the chapters' italic lines by a script. A spell
  with a descriptor (Detect (Type), Energy Projection (Type), Call (Elemental)…) is taken once per
  descriptor. Only the names and traits are in the pack: the effects are the book's.
- **Creatures (72)**: the chapter's 42 (the four nymphs and five spirits each their own), the
  four sizes of elemental and the werewolf's two forms, and the 24 animals of the Animal
  Statistics Tables, read from the chapter by a script. Their attacks are the pack's weapons when
  named so (War Hammer, Light Crossbow…), else their own (`weapons.cr-…`: Bite (1D10)…), natural,
  with the damage less the damage modifier the book includes; a natural attack listed under
  Unarmed Combat attacks with it (the weapon's `skill`). Their special rules and the magic not
  modelled (Sorcery, Divine Magic, a dragon's or vampire's other version) are their description.
  An elemental's engulfing has no damage modifier; its CON is its SIZ, so its hit points are.

### Creation (`rules/creation.yaml`)

1. The species: human (the random start's), or one of 13 others. Then the characteristics: by
   points or by dice. A non-human by points starts from its averages with ten points to spread,
   up to its maximum; by dice it rolls its own. By points, every characteristic starts from 3 (INT
   and
   SIZ from 8) with 55 points to spread, 18 at most: the book's 8 each and 30 points, lowering
   allowed. By dice, 3D6 (SIZ and INT 2D6 + 6). The random start rolls.
2. Resources: starting cash (4D6 x 10 SP) or the optional Wealth skill.
3. The four pools, +5% a pick on a skill of the group, 30 at most a skill: resistances 50,
   combat 50, knowledge 50 (the guided start may keep some for skills with a descriptor) and
   practical 75 (Wealth only with its rule). An automatic run spreads them evenly; the random
   start draws each pick.
4. An arms package: leather armour, a ranged weapon and a dagger, with a two-handed close weapon,
   or a one-handed one and a small or medium shield. Then a backpack, rope, two weeks of food,
   flint and tinder and a waterskin.
5. Age (2D6 + 16) and fortune points (2).

Between the pools and the cash comes step 5: six points of Personal Magic, each spell at its
magnitude, then +1 at a time on variable ones; the random start draws them.

The guided start leaves the character being created. `learn-specialty` adds Lore (Alchemy),
Language (Goblinoid)… with what is left of the knowledge pool, `learn-personal-spell` a spell
(with a descriptor too) within the six points, and `finish-creation` ends it. The concept,
motives and background are text the player writes on the sheet.

### Choices made where the SRD is open

- Growth costs follow the expertise table (1, 2, 3, 5, then 10 to reach 100%), not the summary's
  flat +5% for 1 point.
- A Master's automatic critical earns no growth point, since there is no roll.
- Recovering magic points: a quarter of POW is rounded up.
- Damage that the damage modifier brings below 1 is 1.
- The thrown dagger, knife, hatchet and shortspear are the close weapons with their thrown
  damage; the thrown table's other cost isn't kept.
- Within a group of the ranged table (wind, movement, visibility) only one modifier counts: the
  player ticks one.
- Becoming an Apprentice costs two growth points, as the rank's own text says (the summary table
  says one).
- A converted Shaman or Wise gets back the growth points of their spells, not the five of the
  path.
- The religions' other requirements (their skills at 25% or 75%, a vacancy for a Priest), which
  spells a religion teaches and the Holy Warriors' special spells at any magnitude are the
  Referee's: the pack checks the Religion skill, the ranks and the magnitudes.
- A wand focuses two spells (an Apprentice's), a staff one per ten points of Sorcery Casting (at
  least two, from Adept).

### Not yet modelled

The effects of the spells that don't change a number of the sheet (Detect, Light, Illusion…:
the Referee's), those aimed at one skill or characteristic (Enhance (Skill), Hinder (Skill),
Enhance and Diminish (characteristic): the player adds them as a modifier), the sorcerer's
familiar and the priest's Allied Spirit (each its own character), the other effects of
Transcendence and Ascension (immortality, immunities), a poison's or disease's effects other
than damage (a characteristic penalty, sleep: the player notes them), the illumination rules
beyond the combat situations, ships and naval combat (a vessel isn't a character), animals'
and transport's costs. Breaking objects is an Athletics test. Creatures' special abilities
(breath, gaze, regeneration, possession…) are text: the Referee applies them.

## The D100 heroic tools

**`d100.ts`** is the D100 heroic sheet: one page with two modes, Create
(`d100-create.html`) and Play (`d100-play.html`), switched in its header. Each mode is
its page, framed and kept loaded, so each keeps what it shows. The character is the server's
session: changing modes gives the other page the session, which sets its own mode (`/api/mode`),
so the play actions show in Play only. Each page has a small hook (`window.ocfCharacter`) the
sheet uses.

The sheet is the universal tools' server (`universal-lib.ts`) with pages of its own: the pack's
actions, pauses and texts come from the engine, the pages lay them out for this pack. It lists the
characters of `examples/characters/` that use `d100-heroic` and saves to `extensions/`.

- **Create** (`d100-create.html`): a new character (or one being created), then the guided
  or random start.
  - Each pause of the guided start is asked in turn: the species, the method, the
    characteristic points (with each one's limit), cash or Wealth, the arms package and weapons,
    Personal Magic spells (a "Done" button ends the picks).
  - The four skill pools are each one table: every skill of the group, its total and the points
    already in it, an amount to add (+5% steps, 30 at most), what is left; "Spread evenly" fills it.
    The page then answers the step pick by pick, and ends it ("#done") when points may be kept.
  - Then the character's finishing: a skill with a descriptor (learn-specialty), a Personal Magic
    spell (learn-personal-spell), and Finish the creation; the character's text (name, concept,
    motives, age, background…).
  - Beside it, the sheet as it stands: species, characteristics, attributes, the pools spent
    against their size, the skills by group with their totals, spells and equipment.
- **Play** (`d100-play.html`): a play sheet in three columns.
  - The character: characteristics, hit and magic points, armour, damage modifier, movement,
    fortune, growth, encumbrance and money; the conditions as badges (mortal wound, unconscious,
    fatigue…); every input field under "Edit the sheet"; the equipment.
  - Skills by group (total, expertise, raised this downtime) with a Test button, and the test
    options shared by every test: difficulty, magic and other modifiers, assistance.
  - Combat: each weapon's Attack and Damage (aim, critical, Great Attack, charge, thrown),
    unarmed attack, Dodge and Parry (defences already made), taking damage (ignoring armour,
    Pierce), and the situations the pack offers, as checkboxes.
  - Magic: each spell's actions (cast, raise, regain), with the casting options (under duress, on
    oneself, magnitude; Sorcery's magnitude, duration, range and focus); the spells on the
    character, each with End; the stores, with Draw and Refill.
  - The rolls of each action, its result and what it changed; the other actions by theme
    (health, dangers and travel, social combat, magic, growth), each with its form; a pause (the
    skill to raise, the spell to learn) is answered on the page. The themes are the pack's
    action groups (`rules/display.yaml`), in its order: an action the page has no control of its
    own for appears under its group, or under "Other" if it has none.

For these pages, the universal server's view also gives each copy's item, the step of a pause
and the content applied to the character (`applied`, with its state): additions the universal
sheet doesn't use.

## The universal tools

They work for any pack under `packs/`, with nothing of a pack written in their code: the engine
says what to ask (`startAction` pauses, `describeAction` parameters) and the pack's i18n gives the
text (`@opencharacter/text`, `describeNeed`).

**`universal.ts`** is one page with two modes, switched in its header. A new character starts in
Create; a loaded one in Create while it is being created, else in Play. The mode is the server
session's (`/api/mode`): in Create, the pack's action groups are read as while creating, even once
the character is finished (after a random start, or one loaded), so a pack that hides its actions
of play while creating (SagaS, D100 heroic) keeps them out of Create. A pack that doesn't (Fate, 5e,
Draw Steel…) shows them in both modes. The page also loads, saves (a loaded character back where
it was, any other to `extensions/`) and shows the YAML.

- **Create**: pick a pack, a new or saved character, and one of the pack's creation starts.

  - **Pauses**: each pause becomes a form: a list of options with the recommendation, a budget
    allocation with the cost of each amount, or values to hand out. "Finish automatically" takes
    every recommendation.
  - **Actions**: with the pack's action groups, the actions of the groups shown, under each
    group's heading, the others folded away; without groups, the actions tagged `creation` come
    first and the others are folded away. One click opens the action's form, built from its
    parameters.
  - **Input fields** can be edited; beside them, the character as it stands: rules issues, fields
    by group, the copies as one table per content type with their total in its own column.

  The guided and random starts of the 15 packs on disk were tested, and the random starts of the
  two ORC packs (PF2, read from git on Windows: [PF2 in the universal
  tools](#pf2-in-the-universal-tools)).

- **Play**: load any example character and play it:

  - **Actions**: the rules' actions, under the pack's action groups (its display hints, in their
    order; the others under "Other"); in one row without groups. The items' actions stay on
    their copies. One click runs an action with its defaults; "…" opens its form.
  - **Sheet**: fields by display group and rules issues.
  - **Abilities** and **Items**: the character's copies in its two lists, `features` (skills,
    spells, class features…) and `inventory` (what it carries, the types marked `carried`), each
    with its state, its computed values and its actions. They include the standard copies not
    saved yet (every SagaS skill at its initial level). A copy is named with its text state (a
    specialty: "Foreign languages (German)"). The pack's display hints decide what shows: a copy
    only hidden groups list is left out, and the title counts it ("34 hidden by the pack": SagaS
    skills above the universe's technological level). "Not held" leaves out the items the hints
    would hide once held, found on one trial sheet that holds them all. Each list has its own
    filters, and a text filter:
    - Abilities, by mode: all; changed (a number in its state away from its initial value: for
      SagaS, points spent on a skill); total > 0 (the first number the sheet computes for it).
    - Items, by type and by mode: all; changed (for an item, a number in its state away from its
      initial value, such as uses or charges taken; SagaS weapons and armor have none, so the
      list stays empty); not held (the pack's items of the chosen type the character doesn't
      carry, greyed, with their fields; no actions of their own: a rules action adds them).
    - The three sections fold (click their title); the filters and folds are kept between
      sessions.
  - **Situation**: the situational choices apply to the next action.
  - **Log**: each roll's dice, faces, total and band, the outcome's data, and which fields changed.
    Changes meant for another character are listed but not applied.
  - **Offers**: the rules' follow-ups can be run or dismissed.
  - **Input fields** can be edited.

  Tested on the 32 example characters on disk, and the 19 ORC ones read from git on Windows.

There is no "Improve" mode: OCF has no common mark for a pack's advancement actions (SagaS,
D100 heroic and a few others tag them `advancement`, Fate `milestone`, others nothing), so they stay
in Play, under the group each pack gives them.

Limits of the universal tools:

- Handoff pauses (another character's turn in an action) aren't answered.
- Only on/off situational choices are offered.
- Pending choices outside an action are counted but not answered.
- A pack without fields display groups shows its fields in one table.

## VS Code setup

- `.vscode/launch.json`: "Exécuter le fichier TS courant (tsx)" runs the open file with
  `--import tsx --conditions @opencharacter/source`, in the integrated terminal.
- `.vscode/settings.json`: Code Runner runs TypeScript the same way, in the terminal, after saving.
  `yaml.schemaStore.enable: false` stops SchemaStore from validating every `dice.yaml` against an
  unrelated schema.

## GitHub setup

This repository (`origin`, <https://github.com/AlainPeres/OCF_Extensions>) keeps OCF's history,
with the OCF repository as `upstream`. It inherits OCF's workflows, and they don't fit a fork
that adds a pack:

- **CI is disabled** (Actions → CI → Disable workflow). OCF's tests treat every pack under
  `packs/` as an official one: `build.test.ts` and `validate.test.ts` expect an exact list of
  packs, `packages.test.ts` expects 19 published packages, and `licenses.test.ts` expects the
  `@opencharacter/packs` bundle's LICENSE to name every pack. With `packs/sagas/core` and
  `packs/d100/heroic` they fail.
  Adapting them would mean changing OCF's files and conflicts on every merge from `upstream`.
- **Release is disabled** too. On every push to `main` it would try to publish to npm, under the
  `@opencharacter` scope, every package not yet there, `@opencharacter/sagas-core` and
  `@opencharacter/d100-heroic` included.
- **Website** (`pages.yml`) runs only by hand; it stays as is.
- **Dependabot is off**: `.github/dependabot.yml` is removed and its settings are off (Settings →
  Code security). Dependency updates come with the merges from `upstream`.

Disabling a workflow changes no file, so merges from `upstream` aren't affected. Re-enable one
from the same menu.

Without CI, check locally before pushing:

```sh
npx oxlint --deny-warnings
npx oxfmt --check packs/sagas packs/d100 scripts/extensions README_EXTENSIONS.md
pnpm typecheck
pnpm validate
```

While working on one pack, `scripts/extensions/validate-pack.ts` runs the same checks on it
alone, in a few seconds instead of half a minute: the pack (its schemas, references, formulas,
texts and engine load; its dependencies are loaded with it, not checked) and the example
characters that use it. `pnpm validate` still checks the whole repository before a commit.

```sh
node --import tsx --conditions @opencharacter/source scripts/extensions/validate-pack.ts d100-heroic
node --import tsx --conditions @opencharacter/source scripts/extensions/validate-pack.ts packs/sagas/core
```

It takes pack IDs or folders, several at once, and exits 1 on any error. Characters with
homebrew, or using a pack it didn't load, are left to `pnpm validate`.

`pnpm lint` runs `oxfmt --check` on every file. With `core.autocrlf`, OCF's files are CRLF on
disk, so on Windows it flags almost all of them; check only the files you changed, as above.

On Windows, `pnpm test` fails in many places that have nothing to do with our packs: the ORC packs
are missing, paths use `\`, symlinks need rights, and `git archive` stops on `con.yaml`.

## Windows notes

### The ORC packs are left out

`packs/orc/2e/content/boosts/con.yaml` and `packs/orc/sf-2e/content/boosts/con.yaml` can't exist on
Windows: `CON` is a reserved device name (like `PRN`, `AUX`, `NUL`, `COM1`…), whatever the
extension. Git can't check them out, so this clone uses a sparse checkout that leaves out the whole
`packs/orc/` folder and the ORC example characters:

```sh
git sparse-checkout list    # /*  !packs/orc/  !examples/characters/orc-*.yaml
```

The consequences:

- the ORC packs (`orc-2e`, `orc-sf-2e`) aren't on disk, so `pnpm validate` checks 15 packs;
- the ORC example characters (`examples/characters/orc-*.yaml`) aren't on disk either, since their
  pack is missing. Git knows they are left out on purpose, so `git status` stays clean;
- the tests that read the ORC packs fail with `ENOENT … packs/orc/2e/pack.yaml`;
- `git sparse-checkout disable` would bring the folder back, but on Windows the checkout of
  `con.yaml` fails;
- the universal tools still load both packs, from git (next section);
- the clone has `core.protectNTFS` set to `false`, or git couldn't even hold `con.yaml` in its
  index ([Windows](#windows)).

The real fix belongs to OCF. The file exists because each attribute boost is a content item, one
file per attribute (`content/boosts/str.yaml` … `con.yaml`). The 5e packs model the same need
without one: `ability` is a family (`[str, dex, con, …]`), and a choice picks plain values
(`from: { values: [int, wis, cha] }` in `packs/5e/srd-5.2/content/backgrounds/acolyte.yaml`) with
an effect on the matching field. Modelling boosts that way, or renaming the six boost items,
would make the repository checkable on Windows; either needs upgrade scripts for saved
characters, so it is OCF's to do. An issue proposing both goes on the OCF repository (Issues, or
Discussions: there is no other forum).

### PF2 in the universal tools

The ORC packs are the rules of Pathfinder Second Edition and Starfinder Second Edition, as Paizo
released them under the ORC License:

| Pack        | Name in the tools                          | Game                                                                            |
| ----------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| `orc-2e`    | Second Edition fantasy rules (ORC)         | Pathfinder 2e, the Remaster: Player Core, Player Core 2, GM Core's player rules |
| `orc-sf-2e` | Second Edition science-fantasy rules (ORC) | Starfinder 2e: Starfinder Player Core                                           |

The ORC License covers the game mechanics, not the Reserved Material: the "Pathfinder" and
"Starfinder" trademarks and the setting. So the packs carry generic names, the books' credit line
in `pack.yaml`, and none of the world (Golarion, deities, nations, planes, characters).

On Windows they aren't on disk, so `universal-lib.ts` reads them from git instead. At start, it
lists what `HEAD` holds under `packs/` and `examples/characters/` but the disk doesn't, reads that
YAML into memory with one `git cat-file --batch`, and builds each pack as `readPack` does (rules
and content in path order). Nothing is written to disk, and nothing in the code names the ORC
packs: any pack a sparse checkout leaves out is read the same way. On macOS or Linux the
files are on disk and this doesn't kick in.

- Both packs are listed with their two creation starts, guided and random.
- The 19 ORC example characters (`orc-*.yaml`: 17 for `orc-2e`, 2 for `orc-sf-2e`) are listed and
  load. Saving one writes it to
  `examples/characters/extensions/`, since its own place is left out of the checkout.
- The version read is the commit checked out (`HEAD`): after `git merge upstream/main`, restart the
  tool to get the new one.
- The first load of `orc-2e` takes about 6 seconds (over 4,600 content files).
- Only the universal server does this: `pnpm validate` and `pnpm test` still skip the ORC packs, and
  the packs can't be edited on Windows.

### pnpm's links to the ORC packs

pnpm fills `node_modules` with links (junctions) to the workspace packages.
`packages/packs/package.json` lists both ORC packs as dependencies (`"@opencharacter/orc-2e":
"workspace:^"`), so `pnpm install --frozen-lockfile` succeeds but creates two links to the missing
`packs/orc/` folders:

```text
packages\packs\node_modules\@opencharacter\orc-2e
packages\packs\node_modules\@opencharacter\orc-sf-2e
```

They are broken, and Windows Explorer stops on them when copying the folder. Remove them after each
install; `cmd /c rmdir <link>` (without `/s`) removes a junction only, never what it points to:

```powershell
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-2e
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-sf-2e
```

If an install ever fails because it can't find those workspace packages, remove the two lines from
`packages/packs/package.json` locally, then tell git to ignore that local change so it is never
committed:

```sh
git update-index --skip-worktree packages/packs/package.json
```

(`git update-index --no-skip-worktree packages/packs/package.json` undoes it.)

### Reinstalling dependencies (`pnpm install`)

`packs/sagas/core/package.json` and `packs/d100/heroic/package.json` make the SagaS and
D100 heroic packs workspace packages, like every pack, and `pnpm-lock.yaml` has their entries
(`packs/sagas/core` and `packs/d100/heroic`, a dev dependency on the engine each, added by hand
like the other packs'). So `pnpm install --frozen-lockfile` works as is, then remove the two ORC
links ([above](#pnpms-links-to-the-orc-packs)).

Don't run a plain `pnpm install` on Windows: it would rewrite `pnpm-lock.yaml` without the ORC
packs, which aren't on disk. If a merge from `upstream` ever drops the `packs/sagas/core` or
`packs/d100/heroic` entry
(a frozen install then stops with `ERR_PNPM_OUTDATED_LOCKFILE`), add it back in path order
(`packs/d100/heroic` before `packs/draw-steel/heroes`, `packs/sagas/core` before
`packs/swn/revised`), the same for both but the path:

```yaml
packs/sagas/core:
  devDependencies:
    '@opencharacter/engine':
      specifier: workspace:*
      version: link:../../../packages/engine
```

Reinstall when VS Code or `tsc` can't find a dependency's types, for instance "Cannot find type
definition file for 'vite/client'" in `apps/web-editor/tsconfig.json`. An interrupted copy of
`node_modules` can leave package links empty (`vite`, `react`, `react-dom`, `yaml` in
`apps/web-editor`, `astro` and `tsx` in `apps/website`), and the install recreates them. Then
reload the VS Code window (Ctrl+Shift+P, "Developer: Reload Window") if the error stays.

### Copying the repository folder

To get the repository on another machine or folder, clone it ([Getting the
repository](#getting-the-repository)). This section is for copying a working folder as it is, as
this one was first made from an earlier local folder, `opencharacter`. To copy a clone from WSL,
see [Windows, cloned through WSL](#windows-cloned-through-wsl).

Windows Explorer stops on the first broken link and can't leave a folder out. Use `robocopy`,
Windows' command-line copy tool. It takes two folders, `robocopy <source> <destination> [options]`,
and skips files already up to date, so running it again copies only what changed. Exit codes 0 to
7 mean success; 8 or more mean errors.

Useful options:

| Option                  | Effect                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| `/E`                    | subfolders, empty ones included                                                             |
| `/XD node_modules dist` | leaves out every folder with these names                                                    |
| `/XJ`                   | skips junctions and symbolic links                                                          |
| `/SJ` `/SL`             | copies junctions and symbolic links as links, not their content                             |
| `/MT:16`                | 16 files at a time: much faster on an SSD with many small files (lower it on a hard disk)   |
| `/R:1 /W:1`             | 1 retry after 1 second on an error (the default waits 30 s, a million times)                |
| `/NFL /NDL /NP`         | no file, folder or percentage lines: the copy runs silently and prints a summary at the end |
| `/L`                    | dry run: lists what would be copied                                                         |

#### Recommended: everything but `node_modules`, then reinstall

pnpm's links (junctions) always hold an **absolute** path, so a copied `node_modules` still leads
into the original folder. Leave it out and let pnpm build a fresh one in the copy:

```powershell
robocopy "D:\Developpement\FichiersTypescript\OCF\opencharacter" "D:\Developpement\FichiersTypescript\OCF\OCF_Extensions" /E /XD node_modules /XJ /MT:16 /R:1 /W:1 /NFL /NDL /NP
cd "D:\Developpement\FichiersTypescript\OCF\OCF_Extensions"
pnpm install --frozen-lockfile
```

`.git` is copied, sparse checkout included. The copy is complete and independent of the original.

#### Copying everything, `node_modules` included

```powershell
robocopy "D:\Developpement\FichiersTypescript\OCF\opencharacter" "D:\Developpement\FichiersTypescript\OCF\OCF_Extensions" /E /SJ /SL /MT:16 /R:1 /W:1 /NFL /NDL /NP
```

With `/SJ` the junctions are copied as junctions, but they still point into the **original**
folder. The copy works only while the original exists under its name: delete, move or rename the
original and the copy's `node_modules` is broken (scripts, `tsc` and pnpm fail). Without `/SJ`,
robocopy copies what each junction points to instead: every package many times over, much bigger
and slower, and pnpm's layout is lost.

To make such a copy independent, rebuild `node_modules` in the copy: remove every `node_modules`
of the copy with `cmd /c rmdir /s /q`, then reinstall as above:

```powershell
cd "D:\Developpement\FichiersTypescript\OCF\OCF_Extensions"
Get-ChildItem . , packages, apps, packs\*\* -Directory -Filter node_modules -Force | % { cmd /c rmdir /s /q "$($_.FullName)" }
```

This was done for this clone on 2026-11-22: its 1,057 junctions all pointed into
`opencharacter`, and none does after the reinstall. To check, list each link's target without
following it, for instance with Node (`fs.readdirSync(dir, { withFileTypes: true })`,
`isSymbolicLink()`, `fs.readlinkSync()`), and look for the original folder's path.

#### Deleting a folder that holds junctions

The risk is a tool that enters a junction while deleting and empties what it points to. How much
that matters depends on where the junctions point:

- **A clone** (`git clone`, then `pnpm install`): every junction pnpm makes points inside the clone
  itself (`node_modules\.pnpm\…`, the workspace packages), and the files from pnpm's global store
  are hard links, which can be deleted without touching the store. Deleting the clone deletes
  nothing else (checked on a clone: its 1,350 links all point inside it).
- **A copy** (`robocopy /SJ`, or any copy of a `node_modules`): its junctions keep their absolute
  paths, so they point into **another** folder. A tool that follows them deletes that folder's
  files.

**Check first**, with `scripts/extensions/check-links.ts`: it lists the folder's links without
following any, and says whether one points outside it (exit code 0: none; 1: some, listed).

```powershell
node --import tsx scripts/extensions/check-links.ts D:\Developpement\FichiersTypescript\OCF_Test
# D:\…\OCF_Test: 7140 folders, 1350 links.
# Every link points inside the folder: deleting it touches nothing else.
```

**Then delete with `cmd /c rmdir /s /q <folder>`**: it removes each junction as a link, without
entering it, and is the fastest. Avoid the other tools on a folder whose links point outside:

| Tool                                  | Behaviour                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `cmd /c rmdir /s /q <folder>`         | Removes each junction without entering it. Safe in every case, the fastest  |
| Windows Explorer                      | Not to be trusted with such a folder: see the incident below. Slow, besides |
| `Remove-Item -Recurse` (PowerShell 5) | Can follow junctions: never on a folder whose junctions point elsewhere     |

With Windows Explorer, on a clone, use Shift+Delete: a plain Delete sends the folder to the Recycle
Bin, often too small for it. It may stop on paths too long in `node_modules\.pnpm` or on broken
links (the two ORC links, if still there); finish then with `cmd /c rmdir /s /q`.

**The incident of 2026-11-26.** This repository was first a copy of `opencharacter` (above).
Deleting `opencharacter` at 17:53 emptied part of this repository at 17:56: 8,784 files of
`packages/spec` (only folders and some hundred files left) and the files of packages in
`node_modules\.pnpm` (`yaml`, `ajv`…), their folders kept. So `opencharacter` then held
junctions pointing into this repository, and the deletion followed them. How they got there, and
why the deletion followed them, can't be told now that the folder is gone. It was repaired with:

```powershell
git restore packages/spec                  # the deleted files, from the last commit
pnpm install --frozen-lockfile --force     # a plain install keeps the emptied package folders
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-2e
cmd /c rmdir packages\packs\node_modules\@opencharacter\orc-sf-2e
pnpm typecheck; pnpm validate
```

#### Before deleting the original

Rename it first (`opencharacter` → `opencharacter_old`), then test the copy:

```powershell
pnpm validate
node --import tsx --conditions @opencharacter/source scripts/extensions/universal.ts
```

If everything works while the original has another name, the copy no longer depends on it. That
says nothing of the other way round: the original may hold links into the copy. Before deleting
`opencharacter_old`, run `check-links.ts` on it; with any link outside it, rebuild its
`node_modules` first or keep it. Then delete it with `cmd /c rmdir /s /q`.

### PowerShell and UTF-8

Windows PowerShell 5 reads files in the ANSI code page unless told otherwise, so a
`Get-Content`/`Set-Content` round trip garbles non-ASCII characters (`→` becomes `â†’`). Pass
`-Encoding utf8` on reads, or edit files with VS Code or Node. `Set-Content -Encoding utf8` also
adds
a BOM.
