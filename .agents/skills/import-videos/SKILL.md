---
name: Import Videos
description: Import YouTube video details using yt-dlp, automatically generating Astro Markdown pages with metadata, iframe embeds, and descriptions.
---
# Import Videos Skill

This skill lets you automatically import YouTube videos into your Astro documentation site. It parses a list of video URLs, fetches their metadata using `yt-dlp`, and generates dedicated markdown files with rich frontmatter and video embeds.

## Prerequisites

- The command line utility `yt-dlp` must be installed and available in the system path.
- A `videos.txt` file should exist in the root of your workspace, containing one YouTube video URL per line.

## When to Use

Use this skill whenever:
- You want to sync your YouTube video uploads into the local Astro content collections.
- You have updated `videos.txt` with new YouTube URLs that need importing.

## How it Works

The under-the-hood import script:
1. Reads `videos.txt` from the project root.
2. For each URL, executes `yt-dlp --dump-json` to fetch the video's title, description, id, and upload date.
3. Automatically fetches the video transcript from `https://defuddle.md/youtube.com/watch?v=<id>` using `curl`.
4. Handles rate limits dynamically (with automatic sleep/retry backoffs).
5. Generates a clean URL slug.
6. Generates a markdown file under `src/content/docs/videos/<slug>.md` with structured Astro frontmatter (title, summary, date, draft, tags), an embedded `<SocialEmbed />` component, and the full timestamped transcript.

---

## Execution

Ensure `videos.txt` has the target YouTube URLs, then run this command from the project root to import them:

```bash
node .agents/skills/import-videos/scripts/import-videos.mjs
```

### Refresh / Bulk Update Existing Transcripts

To batch-refresh transcripts for existing markdown files in the repository (e.g., if transcripts were missing or failed to download), use the companion `update-transcripts.js` script:

- **Process Everything** (Both podcasts and videos):
  ```bash
  node .agents/skills/import-videos/scripts/update-transcripts.js
  ```

- **Podcasts Only**:
  ```bash
  node .agents/skills/import-videos/scripts/update-transcripts.js --podcasts-only
  ```

- **Videos Only**:
  ```bash
  node .agents/skills/import-videos/scripts/update-transcripts.js --videos-only
  ```
