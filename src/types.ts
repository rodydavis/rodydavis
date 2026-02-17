export interface OutlineItem {
  id: string;
  label: string;
  level: number; // 1 for h1, 2 for h2, etc.
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string; // Used for url/path
  language: string; // e.g., 'typescript', 'markdown', 'json'
  content: string; // The raw content or HTML
  date: string;
  summary?: string;
  outline: OutlineItem[];
}

export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  postId?: string; // If it's a file, it links to a post
  isOpen?: boolean; // For folders
}

export type ViewMode = 'explorer' | 'search' | 'git' | 'extensions';
