import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
    const docs = await getCollection("docs");

    const searchIndex = docs.map((doc) => ({
        title: doc.data.title,
        date: doc.data.date,
        slug: doc.slug,
        summary: doc.data.summary,
    }));

    return new Response(JSON.stringify(searchIndex), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
};
