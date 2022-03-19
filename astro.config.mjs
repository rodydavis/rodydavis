import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  renderers: [
    "@astrojs/renderer-preact",
    "@astrojs/renderer-lit",
  ],
  buildOptions: {
    sitemap: true,
    site: "https://rodydavis.com/",
  },
});
