// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/site.ts';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
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
