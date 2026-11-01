import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import MarkdownIt from 'markdown-it';

export const GET: APIRoute = async (context) => {
    const allDocs = await getCollection('docs');
    const posts = allDocs
        .filter((doc) => doc.id !== 'welcome' && doc.id !== 'about' && doc.id !== 'privacy')
        .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
    const parser = new MarkdownIt();
    return rss({
        title: 'Rody Davis',
        description: 'Rody Davis\'s personal website and portfolio.',
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(post.data.date),
            description: post.data.summary,
            link: `/${post.id}/`,
            content: parser.render(post.body || ''),
        })),
        customData: `<language>en-us</language>`,
    });
}
