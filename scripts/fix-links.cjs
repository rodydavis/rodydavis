const fs = require('fs');
const path = require('path');

const docsDir = path.join(process.cwd(), 'src/content/docs');

function getFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = entries.flatMap((entry) => {
        const res = path.resolve(dir, entry.name);
        return entry.isDirectory() ? getFiles(res) : res;
    });
    return files.filter(f => f.endsWith('.md'));
}

const files = getFiles(docsDir);

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePathFromDocs = path.relative(docsDir, file);
    const depth = relativePathFromDocs.split(path.sep).length - 1;

    const assetPrefix = '../'.repeat(depth + 2);
    const docPrefix = '../'.repeat(depth);

    let newContent = content;

    // Fix image/video links (Markdown and HTML)
    newContent = newContent.replace(/(\!\[.*?\]\()(?:\.\.\/)*assets\//g, `$1${assetPrefix}assets/`);
    newContent = newContent.replace(/(src=["'])(?:\.\.\/)*assets\//g, `$1${assetPrefix}assets/`);

    // Fix standard internal markdown links [text](path.md)
    // We only want to fix relative links that don't start with http or /
    // And avoid links that are already depth-corrected (start with ../)
    // Regex: match [text](something.md) or [text](path/something.md)
    newContent = newContent.replace(/(\[.*?\]\()([^/][^)]*?\.md\b)/g, (match, p1, p2) => {
        if (p2.startsWith('http')) return match;
        // Clean existing relative markers
        let link = p2;
        while (link.startsWith('../')) link = link.substring(3);
        if (link.startsWith('./')) link = link.substring(2);
        return `${p1}${docPrefix}${link}`;
    });

    // Fix related links in frontmatter
    const relatedRegex = /related:\s*\n(\s*-\s+.*(?:\n\s*-\s+.*)*)/;
    const match = newContent.match(relatedRegex);
    if (match) {
        const relatedSection = match[1];
        const lines = relatedSection.split('\n');
        const updatedLines = lines.map(line => {
            // Find the link part: - path/to/file.md
            const linkMatch = line.match(/^(\s*-\s+)(.*\.md)$/);
            if (linkMatch) {
                const prefix = linkMatch[1];
                let link = linkMatch[2];
                if (link.startsWith('http') || link.startsWith('/')) return line;
                while (link.startsWith('../')) link = link.substring(3);
                if (link.startsWith('./')) link = link.substring(2);
                return `${prefix}${docPrefix}${link}`;
            }
            return line;
        });
        newContent = newContent.replace(relatedSection, updatedLines.join('\n'));
    }

    if (newContent !== content) {
        console.log(`Updated links in ${relativePathFromDocs}`);
        fs.writeFileSync(file, newContent);
    }
});
