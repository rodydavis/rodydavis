import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen, Info, FileText, FileJson, FileCode, Tag, Link, Search as SearchIcon, X } from 'lucide-react';
import type { FileNode, OutlineItem as OutlineItemType, RelatedPostItem } from '../types';
import Outline from './Outline';

const naturalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

function naturalCompare(a: string, b: string): number {
  return naturalCollator.compare(a, b);
}

interface ExplorerProps {
  fileTree?: FileNode[];
  outline: OutlineItemType[];
  onFileClick: (postId: string) => void;
  activePostId: string | null;
  tags?: string[];
  relatedPosts?: RelatedPostItem[];
  className?: string;
  defaultOpen?: boolean;
}

const FileIcon = ({ name }: { name: string }) => {
  if (name.endsWith('.md')) return <Info size={16} className="text-[var(--icon-md)]" />;
  if (name.endsWith('.json')) return <FileJson size={16} className="text-[var(--icon-json)]" />;
  if (name.endsWith('.ts') || name.endsWith('.tsx')) return <FileCode size={16} className="text-[var(--icon-ts)]" />;
  return <FileText size={16} className="text-[var(--icon-default)]" />;
};

const containsActivePost = (node: FileNode, activePostId: string | null): boolean => {
  if (!activePostId) return false;
  if (node.postId === activePostId) return true;
  if (node.children) {
    return node.children.some(child => containsActivePost(child, activePostId));
  }
  return false;
};

function collectFlatMatchingFiles(nodes: FileNode[], query: string): FileNode[] {
  const q = query.trim().toLowerCase();
  const matches: FileNode[] = [];

  function walk(list: FileNode[]) {
    for (const node of list) {
      if (node.type === 'file') {
        const hay = `${node.name} ${node.postId || ''} ${node.title || ''}`.toLowerCase();
        if (hay.includes(q)) {
          matches.push(node);
        }
      } else if (node.children && node.children.length > 0) {
        walk(node.children);
      }
    }
  }

  walk(nodes);
  matches.sort((a, b) => naturalCompare(a.postId || a.name, b.postId || b.name));
  return matches;
}

const ExplorerItem: React.FC<{
  node: FileNode;
  level: number;
  onFileClick: (id: string) => void;
  activePostId: string | null;
}> = ({ node, level, onFileClick, activePostId }) => {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);
  const itemRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);

  const hasActivePost = useMemo(() => containsActivePost(node, activePostId), [node, activePostId]);

  useEffect(() => {
    if (hasActivePost && node.type === 'folder') {
      setIsOpen(true);
    }
  }, [hasActivePost, node.type]);

  useEffect(() => {
    if (node.postId === activePostId && itemRef.current) {
      const timeoutId = setTimeout(() => {
        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [activePostId, node.postId]);

  const handleClick = () => {
    if (node.type === 'folder') {
      setIsOpen(!isOpen);
    } else if (node.postId) {
      onFileClick(node.postId);
    }
  };

  const isFile = node.type === 'file';
  const href = node.postId === 'welcome' ? '/' : `/${node.postId}`;

  const content = (
    <>
      <span className="mr-1 flex-shrink-0">
        {node.type === 'folder' && (
          isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        )}
        {node.type === 'file' && <span className="w-[14px] inline-block" />}
      </span>
      <span className="mr-1.5 flex-shrink-0">
        {node.type === 'folder' ? (
          isOpen ? <FolderOpen size={16} className="text-[var(--icon-folder)]" /> : <Folder size={16} className="text-[var(--icon-folder)]" />
        ) : (
          <FileIcon name={node.name} />
        )}
      </span>
      <span className="truncate text-[13px]">{node.name}</span>
    </>
  );

  return (
    <div className="select-none">
      {isFile ? (
        <a
          ref={itemRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          onClick={() => node.postId && onFileClick(node.postId)}
          className={`explorer-touch-row flex items-center py-[3px] cursor-pointer hover:bg-[var(--hover-bg)] transition-colors text-decoration-none no-underline block ${node.postId === activePostId ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'
            }`}
          style={{ paddingLeft: `${level * 12 + 12}px` }}
        >
          {content}
        </a>
      ) : (
        <div
          ref={itemRef as React.RefObject<HTMLDivElement>}
          className={`explorer-touch-row flex items-center py-[3px] cursor-pointer hover:bg-[var(--hover-bg)] transition-colors ${node.postId === activePostId ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'
            }`}
          style={{ paddingLeft: `${level * 12 + 12}px` }}
          onClick={handleClick}
        >
          {content}
        </div>
      )}
      {node.type === 'folder' && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <ExplorerItem
              key={child.id}
              node={child}
              level={level + 1}
              onFileClick={onFileClick}
              activePostId={activePostId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarSection: React.FC<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ title, isOpen, onToggle, children, className }) => (
  <div className={`flex flex-col border-b border-[var(--border-main)] overflow-hidden transition-[flex-grow] duration-300 ease-in-out ${className || ''}`}>
    <div
      className="flex items-center px-1 py-1 cursor-pointer hover:bg-[var(--hover-bg)] bg-[var(--bg-sidebar)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] font-bold text-[11px] uppercase tracking-wide select-none transition-colors"
      onClick={onToggle}
    >
      <ChevronRight size={14} className={`mr-1 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      {title}
    </div>
    <div
      className={`grid flex-1 min-h-0 transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
    >
      <div className="overflow-hidden flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Explorer: React.FC<ExplorerProps> = ({
  fileTree: initialFileTree = [],
  outline,
  onFileClick,
  activePostId,
  tags,
  relatedPosts,
  className,
  defaultOpen = true
}) => {
  const [fileTree, setFileTree] = useState<FileNode[]>(initialFileTree);
  const [loading, setLoading] = useState(initialFileTree.length === 0);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [filterQuery, setFilterQuery] = useState('');
  const [sections, setSections] = useState({
    folders: true,
    outline: true,
    related: true,
    tags: true
  });

  const hasActivePostInTree = useMemo(() => {
    return fileTree.some(node => containsActivePost(node, activePostId));
  }, [fileTree, activePostId]);

  useEffect(() => {
    if (hasActivePostInTree) {
      setSections(prev => ({ ...prev, folders: true }));
    }
  }, [hasActivePostInTree]);

  React.useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  React.useEffect(() => {
    const handleOpenSettings = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('open-settings', handleOpenSettings);
    return () => window.removeEventListener('open-settings', handleOpenSettings);
  }, []);

  React.useEffect(() => {
    const handleToggleExplorer = () => {
      setIsOpen(prev => !prev);
    };
    window.addEventListener('toggle-explorer', handleToggleExplorer);
    return () => window.removeEventListener('toggle-explorer', handleToggleExplorer);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const h = window.innerHeight;
      setSections(prev => {
        let changed = false;
        const next = { ...prev };

        if (h < 600) {
          if (next.tags) { next.tags = false; changed = true; }
          if (next.related) { next.related = false; changed = true; }
        }

        if (h < 400) {
          if (next.outline) { next.outline = false; changed = true; }
        }

        return changed ? next : prev;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (initialFileTree.length > 0) return;

    const fetchFileTree = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/file-tree.json');
        const data = await res.json();
        setFileTree(data);
      } catch (error) {
        console.error('Failed to load file tree', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFileTree();
  }, []);

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFileClick = (postId: string) => {
    onFileClick(postId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const childTree = useMemo(() => {
    if (fileTree.length === 0) return [];
    return fileTree[0].children ?? [];
  }, [fileTree]);

  // When a local search/filter query is active, recursively search descendants and display matching files in a flat list
  const flatFilteredFiles = useMemo(() => {
    if (!filterQuery.trim()) return [];
    return collectFlatMatchingFiles(childTree, filterQuery);
  }, [childTree, filterQuery]);

  const getSectionClass = (section: keyof typeof sections) => {
    if (!sections[section]) return 'flex-none';
    if (section === 'folders') return 'flex-1 min-h-0';

    const otherOpen = Object.entries(sections)
      .filter(([key, value]) => key !== 'folders' && value)
      .length;

    if (!sections.folders && otherOpen === 1) {
      return 'flex-1 min-h-0';
    }

    return 'flex-none';
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        aria-label="Explorer Sidebar"
        className={`
        flex flex-col h-full bg-[var(--bg-sidebar)] border-r border-[var(--border-main)] text-[var(--fg-primary)]
        fixed md:static inset-y-0 left-0 z-30 w-[min(16rem,calc(100vw-48px))] md:w-64 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${className || ''}
      `}>
        {/* Sidebar Header */}
        <div className="h-[35px] px-5 flex items-center justify-between text-[11px] text-[var(--fg-secondary)] uppercase tracking-wider select-none shrink-0">
          <span>Explorer</span>
          <div className="flex items-center gap-2">
            <div className="md:hidden cursor-pointer hover:text-[var(--fg-primary)]" onClick={() => setIsOpen(false)}>
              <ChevronRight size={16} className="rotate-180" />
            </div>
          </div>
        </div>

        {/* Local Recursive Filter Input */}
        <div className="px-2 pb-1.5 shrink-0 border-b border-[var(--border-main)]">
          <div className="relative flex items-center">
            <SearchIcon size={12} className="absolute left-2 text-[var(--fg-secondary)] pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter files..."
              className="w-full bg-[var(--input-bg)] border border-transparent focus:border-[#007acc] text-[var(--fg-primary)] pl-6 pr-6 py-1 outline-none text-xs placeholder-gray-500 rounded-sm"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                className="absolute right-1.5 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)]"
                aria-label="Clear filter"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden min-h-0">

          {/* Folders Section */}
          <SidebarSection
            title={filterQuery.trim() ? `Matches (${flatFilteredFiles.length})` : 'Content'}
            isOpen={sections.folders}
            onToggle={() => toggleSection('folders')}
            className={getSectionClass('folders')}
          >
            <div className="py-1">
              {loading ? (
                <div className="p-4 text-xs text-[var(--fg-secondary)]">Loading...</div>
              ) : filterQuery.trim() ? (
                flatFilteredFiles.length > 0 ? (
                  flatFilteredFiles.map((node) => {
                    const href = node.postId === 'welcome' ? '/' : `/${node.postId}`;
                    const isActive = node.postId === activePostId;
                    return (
                      <a
                        key={node.id}
                        href={href}
                        onClick={() => node.postId && handleFileClick(node.postId)}
                        className={`flex items-center justify-between py-1 px-3 cursor-pointer hover:bg-[var(--hover-bg)] transition-colors no-underline ${
                          isActive ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'
                        }`}
                      >
                        <div className="flex items-center min-w-0">
                          <span className="mr-1.5 shrink-0">
                            <FileIcon name={node.name} />
                          </span>
                          <span className="truncate text-[12px]">{node.name}</span>
                        </div>
                        <span className="text-[10px] text-[var(--fg-secondary)] font-mono truncate ml-2 max-w-[95px]">
                          {node.postId}
                        </span>
                      </a>
                    );
                  })
                ) : (
                  <div className="px-3 py-2 text-xs text-[var(--fg-secondary)]">
                    No matching files.
                  </div>
                )
              ) : (
                childTree.map((node) => (
                  <ExplorerItem
                    key={node.id}
                    node={node}
                    level={0}
                    onFileClick={handleFileClick}
                    activePostId={activePostId}
                  />
                ))
              )}
            </div>
          </SidebarSection>

          {/* Outline Section */}
          <SidebarSection
            title="Outline"
            isOpen={sections.outline}
            onToggle={() => toggleSection('outline')}
            className={`${getSectionClass('outline')} max-h-[250px] lg:hidden`}
          >
            <Outline outline={outline} />
          </SidebarSection>

          {/* Related Posts Section */}
          {relatedPosts && relatedPosts.length > 0 && (
            <SidebarSection
              title="Related"
              isOpen={sections.related}
              onToggle={() => toggleSection('related')}
              className={`${getSectionClass('related')} max-h-[220px] lg:hidden`}
            >
              <div className="py-1 divide-y divide-[var(--border-main)]/40">
                {relatedPosts.map(post => {
                  const href = post.id === 'welcome' ? '/' : `/${post.id}`;
                  const isActive = post.id === activePostId;
                  return (
                    <a
                      key={post.id}
                      href={href}
                      onClick={() => handleFileClick(post.id)}
                      className={`flex items-center justify-between py-1 px-3 cursor-pointer hover:bg-[var(--hover-bg)] transition-colors text-decoration-none no-underline ${isActive ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'}`}
                    >
                      <div className="flex items-center min-w-0">
                        <span className="mr-1.5 flex-shrink-0">
                          <Link size={14} className="text-[var(--icon-default)]" />
                        </span>
                        <span className="truncate text-[12px]">{post.title}</span>
                      </div>
                      {typeof post.score === 'number' && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded shrink-0 ml-1">
                          {Math.round(post.score * 100)}%
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </SidebarSection>
          )}

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <SidebarSection
              title="Tags"
              isOpen={sections.tags}
              onToggle={() => toggleSection('tags')}
              className={`${getSectionClass('tags')} max-h-[150px] lg:hidden`}
            >
              <div className="p-2 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <a key={tag}
                    href={`/tags/${tag}`}
                    onClick={() => {
                      if (window.innerWidth < 768) setIsOpen(false);
                    }}
                    className="flex items-center text-xs text-[var(--fg-primary)] bg-[var(--bg-sidebar)] hover:bg-[var(--hover-bg)] px-2 py-1 rounded border border-[var(--border-secondary)] transition-colors">
                    <Tag size={12} className="mr-1 text-[var(--fg-secondary)]" />
                    {tag}
                  </a>
                ))}
              </div>
            </SidebarSection>
          )}

        </div>
      </aside>
    </>
  );
};

export default Explorer;
