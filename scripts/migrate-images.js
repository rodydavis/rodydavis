
import fs from 'fs/promises';
import path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const DOCS_DIR = path.join(process.cwd(), 'src/content/docs');
const ASSETS_DIR = path.join(process.cwd(), 'src/assets');
const BASE_URL = 'https://rodydavis.com';

async function downloadImage(url, filepath) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        const stream = createWriteStream(filepath);
        await pipeline(response.body, stream);
    } catch (error) {
        console.error(`Error downloading ${url}:`, error.message);
    }
}

async function migrateImages() {
    try {
        await fs.mkdir(ASSETS_DIR, { recursive: true });

        // Helper to recursively get all files
        async function getFiles(dir) {
            const dirents = await fs.readdir(dir, { withFileTypes: true });
            const files = await Promise.all(dirents.map((dirent) => {
                const res = path.resolve(dir, dirent.name);
                return dirent.isDirectory() ? getFiles(res) : res;
            }));
            return Array.prototype.concat(...files);
        }

        const files = await getFiles(DOCS_DIR);

        for (const filePath of files) {
            if (!filePath.endsWith('.md')) continue;

            let content = await fs.readFile(filePath, 'utf-8');

            // Regex to find images: ![](/_/../api/files/...) or similar relative paths
            const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
            let match;
            let newContent = content;

            const matches = [...content.matchAll(imageRegex)];

            for (const m of matches) {
                const alt = m[1];
                const src = m[2];

                if (src.startsWith('http')) continue;

                // Construct full URL
                const fullUrl = src.startsWith('/') ? `${BASE_URL}${src}` : `${BASE_URL}/${src}`;

                const urlObj = new URL(fullUrl);
                const pathname = urlObj.pathname;
                const filename = path.basename(pathname);
                const safeFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');

                if (!filename || filename === '/') {
                    continue;
                }

                const localPath = path.join(ASSETS_DIR, safeFilename);
                // Calculate relative path from doc to assets
                // We must use relative path for images in Astro content collections if we want them to be processed, OR use absolute src/assets alias if referenced in a component but markdown usually likes relative. 
                // However, deep files need generic relative path.
                // E.g. src/content/docs/foo.md -> ../../assets/img.png
                // src/content/docs/bar/baz.md -> ../../../assets/img.png

                const relativeToRoot = path.relative(path.dirname(filePath), ASSETS_DIR);
                const assetPath = path.join(relativeToRoot, safeFilename);

                // console.log(`Downloading ${fullUrl} to ${localPath}`);
                await downloadImage(fullUrl, localPath);

                newContent = newContent.replace(src, assetPath);
            }

            if (newContent !== content) {
                await fs.writeFile(filePath, newContent);
                console.log(`Updated ${path.basename(filePath)}`);
            }
        }
    } catch (e) {
        console.error(e);
    }
}

migrateImages();
