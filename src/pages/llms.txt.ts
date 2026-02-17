import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
    const posts = await getCollection('docs');

    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });

    const site = context.site?.toString() ?? '';

    const lines = [
        `# Rody Davis`,
        `> Rody Davis's personal website and portfolio.`,
        ``,
        `## Posts`,
        ``,
    ];

    for (const post of sortedPosts) {
        const title = post.data.title;
        const url = new URL(`/${post.slug}.md`, site).toString();

        let line = `- [${title}](${url})`;
        if (post.data.summary) {
            line += `: ${post.data.summary}`;
        }
        lines.push(line);
    }

    return new Response(lines.join('\n'), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
