import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, '../src/content/docs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.resolve(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else if (file.endsWith('.md')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk(docsDir);

console.log(`Found ${files.length} markdown files.`);

let count = 0;
files.forEach(file => {
    try {
        const rawContent = fs.readFileSync(file, 'utf8');
        const { data, content } = matter(rawContent);

        if (data.title) {
            const titleHeader = `# ${data.title}`;
            const trimmedContent = content.trim();

            // Check if the content already starts with the title header
            if (!trimmedContent.startsWith(titleHeader)) {
                // Prepend title header to content
                // We add a newline before and two after for proper spacing
                const updatedBody = `\n# ${data.title}\n\n${content.trimLeft()}`;
                const newFileContent = matter.stringify(updatedBody, data);

                fs.writeFileSync(file, newFileContent);
                console.log(`[UPDATED] ${path.relative(docsDir, file)}`);
                count++;
            }
        } else {
            console.warn(`[SKIP] No title in frontmatter: ${path.relative(docsDir, file)}`);
        }
    } catch (err) {
        console.error(`[ERROR] Failed to process ${file}:`, err.message);
    }
});

console.log(`\nSuccess! Updated ${count} files.`);
