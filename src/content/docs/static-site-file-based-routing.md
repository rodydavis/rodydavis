---
title: File Based Routing for Static Sites
description: >
  Learn how to create a multi-page static site with file-based routing using
  TypeScript, allowing for quick updates and easy content management.
date: '2025-01-19 23:59:39.058Z'
draft: false
tags:
  - Web Components
  - Lit
  - HTML
  - CSS
  - Javascript
summary: >-
  This article details how to build a static site multi-page application using
  file-based routing with TypeScript, including setup instructions for a project
  structure, `tsconfig.json`, and `package.json` files.
embedding: >-
  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
related:
  - deep-linking-flutter-web.md
  - figma-and-lit.md
  - flutter-and-xcode-cloud.md
  - flutter-ssr-rfw.md
  - lit-html-table.md
---

In this article I will go over how to use file based routing to output as a static site multi page application.

> **TLDR** The final source [here](https://github.com/rodydavis/static-site-file-based-routing) and an online [demo](https://rodydavis.github.io/static-site-file-based-routing/).

Step 1 
-------

Create a new folder called “static-site-file-based-routing” and open it up in VSCode.

```markdown
mkdir static-site-file-based-routing
cd static-site-file-based-routing
code .
```

Step 2 
-------

Create a `tsconfig.json` and replace it with the following:

```javascript
{
  "compilerOptions": {
    "incremental": true,
    "target": "es5",
    "module": "es2020",
    "outDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": [
      "node_modules/@types",
      "src/@types"
    ]
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

Step 3 
-------

Create a `package.json` and update it with the following:

```javascript
{
  "name": "static-site-file-based-routing",
  "version": "1.0.0",
  "description": "File based routing for HTML MPA",
  "type": "module",
  "scripts": {
    "start": "wds --node-resolve --root-dir build --base-path /static-site-file-based-routing --open --watch",
    "postinstall": "npm run tsc",
    "build": "node dist/main.js --inputDir ./example --outputDir ./build",
    "dev": "node dist/main.js --inputDir ./example --outputDir ./build -w",
    "tsc": "tsc",
    "tsc:watch": "tsc -w"
  },
  "devDependencies": {
    "@pkgjs/parseargs": "^0.10.0",
    "@types/markdown-it": "^12.2.3",
    "@types/node": "^18.7.23",
    "@web/dev-server": "^0.1.34",
    "chokidar": "^3.5.3",
    "highlight.js": "^11.6.0",
    "html-format": "^1.0.2",
    "markdown-it": "^13.0.1",
    "parse5": "^7.1.1",
    "typescript": "^4.8.4"
  }
}
```

Then run `npm install` to install all the dependencies.

> I am using `@web/dev-server` to serve the site locally. You can use any server you want.

These dependencies are used for various file transformations such as markdown to HTML, HTML formatting, and file watching.

Step 4 
-------

Create a `src` folder and add 4 files:

### `src/build.ts` 

```javascript
import * as fs from "fs";
import { compileDir, compileTarget } from "./compile.js";
import * as path from "path";
import chokidar from "chokidar";
import { publicDirectory } from "./static.js";

interface Options {
    inputDir?: string;
    outputDir?: string;
    publicDir?: string;
    watch?: boolean;
    clean?: boolean;
}

export default async function build(options: Options) {
    const inputDir = options.inputDir || "www";
    const outputDir = options.outputDir || "build";
    const publicDir = options.publicDir || "public";
    const watch = options.watch || false;
    const clean = options.clean || false;

    if (!fs.existsSync(inputDir)) {
        throw new Error(`Input directory ${inputDir} does not exist`);
    }

    if (clean) {
        if (fs.existsSync(outputDir)) {
            fs.rmdirSync(outputDir, { recursive: true });
        }
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    if (watch) {
        console.log("Watching for changes...");
        chokidar.watch(inputDir).on("all", async (event, inputFile) => {
            console.log(event, inputFile);
            if (fs.existsSync(inputFile)) {
                const relativePath = path.relative(inputDir, inputFile);
                const outputFile = `${outputDir}/${relativePath}`;

                const stat = fs.statSync(inputFile);
                if (stat.isDirectory()) {
                    await compileDir(inputFile, outputFile);
                } else if (stat.isFile()) {
                    const filename = path.basename(inputFile);
                    if (filename === "layout.html") {
                        // Rebuild all related directories
                        const dir = path.dirname(inputFile);
                        const inDir = path.relative(inputDir, dir);
                        const outDir = `${outputDir}/${inDir}`;
                        await compileDir(dir, outDir);
                    } else {
                        await compileTarget(inputFile, outputFile);
                    }
                }
            }
        });
    } else {
        await compileDir(inputDir, outputDir);
    }

    if (publicDir.split(',').length > 1) {
        for (const dir of publicDir.split(',')) {
            publicDirectory(dir, outputDir, watch);
        }
    } else {
        publicDirectory(publicDir, outputDir, watch);
    }
}

```

### `src/compile.ts` 

```javascript
import * as fs from "fs";
import * as path from "path";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import * as parse5 from "parse5";
import type { Document } from "parse5/dist/tree-adapters/default.js";
import format from 'html-format';

function compile(file: string) {
    const raw = fs.readFileSync(file, "utf-8");
    const ext = path.extname(file);

    switch (ext) {
        case ".md":
        case ".markdown":
            const md = new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return (
                                '<pre class="hljs"><code>' +
                                hljs.highlight(str, { language: lang, ignoreIllegals: true })
                                    .value +
                                "</code></pre>"
                            );
                        } catch (__) {
                            console.error(__);
                        }
                    }
                    return "";
                },
            });
            return parse5.parse(md.render(raw));
        case ".html":
            return parse5.parse(raw);
        default:
            break;
    }

    return raw;
}

function createHtml(options?: { head?: string; body?: string; }) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
${options?.head ?? ""}
</head>
<body>
${options?.body ?? "<slot></slot>"}
</body>
</html>
`;
}

export async function compileFile(file: string, target: string) {
    // Use regex to check if ends with index.*
    const isIndex = /index\.([a-z]+)$/i.test(file);

    if (!isIndex && !fs.statSync(file).isDirectory()) {
        // Skipping for nested layouts
        return;
    }

    const parent = path.dirname(target);

    // Render up the directory tree until we hit the root directory
    const files: string[] = [file];
    let filePath = file;
    while (filePath !== parent) {
        filePath = path.dirname(filePath);
        // Check for root level layout
        const layout = path.join(filePath, "layout.html");
        if (fs.existsSync(layout)) {
            files.unshift(layout);
        }
        if (filePath === ".") break;
    }

    // Check for root level index markdown or html
    const layout = path.join(parent, "layout.html");
    if (fs.existsSync(layout)) {
        if (
            fs.existsSync(path.join(parent, "index.html")) ||
            fs.existsSync(path.join(parent, "index.md")) ||
            fs.existsSync(path.join(parent, "index.markdown"))
        ) {
            files.unshift(layout);
        }
    }

    let output = createHtml();

    for (const item of files) {
        const doc = compile(item);
        if (typeof doc !== 'string') {
            const content = parse5.serialize(doc);
            output = mergeDocuments(output, content);
        }
    }

    // Replace extension
    const ext = path.extname(file);
    const newFile = target.replace(ext, '.html');

    // Check if parent directory exists
    const parentDir = path.dirname(newFile);
    if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
    }

    fs.writeFileSync(newFile, output);
    console.log(`--> ${newFile}`);
}

function mergeDocuments(current: string, source: string) {
    let raw = current;

    // Merge body
    const html = extractDoc(parse5.parse(source));
    // Check for <slot></slot>
    const hasSlot = raw.includes("<slot></slot>");
    if (hasSlot) {
        raw = raw.replace("<slot></slot>", parse5.serialize(html.body));
    } else {
        // Append to body
        const endBodyIdx = raw.lastIndexOf("</body>");
        const start = raw.slice(0, endBodyIdx);
        const end = raw.slice(endBodyIdx);
        const body = parse5.serialize(html.body);
        raw = start + body + end;
    }

    // Merge head
    const endHeadIdx = raw.lastIndexOf("</head>");
    const start = raw.slice(0, endHeadIdx);
    const end = raw.slice(endHeadIdx);
    const head = parse5.serialize(html.head);
    raw = start + head + end;

    // Format
    raw = format(raw);

    // Remove duplicate title tags
    const lastTitle = raw.lastIndexOf("<title>");
    const lastTitleEnd = raw.lastIndexOf("</title>");
    const title = raw.slice(lastTitle, lastTitleEnd + 8);
    raw = raw.replace(/<title>.*<\/title>/, "");
    raw = raw.replace("</head>", title + "</head>");

    return raw;
}

function extractDoc(doc: Document) {
    const html = (doc.childNodes[1] ?? doc.childNodes[0]) as unknown as Document;
    const head = html.childNodes.find(
        (node) => node.nodeName === "head"
    ) as unknown as Document;
    const body = html.childNodes.find(
        (node) => node.nodeName === "body"
    ) as unknown as Document;
    return { head, body };
}

export async function compileDir(inputDir: string, outputDir: string) {
    const files = fs.readdirSync(inputDir);
    for (const file of files) {
        const inputFile = `${inputDir}/${file}`;
        const outputFile = `${outputDir}/${file}`;

        await compileTarget(inputFile, outputFile);
    }
}

export async function compileTarget(input: string, output: string) {
    const stat = fs.statSync(input);
    if (stat.isDirectory()) {
        if (!fs.existsSync(output)) {
            fs.mkdirSync(output, { recursive: true });
        }
        await compileDir(input, output);
    } else if (stat.isFile()) {
        const ext = path.extname(input);
        if (['.html', '.md', '.markdown'].includes(ext)) {
            await compileFile(input, output);
        } else {
            const current = fs.readFileSync(input);
            const parentDir = path.dirname(output);
            if (!fs.existsSync(parentDir)) {
                fs.mkdirSync(parentDir, { recursive: true });
            }
            if (fs.existsSync(output)) {
                // Check if content is the same
                const previous = fs.readFileSync(output);
                if (Buffer.compare(current, previous) !== 0) {
                    fs.writeFileSync(output, current);
                }
            } else {
                // Copy the file
                fs.copyFileSync(input, output);
            }
        }
    }
}

```

### `src/static.ts` 

```javascript
import * as fs from "fs";
import * as path from "path";
import chokidar from "chokidar";

export function publicDirectory(publicDir: string, outputDir: string, watch: boolean) {
    if (watch) {
        if (fs.existsSync(publicDir)) {
            chokidar.watch(publicDir).on("all", (event, inputFile) => {
                console.log(event, inputFile);
                if (fs.existsSync(inputFile)) {
                    const relativePath = path.relative(publicDir, inputFile);
                    const outputFile = `${outputDir}/${relativePath}`;

                    const stat = fs.statSync(inputFile);
                    if (stat.isDirectory()) {
                        copyStaticFiles(inputFile, outputFile);
                    } else if (stat.isFile()) {
                        fs.copyFileSync(inputFile, outputFile);
                    }
                }
            });
        }
    } else {
        // Copy static files
        if (fs.existsSync(publicDir)) {
            copyStaticFiles(publicDir, outputDir);
        }
    }
}

function copyStaticFiles(inDir: string, outDir: string) {
    const files = fs.readdirSync(inDir);
    for (const file of files) {
        const inputFile = `${inDir}/${file}`;
        const outputFile = `${outDir}/${file}`;

        const stat = fs.statSync(inputFile);
        if (stat.isDirectory()) {
            if (!fs.existsSync(outputFile)) {
                fs.mkdirSync(outputFile, { recursive: true });
            }

            copyStaticFiles(inputFile, outputFile);
        } else if (stat.isFile()) {
            fs.copyFileSync(inputFile, outputFile);
        }
    }
}

```

### `src/main.ts` 

```javascript
#!/usr/bin/env node

// @ts-ignore
import { parseArgs } from "@pkgjs/parseargs";
import build from "./build.js";

export async function main() {
  const {
    values: { inputDir, outputDir, watch },
  } = parseArgs({
    options: {
      inputDir: {
        type: "string",
        short: "i",
      },
      outputDir: {
        type: "string",
        short: "o",
      },
      watch: {
        type: "boolean",
        short: "w",
      },
    },
    allowPositional: true,
  });

  if (inputDir === undefined || outputDir === undefined) {
    console.log("Usage: build -i <inputDir> -o <outputDir> [-w]");
    return;
  }

  await build({
    inputDir,
    outputDir,
    watch,
  });
}

main();

```

Step 5 
-------

Now that the project is setup we can start the typescript compiler in watch mode.

```markdown
npm run ts:watch
```

Step 6 
-------

Now create a folder that will contain the source files for the website.

### `example/index.md` 

```markdown
# Hello World

This is a test
```

### `example/style.css` 

```css
body {
    background-color: #000;
    color: #fff;
}
```

### `example/layout.html` 

```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <slot></slot>
</body>
</html>
```

Step 7 
-------

With the source files created we can now run the build script.

For a one time build run:

```markdown
npm run build
```

For a watch mode run:

```markdown
npm run dev
```

Now start the http server:

```markdown
npm run start
```

Conclusion 
-----------

As you make changes it will only update affected files and be very fast to update.

> Note that this does not bundle the javascript and will be up to you if you are using `node_modules` in any files (for the example in the repo I show how to use **UNPKG**).

If you want to find the source code you can check it out [here](https://github.com/rodydavis/static-site-file-based-routing) otherwise thanks for reading and let me know if you have any questions!
