/**
 * relatedNumbers.ts
 * Select up to 3 related angel numbers for the "Related Numbers" panel.
 *
 * Priority order (each candidate must exist in the language-specific validSet):
 *  1. Shortened forms: remove trailing digits one by one (e.g. 2222 → 222 → 22)
 *  2. Extended form: append last digit (e.g. 222 → 2222)
 *  3. Numeric neighbors: ±1, ±10, ±11 (as plain strings, no leading zeros)
 */
export function getRelatedNumbers(
  num: string,
  validSet: Set<string>,
  count = 3,
): string[] {
  const results: string[] = [];
  const seen = new Set([num]);

  const tryAdd = (candidate: string) => {
    if (
      results.length < count &&
      candidate.length > 0 &&
      !seen.has(candidate) &&
      validSet.has(candidate)
    ) {
      results.push(candidate);
      seen.add(candidate);
    }
  };

  // 1. Shortened forms (remove 1 then 2 trailing chars)
  for (let trim = 1; trim < num.length; trim++) {
    if (results.length >= count) break;
    tryAdd(num.slice(0, -trim));
  }

  // 2. Extended form (repeat last character)
  tryAdd(num + num[num.length - 1]);

  // 3. Numeric neighbors
  const n = parseInt(num, 10);
  if (!isNaN(n) && n > 0) {
    for (const delta of [1, -1, 10, -10, 11, -11]) {
      if (results.length >= count) break;
      const c = n + delta;
      if (c > 0) tryAdd(String(c));
    }
  }

  return results;
}
