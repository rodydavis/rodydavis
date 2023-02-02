export function obsidianTags(options = {}) {
  const walk = (node) => {
    if (node.type === "text") {
      const orgValue = node.value;
      let value = orgValue;
      // Convert all tags in text - "#tag1 #tag2 #tag-3 #tag/4"
      const matches = value.matchAll(/#([a-zA-Z0-9-_/]+)/g);
      for (const match of matches) {
        let [tagName, tagLink] = match;
        const parts = tagName.split("#");
        if (parts.length === 2) {
          const hex = parts[1];
          if (hex.match(/^[0-9A-F]+$/i)) {
            continue;
          }
        }
        // Remove the # from the tag name
        tagLink = `/tags/${tagLink}`;
        // Create a link to the tag
        value = value.replace(tagName, `<a href="${tagLink}">${tagName}</a>`);
      }
      // Create new node with the new value
      const newNode = {
        type: "html",
        value: value,
      };
      // Replace the old node with the new one
      node.type = newNode.type;
      node.value = newNode.value;
    }
  };
  function visit(node, type, visitor) {
    if (node && node.type === type) {
      visitor(node);
    }
    if (node && node.children) {
      node.children.forEach((child) => visit(child, type, visitor));
    }
  }
  return (tree) => {
    visit(tree, "text", walk);
  };
}
