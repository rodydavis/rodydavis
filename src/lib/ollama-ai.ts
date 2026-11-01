/**
 * Unified Gemma 4 AI Client (Zero gemma3 dependencies)
 *
 * Uses Gemma 4 (`gemma4:31b` / `gemma4:26b` / `gemma4:latest`) via Ollama
 * for document/chunk summarization, multimodal image captioning, and RAG synthesis.
 */

export interface OllamaAiOptions {
  ollamaHost?: string;
  model?: string;
  timeoutMs?: number;
}

const GEMMA4_CANDIDATES = ["gemma4:31b", "gemma4:26b", "gemma4:latest"];
let cachedGemma4Model: string | null = null;

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

export async function resolveGemma4Model(options: OllamaAiOptions = {}): Promise<string> {
  if (options.model) return options.model;
  const envModel = getEnv("OLLAMA_MODEL");
  if (envModel && !envModel.startsWith("gemma3")) {
    return envModel;
  }
  if (cachedGemma4Model) return cachedGemma4Model;

  const host = normalizeOllamaHost(options.ollamaHost);
  try {
    const res = await fetch(`${host}/api/tags`, {
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = (await res.json()) as { models?: Array<{ name: string }> };
      const available = new Set((data.models || []).map((m) => m.name));
      for (const candidate of GEMMA4_CANDIDATES) {
        if (available.has(candidate)) {
          cachedGemma4Model = candidate;
          return candidate;
        }
      }
      const anyGemma4 = (data.models || []).find((m) => m.name.startsWith("gemma4"));
      if (anyGemma4) {
        cachedGemma4Model = anyGemma4.name;
        return anyGemma4.name;
      }
    }
  } catch {
    // Ignore connection errors and return default Gemma 4 model tag
  }

  return "gemma4:31b";
}

export async function generateWithGemma4(
  prompt: string,
  options: OllamaAiOptions & { imagesBase64?: string[]; system?: string } = {}
): Promise<string | null> {
  const host = normalizeOllamaHost(options.ollamaHost);
  const model = await resolveGemma4Model(options);

  try {
    const payload: Record<string, unknown> = {
      model,
      prompt,
      stream: false,
      think: false,
      options: {
        temperature: 0.2,
        num_ctx: 8192,
      },
    };
    if (options.system) {
      payload.system = options.system;
    }
    if (options.imagesBase64 && options.imagesBase64.length > 0) {
      payload.images = options.imagesBase64;
    }

    const res = await fetch(`${host}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(options.timeoutMs || 45000),
    });

    if (!res.ok) return null;
    const data = (await res.json()) as { response?: string };
    return data.response?.trim() || null;
  } catch {
    return null;
  }
}

export async function generateSummaryWithGemma4(
  content: string,
  title: string,
  options: OllamaAiOptions = {}
): Promise<string | null> {
  const prompt = `Summarize the following technical article titled "${title}" in a single, concise sentence (under 160 characters). Do not use quotes or introductory phrases like "This article discusses". Output ONLY the summary sentence:\n\n${content.slice(0, 6000)}`;
  const raw = await generateWithGemma4(prompt, options);
  if (!raw) return null;
  return raw.replace(/^["']|["']$/g, "").replace(/\s+/g, " ").trim();
}

export async function describeImageMultimodalWithGemma4(
  imageBase64: string,
  altText: string,
  surroundingContext: string,
  options: OllamaAiOptions = {}
): Promise<string | null> {
  const prompt = `Describe this technical diagram or screenshot in 1-2 concise sentences for a semantic search index. Existing alt text: "${altText || "none"}". Surrounding section context: "${surroundingContext.slice(0, 400)}". Output only the description.`;
  return generateWithGemma4(prompt, {
    ...options,
    imagesBase64: [imageBase64],
    timeoutMs: options.timeoutMs || 30000,
  });
}

export interface RagChunkContext {
  slug: string;
  title: string;
  heading: string;
  headingSlug: string;
  modality: string;
  snippet: string;
}

export async function synthesizeRagAnswerWithGemma4(
  query: string,
  chunks: RagChunkContext[],
  options: OllamaAiOptions = {}
): Promise<{ answer: string; model: string } | null> {
  if (chunks.length === 0) return null;
  const model = await resolveGemma4Model(options);
  const contextBlocks = chunks
    .slice(0, 6)
    .map(
      (c, i) =>
        `[${i + 1}] Article: "${c.title}" (/${c.slug}${c.headingSlug ? `#${c.headingSlug}` : ""}) | Section: ${c.heading} (${c.modality})\n${c.snippet.replace(/<\/?mark>/g, "")}`
    )
    .join("\n\n");

  const prompt = `You are a technical assistant for Rody Davis's engineering site (rodydavis.com).
Answer the user's query concisely using ONLY the retrieved document chunks below.
Cite sources inline using markdown links like [Title - Section](/slug#heading-slug).

User Query: ${query}

Retrieved Chunks:
${contextBlocks}

Concise Grounded Answer:`;

  const response = await generateWithGemma4(prompt, {
    ...options,
    model,
    timeoutMs: options.timeoutMs || 25000,
  });

  if (!response) return null;
  return { answer: response, model };
}
