// Vercel Routing Middleware — runs at the edge before static file
// serving, so it reliably catches every path (including "/" and "/en/",
// which vercel.json's redirects were missing because Vercel resolves
// those index routes to their static files before evaluating redirects).
//
// Purpose: permanently redirect the retired angel-sandy-five.vercel.app
// domain to angeldone.com, preserving the full path and query string.
export const config = {
  matcher: "/:path*",
};

const OLD_HOST = "angel-sandy-five.vercel.app";
const NEW_HOST = "angeldone.com";

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.hostname === OLD_HOST) {
    url.protocol = "https:";
    url.hostname = NEW_HOST;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
}
