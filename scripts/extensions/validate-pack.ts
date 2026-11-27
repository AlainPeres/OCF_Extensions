// Validates one pack, and the example characters that use it, with the checks of `pnpm validate`
// (OCF's scripts/validate, used as is): the pack's schemas, references, formulas and texts, its
// engine load, then each character of examples/characters/ (extensions/ included) naming it.
// The pack's dependencies are loaded with it, but only the pack itself is checked.
//
//   node --import tsx --conditions @opencharacter/source scripts/extensions/validate-pack.ts <pack-id or folder> [...]
//
// e.g. `scripts/extensions/validate-pack.ts d100-heroic`, or `… packs/sagas/core sagas-core`.
// Characters with homebrew are left to `pnpm validate`. Exits 1 on any error.
import { existsSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { CharacterChecker, PackChecker } from '../validate/checks.ts';
import { checkEngineLoad } from '../validate/engine-load.ts';
import {
  loadCharacter,
  loadPack,
  readYaml,
  SchemaValidator,
  visibleFamilies,
  walkYaml,
  YamlCache,
  type LoadedPack,
} from '../validate/load.ts';
import { Reporter } from '../validate/report.ts';
import { Ruleset } from '../validate/ruleset.ts';
import { pendingVersions } from '../release/pending.ts';

const root = resolve(import.meta.dirname, '..', '..');
const packsDir = join(root, 'packs');
const charactersDir = join(root, 'examples', 'characters');
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!args.length) {
  console.error('Usage: validate-pack.ts <pack-id or folder> [...]');
  process.exit(2);
}

// Every pack folder (packs/<game>/<pack>/), by its ID.
const folders = (dir: string) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => join(dir, e.name));
const packDirs = folders(packsDir)
  .flatMap(folders)
  .filter((d) => existsSync(join(d, 'pack.yaml')));
const cache = new YamlCache();
const scratch = new Reporter();
const dirById = new Map<string, string>();
const depsById = new Map<string, string[]>();
for (const dir of packDirs) {
  const manifest = readYaml(join(dir, 'pack.yaml'), scratch, root, cache) as {
    id?: string;
    dependencies?: Record<string, string>;
  };
  if (!manifest?.id) continue;
  dirById.set(manifest.id, dir);
  depsById.set(manifest.id, Object.keys(manifest.dependencies ?? {}));
}

// The packs asked for, by ID or folder.
const targets = args.map((a) => {
  const asDir = resolve(a);
  const id =
    [...dirById].find(([, d]) => resolve(d) === asDir)?.[0] ?? (dirById.has(a) ? a : undefined);
  if (!id) {
    console.error(`No pack "${a}" under packs/ (known: ${[...dirById.keys()].join(', ')})`);
    process.exit(2);
  }
  return id;
});
// With their dependencies, recursively.
const needed = new Set<string>();
const need = (id: string) => {
  if (needed.has(id)) return;
  needed.add(id);
  for (const d of depsById.get(id) ?? []) if (dirById.has(d)) need(d);
};
targets.forEach(need);

const reporter = new Reporter();
const schemas = new SchemaValidator();
const families = visibleFamilies(packDirs, cache);
const packs: LoadedPack[] = [];
for (const id of needed) {
  const pack = loadPack(dirById.get(id)!, root, schemas, reporter, cache, families);
  if (pack) packs.push(pack);
}
const ruleset = new Ruleset(packs, reporter);
const pending = pendingVersions(root);
for (const id of targets)
  if (packs.some((p) => p.manifest.id === id))
    new PackChecker(ruleset, reporter, id, undefined, false, pending.get(id)).run();
checkEngineLoad(packs, ruleset, reporter);

// The characters naming one of the packs (and only packs this run loaded).
const characters: string[] = [];
const skipped: string[] = [];
const checker = new CharacterChecker(ruleset, reporter);
for (const file of walkYaml(charactersDir)) {
  const doc = readYaml(file, scratch, root, cache) as {
    packs?: { id: string }[];
    homebrew?: unknown;
  };
  const ids = (doc?.packs ?? []).map((p) => p.id);
  if (!ids.some((id) => targets.includes(id))) continue;
  if (doc.homebrew || ids.some((id) => !needed.has(id))) {
    skipped.push(relative(root, file));
    continue;
  }
  const character = loadCharacter(file, root, schemas, reporter, cache);
  if (character) checker.run(character.doc, character.file);
  characters.push(relative(root, file));
}

for (const { file, message } of reporter.warnings) console.warn(`warning  ${file}: ${message}`);
for (const { file, message } of reporter.errors) console.error(`error    ${file}: ${message}`);
const deps = [...needed].filter((id) => !targets.includes(id));
console.log(
  `\nValidated ${targets.join(', ')}${deps.length ? ` (with ${deps.join(', ')})` : ''} and ` +
    `${characters.length} character file(s)${characters.length ? ` [${characters.join(', ')}]` : ''}: ` +
    `${reporter.errors.length} error(s), ${reporter.warnings.length} warning(s).` +
    (skipped.length
      ? `\nLeft to pnpm validate (homebrew or other packs): ${skipped.join(', ')}`
      : ''),
);
process.exit(reporter.errors.length > 0 ? 1 : 0);
