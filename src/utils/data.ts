import type { CollectionEntry } from 'astro:content';
import type { BlogPost, FileNode, OutlineItem } from '../types';
import type { MarkdownHeading } from 'astro';

const naturalCollator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
});

export function naturalCompare(a: string, b: string): number {
    return naturalCollator.compare(a, b);
}

export function transformDocsToPosts(
    docs: CollectionEntry<'docs'>[],
    headingsMap: Record<string, MarkdownHeading[]>
): Record<string, BlogPost> {
    const posts: Record<string, BlogPost> = {};

    docs.forEach(doc => {
        const headings = headingsMap[doc.id] || [];
        const outline: OutlineItem[] = headings.map(h => ({
            id: h.slug,
            label: h.text,
            level: h.depth
        }));

        posts[doc.id] = {
            id: doc.id,
            title: doc.data.title,
            slug: doc.id,
            language: 'markdown',
            date: doc.data.date,
            content: doc.body || '',
            outline: outline,
        };
    });

    return posts;
}

function sortFileNodesNaturally(nodes: FileNode[]) {
    nodes.sort((a, b) => {
        // Folders before files, then naturalCompare
        if (a.type !== b.type) {
            return a.type === 'folder' ? -1 : 1;
        }
        return naturalCompare(a.name, b.name);
    });
    for (const node of nodes) {
        if (node.children && node.children.length > 0) {
            sortFileNodesNaturally(node.children);
        }
    }
}

export function buildFileTree(docs: CollectionEntry<'docs'>[]): FileNode[] {
    const root: FileNode = {
        id: 'root',
        name: 'RODY-DAVIS',
        type: 'folder',
        isOpen: true,
        children: []
    };

    docs.sort((a, b) => naturalCompare(a.id, b.id));

    docs.forEach(doc => {
        const parts = doc.id.split('/');
        let currentFolder = root;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const isLast = i === parts.length - 1;

            if (isLast) {
                const fileName = (doc.id === 'welcome' && parts.length === 1) ? 'README.md' : `${part}.md`;
                currentFolder.children = currentFolder.children || [];
                currentFolder.children.push({
                    id: `file-${doc.id}`,
                    name: fileName,
                    type: 'file',
                    postId: doc.id,
                    title: doc.data.title,
                });
            } else {
                currentFolder.children = currentFolder.children || [];
                let folder = currentFolder.children.find(child => child.type === 'folder' && child.name === part);
                if (!folder) {
                    folder = {
                        id: `folder-${parts.slice(0, i + 1).join('-')}`,
                        name: part,
                        type: 'folder',
                        isOpen: true,
                        children: []
                    };
                    currentFolder.children.push(folder);
                }
                currentFolder = folder;
            }
        }
    });

    if (root.children) {
        sortFileNodesNaturally(root.children);
    }

    return [root];
}

export const FILE_TREE: FileNode[] = [];
