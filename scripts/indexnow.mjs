/**
 * indexnow.mjs — IndexNow bulk URL submission
 *
 * 대상: Bing · Yandex · Naver 등 IndexNow 지원 엔진
 * 주의: 구글은 IndexNow 미지원 — 이 스크립트와 무관.
 *
 * 사용법:
 *   npm run indexnow            실제 제출
 *   npm run indexnow -- --dry-run  제출 없이 예정 URL 수만 출력
 *
 * 권장: 콘텐츠 배포(twinflame 배치 등) 후 수동 실행.
 * 과제출 방지: 마지막 제출로부터 1시간 미만이면 실행 거부.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT   = resolve(__dir, '..');

// ── 설정 ─────────────────────────────────────────────────────────
const KEY          = '20597918a1d547699adf7a8861fc3656';
const HOST         = 'angeldone.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT     = 'https://api.indexnow.org/indexnow';
const SITEMAP_PATH = resolve(ROOT, 'dist/sitemap-0.xml');
const GUARD_PATH   = resolve(ROOT, '.indexnow-last.json');
const COOLDOWN_MS  = 60 * 60 * 1000; // 1시간

// ── 인자 파싱 ────────────────────────────────────────────────────
const isDryRun = process.argv.includes('--dry-run');

// ── 쿨다운 가드 ──────────────────────────────────────────────────
if (!isDryRun && existsSync(GUARD_PATH)) {
  const { lastSubmit } = JSON.parse(readFileSync(GUARD_PATH, 'utf8'));
  const elapsed = Date.now() - lastSubmit;
  if (elapsed < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 60000);
    console.error(`[IndexNow] 쿨다운 중 — ${remaining}분 후 재실행 가능.`);
    console.error('           강제 실행하려면 .indexnow-last.json 을 삭제하세요.');
    process.exit(1);
  }
}

// ── sitemap 파싱 ─────────────────────────────────────────────────
if (!existsSync(SITEMAP_PATH)) {
  console.error('[IndexNow] dist/sitemap-0.xml 없음 — 먼저 npm run build 실행.');
  process.exit(1);
}

const xml  = readFileSync(SITEMAP_PATH, 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

// 분류 통계 (dry-run 확인용)
const koNumbers  = urls.filter(u => /\/number\/[^/]+\/$/.test(u) && !u.includes('/en/'));
const enNumbers  = urls.filter(u => u.includes('/en/number/'));
const others     = urls.filter(u => !u.includes('/number/'));

console.log('[IndexNow] URL 분류:');
console.log(`  KO /number/   : ${koNumbers.length}`);
console.log(`  EN /en/number/: ${enNumbers.length}`);
console.log(`   기타(카테고리/가이드 등): ${others.length}`);
console.log(`  합계          : ${urls.length}`);
console.log(`[IndexNow] 엔드포인트: ${ENDPOINT}`);
console.log(`[IndexNow] 키 파일  : ${KEY_LOCATION}`);

if (isDryRun) {
  console.log('\n[DRY-RUN] 실제 제출하지 않음. --dry-run 플래그 제거 후 재실행하면 제출됩니다.');
  process.exit(0);
}

// ── 실제 제출 ────────────────────────────────────────────────────
const body = JSON.stringify({
  host:        HOST,
  key:         KEY,
  keyLocation: KEY_LOCATION,
  urlList:     urls,
});

console.log(`\n[IndexNow] ${urls.length}개 URL 제출 중...`);

let res;
try {
  res = await fetch(ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
} catch (err) {
  console.error('[IndexNow] 네트워크 오류:', err.message);
  process.exit(1);
}

// ── 응답 처리 ────────────────────────────────────────────────────
const status = res.status;
const text   = await res.text().catch(() => '');

if (status === 200 || status === 202) {
  console.log(`[IndexNow] ✅ 성공 — HTTP ${status}`);
  console.log(`           제출 URL 수: ${urls.length}`);
  if (text) console.log('           응답:', text.slice(0, 200));
  // 가드 갱신
  writeFileSync(GUARD_PATH, JSON.stringify({ lastSubmit: Date.now(), count: urls.length }));
} else if (status === 400) {
  console.error('[IndexNow] ❌ 400 Bad Request — URL 형식 오류 또는 필수 필드 누락.');
  console.error('           응답:', text.slice(0, 300));
  process.exit(1);
} else if (status === 403) {
  console.error('[IndexNow] ❌ 403 Forbidden — 키 파일 불일치 또는 키 파일 미접근.');
  console.error(`           ${KEY_LOCATION} 가 외부에서 접근 가능한지 확인하세요.`);
  console.error('           응답:', text.slice(0, 300));
  process.exit(1);
} else if (status === 422) {
  console.error('[IndexNow] ❌ 422 Unprocessable — URL이 키 파일 도메인과 불일치.');
  console.error('           응답:', text.slice(0, 300));
  process.exit(1);
} else if (status === 429) {
  console.error('[IndexNow] ❌ 429 Too Many Requests — 과제출. 내일 다시 시도.');
  process.exit(1);
} else {
  console.error(`[IndexNow] ❌ HTTP ${status} — 예상치 못한 응답.`);
  console.error('           응답:', text.slice(0, 300));
  process.exit(1);
}
