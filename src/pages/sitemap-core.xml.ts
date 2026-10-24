import type { APIRoute } from "astro";
import { SITE_URL } from "../site";
import { ANGEL_NUMBERS } from "../data/angels";
import { EN_ANGEL_NUMBERS } from "../data/angels.en";
import { JA_ANGEL_NUMBERS } from "../data/angels.ja";
import {
  CORE_PATHS_KO,
  CORE_PATHS_EN,
  CORE_PATHS_JA,
  EN_X111,
  EN_DEEP,
  EN_LMC,
  KO_X111,
  KO_DOUBLE,
  TOP_NUMBERS,
} from "../data/sitemap-core";
import { LASTMOD } from "../data/lastmod";
import { NUMBER_PAGES_ENABLED, LOCALE_PREFIX, type Locale } from "../config/locales";

// Google-only sitemap — see src/data/sitemap-core.ts. Not referenced from
// robots.txt on purpose.

// 꺼진 언어는 홈(/ja/ 등)도 생성되지 않는다 — 번호 목록뿐인 페이지라 함께 끈다
const hubPaths = (locale: Locale, paths: string[]) =>
  NUMBER_PAGES_ENABLED[locale] ? paths : paths.filter((p) => p !== `${LOCALE_PREFIX[locale]}/`);

function numberPaths(locale: Locale, prefix: string, numbers: string[], existing: Set<string>): string[] {
  // 꺼진 언어의 번호 페이지는 생성되지 않는다 (src/config/locales.ts)
  if (!NUMBER_PAGES_ENABLED[locale]) return [];
  const missing = numbers.filter((n) => !existing.has(n));
  if (missing.length) {
    throw new Error(`sitemap-core: no ${prefix || "/"} page for ${missing.join(", ")}`);
  }
  return numbers.map((n) => `${prefix}/number/${n}/`);
}

export const GET: APIRoute = () => {
  const ko = new Set(ANGEL_NUMBERS.map((a) => a.number));
  const en = new Set(EN_ANGEL_NUMBERS.map((a) => a.number));
  // JA placeholders are already kept out of the main sitemap; skip them here too.
  const ja = new Set(JA_ANGEL_NUMBERS.filter((a) => !a.isPlaceholder).map((a) => a.number));

  const paths = [
    ...CORE_PATHS_KO,
    ...hubPaths("en", CORE_PATHS_EN),
    ...hubPaths("ja", CORE_PATHS_JA),
    ...numberPaths("ko", "", [...KO_X111, ...KO_DOUBLE, ...TOP_NUMBERS], ko),
    ...numberPaths("en", "/en", [...EN_X111, ...EN_DEEP, ...EN_LMC, ...TOP_NUMBERS], en),
    ...numberPaths("ja", "/ja", TOP_NUMBERS.filter((n) => ja.has(n)), ja),
  ];
  const unique = [...new Set(paths)];

  // 전체 사이트맵과 같은 날짜 (scripts/gen-lastmod.mjs). 없으면 빌드 실패 — 구글용은 목록이 작아 누락을 바로 고친다.
  const missingLastmod = unique.filter((p) => !LASTMOD[p]);
  if (missingLastmod.length) {
    throw new Error(`sitemap-core: no lastmod for ${missingLastmod.join(", ")} — run npm run lastmod`);
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${LASTMOD[p]}</lastmod></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
