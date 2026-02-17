import type { CollectionEntry } from 'astro:content';
import type { BlogPost, FileNode, OutlineItem } from '../types';

import type { MarkdownHeading } from 'astro';

export function transformDocsToPosts(
    docs: CollectionEntry<'docs'>[],
    headingsMap: Record<string, MarkdownHeading[]>
): Record<string, BlogPost> {
    const posts: Record<string, BlogPost> = {};

    docs.forEach(doc => {
        // The id in Content Collections is the filename (e.g. 'welcome.md' or 'welcome')
        // The slug is also available.
        // We map the doc to BlogPost format.

        // We assume the ID from mockData matches the slug or id from content collection
        // In mockData: 'welcome' -> id: 'welcome'
        // In content/docs/welcome.md -> slug: 'welcome'

        const headings = headingsMap[doc.slug] || [];
        const outline: OutlineItem[] = headings.map(h => ({
            id: h.slug,
            label: h.text,
            level: h.depth
        }));

        posts[doc.slug] = {
            id: doc.slug,
            title: doc.data.title,
            slug: doc.slug,
            language: 'markdown', // Default to markdown as they are md files
            date: doc.data.date,
            content: doc.body,
            outline: outline,
        };
    });

    return posts;
}

export function buildFileTree(docs: CollectionEntry<'docs'>[]): FileNode[] {
    const rootChildren: FileNode[] = [];
    const folderMap = new Map<string, FileNode>();

    // Sort docs by slug to ensure folders are created before files if needed, 
    // or just to have deterministic order.
    docs.sort((a, b) => a.slug.localeCompare(b.slug));

    docs.forEach(doc => {
        const parts = doc.slug.split('/');

        // Handle root files
        if (parts.length === 1) {
            const fileName = doc.slug === 'welcome' ? 'README.md' : `${doc.slug}.md`;
            rootChildren.push({
                id: `file-${doc.slug}`,
                name: fileName,
                type: 'file',
                postId: doc.slug
            });
            return;
        }

        // Handle nested files
        // Currently supporting 1 level of nesting per requirements (blog/post.md)
        // Expandable to recursive if needed.
        const folderName = parts[0];
        const fileName = `${parts[1]}.md`;

        if (!folderMap.has(folderName)) {
            const folderNode: FileNode = {
                id: `folder-${folderName}`,
                name: folderName,
                type: 'folder',
                isOpen: true,
                children: []
            };
            folderMap.set(folderName, folderNode);
            rootChildren.push(folderNode);
        }

        const folder = folderMap.get(folderName)!;
        folder.children?.push({
            id: `file-${parts[1]}`, // ID should be unique enough
            name: fileName,
            type: 'file',
            postId: doc.slug // postId must match the slug used in key of posts record
        });
    });

    return [
        {
            id: 'root',
            name: 'RODY-DAVIS',
            type: 'folder',
            isOpen: true,
            children: rootChildren
        }
    ];
}

// Deprecate static FILE_TREE
export const FILE_TREE: FileNode[] = [];
