import React, { useState } from 'react';
import { ChevronRight, Link, Tag } from 'lucide-react';
import type { OutlineItem } from '../types';
import Outline from './Outline';

interface RightSidebarProps {
  outline: OutlineItem[];
  activePostId: string | null;
  tags?: string[];
  relatedPosts?: { id: string; title: string }[];
}

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

const RightSidebar: React.FC<RightSidebarProps> = ({
  outline = [],
  activePostId,
  tags = [],
  relatedPosts = [],
}) => {
  const [sections, setSections] = useState({
    outline: true,
    related: true,
    tags: true,
  });

  const hasOutline = outline && outline.length > 0;
  const hasRelated = relatedPosts && relatedPosts.length > 0;
  const hasTags = tags && tags.length > 0;

  if (!hasOutline && !hasRelated && !hasTags) {
    return null;
  }

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getSectionClass = (section: keyof typeof sections) => {
    if (!sections[section]) return 'flex-none';
    
    // Count open sections that are actually available
    const openSections = Object.entries(sections)
      .filter(([key, value]) => {
        if (key === 'outline' && !hasOutline) return false;
        if (key === 'related' && !hasRelated) return false;
        if (key === 'tags' && !hasTags) return false;
        return value;
      })
      .length;

    // If only one section is open, it gets flex-grow. Otherwise they share or stack.
    if (openSections === 1) {
      return 'flex-1 min-h-0';
    }
    return 'flex-none';
  };

  return (
    <div className="hidden lg:flex flex-col h-full bg-[var(--bg-sidebar)] border-l border-[var(--border-main)] text-[var(--fg-primary)] w-64 select-none shrink-0 overflow-hidden">
      {/* Sidebar Header */}
      <div className="h-[35px] px-5 flex items-center text-[11px] text-[var(--fg-secondary)] uppercase tracking-wider select-none shrink-0 border-b border-[var(--border-main)]">
        <span>Information</span>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden min-h-0">
        {/* Outline Section */}
        {hasOutline && (
          <SidebarSection
            title="Outline"
            isOpen={sections.outline}
            onToggle={() => toggleSection('outline')}
            className={`${getSectionClass('outline')} max-h-[350px]`}
          >
            <Outline outline={outline} />
          </SidebarSection>
        )}

        {/* Related Posts Section */}
        {hasRelated && (
          <SidebarSection
            title="Related"
            isOpen={sections.related}
            onToggle={() => toggleSection('related')}
            className={`${getSectionClass('related')} max-h-[250px]`}
          >
            <div className="py-1">
              {relatedPosts.map(post => {
                const href = post.id === 'welcome' ? '/' : `/${post.id}`;
                const isActive = post.id === activePostId;
                return (
                  <a
                    key={post.id}
                    href={href}
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
        {hasTags && (
          <SidebarSection
            title="Tags"
            isOpen={sections.tags}
            onToggle={() => toggleSection('tags')}
            className={`${getSectionClass('tags')} max-h-[200px]`}
          >
            <div className="p-2 flex flex-wrap gap-2">
              {tags.map(tag => (
                <a key={tag}
                  href={`/tags/${tag}`}
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
  );
};

export default RightSidebar;
