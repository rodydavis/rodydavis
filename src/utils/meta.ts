export interface PostMeta {
  path: string;
  id: string;
  layout: string;
  image?: string;
  title?: string;
  date?: string;
  categories?: string[];
  tags?: string[];
}

export function buildDonationScript(): HTMLScriptElement {
  let script = document.createElement("script");
  script.id = "donation";
  script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
  script.setAttribute("data-name", "BMC-Widget");
  script.setAttribute("data-id", "rodydavis");
  script.setAttribute("data-description", "Support me on Buy me a coffee!");
  script.setAttribute(
    "data-message",
    "Thank you for visiting. You can now buy me a coffee!"
  );
  script.setAttribute("data-color", "#FF813F");
  script.setAttribute("data-position", "right");
  script.setAttribute("data-x_margin", "18");
  script.setAttribute("data-y_margin", "18");
  return script;
}

export function buildCommentsScript(): HTMLScriptElement {
  const dark = false;
  const utteranceTheme = dark ? "github-dark" : "github-light";
  let script = document.createElement("script");
  script.id = "comments";
  script.src = "https://utteranc.es/client.js";
  script.crossOrigin = "anonymous";
  script.async = true;
  script.setAttribute("repo", "rodydavis/rodydavis");
  script.setAttribute("issue-term", "pathname");
  script.setAttribute("theme", utteranceTheme);
  return script;
}

export function getMetaList(meta: string[], key: string): string[] | undefined {
  return getMetaKey(meta, key)?.replace("[", "")?.replace("]", "")?.split(",");
}

export function getMetaKey(meta: string[], key: string): string | undefined {
  const value = meta
    ?.filter((v) => v.startsWith(`${key}:`))[0]
    ?.split(":")[1]
    ?.trim();
  if (!value) return undefined;
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.substring(1, value.length - 1);
  }
  return value;
}

export function extractImageUrlFromMarkdown(content): string | undefined {
  return (content.match(/!\[.+?\]\((.*?(?:\.jpe?g|png|gif))\)/i) || [])[1];
}

export function getPostFromMeta(source: string, path: string, id: string) {
  const rawMd = source.trimLeft();
  let meta: string[] = [];
  if (rawMd.startsWith("---")) {
    for (let i = 3; i < rawMd.length; i++) {
      if (rawMd[i] == "-" && rawMd[i + 1] == "-" && rawMd[i + 2] == "-") {
        meta = rawMd
          .substring(3, i - 1)
          .split("\n")
          .filter((v) => v.length > 1);
        break;
      }
    }
  }
  return {
    path,
    id,
    image: extractImageUrlFromMarkdown(rawMd),
    title: getMetaKey(meta, "title"),
    layout: getMetaKey(meta, "layout") || "post",
    date: getMetaKey(meta, "date"),
    categories: getMetaList(meta, "categories"),
    tags: getMetaList(meta, "tags"),
  };
}
