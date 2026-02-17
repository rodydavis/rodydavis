---
title: Lit and Figma
description: >
  Learn how to create a Figma plugin using Lit web components, including project
  setup, component creation, WASM integration, and building the final plugin for
  use in Figma.
date: '2025-01-20 02:00:23.655Z'
draft: false
tags:
  - Web Components
  - Lit
  - CSS
  - HTML
  - Javascript
  - WASM
  - Figma
summary: >-
  This article provides a tutorial on setting up a Lit web component and using
  it to build a Figma plugin, including project setup, dependencies, and build
  scripts, with the complete source code available on GitHub.
embedding: >-
  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
related:
  - lit-rich-text-editor.md
  - lit-vscode-extension.md
  - codemirror-dynamic-theme.md
  - lit-monaco-editor.md
  - html-code-sandbox.md
---

In this article I will go over how to set up a [Lit](https://lit.dev/) web component and use it to create a figma plugin.

> **TLDR** You can find the final source [here](https://github.com/rodydavis/figma_lit_example).

Prerequisites 
--------------

*   Vscode
*   Figma Desktop
*   Node
*   Typescript

Getting Started 
----------------

We can start off by creating a empty directory and naming it with `snake_case` whatever we want.

```markdown
mkdir figma_lit_example
cd figma_lit_example
```

### Web Setup 

Now we are in the `figma_lit_example` directory and can setup Figma and Lit. Let's start with node.

```markdown
npm init -y
```

This will setup the basics for a node project and install the packages we need. Now lets add some config files. Now open the `package.json` and replace it with the following:

```javascript
{
  "name": "figma_lit_example",
  "version": "1.0.0",
  "description": "Lit Figma Plugin",
  "dependencies": {
    "lit": "^2.0.0-rc.1"
  },
  "devDependencies": {
    "@figma/plugin-typings": "^1.23.0",
    "html-webpack-inline-source-plugin": "^1.0.0-beta.2",
    "html-webpack-plugin": "^4.3.0",
    "css-loader": "^5.2.4",
    "ts-loader": "^8.0.0",
    "typescript": "^4.2.4",
    "url-loader": "^4.1.1",
    "webpack": "^4.44.1",
    "webpack-cli": "^4.6.0"
  },
  "scripts": {
    "dev": "npx webpack --mode=development --watch",
    "copy": "mkdir -p lit-plugin && cp ./manifest.json ./lit-plugin/manifest.json && cp ./dist/ui.html ./lit-plugin/ui.html && cp ./dist/code.js ./lit-plugin/code.js",
    "build": "npx webpack --mode=production && npm run copy",
    "zip": "npm run build && zip -r lit-plugin.zip lit-plugin"
  },
  "browserslist": [
    "last 1 Chrome versions"
  ],
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

This will add everything we need and add the scripts we need for development and production. Then run the following:

```markdown
npm i
```

This will install everything we need to get started. Now we need to setup some config files.

```markdown
touch tsconfig.json
touch webpack.config.ts
```

This will create 2 files. Now open up `tsconfig.json` and paste the following:

```javascript
{
  "compilerOptions": {
    "target": "es2017",
    "module": "esNext",
    "moduleResolution": "node",
    "lib": ["es2017", "dom", "dom.iterable"],
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"],
    "declaration": true,
    "sourceMap": true,
    "inlineSources": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "strict": true,
    "noImplicitAny": false,
    "outDir": "./lib",
    "baseUrl": "./packages",
    "importHelpers": true,
    "plugins": [
      {
        "name": "ts-lit-plugin",
        "rules": {
          "no-unknown-tag-name": "error",
          "no-unclosed-tag": "error",
          "no-unknown-property": "error",
          "no-unintended-mixed-binding": "error",
          "no-invalid-boolean-binding": "error",
          "no-expressionless-property-binding": "error",
          "no-noncallable-event-binding": "error",
          "no-boolean-in-attribute-binding": "error",
          "no-complex-attribute-binding": "error",
          "no-nullable-attribute-binding": "error",
          "no-incompatible-type-binding": "error",
          "no-invalid-directive-binding": "error",
          "no-incompatible-property-type": "error",
          "no-unknown-property-converter": "error",
          "no-invalid-attribute-name": "error",
          "no-invalid-tag-name": "error",
          "no-unknown-attribute": "off",
          "no-unknown-event": "off",
          "no-unknown-slot": "off",
          "no-invalid-css": "off"
        }
      }
    ]
  },
  "include": ["src/**/*.ts"],
  "references": []
}

```

This is a basic typescript config. Now open up `webpack.config.ts` and paste the following:

```javascript
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  devtool: argv.mode === "production" ? false : "inline-source-map",
  entry: {
    ui: "./src/ui.ts",
    code: "./src/code.ts",
    app: "./src/my-app.ts",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", { loader: "css-loader" }] },
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: "url-loader" },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "ui.html"),
      filename: "ui.html",
      inject: true,
      inlineSource: ".(js|css)$",
      chunks: ["ui"],
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
});

```

Now we need to create the ui for the plugin:

```markdown
touch ui.html
```

Open up `/src/ui.html` and add the following:

```markup
<my-app></my-app>
```

Now we need a manifest file for the figma plugin:

```markdown
touch manifest.json
```

Open `manifest.json` and add the following:

```javascript
{
  "name": "figma_lit_example",
  "id": "973668777853442323",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html"
}
```

Now we need to create our web component:

```markdown
mkdir src
cd src
touch my-app.ts
touch code.ts
touch ui.ts
cd ..
```

Open `/src/ui.ts` and paste the following:

```javascript
import "./my-app";
```

Open `/src/my-app.ts` and paste the following:

```javascript
import { html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("my-app")
export class MyApp extends LitElement {
  @property() amount = "5";
  @query("#count") countInput!: HTMLInputElement;

  render() {
    return html`
      <div>
        <h2>Rectangle Creator</h2>
        <p>Count: <input id="count" value="${this.amount}" /></p>
        <button id="create" @click=${this.create}>Create</button>
        <button id="cancel" @click=${this.cancel}>Cancel</button>
      </div>
    `;
  }

  create() {
    const count = parseInt(this.countInput.value, 10);
    this.sendMessage("create-rectangles", { count });
  }

  cancel() {
    this.sendMessage("cancel");
  }

  private sendMessage(type: string, content: Object = {}) {
    const message = { pluginMessage: { type: type, ...content } };
    parent.postMessage(message, "*");
  }
}

```

Open `code.ts` and paste the following:

```javascript
const options: ShowUIOptions = {
  width: 250,
  height: 200,
};

figma.showUI(__html__, options);

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'create-rectangles':
      const nodes: SceneNode[] = [];
      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
      break;
    default:
      break;
  }

  figma.closePlugin();
};

```

Building the Plugin 
--------------------

Now that we have all the code in place we can build the plugin and test it in Figma.

```markdown
npm run build
```

#### Step 1 

Download and open the desktop version of Figma.

[https://www.figma.com/downloads/](https://www.figma.com/downloads/)

#### Step 2 

Open the menu and navigate to “Plugins > Manage plugins”

![](../../assets/f_1_kfp7k3aclm.webp)

#### Step 3 

Click on the plus icon to add a local plugin.

![](../../assets/f_2_m4hgctvnry.webp)

Click on the box to link to an existing plugin to navigate to the `lit-plugin` folder that was created after the build process in your source code and select `manifest.json`.

![](../../assets/f_3_ufrd6v1644.webp)

#### Step 4 

To run the plugin navigate to “Plugins > Development > figma\_lit\_example” to launch your plugin.

![](../../assets/f_4_uoz37dtck3.webp)

#### Step 5 

Now your plugin should launch and you can create 5 rectangles on the canvas.

![](../../assets/f_5_496mr4f5wp.webp)

If everything worked you will have 5 new rectangles on the canvas focused by figma.

![](../../assets/f_6_kp2j5tc6xw.webp)

WASM Support 
-------------

If there is a heavy computation that could benefit from running in [WebAssembly](https://webassembly.org/) the following will ensure that it is hardware accelerated when possible.

Let's add [AssemblyScript](https://www.assemblyscript.org/) and some dependencies that will be used for loading the WASM into the figma ui.

```markdown
npm i @assemblyscript/loader
npm i --D assemblyscript js-inline-wasm
npx asinit .
```

Confirm yes to the prompt to have it generate the project files and add the following to the scripts in `package.json`:

```javascript
"asbuild:untouched": "asc assembly/index.ts --target debug",
"asbuild:optimized": "asc assembly/index.ts --target release",
"asbuild": "npm run asbuild:untouched && npm run asbuild:optimized",
"inlinewasm": "inlinewasm build/optimized.wasm --output src/wasm.ts",
```

The code that will be used for the WASM is in `/assembly/index.ts` and it should show the following:

```javascript
// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

```

Now let's build the wasm module:

```markdown
npm run asbuild
```

For the wasm build to be ignored for git add the following to .gitignore:

```markdown
build
```

This will generate the wasm and wat files in the build directory, but for figma to load them into the ui it needs to be inlined so run the following command to generate the js from the wasm file:

```markdown
npm run inlinewasm
```

This should generate `src/wasm.ts` with the following:

```javascript
const encoded = 'AGFzbQEAAAABBwFgAn9/AX8DAgEABQMBAAAHEAIDYWRkAAAGbWVtb3J5AgAKCQEHACAAIAFqCwAmEHNvdXJjZU1hcHBpbmdVUkwULi9vcHRpbWl6ZWQud2FzbS5tYXA=';
export default new Promise(resolve => {
    const decoded = atob(encoded);
    const len = decoded.length;
    const bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = decoded.charCodeAt(i);
    }
    resolve(new Response(bytes, { status: 200, headers: { "Content-Type": "application/wasm" } }));
});

```

Now open up the `/src/my-app.ts` and update with the following:

```javascript
import { html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("my-app")
export class MyApp extends LitElement {
  @property() amount = "5"; // <-- Pass in a value for the number of rectangles to create
  @query("#count") countInput!: HTMLInputElement;

  render() {
    return html`
      <div>
        <h2>Rectangle Creator</h2>
        <!-- Pass in the amount to the input value -->
        <p>Count: <input id="count" value="${this.amount}" /></p>
        ...
      </div>
    `;
  }
  ...
}
```

This will let us pass in the amount of boxes to create externally.

Now open `/src/ui.ts` and update it with the following:

```javascript
import "./my-app";

import wasm from "./wasm"; // <-- Our WASM file to load

WebAssembly.instantiateStreaming(wasm as Promise<Response>).then((obj) => {
  // @ts-ignore
  const value: number = obj.instance.exports.add(2, 4);
  console.log("return from wasm", value);
  const elem = document.querySelector('my-app')! as HTMLElement;
  elem.setAttribute('amount', `${value}`);
});

```

Now when we build the plugin and run it in figma the amount of boxes will be the result of calling into wasm!

Conclusion 
-----------

If you want to learn more about building a plugin in Figma you can read more [here](https://www.figma.com/plugin-docs/intro/) and for Lit you can read the docs [here](https://lit.dev/).
