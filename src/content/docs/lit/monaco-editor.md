---
title: Lit and Monaco Editor
date: '2025-01-20 02:32:31.800Z'
draft: false
tags:
  - lit
  - html
  - css
  - javascript
  - typescript
  - github
  - web
summary: >-
  This guide provides a technical tutorial on how to integrate the powerful
  Monaco Editor (the engine behind VSCode) into a reusable web component using
  Lit.
embedding: >-
  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
related:
  - lit/vscode-extension.md
  - lit/codemirror-dynamic-theme.md
  - lit/rich-text-editor.md
  - lit/figma-interop.md
  - web/html-code-sandbox.md
tabs:
  - label: Live Demo
    href: 'https://rodydavis.github.io/lit-code-editor/'
  - label: Source Code
    href: 'https://github.com/rodydavis/lit-code-editor'
last_updated_metadata: '2026-05-23T00:13:10.833Z'
---

# Lit and Monaco Editor

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

![](../../../assets/m_1_tsfmich8kz.webp)

When the system changes to dark mode it will [switch](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) as well!

![](../../../assets/m_2_ggpw2nyy0d.webp)

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
