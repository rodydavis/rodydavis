export type Embedding = Float32Array;

export interface ScoredMatch {
    key: string;
    score: number;
}

/**
 * Calculates the cosine similarity between two vectors.
 * Returns a value between -1 and 1, where 1 means identical direction.
 */
function cosineSimilarity(a: Float32Array, b: Float32Array): number {
    if (a.length !== b.length) {
        throw new Error(`Vectors must have the same length. Got ${a.length} and ${b.length}`);
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    if (normA === 0 || normB === 0) {
        return 0;
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Finds the nearest neighbors for a query embedding from a map of embeddings.
 * Uses cosine similarity as the distance metric.
 *
 * @param query The query embedding vector
 * @param embeddings A map of keys to embedding vectors
 * @param limit The maximum number of results to return
 * @returns An array of matches sorted by score (descending)
 */
export function findNearest(
    query: Float32Array,
    embeddings: Map<string, Float32Array>,
    limit: number
): ScoredMatch[] {
    const matches: ScoredMatch[] = [];

    for (const [key, embedding] of embeddings) {
        const score = cosineSimilarity(query, embedding);
        matches.push({ key, score });
    }

    // Sort by score descending (higher similarity is better)
    matches.sort((a, b) => b.score - a.score);

    return matches.slice(0, limit);
}
