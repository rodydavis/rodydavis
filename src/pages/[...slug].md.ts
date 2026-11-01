import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const GET: APIRoute = async (context) => {
    const { slug } = context.params;

    if (slug === undefined) {
        return new Response("/");
    }

    let doc = await getEntry("docs", slug);

    if (!doc) {
        const docs = await getCollection("docs");
        // look for posts/* prefix
        doc = docs.find((d) => d.id.startsWith(`posts/${slug}`));
    }

    if (!doc) {
        return new Response("/404", { status: 404 });
    }

    return new Response(doc.body, {
        headers: { 'Content-Type': 'text/markdown' }
    });
}
