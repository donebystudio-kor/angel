// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/site.ts';
import { JA_ANGEL_NUMBERS } from './src/data/angels.ja.ts';

// /ja/number/ pages are generated for all 521 numbers (matching KO) so
// every number has a page from day one, but most start as empty
// isPlaceholder:true shells until authored in a later batch. Submitting
// those thin placeholder pages to Google risks a thin-content penalty, so
// they're excluded from the sitemap here — derived live from the data (not
// a hardcoded number list), so newly authored batches drop out of this
// exclusion set automatically on the next build. KO/EN currently have no
// placeholders (all 521 filled), so this only has an effect on /ja/ today.
const JA_PLACEHOLDER_NUMBERS = new Set(
  JA_ANGEL_NUMBERS.filter((a) => a.isPlaceholder).map((a) => a.number)
);

function isExcludedPlaceholder(url) {
  const match = url.match(/\/ja\/number\/([^/]+)\/?$/);
  return !!match && JA_PLACEHOLDER_NUMBERS.has(match[1]);
}

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !isExcludedPlaceholder(page),
      serialize(item) {
        const url = item.url;
        if (url === `${SITE_URL}/`) {
          return { ...item, changefreq: 'daily', priority: 1.0, lastmod: new Date() };
        }
        if (url.includes('/number/')) {
          return { ...item, changefreq: 'monthly', priority: 0.8, lastmod: new Date() };
        }
        if (url.includes('/category/')) {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod: new Date() };
        }
        if (url.includes('/guide/')) {
          return { ...item, changefreq: 'monthly', priority: 0.7, lastmod: new Date() };
        }
        if (url.includes('/search') || url.includes('/privacy')) {
          return { ...item, changefreq: 'yearly', priority: 0.3, lastmod: new Date() };
        }
        return { ...item, changefreq: 'weekly', priority: 0.6, lastmod: new Date() };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
