// Japanese dataset for the /ja/ section. Authored entries live in
// angels-ja-core.ts (and future angels-ja-batch*.ts files), written
// natively in Japanese — never translated from KO/EN. Unlike angels.en.ts,
// this file additionally imports the number/category list from the Korean
// dataset (angels.ts) — NOT its content — purely to guarantee every KO
// angel number (521) has a /ja/ page, even before it's authored: any
// number without an authored entry falls back to an empty placeholder
// (isPlaceholder: true) generated below.
// To roll back the Japanese section entirely: delete this file,
// angels-ja-core.ts, the src/pages/ja/ directory, and the JaAngelNumber
// wiring in autoLink.ts.
import { ANGEL_NUMBERS } from "./angels";
import { JA_CORE_NUMBERS } from "./angels-ja-core";
import { JA_BATCH2_NUMBERS } from "./angels-ja-batch2";
import { JA_BATCH3_NUMBERS } from "./angels-ja-batch3";
import { JA_BATCH4_NUMBERS } from "./angels-ja-batch4";
import { JA_BATCH5_NUMBERS } from "./angels-ja-batch5";
import { JA_BATCH6_NUMBERS } from "./angels-ja-batch6";
import { JA_BATCH7_NUMBERS } from "./angels-ja-batch7";
import { JA_BATCH8_NUMBERS } from "./angels-ja-batch8";
import { JA_BATCH9_NUMBERS } from "./angels-ja-batch9";

export type JaCategory =
  | "repeat"
  | "mirror"
  | "sequence"
  | "time"
  | "double"
  | "single"
  | "mixed";

export interface JaFaqItem {
  q: string;
  a: string;
}

export interface JaAngelNumber {
  number: string;
  /**
   * Short hook for the page <title>/og:title, mirrors EnAngelNumber.titleHook.
   * The page builds the title as `エンジェルナンバー${number}の意味: ${titleHook}`.
   * Empty string is valid (Phase 2 placeholder) — the page omits the
   * ": " suffix when titleHook is empty.
   */
  titleHook: string;
  summary: string;
  meaning: string;
  love: string;
  money?: string;
  career: string;
  spiritual: string;
  action: string;
  category: JaCategory;
  faq: JaFaqItem[];
  isPlaceholder?: boolean;
  /** Japanese-only extension field: twin flame (ツインレイ) reunion/separation guidance. */
  twinflame?: string;
  /** Japanese-only extension field: manifestation / law-of-attraction angle. */
  manifestation?: string;
}

// One empty-content placeholder per KO angel number, carrying over only
// the number and the (language-neutral, pattern-based) category. Authored
// entries (JA_CORE_NUMBERS, growing batch by batch) take priority over
// their generated placeholder counterpart via the dedup below.
const JA_PLACEHOLDER_NUMBERS: JaAngelNumber[] = ANGEL_NUMBERS.map((a) => ({
  number: a.number,
  titleHook: "",
  summary: "",
  meaning: "",
  love: "",
  career: "",
  spiritual: "",
  action: "",
  category: a.category as JaCategory,
  faq: [],
  isPlaceholder: true,
}));

const JA_ALL_NUMBERS: JaAngelNumber[] = [...JA_CORE_NUMBERS, ...JA_BATCH2_NUMBERS, ...JA_BATCH3_NUMBERS, ...JA_BATCH4_NUMBERS, ...JA_BATCH5_NUMBERS, ...JA_BATCH6_NUMBERS, ...JA_BATCH7_NUMBERS, ...JA_BATCH8_NUMBERS, ...JA_BATCH9_NUMBERS, ...JA_PLACEHOLDER_NUMBERS];

const jaSeen = new Set<string>();
export const JA_ANGEL_NUMBERS: JaAngelNumber[] = JA_ALL_NUMBERS.filter((a) => {
  if (jaSeen.has(a.number)) return false;
  jaSeen.add(a.number);
  return true;
});

export function getJaAngelNumber(number: string): JaAngelNumber | undefined {
  return JA_ANGEL_NUMBERS.find((a) => a.number === number);
}

export function hasJaAngelNumber(number: string): boolean {
  return JA_ANGEL_NUMBERS.some((a) => a.number === number);
}

/**
 * True only when the /ja/ page for this number has authored content
 * (isPlaceholder: false) — used for hreflang reverse-references from KO/EN
 * pages. A KO or EN page should not point to a thin "準備中" JA shell as
 * its language alternate (same reasoning as excluding placeholders from
 * the sitemap in astro.config.mjs).
 */
export function hasAuthoredJaAngelNumber(number: string): boolean {
  const a = getJaAngelNumber(number);
  return !!a && !a.isPlaceholder;
}

/**
 * Display-only grouping for the /ja/ homepage. Identical pattern-detection
 * logic to getEnDisplayGroup in angels.en.ts (language-neutral — operates
 * purely on the digit string) — kept as a separate copy so angels.ja.ts
 * stays independently deletable, matching the isolation convention used
 * for the EN dataset.
 */
export type JaDisplayGroup =
  | "single"
  | "repeat"
  | "sequence"
  | "mirror"
  | "time"
  | "double"
  | "two_digit"
  | "three_digit"
  | "round"
  | "other";

export function getJaDisplayGroup(number: string, category?: JaCategory): JaDisplayGroup {
  const digits = number.split("");
  const n = digits.length;

  if (category === "time") return "time";
  if (category === "double") return "double";

  if (n === 1) return "single";

  if (digits.every((d) => d === digits[0])) return "repeat";

  if (n >= 3) {
    let ascending = true;
    let descending = true;
    for (let i = 1; i < n; i++) {
      if (Number(digits[i]) !== Number(digits[i - 1]) + 1) ascending = false;
      if (Number(digits[i]) !== Number(digits[i - 1]) - 1) descending = false;
    }
    if (ascending || descending) return "sequence";
  }

  if (number === digits.slice().reverse().join("")) return "mirror";

  if (n >= 4 && n % 2 === 0) {
    const half = n / 2;
    if (number.slice(0, half) === number.slice(half)) return "mirror";
    let pairedDoubles = true;
    for (let i = 0; i < n; i += 2) {
      if (digits[i] !== digits[i + 1]) pairedDoubles = false;
    }
    if (pairedDoubles) return "mirror";
  }

  if (n === 2 && !number.startsWith("0")) return "two_digit";
  if (n >= 3 && /^[1-9]0+$/.test(number)) return "round";
  if (n === 3 && !number.startsWith("0")) return "three_digit";

  return "other";
}
