import { defineConfig } from "astro/config";
// import { VitePWA } from "vite-plugin-pwa";
import customElements from "custom-elements-ssr/astro.js";

// https://astro.build/config
export default defineConfig({
  renderers: ["@astrojs/renderer-preact", "@astrojs/renderer-lit"],
  integrations: [customElements()],
  buildOptions: {
    sitemap: true,
    site: "https://rodydavis.com/",
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  // plugins: [VitePWA()],
});
