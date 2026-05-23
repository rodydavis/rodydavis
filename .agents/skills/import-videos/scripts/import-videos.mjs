import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const VIDEOS_FILE = path.resolve(process.cwd(), 'videos.txt');
const OUTPUT_DIR = path.resolve(process.cwd(), 'src/content/docs/videos');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function fetchTranscript(youtubeId) {
    const url = `https://defuddle.md/youtube.com/watch?v=${youtubeId}`;
    console.log(`> Fetching transcript via curl for ID: ${youtubeId}`);
    try {
        const markdown = execSync(`curl -sL "${url}"`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
        
        if (markdown.includes('error code: 1015') || markdown.includes('rate limited')) {
            console.warn(`> WARNING: Cloudflare Rate Limited (Error 1015) for ${youtubeId}`);
            return 'RATE_LIMIT';
        }

        const transcriptIndex = markdown.indexOf('## Transcript');
        if (transcriptIndex === -1) {
            console.warn(`> WARNING: '## Transcript' header not found in defuddle response for ${youtubeId}`);
            return null;
        }
        return markdown.slice(transcriptIndex).trim();
    } catch (error) {
        console.error(`> Error curling transcript for ID ${youtubeId}:`, error.message);
        return null;
    }
}

async function processVideo(url) {
    console.log(`Processing: ${url}`);
    try {
        const jsonStr = execSync(`yt-dlp --dump-json "${url}"`, { encoding: 'utf8' });
        const meta = JSON.parse(jsonStr);

        const title = meta.title;
        const description = meta.description || '';
        const date = formatYouTubeDate(meta.upload_date);
        const slug = getSlug(title);
        const videoId = meta.id;

        // Fetch transcript with retries on rate limits
        let transcript = null;
        for (let attempt = 1; attempt <= 3; attempt++) {
            const res = await fetchTranscript(videoId);
            if (res === 'RATE_LIMIT') {
                console.log(`Encountered rate limit during import. Attempt ${attempt}/3. Sleeping 15s...`);
                await sleep(15000);
                continue;
            }
            transcript = res;
            break;
        }

        const bodyParts = [
            '---',
            `title: "${title.replace(/"/g, '\\"')}"`,
            `summary: "${title.replace(/"/g, '\\"')}"`,
            `date: '${date}'`,
            'draft: false',
            'tags:',
            '  - youtube',
            '  - video',
            '  - media',
            '---',
            '',
            `import SocialEmbed from '../../../components/SocialEmbed.astro';`,
            '',
            `# ${title}`,
            '',
            `<SocialEmbed platform="youtube" id="${videoId}" />`,
            '',
            '## Description',
            '',
            description,
        ];

        if (transcript) {
            bodyParts.push('', transcript);
        }

        const frontmatter = bodyParts.join('\n');

        const filePath = path.join(OUTPUT_DIR, `${slug}.mdx`);
        fs.writeFileSync(filePath, frontmatter);
        console.log(`Created: ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${url}:`, error.message);
    }
}

async function main() {
    if (!fs.existsSync(VIDEOS_FILE)) {
        console.log(`No videos file found at: ${VIDEOS_FILE}`);
        return;
    }
    const urls = fs
        .readFileSync(VIDEOS_FILE, 'utf8')
        .split('\n')
        .map((url) => url.trim())
        .filter((url) => url.length > 0);

    console.log(`Found ${urls.length} videos to import.`);

    for (const url of urls) {
        await processVideo(url);
        // Sleep between imports to avoid rate limits
        await sleep(3000);
    }
    console.log('Video import completed!');
}

main().catch(console.error);
