import { EN_ANGEL_NUMBERS } from "./angels.en";
import type { EnAngelNumber } from "./angels.en";

export type EnTopicField = "love" | "career" | "spiritual" | "twinflame" | "money";

export interface EnTopic {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  field: EnTopicField;
  numbers: string[];
}

export const EN_TOPICS: EnTopic[] = [
  {
    slug: "love",
    name: "Love & Relationships",
    emoji: "❤️",
    description: "Angel numbers for love, soulmates, and relationships. Whether you're single, in a relationship, or healing from heartbreak, discover what the angels are saying about your love life.",
    field: "love",
    numbers: ["111", "222", "333", "555", "666", "1111", "1212", "1010", "69", "6", "2", "11", "22", "33", "1221", "2332", "0606"],
  },
  {
    slug: "money",
    name: "Money & Abundance",
    emoji: "💰",
    description: "Angel numbers for wealth, financial abundance, and prosperity. From investment decisions to career breakthroughs, see what the angels are signaling about your finances.",
    field: "money",
    numbers: ["888", "8888", "88", "8", "678", "789", "876", "1818", "0808", "444", "4444", "44", "1234"],
  },
  {
    slug: "career",
    name: "Career & Success",
    emoji: "💼",
    description: "Angel numbers for career growth, new opportunities, and professional success. Guidance for job changes, business decisions, promotions, and finding your true calling.",
    field: "career",
    numbers: ["111", "444", "888", "1111", "1234", "123", "321", "345", "456", "4567", "1010", "1515", "31", "41", "4114"],
  },
  {
    slug: "spiritual",
    name: "Spiritual Awakening",
    emoji: "🔮",
    description: "Angel numbers for spiritual growth, awakening, and divine guidance. Numbers that appear during meditation, prayer, and moments of inner transformation.",
    field: "spiritual",
    numbers: ["777", "7777", "77", "7", "999", "9999", "99", "9", "333", "3333", "33", "1717", "0707", "567", "37", "11", "1111"],
  },
  {
    slug: "twinflame",
    name: "Twin Flame Angel Numbers",
    emoji: "🔥",
    description: "Angel numbers for twin flame reunion, separation, and divine timing. If you keep seeing these numbers, the universe may be sending you a message about your twin flame journey.",
    field: "twinflame",
    numbers: ["11", "22", "55", "111", "222", "333", "444", "717", "1010", "1111", "1212", "1221", "1717", "2332", "400", "577", "899", "4111", "4567", "6336", "7667"],
  },
];

export function getEnTopicNumbers(slug: string): EnAngelNumber[] {
  const topic = EN_TOPICS.find((t) => t.slug === slug);
  if (!topic) return [];
  return topic.numbers
    .map((n) => EN_ANGEL_NUMBERS.find((a) => a.number === n))
    .filter((a): a is EnAngelNumber => Boolean(a));
}
