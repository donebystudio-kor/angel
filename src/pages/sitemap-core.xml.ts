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

// Google-only sitemap — see src/data/sitemap-core.ts. Not referenced from
// robots.txt on purpose.

function numberPaths(prefix: string, numbers: string[], existing: Set<string>): string[] {
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
    ...CORE_PATHS_EN,
    ...CORE_PATHS_JA,
    ...numberPaths("", [...KO_X111, ...KO_DOUBLE, ...TOP_NUMBERS], ko),
    ...numberPaths("/en", [...EN_X111, ...EN_DEEP, ...EN_LMC, ...TOP_NUMBERS], en),
    ...numberPaths("/ja", TOP_NUMBERS.filter((n) => ja.has(n)), ja),
  ];
  const unique = [...new Set(paths)];

  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
