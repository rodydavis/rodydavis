
import PocketBase from 'pocketbase';
import fs from 'fs/promises';
import path from 'path';

const pb = new PocketBase('https://rodydavis.com');
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/docs');

import 'dotenv/config';

const EMAIL = process.env.PB_EMAIL;
const PASSWORD = process.env.PB_PASSWORD;

async function migrate() {
    try {
        console.log('Authenticating with PocketBase...');
        await pb.admins.authWithPassword(EMAIL, PASSWORD);
        console.log('Authentication successful.');

        console.log('Fetching posts and pages...');
        // Fetch all posts, expanding the 'tags' relation
        const posts = await pb.collection('posts').getFullList({
            sort: '-created',
            expand: 'tags',
        });

        // Fetch all pages
        const pages = await pb.collection('pages').getFullList({
            sort: '-created',
        });

        const records = [...posts, ...pages];

        console.log(`Found ${posts.length} posts and ${pages.length} pages.`);

        await fs.mkdir(OUTPUT_DIR, { recursive: true });

        const TurndownService = (await import('turndown')).default;
        const turndownService = new TurndownService();

        turndownService.addRule('pre', {
            filter: ['pre'],
            replacement: function (content, node) {
                const className = node.getAttribute('class') || '';
                const langMatch = className.match(/language-(\w+)/);
                const lang = langMatch ? langMatch[1] : '';
                return '\n```' + lang + '\n' + node.textContent + '\n```\n';
            }
        });

        for (const record of records) {
            const slug = record.slug;
            const title = record.title || 'Untitled';
            const description = record.description || '';
            const date = record.date || record.created;
            const draft = record.draft || false;

            // Extract tag names from expanded relation
            // record.expand.tags is an array of tag records
            const tags = record.expand?.tags?.map(t => t.name) || [];

            console.log(`Processing: ${title} (${slug})`);

            let content = record.content || '';
            try {
                content = turndownService.turndown(content);
            } catch (e) {
                console.error(`Error converting ${slug}:`, e);
            }

            // Construct Frontmatter
            // Use JSON.stringify for strings to handle escaping characters safely
            const frontmatter = [
                '---',
                `title: ${JSON.stringify(title)}`,
                `description: ${JSON.stringify(description)}`,
                `date: "${date}"`,
                `draft: ${draft}`,
                `tags: ${JSON.stringify(tags)}`,
                '---',
                '',
                content
            ].join('\n');

            const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, frontmatter);
        }

        console.log('Migration complete.');

    } catch (error) {
        console.error('Migration failed:', error);
    }
}

migrate();
