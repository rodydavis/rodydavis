import type { MarkdownInstance } from 'astro';
import { useEffect, useState } from 'preact/hooks';
import TagChip from './TagChip';
import NoteCards from './NoteCards';

interface Article {
  article: MarkdownInstance<Record<string, any>>;
  tags: string[];
  slug: string;
}

interface Props {
  notes: Article[];
}

function TagChips(props: { tags: string[], active: string[], onClick: (tag: string) => void }) {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    gap: "0.5rem",
    margin: "1rem 0",
    padding: "0 0 1rem 0",
  }}>
    {props.tags.map((tag) => {
      const isActive = props.active.includes(tag);
      return <TagChip tag={tag} active={isActive} onClick={() => props.onClick(tag)} />
    })}
  </div>
}

function SearchList(props: Props) {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const allTags = props.notes.flatMap((note) => note.tags);
  const uniqueTags = [...new Set(allTags)];
  const results = props.notes.filter((note) => {
    const frontmatter = note.article.frontmatter;
    const tags = note.tags;
    const title = frontmatter.title || "";
    const matchTitle = title.toLowerCase().includes(search.toLowerCase());
    const matchTags = tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const match = matchTitle || matchTags;
    if (activeTags.length === 0) {
      return match;
    }
    return match && activeTags.every((tag) => tags.includes(tag));
  });
  useEffect(() => {
    const url = new URL(window.location.href);
    const search = url.searchParams.get("q") || "";
    setSearch(search);
    // Get tags from query params
    const tags = url.searchParams.get("tags") || "";
    if (tags) {
      setActiveTags(tags.split(","));
    }
  }, []);
  return <div class="search" style={{
    display: "flex",
    flexDirection: "column",
  }}>
    <input type="text" value={search} onInput={(e) => {
      setSearch(e.currentTarget.value);
      // Update query params
      const url = new URL(window.location.href);
      url.searchParams.set("q", e.currentTarget.value);
      window.history.pushState({}, "", url.toString());
    }} style={{
      flex: 1,
      padding: "0.5rem",
      fontSize: "1.5rem",
    }}
      placeholder="Search"
    />
    <TagChips tags={uniqueTags} active={activeTags} onClick={(tag) => {
      let newTags = activeTags;
      if (activeTags.includes(tag)) {
        newTags = activeTags.filter((t) => t !== tag);
      } else {
        newTags = [...activeTags, tag];
      }
      setActiveTags(newTags);
      // Update query params
      const url = new URL(window.location.href);
      url.searchParams.set("tags", newTags.join(","));
      window.history.pushState({}, "", url.toString());
    }} />
    <div style={{
      padding: "0.5rem 0r",
    }}>
      Showing {results.length} results for "{search}"
    </div>
    <NoteCards notes={results} />
  </div>;
}

export default SearchList;
