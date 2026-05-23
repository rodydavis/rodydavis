---
name: Migrate Images
description: Scrape, download, and localize external or relative images referenced in markdown files to Astro's src/assets folder and rewrite image links.
---
# Migrate Images Skill

This skill scans all Markdown files in the `src/content/docs` folder and downloads external, relative, or site-hosted images locally to the `src/assets` folder. It then automatically computes and rewrites the correct relative image links inside the markdown files.

## When to Use

Use this skill whenever:
- You copy or import posts from a remote site (e.g. `rodydavis.com`) that reference hosted images.
- You want to bundle all images locally within the Astro codebase to support optimized builds and offline operation.
- Image assets need to be cleanly categorized under Astro's `src/assets/` folder.

## How it Works

The under-the-hood script:
1. Recursively walks all `.md` files in `src/content/docs`.
2. Uses Regex to extract image reference matches `![](...)`.
3. Skips external HTTP/HTTPS absolute links unless they match the source website base domain (`https://rodydavis.com`).
4. Downloads remote/relative images using `fetch` and pipelines them to `src/assets` using sanitized safe filenames.
5. Calculates the relative path from the Markdown file to the localized image in `src/assets` and replaces the old reference in-place.

## Execution

Run this command from the project root:

```bash
node .agents/skills/migrate-images/scripts/migrate-images.js
```
