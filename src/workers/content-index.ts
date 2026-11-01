import chunksIndexData from "../data/chunks-index.json" with { type: "json" };
import type {
  ChunksIndexBundle,
  DocRelationRecord,
  IndexedChunkRecord,
  IndexedDocRecord,
} from "../../scripts/index-chunks.ts";
import {
  cosineSimilarityMrl,
  embedWithGemma2,
  getActiveMrlDim,
} from "../lib/embedding-gemma.ts";
import { synthesizeRagAnswerWithGemma4 } from "../lib/ollama-ai.ts";

const indexBundle = chunksIndexData as unknown as ChunksIndexBundle;

export interface HybridSearchMatch {
  chunkId: string;
  slug: string;
  title: string;
  heading: string;
  headingSlug: string;
  modality: "text" | "code" | "image" | "video";
  snippet: string;
  mediaUrl?: string | null;
  tags: string[];
  date: string;
  vecRank: number | null;
  ftsRank: number | null;
  vecDistance: number | null;
  ftsScore: number | null;
  combinedRank: number;
  similarity: number;
}

export interface RelatedPostItem {
  id: string;
  title: string;
  summary?: string;
  date?: string;
  score: number;
  docSimilarity?: number;
  chunkSimilarity?: number;
  matchedHeading?: string;
  matchedHeadingSlug?: string;
  sharedTags?: string[];
}

export interface SearchQueryParams {
  q?: string;
  modality?: string;
  mode?: "hybrid" | "vec" | "fts" | "rag";
  k?: number;
  rrfK?: number;
  weightVec?: number;
  weightFts?: number;
  ollamaHost?: string;
  geminiApiKey?: string;
  ollamaModel?: string;
}

/**
 * Sanitizes a user search string into a safe FTS5 query expression.
 */
export function buildSafeFts5Query(rawQuery: string): string {
  const tokens = rawQuery
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  if (tokens.length === 0) return "";
  return tokens.map((t) => `"${t}"*`).join(" OR ");
}

function highlightTextSnippet(content: string, rawQuery: string, maxLen = 220): string {
  const clean = content.replace(/\s+/g, " ").trim();
  const tokens = rawQuery
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  if (tokens.length === 0) {
    return clean.slice(0, maxLen) + (clean.length > maxLen ? "…" : "");
  }

  const lower = clean.toLowerCase();
  let startIdx = 0;
  for (const t of tokens) {
    const pos = lower.indexOf(t);
    if (pos !== -1) {
      startIdx = Math.max(0, pos - 45);
      break;
    }
  }

  let windowText = clean.slice(startIdx, startIdx + maxLen);
  if (startIdx > 0) windowText = "…" + windowText;
  if (startIdx + maxLen < clean.length) windowText = windowText + "…";

  for (const t of tokens) {
    const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    windowText = windowText.replace(
      new RegExp(`(${escaped}[a-z0-9_]*)`, "gi"),
      "<mark>$1</mark>"
    );
  }
  return windowText;
}

/**
 * Durable Object Cell (`ContentIndex`) for `denoland/celld` & Cloudflare Workers.
 * Implements Alex Garcia's `sqlite-vec` + `FTS5` Reciprocal Rank Fusion Hybrid Search
 * and Multi-Signal Related Posts lookup.
 */
export class ContentIndex {
  private sql: any;
  private env: Record<string, string | undefined>;
  private hasVec0 = false;
  private sqliteVecVersion: string | null = null;
  private initialized = false;

  constructor(state: any, env: Record<string, string | undefined>) {
    this.sql = state?.storage?.sql;
    this.env = env || {};
  }

  private ensureSeeded() {
    if (this.initialized || !this.sql) return;

    // Detect if sqlite-vec (vec0) is compiled into the runtime (true on celld)
    try {
      const row = this.sql
        .exec("SELECT vec_version() AS v")
        .one() as { v: string };
      this.hasVec0 = true;
      this.sqliteVecVersion = row.v;
    } catch {
      this.hasVec0 = false;
      this.sqliteVecVersion = null;
    }

    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS index_meta (
        key TEXT PRIMARY KEY COLLATE NOCASE,
        value TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS chunks (
        rowid INTEGER PRIMARY KEY AUTOINCREMENT,
        chunk_id TEXT UNIQUE NOT NULL COLLATE NOCASE,
        slug TEXT NOT NULL COLLATE NOCASE,
        title TEXT NOT NULL,
        heading TEXT NOT NULL,
        heading_slug TEXT NOT NULL,
        modality TEXT NOT NULL COLLATE NOCASE,
        content TEXT NOT NULL,
        media_url TEXT,
        tags TEXT NOT NULL,
        date TEXT NOT NULL
      );

      CREATE VIRTUAL TABLE IF NOT EXISTS fts_chunks USING fts5(
        title,
        heading,
        content,
        tags,
        content='chunks',
        content_rowid='rowid',
        tokenize='porter unicode61'
      );

      CREATE TABLE IF NOT EXISTS docs (
        rowid INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL COLLATE NOCASE,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        tags TEXT NOT NULL,
        date TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS doc_relations (
        source_slug TEXT NOT NULL COLLATE NOCASE,
        target_slug TEXT NOT NULL COLLATE NOCASE,
        score REAL NOT NULL,
        doc_similarity REAL NOT NULL,
        chunk_similarity REAL NOT NULL,
        matched_heading TEXT,
        matched_heading_slug TEXT,
        shared_tags TEXT,
        PRIMARY KEY (source_slug, target_slug)
      );
    `);

    if (this.hasVec0) {
      this.sql.exec(`
        CREATE VIRTUAL TABLE IF NOT EXISTS vec_chunks USING vec0(
          chunk_rowid INTEGER PRIMARY KEY,
          embedding float[768] distance_metric=cosine,
          modality TEXT PARTITION KEY
        );

        CREATE VIRTUAL TABLE IF NOT EXISTS vec_docs USING vec0(
          doc_rowid INTEGER PRIMARY KEY,
          embedding float[768] distance_metric=cosine
        );
      `);
    }

    // Check seeded version
    let currentVersion = "";
    try {
      const rows = this.sql
        .exec("SELECT value FROM index_meta WHERE LOWER(key) = 'version'")
        .toArray() as Array<{ value: string }>;
      if (rows.length > 0) currentVersion = rows[0].value;
    } catch {
      currentVersion = "";
    }

    if (currentVersion !== indexBundle.version && indexBundle.chunks.length > 0) {
      this.seedDatabase();
    }

    this.initialized = true;
  }

  private seedDatabase() {
    this.sql.exec("DELETE FROM chunks;");
    this.sql.exec("INSERT INTO fts_chunks(fts_chunks) VALUES('delete-all');");
    this.sql.exec("DELETE FROM docs;");
    this.sql.exec("DELETE FROM doc_relations;");
    if (this.hasVec0) {
      this.sql.exec("DELETE FROM vec_chunks;");
      this.sql.exec("DELETE FROM vec_docs;");
    }

    for (let i = 0; i < indexBundle.docs.length; i++) {
      const doc = indexBundle.docs[i];
      const rowid = i + 1;
      this.sql.exec(
        `INSERT INTO docs (rowid, slug, title, summary, tags, date)
         VALUES (?, ?, ?, ?, ?, ?)`,
        rowid,
        doc.slug,
        doc.title,
        doc.summary || "",
        JSON.stringify(doc.tags || []),
        doc.date || ""
      );
      if (this.hasVec0 && doc.embedding?.length === 768) {
        this.sql.exec(
          `INSERT INTO vec_docs (doc_rowid, embedding) VALUES (?, ?)`,
          rowid,
          JSON.stringify(doc.embedding)
        );
      }
    }

    for (let i = 0; i < indexBundle.chunks.length; i++) {
      const chunk = indexBundle.chunks[i];
      const rowid = i + 1;
      const tagsStr = (chunk.tags || []).join(" ");
      this.sql.exec(
        `INSERT INTO chunks (rowid, chunk_id, slug, title, heading, heading_slug, modality, content, media_url, tags, date)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        rowid,
        chunk.id,
        chunk.slug,
        chunk.title,
        chunk.heading,
        chunk.headingSlug,
        chunk.modality,
        chunk.content,
        chunk.mediaUrl || null,
        JSON.stringify(chunk.tags || []),
        chunk.date || ""
      );
      this.sql.exec(
        `INSERT INTO fts_chunks (rowid, title, heading, content, tags)
         VALUES (?, ?, ?, ?, ?)`,
        rowid,
        chunk.title,
        chunk.heading,
        chunk.content,
        tagsStr
      );
      if (this.hasVec0 && chunk.embedding?.length === 768) {
        this.sql.exec(
          `INSERT INTO vec_chunks (chunk_rowid, embedding, modality)
           VALUES (?, ?, ?)`,
          rowid,
          JSON.stringify(chunk.embedding),
          chunk.modality
        );
      }
    }

    for (const rel of indexBundle.relations) {
      this.sql.exec(
        `INSERT OR REPLACE INTO doc_relations (
           source_slug, target_slug, score, doc_similarity, chunk_similarity,
           matched_heading, matched_heading_slug, shared_tags
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        rel.sourceSlug,
        rel.targetSlug,
        rel.score,
        rel.docSimilarity,
        rel.chunkSimilarity,
        rel.matchedHeading || "",
        rel.matchedHeadingSlug || "",
        JSON.stringify(rel.sharedTags || [])
      );
    }

    this.sql.exec(
      `INSERT OR REPLACE INTO index_meta (key, value) VALUES ('version', ?)`,
      indexBundle.version
    );
  }

  async fetch(request: Request): Promise<Response> {
    this.ensureSeeded();
    const url = new URL(request.url);

    if (url.pathname.endsWith("/related")) {
      const slug = url.searchParams.get("slug") || "";
      const k = Math.min(20, Math.max(1, Number(url.searchParams.get("k") || "5")));
      const related = this.queryRelatedPosts(slug, k);
      return Response.json({
        slug,
        sqlite_vec_version: this.sqliteVecVersion,
        related,
      });
    }

    const q = (url.searchParams.get("q") || "").trim();
    const modality = (url.searchParams.get("modality") || "all").toLowerCase();
    const mode = (url.searchParams.get("mode") || "hybrid") as SearchQueryParams["mode"];
    const k = Math.min(40, Math.max(1, Number(url.searchParams.get("k") || "20")));
    const rrfK = Math.max(1, Number(url.searchParams.get("rrf_k") || "60"));
    const weightVec = Number(url.searchParams.get("weight_vec") ?? "1.0");
    const weightFts = Number(url.searchParams.get("weight_fts") ?? "1.0");

    const result = await this.executeHybridSearch({
      q,
      modality,
      mode,
      k,
      rrfK,
      weightVec,
      weightFts,
      ollamaHost: this.env.OLLAMA_HOST,
      geminiApiKey: this.env.GEMINI_API_KEY,
      ollamaModel: this.env.OLLAMA_MODEL,
    });

    return Response.json(result);
  }

  queryRelatedPosts(slug: string, k = 5): RelatedPostItem[] {
    if (!slug) return [];
    const cleanSlug = slug.replace(/\.mdx?$/, "");

    if (this.sql) {
      const rows = this.sql
        .exec(
          `SELECT
             r.target_slug AS id,
             d.title AS title,
             d.summary AS summary,
             d.date AS date,
             r.score AS score,
             r.doc_similarity AS docSimilarity,
             r.chunk_similarity AS chunkSimilarity,
             r.matched_heading AS matchedHeading,
             r.matched_heading_slug AS matchedHeadingSlug,
             r.shared_tags AS sharedTags
           FROM doc_relations r
           JOIN docs d ON LOWER(d.slug) = LOWER(r.target_slug)
           WHERE LOWER(r.source_slug) = LOWER(?)
           ORDER BY r.score DESC
           LIMIT ?`,
          cleanSlug,
          k
        )
        .toArray() as Array<Record<string, any>>;

      if (rows.length > 0) {
        return rows.map((r) => ({
          id: String(r.id),
          title: String(r.title),
          summary: r.summary ? String(r.summary) : undefined,
          date: r.date ? String(r.date) : undefined,
          score: Number(r.score),
          docSimilarity: Number(r.docSimilarity),
          chunkSimilarity: Number(r.chunkSimilarity),
          matchedHeading: r.matchedHeading ? String(r.matchedHeading) : undefined,
          matchedHeadingSlug: r.matchedHeadingSlug ? String(r.matchedHeadingSlug) : undefined,
          sharedTags: r.sharedTags ? JSON.parse(String(r.sharedTags)) : [],
        }));
      }
    }

    return getFallbackRelatedPosts(cleanSlug, k);
  }

  async executeHybridSearch(params: SearchQueryParams) {
    const q = (params.q || "").trim();
    const modality = (params.modality || "all").toLowerCase();
    const mode = params.mode || "hybrid";
    const k = params.k || 20;
    const rrfK = params.rrfK || 60;

    let weightVec = params.weightVec ?? 1.0;
    let weightFts = params.weightFts ?? 1.0;
    if (mode === "vec") {
      weightVec = 1.0;
      weightFts = 0.0;
    } else if (mode === "fts") {
      weightVec = 0.0;
      weightFts = 1.0;
    }

    const modalityCounts = indexBundle.chunks.reduce<Record<string, number>>((acc, c) => {
      acc[c.modality] = (acc[c.modality] || 0) + 1;
      return acc;
    }, {});

    if (!q) {
      return {
        query: "",
        mode,
        modality,
        sqlite_vec_version: this.sqliteVecVersion,
        embedding_model: indexBundle.embeddingModel,
        llm_model: indexBundle.llmModel,
        total_docs: indexBundle.docs.length,
        total_chunks: indexBundle.chunks.length,
        modalities: modalityCounts,
        matches: [] as HybridSearchMatch[],
        posts: indexBundle.docs.map((d) => ({
          id: d.slug,
          slug: d.slug,
          title: d.title,
          summary: d.summary,
          date: d.date,
          tags: d.tags,
        })),
      };
    }

    const isQuestion =
      q.includes("?") ||
      /^(how|what|why|where|when|who|can|does|explain|show)\b/i.test(q);
    const isCodeQuery =
      modality === "code" || /\b(code|snippet|function|class|hook|sql|dart|ts|js)\b/i.test(q);

    const queryEmbedding =
      weightVec > 0
        ? await embedWithGemma2(q, {
            task: isCodeQuery
              ? "code_retrieval"
              : isQuestion || mode === "rag"
                ? "question_answering"
                : "search_query",
            ollamaHost: params.ollamaHost,
            geminiApiKey: params.geminiApiKey,
          })
        : [];

    const ftsQuery = weightFts > 0 ? buildSafeFts5Query(q) : "";
    let matches: HybridSearchMatch[] = [];

    if (this.sql && this.hasVec0 && weightVec > 0 && ftsQuery && weightFts > 0) {
      // Alex Garcia's Single-Query SQLite CTE Hybrid Search (vec_matches + fts_matches + RRF)
      const candidateK = Math.max(k * 2, 30);
      const rows = this.sql
        .exec(
          `WITH vec_matches AS (
             SELECT
               chunk_rowid,
               row_number() OVER (ORDER BY distance) AS rank_number,
               distance
             FROM vec_chunks
             WHERE embedding MATCH ?
               AND k = ?
               AND (? = 'all' OR LOWER(modality) = LOWER(?))
           ),
           fts_matches AS (
             SELECT
               rowid AS chunk_rowid,
               row_number() OVER (ORDER BY rank) AS rank_number,
               rank AS score,
               snippet(fts_chunks, 2, '<mark>', '</mark>', '…', 24) AS match_snippet
             FROM fts_chunks
             WHERE fts_chunks MATCH ?
             LIMIT ?
           ),
           final AS (
             SELECT
               chunks.chunk_id AS chunkId,
               chunks.slug AS slug,
               chunks.title AS title,
               chunks.heading AS heading,
               chunks.heading_slug AS headingSlug,
               chunks.modality AS modality,
               chunks.content AS content,
               chunks.media_url AS mediaUrl,
               chunks.tags AS tags,
               chunks.date AS date,
               vec_matches.rank_number AS vecRank,
               fts_matches.rank_number AS ftsRank,
               (
                 COALESCE(1.0 / (? + fts_matches.rank_number), 0.0) * ? +
                 COALESCE(1.0 / (? + vec_matches.rank_number), 0.0) * ?
               ) AS combinedRank,
               vec_matches.distance AS vecDistance,
               fts_matches.score AS ftsScore,
               COALESCE(fts_matches.match_snippet, substr(chunks.content, 1, 220)) AS snippet
             FROM fts_matches
             FULL OUTER JOIN vec_matches
               ON vec_matches.chunk_rowid = fts_matches.chunk_rowid
             JOIN chunks
               ON chunks.rowid = COALESCE(fts_matches.chunk_rowid, vec_matches.chunk_rowid)
             WHERE (? = 'all' OR LOWER(chunks.modality) = LOWER(?))
             ORDER BY combinedRank DESC
             LIMIT ?
           )
           SELECT * FROM final`,
          JSON.stringify(queryEmbedding),
          candidateK,
          modality,
          modality,
          ftsQuery,
          candidateK,
          rrfK,
          weightFts,
          rrfK,
          weightVec,
          modality,
          modality,
          k
        )
        .toArray() as Array<Record<string, any>>;

      matches = rows.map((r) => ({
        chunkId: String(r.chunkId),
        slug: String(r.slug),
        title: String(r.title),
        heading: String(r.heading),
        headingSlug: String(r.headingSlug),
        modality: r.modality as HybridSearchMatch["modality"],
        snippet: String(r.snippet),
        mediaUrl: r.mediaUrl ? String(r.mediaUrl) : null,
        tags: r.tags ? JSON.parse(String(r.tags)) : [],
        date: String(r.date || ""),
        vecRank: r.vecRank != null ? Number(r.vecRank) : null,
        ftsRank: r.ftsRank != null ? Number(r.ftsRank) : null,
        vecDistance: r.vecDistance != null ? Number(r.vecDistance) : null,
        ftsScore: r.ftsScore != null ? Number(r.ftsScore) : null,
        combinedRank: Number(Number(r.combinedRank).toFixed(6)),
        similarity:
          r.vecDistance != null
            ? Number(Math.max(0, 1 - Number(r.vecDistance)).toFixed(4))
            : Number(Math.min(0.99, Number(r.combinedRank) * 30).toFixed(4)),
      }));
    } else if (this.sql && this.hasVec0 && weightVec > 0 && (!ftsQuery || weightFts === 0)) {
      // Pure vector search in sqlite-vec
      const rows = this.sql
        .exec(
          `WITH vec_matches AS (
             SELECT
               chunk_rowid,
               row_number() OVER (ORDER BY distance) AS rank_number,
               distance
             FROM vec_chunks
             WHERE embedding MATCH ?
               AND k = ?
               AND (? = 'all' OR LOWER(modality) = LOWER(?))
           )
           SELECT
             chunks.chunk_id AS chunkId,
             chunks.slug AS slug,
             chunks.title AS title,
             chunks.heading AS heading,
             chunks.heading_slug AS headingSlug,
             chunks.modality AS modality,
             chunks.content AS content,
             chunks.media_url AS mediaUrl,
             chunks.tags AS tags,
             chunks.date AS date,
             vec_matches.rank_number AS vecRank,
             vec_matches.distance AS vecDistance,
             (1.0 / (? + vec_matches.rank_number)) * ? AS combinedRank
           FROM vec_matches
           JOIN chunks ON chunks.rowid = vec_matches.chunk_rowid
           ORDER BY combinedRank DESC
           LIMIT ?`,
          JSON.stringify(queryEmbedding),
          k,
          modality,
          modality,
          rrfK,
          weightVec,
          k
        )
        .toArray() as Array<Record<string, any>>;

      matches = rows.map((r) => ({
        chunkId: String(r.chunkId),
        slug: String(r.slug),
        title: String(r.title),
        heading: String(r.heading),
        headingSlug: String(r.headingSlug),
        modality: r.modality as HybridSearchMatch["modality"],
        snippet: highlightTextSnippet(String(r.content), q),
        mediaUrl: r.mediaUrl ? String(r.mediaUrl) : null,
        tags: r.tags ? JSON.parse(String(r.tags)) : [],
        date: String(r.date || ""),
        vecRank: Number(r.vecRank),
        ftsRank: null,
        vecDistance: Number(r.vecDistance),
        ftsScore: null,
        combinedRank: Number(Number(r.combinedRank).toFixed(6)),
        similarity: Number(Math.max(0, 1 - Number(r.vecDistance)).toFixed(4)),
      }));
    } else {
      // Fallback hybrid RRF execution (when running in local dev without native sqlite-vec C extension)
      matches = runInMemoryHybridRrfSearch({
        q,
        queryEmbedding,
        modality,
        k,
        rrfK,
        weightVec,
        weightFts,
      });
    }

    let rag: { answer: string; model: string } | null = null;
    if (mode === "rag" && matches.length > 0) {
      rag = await synthesizeRagAnswerWithGemma4(
        q,
        matches.slice(0, 6).map((m) => ({
          slug: m.slug,
          title: m.title,
          heading: m.heading,
          headingSlug: m.headingSlug,
          modality: m.modality,
          snippet: m.snippet,
        })),
        {
          ollamaHost: params.ollamaHost,
          model: params.ollamaModel,
        }
      );
    }

    return {
      query: q,
      mode,
      modality,
      rrf_k: rrfK,
      weight_vec: weightVec,
      weight_fts: weightFts,
      sqlite_vec_version: this.sqliteVecVersion || "v0.1.9-compat",
      embedding_model: indexBundle.embeddingModel,
      llm_model: rag?.model || indexBundle.llmModel,
      total_docs: indexBundle.docs.length,
      total_chunks: indexBundle.chunks.length,
      modalities: modalityCounts,
      rag: rag?.answer || null,
      matches,
    };
  }
}

/**
 * Exact RRF Hybrid Search mirror for local `astro dev` when outside `celld`.
 */
export function runInMemoryHybridRrfSearch(params: {
  q: string;
  queryEmbedding: number[];
  modality: string;
  k: number;
  rrfK: number;
  weightVec: number;
  weightFts: number;
}): HybridSearchMatch[] {
  const { q, queryEmbedding, modality, k, rrfK, weightVec, weightFts } = params;
  const targetDim = getActiveMrlDim();
  const candidateK = Math.max(k * 2, 30);

  const filteredChunks = indexBundle.chunks.filter(
    (c) => modality === "all" || c.modality.toLowerCase() === modality.toLowerCase()
  );

  // 1. vec_matches CTE equivalent
  const vecMap = new Map<string, { rank: number; distance: number }>();
  if (weightVec > 0 && queryEmbedding.length > 0) {
    const vecScored = filteredChunks
      .map((c) => {
        const sim = cosineSimilarityMrl(queryEmbedding, c.embedding, targetDim);
        return { id: c.id, distance: Math.max(0, 1 - sim) };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, candidateK);

    vecScored.forEach((item, idx) => {
      vecMap.set(item.id, { rank: idx + 1, distance: item.distance });
    });
  }

  // 2. fts_matches CTE equivalent (BM25-style lexical term scoring)
  const ftsMap = new Map<string, { rank: number; score: number }>();
  if (weightFts > 0) {
    const queryTerms = q
      .toLowerCase()
      .replace(/[^a-z0-9_]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter((t) => t.length >= 2);

    if (queryTerms.length > 0) {
      const ftsScored: Array<{ id: string; score: number }> = [];
      for (const c of filteredChunks) {
        const titleLower = c.title.toLowerCase();
        const headingLower = c.heading.toLowerCase();
        const contentLower = c.content.toLowerCase();
        const tagsLower = (c.tags || []).join(" ").toLowerCase();

        let termScore = 0;
        for (const term of queryTerms) {
          if (titleLower.includes(term)) termScore += 4.0;
          if (headingLower.includes(term)) termScore += 3.0;
          if (tagsLower.includes(term)) termScore += 2.5;
          if (contentLower.includes(term)) {
            const occurrences = contentLower.split(term).length - 1;
            termScore += Math.min(4.0, 1.0 + occurrences * 0.5);
          }
        }
        if (termScore > 0) {
          // FTS5 rank is negative (more negative = better)
          ftsScored.push({ id: c.id, score: -Number(termScore.toFixed(4)) });
        }
      }
      ftsScored.sort((a, b) => a.score - b.score);
      ftsScored.slice(0, candidateK).forEach((item, idx) => {
        ftsMap.set(item.id, { rank: idx + 1, score: item.score });
      });
    }
  }

  // 3. FULL OUTER JOIN + Reciprocal Rank Fusion (RRF)
  const unionIds = new Set<string>([...vecMap.keys(), ...ftsMap.keys()]);
  const chunkLookup = new Map<string, IndexedChunkRecord>(
    filteredChunks.map((c) => [c.id, c])
  );

  const combined: HybridSearchMatch[] = [];
  for (const id of unionIds) {
    const chunk = chunkLookup.get(id);
    if (!chunk) continue;
    const v = vecMap.get(id);
    const f = ftsMap.get(id);

    const combinedRank =
      (f ? (1.0 / (rrfK + f.rank)) * weightFts : 0.0) +
      (v ? (1.0 / (rrfK + v.rank)) * weightVec : 0.0);

    combined.push({
      chunkId: chunk.id,
      slug: chunk.slug,
      title: chunk.title,
      heading: chunk.heading,
      headingSlug: chunk.headingSlug,
      modality: chunk.modality,
      snippet: highlightTextSnippet(chunk.content, q),
      mediaUrl: chunk.mediaUrl || null,
      tags: chunk.tags || [],
      date: chunk.date || "",
      vecRank: v ? v.rank : null,
      ftsRank: f ? f.rank : null,
      vecDistance: v ? Number(v.distance.toFixed(4)) : null,
      ftsScore: f ? f.score : null,
      combinedRank: Number(combinedRank.toFixed(6)),
      similarity: v
        ? Number(Math.max(0, 1 - v.distance).toFixed(4))
        : Number(Math.min(0.99, combinedRank * 30).toFixed(4)),
    });
  }

  combined.sort((a, b) => b.combinedRank - a.combinedRank);
  return combined.slice(0, k);
}

export function getFallbackRelatedPosts(slug: string, k = 5): RelatedPostItem[] {
  const cleanSlug = slug.replace(/\.mdx?$/, "").toLowerCase();
  const docMap = new Map<string, IndexedDocRecord>(
    indexBundle.docs.map((d) => [d.slug.toLowerCase(), d])
  );

  const relations = indexBundle.relations
    .filter((r) => r.sourceSlug.toLowerCase() === cleanSlug)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);

  return relations
    .map((rel) => {
      const targetDoc = docMap.get(rel.targetSlug.toLowerCase());
      if (!targetDoc) return null;
      return {
        id: targetDoc.slug,
        title: targetDoc.title,
        summary: targetDoc.summary,
        date: targetDoc.date,
        score: rel.score,
        docSimilarity: rel.docSimilarity,
        chunkSimilarity: rel.chunkSimilarity,
        matchedHeading: rel.matchedHeading,
        matchedHeadingSlug: rel.matchedHeadingSlug,
        sharedTags: rel.sharedTags,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);
}
