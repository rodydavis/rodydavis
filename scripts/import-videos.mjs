import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIDEOS_FILE = path.resolve(__dirname, '../videos.txt');
const OUTPUT_DIR = path.resolve(__dirname, '../src/content/docs/videos');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function getSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

function formatYouTubeDate(dateStr) {
    // YT format: YYYYMMDD
    if (!dateStr || dateStr.length !== 8) return new Date().toISOString();
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${year}-${month}-${day}T00:00:00.000Z`;
}

function processVideo(url) {
    console.log(`Processing: ${url}`);
    try {
        const jsonStr = execSync(`yt-dlp --dump-json "${url}"`, { encoding: 'utf8' });
        const meta = JSON.parse(jsonStr);

        const title = meta.title;
        const description = meta.description || '';
        const date = formatYouTubeDate(meta.upload_date);
        const slug = getSlug(title);
        const videoId = meta.id;

        const frontmatter = [
            '---',
            `title: "${title.replace(/"/g, '\\"')}"`,
            `description: "${title.replace(/"/g, '\\"')}"`,
            `date: '${date}'`,
            'draft: false',
            'tags:',
            '  - youtube',
            '  - video',
            '  - media',
            '---',
            '',
            `# ${title}`,
            '',
            '<div class="video-container">',
            `  <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            '</div>',
            '',
            '## Description',
            '',
            description,
        ].join('\n');

        const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
        fs.writeFileSync(filePath, frontmatter);
        console.log(`Created: ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${url}:`, error.message);
    }
}

const urls = fs
    .readFileSync(VIDEOS_FILE, 'utf8')
    .split('\n')
    .map((url) => url.trim())
    .filter((url) => url.length > 0);

console.log(`Found ${urls.length} videos.`);

for (const url of urls) {
    processVideo(url);
}
