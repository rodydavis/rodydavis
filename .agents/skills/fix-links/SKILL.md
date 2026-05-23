---
name: Fix Links
description: Auto-correct relative links, asset paths, and related links in markdown documents based on folder depth.
---
# Fix Links Skill

This skill allows you to automatically scan the entire `src/content/docs` directory and fix broken or misaligned relative links, asset paths, and related links in the frontmatter of Markdown files.

## When to Use

Use this skill whenever:
- You add new Markdown files in subfolders.
- You move existing Markdown files to different directories or depths.
- Relative assets under `assets/` or other internal markdown references (`.md`) become misaligned.
- Related links in the frontmatter (`related:` section) need deep-path relative adjustments.

## How it Works

The under-the-hood script:
1. Recursively walks all `.md` files in `src/content/docs`.
2. Computes the folder depth of each file relative to `src/content/docs`.
3. Auto-corrects image and video references (`![alt](path/to/assets)` or HTML `<iframe src="...">` / `<img src="...">`) to have the correct depth prefix.
4. Cleanly adjusts standard relative internal markdown links `[text](file.md)` so they don't break when browsed.
5. Recursively fixes links declared under `related:` in the YAML frontmatter of each file.

## Execution

Run this command from the project root directory:

```bash
node .agents/skills/fix-links/scripts/fix-links.cjs
```
