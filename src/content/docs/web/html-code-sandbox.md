---
title: Building a HTML Element Sandbox with Lit
date: '2025-01-19 06:17:00.655Z'
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
  Create a reusable HTML element sandbox using Lit, TypeScript, and Vite to
  dynamically update web components.
embedding: >-
  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
related:
  - lit/codemirror-dynamic-theme.md
  - lit/monaco-editor.md
  - lit/draggable-dom.md
  - lit/html-table.md
  - lit/vscode-extension.md
---

# Building a HTML Element Sandbox with Lit

In this article I will go over how to set up a [Lit](https://lit.dev/) web component and use it to create a HTML Element sandbox that can be used to update a live component.

> **TLDR** The final source [here](https://github.com/rodydavis/html-element-sandbox) and an online [demo](https://rodydavis.github.io/html-element-sandbox/).

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

Then enter a project name `html-element-sandbox` and now open the project in vscode and install the dependencies:

```markdown
cd html-element-sandbox
npm i lit
npm i -D @types/node
code .
```

Update the `vite.config.ts` with the following:

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/html-element-sandbox/",
  build: {
    lib: {
      entry: "src/html-element-sandbox.ts",
      formats: ["es"],
    },
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
    <title>HTML Element Sandbox</title>
    <script type="module" src="/src/html-element-sandbox.ts"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      html-element-sandbox {
        display: block;
        width: 100%;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <html-element-sandbox>
      <template>
        <button
          class="button"
          knob-text="label"
          knob-css-color="fg-color"
          knob-css-background-color="bg-color"
          knob-css-border-radius="shape"
          knob-css-font-size="text-font-size"
          knob-css-padding="padding"
          knob-css---shadow-color="shadow"
        >
          My Button
        </button>
        <style>
          .button {
            --shadow-color: #000;
            --elevation: 3px;
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;
            cursor: pointer;
            box-shadow: 0 var(--elevation) calc(var(--elevation) * 2) 0 var(--shadow-color);
          }
        </style>
      </template>
      <div slot="knobs">
        <knob-string id="label" name="Label" value="BUTTON"></knob-string>
        <knob-group name="Style" expanded>
          <knob-color
            id="bg-color"
            name="Background Color"
            value="#ff0000"
          ></knob-color>
          <knob-color
            id="fg-color"
            name="Foreground Color"
            value="#ffffff"
          ></knob-color>
          <knob-color
            id="shadow"
            name="Shadow Color"
            value="#000000"
          ></knob-color>
          <knob-number
            id="text-font-size"
            name="Font Size"
            value="16"
            suffix="px"
          ></knob-number>
          <knob-number
            id="shape"
            name="Border Radius"
            value="100"
            suffix="px"
          ></knob-number>
          <knob-number
            id="padding"
            name="Padding"
            value="12"
            suffix="px"
          ></knob-number>
        </knob-group>
      </div>
    </html-element-sandbox>
  </body>
</html>
```

Here we are defining the markup we want to use in our sandbox. We are using the `html-element-sandbox` component to create a sandbox for our HTML Element.

```markup
<html-element-sandbox></html-element-sandbox>
```

Each knob is defined by an `id` and a `name`. The `id` is used to identify the knob in the `template` and the `name` is used to display the knob in the UI.

```markup
<knob-number
  id="shape"
  name="Border Radius"
  value="30"
  suffix="px"
></knob-number>
```

For the element inside the `template` we use `knob-*` attributes to get the values of the knobs and set the attributes, CSS style or text content.

```markup
<!-- Attributes -->
<div knob-attr-disabled="disabled"></div>
<knob-boolean id="disabled" name="Disable" value="false"></knob-boolean>

<!-- CSS Properties -->
<div knob-css-color="fg-color" knob-css-background-color="bg-color"></div>
<knob-color id="bg-color" name="Background Color" value="#ff0000"></knob-color>
<knob-color id="fg-color" name="Foreground Color" value="#ffffff"></knob-color>

<!-- Text Content -->
<div knob-text="content"></div>
<knob-string id="content" name="Text Content" value="Hello World"></knob-string>
```

A single knob can point to multiple elements:

```markup
<html-element-sandbox>
  <template>
    <div id="buttons">
      <button
        knob-text="label"
        knob-css-color="fg-color"
        knob-css-background-color="bg-color"
        knob-css-border-radius="shape"
        knob-css-font-size="text-font-size"
        knob-css-padding="padding"
        knob-css---shadow-color="shadow"
        knob-attr-raised="raised"
        knob-attr-contenteditable="contenteditable"
      ></button>
      <mwc-button
        knob-attr-label="label"
        knob-css---mdc-theme-on-primary="fg-color"
        knob-css---mdc-theme-primary="bg-color"
        knob-css---mdc-shape-small="shape"
        knob-attr-raised="raised"
        label="My Button"
      ></mwc-button>
    </div>
    <script type="module">
      import "https://www.unpkg.com/@material/mwc-button@0.26.1/mwc-button.js?module";
    </script>
    <style>
      button {
        --shadow-color: #000;
        --elevation: 3px;
        display: block;
        border: none;
        background-color: transparent;
        cursor: pointer;
        box-shadow: 0 var(--elevation) calc(var(--elevation) * 2) 0 var(--shadow-color);
      }
      mwc-button {
        --mdc-theme-on-primary: #000;
        --mdc-theme-primary: #fff;
        --mdc-shape-small: none;
      }
      #buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    </style>
  </template>
  <div slot="knobs">
    <knob-string id="label" name="Label" value="BUTTON"></knob-string>
    <knob-group name="Style" expanded>
      <knob-color
        id="bg-color"
        name="Background Color"
        value="#ff0000"
      ></knob-color>
      <knob-color
        id="fg-color"
        name="Foreground Color"
        value="#ffffff"
      ></knob-color>
      <knob-color id="shadow" name="Shadow Color" value="#000000"></knob-color>
      <knob-number
        id="text-font-size"
        name="Font Size"
        value="16"
        suffix="px"
      ></knob-number>
      <knob-number
        id="shape"
        name="Border Radius"
        value="30"
        suffix="px"
      ></knob-number>
      <knob-number
        id="padding"
        name="Padding"
        value="12"
        suffix="px"
      ></knob-number>
    </knob-group>
    <knob-group name="Attributes" expanded>
      <knob-boolean id="raised" name="Raised" value="false"></knob-boolean>
      <knob-list id="contenteditable" name="Content Editable" value="false">
        <option value="true">true</option>
        <option value="false">false</option>
      </knob-list>
    </knob-group>
  </div>
</html-element-sandbox>
```

A `style` and `script` can be added to load extra content into the sandbox (e.g. a `script` to load a web component).

Web Component 
--------------

Before we update our component we need to rename `my-element.ts` to `html-element-sandbox.ts`

Open up `html-element-sandbox.ts` and update it with the following:

```javascript
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "./knobs/boolean";
import "./knobs/string";
import "./knobs/number";
import "./knobs/color";
import "./knobs/list";
import "./knobs/group";
import { KnobValue } from "./knobs/base";
import { BooleanKnob } from "./knobs/boolean";

export const tagName = "html-element-sandbox";

@customElement(tagName)
export class HTMLElementSandbox extends LitElement {
  static styles = css`
    main {
      --knobs-width: 300px;
      --code-height: calc(100% * 0.4);
      --mobile-height: 350px;
      display: grid;
      grid-template-areas: "preview" "knobs" "code";
      grid-template-columns: 100%;
      grid-template-rows: var(--mobile-height) auto auto;
      height: 100%;
      width: 100%;
    }
    #preview {
      grid-area: preview;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #272727;
      background-color: whitesmoke;
    }
    @media (min-width: 600px) {
      main {
        grid-template-areas:
          "preview knobs"
          "code knobs";
        grid-template-columns: calc(100% - var(--knobs-width)) var(
            --knobs-width
          );
        grid-template-rows: calc(100% - var(--code-height)) var(--code-height);
      }
      #preview {
        border-bottom: none;
      }
      slot[name="knobs"] {
        overflow-y: auto;
      }
      pre {
        overflow-y: scroll;
      }
    }
    section {
      flex: 1;
    }
    slot[name="knobs"] {
      grid-area: knobs;
      display: flex;
      flex-direction: column;
      border-left: 1px solid #000;
    }
    slot[name="code"] {
      grid-area: code;
    }
    pre {
      margin: 0;
      font-family: Monaco, Courier, monospace;
      padding: 16px;
      background-color: #272727;
      color: #c8c8c8;
    }
    code {
      font-size: 0.8rem;
      white-space: pre-wrap;
    }
  `;

  @state() code = "";

  render() {
    return html`<main>
      <section id="preview">
        <slot></slot>
      </section>
      <slot name="knobs"> </slot>
      <slot name="code">
        <pre><code>${this.code}</code></pre>
      </slot>
    </main>`;
  }

  firstUpdated() {
    this.init();
  }

  init() {
    this.setUpKnobs();
    this.code = this.getCode();
    // Update the code every time a knob value changes
    this.addEventListener("value", () => {
      this.code = this.getCode();
    });
  }

  setUpKnobs() {
    const root = this.shadowRoot!;
    const preview = root.getElementById("preview")!;
    const template = this.querySelector("template");
    if (template) {
      const div = document.createElement("div");
      div.appendChild(template.content.cloneNode(true));
      // Text Knobs (knob-text)
      div.querySelectorAll("[knob-text]").forEach((el) => {
        const elemId = el.getAttribute("knob-text") || "";
        const knob = this.querySelector(`#${elemId}`);
        if (knob && knob instanceof KnobValue) {
          knob.addEventListener("value", () => {
            const val = knob.value;
            el.textContent = val;
          });
          el.addEventListener("input", (e) => {
            const target = e.target as HTMLElement;
            knob.value = target.textContent;
          });
          knob.init();
        }
      });
      div.querySelectorAll("*").forEach((el) => {
        const attrs = el.attributes;
        for (let i = 0; i < attrs.length; i++) {
          const attr = attrs[i];
          const attrName = attr.name;
          // CSS Knobs (knob-css-*)
          if (attrName.startsWith("knob-css-")) {
            const cssKey = attrName.replace("knob-css-", "");
            const knob = this.querySelector(`#${attr.value}`);
            if (
              knob &&
              knob instanceof KnobValue &&
              el instanceof HTMLElement
            ) {
              knob.addEventListener("value", () => {
                const val = knob.value;
                if (knob.hasAttribute("suffix")) {
                  // Add suffix to the value (e.g. px)
                  el.style.setProperty(
                    cssKey,
                    val + knob.getAttribute("suffix")
                  );
                } else {
                  // No suffix, just set the value
                  el.style.setProperty(cssKey, val);
                }
              });
              knob.init();
            }
          }
          // Attribute Knobs (knob-attr-*)
          if (attrName.startsWith("knob-attr-")) {
            const attrKey = attrName.replace("knob-attr-", "");
            const knob = this.querySelector(`#${attr.value}`);
            if (knob && knob instanceof KnobValue) {
              knob.addEventListener("value", () => {
                const val = knob.value;
                if (knob instanceof BooleanKnob) {
                  if (val) {
                    // <div hidden>
                    el.setAttribute(attrKey, "");
                  } else {
                    // <div>
                    el.removeAttribute(attrKey);
                  }
                } else {
                  // <div value="foo">
                  el.setAttribute(attrKey, val);
                }
              });
              knob.init();
            }
          }
        }
      });
      preview.appendChild(div);
    }
  }

  getCode() {
    const root = this.shadowRoot!;
    const preview = root.getElementById("preview")!;
    if (preview.children.length > 0) {
      const child = preview.children[1];
      if (child && child.children.length > 0) {
        const lines = this.elementToString(child.children[0]);
        // Trim empty lines
        const linesArray = lines.split("\n");
        const filteredLines = linesArray.filter((line) => line.trim() !== "");
        return filteredLines.join("\n");
      }
    }
    return "";
  }

  elementToString(node: Element) {
    const sb: string[] = [];
    const tag = node.tagName.toLowerCase();
    sb.push(`<${tag}`);
    const attrs = node.attributes;
    // Add attributes
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      if (attr.name.startsWith("knob-")) continue;
      // If the attribute is a boolean attribute, add it only if it's true
      if (attr.value === "") {
        sb.push(` ${attr.name}`);
      } else {
        sb.push(` ${attr.name}="${attr.value}"`);
      }
    }
    sb.push(">");
    if (node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        // If the child is a text node, add the content
        if (child instanceof Text) {
          sb.push(child.textContent || "");
        } else if (child instanceof Element) {
          // If the child is an element, recurse
          sb.push(this.elementToString(child));
        }
      }
    }
    sb.push(`</${tag}>`);
    return sb.join("\n");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HTMLElementSandbox;
  }
}

```

Knobs 
------

First let up create a base class that will be used to create all other knobs. Create `src/knobs/base.ts` and update with with the following:

```javascript
import { css, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";

export class Knob extends LitElement {
  constructor(name: string) {
    super();
    this.name = name;
  }

  @property() name: string;
}

export abstract class KnobValue<T> extends Knob {
  constructor(name: string, public val: T) {
    super(name);
    this._value = val;
    this.notify();
  }

  static styles = css`
    .knob {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.5rem;
    }
    .knob label {
      flex: 1;
    }
  `;

  _value: T;

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
    this.notify();
  }

  notify() {
    const value = this.value;
    this.onValue(value);
    this.dispatchEvent(
      new CustomEvent("value", {
        detail: value,
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="knob">
        <label>${this.name}</label>
        ${this.buildInput()}
      </div>
    `;
  }

  onValue(_val: T) {}

  init() {
    this.notify();
  }

  resolveValue(val: T) {
    return val;
  }

  abstract buildInput(): TemplateResult;
}

```

### Boolean knob 

Create `src/knobs/boolean.ts` and update with the following:

```javascript
import { KnobValue } from "./base";

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "knob-boolean";

@customElement(tagName)
export class BooleanKnob extends KnobValue<boolean> {
  constructor(name: string, val: boolean) {
    super(name, val);
  }

  static styles = KnobValue.styles;

  @property({
    type: Boolean,
    attribute: "value",
  })
  _value = false;

  buildInput() {
    return html`<input
      type="checkbox"
      .checked=${this.resolveValue(this.value)}
      @change=${this.onChange}
    />`;
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.checked;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BooleanKnob;
  }
}

```

### Number Knob 

Create `src/knobs/number.ts` and update with the following:

```javascript
import { KnobValue } from "./base";

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "knob-number";

@customElement(tagName)
export class NumberKnob extends KnobValue<number> {
  constructor(name: string, val: number) {
    super(name, val);
  }

  static styles = KnobValue.styles;

  @property({
    type: Number,
    attribute: "value",
    converter: {
      fromAttribute: (val: string) => parseFloat(val),
      toAttribute: (val: boolean) => val.toString(),
    },
  })
  _value = 0;

  buildInput() {
    return html`<input
      type="number"
      .valueAsNumber=${this.resolveValue(this.value)}
      @change=${this.onChange}
    />`;
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.valueAsNumber;
  }

  resolveValue(val: number): number {
    return val;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: NumberKnob;
  }
}

```

### String Knob 

Create `src/knobs/string.ts` and update with the following:

```javascript
import { KnobValue } from "./base";

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "knob-string";

@customElement(tagName)
export class StringKnob extends KnobValue<string> {
  constructor(name: string, val: string) {
    super(name, val);
  }

  static styles = KnobValue.styles;

  @property({ type: String, attribute: "value" })
  _value = "";

  buildInput() {
    return html`<input
      type="text"
      .value=${this.resolveValue(this.value)}
      @input=${this.onChange}
    />`;
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: StringKnob;
  }
}

```

### Color Knob 

Create `src/knobs/color.ts` and update with the following:

```javascript
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StringKnob } from "./string";

export const tagName = "knob-color";

@customElement(tagName)
export class ColorKnob extends StringKnob {
  buildInput() {
    return html`<input
      type="color"
      .value=${this.resolveValue(this.value)}
      @input=${this.onChange}
    />`;
  }

  resolveValue(value: string) {
    if (value && value.startsWith("--")) {
      const style = getComputedStyle(document.body);
      const resolved = style.getPropertyValue(value);
      return resolved;
    }
    return value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ColorKnob;
  }
}

```

### List Knob 

Create `src/knobs/list.ts` and update with the following:

```javascript
import { KnobValue } from "./base";

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "knob-list";

@customElement(tagName)
export class ListKnob extends KnobValue<string> {
  constructor(name: string, val: string) {
    super(name, val);
  }

  static styles = KnobValue.styles;

  @property({
    type: String,
    attribute: "value",
  })
  _value = "";

  buildInput() {
    const options = this.getOptions();
    return html`<select @change=${this.onChange}>
      ${Array.from(options).map(
        (option) =>
          html`<option
            value=${option.value}
            .selected=${this.value === option.value}
          >
            ${option.textContent}
          </option>`
      )}
    </select>`;
  }

  getOptions() {
    const options = this.querySelectorAll(
      "option"
    ) as NodeListOf<HTMLOptionElement>;
    return Array.from(options);
  }

  onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ListKnob;
  }
}

```

### Group Knob 

Create `src/knobs/group.ts` and update with the following:

```javascript
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Knob } from "./base";

export const tagName = "knob-group";

@customElement(tagName)
export class GroupKnob extends Knob {
  constructor(name: string, knobs: Knob[] = []) {
    super(name);
    this.knobs = knobs;
  }

  static styles = css`
    details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    details summary {
      padding: 0.5rem;
    }
  `;

  knobs: Knob[];

  @property({ type: Boolean }) expanded = false;

  render() {
    return html`<details ?open=${this.expanded}>
      <summary>${this.name}</summary>
      <div class="collection">
        <slot></slot>
        ${this.knobs.map((knob) => html`${knob}`)}
      </div>
    </details>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: GroupKnob;
  }
}

```

Conclusion 
-----------

If everything worked as expected, you should see the following:

![](../../../assets/knobs_1_dvkg6xds73.webp)

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev/).

The source for this example can be found [here](https://github.com/rodydavis/html-element-sandbox).
