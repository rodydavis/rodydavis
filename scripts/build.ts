import * as fs from 'fs-extra';
import { writeRssFile } from './rss';
import { Converter } from 'showdown';
import { md2ampstory } from './amp-story';
import { getPostFromMeta, mdWithoutMeta, PostMeta } from '../src/utils/meta';

export async function build(inputDir: string, outputDir: string) {
  const files = fs.readdirSync(inputDir);
  for (const path of files) {
    checkFile(inputDir, outputDir, path);
  }
  const rss = await writeRssFile('assets/blog').catch(console.error);
  if (rss) fs.writeFileSync(`${outputDir}/feed.xml`, rss);
}

function checkFile(
  inputDir: string,
  outputDir: string,
  path: string,
): PostMeta | undefined {
  const localPath = `${inputDir}/${path}`;
  const stat = fs.statSync(localPath);
  if (stat.isDirectory()) {
    scanDir(inputDir, outputDir, path);
  } else if (stat.isFile()) {
    if (path.endsWith('.md')) {
      return copyMarkdownFile(inputDir, outputDir, path);
    }
  }
}

function scanDir(inputDir: string, outputDir: string, subPath: string) {
  const folderPath = `${inputDir}/${subPath}`;
  const files = fs.readdirSync(folderPath);
  const items: PostMeta[] = [];
  const folders: string[] = [];
  for (const path of files) {
    const meta = checkFile(inputDir, outputDir, `${subPath}/${path}`);
    if (meta) {
      items.push(meta);
    } else {
      folders.push(path);
    }
  }
  const parts = subPath.split('/');
  const name = parts[parts.length - 1].replace('.md', '');
  const result = buildDirHtml(
    name.charAt(0).toUpperCase() + name.slice(1),
    subPath,
  );
  const dirPath = `${outputDir}/${subPath}`;
  checkDir(dirPath);
  fs.writeFileSync(`${dirPath}/index.html`, result);
  const jsonResult = JSON.stringify({
    updated: Date.now(),
    items,
    folders,
  });
  fs.writeFileSync(`${dirPath}/info.json`, jsonResult);
}

function buildDirHtml(title: string, folder: string): string {
  let result = '';
  result += `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <base href="/">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
      rel="stylesheet"
    />
  </head>
  <body>
    <nav-wrapper title="${title}"
      ><meta-list folder="${folder}"></meta-list
    ></nav-wrapper>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <script type="module" src="/dist/components/nav-wrapper.js"></script>
    <script type="module" src="/dist/components/meta-list.js"></script>
  </body>
</html>
  `;
  return result;
}

function copyMarkdownFile(
  inputDir: string,
  outputDir: string,
  subPath: string,
) {
  const localPath = `${inputDir}/${subPath}`;
  const parts = subPath.split('/');
  const name = parts[parts.length - 1].replace('.md', '');
  const content = fs.readFileSync(localPath).toString();
  const meta = getPostFromMeta(content, localPath, name);
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
    <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
    <script>
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });

      const firebaseConfig = {
        apiKey: 'AIzaSyCfbxrJWY2QgbSJrCnS3jZ8mfBwvQrqII0',
        authDomain: 'development-267918.firebaseapp.com',
        databaseURL: 'https://development-267918.firebaseio.com',
        projectId: 'development-267918',
        storageBucket: 'development-267918.appspot.com',
        messagingSenderId: '700791912456',
        appId: '1:700791912456:web:0b4947c995cec6c38bb9bd',
        measurementId: 'G-JQNPVBL9DR',
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    </script>
    `;
    //     result += `
    //     <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
    //     <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
    //     <script>
    //       const firebaseConfig = {
    //         apiKey: 'AIzaSyCfbxrJWY2QgbSJrCnS3jZ8mfBwvQrqII0',
    //         authDomain: 'development-267918.firebaseapp.com',
    //         databaseURL: 'https://development-267918.firebaseio.com',
    //         projectId: 'development-267918',
    //         storageBucket: 'development-267918.appspot.com',
    //         messagingSenderId: '700791912456',
    //         appId: '1:700791912456:web:0b4947c995cec6c38bb9bd',
    //         measurementId: 'G-JQNPVBL9DR',
    //       };
    //       firebase.initializeApp(firebaseConfig);
    //       firebase.analytics();
    //     </script>
    // `;

    result += `
    </body>
  </html>`;
  }
  const subPathName = subPath.replace('.md', '');
  checkPath(outputDir, subPathName);
  fs.writeFileSync(`${outputDir}/${subPathName}/index.html`, result);
  return meta;
}

function checkPath(outputDir: string, path: string) {
  const parts = path.split('/');
  let subPath = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    subPath += `/${part}`;
    checkDir(`${outputDir}/${subPath}`);
  }
}

function md2Html(text: string) {
  const converter = new Converter({
    tables: true,
    omitExtraWLInCodeBlocks: true,
    ghCompatibleHeaderId: true,
    headerLevelStart: 3,
    simplifiedAutoLink: true,
    excludeTrailingPunctuationFromURLs: true,
    tablesHeaderId: true,
    tasklists: true,
    ghMentions: true,
    simpleLineBreaks: true,
    requireSpaceBeforeHeadingText: true,
    openLinksInNewWindow: true,
    encodeEmails: true,
    emoji: true,
    parseImgDimensions: true,
    literalMidWordUnderscores: true,
    strikethrough: true,
    smoothLivePreview: true,
  });
  const result = converter.makeHtml(text);
  return result;
}

function checkDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

build('assets', 'public');
