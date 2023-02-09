import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import { obsidianTags } from "./obsidian-tags.mjs";
import rehypePrettyCode from "rehype-pretty-code";
import preact from "@astrojs/preact";

const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  site: "https://rodydavis.com/",
  integrations: [sitemap(), preact({ compat: true })],
  markdown: {
    // shikiConfig: { theme: "css-variables" },
    remarkPlugins: [rehypeAccessibleEmojis, obsidianTags],
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "prepend",
        },
      ],
    ],
  },
});
