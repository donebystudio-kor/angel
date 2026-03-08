# 엔젤던 작업 기록

## 프로젝트 개요
- 엔젤넘버 정보 사이트 (한국어)
- URL: https://angel-sandy-five.vercel.app
- 기술: Astro 5 SSG + Tailwind v4
- 총 290페이지 (271개 엔젤넘버 + 카테고리/가이드/검색 등)

## 완료된 작업 (2026-03-08 ~ 03-09)

### 1. GA 트래킹 추가
- `src/layouts/Layout.astro`에 Google Analytics ID `G-46Z6P1GDG5` 추가
- AdSense `ca-pub-7048160642416104` 이미 적용됨

### 2. 플레이스홀더 → 실제 콘텐츠 전환 (핵심 작업)
- **기존**: `angels.ts`에 `ph()` 헬퍼로 191개 플레이스홀더 (money 빈 문자열, FAQ 없음, isPlaceholder: true)
- **변경**: 8개 배치 파일로 191개 전체를 상세 콘텐츠로 교체

#### 배치 파일 구성
| 파일 | 엔트리 수 | 범위 |
|------|-----------|------|
| `angels-batch1.ts` | 20개 | 10~31 (mixed) |
| `angels-batch2.ts` | 25개 | 32~59 (mixed) |
| `angels-batch3.ts` | 32개 | 60~98 (mixed) |
| `angels-batch4a.ts` | 27개 | 100~129 (mixed) |
| `angels-batch4b.ts` | 28개 | 130~150 + 200~900 (mixed) |
| `angels-batch5a.ts` | 21개 | 미러 넘버 (1001~5335) |
| `angels-batch5b.ts` | 22개 | 시퀀스 + 더블 (234~1357, 0202~0909) |
| `angels-batch6.ts` | 16개 | 천 단위 + 5자리 반복 + 특수 |
| **합계** | **191개** | |

### 3. angels.ts 리팩토링
- `ph()` 함수, `EXTENDED_NUMBERS` 배열 제거
- 8개 배치 파일 import 방식으로 전환
- dedup 로직: CORE_NUMBERS 우선 (먼저 등장한 number 유지)

### 4. 데이터 구조
- `angels-core.ts`: 80개 상세 엔트리 (수정 금지)
- `angels-batch*.ts`: 191개 신규 상세 엔트리
- `angels.ts`: import + merge + dedup + export
- 총 271개 고유 엔젤넘버

## 각 엔트리 필드
```typescript
interface AngelNumber {
  number: string;      // "111", "0202" 등
  title: string;       // "엔젤넘버 111"
  summary: string;     // 한 줄 요약
  meaning: string;     // 상세 의미 (2~3문장)
  love: string;        // 사랑 해석
  money: string;       // 재물 해석 (빈 문자열 X)
  career: string;      // 커리어 해석
  spiritual: string;   // 영적 해석
  action: string;      // 실천 가이드
  category: string;    // "repeat"|"mirror"|"sequence"|"time"|"double"|"single"|"mixed"
  faq: { q: string; a: string }[];  // 2개 이상
  isPlaceholder?: boolean;           // false 또는 없음
}
```

## 핵심 파일 경로
- `src/data/angels.ts` - 메인 데이터 (import + merge)
- `src/data/angels-core.ts` - 80개 core (수정 금지)
- `src/data/angels-batch[1-6].ts` - 191개 배치
- `src/layouts/Layout.astro` - 공통 레이아웃
- `src/pages/number/[number].astro` - 상세 페이지
- `src/pages/index.astro` - 홈
- `src/data/topics.ts` - 4개 토픽 카테고리
- `vercel.json` - sitemap 리다이렉트

## 다른 PC에서 작업 시
```bash
git clone https://github.com/donebystudio-kor/angel.git
cd angel
npm install
npm run dev    # 로컬 개발
npm run build  # 빌드 확인
```
