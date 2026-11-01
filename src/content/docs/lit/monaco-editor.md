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
  D2InvVERpzxwsJc9tRknPCfbAL3FWZE8ou/uvKnbWbx8C+s8IgDYvbIsmLyMnXC8GXTCvEJcuTxCXg89KPAOPUaxHD2lMsW8U11APU8DhjzwGB69AWxAvaeRlrvFdIE9mMIDvE+URD0STaA7wvy1vc6Isr2IDzw+lWbzuncvN73IJQ49fhr3u4o8yTxAipo9igL9vKJFlj0ibWM83j6rOw3GCL1iZp88lncVvRHkIDtS7yk7OZsOOwMInzzxZLe8+DcoPWFxuDyiCj89YviIO5gVirtW2Ey9sWzmO0w49LyN8Pa7rmWyvB2rlDs6PS89igL9PHsWhDtzf3U9D2H8O0fJKzzFGq48YRoGPH1AYD0XgAY9Iohzu/ksDz3BVZ45B5u6vPfIhj1vvLu8ucK7vILIwr1RTF44twgMPBR1Jr2etka9mQ4dvLKENb0gfZO83GNpPaVmjzxXCoG7ahJ8PdgRR72u1DM72nEDPcLbgzp56hG8Di0yvP7tMrx6qdg7CjGXPA/tYz0X78e8M1EEvHqNHb2T/0m8V5fTPFbznDzDDXg8liYlPHpwN70Wp1o941A/vFfOXjzMf8i8o1h+vt6w7bzeVY88yCjPvFn5VT40hU48xCPxO9C3BT16wlI9AIv8vBuBmD2twXs8lba4u/qb0LwyOIo9gQTFPDdPNb06sQe9CoHcPCB9k7t16R+9aLPqPNf3YbwGLo+9MBCkvUDA2jyqDCO9kgVMPdNQg727ewA9Sl6dvD/mg7ySWNI8Q8nku9Hp2T3eIUW6U+oSvUJg5bvcErm8iQyrPI2zKb3fioS9d2WXvHlzuDvLLa28k6xDPAB0GLzY1Hk9acnjPBJpW731vjE9RBmqvMODZj2l25K8jSeCOhR3PLyTp6y7X+y9u2TKhzqkwli9lZ7pvFNb6jnxnI09tdwZPBRcrLzmdi+9dqVlPeRmODw9f9q8dt7GvPEPG73Q0pU8yFuuuwot67uc/YG771VrvQVrnLziORu9DCFnPIv5OTwGSZ+7rRVtPejcLb3exiY9iQwrO7ubp7xFEIe9NIKNvChJV7yXVRg9v7WTPPbRKbzG/Bw9MgG/PFUXcDwZcYG8OnkRvTdUTD2kNxw9aeBHPYvdnr0ROug8EXHzvAsKgzuGjwi9J9vAvBxfmz1oXo68dAryPNRGNT2wA+c8Fmt4PQSQWr3tujc8ls/yu8Mpkz3KGnW85sogPMeA7Dx9Pgo9sqGbvN/4mr0bf4K9ZOouPSv7Lrx8KTy9yAspPdegL73qJFs94ubUvAMnW7l07pY9BTbnuXZvRT3HRqA8FR3JPHxFN7zAl8K8uyakPGByIzys43g85+GEPfEqK72SA/Y8fHvXuTVjET0jhh29OxixPLkzk7xh4k+9FvtLPMDocj0KLAA9gPTNvOdt7Lw3UUu9YykSPD+N+zz4ja88muwfPNmVljy0AVi6YoTwuuBkmzyVKSY9jUN9vDSAN7yy9CE8hQqOvOpCLDywWa48r2CbPLQB2DjuJQ28f6DcPFQ5Lb17vBA8oYOuPCuhOz2FtEa8dyw2vDi+9rs/Uy+8IPDAu+AOFL0RjW67/OGHPb8MxrvwpAU84UMJvCoDBz2w5RU9TrWWvMTSQD0SE1Q9/yWpPOzZcz2zlgK9US/4vFG8yrxxxrC8GojlvAaCAD1oke07/Z9DvDo977v6Xy68qKrQOsuFyr14Yla8RzmYvAEy9DzK4ZM7xa2Cuo0OyDyobcO78u5IvCMTcLwdHsI8bamDOx3Hj7yvQV+928RJvL9JUzxHBOO6s16MPEfM7LyOk0I8IAtRPOVD0LwZAQW+yoy3vHHHGzzo+Oi8ofMavac/+7w0uoM86IeRPOrMPT2cooM9GZC9PAkXcrxvEoM5uVJPvIkpETzqdnY8kL+0OmO1ebyyKsK8aDyRvNUFvDuFenq8NdSovIpYxDz67hY9/rj9u/j7RTzfap08HQOyvD5dXb0Ai/w7VFXoPCgpsDgFNfw8tYkTPBE4Ej231Sy8KVq5vAacpbtagkw9k24LPXv5nbt55xC9vvbMPKchqrwwoJe8nrQwvU2GYzwUej09q+l6vd2ZaT7FczY7GxGMvOok27xn8eI8U1kUvYPb2rz1SW66VUylPEoJAb1N3Ko8wOyePL+dxLx6UTu8eJrMO35Uwzw+lym8XBtqvSeDozvkEVy99WWJvbd6Dj383ia8miWBPDM33zrlmGy9J77avLVUXrzyKJW7GuCCu+ijjDzIJQ695q4lvel+Tj2684S9UZ9kPGITGTys/R08RG4GvQVQDL2RmCC9TWgSvJtaNjwuyBY9kxpaOi0KuzwPX6a8KVyPvKRwvbyTALW82sW0vCvbh7yTkEg9Mq44vG3H1DyX5Wu8ADj2u4SeTTzdmB46qWqCO/VoKrxFaIQ8BRQqPZViR71li6Q8XTVPPIfguLwRpxO7VP3KPFD7rby9Osc4d75fvWR4LD3LnZm7tvJSvZENJLy8dJM6LGMDvZnXkbwHsp67kgeivPNyWDyvB5O8k/wIPP60Eb28V429XJGYPJ2Bkbxvnuq6fbPNPGechjvbiZK85urHvEiHh7vU1og8Iv32PCwseL1uMNQ8yF5vPGdgJL06Ptq8pIy4t2B1ZDv44aA8g9zFvP+Rabvp72W9uD9XvZnZ5zxa1RI8sOM/PE+Vb7y7Y7G8MqxiPLTjBjwXD288gQoXvkKTxLzZegY9pIpivB6HQbwRxDk99+gNPSOHCD0Hsp68KCxxOw/TPrz5+IQ8zLT9vCs1O73Kh6A7fQYUPdEHyzt9rra7aYpAPRxg5rxfs9w8B+3VvHJNATzC9hO8/3XuPEBPg7wfnqW8FK7HvKgbqDxD/4S8IxXGO60WWL1bKBk75wDBO5vG9jyIZp47/FOqvFZiHryAffQ8mzi5PObnBrzO4G+8JGM1Pd1497xjtw89fSSlvHVz8bwq5Dq+VHM5vMqkhrwt7VQ8ya50vWuA0roMzIq8+ie4u6Imerz2Jga9Vro7vPESHLwHtgq9omBGvGDHP71uNeu7bHj6vBqkIL0ofDY8UMZ4Onyasz2w4z88IXamuwhWVTy4dqK7vwxGvI3QT7yN0E+7swobPXmthDtFu4o8B0IyvCXOijsmipC7M8WcPAnEKz3+Ycu8C5qWO0jiZT29N4a7jL4CPKsi3LuLNgc9Ecc6PJC88zwCSy48aXHGO3HK3Lx7L767yNCxvFnbFL17FkS9HTnSvCfbwLyYFYq7BOeMuo7lHT1/FzY9Nq7/vIpYRDu8d9S73LqbPCTy3Tz3P0C8R+aRvGmQAr2KjuS7FyipPBXikTqh98a6vOkWvC16Jz2mm0S7bojxO/g1kruMooe8Tp3HvLO2Kb10tZU8g4qqvGjr4DkJ/rc8Sn+vPGbcVLodjq67DM5gvET8QzxF2ga9h8OSvciWZTxauCw8gNM7PCrIz7sZx4i9v4FJvDAvwDvirAi9+WYbPF1OST1Fn4+8E/Osu8IV0Lwb1z89jXqIO6hSszzb3Jg7wLEnPSWQkjwK2w89kh9xPJXW3zvmkNQ8FxHFu43wdjwfLc67a7qePK9fsDzHgGy8wY/qPFbXIbw2ct27TS5Gux/0LD0sLo67OV9sPB3k9bmJtfg8CkkmPWuduLyN1Wa8AIt8vDF8xDzvxy09s7eUvIW0RryOcxs8gV+jvHqpWDzPu7E8ycfuO/9a3rz1nkq83nOAPQ0Zj7yDovk8CVR/PEjdrj2+wKy6kUhbO36nybunlq08UG/GvGWJTjy0PTq9+YKWPQqdV7s1Q6q7WwszOrZLW733rgE9Jh3lOrvx7joIBaU6KeyiO/35tjswZWC7+5A3vAtHkDv04Rm9xqQ/PBZp4ry3fQ+9ntLBvOguibyB7HW8Jo8nPUyJJD3w37w8pb48Pld2AT0RqSm9tVGdu13iyLza4a+8bOnRPHgLpDxKfgS9vTcGulKY9ztQiwG9ZsHEPEzFxrzMY807H9pHvMO7HL2xbGa8Tu0MvY21P7zLLS08aauSuy2YeLz+RVC8fPMbvaHa4LtDjxg9hIM9PJTdzLxoQhO7kpZKvKiq0Dtb64s8PLwnPUEqxbsvMKs8
related:
  - lit/vscode-extension.md
  - lit/codemirror-dynamic-theme.md
  - lit/rich-text-editor.md
  - web/html-code-sandbox.md
  - lit/draggable-dom.md
tabs:
  - label: Live Demo
    href: 'https://rodydavis.github.io/lit-code-editor/'
  - label: Source Code
    href: 'https://github.com/rodydavis/lit-code-editor'
last_updated_metadata: '2026-11-01T02:28:52.992Z'
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
