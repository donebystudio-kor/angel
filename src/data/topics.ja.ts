import { JA_ANGEL_NUMBERS } from "./angels.ja";
import type { JaAngelNumber } from "./angels.ja";

export type JaTopicField = "love" | "career" | "spiritual" | "twinflame" | "money";

export interface JaTopic {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  field: JaTopicField;
  numbers: string[];
}

// Same 5 slugs and number lists as topics.en.ts (numbers are language-
// neutral). Names/descriptions localized to match actual Japanese search
// terms rather than translated literally — most notably "ツインレイ", not
// "ツインフレイム" (see angel project decision log: ツインレイ is the
// dominant JP search term for twin flame).
export const JA_TOPICS: JaTopic[] = [
  {
    slug: "love",
    name: "恋愛・愛",
    emoji: "❤️",
    description: "恋愛運や運命の人との出会いについて、天使が数字に込めたメッセージ。片思い、復縁、結婚など、恋愛のあらゆる場面でエンジェルナンバーが伝える意味を紹介します。",
    field: "love",
    numbers: ["111", "222", "333", "555", "666", "1111", "1212", "1010", "69", "6", "2", "11", "22", "33", "1221", "2332", "0606"],
  },
  {
    slug: "money",
    name: "金運",
    emoji: "💰",
    description: "金運アップや豊かさを引き寄せる天使からのメッセージ。転職、投資、副業など、お金にまつわる決断をする前に、エンジェルナンバーが示すサインを確認してみましょう。",
    field: "money",
    numbers: ["888", "8888", "88", "8", "678", "789", "876", "1818", "0808", "444", "4444", "44", "1234"],
  },
  {
    slug: "career",
    name: "仕事・キャリア",
    emoji: "💼",
    description: "転職、独立、昇進などキャリアに関わる天使からのメッセージをまとめました。大事な決断を控えているとき、エンジェルナンバーがどんなサインを送っているか確認してみましょう。",
    field: "career",
    numbers: ["111", "444", "888", "1111", "1234", "123", "321", "345", "456", "4567", "1010", "1515", "31", "41", "4114"],
  },
  {
    slug: "spiritual",
    name: "スピリチュアル",
    emoji: "🔮",
    description: "スピリチュアルな目覚めや直感力の高まりについて、天使が伝えるメッセージ。瞑想中や心境の変化を感じているときは、エンジェルナンバーの精神的な意味を確認してみてください。",
    field: "spiritual",
    numbers: ["777", "7777", "77", "7", "999", "9999", "99", "9", "333", "3333", "33", "1717", "0707", "567", "37", "11", "1111"],
  },
  {
    slug: "twinflame",
    name: "ツインレイ",
    emoji: "🔥",
    description: "ツインレイとの再会・サイレント期間・魂の統合のタイミングについて、天使が伝えるメッセージ。同じ数字を繰り返し見るなら、それはツインレイの旅路に関する宇宙からのサインかもしれません。",
    field: "twinflame",
    numbers: ["11", "22", "55", "111", "222", "333", "444", "717", "1010", "1111", "1212", "1221", "1717", "2332", "400", "577", "899", "4111", "4567", "6336", "7667"],
  },
];

export function getJaTopicNumbers(slug: string): JaAngelNumber[] {
  const topic = JA_TOPICS.find((t) => t.slug === slug);
  if (!topic) return [];
  return topic.numbers
    .map((n) => JA_ANGEL_NUMBERS.find((a) => a.number === n))
    .filter((a): a is JaAngelNumber => Boolean(a));
}
