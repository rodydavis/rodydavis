import * as fs from "fs";
import {
  extractImageUrlFromMarkdown,
  getMetaKey,
  getMetaList,
  getPostFromMeta,
  PostMeta,
} from "../src/utils/meta";
import { writeRssFile } from "./rss";

export async function build() {
  buildMeta("assets/apps", "apps");
  buildMeta("assets/blog", "blog");
  const rss = await writeRssFile("assets/blog").catch(console.error);
  if (rss) fs.writeFileSync("assets/feed.xml", rss);
  buildMeta("assets/stories", "stories");
}

function buildMeta(path: string, name: string) {
  const files = fs.readdirSync(path);
  const items: PostMeta[] = [];
  for (const file of files) {
    if (!file.match(".md")) continue;
    const id = file.replace(".md", "");
    const filePath = `${path}/${id}.md`;
    const src = fs.readFileSync(filePath).toString();
    items.push(getPostFromMeta(src, filePath, id));
  }
  fs.writeFileSync(
    `assets/${name}/info.json`,
    JSON.stringify({
      updated: Date.now(),
      items,
    })
  );
}

build();
