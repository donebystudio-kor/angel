// 번호 페이지 경로·hreflang을 한 곳에서 만든다. src/config/locales.ts의 스위치가 꺼진 언어,
// 또는 그 언어에 해당 번호가 없으면 undefined — 꺼진 페이지로 가는 링크·hreflang이 생기지 않는다.
import { NUMBER_PAGES_ENABLED, LOCALE_PREFIX, type Locale } from "../config/locales";
import { ANGEL_NUMBERS } from "../data/angels";
import { hasEnAngelNumber } from "../data/angels.en";
import { hasAuthoredJaAngelNumber } from "../data/angels.ja";
import { SITE_URL } from "../site";

const KO_NUMBERS = new Set(ANGEL_NUMBERS.map((a) => a.number));

const EXISTS: Record<Locale, (n: string) => boolean> = {
  ko: (n) => KO_NUMBERS.has(n),
  en: hasEnAngelNumber,
  // JA 준비중(isPlaceholder) 페이지는 다른 언어에서 가리키지 않는다.
  ja: hasAuthoredJaAngelNumber,
};

/** `/ja/number/111` 형태. 꺼졌거나 없으면 undefined. */
export function numberPath(locale: Locale, number: string): string | undefined {
  if (!NUMBER_PAGES_ENABLED[locale] || !EXISTS[locale](number)) return undefined;
  return `${LOCALE_PREFIX[locale]}/number/${number}`;
}

/** 절대 URL. 꺼졌거나 없으면 undefined. */
export function numberUrl(locale: Locale, number: string): string | undefined {
  const p = numberPath(locale, number);
  return p && `${SITE_URL}${p}`;
}
