import * as fs from 'fs-extra';
import { getPostFromMeta, mdWithoutMeta } from './meta';
import { writeRssFile } from './rss';
import { Converter } from 'showdown';
import prettify from 'html-prettify';
import { md2ampstory } from './amp-story';

export async function build() {
  const outDir = 'public';
  const inputDir = 'assets';
  const files = fs.readdirSync(inputDir);
  for (const path of files) {
    if (path.endsWith('.md')) {
      copyMarkdownFile(`${inputDir}/${path}`, path, outDir);
    }
  }
  buildMeta('assets/apps', 'apps', outDir);
  buildMeta('assets/blog', 'blog', outDir);
  const rss = await writeRssFile('assets/blog').catch(console.error);
  if (rss) fs.writeFileSync(`${outDir}/feed.xml`, rss);
  buildMeta('assets/stories', 'stories', outDir);
}

function buildMeta(path: string, name: string, outDir: string) {
  const files = fs.readdirSync(path);
  const items = [];
  for (const file of files) {
    if (!file.match('.md')) continue;
    // const postMeta = copyMarkdownFile(`${path}/${id}.md`, `${outDir}/${name}`);
    const id = file.replace('.md', '');
    const filePath = `${path}/${id}.md`;
    // items.push(getPostFromMeta(src, filePath, id));
    items.push(copyMarkdownFile(filePath, file, `${outDir}/${name}`));
  }
  fs.writeFileSync(
    `${outDir}/${name}/info.json`,
    JSON.stringify({
      updated: Date.now(),
      items,
    }),
  );
}

function copyMarkdownFile(filePath: string, name: string, outputDir: string) {
  const id = name.replace('.md', '');
  const content = fs.readFileSync(filePath).toString();
  const meta = getPostFromMeta(content, filePath, id);
  const title = meta?.title || name;
  let result = '';
  if (meta?.layout == 'story') {
    result += md2ampstory(mdWithoutMeta(content), { title: name });
  } else {
    result += `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <base href="/">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="/index.css" />
      <link rel="stylesheet" type="text/css" href="/article.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/default.min.css">
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js"></script>
    </head>
    <body>
      <nav-wrapper title="${title}">
        <article>
         ${md2Html(mdWithoutMeta(content))}
        </article>
      </nav-wrapper>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <script type="module" src="/dist/components/nav-wrapper.js"></script>
      <script>hljs.initHighlightingOnLoad();</script>
  `;
    // Extra Scripts
    if (meta?.hasComments) {
      result += `
  <script
    src="https://utteranc.es/client.js"
    repo="rodydavis/rodydavis"
    issue-term="pathname"
    theme="github-light"
    crossorigin="anonymous"
    async
  ></script>
  `;
    }
    result += `
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }
    </script>
    </body>
  </html>`;
  }
  checkDir(outputDir);
  checkDir(`${outputDir}/${id}`);
  fs.writeFileSync(`${outputDir}/${id}/index.html`, prettify(result));
  return meta;
}

function md2Html(text: string) {
  const converter = new Converter();
  const result = converter.makeHtml(text);
  return result;
}

function checkDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

build();
