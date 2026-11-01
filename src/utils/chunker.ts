import path from "node:path";

export type ChunkModality = "text" | "code" | "image" | "video";

export interface ContentChunk {
  id: string;
  slug: string;
  title: string;
  heading: string;
  headingSlug: string;
  modality: ChunkModality;
  content: string;
  mediaUrl?: string;
  assetPath?: string;
  tags: string[];
  date: string;
}

export interface DocumentChunkInput {
  slug: string;
  filePath: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  body: string;
}

/**
 * Generates a GitHub-slugger compatible anchor ID from a heading string.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_~[\]()<>!@#$%^&+=|\\:;"'?,./]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

interface RawSection {
  heading: string;
  headingSlug: string;
  lines: string[];
}

/**
 * Splits a markdown/MDX document body into sections along H1/H2/H3 boundaries
 * (supporting both ATX `#` headings and Setext `===`/`---` headings outside code blocks).
 */
function splitIntoSections(body: string, docTitle: string): RawSection[] {
  const lines = body.split(/\r?\n/);
  const sections: RawSection[] = [];
  let current: RawSection = {
    heading: docTitle,
    headingSlug: slugifyHeading(docTitle),
    lines: [],
  };

  let inCodeFence = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inCodeFence = !inCodeFence;
      current.lines.push(line);
      continue;
    }

    if (!inCodeFence) {
      // Check ATX heading (#, ##, ###, ####)
      const atxMatch = line.match(/^(#{1,4})\s+(.+?)\s*$/);
      if (atxMatch) {
        if (current.lines.join("\n").trim().length > 0) {
          sections.push(current);
        }
        const headingText = atxMatch[2].replace(/\{#.*\}$/, "").trim();
        current = {
          heading: headingText || docTitle,
          headingSlug: slugifyHeading(headingText || docTitle),
          lines: [],
        };
        continue;
      }

      // Check Setext heading (next line is === or ---)
      if (
        i + 1 < lines.length &&
        trimmed.length > 0 &&
        !trimmed.startsWith("-") &&
        !trimmed.startsWith("*") &&
        !trimmed.startsWith(">") &&
        !trimmed.startsWith("|")
      ) {
        const nextTrimmed = lines[i + 1].trim();
        if (/^(={3,}|-{3,})$/.test(nextTrimmed)) {
          if (current.lines.join("\n").trim().length > 0) {
            sections.push(current);
          }
          const headingText = trimmed;
          current = {
            heading: headingText,
            headingSlug: slugifyHeading(headingText),
            lines: [],
          };
          i++; // skip underline
          continue;
        }
      }
    }

    current.lines.push(line);
  }

  if (current.lines.join("\n").trim().length > 0) {
    sections.push(current);
  }

  return sections;
}

/**
 * Extracts chunks (text, code, image, video) from a single markdown/MDX document.
 */
export function chunkDocument(
  doc: DocumentChunkInput,
  maxChars = 1200,
  overlapChars = 150
): ContentChunk[] {
  const chunks: ContentChunk[] = [];
  const tags = (doc.tags || []).map((t) => t.trim().toLowerCase()).filter(Boolean);
  const sections = splitIntoSections(doc.body, doc.title);
  let chunkCounter = 0;

  for (const section of sections) {
    const rawSectionText = section.lines.join("\n").trim();
    if (!rawSectionText) continue;

    // 1. Extract embedded images (`![alt](url)`) as multimodal image chunks
    const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    const imageStripRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    for (const imgMatch of rawSectionText.matchAll(imageRegex)) {
      const altText = imgMatch[1].trim();
      const rawUrl = imgMatch[2].trim();
      let assetPath: string | undefined;
      let mediaUrl = rawUrl;

      if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://") && !rawUrl.startsWith("/")) {
        const resolved = path.resolve(path.dirname(doc.filePath), rawUrl);
        assetPath = resolved;
      }

      const surroundingContext = rawSectionText
        .replace(imageStripRegex, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 360);

      const fileNameLabel = path.basename(rawUrl, path.extname(rawUrl)).replace(/[-_]/g, " ");
      const caption = [
        altText ? `Image: ${altText}` : `Image (${fileNameLabel}) in ${section.heading}`,
        `Section: ${section.heading}`,
        surroundingContext,
      ]
        .filter(Boolean)
        .join(" — ");

      chunks.push({
        id: `${doc.slug}#${section.headingSlug}:img-${chunkCounter++}`,
        slug: doc.slug,
        title: doc.title,
        heading: section.heading,
        headingSlug: section.headingSlug,
        modality: "image",
        content: caption,
        mediaUrl,
        assetPath,
        tags,
        date: doc.date,
      });
    }

    // 2. Extract embedded YouTube videos (<SocialEmbed platform="youtube" id="..." /> or YouTube links)
    const socialEmbedRegex = /<SocialEmbed[^>]*platform=["']youtube["'][^>]*id=["']([a-zA-Z0-9_-]+)["'][^>]*>/gi;
    const socialEmbedAltRegex = /<SocialEmbed[^>]*id=["']([a-zA-Z0-9_-]+)["'][^>]*platform=["']youtube["'][^>]*>/gi;
    const ytIds = new Set<string>();

    let ytMatch: RegExpExecArray | null;
    while ((ytMatch = socialEmbedRegex.exec(rawSectionText)) !== null) {
      ytIds.add(ytMatch[1]);
    }
    while ((ytMatch = socialEmbedAltRegex.exec(rawSectionText)) !== null) {
      ytIds.add(ytMatch[1]);
    }
    const iframeMatch = rawSectionText.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);
    if (iframeMatch) ytIds.add(iframeMatch[1]);

    for (const ytId of ytIds) {
      const surroundingProse = rawSectionText
        .replace(/<SocialEmbed[^>]*\/?>/gi, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 420);

      chunks.push({
        id: `${doc.slug}#${section.headingSlug}:vid-${chunkCounter++}`,
        slug: doc.slug,
        title: doc.title,
        heading: section.heading,
        headingSlug: section.headingSlug,
        modality: "video",
        content: `Video: ${doc.title} (${section.heading}) — ${surroundingProse || doc.summary || ""}`.trim(),
        mediaUrl: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
        tags,
        date: doc.date,
      });
    }

    // 3. Split section into fenced code blocks and prose blocks
    const blocks: Array<{ type: "code" | "text"; text: string }> = [];
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let codeMatch: RegExpExecArray | null;

    while ((codeMatch = codeBlockRegex.exec(rawSectionText)) !== null) {
      if (codeMatch.index > lastIndex) {
        const prose = rawSectionText.slice(lastIndex, codeMatch.index).trim();
        if (prose) blocks.push({ type: "text", text: prose });
      }
      const lang = codeMatch[1] || "code";
      const codeBody = codeMatch[2].trim();
      if (codeBody.length >= 25) {
        blocks.push({
          type: "code",
          text: `[${lang}] ${section.heading}\n\`\`\`${lang}\n${codeBody.slice(0, 1400)}\n\`\`\``,
        });
      }
      lastIndex = codeMatch.index + codeMatch[0].length;
    }

    if (lastIndex < rawSectionText.length) {
      const trailingProse = rawSectionText.slice(lastIndex).trim();
      if (trailingProse) blocks.push({ type: "text", text: trailingProse });
    }

    for (const block of blocks) {
      if (block.type === "code") {
        chunks.push({
          id: `${doc.slug}#${section.headingSlug}:code-${chunkCounter++}`,
          slug: doc.slug,
          title: doc.title,
          heading: section.heading,
          headingSlug: section.headingSlug,
          modality: "code",
          content: block.text,
          tags,
          date: doc.date,
        });
        continue;
      }

      // Clean markdown image/embed tags and top-level MDX import statements from prose chunk text
      const cleanedProse = block.text
        .replace(/^import\s+[\s\S]*?from\s+["'][^"']+["'];?\s*$/gm, "")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/<SocialEmbed[^>]*\/?>/gi, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

      if (cleanedProse.length < 20) continue;

      if (cleanedProse.length <= maxChars) {
        chunks.push({
          id: `${doc.slug}#${section.headingSlug}:txt-${chunkCounter++}`,
          slug: doc.slug,
          title: doc.title,
          heading: section.heading,
          headingSlug: section.headingSlug,
          modality: "text",
          content: cleanedProse,
          tags,
          date: doc.date,
        });
      } else {
        // Split along paragraph boundaries with overlap
        const paragraphs = cleanedProse.split(/\n\s*\n/);
        let buffer = "";
        for (const para of paragraphs) {
          if (buffer.length + para.length + 2 <= maxChars) {
            buffer = buffer ? `${buffer}\n\n${para}` : para;
          } else {
            if (buffer.trim().length >= 20) {
              chunks.push({
                id: `${doc.slug}#${section.headingSlug}:txt-${chunkCounter++}`,
                slug: doc.slug,
                title: doc.title,
                heading: section.heading,
                headingSlug: section.headingSlug,
                modality: "text",
                content: buffer.trim(),
                tags,
                date: doc.date,
              });
            }
            const overlapTail = buffer.slice(-overlapChars).trim();
            buffer = overlapTail ? `${overlapTail}\n\n${para}` : para;
            if (buffer.length > maxChars) {
              chunks.push({
                id: `${doc.slug}#${section.headingSlug}:txt-${chunkCounter++}`,
                slug: doc.slug,
                title: doc.title,
                heading: section.heading,
                headingSlug: section.headingSlug,
                modality: "text",
                content: buffer.slice(0, maxChars).trim(),
                tags,
                date: doc.date,
              });
              buffer = "";
            }
          }
        }
        if (buffer.trim().length >= 20) {
          chunks.push({
            id: `${doc.slug}#${section.headingSlug}:txt-${chunkCounter++}`,
            slug: doc.slug,
            title: doc.title,
            heading: section.heading,
            headingSlug: section.headingSlug,
            modality: "text",
            content: buffer.trim(),
            tags,
            date: doc.date,
          });
        }
      }
    }
  }

  // Fallback if document had very short body
  if (chunks.length === 0) {
    chunks.push({
      id: `${doc.slug}#${slugifyHeading(doc.title)}:txt-0`,
      slug: doc.slug,
      title: doc.title,
      heading: doc.title,
      headingSlug: slugifyHeading(doc.title),
      modality: "text",
      content: (doc.summary || doc.body || doc.title).trim(),
      tags,
      date: doc.date,
    });
  }

  return chunks;
}
