import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { buildFileTree } from "../../utils/data";

export const prerender = true;

export async function getFileTree() {
    const docs = await getCollection("docs");
    const fileTree = buildFileTree(docs);
    return fileTree;
}

export const GET: APIRoute = async () => {
    const fileTree = await getFileTree();
    return new Response(JSON.stringify(fileTree), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
};
