import type { APIRoute } from "astro";
import { SITE_URL } from "../site";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# 네이버 검색 로봇
User-agent: Yeti
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
