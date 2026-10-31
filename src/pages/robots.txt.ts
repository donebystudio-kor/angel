import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  // Sitemap 줄은 일부러 뺐다: 모든 봇이 읽어 구글 축소 사이트맵 전략이 무너진다. 구글은 서치콘솔, 네이버는 서치어드바이저에 직접 제출한다.
  const body = `User-agent: *
Allow: /
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
