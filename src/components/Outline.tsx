import React, { useEffect, useState } from 'react';
import type { OutlineItem } from '../types';

interface OutlineProps {
  outline: OutlineItem[];
}

export const slugify = (text: string) => {
  if (!text || typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const Outline: React.FC<OutlineProps> = ({ outline }) => {
  const [activeHash, setActiveHash] = useState<string>('');

  useEffect(() => {
    // Set initial hash safely
    try {
      setActiveHash(window.location.hash);
    } catch (e) {
      // Ignore security errors in restricted iframes
    }

    const handleHashChange = () => {
      try {
        setActiveHash(window.location.hash);
      } catch (e) {
        // Ignore
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (outline.length === 0) {
    return <div className="px-4 py-2 text-[13px] text-[var(--fg-secondary)] italic">No symbols found</div>;
  }

  const handleItemClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    const id = slugify(label);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      const newHash = `#${id}`;
      setActiveHash(newHash);

      try {
        // Try using history API to update URL without reload
        window.history.pushState(null, '', newHash);
      } catch (err) {
        // Fallback for sandboxed environments where pushState might be blocked
        console.warn("History API restricted, falling back to location.hash", err);
        try {
          // This might cause a jump, but it's the standard fallback
          // Check if newHash is different to avoid redundant assignments
          if (window.location.hash !== newHash) {
            window.location.hash = newHash;
          }
        } catch (e2) {
          console.warn("URL update completely blocked", e2);
        }
      }
    }
  };

  return (
    <div className="py-1">
      {outline.map((item) => {
        if (!item?.label) return null;
        const slug = slugify(item.label);
        const isActive = activeHash === `#${slug}`;

        return (
          <a
            key={item.id}
            href={`#${slug}`}
            className={`px-4 py-1 cursor-pointer text-[13px] truncate flex items-center block no-underline transition-colors
              ${isActive ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-primary)] hover:bg-[var(--hover-bg)]'}
            `}
            style={{ paddingLeft: `${item.level * 12 + 4}px` }}
            onClick={(e) => handleItemClick(e, item.label)}
          >
            {/* Symbol Icon Placeholder */}
            <div className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${item.level === 1 ? 'bg-[#ff6b6b]' : 'bg-[#4dabf7]'
              }`} />
            <span className="truncate">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Outline;