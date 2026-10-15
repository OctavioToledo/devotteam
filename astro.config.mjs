import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio definitivo (o definir SITE_URL en Vercel).
const site = process.env.SITE_URL ?? 'https://devotteam.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap({ lastmod: new Date() })],
  build: { inlineStylesheets: 'always' },
});
