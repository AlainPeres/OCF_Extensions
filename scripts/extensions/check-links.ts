// Before deleting a folder: lists its links (pnpm's junctions in node_modules, symbolic links)
// without following any, and says where they point. A link to somewhere outside the folder means
// that a tool which follows links while deleting would delete files there: on 2026-11-26, deleting
// an old copy whose junctions pointed into this repository emptied packages/spec and part of
// node_modules. A clone made with `git clone` then `pnpm install` has none.
//
//   node --import tsx scripts/extensions/check-links.ts <folder> [--all]
//
// Exits 0 when every link points inside the folder, 1 when one points outside (listed, the first
// 20 unless --all), 2 on a usage error.

import { existsSync, lstatSync, readdirSync, readlinkSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';

const args = process.argv.slice(2);
const all = args.includes('--all');
const folder = args.find((a) => !a.startsWith('--'));
if (!folder || !existsSync(folder) || !lstatSync(folder).isDirectory()) {
  console.error('Usage: check-links.ts <folder> [--all]');
  process.exit(2);
}
const root = resolve(folder);
// Windows paths ignore case.
const same = process.platform === 'win32' ? (p: string) => p.toLowerCase() : (p: string) => p;
const inside = (target: string) => {
  const r = relative(same(root), same(target));
  return r === '' || (!r.startsWith('..') && !isAbsolute(r));
};

let links = 0;
let folders = 0;
let unreadable = 0;
const outside: { link: string; target: string }[] = [];
const walk = (dir: string) => {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    unreadable++;
    return;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    // A junction is a symbolic link to Node: never entered.
    if (e.isSymbolicLink()) {
      links++;
      let target: string;
      try {
        target = resolve(dirname(p), readlinkSync(p));
      } catch {
        unreadable++;
        continue;
      }
      if (!inside(target)) outside.push({ link: relative(root, p), target });
    } else if (e.isDirectory()) {
      folders++;
      walk(p);
    }
  }
};
walk(root);

console.log(`${root}: ${folders} folders, ${links} links.`);
if (unreadable) console.log(`${unreadable} entries could not be read (rights, long paths).`);
if (!outside.length) {
  console.log('Every link points inside the folder: deleting it touches nothing else.');
  process.exit(0);
}
// Where the outside links lead, by the folder they point into, one level deeper than the folder
// checked (another copy of the repository, a package of it…).
const depth = root.split(/[\\/]/).length + 1;
const byPlace = new Map<string, number>();
for (const o of outside) {
  const place = o.target.split(/[\\/]/).slice(0, depth).join('\\');
  byPlace.set(place, (byPlace.get(place) ?? 0) + 1);
}
console.log(`\n${outside.length} links point OUTSIDE the folder:`);
for (const [place, n] of byPlace) console.log(`  ${n} into ${place}…`);
console.log('');
for (const o of all ? outside : outside.slice(0, 20)) console.log(`  ${o.link} -> ${o.target}`);
if (!all && outside.length > 20) console.log(`  … ${outside.length - 20} more (--all lists them).`);
console.log(
  "\nDon't delete it with a tool that may follow links. `cmd /c rmdir /s /q <folder>` removes each\n" +
    'junction as a link; or rebuild its node_modules first (remove them, then pnpm install).',
);
process.exit(1);
