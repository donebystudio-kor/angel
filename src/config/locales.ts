// 언어별 번호 페이지(/number/N, /en/number/N, /ja/number/N) 생성 스위치.
//
// 2026-10-24 ~ 2026-11-20에 JA를 꺼서 색인 회복 여부를 봤다. 색인 수가 변하지 않아 다시 켰다
// (docs/indexing-incidents.md).
//
// false인 언어는 다음이 모두 자동으로 빠진다.
//   - 번호 페이지 생성 (세 [number].astro의 getStaticPaths가 빈 배열)
//   - 사이트맵 (sitemap-0.xml은 생성된 페이지 기준)
//   - 다른 언어 번호 페이지의 hreflang (x-default 포함)
//   - 그 언어의 홈(/ja/)과 카테고리(/ja/category/*) — 번호 목록이 전부인 페이지라 빈 페이지로
//     남기지 않고 함께 끈다. 그동안 그 언어의 입구는 가이드 목록(/ja/guide/)이다
//     (lib/numberPages의 sectionHomePath: 로고·"ホーム"·다른 언어의 언어 전환 링크가 이것을 쓴다)
//   - 링크: 헤더·푸터의 카테고리·번호 링크와 검색창은 숨기고, 가이드·about 본문의 번호 링크는 글자만 남긴다
//
// 값을 바꾸면 npm run lastmod도 돌릴 것 — lastmod.ts에서 그 언어의 번호 경로가 빠져 있을 수 있다.
export const NUMBER_PAGES_ENABLED = { ko: true, en: true, ja: true } as const;

export type Locale = keyof typeof NUMBER_PAGES_ENABLED;

export const LOCALE_PREFIX: Record<Locale, string> = { ko: "", en: "/en", ja: "/ja" };
