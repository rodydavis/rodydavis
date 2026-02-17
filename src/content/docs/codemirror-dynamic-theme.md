---
title: Dynamic Themes with CodeMirror
description: >
  Learn how to create a Lit web component with CodeMirror, dynamically themed
  using Material Design's color utilities, for a customizable code editing
  experience.
date: '2025-01-19 23:52:54.455Z'
draft: false
tags:
  - Web Components
  - Lit
  - HTML
  - CSS
  - Javascript
summary: >-
  Create a Lit web component with CodeMirror and Material Design for a dynamic
  code window, using Vite and TypeScript.
embedding: >-
  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
related:
  - lit-vscode-extension.md
  - lit-monaco-editor.md
  - lit-draggable-dom.md
  - html-code-sandbox.md
  - figma-and-lit.md
---

In this article I will go over how to set up a [Lit](https://lit.dev/) web component and use it to create a a code window that uses [CodeMirror](https://codemirror.net/) and apply a dynamic theme with [Material Design](https://material.io/).

> **TLDR** The final source [here](https://github.com/rodydavis/codemirror-dynamic-theme) and an online [demo](https://rodydavis.github.io/codemirror-dynamic-theme/).

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

Then enter a project name `codemirror-dynamic-theme` and now open the project in vscode and install the dependencies:

```markdown
cd codemirror-dynamic-theme
npm i lit codemirror @material/material-color-utilities
npm i -D @types/node @types/codemirror
code .
```

Update the `vite.config.ts` with the following:

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/codemirror-dynamic-theme/",
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
    <title>CodeMirror Dynamic Theme</title>
    <script type="module" src="/src/code-window.ts"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <code-window> </code-window>
  </body>
</html>
```

Web Component 
--------------

Before we update our component we need to rename `my-element.ts` to `code-window.ts`

Open up `code-window.ts` and update it with the following:

```javascript
import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  applyTheme,
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import CodeMirror from "codemirror";
import codemirrorStyles from "codemirror/lib/codemirror.css";

@customElement("code-window")
export class CodeWindow extends LitElement {
  static styles = css`
    ${unsafeCSS(codemirrorStyles)}

    main {
      width: 100vw;
      height: 100vh;
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
      --header-height: 48px;
      --input-size: 32px;
    }

    .toolbar {
      height: var(--header-height);
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      display: flex;
      align-items: center;
    }

    .actions > * {
      margin-left: 4px;
      margin-right: 4px;
    }

    .toolbar .title {
      font-family: sans-serif;
      font-size: 18px;
      padding-left: 4px;
    }

    .toolbar .actions {
      display: flex;
      align-items: center;
    }

    .toolbar a {
      padding: 0;
      margin: 0;
      padding-left: 8px;
      padding-right: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    input[type="color"] {
      width: calc(var(--input-size) * 2);
      height: var(--input-size);
      outline: none;
      border: none;
      border-radius: 50%;
      background-color: var(--md-sys-color-primary-container);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: var(--input-size);
      border: var(--md-sys-color-outline) solid 1px;
    }

    button {
      border: none;
      border-radius: 4px;
      padding: 8px;
    }

    .tertiary {
      background-color: var(--md-sys-color-tertiary);
      color: var(--md-sys-color-on-tertiary);
    }

    .secondary {
      background-color: var(--md-sys-color-secondary);
      color: var(--md-sys-color-on-secondary);
    }

    .spacer {
      flex: 1;
    }

    .editor {
      height: calc(100% - var(--header-height));
      width: 100%;
    }
  `;

  @property() value = [
    `import {html, css, LitElement} from 'lit';`,
    `import {customElement, property} from 'lit/decorators.js';`,
    ``,
    `@customElement('simple-greeting')`,
    `export class SimpleGreeting extends LitElement {`,
    `  static styles = css\`p { color: blue }\`;`,
    ``,
    `  @property()`,
    `  name = 'Somebody';`,
    ``,
    `  render() {`,
    `    return html\`<p>Hello, \${this.name}!</p>\`;`,
    `  }`,
    `}`,
  ].join("\n");

  @property() color = "#6750A4";
  @property({ type: Boolean }) dark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  render() {
    return html`<main>
      <header class="toolbar">
        <div class="title">${document.title}</div>
        <div class="spacer"></div>
        <div class="actions">
          <button class="secondary" @click=${this.toggleDark.bind(this)}>
            ${this.dark ? "Light" : "Dark"}
          </button>
          <button class="tertiary" @click=${this.randomColor.bind(this)}>
            Random
          </button>
          <input
            type="color"
            .value=${this.color}
            @input=${this.onColor.bind(this)}
          />
        </div>
      </header>
      <div class="editor"></div>
    </main>`;
  }

  firstUpdated() {
    const root = this.shadowRoot!.querySelector(".editor") as HTMLElement;
    const editor = CodeMirror(root, {
      value: this.value,
      mode: "javascript",
      lineNumbers: true,
      lineWrapping: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: true,
      autofocus: true,
    });
    console.debug(editor);
    editor.setSize("100%", `100%`);
    this.updateTheme();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        this.dark = e.matches;
        this.updateTheme();
      });
  }

  private updateTheme() {
   // TODO: Generate Theme
  }

  private setColor(val: string) {
    this.color = val;
    this.updateTheme();
  }

  private onColor(e: Event) {
    const target = e.target as HTMLInputElement;
    this.setColor(target.value);
  }

  private randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setColor(color);
  }

  private toggleDark() {
    this.dark = !this.dark;
    this.updateTheme();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "code-window": CodeWindow;
  }
}

```

Here we are setting up some of the editor basics to load in the styles needed for the basic layout.

There are also few methods that handle updating of properties on the element such as `toggleDark` and `setColor`. When you run the application you should see the following:

![](../../assets/cm_1_vrf88lj26h.webp)

It doesn't look great yet, but now we can add a CodeMirror theme to import. Create a file `src/theme.ts` and update it with the following:

```css
import { css } from "lit";

export const codeMirrorTheme = css`
  .CodeMirror {
    background-color: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
  }

  .CodeMirror-gutters {
    background: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
    border: none;
  }

  .CodeMirror-guttermarker,
  .CodeMirror-guttermarker-subtle,
  .CodeMirror-linenumber {
    color: var(--md-sys-color-on-background);
  }

  .CodeMirror-cursor {
    border-left: 1px solid var(--md-sys-color-primary);
  }
  .cm-fat-cursor .CodeMirror-cursor {
    background-color: var(--md-sys-color-background);
  }
  .cm-animate-fat-cursor {
    background-color: var(--md-sys-color-background);
  }

  div.CodeMirror-selected {
    background: var(--md-sys-color-surface-variant);
  }

  .CodeMirror-focused div.CodeMirror-selected {
    background: var(--md-sys-color-surface-variant);
  }

  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: var(--md-sys-color-surface-variant);
  }

  .CodeMirror-line::-moz-selection,
  .CodeMirror-line > span::-moz-selection,
  .CodeMirror-line > span > span::-moz-selection {
    background: var(--md-sys-color-surface-variant);
  }

  .CodeMirror-activeline-background {
    background: var(--md-sys-color-surface);
  }

  .cm-keyword {
    color: var(--md-custom-color-keyword) !important;
  }

  .cm-operator {
    color: var(--md-custom-color-operator) !important;
  }

  .cm-variable-2 {
    color: var(--md-custom-color-variable-2) !important;
  }

  .cm-variable-3,
  .cm-type {
    color: var(--md-custom-color-variable-3) !important;
  }

  .cm-builtin {
    color: var(--md-custom-color-builtin) !important;
  }

  .cm-atom {
    color: var(--md-custom-color-atom) !important;
  }

  .cm-number {
    color: var(--md-custom-color-number) !important;
  }

  .cm-def {
    color: var(--md-custom-color-def) !important;
  }

  .cm-string {
    color: var(--md-custom-color-string) !important;
  }

  .cm-string-2 {
    color: var(--md-custom-color-string-2) !important;
  }

  .cm-comment {
    color: var(--md-custom-color-comment) !important;
  }

  .cm-variable {
    color: var(--md-custom-color-variable) !important;
  }

  .cm-tag {
    color: var(--md-custom-color-tag) !important;
  }

  .cm-meta {
    color: var(--md-custom-color-meta) !important;
  }

  .cm-attribute {
    color: var(--md-custom-color-attribute) !important;
  }

  .cm-property {
    color: var(--md-custom-color-property) !important;
  }

  .cm-qualifier {
    color: var(--md-custom-color-qualifier) !important;
  }

  .cm-variable-3,
  .cm-type {
    color: var(--md-custom-color-variable-3) !important;
  }

  .cm-error {
    color: var(--md-sys-color-on-error);
    background-color: var(--md-sys-color-error);
  }

  .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: var(--md-sys-color-on-surface);
  }
`;

```

Here we are defining all the styles as [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) so we can easily update them.

Now import the theme and apply the styles in the component:

```javascript
import { codeMirrorTheme } from "./theme";

@customElement("code-window")
export class CodeWindow extends LitElement {
  static styles = css`
    ${unsafeCSS(codemirrorStyles)}
    ${codeMirrorTheme}
    ...
```

Now we need to implement the `updateTheme` method in our element:

```javascript
updateTheme() {
    const source = this.color;
    const dark = this.dark;
    const target = this.shadowRoot!.querySelector("main") as HTMLElement;
    const properties = [
        `--md-custom-color-keyword: #c75779;`,
        `--md-custom-color-operator: #008800;`,
        `--md-custom-color-variable: #90ccff;`,
        `--md-custom-color-variable-2: #dd7700;`,
        `--md-custom-color-variable-3: #3333bb;`,
        `--md-custom-color-variable-3: #decb6b;`,
        `--md-custom-color-builtin: #003388;`,
        `--md-custom-color-atom: #bb4646;`,
        `--md-custom-color-number: #b4c5ff;`,
        `--md-custom-color-def: #82aaff;`,
        `--md-custom-color-string: #ffb4a9;`,
        `--md-custom-color-string-2: #ffb4a9;`,
        `--md-custom-color-comment: #888888;`,
        `--md-custom-color-tag: #000080;`,
        `--md-custom-color-meta: #a9c7ff;`,
        `--md-custom-color-attribute: #008080;`,
        `--md-custom-color-property: #336699;`,
        `--md-custom-color-qualifier: #690;`,
    ];
    const customColors = properties.map((property) => {
        const [key, value] = property.split(":");
        const name = key.trim().replace(/^--md-custom-color-/, "");
        const color = argbFromHex(value.trim().replace(";", ""));
        return {
        name,
        value: color,
        blend: true,
        };
    });
    const theme = themeFromSourceColor(argbFromHex(source), customColors);
    applyTheme(theme, { target, dark });
    for (const custom of theme.customColors) {
        const name = custom.color.name;
        const section = dark ? custom.dark : custom.light;
        target.style.setProperty(
        `--md-custom-color-${name}`,
        hexFromArgb(section.color)
        );
    }
}
```

Here we are using the [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) package and generating a theme from a source color. We can take advantage of Custom Colors to blend the values to the theme.

After the theme is generated we can apply them to the root element and have the custom properties update the editor.

![](../../assets/cm_2_i38ka2mknd.webp)

Changing the source color can update the theme:

![](../../assets/cm_3_h3mcbh0c3s.webp)

Changing the brightness can set the colors as well:

![](../../assets/cm_4_u36e81hjiw.webp)

![](../../assets/cm_5_2xo33gqwdh.webp)

Conclusion 
-----------

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev/).

The source for this example can be found [here](https://github.com/rodydavis/codemirror-dynamic-theme).

If you want to check out dynamic themes for VSCode I created an extension [here](https://github.com/rodydavis/vscode-dynamic-theme).
