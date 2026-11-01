---
title: Dynamic Themes with CodeMirror
date: '2025-01-19 23:52:54.455Z'
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
  This tutorial guides users on how to create a dynamic, themed code editor by
  integrating CodeMirror within a Lit web component and applying Material Design
  theming.
embedding: >-
  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
related:
  - lit/monaco-editor.md
  - lit/vscode-extension.md
  - lit/rich-text-editor.md
  - lit/sheet-music.md
  - lit/draggable-dom.md
tabs:
  - label: Live Demo
    href: 'https://rodydavis.github.io/codemirror-dynamic-theme/'
  - label: Source Code
    href: 'https://github.com/rodydavis/codemirror-dynamic-theme'
last_updated_metadata: '2026-11-01T02:28:49.208Z'
---

# Dynamic Themes with CodeMirror

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

![](../../../assets/cm_1_vrf88lj26h.webp)

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

![](../../../assets/cm_2_i38ka2mknd.webp)

Changing the source color can update the theme:

![](../../../assets/cm_3_h3mcbh0c3s.webp)

Changing the brightness can set the colors as well:

![](../../../assets/cm_4_u36e81hjiw.webp)

![](../../../assets/cm_5_2xo33gqwdh.webp)

Conclusion 
-----------

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev/).

The source for this example can be found [here](https://github.com/rodydavis/codemirror-dynamic-theme).

If you want to check out dynamic themes for VSCode I created an extension [here](https://github.com/rodydavis/vscode-dynamic-theme).
