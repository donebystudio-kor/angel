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

export type Category = "repeat" | "mirror" | "sequence" | "time" | "double" | "single" | "mixed";

export const CATEGORY_LABELS: Record<Category, string> = {
  repeat: "반복 숫자",
  mirror: "미러 넘버",
  sequence: "시퀀스 넘버",
  time: "시간 넘버",
  double: "더블 넘버",
  single: "기본 숫자",
  mixed: "혼합 숫자",
};

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
];

const seen = new Set<string>();
export const ANGEL_NUMBERS: AngelNumber[] = ALL_NUMBERS.filter((n) => {
  if (seen.has(n.number)) return false;
  seen.add(n.number);
  return true;
});
