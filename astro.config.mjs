import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pdarleyjr.github.io',
  base: '/uasi',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  devToolbar: {
    enabled: false
  }
});
