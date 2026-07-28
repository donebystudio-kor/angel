// Isolated English dataset for the /en/ section. Does not import from or
// modify the Korean dataset (angels.ts / angels-*.ts) in any way.
// To roll back the English section entirely: delete this file, the
// src/pages/en/ directory, and the alternateEnUrl wiring in
// src/pages/number/[number].astro + src/layouts/Layout.astro.

import { EN_BATCH1_NUMBERS } from "./angels-en-batch1";
import { EN_BATCH2_NUMBERS } from "./angels-en-batch2";
import { EN_BATCH3_NUMBERS } from "./angels-en-batch3";
import { EN_BATCH4_NUMBERS } from "./angels-en-batch4";
import { EN_BATCH5_NUMBERS } from "./angels-en-batch5";
import { EN_BATCH6_NUMBERS } from "./angels-en-batch6";
import { EN_BATCH7_NUMBERS } from "./angels-en-batch7";
import { EN_BATCH8_NUMBERS } from "./angels-en-batch8";
import { EN_BATCH9_NUMBERS } from "./angels-en-batch9";
import { EN_BATCH10_NUMBERS } from "./angels-en-batch10";
import { EN_BATCH11_NUMBERS } from "./angels-en-batch11";
import { EN_BATCH12_NUMBERS } from "./angels-en-batch12";
import { EN_BATCH13_NUMBERS } from "./angels-en-batch13";
import { EN_BATCH14_NUMBERS } from "./angels-en-batch14";
import { EN_BATCH15_NUMBERS } from "./angels-en-batch15";
import { EN_BATCH16_NUMBERS } from "./angels-en-batch16";
import { EN_BATCH17_NUMBERS } from "./angels-en-batch17";
import { EN_BATCH18_NUMBERS } from "./angels-en-batch18";

export type EnCategory =
  | "repeat"
  | "mirror"
  | "sequence"
  | "time"
  | "double"
  | "single"
  | "mixed";

export interface EnFaqItem {
  q: string;
  a: string;
}

export interface EnAngelNumber {
  number: string;
  /**
   * Short hook for the page <title>/og:title, NOT the full title string.
   * The page builds the title as `Angel Number ${number} Meaning: ${titleHook}`.
   * Keep this to ~30 chars or less (the fixed "Angel Number N Meaning: "
   * prefix already eats ~25-27 chars, and the combined title should stay
   * under ~60 chars so it doesn't get truncated in search results).
   * One clause, no dashes/colons inside it, no repeating "Angel Number".
   */
  titleHook: string;
  summary: string;
  meaning: string;
  love: string;
  money?: string;
  career: string;
  spiritual: string;
  action: string;
  category: EnCategory;
  faq: EnFaqItem[];
  isPlaceholder?: boolean;
  /** English-only extension field: twin flame reunion/separation guidance. */
  twinflame?: string;
  /** English-only extension field: Law-of-Attraction / manifestation angle. */
  manifestation?: string;
}

// 111 is the pilot entry, kept inline here. Later tiers live in
// angels-en-batch*.ts files, following the same pattern as the Korean
// dataset (angels-core.ts + angels-batch*.ts).
export const EN_CORE_NUMBERS: EnAngelNumber[] = [
  {
    number: "111",
    titleHook: "The Manifestation Trigger",
    summary: "The manifestation trigger — your thoughts just became instructions",
    meaning:
      "111 shows up at the exact moment a thought crosses the line from idea into instruction. Numerologically it reduces to 1 (1+1+1=3, but the repeating 1 is the operative signal), the number of new cycles and raw creative force — and the triple repetition means that force is currently unfiltered. There's no buffer between what you're thinking and what starts moving in the physical world. That's the whole message: not \"something good is coming,\" but \"pay attention to what you were thinking in the second before you looked up and saw it.\" If that thought was fear, doubt, or something discouraging, treat 111 as a tap on the shoulder to redirect — not a threat, a checkpoint. If it was a goal, an idea, or a person, 111 is telling you the runway is clear.",
    love: "Single: stop vague-wishing (\"I just want someone nice\") and get specific — the qualities, the dynamic, how you want to feel next to them — because 111 responds to precision, not politeness. Vague requests get vague, slow results. In a relationship: 111 usually lands when a conversation has been avoided. Whatever you've been rehearsing in your head to say to your partner — say the real version this week, not the diluted one. The number is pointing at the gap between what you're thinking and what you're voicing.",
    money: "111 is not a lottery signal — it's a reset on your money self-talk. If your internal script has been \"I can't afford it\" or \"money is tight,\" that exact loop is what's about to get reinforced, because 111 amplifies whatever's on repeat. Swap the sentence before you do anything else: not fake positivity, just an accurate one (\"I'm building toward this\" instead of \"I'll never have this\"). Practically, this is also a good week to actually write down one specific financial target with a number attached — 111 favors specificity over hope.",
    career: "A window opens for about 24–48 hours after a 111 sighting where hesitation costs more than it usually would. If you've been sitting on an application, a pitch, a resignation letter, or a proposal, this is the signal to send it in that window rather than \"polish it more.\" 111 isn't telling you the idea is perfect — it's telling you that overthinking it further won't improve it, only delay it. If you're mid-interview-process or waiting on a response, this is also a common marker for news arriving faster than expected.",
    spiritual: "The gap between your inner world (thought, intention, prayer) and the outer world (events, people, circumstances) is thinner right now than it normally is — which is exactly why intuitive hits, coincidences, and déjà vu tend to cluster around 111 sightings. Meditation and prayer done in the hours around seeing it carry more signal than usual. This is also frequently reported alongside starting a new spiritual practice — treat 111 as validation to begin, not proof you're already \"there.\"",
    action: "Within the next 10 minutes, write down the exact thought you were having right before you noticed 111 — one sentence, no editing. That sentence is the actual message. If it's something you want, take one concrete step on it today. If it's a fear, name it on paper and then do one thing that contradicts it.",
    category: "repeat",
    faq: [
      {
        q: "Why do I keep seeing 111?",
        a: "Repeated 111 sightings almost always cluster around a specific recurring thought pattern, not a single event. It's less \"the universe has an announcement\" and more \"your dominant thought pattern just got loud enough to notice.\" Track what you're thinking about right before each sighting for a few days — a clear pattern usually shows up within 3-4 occurrences.",
      },
      {
        q: "Is 111 a warning?",
        a: "No — 111 is neutral in tone; it's an amplifier, not an alarm. It doesn't distinguish between a thought you want amplified and one you don't, so it can feel strange if you happen to notice it while you're mid-worry. The practical takeaway either way: notice the thought, and if it's not one you want reinforced, deliberately swap it for a more accurate one rather than let it keep running.",
      },
      {
        q: "What's the difference between 111 and 1111?",
        a: "111 marks the moment a single thought is about to gain traction — it's specific and immediate, usually tied to whatever crossed your mind seconds before. 1111 is broader: it tends to appear during larger life alignments (a chapter closing, a major decision window, a soul-level shift) rather than one isolated thought. If 111 is a single instruction, 1111 is closer to a full-page memo.",
      },
      {
        q: "I keep seeing 111 but nothing is happening — why?",
        a: "Two common causes: first, the shift is often internal before it's external (a mindset or decision has already changed, even if circumstances haven't caught up yet — give it 1-2 weeks). Second, and more often overlooked: you may be seeing 111 while your thinking had drifted toward worry rather than toward what you actually want, in which case \"nothing happening\" is the number doing its job, not amplifying a thought you don't actually want to manifest. Check which thought you were having, not just what you were hoping for.",
      },
    ],
    isPlaceholder: false,
    twinflame:
      "For twin flames in the reunion phase, 111 typically shows up right before contact resumes — a message, a mutual friend mentioning them, or an unplanned run-in, often within days. It signals the timing is aligning on both sides, not just yours. For twin flames currently in separation, 111 means something different: it's a prompt to work on yourself independently of the outcome, because the separation phase is designed to get both people to a version of themselves that can sustain reunion — chasing contact right now typically extends the separation rather than shortening it. The distinction that actually matters: 111 during separation is about your own next thought and next action, not about them.",
    manifestation:
      "111 is the clearest manifestation marker in numerology because it corresponds to the shift from thought-form to physical-form — the Law of Attraction idea that a thought held with enough clarity and emotional charge starts to organize matching circumstances around it. The practical technique worth using here (borrowed from the Abraham-Hicks \"17-second rule\"): hold the specific thing you want in mind, distraction-free, for 17 straight seconds. That's roughly the threshold at which a thought starts pulling in matching thoughts rather than dissolving. Seeing 111 while doing this — or right after — is typically read as confirmation the process is working, not a coincidence to dismiss.",
  },
];

const EN_ALL_NUMBERS: EnAngelNumber[] = [...EN_CORE_NUMBERS, ...EN_BATCH1_NUMBERS, ...EN_BATCH2_NUMBERS, ...EN_BATCH3_NUMBERS, ...EN_BATCH4_NUMBERS, ...EN_BATCH5_NUMBERS, ...EN_BATCH6_NUMBERS, ...EN_BATCH7_NUMBERS, ...EN_BATCH8_NUMBERS, ...EN_BATCH9_NUMBERS, ...EN_BATCH10_NUMBERS, ...EN_BATCH11_NUMBERS, ...EN_BATCH12_NUMBERS, ...EN_BATCH13_NUMBERS, ...EN_BATCH14_NUMBERS, ...EN_BATCH15_NUMBERS, ...EN_BATCH16_NUMBERS, ...EN_BATCH17_NUMBERS, ...EN_BATCH18_NUMBERS];

const enSeen = new Set<string>();
export const EN_ANGEL_NUMBERS: EnAngelNumber[] = EN_ALL_NUMBERS.filter((n) => {
  if (enSeen.has(n.number)) return false;
  enSeen.add(n.number);
  return true;
});

export function getEnAngelNumber(number: string): EnAngelNumber | undefined {
  return EN_ANGEL_NUMBERS.find((a) => a.number === number);
}

export function hasEnAngelNumber(number: string): boolean {
  return EN_ANGEL_NUMBERS.some((a) => a.number === number);
}

/**
 * Display-only grouping for the /en/ homepage. Derived purely from the
 * number's digit pattern — NOT from the stored `category` field above,
 * which is inherited from the Korean dataset's classification and isn't
 * reliable for this purpose (e.g. 717/747/1212/2020 are stored as
 * "mixed"/"time" but read visually as mirror/symmetric numbers).
 *
 * This keeps grouping automatic and correct for every number added in
 * the future, without needing to touch any number's actual content data.
 *
 * Priority when a number could fit more than one bucket: repeat >
 * sequence > mirror > single > other.
 */
export type EnDisplayGroup = "single" | "repeat" | "sequence" | "mirror" | "other";

export function getEnDisplayGroup(number: string): EnDisplayGroup {
  const digits = number.split("");
  const n = digits.length;

  if (n === 1) return "single";

  // Repeating: every digit identical (000, 111, 2222, 11, 88888, ...)
  if (digits.every((d) => d === digits[0])) return "repeat";

  // Sequence: strictly ascending or descending by 1 (123, 234, 432, 654, 1234, ...)
  if (n >= 3) {
    let ascending = true;
    let descending = true;
    for (let i = 1; i < n; i++) {
      if (Number(digits[i]) !== Number(digits[i - 1]) + 1) ascending = false;
      if (Number(digits[i]) !== Number(digits[i - 1]) - 1) descending = false;
    }
    if (ascending || descending) return "sequence";
  }

  // Mirror: reads the same forwards and backwards (717, 747, 1221, 2002, 3113, ...)
  if (number === digits.slice().reverse().join("")) return "mirror";

  if (n >= 4 && n % 2 === 0) {
    const half = n / 2;
    // Mirror: a two-digit (or longer) block repeats as-is — AB-AB (1010, 1212, 1313, 2020, ...)
    if (number.slice(0, half) === number.slice(half)) return "mirror";
    // Mirror: paired-digit doubling — AABB (1122, 3344, ...)
    let pairedDoubles = true;
    for (let i = 0; i < n; i += 2) {
      if (digits[i] !== digits[i + 1]) pairedDoubles = false;
    }
    if (pairedDoubles) return "mirror";
  }

  return "other";
}
