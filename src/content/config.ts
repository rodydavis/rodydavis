import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        summary: z.string().optional(),
        embedding: z.string().optional(),
        tags: z.array(z.string()).optional(),
        related: z.array(z.string()).optional(),
    }),
});

export const collections = {
    docs,
};
