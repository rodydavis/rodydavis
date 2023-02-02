export function convertMd(content: string) {
    let value = content;
    // Convert [[ ]] to []
    value = value.replace(/\[\[(.+?)\]\]/g, (match, p1) => {
        const [link, text] = p1.split('|');
        return `[${text || link}](${link})`;
    });
    // Convert # tags to links
    value = value.replace(/(?<=\s)#([a-zA-Z0-9-\/]+)(?=\s)/g, (match, p1) => {
        return `[${match.trim()}](/tags/${p1})`;
    });
    return value;
}