import fs from 'fs/promises';
import { existsSync, readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ollama from 'ollama';
import { findNearest } from '../src/utils/knn.ts';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/docs');
const TAXONOMY_FILE = path.join(process.cwd(), 'scripts/taxonomy.json');
const TAGS_FILE = path.join(process.cwd(), 'tags.txt');

const MODEL_NAME = 'gemma3n';
const EMBEDDING_MODEL_NAME = 'embeddinggemma';
const CONCURRENCY_LIMIT = 4;

// Recursive function to get all .md files (sync is fine for file listing)
function getMarkdownFiles(dir) {
    let results = [];
    if (!existsSync(dir)) return results;
    const list = readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            results.push(filePath);
        }
    });
    return results;
}

// Concurrency helper
async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = [];
    const executing = [];
    for (const item of array) {
        const p = Promise.resolve().then(() => iteratorFn(item));
        ret.push(p);

        if (poolLimit <= array.length) {
            const e = p.then(() => executing.splice(executing.indexOf(e), 1));
            executing.push(e);
            if (executing.length >= poolLimit) {
                await Promise.race(executing);
            }
        }
    }
    return Promise.all(ret);
}

function normalizeTag(tag) {
    return tag
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-z0-9\-]/g, '') // Remove everything else except hyphens and alphanumeric
        .replace(/-+/g, '-') // Replace multiple hyphens with a single one
        .replace(/^-+|-+$/g, ''); // Trim hyphens from ends
}

async function generateSummary(content) {
    try {
        const response = await ollama.generate({
            model: MODEL_NAME,
            prompt: `Summarize the following markdown content in one concise sentence suitable for search results. Do not include "Here is a summary" or similar meta-text. Just the summary:\n\n${content}`,
            stream: false
        });
        return response.response.trim();
    } catch (error) {
        console.error('Error generating summary:', error.message);
        return null;
    }
}

async function generateTagsForFile(summary, content) {
    try {
        const response = await ollama.generate({
            model: MODEL_NAME,
            prompt: `Based on the following summary and content, generate 3-5 relevant tags. Tags MUST be about: product, framework, language, or genre (e.g., design, web, backend). Tags MUST NOT contain spaces and use only hyphens for separation (e.g., "flutter-dev"). Return them as a comma-separated list of lowercase strings. Do not include any other text:\n\nSummary: ${summary}\n\nContent: ${content.slice(0, 1000)}`,
            stream: false
        });
        return response.response.trim().split(',')
            .map(t => normalizeTag(t.trim()))
            .filter(t => t.length > 0);
    } catch (error) {
        console.error('Error generating tags:', error.message);
        return [];
    }
}



async function reassignTags(taxonomy, content) {
    const textToSearch = content.toLowerCase();
    const foundTags = [];

    for (const tag of taxonomy) {
        const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedTag}\\b`, 'gi');

        if (regex.test(textToSearch)) {
            foundTags.push(tag);
        }
    }
    return foundTags;
}

async function generateEmbedding(content) {
    try {
        const response = await ollama.embeddings({
            model: EMBEDDING_MODEL_NAME,
            prompt: content
        });
        // Convert to Float32Array then to Buffer and finally Base64
        const floatArray = new Float32Array(response.embedding);
        const buffer = Buffer.from(floatArray.buffer);
        return buffer.toString('base64');
    } catch (error) {
        console.error('Error generating embedding:', error.message);
        return null;
    }
}

async function processFile(file, force, current, total) {
    try {
        const fileContent = await fs.readFile(file, 'utf8');
        const parsed = matter(fileContent);
        let needsUpdate = false;

        const relativePath = path.relative(process.cwd(), file);
        const prefix = `[${current}/${total}]`;

        if (!!force || !parsed.data.summary) {
            const summary = await generateSummary(parsed.content.slice(0, 2000));
            if (summary) {
                parsed.data.summary = summary;
                needsUpdate = true;
                console.log(`${prefix} Generated summary for: ${relativePath}`);
            }
        }

        if (!!force || !parsed.data.embedding || Array.isArray(parsed.data.embedding)) {
            const embedding = await generateEmbedding(parsed.data.summary || parsed.content.slice(0, 2000));
            if (embedding) {
                parsed.data.embedding = embedding;
                needsUpdate = true;
                console.log(`${prefix} Generated embedding for: ${relativePath}`);
            }
        }

        if (needsUpdate) {
            const newContent = matter.stringify(parsed.content, parsed.data);
            await fs.writeFile(file, newContent);
            // Only log if we did more than just return the data structure
            console.log(`${prefix} Updated (metadata): ${relativePath}`);
        }

        // Return current state for global passes
        return {
            file,
            summary: parsed.data.summary,
            content: parsed.content,
            data: parsed.data,
            tags: parsed.data.tags || []
        };
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
        return null;
    }
}

async function processFiles({ force, updateTags }) {
    const files = getMarkdownFiles(CONTENT_DIR);
    console.log(`Found ${files.length} markdown files.`);

    // Step 1: Collect metadata, generate summaries and embeddings
    console.log(`\nStep 1: Processing metadata with concurrency limit: ${CONCURRENCY_LIMIT}...`);
    let count1 = 0;
    const fileDataItems = await asyncPool(CONCURRENCY_LIMIT, files, (file) => {
        count1++;
        return processFile(file, force, count1, files.length);
    });
    const fileData = fileDataItems.filter(item => item !== null);

    // Step 2: Handle tagging based on tags.txt
    console.log('\nStep 2: Syncing tags with tags.txt...');
    let taxonomy = [];
    if (existsSync(TAGS_FILE)) {
        taxonomy = readFileSync(TAGS_FILE, 'utf8').split('\n').map(t => t.trim()).filter(t => t.length > 0);
        console.log(`> Loaded ${taxonomy.length} tags from ${TAGS_FILE}`);
    } else {
        console.warn(`> WARNING: ${TAGS_FILE} not found. Skipping tagging.`);
    }

    if (taxonomy.length > 0) {
        console.log('> Applying tags to all posts...');
        let count3 = 0;
        await asyncPool(CONCURRENCY_LIMIT, fileData, async (item) => {
            count3++;
            const newTags = await reassignTags(taxonomy, item.content);
            const currentTags = (item.tags || []).slice().sort();
            const tagsToSet = newTags.slice().sort();
            const tagsChanged = JSON.stringify(currentTags) !== JSON.stringify(tagsToSet);

            if (tagsChanged) {
                item.data.tags = newTags;
                const newContent = matter.stringify(item.content, item.data);
                await fs.writeFile(item.file, newContent);
                console.log(`  [${count3}/${fileData.length}] Updated tags for ${path.relative(CONTENT_DIR, item.file)}: ${newTags.join(', ')}`);
            } else if (count3 % 50 === 0 || count3 === fileData.length) {
                console.log(`  Progress: ${count3}/${fileData.length} files checked`);
            }
        });
    }

    // Step 4: Calculate related posts
    console.log('\nStep 4: Calculating related posts...');
    let count4 = 0;

    // 1. collect all embeddings
    const embeddingsMap = new Map();
    const fileMap = new Map(); // Map relative path to absolute path

    for (const file of files) {
        try {
            const fileContent = await fs.readFile(file, 'utf8');
            const parsed = matter(fileContent);
            if (parsed.data.embedding && typeof parsed.data.embedding === 'string') {
                // Convert base64 string back to Float32Array
                const buffer = Buffer.from(parsed.data.embedding, 'base64');
                const floatArray = new Float32Array(buffer.buffer, buffer.byteOffset, buffer.byteLength / Float32Array.BYTES_PER_ELEMENT);

                // Key is relative path from src/content/docs, e.g., "blog/git-cheatsheet.md"
                const relativePath = path.relative(CONTENT_DIR, file);
                embeddingsMap.set(relativePath, floatArray);
                fileMap.set(relativePath, file);
            }
        } catch (err) {
            console.error(`Error reading ${file} for embeddings:`, err);
        }
    }

    // 2. find nearest for each file (Parallel processing for huge file lists effectively)
    // Although the actual KNN findNearest is fast cpu bound, reading/writing files is IO bound.
    // We can just iterate or parallelize the write back.

    await asyncPool(CONCURRENCY_LIMIT, Array.from(embeddingsMap.entries()), async ([relativePath, embedding]) => {
        count4++;
        try {
            const matches = findNearest(embedding, embeddingsMap, 6); // Get 6, because top 1 is likely itself

            // Filter out itself and map to just the key (relative path)
            const relatedPaths = matches
                .filter(match => match.key !== relativePath)
                .slice(0, 5) // Keep top 5
                .map(match => match.key);

            const absolutePath = fileMap.get(relativePath);
            const fileContent = await fs.readFile(absolutePath, 'utf8');
            const parsed = matter(fileContent);

            // Check if related actually changed
            const currentRelated = parsed.data.related || [];
            const isDifferent = relatedPaths.length !== currentRelated.length ||
                relatedPaths.some((val, index) => val !== currentRelated[index]);

            if (isDifferent || force) {
                parsed.data.related = relatedPaths;
                const newContent = matter.stringify(parsed.content, parsed.data);
                await fs.writeFile(absolutePath, newContent);
                console.log(`  [${count4}/${embeddingsMap.size}] Updated related posts for: ${relativePath}`);
            } else if (count4 % 20 === 0 || count4 === embeddingsMap.size) {
                console.log(`  Progress: ${count4}/${embeddingsMap.size} related check complete`);
            }
        } catch (err) {
            console.error(`Error updating related posts for ${relativePath}:`, err);
        }
    });
    console.log('\nAll documentation tasks complete!');
}

const args = process.argv.slice(2);
processFiles({
    force: args.includes('--force'),
    updateTags: args.includes('--tags'),
}).catch(console.error);
