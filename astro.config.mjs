import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import remarkObsidian from "remark-obsidian";
import { obsidianTags } from "./obsidian-tags.mjs";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), preact({ compat: true })],
  markdown: {
    remarkPlugins: [rehypeAccessibleEmojis, obsidianTags],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "prepend",
        },
      ],
      //   ["rehype-toc", { headings: ["h2", "h3"] }],
    ],
  },
});
