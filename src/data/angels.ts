import { CORE_NUMBERS } from "./angels-core";
import { BATCH1_NUMBERS } from "./angels-batch1";
import { BATCH2_NUMBERS } from "./angels-batch2";
import { BATCH3_NUMBERS } from "./angels-batch3";
import { BATCH4A_NUMBERS } from "./angels-batch4a";
import { BATCH4B_NUMBERS } from "./angels-batch4b";
import { BATCH5A_NUMBERS } from "./angels-batch5a";
import { BATCH5B_NUMBERS } from "./angels-batch5b";
import { BATCH6_NUMBERS } from "./angels-batch6";
import { BATCH7A_NUMBERS } from "./angels-batch7a";
import { BATCH7B_NUMBERS } from "./angels-batch7b";
import { BATCH7C_NUMBERS } from "./angels-batch7c";
import { BATCH8A_NUMBERS } from "./angels-batch8a";
import { BATCH8B_NUMBERS } from "./angels-batch8b";
import { BATCH8C_NUMBERS } from "./angels-batch8c";
import { BATCH8D_NUMBERS } from "./angels-batch8d";
import { BATCH9A_NUMBERS } from "./angels-batch9a";
import { BATCH9B_NUMBERS } from "./angels-batch9b";
import { BATCH9C_NUMBERS } from "./angels-batch9c";
import { BATCH9D_NUMBERS } from "./angels-batch9d";
import { BATCH10A_NUMBERS } from "./angels-batch10a";
import { BATCH10B_NUMBERS } from "./angels-batch10b";
import { BATCH10C_NUMBERS } from "./angels-batch10c";
import { BATCH10D_NUMBERS } from "./angels-batch10d";
import { BATCH11_NUMBERS } from "./angels-batch11";

export interface AngelNumber {
  number: string;
  title: string;
  summary: string;
  meaning: string;
  love: string;
  money: string;
  career: string;
  spiritual: string;
  action: string;
  category: string;
  faq: { q: string; a: string }[];
  isPlaceholder?: boolean;
  [key: string]: any;
}

export type Category = "repeat" | "mirror" | "sequence" | "time" | "double" | "single" | "mixed" | "two_digit" | "three_digit" | "round";

export const CATEGORY_LABELS: Record<Category, string> = {
  repeat: "반복 숫자",
  mirror: "미러 넘버",
  sequence: "시퀀스 넘버",
  time: "시간 넘버",
  double: "더블 넘버",
  single: "기본 숫자",
  mixed: "혼합 숫자",
  two_digit: "두 자리 숫자",
  three_digit: "세 자리 숫자",
  round: "라운드 넘버",
};

/**
 * Derives a display sub-category for numbers stored as "mixed".
 * two_digit: 2-char, not 0-prefixed
 * round: 3+ chars matching /^[1-9]0+$/
 * three_digit: 3-char, not 0-prefixed, not round
 * Falls back to "mixed" for anything else.
 */
export function getMixedSubcategory(number: string): "two_digit" | "three_digit" | "round" | "mixed" {
  const n = number.length;
  if (n === 2 && !number.startsWith("0")) return "two_digit";
  if (n >= 3 && /^[1-9]0+$/.test(number)) return "round";
  if (n === 3 && !number.startsWith("0")) return "three_digit";
  return "mixed";
}

// 모든 숫자 합치기 (CORE가 우선순위 — 먼저 등장한 number가 유지됨)
const ALL_NUMBERS: AngelNumber[] = [
  ...CORE_NUMBERS,
  ...BATCH1_NUMBERS,
  ...BATCH2_NUMBERS,
  ...BATCH3_NUMBERS,
  ...BATCH4A_NUMBERS,
  ...BATCH4B_NUMBERS,
  ...BATCH5A_NUMBERS,
  ...BATCH5B_NUMBERS,
  ...BATCH6_NUMBERS,
  ...BATCH7A_NUMBERS,
  ...BATCH7B_NUMBERS,
  ...BATCH7C_NUMBERS,
  ...BATCH8A_NUMBERS,
  ...BATCH8B_NUMBERS,
  ...BATCH8C_NUMBERS,
  ...BATCH8D_NUMBERS,
  ...BATCH9A_NUMBERS,
  ...BATCH9B_NUMBERS,
  ...BATCH9C_NUMBERS,
  ...BATCH9D_NUMBERS,
  ...BATCH10A_NUMBERS,
  ...BATCH10B_NUMBERS,
  ...BATCH10C_NUMBERS,
  ...BATCH10D_NUMBERS,
  ...BATCH11_NUMBERS,
];

const seen = new Set<string>();
export const ANGEL_NUMBERS: AngelNumber[] = ALL_NUMBERS.filter((n) => {
  if (seen.has(n.number)) return false;
  seen.add(n.number);
  return true;
});
