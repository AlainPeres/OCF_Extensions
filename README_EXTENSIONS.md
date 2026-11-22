# SagaS extensions

Local additions to this Open Character Format clone: a pack for the _Rules of SagaS 0.995 LLL (OGL)_
and browser and terminal tools to create and play characters. None of it is part of the official
OCF repository; the rest of the repo (spec, engine, other packs) is unchanged.

Everything runs from the repo's TypeScript sources, so nothing needs a build: the scripts import
`packages/engine/src` and `packages/text/src` directly.

## OCF version

Built and tested against this commit of the OCF repository:

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

| Path                                             | What                                                            |
| ------------------------------------------------ | --------------------------------------------------------------- |
| `packs/sagas/core/`                              | The `sagas-core` pack (rules, 119 skills, 62 weapons, 14 armor) |
| `scripts/perso/sagas-create-cli.ts`              | SagaS character creation in the terminal                        |
| `scripts/perso/sagas-create.ts` + `.html`        | SagaS character creation in the browser                         |
| `scripts/perso/sagas-play.ts` + `.html`          | SagaS play sheet in the browser                                 |
| `scripts/perso/universal-lib.ts`                 | Shared server of the two universal tools                        |
| `scripts/perso/universal-create.ts` + `.html`    | Character creator for any pack                                  |
| `scripts/perso/universal-play.ts` + `.html`      | Play sheet for any pack and character                           |
| `scripts/perso/rules_of_sagas_v0_995_lll_ogl.md` | The rules the pack models (OGL)                                 |
| `.vscode/launch.json`, `.vscode/settings.json`   | Run and debug the current TS file from VS Code                  |

## Running the tools

Each tool is a TypeScript file run with `tsx` and the repo's source condition, from the repo root:

```sh
node --import tsx --conditions @opencharacter/source scripts/perso/<tool>.ts [options]
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

Characters are saved to `examples/characters/` (an existing file is never overwritten without
asking).

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

  The guided and random starts of all 14 packs were tested.

- **`universal-play.ts`**: load any example character and play it:
  - **Sheet**: fields by display group, content with its state and computed values, rules issues.
  - **Actions**: the rules' actions, and each item's actions on its own line. One click runs an
    action with its defaults; "…" opens its form.
  - **Situation**: the situational choices apply to the next action.
  - **Log**: each roll's dice, faces, total and band, the outcome's data, and which fields changed.
    Changes meant for another character are listed but not applied.
  - **Offers**: the rules' follow-ups can be run or dismissed.
  - **Input fields** can be edited, and the character is saved back.

  Tested on the 30 example characters.

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
npx oxfmt --check packs/sagas scripts/perso README_EXTENSIONS.md
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
  `con.yaml` fails.

The real fix belongs to OCF: renaming `boosts/con.yaml` (to `constitution.yaml`, for instance) would
make the repository checkable on Windows. It deserves an issue on the OCF repository.

### Cloning this repository on Windows

A plain `git clone` downloads the history, then fails to write the files:

```text
error: invalid path 'packs/orc/2e/content/boosts/con.yaml'
fatal: unable to checkout working tree
warning: Clone succeeded, but checkout failed.
```

Clone without a checkout, set up the sparse checkout, then check out `main`:

```sh
git clone --no-checkout https://github.com/AlainPeres/OCF_Extensions.git
cd OCF_Extensions
git sparse-checkout set --no-cone '/*' '!packs/orc/' '!examples/characters/orc-*.yaml'
git checkout main
```

The ORC packs and the ORC example characters stay out, so `git status` is clean and `pnpm
validate` doesn't trip over characters whose pack is missing. The consequences listed above
still apply (tests that read the ORC packs fail). Then install the dependencies as described in
[Reinstalling dependencies](#reinstalling-dependencies-pnpm-install).

To get the upstream OCF changes, add the OCF repository as a second remote:

```sh
git remote add upstream https://github.com/pixelqueue/opencharacter.git
git fetch upstream
git merge upstream/main
```

Don't turn `core.protectNTFS` off to force the checkout: it also turns off Git's protections
against malicious paths on NTFS.

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

`packs/sagas/core/package.json` makes the SagaS pack a workspace package, like every pack, but
OCF's `pnpm-lock.yaml` doesn't know it. So a frozen install stops with `ERR_PNPM_OUTDATED_LOCKFILE`.
A plain `pnpm install` would rewrite `pnpm-lock.yaml`, a file OCF tracks, and may trip over the
missing ORC packs. Set the pack's `package.json` aside for the install instead, so the lockfile
stays as it is:

```powershell
Rename-Item packs/sagas/core/package.json package.json.off
pnpm install --frozen-lockfile
Rename-Item packs/sagas/core/package.json.off package.json
```

The pack's `package.json` only serves to publish it to npm. The scripts don't need it, so deleting
it is another way out.

Reinstall when VS Code or `tsc` can't find a dependency's types, for instance "Cannot find type
definition file for 'vite/client'" in `apps/web-editor/tsconfig.json`. An interrupted copy of
`node_modules` can leave package links empty (`vite`, `react`, `react-dom`, `yaml` in
`apps/web-editor`, `astro` and `tsx` in `apps/website`), and the install recreates them. Then
reload the VS Code window (Ctrl+Shift+P, "Developer: Reload Window") if the error stays.

### Copying the repository folder

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
Rename-Item packs/sagas/core/package.json package.json.off
pnpm install --frozen-lockfile
Rename-Item packs/sagas/core/package.json.off package.json
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
node --import tsx --conditions @opencharacter/source scripts/perso/universal-play.ts
```

If everything works while the original has another name, the copy no longer depends on it. Delete
`opencharacter_old` with `cmd /c rmdir /s /q`.

### PowerShell and UTF-8

Windows PowerShell 5 reads files in the ANSI code page unless told otherwise, so a
`Get-Content`/`Set-Content` round trip garbles non-ASCII characters (`→` becomes `â†’`). Pass
`-Encoding utf8` on reads, or edit files with VS Code or Node. `Set-Content -Encoding utf8` also adds
a BOM.
