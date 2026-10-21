/**
 * gen-lastmod.mjs — sitemap lastmod 생성 (sitemap-index/sitemap-0.xml, sitemap-core.xml 공용)
 *
 * 번호 페이지: 그 번호 항목이 들어 있는 데이터 파일의 줄 범위를 git blame해서, 범위 안
 *   줄들의 가장 늦은 커밋 시각. 한 파일에 번호 수십 개가 있으므로 파일이 아니라 항목 단위로 본다.
 *   같은 번호가 여러 파일에 있으면 angels*.ts의 병합 순서상 먼저 나오는 쪽(실제로 쓰이는 쪽).
 * 목록 페이지(홈, 카테고리): 페이지 소스 파일의 마지막 커밋과, 그 페이지가 나열하는 번호들의
 *   날짜 중 가장 늦은 것. 나열 번호는 빌드된 HTML의 링크로 구하고, 모든 페이지에 붙는 공통
 *   메뉴 링크(같은 언어 about 페이지에도 있는 링크)는 뺀다.
 * 나머지(가이드, about 등): 페이지 소스 파일의 마지막 커밋.
 *
 * 사용법: 콘텐츠를 커밋한 뒤 `npm run lastmod` (빌드 → 이 스크립트) → src/data/lastmod.ts 커밋.
 * Vercel 빌드는 얕은 clone이라 빌드 중에 git을 읽지 않고, 이 스크립트가 만든 파일을 쓴다.
 */

import { execFileSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });

// 파일의 줄마다 [커밋 시각(ms), 줄 내용]
function blame(file) {
  const lines = [];
  let time = 0;
  for (const l of git('blame', '--line-porcelain', '--', file).split('\n')) {
    if (l.startsWith('committer-time ')) time = Number(l.slice(15)) * 1000;
    else if (l.startsWith('\t')) lines.push([time, l.slice(1)]);
  }
  return lines;
}

const fileTime = (file) => Number(git('log', '-1', '--format=%ct', '--', file).trim()) * 1000;

// 병합 파일에서 데이터 파일 순서를 읽는다: import 이름 → 파일, 배열 펼침(...NAME) 순서
function orderedDataFiles(mergeFile) {
  const src = readFileSync(resolve(ROOT, mergeFile), 'utf8');
  const fileOf = {};
  for (const m of src.matchAll(/import\s*\{\s*(\w+)\s*\}\s*from\s*"\.\/([^"]+)"/g)) fileOf[m[1]] = `src/data/${m[2]}.ts`;
  // 병합 파일 안에 직접 정의된 배열(예: EN_CORE_NUMBERS)은 병합 파일 자신을 본다
  for (const m of src.matchAll(/(?:export\s+)?const\s+(\w+)\s*:\s*\w+\[\]\s*=\s*\[/g)) fileOf[m[1]] ??= mergeFile;
  const order = [...new Set([...src.matchAll(/\.\.\.(\w+)/g)].map((m) => fileOf[m[1]]).filter(Boolean))];
  if (!order.length) throw new Error(`no data files found in ${mergeFile}`);
  return order;
}

// 번호 → 날짜. 항목 범위 = 'number: "N"' 줄(앞 줄이 '{'면 그 줄부터) ~ 다음 항목 직전
function numberDates(mergeFile) {
  const dates = {};
  for (const file of orderedDataFiles(mergeFile)) {
    const lines = blame(file);
    const starts = [];
    lines.forEach(([, text], i) => {
      const m = text.match(/^\s*(?:\{\s*)?number:\s*"([^"]+)"/);
      if (m) starts.push([lines[i - 1]?.[1].trim() === '{' ? i - 1 : i, m[1]]);
    });
    starts.forEach(([start, num], k) => {
      if (num in dates) return; // 먼저 병합된 파일이 실제로 쓰인다
      const end = k + 1 < starts.length ? starts[k + 1][0] : lines.length;
      dates[num] = Math.max(...lines.slice(start, end).map(([t]) => t));
    });
  }
  return dates;
}

const NUM = {
  '': numberDates('src/data/angels.ts'),
  '/en': numberDates('src/data/angels.en.ts'),
  '/ja': numberDates('src/data/angels.ja.ts'),
};

// 페이지 경로 → 소스 파일 (정적 파일 우선, 없으면 같은 폴더의 동적 라우트)
function sourceOf(path) {
  const p = path.replace(/\/$/, '');
  for (const c of [`src/pages${p}/index.astro`, `src/pages${p}.astro`]) if (existsSync(resolve(ROOT, c))) return c;
  const dir = p.slice(0, p.lastIndexOf('/'));
  const dyn = execFileSync('git', ['ls-files', `src/pages${dir}/`], { cwd: ROOT, encoding: 'utf8' })
    .split('\n').filter((f) => /\/\[[^/]+\]\.astro$/.test(f) && dirname(f) === `src/pages${dir}`);
  if (dyn.length === 1) return dyn[0];
  throw new Error(`no source for ${path}`);
}

const htmlOf = (path) => readFileSync(resolve(DIST, `.${path}`, 'index.html'), 'utf8');
const linkedNumbers = (path) => new Set([...htmlOf(path).matchAll(/href="(?:\/(en|ja))?\/number\/([^"/?#]+)/g)].map((m) => m[2]));
const langOf = (path) => (path.startsWith('/en/') ? '/en' : path.startsWith('/ja/') ? '/ja' : '');
const NAV = Object.fromEntries(['', '/en', '/ja'].map((l) => [l, linkedNumbers(`${l}/about/`)]));
const isListing = (path) => ['/', '/en/', '/ja/'].includes(path) || path.includes('/category/');

if (!existsSync(resolve(DIST, 'sitemap-0.xml'))) throw new Error('dist/sitemap-0.xml이 없습니다. 먼저 빌드하세요 (npm run lastmod는 빌드를 포함).');
const SITE = readFileSync(resolve(ROOT, 'src/site.ts'), 'utf8').match(/https?:\/\/[^"'`]+/)[0].replace(/\/$/, '');
const paths = [...readFileSync(resolve(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '') || '/');

const out = {};
for (const path of paths) {
  const num = path.match(/^(\/en|\/ja)?\/number\/([^/]+)\/$/);
  if (num) {
    const t = NUM[num[1] ?? ''][num[2]];
    if (!t) throw new Error(`no data entry for ${path}`);
    out[path] = t;
    continue;
  }
  let t = fileTime(sourceOf(path));
  if (isListing(path)) {
    const lang = langOf(path);
    for (const n of linkedNumbers(path)) if (!NAV[lang].has(n) && NUM[lang][n]) t = Math.max(t, NUM[lang][n]);
  }
  out[path] = t;
}

const iso = (t) => new Date(t).toISOString();
writeFileSync(
  resolve(ROOT, 'src/data/lastmod.ts'),
  `// scripts/gen-lastmod.mjs가 생성한다. 직접 고치지 말 것. 키는 사이트 경로(끝 슬래시 포함).
export const LASTMOD: Record<string, string> = {
${Object.keys(out).sort().map((p) => `  "${p}": "${iso(out[p])}",`).join('\n')}
};
`,
);

const days = {};
for (const t of Object.values(out)) days[iso(t).slice(0, 10)] = (days[iso(t).slice(0, 10)] ?? 0) + 1;
console.log(`pages ${paths.length}, dates ${Object.keys(days).length}`);
console.log(Object.entries(days).sort().map(([d, n]) => `${d} ${n}`).join('\n'));
