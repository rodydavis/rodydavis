import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/docs",
    generateId: ({ entry }) => entry.replace(/\\/g, "/").replace(/\.mdx?$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    embedding: z.string().optional(),
    tags: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    podcast: z.boolean().optional(),
    tabs: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  docs,
};
