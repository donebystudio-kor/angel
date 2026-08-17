/**
 * autoLink.ts
 * Inline auto-linking of angel number references in meaning/FAQ text.
 *
 * Rules:
 * - 2-5 digit numbers only (\d{2,5}) — single digits excluded (too noisy).
 * - Skip the current page's own number (no self-links).
 * - Only link numbers that exist in the language-specific valid Set (no 404s).
 * - Skip numbers followed by unit/quantity words (times, minutes, %, 년, …).
 * - meaning section: link any valid referenced number (unit-word filter applies).
 * - FAQ answers: only link numbers appearing inside comparison sentences
 *   (sentences containing keywords like "difference", "vs", "다른가", etc.).
 * - Shared counter across meaning + FAQ; max 8 links per page.
 */

export interface LinkCounter {
  count: number;
  readonly max: number;
}

export function makeCounter(max = 8): LinkCounter {
  return { count: 0, max };
}

// ── Patterns ─────────────────────────────────────────────────────

/** Matches 2-5 digit number sequences (including leading zeros like 0022). */
const NUM_RE = /\b(\d{2,5})\b/g;

/**
 * If text immediately following the number starts with these patterns,
 * the number is a quantity/unit, not an angel number reference.
 */
const UNIT_AFTER_RE =
  /^(?:st|nd|rd|th|[-\/]\d|\s*(?:times?|minutes?|hours?|days?|weeks?|months?|years?|%|개|분|시간|일|주|개월|년|번|회|명|개월간|일간|個|分間|時間|日間|週間|ヶ月|カ月|年間|回|人|才|歳)\b)/i;

/** EN comparison sentence keywords. */
const EN_COMPARISON_RE =
  /\b(?:difference|vs\.?|versus|compared?\s+to|unlike|similar|instead\s+of|rather\s+than|think\s+of|not\s+a|not\s+the\s+same)\b/i;

/** KO comparison sentence keywords. */
const KO_COMPARISON_RE =
  /차이|다른가|다르[게냐]|비교|에\s*비해|보다\s*(?:더|덜)|반면|대신|와\s*달리|과\s*달리/;

/** JA comparison sentence keywords. */
const JA_COMPARISON_RE =
  /違い|とは違|比較|に対して|より(?:も)?|一方|代わりに|似てい|ではなく/;

// ── Core linker ───────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function makeLink(num: string, baseUrl: string): string {
  return `<a href="${baseUrl}${num}" class="text-angel-primary hover:text-angel-accent underline decoration-dotted transition-colors">${num}</a>`;
}

/**
 * Core: walks through text, escaping HTML and replacing eligible number
 * tokens with anchor links. Mutates counter.count.
 */
function applyLinks(
  text: string,
  currentNum: string,
  validSet: Set<string>,
  baseUrl: string,
  counter: LinkCounter,
): string {
  const regex = new RegExp(NUM_RE.source, "g");
  let result = "";
  let lastIdx = 0;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(text)) !== null) {
    const num = m[1];
    const offset = m.index;

    // Append escaped text before this token
    result += escapeHtml(text.slice(lastIdx, offset));
    lastIdx = offset + m[0].length;

    const afterText = text.slice(lastIdx);

    if (
      counter.count < counter.max &&
      num !== currentNum &&
      validSet.has(num) &&
      !UNIT_AFTER_RE.test(afterText)
    ) {
      result += makeLink(num, baseUrl);
      counter.count++;
    } else {
      result += escapeHtml(num);
    }
  }

  result += escapeHtml(text.slice(lastIdx));
  return result;
}

// ── Public API ────────────────────────────────────────────────────

/**
 * Link angel numbers referenced in the `meaning` section.
 * Any valid 2-5 digit number (unit-word filter applies).
 */
export function linkMeaning(
  text: string,
  currentNum: string,
  validSet: Set<string>,
  baseUrl: string,
  counter: LinkCounter,
): string {
  if (counter.count >= counter.max) return escapeHtml(text);
  return applyLinks(text, currentNum, validSet, baseUrl, counter);
}

/**
 * Link angel numbers in a FAQ answer, but ONLY inside comparison sentences.
 * A sentence qualifies if it (or the associated question) contains EN or KO
 * comparison keywords. Passing questionText allows "What's the difference
 * between X and Y?" style questions to unlock linking in all answer sentences.
 */
export function linkFaqAnswer(
  text: string,
  currentNum: string,
  validSet: Set<string>,
  baseUrl: string,
  counter: LinkCounter,
  questionText = "",
): string {
  if (counter.count >= counter.max) return escapeHtml(text);

  const compRe = baseUrl.startsWith("/ja/")
    ? JA_COMPARISON_RE
    : baseUrl.startsWith("/en/")
      ? EN_COMPARISON_RE
      : KO_COMPARISON_RE;

  // If the question itself is a comparison question, link all answer sentences
  const questionIsComparison = questionText !== "" && compRe.test(questionText);

  // Split into sentences; preserve the delimiter character
  const parts = text.split(/(?<=[.?!])\s+/);

  return parts
    .map((sentence) => {
      if (questionIsComparison || compRe.test(sentence)) {
        return applyLinks(sentence, currentNum, validSet, baseUrl, counter);
      }
      return escapeHtml(sentence);
    })
    .join(" ");
}
