// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://travel-site.vercel.app',
  // Your site is fully static, so we use the static Vercel adapter:
  // Vercel builds pure static HTML/CSS/JS and serves it from the global edge.
  output: 'static',
  adapter: vercel(),
});
