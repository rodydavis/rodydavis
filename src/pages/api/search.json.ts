import type { APIRoute } from "astro";
import { ContentIndex } from "../../workers/content-index";

async function resolveRuntimeEnv(context: any): Promise<Record<string, any>> {
  if (context?.locals?.runtime?.env) {
    return context.locals.runtime.env;
  }
  try {
    const cf = await import("cloudflare:workers");
    if (cf && cf.env) return cf.env as Record<string, any>;
  } catch {
    // Not in workerd environment
  }
  return typeof process !== "undefined" ? (process.env as Record<string, any>) : {};
}

export const GET: APIRoute = async (context) => {
  const url = new URL(context.request.url);
  const runtimeEnv = await resolveRuntimeEnv(context);

  // 1. If CONTENT_INDEX Durable Object binding is available (celld / Cloudflare Worker)
  if (runtimeEnv?.CONTENT_INDEX) {
    try {
      const ns = runtimeEnv.CONTENT_INDEX;
      const stub =
        typeof ns.getByName === "function"
          ? ns.getByName("main")
          : ns.get(ns.idFromName("main"));
      const doUrl = new URL("/search", "http://content-index");
      doUrl.search = url.search;
      const res = await stub.fetch(doUrl.toString());
      if (res.ok) {
        const body = await res.text();
        return new Response(body, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (err) {
      console.warn("[api/search.json] DO fallback:", err);
    }
  }

  // 2. Direct execution fallback
  const instance = new ContentIndex(null, runtimeEnv);
  const q = (url.searchParams.get("q") || "").trim();
  const modality = (url.searchParams.get("modality") || "all").toLowerCase();
  const mode = (url.searchParams.get("mode") || "hybrid") as
    | "hybrid"
    | "vec"
    | "fts"
    | "rag";
  const k = Math.min(40, Math.max(1, Number(url.searchParams.get("k") || "20")));
  const rrfK = Math.max(1, Number(url.searchParams.get("rrf_k") || "60"));
  const weightVec = Number(url.searchParams.get("weight_vec") ?? "1.0");
  const weightFts = Number(url.searchParams.get("weight_fts") ?? "1.0");

  const result = await instance.executeHybridSearch({
    q,
    modality,
    mode,
    k,
    rrfK,
    weightVec,
    weightFts,
    ollamaHost: runtimeEnv?.OLLAMA_HOST,
    geminiApiKey: runtimeEnv?.GEMINI_API_KEY,
    ollamaModel: runtimeEnv?.OLLAMA_MODEL,
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
