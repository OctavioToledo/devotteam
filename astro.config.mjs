import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio del sitio. Cuando esté el dominio propio, definir SITE_URL en Vercel (o cambiarlo acá).
const site = process.env.SITE_URL ?? 'https://devott.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap({ lastmod: new Date() })],
  build: { inlineStylesheets: 'always' },
});
