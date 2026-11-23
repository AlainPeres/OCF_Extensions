# SagaS extensions

Additions to the Open Character Format (OCF) repository: a pack for the _Rules of SagaS 0.995 LLL
(OGL)_ and browser and terminal tools to create and play characters. This repository
(<https://github.com/AlainPeres/OCF_Extensions>, the `origin` remote) keeps OCF's whole history,
with OCF's repository as the `upstream` remote. None of the additions is part of OCF; the rest of
the repo (spec, engine, other packs) is OCF's, unchanged.

Everything runs from the repo's TypeScript sources, so nothing needs a build: the scripts import
`packages/engine/src` and `packages/text/src` directly.

## Getting the repository

| System           | Procedure                             | What you get                                      | Tested                             |
| ---------------- | ------------------------------------- | ------------------------------------------------- | ---------------------------------- |
| Linux            | [Linux](#linux)                       | Everything: 16 packs, ORC included                | Not yet                            |
| macOS            | [macOS](#macos)                       | Everything: 16 packs, ORC included                | Not yet                            |
| Windows          | [Windows](#windows)                   | 14 packs on disk; ORC only in the universal tools | Yes, clone from GitHub, 2026-11-23 |
| Windows with WSL | [Windows with WSL](#windows-with-wsl) | Everything, as on Linux                           | Not yet                            |

Linux, macOS and WSL take the same commands. Windows needs a few more (no checkout at first,
`core.protectNTFS`, a sparse checkout, two links to remove) because of `boosts/con.yaml` ([The ORC packs are left out](#the-orc-packs-are-left-out)).

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
- `pnpm validate` ends with `Validated 16 pack(s) […] 49 character file(s) and 1 export(s): 0
  error(s), 0 warning(s)` (the 16 packs include `orc-2e` and `orc-sf-2e`; the 49 characters, OCF's
  examples, the 19 ORC ones and ours in `extensions/`);
- `git status` says `nothing to commit, working tree clean`.

No sparse checkout and no `core.protectNTFS`: every file is on disk, and the universal tools read
the ORC packs from it. `pnpm test` runs, but a few OCF tests that list the official packs fail
because of `packs/sagas/core` ([GitHub setup](#github-setup)).

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
4. **`git checkout main`** writes the files: `Updating files: 100% (19702/19702), done.`, then
   `Already on 'main'`.
5. **`git remote add upstream`**: OCF's repository, to keep up with it
   ([After cloning](#after-cloning)).
6. **`pnpm install --frozen-lockfile`** ends with `Done in …`. Its warning `Ignored build scripts:
   esbuild` is pnpm 10's default and harmless.
7. **The two `rmdir`** remove the links pnpm makes to the missing ORC packs
   ([pnpm's links to the ORC packs](#pnpms-links-to-the-orc-packs)). They print nothing.
8. **`pnpm validate`** takes a few seconds, then ends with `Validated 14 pack(s) […] 30 character
   file(s) and 1 export(s): 0 error(s), 0 warning(s)`.

`git status` then says `nothing to commit, working tree clean`, with `You are in a sparse checkout
with 74% of tracked files present`.

In Git Bash instead of PowerShell, the commands are the same except the two `rmdir`:
`cmd //c rmdir 'packages\packs\node_modules\@opencharacter\orc-2e'` (and the same for
`orc-sf-2e`). To delete a clone later, use `cmd /c rmdir /s /q <folder>` from PowerShell, never
Windows Explorer or `Remove-Item` ([Copying the repository folder](#copying-the-repository-folder)).

What works: the SagaS tools, the universal tools (which even load the ORC packs, from git: [PF2 in
the universal tools](#pf2-in-the-universal-tools)), `pnpm validate` on the 14 packs on disk,
`pnpm typecheck`, and merges from `upstream`. What doesn't: `pnpm validate` and `pnpm test` on the
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
  reports some 300 errors about them. WSL avoids all of this.

### Windows with WSL

For the whole repository on a Windows machine, ORC packs and `pnpm test` included, work in WSL (a
Linux inside Windows), in its own file system:

```powershell
wsl --install -d Ubuntu      # once, in an administrator PowerShell; then restart
```

Then, in the Ubuntu terminal:

```sh
sudo apt update && sudo apt install -y git curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash   # then reopen the terminal
nvm install 26
npm install -g pnpm@10.20.0
cd ~
```

and follow [Linux](#linux), with the same results. Clone in the Linux home folder (`~`), not under
`/mnt/c` or `/mnt/d`: that is the Windows disk, much slower from WSL, and Windows' naming rules may
still apply there. Open the folder in VS Code with `code .` (the WSL extension). The tools print
their address (`http://127.0.0.1:5176/` …); WSL can't always open a Windows browser itself, so open
that address in the browser if it doesn't open, or pass `--no-open`.

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

Built and tested against this commit of the OCF repository, still `upstream/main` on 2026-11-23:

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| Repository      | <https://github.com/pixelqueue/opencharacter> (branch `main`) |
| Commit          | `c3a1de41e056caae88ca471359a8a530e6208478`                    |
| Date            | 2026-11-02                                                    |
| Message         | Version Packages (#209)                                       |
| Release tag     | `@opencharacter/5e-srd-5.1@0.4.0`                             |
| Spec and engine | 0.4.0                                                         |

A later OCF commit may change the spec or the engine and break the pack or the tools. To work on
this exact version: `git checkout c3a1de41e056caae88ca471359a8a530e6208478`. To see which commit a
clone is on: `git log -1`.

## What was added

| Path                                                  | What                                                            |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| `packs/sagas/core/`                                   | The `sagas-core` pack (rules, 119 skills, 62 weapons, 14 armor) |
| `scripts/extensions/sagas-create-cli.ts`              | SagaS character creation in the terminal                        |
| `scripts/extensions/sagas-create.ts` + `.html`        | SagaS character creation in the browser                         |
| `scripts/extensions/sagas-play.ts` + `.html`          | SagaS play sheet in the browser                                 |
| `scripts/extensions/universal-lib.ts`                 | Shared server of the two universal tools                        |
| `scripts/extensions/universal-create.ts` + `.html`    | Character creator for any pack                                  |
| `scripts/extensions/universal-play.ts` + `.html`      | Play sheet for any pack and character                           |
| `scripts/extensions/rules_of_sagas_v0_995_lll_ogl.md` | The rules the pack models (OGL)                                 |
| `examples/characters/extensions/`                     | SagaS example characters and the characters the tools save      |
| `.vscode/launch.json`, `.vscode/settings.json`        | Run and debug the current TS file from VS Code                  |

Our files stay apart from OCF's: scripts in `scripts/extensions/`, characters in
`examples/characters/extensions/`. `pnpm validate` reads `examples/characters/` with its
sub-folders, so it still checks them.

## Running the tools

Each tool is a TypeScript file run with `tsx` and the repo's source condition, from the repo root:

```sh
node --import tsx --conditions @opencharacter/source scripts/extensions/<tool>.ts [options]
```

In VS Code, open the file and press F5 (launch configuration "Exécuter le fichier TS courant
(tsx)") or the Code Runner ▶ button. Run the `.ts` file, not the `.html`: the script starts a local
server (127.0.0.1 only) and opens the page in the browser. `--port N` changes the port and
`--no-open` doesn't open the browser. Ctrl+C stops the server.

| Tool                  | Port | Options                                                                                       |
| --------------------- | ---- | --------------------------------------------------------------------------------------------- |
| `sagas-create-cli.ts` | —    | `--random`, `--points 150\|250\|350`, `--id ID`, `--out FILE`; type `q` at any prompt to quit |
| `sagas-create.ts`     | 5174 | `--port`, `--no-open`                                                                         |
| `sagas-play.ts`       | 5175 | `--port`, `--no-open`                                                                         |
| `universal-create.ts` | 5176 | `--port`, `--no-open`                                                                         |
| `universal-play.ts`   | 5177 | `--port`, `--no-open`                                                                         |

Characters are saved to `examples/characters/extensions/` (an existing file is never overwritten
without asking). The SagaS tools read and write that folder only. The universal tools list OCF's
example characters (`examples/characters/`) and ours (`extensions/…`); a loaded character is saved
back where it was, and a new one, or one saved under another name, goes to `extensions/`.

## The SagaS pack (`packs/sagas/core`)

Pack ID `sagas-core`, version 0.1.0, spec 0.4.0, licensed under OGL 1.0a (license text and
section 15 in `pack.yaml`). Mechanics live in `rules/` and `content/`, all English text in
`i18n/en.yaml`. `pnpm validate` passes with no error or warning.

### Rules (`rules/`)

- **`stats.yaml`**: the eight main characteristics (base 5), the secondary ones (Close Combat,
  Ranged Combat, Speed, Initiative) with their creation bonuses, characteristic bonuses from the
  Universal Table, shock thresholds, physical and psychical hit points, injuries and stun, states
  (unconscious, dead, confused, mad), protection and impact bonus, simultaneous studies, Reflex
  Dodge, and the creation points: budget (150/250/350 and the social class), the cost of the
  characteristics (3/6/12/24/48 a point), of the secondary ones (three times as much) and of the
  skills.
- **`identity.yaml`**: free-text fields: name, species (default Human), profession, description,
  background, possessions.
- **`skills.yaml`**: the skill content type. Each copy has a learning level, an initial level and a
  specialty. Its total is the characteristic plus the learning level, and its grade runs from
  incompetent to master. Constraints:
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
  or injuries and rolls shock. There is also `rest-short`.
- **`gear.yaml`**: weapons (kind, skill, damage bonus, required Strength, DMAX, range on the
  Universal Table, armor piercing, technological level) with their damage action; armor and
  shields, whose protection counts while equipped.
- **`creation.yaml`**: the creation starts and their actions (below).
- **`tags.yaml`**: the tags `characteristic`, `check`, `creation`, `damage`, `health` and
  `secondary-bonus`.

### Content (`content/`)

- **Skills (119)**: the 108 of section 17, plus an "Other" skill per characteristic (Other
  (Strength) … Other (Speed)) whose initial level is chosen when learned. Generic skills, to be
  specialized: Foreign languages, Handcrafts, Mind games, Games of accuracy, Other arts, Other
  knowledge, Other sciences, Other techniques, and the eleven "Other" skills.
- **Weapons (62)**: sections 14.1 and 14.2, each with its DMAX, plus its range for the 32 ranged
  ones.
- **Armor (14)**: section 15, shields included.

### Creation (`rules/creation.yaml`)

Two creation starts, as every OCF pack that starts a sheet has.

- **Guided** (`create-character`): it asks, in order:
  1. the power level (150, 250 or 350 points);
  2. the social class (privileged −10, average, less favored +10);
  3. the universe's technological level (TL0–TL8), which limits the skills and gear offered;
  4. the main characteristics, bought at their cost;
  5. the secondary characteristic bonuses;
  6. the skills to learn, then their levels one step at a time while the points last;
  7. weapons and armor.

  It leaves the character being created (`creating: true`), so generic skills can be added next.

- **Random**: the same action, which draws the power level, spends three fifths of the points on
  the characteristics, learns 1d6 + 3 skills and raises them with the rest, and takes a weapon and
  an armor. It finishes the creation itself.
- **`learn-specialty`**: learns a generic skill with a specialty (a text parameter), its initial
  level for an "Other" skill, then its level step by step. It works at creation and later.
- **`finish-creation`**: ends a creation the guided start left open.
- **Constraint `creation-within-budget`**: while the character is being created, no more points
  may be spent than the budget allows.

The three creation actions carry the `creation` tag, which the universal creator uses to show them
first.

### Not yet modelled

Long-term actions, help and neighboring skills, daily recovery, combat options, martial arts,
TL 4/5 weapon examples, structures, the French translation.

## The SagaS tools

- **`sagas-create-cli.ts`**: asks, in the terminal:
  1. identity;
  2. characteristics and secondary bonuses;
  3. skills: a specialty for a generic one, an initial level for an "Other" one;
  4. equipment.

  It shows the points left after each answer. `--random` makes a character without questions.
  Point costs come from the pack's formulas; the script recodes no rule.

- **`sagas-create.ts`**: the same in the browser. Its sections, in order:
  1. identity;
  2. creation points (150/250/350 or any number) and social class;
  3. characteristics and secondary bonuses;
  4. skills, grouped by characteristic: specialties for generic skills, an initial level for the
     "Other" ones;
  5. weapons and armor: DMAX for every weapon, range with its distance for ranged ones;
  6. possessions and background.

  A live summary of the points and rules issues runs alongside, with a random character button,
  load and save.

- **`sagas-play.ts`**: a play sheet:
  - identity, with Initiative, Speed and Reflex Dodge in the header;
  - characteristic and skill rolls with difficulty, modifier and situation. Skills are grouped by
    characteristic and filtered (all, points spent, total > 0), with one row per specialty;
  - weapons with attack and damage, DMAX and range;
  - taking damage with armor piercing or ignoring armor, a short rest, healing;
  - possessions, background and a roll log.

## The universal tools

They work for any pack under `packs/`, with nothing of a pack written in their code: the engine
says what to ask (`startAction` pauses, `describeAction` parameters) and the pack's i18n gives the
text (`@opencharacter/text`, `describeNeed`).

- **`universal-create.ts`**: pick a pack, a new or saved character, and one of the pack's
  creation starts.
  - **Pauses**: each pause becomes a form: a list of options with the recommendation, a budget
    allocation with the cost of each amount, or values to hand out. "Finish automatically" takes
    every recommendation.
  - **Actions**: the actions tagged `creation` come first and the others are folded away. Forms are
    built from the action's parameters.
  - **Input fields** can be edited, and the character is shown and saved.

  The guided and random starts of the 14 packs on disk were tested, and the random starts of the
  two ORC packs (PF2, read from git on Windows: [PF2 in the universal tools](#pf2-in-the-universal-tools)).

- **`universal-play.ts`**: load any example character and play it:
  - **Sheet**: fields by display group, content with its state and computed values, rules issues.
  - **Actions**: the rules' actions, and each item's actions on its own line. One click runs an
    action with its defaults; "…" opens its form.
  - **Situation**: the situational choices apply to the next action.
  - **Log**: each roll's dice, faces, total and band, the outcome's data, and which fields changed.
    Changes meant for another character are listed but not applied.
  - **Offers**: the rules' follow-ups can be run or dismissed.
  - **Input fields** can be edited, and the character is saved back.

  Tested on the 30 example characters on disk, and the 19 ORC ones read from git on Windows.

Limits of the universal tools:

- Handoff pauses (another character's turn in an action) aren't answered.
- Only on/off situational choices are offered.
- Pending choices outside an action are counted but not answered.
- A pack without display groups (SagaS) shows its fields in one table.

## VS Code setup

- `.vscode/launch.json`: "Exécuter le fichier TS courant (tsx)" runs the open file with
  `--import tsx --conditions @opencharacter/source`, in the integrated terminal (so prompts can
  read input).
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
  `@opencharacter/packs` bundle's LICENSE to name every pack. With `packs/sagas/core` they fail.
  Adapting them would mean changing OCF's files and conflicts on every merge from `upstream`.
- **Release is disabled** too. On every push to `main` it would try to publish to npm, under the
  `@opencharacter` scope, every package not yet there, `@opencharacter/sagas-core` included.
- **Website** (`pages.yml`) runs only by hand; it stays as is.
- **Dependabot is off**: `.github/dependabot.yml` is removed and its settings are off (Settings →
  Code security). Dependency updates come with the merges from `upstream`.

Disabling a workflow changes no file, so merges from `upstream` aren't affected. Re-enable one
from the same menu.

Without CI, check locally before pushing:

```sh
npx oxlint --deny-warnings
npx oxfmt --check packs/sagas scripts/extensions README_EXTENSIONS.md
pnpm typecheck
pnpm validate
```

`pnpm lint` runs `oxfmt --check` on every file. With `core.autocrlf`, OCF's files are CRLF on
disk, so on Windows it flags almost all of them; check only the files you changed, as above.

On Windows, `pnpm test` fails in many places that have nothing to do with SagaS: the ORC packs
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

- the ORC packs (`orc-2e`, `orc-sf-2e`) aren't on disk, so `pnpm validate` checks 14 packs;
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
packs: any pack a sparse checkout leaves out is read the same way. On macOS, Linux or WSL the
files are on disk and this doesn't kick in.

- Both packs are listed with their two creation starts, guided and random.
- The 19 ORC example characters (`orc-*.yaml`: 17 for `orc-2e`, 2 for `orc-sf-2e`) are listed and load. Saving one writes it to
  `examples/characters/extensions/`, since its own place is left out of the checkout.
- The version read is the commit checked out (`HEAD`): after `git merge upstream/main`, restart the
  tool to get the new one.
- The first load of `orc-2e` takes about 6 seconds (over 4,600 content files).
- Only the universal tools do this: `pnpm validate` and `pnpm test` still skip the ORC packs, and
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

`packs/sagas/core/package.json` makes the SagaS pack a workspace package, like every pack, and
`pnpm-lock.yaml` has its entry (`packs/sagas/core`, a dev dependency on the engine, added by hand
like the other packs'). So `pnpm install --frozen-lockfile` works as is, then remove the two ORC
links ([above](#pnpms-links-to-the-orc-packs)).

Don't run a plain `pnpm install` on Windows: it would rewrite `pnpm-lock.yaml` without the ORC
packs, which aren't on disk. If a merge from `upstream` ever drops the `packs/sagas/core` entry
(a frozen install then stops with `ERR_PNPM_OUTDATED_LOCKFILE`), add it back next to
`packs/swn/revised`:

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
this one was first made from an earlier local folder, `opencharacter`.

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

> **Warning.** Never remove a folder holding junctions with `Remove-Item -Recurse` (Windows
> PowerShell 5) or with Windows Explorer. They can follow a junction and delete what it points to,
> here the **original** folder's files. `cmd /c rmdir /s /q` removes the link without entering it.

#### Before deleting the original

Rename it first (`opencharacter` → `opencharacter_old`), then test the copy:

```powershell
pnpm validate
node --import tsx --conditions @opencharacter/source scripts/extensions/universal-play.ts
```

If everything works while the original has another name, the copy no longer depends on it. Delete
`opencharacter_old` with `cmd /c rmdir /s /q`.

### PowerShell and UTF-8

Windows PowerShell 5 reads files in the ANSI code page unless told otherwise, so a
`Get-Content`/`Set-Content` round trip garbles non-ASCII characters (`→` becomes `â†’`). Pass
`-Encoding utf8` on reads, or edit files with VS Code or Node. `Set-Content -Encoding utf8` also adds
a BOM.
