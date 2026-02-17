import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen, MoreHorizontal, Info, FileText, FileJson, FileCode, Tag, Link } from 'lucide-react';
import type { FileNode, OutlineItem as OutlineItemType } from '../types';
import Outline from './Outline';

interface ExplorerProps {
  fileTree?: FileNode[];
  outline: OutlineItemType[];
  onFileClick: (postId: string) => void;
  activePostId: string | null;
  tags?: string[];
  relatedPosts?: { id: string; title: string }[];
  className?: string;
  defaultOpen?: boolean;
}

// Improved Icon logic with Theme support
const FileIcon = ({ name }: { name: string }) => {
  if (name.endsWith('.md')) return <Info size={16} className="text-[var(--icon-md)]" />;
  if (name.endsWith('.json')) return <FileJson size={16} className="text-[var(--icon-json)]" />;
  if (name.endsWith('.ts') || name.endsWith('.tsx')) return <FileCode size={16} className="text-[var(--icon-ts)]" />;
  return <FileText size={16} className="text-[var(--icon-default)]" />;
};

const ExplorerItem: React.FC<{
  node: FileNode;
  level: number;
  onFileClick: (id: string) => void;
  activePostId: string | null;
}> = ({ node, level, onFileClick, activePostId }) => {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);

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
          href={href}
          className={`flex items-center py-[3px] cursor-pointer hover:bg-[var(--hover-bg)] transition-colors text-decoration-none no-underline block ${node.postId === activePostId ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'
            }`}
          style={{ paddingLeft: `${level * 12 + 12}px` }}
        >
          {content}
        </a>
      ) : (
        <div
          className={`flex items-center py-[3px] cursor-pointer hover:bg-[var(--hover-bg)] transition-colors ${node.postId === activePostId ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'
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
  const [sections, setSections] = useState({
    folders: true,
    outline: true,
    related: true,
    tags: true
  });

  // Update isOpen when defaultOpen changes (e.g. navigation)
  React.useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  // Listen for settings open event to close drawer
  React.useEffect(() => {
    const handleOpenSettings = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('open-settings', handleOpenSettings);
    return () => window.removeEventListener('open-settings', handleOpenSettings);
  }, []);

  // Listen for explorer toggle event (from ActivityBar)
  React.useEffect(() => {
    const handleToggleExplorer = () => {
      setIsOpen(prev => !prev);
    };
    window.addEventListener('toggle-explorer', handleToggleExplorer);
    return () => window.removeEventListener('toggle-explorer', handleToggleExplorer);
  }, []);

  // Handle responsive section visibility
  React.useEffect(() => {
    const handleResize = () => {
      const h = window.innerHeight;
      setSections(prev => {
        let changed = false;
        const next = { ...prev };

        // Close Tags and Related if height is too small (< 600px)
        if (h < 600) {
          if (next.tags) { next.tags = false; changed = true; }
          if (next.related) { next.related = false; changed = true; }
        }

        // Close Outline if height is really small (< 400px)
        if (h < 400) {
          if (next.outline) { next.outline = false; changed = true; }
        }

        return changed ? next : prev;
      });
    };

    handleResize(); // Check on mount
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
    // Close drawer on mobile when a file is clicked
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  function getChildTree() {
    if (fileTree.length === 0) return [];
    return fileTree[0].children ?? [];
  }

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
      <div className={`
        flex flex-col h-full bg-[var(--bg-sidebar)] border-r border-[var(--border-main)] text-[var(--fg-primary)]
        fixed md:static inset-y-0 left-0 z-30 w-64 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${className || ''}
      `}>
        {/* Sidebar Header */}
        <div className="h-[35px] px-5 flex items-center justify-between text-[11px] text-[var(--fg-secondary)] uppercase tracking-wider select-none shrink-0">
          <span>Explorer</span>
          <div className="flex items-center gap-2">
            {/* <MoreHorizontal size={16} className="cursor-pointer hover:text-[var(--fg-primary)]" /> */}
            <div className="md:hidden cursor-pointer hover:text-[var(--fg-primary)]" onClick={() => setIsOpen(false)}>
              <ChevronRight size={16} className="rotate-180" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden min-h-0">

          {/* Folders Section */}
          <SidebarSection
            title="Content"
            isOpen={sections.folders}
            onToggle={() => toggleSection('folders')}
            className={sections.folders ? 'flex-1 min-h-0' : 'flex-none'}
          >
            <div className="py-1">
              {loading ? (
                <div className="p-4 text-xs text-[var(--fg-secondary)]">Loading...</div>
              ) : (
                getChildTree().map((node) => (
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
            className={sections.outline ? 'flex-1 min-h-0' : 'flex-none'}
          >
            <Outline outline={outline} />
          </SidebarSection>

          {/* Related Posts Section */}
          {relatedPosts && relatedPosts.length > 0 && (
            <SidebarSection
              title="Related"
              isOpen={sections.related}
              onToggle={() => toggleSection('related')}
              className={sections.related ? 'flex-1 min-h-0' : 'flex-none'}
            >
              <div className="py-1">
                {relatedPosts.map(post => {
                  const href = post.id === 'welcome' ? '/' : `/${post.id}`;
                  const isActive = post.id === activePostId;
                  return (
                    <a
                      key={post.id}
                      href={href}
                      onClick={() => handleFileClick(post.id)}
                      className={`flex items-center py-[3px] px-3 cursor-pointer hover:bg-[var(--hover-bg)] transition-colors text-decoration-none no-underline block ${isActive ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]'}`}
                    >
                      <span className="mr-1.5 flex-shrink-0">
                        <Link size={16} className="text-[var(--icon-default)]" />
                      </span>
                      <span className="truncate text-[13px]">{post.title}</span>
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
              className={sections.tags ? 'flex-1 min-h-0' : 'flex-none'}
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
      </div>
    </>
  );
};

export default Explorer;