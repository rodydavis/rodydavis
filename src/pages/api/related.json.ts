import type { APIRoute } from "astro";
import { getFallbackRelatedPosts } from "../../workers/content-index";

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

export async function fetchRelatedForPost(
  slug: string,
  context?: any,
  k = 5
) {
  if (!slug) return [];
  const runtimeEnv = context ? await resolveRuntimeEnv(context) : {};

  if (runtimeEnv?.CONTENT_INDEX) {
    try {
      const ns = runtimeEnv.CONTENT_INDEX;
      const stub =
        typeof ns.getByName === "function"
          ? ns.getByName("main")
          : ns.get(ns.idFromName("main"));
      const doUrl = new URL("/related", "http://content-index");
      doUrl.searchParams.set("slug", slug);
      doUrl.searchParams.set("k", String(k));
      const res = await stub.fetch(doUrl.toString());
      if (res.ok) {
        const json = (await res.json()) as { related?: any[] };
        if (Array.isArray(json.related) && json.related.length > 0) {
          return json.related;
        }
      }
    } catch {
      // Fall through to precomputed multi-signal index
    }
  }

  return getFallbackRelatedPosts(slug, k);
}

export const GET: APIRoute = async (context) => {
  const url = new URL(context.request.url);
  const slug = (url.searchParams.get("slug") || "").trim();
  const k = Math.min(20, Math.max(1, Number(url.searchParams.get("k") || "5")));

  const related = await fetchRelatedForPost(slug, context, k);
  return new Response(
    JSON.stringify({
      slug,
      related,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
