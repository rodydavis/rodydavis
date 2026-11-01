---
name: Update Docs
description: Process all markdown documentation files to generate AI summaries (Gemma 4), multimodal chunk embeddings (embeddinggemma-2), taxonomy tags, and multi-signal related links.
---
# Update Docs Skill

This skill performs a full metadata enrichment, multimodal chunking, and search-engine index build (`src/data/chunks-index.json`) for the Astro SSR documentation collection:
1. **AI Summaries**: Uses Ollama `gemma4:31b` (or `gemma4:26b` / `gemma4:latest`) to read each document and generate a concise one-sentence summary.
2. **Semantic & Multimodal Chunking (`embeddinggemma-2:latest`)**: Splits every markdown/MDX document into section chunks (`text`, `code`, `image` with vision buffers, and `video` thumbnails) and embeds each chunk + full document into 768-dimensional Matryoshka vectors via `embeddinggemma-2:latest`.
3. **Keyword Tag Syncing**: Reads `tags.txt` from the project root and automatically scans document text to apply matching tags.
4. **Multi-Signal Related Posts**: Combines document-level cosine similarity, best cross-document chunk similarity (capturing the specific matching `#heading` anchor), and tag Jaccard overlap to populate `related:` in frontmatter and `doc_relations` in `src/data/chunks-index.json`.

## Prerequisites

- **Ollama** running at `OLLAMA_HOST` (defaults to `http://127.0.0.1:11434`).
- The Ollama models `gemma4:31b` (for summaries and RAG) and `embeddinggemma-2:latest` (for multimodal text + vision vector embeddings) pulled:
  ```bash
  ollama pull gemma4:31b
  ollama pull embeddinggemma-2:latest
  ```

## Execution

- **Standard Incremental Sync & Prune** (embeds only missing/outdated chunks, reuses committed `contentHash` embeddings in `src/data/chunks-index.json` or `.cache/embeddinggemma-2-cache.json`, and deletes stale chunks/docs/thumbnails):
  ```bash
  pnpm run index:chunks
  ```
  or:
  ```bash
  node --experimental-strip-types .agents/skills/update-docs/scripts/update-docs.js
  ```

- **Read-Only CI Validation Check** (exits with `1` if any missing, outdated, or stale chunks/docs/thumbnails are detected; exits with `0` when 100% in sync):
  ```bash
  pnpm run check:chunks
  ```

- **Force Regenerate**:
  ```bash
  pnpm run index:chunks -- --force
  ```
