import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import matter from "gray-matter";
import sharp from "sharp";
import { chunkDocument, type ContentChunk } from "../src/utils/chunker.ts";
import {
  embedWithGemma2,
  embedBatchWithGemma2,
  cosineSimilarityMrl,
  getActiveMrlDim,
  type MrlDimension,
} from "../src/lib/embedding-gemma.ts";
import {
  generateSummaryWithGemma4,
  resolveGemma4Model,
} from "../src/lib/ollama-ai.ts";

const ROOT_DIR = process.cwd();
const CONTENT_DIR = path.join(ROOT_DIR, "src/content/docs");
const TAGS_FILE = path.join(ROOT_DIR, "tags.txt");
const CACHE_DIR = path.join(ROOT_DIR, ".cache");
const CACHE_FILE = path.join(CACHE_DIR, "embeddinggemma-2-cache.json");
const THUMBS_DIR = path.join(ROOT_DIR, "public/thumbs");
const OUTPUT_DIR = path.join(ROOT_DIR, "src/data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "chunks-index.json");

const CONCURRENCY = 6;

export interface IndexedDocRecord {
  slug: string;
  relativePath: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  contentHash: string;
  embedding: number[];
}

export interface IndexedChunkRecord extends Omit<ContentChunk, "assetPath"> {
  contentHash: string;
  embedding: number[];
}

export interface DocRelationRecord {
  sourceSlug: string;
  targetSlug: string;
  score: number;
  docSimilarity: number;
  chunkSimilarity: number;
  matchedHeading: string;
  matchedHeadingSlug: string;
  sharedTags: string[];
}

export interface ChunksIndexBundle {
  version: string;
  generatedAt: string;
  embeddingModel: string;
  llmModel: string;
  dimensions: MrlDimension;
  docs: IndexedDocRecord[];
  chunks: IndexedChunkRecord[];
  relations: DocRelationRecord[];
}

function getMarkdownFiles(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(full));
    } else if (entry.endsWith(".md") || entry.endsWith(".mdx")) {
      results.push(full);
    }
  }
  return results;
}

function sha256(input: string | Buffer): string {
  return crypto.createHash("sha256").update(input).digest("hex").slice(0, 24);
}

export function computeDocContentHash(title: string, docTextForEmbed: string): string {
  return sha256(`${title}|${docTextForEmbed}`);
}

export function computeChunkContentHash(
  chunk: { modality: string; title: string; heading: string; content: string },
  mediaUrl?: string
): string {
  return sha256(
    `${chunk.modality}|${chunk.title}|${chunk.heading}|${chunk.content}|${mediaUrl || ""}`
  );
}

async function asyncPool<T, R>(
  limit: number,
  items: T[],
  fn: (item: T, idx: number) => Promise<R>
): Promise<R[]> {
  const results: Promise<R>[] = [];
  const executing = new Set<Promise<void>>();
  for (let i = 0; i < items.length; i++) {
    const p = Promise.resolve().then(() => fn(items[i], i));
    results.push(p);
    const e: Promise<void> = p.then(
      () => {
        executing.delete(e);
      },
      () => {
        executing.delete(e);
      }
    );
    executing.add(e);
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}

function reassignTags(taxonomy: string[], content: string): string[] {
  const lower = content.toLowerCase();
  const matched: string[] = [];
  for (const tag of taxonomy) {
    const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    if (regex.test(lower)) {
      matched.push(tag);
    }
  }
  return matched;
}

function jaccardSimilarity(tagsA: string[], tagsB: string[]): { score: number; shared: string[] } {
  const setA = new Set(tagsA.map((t) => t.toLowerCase()));
  const setB = new Set(tagsB.map((t) => t.toLowerCase()));
  if (setA.size === 0 && setB.size === 0) return { score: 0, shared: [] };
  const shared: string[] = [];
  for (const t of setA) {
    if (setB.has(t)) shared.push(t);
  }
  const unionSize = new Set([...setA, ...setB]).size;
  return {
    score: unionSize > 0 ? shared.length / unionSize : 0,
    shared,
  };
}

async function resolveImageThumbAndBuffer(
  assetPath: string,
  options: { generateThumb?: boolean; needBase64?: boolean } = {}
): Promise<{ thumbUrl: string; thumbFilename: string; base64ForEmbedding?: string } | null> {
  if (!fs.existsSync(assetPath)) return null;
  try {
    const rawBuf = await fsp.readFile(assetPath);
    const hash = sha256(rawBuf).slice(0, 16);
    const thumbFilename = `${hash}.webp`;
    const thumbUrl = `/thumbs/${thumbFilename}`;
    const thumbDiskPath = path.join(THUMBS_DIR, thumbFilename);

    if (options.generateThumb && !fs.existsSync(thumbDiskPath)) {
      await fsp.mkdir(THUMBS_DIR, { recursive: true });
      await sharp(rawBuf)
        .resize({ width: 320, height: 200, fit: "cover", withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(thumbDiskPath);
    }

    let base64ForEmbedding: string | undefined;
    if (options.needBase64) {
      const embedBuf = await sharp(rawBuf)
        .resize({ width: 512, height: 512, fit: "inside", withoutEnlargement: true })
        .png({ quality: 80 })
        .toBuffer();
      base64ForEmbedding = embedBuf.toString("base64");
    }

    return {
      thumbUrl,
      thumbFilename,
      base64ForEmbedding,
    };
  } catch {
    return null;
  }
}

export interface IndexPipelineOptions {
  force?: boolean;
  updateTags?: boolean;
  check?: boolean;
}

export async function runIndexPipeline(options: IndexPipelineOptions = {}) {
  const force = Boolean(options.force);
  const checkOnly = Boolean(options.check);
  const targetDim = getActiveMrlDim();
  const gemma4Model = checkOnly ? "gemma4:31b" : await resolveGemma4Model();
  const embeddingModel = process.env.EMBEDDING_GEMMA_MODEL || "embeddinggemma-2:latest";

  console.log(
    `[index-chunks] Mode: ${checkOnly ? "CHECK (read-only)" : force ? "FORCE REBUILD" : "INCREMENTAL SYNC & PRUNE"} | LLM: ${gemma4Model} | Embedding: ${embeddingModel} (${targetDim}d)`
  );

  // 1. Load existing committed chunks-index.json so CI can detect missing, outdated, and stale chunks without needing .cache/
  let existingBundle: ChunksIndexBundle | null = null;
  const existingDocsBySlug = new Map<string, IndexedDocRecord>();
  const existingChunksById = new Map<string, IndexedChunkRecord>();
  let embedCache: Record<string, number[]> = {};

  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      existingBundle = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf-8")) as ChunksIndexBundle;
      for (const doc of existingBundle.docs || []) {
        existingDocsBySlug.set(doc.slug, doc);
        if (!force && doc.contentHash && doc.embedding?.length === targetDim) {
          embedCache[`doc:${embeddingModel}:${targetDim}:${doc.contentHash}`] = doc.embedding;
        }
      }
      for (const chunk of existingBundle.chunks || []) {
        const computedHash =
          chunk.contentHash || computeChunkContentHash(chunk, chunk.mediaUrl);
        const enrichedChunk: IndexedChunkRecord = {
          ...chunk,
          contentHash: computedHash,
        };
        existingChunksById.set(chunk.id, enrichedChunk);
        if (!force && computedHash && chunk.embedding?.length === targetDim) {
          embedCache[`chunk:${embeddingModel}:${targetDim}:${computedHash}`] = chunk.embedding;
        }
      }
    } catch (err) {
      console.warn("[index-chunks] Could not parse existing chunks-index.json:", err);
    }
  }

  // Also merge local .cache/embeddinggemma-2-cache.json if present
  if (!force && fs.existsSync(CACHE_FILE)) {
    try {
      const localCache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
      embedCache = { ...localCache, ...embedCache };
    } catch {
      // Ignore corrupt cache
    }
  }

  if (!checkOnly) {
    await fsp.mkdir(CACHE_DIR, { recursive: true });
    await fsp.mkdir(OUTPUT_DIR, { recursive: true });
    await fsp.mkdir(THUMBS_DIR, { recursive: true });
  }

  let taxonomy: string[] = [];
  if (fs.existsSync(TAGS_FILE)) {
    taxonomy = fs
      .readFileSync(TAGS_FILE, "utf-8")
      .split(/\r?\n/)
      .map((t) => t.trim())
      .filter(Boolean);
  }

  const files = getMarkdownFiles(CONTENT_DIR).sort();
  console.log(`[index-chunks] Scanning ${files.length} markdown/MDX files...`);

  // Delta tracking counters
  const missingDocs: string[] = [];
  const outdatedDocs: string[] = [];
  const missingChunks: string[] = [];
  const outdatedChunks: string[] = [];
  const activeDocSlugs = new Set<string>();
  const activeChunkIds = new Set<string>();
  const activeThumbFiles = new Set<string>();

  interface ParsedDocWork {
    file: string;
    relativePath: string;
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    body: string;
    frontmatterData: Record<string, unknown>;
    docContentHash: string;
    docEmbedding: number[];
    chunks: IndexedChunkRecord[];
  }

  let processedDocs = 0;
  const workItems = await asyncPool(CONCURRENCY, files, async (file): Promise<ParsedDocWork> => {
    const raw = await fsp.readFile(file, "utf-8");
    const parsed = matter(raw);
    const relativePath = path.relative(CONTENT_DIR, file).replace(/\\/g, "/");
    const slug = relativePath.replace(/\.mdx?$/, "");
    const title = String(parsed.data.title || slug);
    const date = String(parsed.data.date || "2025-01-01");

    activeDocSlugs.add(slug);
    let frontmatterChanged = false;

    // 1. Ensure summary exists (generated with Gemma 4 if missing or --force)
    let summary = typeof parsed.data.summary === "string" ? parsed.data.summary.trim() : "";
    if ((!summary || force) && !checkOnly) {
      const generated = await generateSummaryWithGemma4(parsed.content, title);
      if (generated) {
        summary = generated;
        parsed.data.summary = summary;
        frontmatterChanged = true;
      }
    }

    // 2. Sync tags if taxonomy exists
    let tags: string[] = Array.isArray(parsed.data.tags)
      ? parsed.data.tags.map((t: unknown) => String(t).trim().toLowerCase()).filter(Boolean)
      : [];
    if (!checkOnly && taxonomy.length > 0 && (options.updateTags || tags.length === 0)) {
      const matched = reassignTags(taxonomy, `${title}\n${summary}\n${parsed.content}`);
      if (matched.length > 0 && JSON.stringify([...tags].sort()) !== JSON.stringify([...matched].sort())) {
        tags = matched;
        parsed.data.tags = tags;
        frontmatterChanged = true;
      }
    }

    // 3. Chunk document into text, code, image (multimodal), and video chunks
    const rawChunks = chunkDocument({
      slug,
      filePath: file,
      title,
      date,
      summary,
      tags,
      body: parsed.content,
    });

    // 4. Compute document-level contentHash and check against existing index
    const headingsSummary = Array.from(new Set(rawChunks.map((c) => c.heading))).join(" | ");
    const docTextForEmbed = [
      summary,
      headingsSummary ? `Sections: ${headingsSummary}` : "",
      parsed.content.replace(/```[\s\S]*?```/g, "").slice(0, 1500),
    ]
      .filter(Boolean)
      .join("\n");

    const docContentHash = computeDocContentHash(title, docTextForEmbed);
    const existingDoc = existingDocsBySlug.get(slug);
    if (!existingDoc) {
      missingDocs.push(slug);
    } else if (existingDoc.contentHash && existingDoc.contentHash !== docContentHash) {
      outdatedDocs.push(slug);
    }

    const docCacheKey = `doc:${embeddingModel}:${targetDim}:${docContentHash}`;
    let docEmbedding =
      embedCache[docCacheKey] ||
      (!existingDoc?.contentHash && existingDoc?.embedding?.length === targetDim
        ? existingDoc.embedding
        : undefined);

    if (!checkOnly) {
      if (!docEmbedding || docEmbedding.length !== targetDim || force) {
        docEmbedding = await embedWithGemma2(docTextForEmbed, {
          task: "document",
          title,
          dimensions: targetDim,
        });
      }
      embedCache[docCacheKey] = docEmbedding;

      // Remove legacy base64 `embedding` from frontmatter if present (now stored in chunks-index.json)
      if ("embedding" in parsed.data) {
        delete parsed.data.embedding;
        frontmatterChanged = true;
      }
    }

    // 5. Inspect & embed each chunk (detecting missing vs outdated chunks)
    const indexedChunks: IndexedChunkRecord[] = new Array(rawChunks.length);
    const pendingTextBatch: Array<{
      index: number;
      chunk: ContentChunk;
      mediaUrl?: string;
      contentHash: string;
      cacheKey: string;
    }> = [];

    for (let idx = 0; idx < rawChunks.length; idx++) {
      const chunk = rawChunks[idx];
      activeChunkIds.add(chunk.id);

      let mediaUrl = chunk.mediaUrl;
      if (chunk.modality === "image" && chunk.assetPath) {
        const resolvedImg = await resolveImageThumbAndBuffer(chunk.assetPath, {
          generateThumb: !checkOnly,
          needBase64: false,
        });
        if (resolvedImg) {
          mediaUrl = resolvedImg.thumbUrl;
          activeThumbFiles.add(resolvedImg.thumbFilename);
        }
      }

      const contentHash = computeChunkContentHash(chunk, mediaUrl);
      const existingChunk = existingChunksById.get(chunk.id);
      if (!existingChunk) {
        missingChunks.push(chunk.id);
      } else if (existingChunk.contentHash !== contentHash) {
        outdatedChunks.push(chunk.id);
      }

      if (checkOnly) {
        indexedChunks[idx] = {
          id: chunk.id,
          slug: chunk.slug,
          title: chunk.title,
          heading: chunk.heading,
          headingSlug: chunk.headingSlug,
          modality: chunk.modality,
          content: chunk.content,
          mediaUrl,
          tags: chunk.tags,
          date: chunk.date,
          contentHash,
          embedding: existingChunk?.embedding || [],
        };
        continue;
      }

      const chunkCacheKey = `chunk:${embeddingModel}:${targetDim}:${contentHash}`;
      const cachedVec = !force ? embedCache[chunkCacheKey] : undefined;

      if (cachedVec && cachedVec.length === targetDim) {
        indexedChunks[idx] = {
          id: chunk.id,
          slug: chunk.slug,
          title: chunk.title,
          heading: chunk.heading,
          headingSlug: chunk.headingSlug,
          modality: chunk.modality,
          content: chunk.content,
          mediaUrl,
          tags: chunk.tags,
          date: chunk.date,
          contentHash,
          embedding: cachedVec,
        };
      } else if (chunk.modality === "image" && chunk.assetPath) {
        const prepared = await resolveImageThumbAndBuffer(chunk.assetPath, {
          generateThumb: true,
          needBase64: true,
        });
        const chunkVec = await embedWithGemma2(`${chunk.heading}\n${chunk.content}`, {
          task: "document",
          title: `${chunk.title} — ${chunk.heading}`,
          dimensions: targetDim,
          imagesBase64: prepared?.base64ForEmbedding ? [prepared.base64ForEmbedding] : undefined,
        });
        embedCache[chunkCacheKey] = chunkVec;
        indexedChunks[idx] = {
          id: chunk.id,
          slug: chunk.slug,
          title: chunk.title,
          heading: chunk.heading,
          headingSlug: chunk.headingSlug,
          modality: chunk.modality,
          content: chunk.content,
          mediaUrl,
          tags: chunk.tags,
          date: chunk.date,
          contentHash,
          embedding: chunkVec,
        };
      } else {
        pendingTextBatch.push({
          index: idx,
          chunk,
          mediaUrl,
          contentHash,
          cacheKey: chunkCacheKey,
        });
      }
    }

    if (!checkOnly && pendingTextBatch.length > 0) {
      const batchVectors = await embedBatchWithGemma2(
        pendingTextBatch.map((p) => ({
          text: `${p.chunk.heading}\n${p.chunk.content}`,
          task: p.chunk.modality === "code" ? "code_retrieval" : "document",
          title: `${p.chunk.title} — ${p.chunk.heading}`,
        })),
        { dimensions: targetDim }
      );

      for (let b = 0; b < pendingTextBatch.length; b++) {
        const item = pendingTextBatch[b];
        const vec = batchVectors[b];
        embedCache[item.cacheKey] = vec;
        indexedChunks[item.index] = {
          id: item.chunk.id,
          slug: item.chunk.slug,
          title: item.chunk.title,
          heading: item.chunk.heading,
          headingSlug: item.chunk.headingSlug,
          modality: item.chunk.modality,
          content: item.chunk.content,
          mediaUrl: item.mediaUrl,
          tags: item.chunk.tags,
          date: item.chunk.date,
          contentHash: item.contentHash,
          embedding: vec,
        };
      }
    }

    if (!checkOnly && frontmatterChanged) {
      parsed.data.last_updated_metadata = new Date().toISOString();
      await fsp.writeFile(file, matter.stringify(parsed.content, parsed.data), "utf-8");
    }

    processedDocs++;
    if (!checkOnly && (processedDocs % 25 === 0 || processedDocs === files.length)) {
      console.log(`  [index-chunks] Processed ${processedDocs}/${files.length} docs...`);
    }

    return {
      file,
      relativePath,
      slug,
      title,
      date,
      summary,
      tags,
      body: parsed.content,
      frontmatterData: parsed.data,
      docContentHash,
      docEmbedding: docEmbedding || [],
      chunks: indexedChunks,
    };
  });

  // 6. Detect stale (orphaned) documents, chunks, and thumbnails
  const staleDocs: string[] = [];
  for (const oldSlug of existingDocsBySlug.keys()) {
    if (!activeDocSlugs.has(oldSlug)) {
      staleDocs.push(oldSlug);
    }
  }

  const staleChunks: string[] = [];
  for (const oldChunkId of existingChunksById.keys()) {
    if (!activeChunkIds.has(oldChunkId)) {
      staleChunks.push(oldChunkId);
    }
  }

  const staleThumbs: string[] = [];
  if (fs.existsSync(THUMBS_DIR)) {
    for (const file of fs.readdirSync(THUMBS_DIR)) {
      if (file.endsWith(".webp") && !activeThumbFiles.has(file)) {
        staleThumbs.push(file);
      }
    }
  }

  const totalDeltas =
    missingDocs.length +
    outdatedDocs.length +
    staleDocs.length +
    missingChunks.length +
    outdatedChunks.length +
    staleChunks.length +
    staleThumbs.length;

  console.log(
    `[index-chunks] Delta Summary:\n` +
      `  • Docs:   +${missingDocs.length} missing, ~${outdatedDocs.length} outdated, -${staleDocs.length} stale\n` +
      `  • Chunks: +${missingChunks.length} missing, ~${outdatedChunks.length} outdated, -${staleChunks.length} stale\n` +
      `  • Thumbs: -${staleThumbs.length} stale`
  );

  if (checkOnly) {
    if (totalDeltas > 0) {
      console.error(
        `[index-chunks] CHECK FAILED: Found ${totalDeltas} missing, outdated, or stale items. Run 'pnpm run index:chunks' to sync and prune.`
      );
      process.exit(1);
    }
    console.log("[index-chunks] CHECK PASSED: All chunks, documents, and thumbnails are 100% in sync.");
    return;
  }

  // Prune stale thumbnails on disk
  for (const staleThumb of staleThumbs) {
    const p = path.join(THUMBS_DIR, staleThumb);
    if (fs.existsSync(p)) {
      await fsp.unlink(p);
      console.log(`  [index-chunks] Pruned stale thumbnail: public/thumbs/${staleThumb}`);
    }
  }

  // Save embedding cache
  await fsp.writeFile(CACHE_FILE, JSON.stringify(embedCache), "utf-8");

  // 7. Compute Multi-Signal Related Posts (Doc Vec + Cross-Chunk Max Similarity + Tag Jaccard Boost)
  console.log("[index-chunks] Computing multi-signal Related Posts across documents and chunks...");
  const allRelations: DocRelationRecord[] = [];
  const excludedStandalone = new Set(["welcome", "about", "privacy"]);

  for (const source of workItems) {
    const scoredCandidates: Array<DocRelationRecord & { targetRelativePath: string }> = [];

    for (const target of workItems) {
      if (source.slug === target.slug) continue;
      if (excludedStandalone.has(target.slug)) continue;

      const docSim = Math.max(0, cosineSimilarityMrl(source.docEmbedding, target.docEmbedding, targetDim));

      let bestChunkSim = 0;
      let matchedHeading = target.title;
      let matchedHeadingSlug = "";

      for (const cA of source.chunks) {
        for (const cB of target.chunks) {
          const sim = cosineSimilarityMrl(cA.embedding, cB.embedding, targetDim);
          if (sim > bestChunkSim) {
            bestChunkSim = sim;
            matchedHeading = cB.heading;
            matchedHeadingSlug = cB.headingSlug;
          }
        }
      }

      const { score: tagJaccard, shared: sharedTags } = jaccardSimilarity(source.tags, target.tags);
      const hybridScore = Number(
        (0.45 * docSim + 0.40 * Math.max(0, bestChunkSim) + 0.15 * tagJaccard).toFixed(4)
      );

      scoredCandidates.push({
        sourceSlug: source.slug,
        targetSlug: target.slug,
        targetRelativePath: target.relativePath,
        score: hybridScore,
        docSimilarity: Number(docSim.toFixed(4)),
        chunkSimilarity: Number(bestChunkSim.toFixed(4)),
        matchedHeading,
        matchedHeadingSlug,
        sharedTags,
      });
    }

    scoredCandidates.sort((a, b) => b.score - a.score);
    const top5 = scoredCandidates.slice(0, 5);

    for (const rel of top5) {
      allRelations.push({
        sourceSlug: rel.sourceSlug,
        targetSlug: rel.targetSlug,
        score: rel.score,
        docSimilarity: rel.docSimilarity,
        chunkSimilarity: rel.chunkSimilarity,
        matchedHeading: rel.matchedHeading,
        matchedHeadingSlug: rel.matchedHeadingSlug,
        sharedTags: rel.sharedTags,
      });
    }

    const newRelatedPaths = top5.map((r) => r.targetRelativePath);
    const currentRelated = Array.isArray(source.frontmatterData.related)
      ? (source.frontmatterData.related as string[])
      : [];
    const changed =
      newRelatedPaths.length !== currentRelated.length ||
      newRelatedPaths.some((val, i) => val !== currentRelated[i]);

    if (changed || force) {
      source.frontmatterData.related = newRelatedPaths;
      await fsp.writeFile(
        source.file,
        matter.stringify(source.body, source.frontmatterData),
        "utf-8"
      );
    }
  }

  const allDocs: IndexedDocRecord[] = workItems.map((w) => ({
    slug: w.slug,
    relativePath: w.relativePath,
    title: w.title,
    summary: w.summary,
    tags: w.tags,
    date: w.date,
    contentHash: w.docContentHash,
    embedding: w.docEmbedding,
  }));

  const allChunks: IndexedChunkRecord[] = workItems.flatMap((w) => w.chunks);
  const contentFingerprint = sha256(
    allDocs.map((d) => `${d.slug}:${d.contentHash}`).join("|") +
      "||" +
      allChunks.map((c) => `${c.id}:${c.contentHash}`).join("|")
  );
  const versionHash = sha256(
    `${embeddingModel}:${targetDim}:${contentFingerprint}:${allRelations.length}`
  );

  // Preserve generatedAt if versionHash is identical and no deltas occurred so git status stays clean
  const generatedAt =
    existingBundle && existingBundle.version === versionHash && !force
      ? existingBundle.generatedAt
      : new Date().toISOString();

  const bundle: ChunksIndexBundle = {
    version: versionHash,
    generatedAt,
    embeddingModel,
    llmModel: gemma4Model,
    dimensions: targetDim,
    docs: allDocs,
    chunks: allChunks,
    relations: allRelations,
  };

  await fsp.writeFile(OUTPUT_FILE, JSON.stringify(bundle), "utf-8");

  const modalityCounts = allChunks.reduce<Record<string, number>>((acc, c) => {
    acc[c.modality] = (acc[c.modality] || 0) + 1;
    return acc;
  }, {});

  console.log(
    `[index-chunks] Wrote ${OUTPUT_FILE} (version: ${versionHash})\n` +
      `  • Documents: ${allDocs.length}\n` +
      `  • Total Chunks: ${allChunks.length} (${JSON.stringify(modalityCounts)})\n` +
      `  • Doc Relations: ${allRelations.length}`
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  runIndexPipeline({
    force: args.includes("--force"),
    updateTags: args.includes("--tags"),
    check: args.includes("--check"),
  }).catch((err) => {
    console.error("[index-chunks] Fatal error:", err);
    process.exit(1);
  });
}
