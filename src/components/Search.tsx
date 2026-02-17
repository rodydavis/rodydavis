import React from 'react';
import type { BlogPost } from '../types';

const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [posts, setPosts] = React.useState<BlogPost[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/search.json');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to load search index', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();

        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, []);

    const filteredPosts = React.useMemo(() => {
        if (!searchQuery) return [];
        const lowerQuery = searchQuery.toLowerCase();
        return posts.filter(post =>
            post.title.toLowerCase().includes(lowerQuery) ||
            (post.summary?.toLowerCase().includes(lowerQuery)) ||
            (post.slug.toLowerCase().includes(lowerQuery))
        );
    }, [searchQuery, posts]);

    return (
        <div className="w-64 bg-[var(--bg-sidebar)] border-r border-[var(--border-main)] flex flex-col min-w-[220px]">
            <div className="p-4 pb-2">
                <div className="uppercase font-bold text-[11px] mb-4 select-none text-[var(--fg-secondary)]">Search</div>
                <input
                    autoFocus
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[var(--input-bg)] border border-transparent focus:border-[#007acc] text-[var(--fg-primary)] px-2 py-1 outline-none text-sm placeholder-gray-500 mb-2"
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                {loading && <div className="p-4 text-xs text-[var(--fg-secondary)]">Loading index...</div>}

                {!loading && filteredPosts.map(post => (
                    <a
                        key={post.id || post.slug}
                        href={post.slug === 'welcome' ? '/' : `/${post.slug}`}
                        className="block cursor-pointer hover:bg-[var(--hover-bg)] px-4 py-2 group no-underline"
                    >
                        <div className="text-sm text-[var(--fg-primary)] font-medium truncate flex items-center">
                            <span className="truncate">{post.title}</span>
                        </div>
                        <div className="text-xs text-[var(--fg-secondary)] truncate mt-0.5 opacity-80">
                            {post.summary ? (
                                <span className="line-clamp-2">{post.summary}</span>
                            ) : (
                                <span className="font-mono">{post.slug}</span>
                            )}
                        </div>
                    </a>
                ))}

                {!loading && searchQuery && filteredPosts.length === 0 && (
                    <p className="text-xs text-[var(--fg-secondary)] px-4 mt-2">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
