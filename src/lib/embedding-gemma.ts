/**
 * Multimodal EmbeddingGemma-2 Engine (768d Matryoshka Representation Learning)
 *
 * Supports:
 * 1. Ollama (`embeddinggemma-2:latest`) for text, code, and multimodal vision (images/thumbnails)
 * 2. Google Gemini API (`gemini-embedding-2`) fallback for text & multimodal inlineData
 * 3. Deterministic Local MRL Projection fallback (software/engineering & multimedia tuned)
 */

export type MrlDimension = 128 | 256 | 512 | 768;

export type EmbeddingTaskType =
  | "search_query"
  | "question_answering"
  | "fact_verification"
  | "code_retrieval"
  | "document"
  | "clustering"
  | "sts";

export interface EmbeddingGemmaOptions {
  task?: EmbeddingTaskType;
  title?: string;
  dimensions?: MrlDimension;
  imagesBase64?: string[];
  mimeType?: string;
  ollamaHost?: string;
  geminiApiKey?: string;
  model?: string;
}

function getEnv(key: string, fallback = ""): string {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  return fallback;
}

export function normalizeOllamaHost(raw?: string): string {
  let host = (raw || getEnv("OLLAMA_HOST", "http://127.0.0.1:11434")).trim();
  if (!host) return "http://127.0.0.1:11434";
  if (!/^https?:\/\//i.test(host)) {
    host = `http://${host}`;
  }
  return host.replace(/\/\/0\.0\.0\.0\b/, "//127.0.0.1").replace(/\/$/, "");
}

export function getActiveMrlDim(explicitDim?: number): MrlDimension {
  const raw = explicitDim ?? Number(getEnv("EMBEDDING_MRL_DIM", "768"));
  if (raw === 128 || raw === 256 || raw === 512 || raw === 768) {
    return raw;
  }
  return 768;
}

/**
 * Formats input text using EmbeddingGemma-2's official task-steered prompt templates.
 */
export function formatEmbeddingGemmaPrompt(
  text: string,
  options: EmbeddingGemmaOptions = {}
): string {
  const task = options.task || "search_query";
  const clean = text.trim();

  switch (task) {
    case "search_query":
      return `task: search result | query: ${clean}`;
    case "question_answering":
      return `task: question answering | query: ${clean}`;
    case "fact_verification":
      return `task: fact checking | query: ${clean}`;
    case "code_retrieval":
      return `task: code retrieval | query: ${clean}`;
    case "document":
      return `title: ${options.title || "none"} | text: ${clean}`;
    case "clustering":
      return `task: clustering | query: ${clean}`;
    case "sts":
      return `task: sentence similarity | query: ${clean}`;
    default:
      return clean;
  }
}

/**
 * Truncates a vector to the target Matryoshka dimension (128, 256, 512, or 768)
 * and re-normalizes it to unit L2 length for cosine similarity.
 */
export function truncateAndNormalize(
  vector: number[],
  targetDim: MrlDimension = getActiveMrlDim()
): number[] {
  const sliced = vector.slice(0, targetDim);
  while (sliced.length < targetDim) {
    sliced.push(0);
  }
  let normSq = 0;
  for (let i = 0; i < sliced.length; i++) {
    normSq += sliced[i] * sliced[i];
  }
  const norm = Math.sqrt(normSq);
  if (norm < 1e-12) return sliced;
  return sliced.map((v) => Number((v / norm).toFixed(6)));
}

/**
 * Cosine similarity between two vectors, supporting dynamic Matryoshka dimensions.
 */
export function cosineSimilarityMrl(
  vecA: number[],
  vecB: number[],
  dim?: MrlDimension
): number {
  const len = Math.min(vecA.length, vecB.length, dim || 768);
  if (len === 0) return 0;

  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < len; i++) {
    dot += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom < 1e-12 ? 0 : dot / denom;
}

const TECH_TOPIC_CLUSTERS: string[][] = [
  ["flutter", "dart", "widget", "material", "canvas", "animation", "mobile", "ios", "android", "xcode", "fastlane"],
  ["astro", "ssr", "cloudflare", "celld", "worker", "durable", "edge", "island", "mdx", "markdown", "vite"],
  ["sqlite", "sql", "database", "vec0", "sqlite-vec", "fts5", "vector", "embedding", "hybrid", "search", "powersync"],
  ["ai", "gemma", "ollama", "llm", "rag", "multimodal", "gemini", "palm", "prompt", "inference", "model"],
  ["signals", "preact", "reactive", "state", "hooks", "effect", "computed", "store", "nanostores"],
  ["web", "lit", "webcomponents", "html", "css", "tailwind", "typescript", "javascript", "dom", "shadow"],
  ["editor", "monaco", "codemirror", "vscode", "syntax", "highlight", "sandbox", "ide", "git"],
  ["media", "audio", "video", "youtube", "podcast", "piano", "midi", "music", "sheet", "canvas", "webgl"],
  ["backend", "pocketbase", "server", "api", "rest", "webrtc", "docker", "cloudrun", "auth", "realtime"],
];

function fnv1aHash(str: string, seed = 2166136261): number {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

/**
 * Deterministic 768-dim Matryoshka-ordered local semantic projection fallback.
 */
export function computeLocalMrlEmbedding(
  text: string,
  options: EmbeddingGemmaOptions = {}
): number[] {
  const targetDim = options.dimensions || getActiveMrlDim();
  const vec = new Float64Array(768);
  const fullText = `${options.title || ""} ${text}`.toLowerCase();
  const clean = fullText.replace(/[^a-z0-9_#/-]+/g, " ").trim();
  const words = clean.split(/\s+/).filter((w) => w.length > 1);

  if (words.length === 0 && (!options.imagesBase64 || options.imagesBase64.length === 0)) {
    return new Array(targetDim).fill(0);
  }

  for (let c = 0; c < TECH_TOPIC_CLUSTERS.length; c++) {
    const cluster = TECH_TOPIC_CLUSTERS[c];
    let clusterScore = 0;
    for (const w of words) {
      for (const term of cluster) {
        if (w === term || (w.length >= 4 && (w.startsWith(term) || term.startsWith(w)))) {
          clusterScore += 1.5;
        }
      }
    }
    if (clusterScore > 0) {
      for (let k = 0; k < 8; k++) {
        const idx = (c * 8 + k) % 128;
        const sign = (fnv1aHash(`${c}:${k}`, 101) & 1) === 0 ? 1 : -1;
        vec[idx] += sign * clusterScore * 1.6;
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const weight = w.length >= 6 ? 1.8 : 1.1;

    const hCore1 = fnv1aHash(w, 0x811c9dc5);
    const hCore2 = fnv1aHash(w, 0x9e3779b9);
    vec[hCore1 % 128] += (hCore1 & 1 ? 1 : -1) * weight;
    vec[hCore2 % 128] += (hCore2 & 1 ? 1 : -1) * weight * 0.8;

    const hMid = fnv1aHash(w, 0x85ebca6b);
    vec[128 + (hMid % 128)] += (hMid & 1 ? 1 : -1) * weight;

    if (i < words.length - 1) {
      const bigram = `${w}_${words[i + 1]}`;
      const hBi = fnv1aHash(bigram, 0xc2b2ae35);
      vec[256 + (hBi % 256)] += (hBi & 1 ? 1 : -1) * 1.3;
    }

    for (let g = 0; g <= w.length - 3; g++) {
      const tri = w.slice(g, g + 3);
      const hTri = fnv1aHash(tri, 0x27d4eb2f);
      vec[512 + (hTri % 256)] += (hTri & 1 ? 1 : -1) * 0.45;
    }
  }

  // If multimodal image data is present in fallback mode, project a deterministic image fingerprint
  if (options.imagesBase64 && options.imagesBase64.length > 0) {
    const sample = options.imagesBase64[0].slice(0, 512);
    const hImg = fnv1aHash(sample, 0x165667b1);
    vec[hImg % 128] += 1.2;
    vec[128 + (hImg % 128)] += 0.9;
  }

  return truncateAndNormalize(Array.from(vec), targetDim);
}

/**
 * Generates an EmbeddingGemma-2 vector (768d MRL) for text, code, or multimodal (image + text) inputs.
 */
export async function embedWithGemma2(
  text: string,
  options: EmbeddingGemmaOptions = {}
): Promise<number[]> {
  const targetDim = options.dimensions || getActiveMrlDim();
  const formattedPrompt = formatEmbeddingGemmaPrompt(text, options);

  // 1. Try Ollama `embeddinggemma-2:latest` (supports both text and vision/images)
  const ollamaHost = normalizeOllamaHost(options.ollamaHost);
  const ollamaModel =
    options.model ||
    getEnv("EMBEDDING_GEMMA_MODEL", "embeddinggemma-2:latest");

  if (ollamaHost) {
    try {
      const bodyPayload: Record<string, unknown> = {
        model: ollamaModel,
        input: formattedPrompt,
        dimensions: targetDim,
      };
      if (options.imagesBase64 && options.imagesBase64.length > 0) {
        bodyPayload.images = options.imagesBase64;
      }

      const res = await fetch(`${ollamaHost}/api/embed`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload),
        signal: AbortSignal.timeout(15000),
      });

      if (res.ok) {
        const json = (await res.json()) as {
          embeddings?: number[][];
          embedding?: number[];
        };
        const rawVec = json.embeddings?.[0] || json.embedding;
        if (Array.isArray(rawVec) && rawVec.length > 0) {
          return truncateAndNormalize(rawVec, targetDim);
        }
      }
    } catch {
      // Fall through to Gemini API or deterministic local MRL fallback
    }
  }

  // 2. Try Google Gemini API (`gemini-embedding-2`) if GEMINI_API_KEY is available
  const geminiKey = options.geminiApiKey || getEnv("GEMINI_API_KEY");
  if (geminiKey) {
    try {
      const geminiTaskMap: Record<EmbeddingTaskType, string> = {
        search_query: "RETRIEVAL_QUERY",
        question_answering: "QUESTION_ANSWERING",
        fact_verification: "FACT_VERIFICATION",
        code_retrieval: "CODE_RETRIEVAL_QUERY",
        document: "RETRIEVAL_DOCUMENT",
        clustering: "CLUSTERING",
        sts: "SEMANTIC_SIMILARITY",
      };

      const parts: Array<Record<string, unknown>> = [{ text }];
      if (options.imagesBase64 && options.imagesBase64.length > 0) {
        for (const data of options.imagesBase64) {
          parts.push({
            inlineData: {
              mimeType: options.mimeType || "image/png",
              data,
            },
          });
        }
      }

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "models/gemini-embedding-2",
            content: { parts },
            taskType: geminiTaskMap[options.task || "search_query"],
            title: options.title,
            outputDimensionality: targetDim,
          }),
          signal: AbortSignal.timeout(10000),
        }
      );

      if (res.ok) {
        const json = (await res.json()) as { embedding?: { values?: number[] } };
        if (json.embedding?.values?.length) {
          return truncateAndNormalize(json.embedding.values, targetDim);
        }
      }
    } catch {
      // Fall through to deterministic local MRL
    }
  }

  // 3. Deterministic Local MRL Projection Fallback
  return computeLocalMrlEmbedding(text, options);
}

/**
 * Batch embeds multiple text/code strings in a single Ollama `/api/embed` forward pass.
 */
export async function embedBatchWithGemma2(
  items: Array<{ text: string; task?: EmbeddingTaskType; title?: string }>,
  options: EmbeddingGemmaOptions = {}
): Promise<number[][]> {
  if (items.length === 0) return [];
  const targetDim = options.dimensions || getActiveMrlDim();
  const formattedInputs = items.map((item) =>
    formatEmbeddingGemmaPrompt(item.text, {
      ...options,
      task: item.task || options.task || "document",
      title: item.title || options.title,
    })
  );

  const ollamaHost = normalizeOllamaHost(options.ollamaHost);
  const ollamaModel =
    options.model ||
    getEnv("EMBEDDING_GEMMA_MODEL", "embeddinggemma-2:latest");

  if (ollamaHost) {
    try {
      const res = await fetch(`${ollamaHost}/api/embed`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: ollamaModel,
          input: formattedInputs,
          dimensions: targetDim,
        }),
        signal: AbortSignal.timeout(60000),
      });

      if (res.ok) {
        const json = (await res.json()) as { embeddings?: number[][] };
        if (
          Array.isArray(json.embeddings) &&
          json.embeddings.length === items.length
        ) {
          return json.embeddings.map((vec) =>
            truncateAndNormalize(vec, targetDim)
          );
        }
      }
    } catch {
      // Fall through to individual embedWithGemma2 calls
    }
  }

  const results: number[][] = [];
  for (const item of items) {
    results.push(
      await embedWithGemma2(item.text, {
        ...options,
        task: item.task || options.task || "document",
        title: item.title || options.title,
      })
    );
  }
  return results;
}

