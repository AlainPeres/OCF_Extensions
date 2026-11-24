// What a pack's display hints show of a character's content, for the tools of scripts/extensions.
// The engine evaluates the content groups (computeSheet's `groups`, each member an index into
// `activations`); these helpers read them. A pack decides there what an app leaves out, such as
// the SagaS skills and gear above the universe's technological level.
import { computeSheet } from '../../packages/engine/src/index.ts';

type Any = any;

/**
 * The copies the sheet doesn't show: listed only by content groups it hides (a group's `shown`
 * false). A copy in no group shows ("Other"), and so does one a shown group lists too.
 */
export function hiddenCopies(sheet: Any): Set<string> {
  const shown = new Set<string>();
  const hidden = new Set<string>();
  for (const g of sheet.groups ?? [])
    for (const m of g.items ?? []) {
      const entry: string | undefined = sheet.activations?.[m.activation]?.entry;
      if (entry) (g.shown === false ? hidden : shown).add(entry);
    }
  return new Set([...hidden].filter((e) => !shown.has(e)));
}

/**
 * The items, of those given, the display hints would hide once the character held them (gear
 * above the universe's level in a shop list). One trial sheet holds them all, each as a copy in
 * its list (`inventory` for a carried type); each lands in the groups its `where` picks, and a
 * group the character's own sheet hides counts as hidden: a held copy would otherwise force it
 * shown.
 */
export function hiddenItems(
  ruleset: Any,
  character: Any,
  sheet: Any,
  items: readonly string[],
): Set<string> {
  const out = new Set<string>();
  const groupShown = new Map<string, boolean>(
    (sheet.groups ?? []).map((g: Any) => [g.id, g.shown !== false]),
  );
  if (!groupShown.size || !items.length) return out;
  const trial = structuredClone(character);
  items.forEach((item, n) => {
    const list = ruleset.contentTypes?.[ruleset.content[item]?.type]?.carried
      ? 'inventory'
      : 'features';
    (trial[list] ??= []).push({ id: `display-trial-${n}`, item });
  });
  const s: Any = computeSheet(ruleset, trial);
  const shown = new Set<string>();
  const hidden = new Set<string>();
  for (const g of s.groups ?? [])
    for (const m of g.items ?? []) {
      const entry: string | undefined = s.activations?.[m.activation]?.entry;
      if (!entry?.startsWith('display-trial-')) continue;
      (groupShown.get(g.id) === false ? hidden : shown).add(entry);
    }
  items.forEach((item, n) => {
    const e = `display-trial-${n}`;
    if (hidden.has(e) && !shown.has(e)) out.add(item);
  });
  return out;
}
