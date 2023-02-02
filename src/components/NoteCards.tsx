import type { MarkdownInstance } from "astro";
import NoteCard from "./NoteCard";

interface Note {
  article: MarkdownInstance<Record<string, any>>;
  tags: string[];
  slug: string;
}

interface Props {
  notes: Note[];
}

function NoteCards({ notes }: Props) {
  return <>
    <div class="cards" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: '1rem',
    }}>
      {
        notes.map((item) => (
          <NoteCard
            article={item.article}
            slug={item.slug}
            tags={item.tags}
          />
        ))
      }
    </div>
  </>
}

export default NoteCards;