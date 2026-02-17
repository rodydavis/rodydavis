import fs from 'fs/promises';
import { existsSync, readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ollama from 'ollama';
import { findNearest } from '../src/utils/knn.ts';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/docs');

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

async function processFile(file, force) {
    try {
        const fileContent = await fs.readFile(file, 'utf8');
        const parsed = matter(fileContent);
        let needsUpdate = false;

        const relativePath = path.relative(process.cwd(), file);

        if (!!force || !parsed.data.summary) {
            // console.log(`Generating summary for: ${relativePath}`);
            const summary = await generateSummary(parsed.content.slice(0, 2000));
            if (summary) {
                parsed.data.summary = summary;
                needsUpdate = true;
                console.log(`Generated summary for: ${relativePath}`);
            }
        }

        if (!!force || !parsed.data.embedding || Array.isArray(parsed.data.embedding)) {
            // console.log(`Generating embedding for: ${relativePath}`);
            const embedding = await generateEmbedding(parsed.data.summary || parsed.content.slice(0, 2000));
            if (embedding) {
                parsed.data.embedding = embedding;
                needsUpdate = true;
                console.log(`Generated embedding for: ${relativePath}`);
            }
        }

        if (needsUpdate) {
            const newContent = matter.stringify(parsed.content, parsed.data);
            await fs.writeFile(file, newContent);
            console.log(`Updated: ${relativePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}

async function processFiles({ force }) {
    const files = getMarkdownFiles(CONTENT_DIR);
    console.log(`Found ${files.length} markdown files.`);

    // First pass: Generate summaries and embeddings if missing (Parallel)
    console.log(`Processing files with concurrency limit: ${CONCURRENCY_LIMIT}...`);
    await asyncPool(CONCURRENCY_LIMIT, files, (file) => processFile(file, force));

    // Second pass: Calculate related posts
    console.log('Calculating related posts...');

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
                console.log(`Updated related posts for: ${relativePath}`);
            }
        } catch (err) {
            console.error(`Error updating related posts for ${relativePath}:`, err);
        }
    });
}

const args = process.argv.slice(2);
processFiles({
    force: args.includes('--force'),
}).catch(console.error);
