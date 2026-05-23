import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PODCAST_DIR = path.join(process.cwd(), 'src/content/docs/podcast');
const VIDEOS_DIR = path.join(process.cwd(), 'src/content/docs/videos');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to recursively find markdown files
function getMarkdownFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
}

// Fetch transcript from defuddle.md using curl
function fetchTranscript(youtubeId) {
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

async function processFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Regex to extract 11-character YouTube video ID from iframe src or standard youtube urls / components
    const youtubeIdRegex = /https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]{11})|<[sS]ocial[eE]mbed\s+(?:[^>]*?\s+)?platform="youtube"\s+(?:[^>]*?\s+)?id="([A-Za-z0-9_-]{11})"/;
    const match = content.match(youtubeIdRegex);

    if (!match) {
      console.log(`[Skipped] No YouTube embed found in: ${relativePath}`);
      return true; // true means skipped/no API call made
    }

    const youtubeId = match[1] || match[2];
    const transcript = fetchTranscript(youtubeId);

    if (transcript === 'RATE_LIMIT') {
      console.log(`[Retry needed] Rate limited on ${relativePath}`);
      return false; // false means failed due to rate limit
    }

    if (!transcript) {
      console.log(`[Skipped] Could not fetch transcript for: ${relativePath}`);
      return true; 
    }

    // Strip out any existing transcript section to prevent duplication
    const transcriptHeaderIndex = content.indexOf('## Transcript');
    let cleanContent = content;
    if (transcriptHeaderIndex !== -1) {
      cleanContent = content.slice(0, transcriptHeaderIndex).trim() + '\n';
    }

    const updatedContent = cleanContent.trim() + '\n\n' + transcript + '\n';
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`[Success] Appended/updated transcript for: ${relativePath}`);
    return true;
  } catch (error) {
    console.error(`[Error] Failed to process ${relativePath}:`, error.message);
    return true;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const podcastsOnly = args.includes('--podcasts-only');
  const videosOnly = args.includes('--videos-only');

  let targets = [];

  if (podcastsOnly) {
    console.log('Mode: Podcast Files Only');
    targets.push(PODCAST_DIR);
  } else if (videosOnly) {
    console.log('Mode: Video Files Only');
    targets.push(VIDEOS_DIR);
  } else {
    console.log('Mode: Podcast & Video Files');
    targets.push(PODCAST_DIR, VIDEOS_DIR);
  }

  let files = [];
  targets.forEach((dir) => {
    files = files.concat(getMarkdownFiles(dir));
  });

  console.log(`Found ${files.length} markdown files to inspect.`);
  console.log('Starting transcript processing with a 3-second delay to prevent rate limits...\n');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`[${i + 1}/${files.length}] Processing file...`);
    const success = await processFile(file);
    console.log('--------------------------------------------------');

    if (!success) {
      // If we got rate limited, sleep longer and retry this index
      console.log('Encountered rate limiting. Sleeping for 15 seconds before retrying...');
      await sleep(15000);
      i--; // decrement to retry
      continue;
    }

    // Standard sleep between requests
    await sleep(3000);
  }

  console.log('\nAll transcript tasks completed!');
}

main();
