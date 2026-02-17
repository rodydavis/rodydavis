---
title: Lit and Monaco Editor
description: >
  Learn how to create a Lit web component that wraps the Monaco Editor (powering
  VSCode) to add a fully functional code editor to your web applications.
date: '2025-01-20 02:32:31.800Z'
draft: false
tags:
  - Lit
  - Web Components
  - VSCode
summary: >-
  Build a VS Code extension using Lit and Monaco Editor to create a web-based
  code editor; source code and a live demo are available.
embedding: >-
  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
related:
  - lit-vscode-extension.md
  - codemirror-dynamic-theme.md
  - lit-rich-text-editor.md
  - figma-and-lit.md
  - html-code-sandbox.md
---

In this article I will go over how to set up a [Lit](https://lit.dev/) web component and use it to wrap the [Monaco Editor](https://microsoft.github.io/monaco-editor/) that powers [VSCode](https://code.visualstudio.com/).

> **TLDR** You can find the final source [here](https://github.com/rodydavis/lit-code-editor) and an online demo [here](https://rodydavis.github.io/lit-code-editor/).

To learn how to build an extension with VSCode and Lit check out the blog post [here](https://rodydavis.com/posts/lit-vscode-extension/).

Prerequisites 
--------------

*   Vscode
*   Node >= 16
*   Typescript

Getting Started 
----------------

We can start off by navigating in terminal to the location of the project and run the following:

```markdown
npm init @vitejs/app --template lit-ts
```

Then enter a project name `lit-code-editor` and now open the project in vscode and install the dependencies:

```markdown
cd lit-code-editor
npm i lit monaco-editor
npm i -D @types/node
code .
```

Update the `vite.config.ts` with the following:

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-code-editor/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
```

Template 
---------

Open up the `index.html` and update it with the following:

```markup
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lit Code Editor</title>
    <script type="module" src="/src/code-editor.ts"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <code-editor>
      <script type="text/javascript">
function x() {
  console.log("Hello world! :)");
}
      </script>
    </code-editor>
  </body>
</html>
```

We are setting up the `lit-element` to have a slot which will be the code for the editor to start with. The language can be set with the type or adding an attribute to the `code-editor` component.

Web Component 
--------------

Before we update our component we need to rename `my-element.ts` to `code-editor.ts`

Open up `code-editor.ts` and update it with the following:

```javascript
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";

// -- Monaco Editor Imports --
import * as monaco from "monaco-editor";
import styles from "monaco-editor/min/vs/editor/editor.main.css";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

@customElement("code-editor")
export class CodeEditor extends LitElement {
  private container: Ref<HTMLElement> = createRef();
  editor?: monaco.editor.IStandaloneCodeEditor;
  @property() theme?: string;
  @property() language?: string;
  @property() code?: string;

  static styles = css`
    :host {
      --editor-width: 100%;
      --editor-height: 100vh;
    }
    main {
      width: var(--editor-width);
      height: var(--editor-height);
    }
  `;

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <main ${ref(this.container)}></main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-editor": CodeEditor;
  }
}

```

Here we are just setting up some boilerplate to set up the [web workers with vite](https://vitejs.dev/guide/features.html#web-workers) and passing the reference from the container element to the template using the [ref directive](https://lit.dev/docs/templates/directives/#ref).

The styles from monaco editor are also passed as a style element load in the shadow root.

Now let's add some helper methods for accessing the code and language provided:

```javascript
private getFile() {
  if (this.children.length > 0) return this.children[0];
  return null;
}

private getCode() {
  if (this.code) return this.code;
  const file = this.getFile();
  if (!file) return;
  return file.innerHTML.trim();
}

private getLang() {
  if (this.language) return this.language;
  const file = this.getFile();
  if (!file) return;
  const type = file.getAttribute("type")!;
  return type.split("/").pop()!;
}

private getTheme() {
  if (this.theme) return this.theme;
  if (this.isDark()) return "vs-dark";
  return "vs-light";
}

private isDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
```

These methods are checking the slot for the script tag with the language provided or looking for a property set on `code-editor` and then returning the value.

Now let's attach the editor to the container reference:

```javascript
firstUpdated() {
  this.editor = monaco.editor.create(this.container.value!, {
    value: this.getCode(),
    language: this.getLang(),
    theme: this.getTheme(),
    automaticLayout: true,
  });
   window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      monaco.editor.setTheme(this.getTheme());
    });
}
```

Now the editor should be running and able to be interacted with:

![](../../assets/m_1_tsfmich8kz.webp)

When the system changes to dark mode it will [switch](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) as well!

![](../../assets/m_2_ggpw2nyy0d.webp)

To get and set the value from the editor we can add 2 helper methods:

```javascript
setValue(value: string) {
  this.editor!.setValue(value);
}

getValue() {
  const value = this.editor!.getValue();
  return value;
}
```

Everything should work as expected now and the final code should look like the following:

```javascript
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";

// -- Monaco Editor Imports --
import * as monaco from "monaco-editor";
import styles from "monaco-editor/min/vs/editor/editor.main.css";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

@customElement("code-editor")
export class CodeEditor extends LitElement {
  private container: Ref<HTMLElement> = createRef();
  editor?: monaco.editor.IStandaloneCodeEditor;
  @property() theme?: string;
  @property() language?: string;
  @property() code?: string;

  static styles = css`
    :host {
      --editor-width: 100%;
      --editor-height: 100vh;
    }
    main {
      width: var(--editor-width);
      height: var(--editor-height);
    }
  `;

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <main ${ref(this.container)}></main>
    `;
  }

  private getFile() {
    if (this.children.length > 0) return this.children[0];
    return null;
  }

  private getCode() {
    if (this.code) return this.code;
    const file = this.getFile();
    if (!file) return;
    return file.innerHTML.trim();
  }

  private getLang() {
    if (this.language) return this.language;
    const file = this.getFile();
    if (!file) return;
    const type = file.getAttribute("type")!;
    return type.split("/").pop()!;
  }

  private getTheme() {
    if (this.theme) return this.theme;
    if (this.isDark()) return "vs-dark";
    return "vs-light";
  }

  private isDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  setValue(value: string) {
    this.editor!.setValue(value);
  }

  getValue() {
    const value = this.editor!.getValue();
    return value;
  }

  firstUpdated() {
    this.editor = monaco.editor.create(this.container.value!, {
      value: this.getCode(),
      language: this.getLang(),
      theme: this.getTheme(),
      automaticLayout: true,
    });
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        monaco.editor.setTheme(this.getTheme());
      });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-editor": CodeEditor;
  }
}

```

Usage 
------

To use this component it can have the code provided by slots:

```markup
<code-editor>
  <script type="text/javascript">
function x() {
  console.log("Hello world! :)");
}
  </script>
</code-editor>
```

Or for properties:

```markup
<code-editor 
  code="console.log('Hello World');" 
  language="javascript"
  >
</code-editor>
```

Or both:

```markup
<code-editor language="typescript">
  <script>
function x() {
  console.log("Hello world! :)");
}
  </script>
</code-editor>
```

The theme can also be manually set:

```markup
<code-editor theme="vs-light"> </code-editor>
```

Conclusion 
-----------

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev/).

The source for this example can be found [here](https://github.com/rodydavis/lit-code-editor).
