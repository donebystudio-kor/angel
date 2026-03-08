import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: https://angel-sandy-five.vercel.app/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
