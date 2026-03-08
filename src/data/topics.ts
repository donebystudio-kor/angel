import { ANGEL_NUMBERS } from "./angels";

export interface Topic {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  field: "love" | "career" | "spiritual" | "meaning";
  numbers: string[];
}

export const TOPICS: Topic[] = [
  {
    slug: "love",
    name: "사랑과 연애",
    emoji: "❤️",
    description: "천사들이 사랑과 인연에 대해 보내는 숫자 메시지를 확인하세요. 연애, 결혼, 이별, 재회 등 관계의 모든 국면에서 엔젤넘버가 전하는 의미를 알아봅니다.",
    field: "love",
    numbers: ["111", "222", "333", "555", "666", "1111", "1212", "1010", "69", "6", "2", "11", "22", "33", "1221", "2332", "0606"],
  },
  {
    slug: "money",
    name: "금전과 재물",
    emoji: "💰",
    description: "재정적 풍요와 물질적 성공에 대한 천사의 메시지입니다. 투자, 사업, 급여 등 돈과 관련된 결정을 앞두고 있을 때 엔젤넘버의 안내를 참고하세요.",
    field: "career",
    numbers: ["888", "8888", "88", "8", "678", "789", "876", "1818", "0808", "444", "4444", "44", "1234", "168"],
  },
  {
    slug: "career",
    name: "직장과 커리어",
    emoji: "💼",
    description: "직장생활, 이직, 창업, 승진 등 커리어와 관련된 천사의 메시지를 모았습니다. 중요한 직업적 결정 앞에서 엔젤넘버가 어떤 신호를 보내는지 확인하세요.",
    field: "career",
    numbers: ["111", "444", "888", "1111", "1234", "123", "321", "345", "456", "4567", "1010", "1515", "31", "41", "4114"],
  },
  {
    slug: "spiritual",
    name: "영적 성장",
    emoji: "🔮",
    description: "영적 각성, 명상, 직관 개발 등 영혼의 성장에 대한 천사의 메시지입니다. 내면의 변화를 경험하고 있다면 엔젤넘버의 영적 의미를 확인해보세요.",
    field: "spiritual",
    numbers: ["777", "7777", "77", "7", "999", "9999", "99", "9", "333", "3333", "33", "1717", "0707", "567", "37", "11", "1111"],
  },
];

export function getTopicNumbers(slug: string) {
  const topic = TOPICS.find((t) => t.slug === slug);
  if (!topic) return [];
  return topic.numbers
    .map((n) => ANGEL_NUMBERS.find((a) => a.number === n))
    .filter(Boolean);
}
