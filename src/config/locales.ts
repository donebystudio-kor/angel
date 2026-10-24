// 언어별 번호 페이지(/number/N, /en/number/N, /ja/number/N) 생성 스위치.
//
// 2026-10-24 JA 끔. 서치콘솔에서 2026-08-18에 미색인 페이지가 하루 만에 1,078 → 1,620(+542)으로
// 늘었다. 2026-08-17 밤에 JA 번호 페이지 521개가 빈 껍데기로 한꺼번에 배포된 직후다. 그 뒤
// 색인 페이지가 51 → 21 → 8로, 일일 노출이 39 → 1로 떨어졌다. 대량 생성된 다국어 번호 페이지가
// 사이트 전체 평가를 끌어내린 것으로 보고, 잃을 것이 가장 적은 JA부터 빼서 확인한다.
// 데이터(src/data/angels.ja*.ts)는 그대로 있다. JA 홈·가이드·about·카테고리 같은 번호가 아닌
// 페이지는 남긴다.
//
// false인 언어는 다음이 모두 자동으로 빠진다.
//   - 번호 페이지 생성 (세 [number].astro의 getStaticPaths가 빈 배열)
//   - 두 사이트맵 (sitemap-0.xml은 생성된 페이지 기준, sitemap-core.xml은 이 값을 본다)
//   - 다른 언어 번호 페이지의 hreflang (x-default 포함)
//   - 링크: 홈·카테고리·가이드·about·푸터의 번호 링크는 글자만 남고, 검색창은 숨긴다
//
// 되돌리기: 아래 값을 true로 바꾸고 배포. (켤 때는 npm run lastmod도 돌릴 것 —
// lastmod.ts에서 그 언어의 번호 경로가 빠져 있을 수 있다.)
export const NUMBER_PAGES_ENABLED = { ko: true, en: true, ja: false } as const;

export type Locale = keyof typeof NUMBER_PAGES_ENABLED;

export const LOCALE_PREFIX: Record<Locale, string> = { ko: "", en: "/en", ja: "/ja" };
