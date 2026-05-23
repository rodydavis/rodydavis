---
name: Inject Titles
description: Ensure all markdown documents have their frontmatter titles injected as standard H1 headings at the start of the body.
---
# Inject Titles Skill

This skill ensures that all Markdown files in `src/content/docs` have their frontmatter-defined `title` cleanly prepended as the primary `# Title` (H1) heading at the very beginning of the document body.

## When to Use

Use this skill:
- When importing documents that have a frontmatter `title` but lack the matching `# Title` heading in the markdown text.
- To ensure uniform, consistent document heading hierarchy across all content pages.

## How it Works

The under-the-hood script:
1. Recursively walks all `.md` files in `src/content/docs`.
2. Reads each document using `gray-matter`.
3. Verifies if `title` is defined in frontmatter.
4. Checks if the body already starts with `# Title`.
5. Prepends `# Title` if missing, and saves the file back.

## Execution

Run this command from the project root:

```bash
node .agents/skills/inject-titles/scripts/inject-titles.js
```
