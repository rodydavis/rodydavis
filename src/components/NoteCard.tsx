import type { MarkdownInstance } from "astro";
import TagChip from "./TagChip";

interface Props {
  article: MarkdownInstance<Record<string, any>>;
  tags: string[];
  slug: string;
}

function NoteCard(props: Props) {
  const frontmatter = props.article.frontmatter;
  const filename = props.article.file.split("/").pop()!.split(".")[0] || "";
  const title = (frontmatter.title || filename).trim();
  let description = (frontmatter.description || "").trim();
  description = description.split("\n").join(" ").trim();
  // Take the first 100 characters of the description
  if (description.length > 100) {
    description = description.substring(0, 100).trim() + "...";
  }
  const img = frontmatter.heroImage || frontmatter.image || undefined;
  return <div style={{
    padding: "0.5rem",
    border: "1px solid var(--border-color)",
    borderRadius: "0.25rem",
    margin: "0.5rem 0",
    cursor: "pointer",
    overflow: "hidden",
  }}
    onClick={() => {
      window.location.href = `/${props.slug}`;
    }}
  >
    <div style={{
      fontSize: "1.5rem",
      fontWeight: "bold",
    }}>{title}</div>
    {img !== undefined ? <img src={img} style={{
      width: "100%",
      maxWidth: "500px",
      height: "300px",
      objectFit: "cover",
      borderRadius: "0.25rem",
      margin: "0.5rem 0",
    }} /> : null}
    {description && <div style={{
      fontSize: "1rem",
      color: "var(--text-color)",
    }}>{description}</div>}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      margin: "0.5rem 0",
    }}>
      {props.tags.map((tag) => <TagChip tag={tag} active={false} onClick={() => {
        window.location.href = `/tags/${tag}`;
      }} />)}
    </div>
  </div>
}

export default NoteCard;