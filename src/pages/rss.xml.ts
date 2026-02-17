import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import MarkdownIt from 'markdown-it';

export const GET: APIRoute = async (context) => {
    const posts = await getCollection('docs');
    const parser = new MarkdownIt();
    return rss({
        title: 'Rody Davis',
        description: 'Rody Davis\'s personal website and portfolio.',
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(post.data.date),
            description: post.data.summary,
            link: `/${post.slug}/`,
            content: parser.render(post.body || ''),
        })),
        customData: `<language>en-us</language>`,
    });
}
