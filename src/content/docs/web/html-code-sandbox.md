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
  This guide details how to build a reusable HTML Element Sandbox component
  using Lit web components, enabling the development and live updating of
  embedded third-party content.
embedding: >-
  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
related:
  - lit/monaco-editor.md
  - lit/vscode-extension.md
  - lit/rich-text-editor.md
  - flutter/lit-interop.md
  - lit/figma-interop.md
last_updated_metadata: '2026-05-23T00:22:00.101Z'
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
