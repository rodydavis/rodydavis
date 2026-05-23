---
name: Update Docs
description: Process all markdown documentation files to generate AI summaries and embeddings (using Ollama), apply taxonomy tags, and compute KNN related links.
---
# Update Docs Skill

This skill performs a full metadata enrichment and search-engine index build for the Astro documentation collection:
1. **AI Summaries**: Uses Ollama `gemma4:31b` to read each document and generate a concise one-sentence summary.
2. **AI Embeddings**: Uses Ollama `embeddinggemma` to compute vector embeddings of the summaries or contents, serialized in base64 within the frontmatter.
3. **Keyword Tag Syncing**: Reads `tags.txt` from the project root and automatically scans document text to apply matching tags.
4. **KNN Similarity Links**: Uses cosine similarity over all documents' embeddings to find and append the top 5 most similar articles under the `related:` key in frontmatter.

## Prerequisites

- **Ollama** must be running locally.
- The Ollama model `gemma4:31b` (for summaries) and `embeddinggemma` (for vector embeddings) must be pulled and active:
  ```bash
  ollama pull gemma4:31b
  ollama pull embeddinggemma
  ```
- A `tags.txt` file should exist in the workspace root containing one tag per line to configure taxonomy syncing.

## When to Use

Use this skill:
- After adding or modifying documentation files to generate updated embeddings, summaries, and tags.
- To refresh the "Related Posts" links for the entire site when documents are added or updated.

> [!TIP]
> The script automatically stores a `last_updated_metadata` timestamp in the frontmatter of each processed file. When executing without `--force`, it only updates documents whose file modification time is newer than the timestamp in the frontmatter, saving redundant API calls to Ollama.

## Execution

Run the script from the project root. You can pass flags to customize execution:

- **Standard Incremental Run** (only updates files with missing or newer/modified content since the last metadata run, syncs tags, and recalculates related links):
  ```bash
  node .agents/skills/update-docs/scripts/update-docs.js
  ```

- **Force Regenerate** (forces updating all summaries, embeddings, and related posts even if they already exist and have not changed):
  ```bash
  node .agents/skills/update-docs/scripts/update-docs.js --force
  ```

- **Tag Sync Only** (focuses only on updating and synchronizing tags based on `tags.txt`):
  ```bash
  node .agents/skills/update-docs/scripts/update-docs.js --tags
  ```
