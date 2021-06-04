---
layout: layouts/post.njk
title: 'Building a Rich Text Editor with Lit'
date: 2021-05-26
categories: [editor, web, lit, wysiwyg]
image: /img/rich-text/editor-finish.png
---

In this article I will go over how to set up a [Lit](https://lit.dev) web component and use it to create a rich text editor.

**TLDR** The final source [here](https://github.com/rodydavis/lit-html-editor) and an online [demo](https://rodydavis.github.io/lit-html-editor/).

## Prerequisites

- Vscode
- Node >= 12
- Typescript

## Getting Started

We can start off by navigating in terminal to the location of the project and run the following:

```bash
npm init @vitejs/app --template lit-element-ts
```

Then enter a project name `lit-rich-text-editor` and now open the project in vscode and install the dependencies:

```bash
cd lit-rich-text-editor
npm i @material/mwc-icon-button
npm i -D @types/node
code .
```

Update the `vite.config.ts` with the following:

```js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/lit-rich-text-editor/',
  build: {
    lib: {
      entry: "src/lit-rich-text-editor.ts",
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

## Template

Open up the `index.html` and update it with the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
      rel="stylesheet"
    />
    <title>Lit Rich Text Editor</title>
    <script type="module" src="/src/lit-rich-text-editor.ts"></script>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
      lit-rich-text-editor {
        --editor-width: 100%;
        --editor-height: 100vh;
      }
    </style>
  </head>
  <body>
    <lit-rich-text-editor>
     <template>
        <h1>Headline 1</h1>
        <p>This is a paragraph.</p>
        <p>
          <span style="background-color: rgb(255, 0, 0)"
            ><font color="#ffffff">Styled Text</font></span
          >
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </template>
    </lit-rich-text-editor>
  </body>
</html>

```

The important things to take away are the styles added to remove the body padding and send size [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to the editor to take up the full viewport.

Inside the `lit-rich-text-editor` tags there is a [`template`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) passed as a slot to provide html that will not be rendered but can be accessed.

There is also an import for the [Material Icons](https://fonts.google.com/icons) so it can be used in the editor later.

## Editor

The next thing to create is the editor itself. Open up `src/lit-rich-text-editor.ts` and update it with the following:

```js
import { LitElement, html, customElement, css, state } from "lit-element";

import "@material/mwc-icon-button";

@customElement("lit-rich-text-editor")
export class LitRichTextEditor extends LitElement {
  @state() content: string = "";
  @state() root: Element | null = null;

  static styles = css`
    :host {
      --editor-width: 600px;
      --editor-height: 600px;
      --editor-background: #f1f1f1;
      --editor-toolbar-height: 33px;
      --editor-toolbar-background: black;
      --editor-toolbar-on-background: white;
      --editor-toolbar-on-active-background: #a4a4a4;
    }
    main {
      width: var(--editor-width);
      height: var(--editor-height);
      display: grid;
      grid-template-areas:
        "toolbar toolbar"
        "editor editor";
      grid-template-rows: var(--editor-toolbar-height) auto;
      grid-template-columns: auto auto;
    }
    #editor-actions {
      grid-area: toolbar;
      width: var(--editor-width);
      height: var(--editor-toolbar-height);
      background-color: var(--editor-toolbar-background);
      color: var(--editor-toolbar-on-background);
      overscroll-behavior: contain;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #editor-actions::-webkit-scrollbar {
      display: none;
    }
    #editor {
      width: var(--editor-width);
      grid-area: editor;
      background-color: var(--editor-background);
    }
    #toolbar {
      width: 1090px;
      height: var(--editor-toolbar-height);
    }
    [contenteditable] {
      outline: 0px solid transparent;
    }
    #toolbar > mwc-icon-button {
      color: var(--editor-toolbar-on-background);
      --mdc-icon-size: 20px;
      --mdc-icon-button-size: 30px;
      cursor: pointer;
    }
    #toolbar > .active {
      color: var(--editor-toolbar-on-active-background);
    }
    select {
      margin-top: 5px;
      height: calc(var(--editor-toolbar-height) - 10px);
    }
    input[type="color"] {
      height: calc(var(--editor-toolbar-height) - 15px);
      -webkit-appearance: none;
      border: none;
      width: 22px;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;

  render() {
    return html`<main>
      <input id="bg" type="color" style="display:none" />
      <input id="fg" type="color" style="display:none" />
      <div id="editor-actions">
        <div id="toolbar">
        </div>
      </div>
      <div id="editor">${this.root}</div>
    </main> `;
  }

  async firstUpdated() {
    const elem = this.parentElement!.querySelector("lit-rich-text-editor template");
    this.content = elem?.innerHTML ?? "";
    this.reset();
  }

  reset() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.content, "text/html");
    document.execCommand("defaultParagraphSeparator", false, "br");
    document.addEventListener("selectionchange", () => {
      this.requestUpdate();
    });
    const root = doc.querySelector("body");
    root!.setAttribute("contenteditable", "true");
    this.root = root;
  }

}

```

With everything updated run `npm run dev` and the following should appear in the browser:

<img width="100%" src="/img/rich-text/editor-start.png">

Nothing special is happening yet, but the template is being read and passed into the element, parsed and setting the [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute to `true`. 

This is a way to access the slots and use the nodes to hold data that are not used for rendering. Doing it this way allows for a transformation of the HTML source into a format that can be used.

## Toolbar

At the bottom of the class before the last `}` add the following:

```js
renderToolbar(command: (c: string, val: string | undefined) => void) {
    // TODO: Selection does not work on Safari iOS
    const selection = this.shadowRoot?.getSelection
      ? this.shadowRoot!.getSelection()
      : null;
    const tags: string[] = [];
    if (selection?.type === "Range") {
      // @ts-ignore
      let parentNode = selection?.baseNode;
      if (parentNode) {
        const checkNode = () => {
          const parentTagName = parentNode?.tagName?.toLowerCase()?.trim();
          if (parentTagName) tags.push(parentTagName);
        };
        while (parentNode != null) {
          checkNode();
          parentNode = parentNode?.parentNode;
        }
      }
    }

    const commands: {
      icon: string;
      command: string | (() => void);
      active?: boolean;
      type?: string;
      values?: { value: string; name: string; font?: boolean }[];
      command_value?: string;
    }[] = [
      {
        icon: "format_clear",
        command: "removeFormat",
      },

      {
        icon: "format_bold",
        command: "bold",
        active: tags.includes("b"),
      },
      {
        icon: "format_italic",
        command: "italic",
        active: tags.includes("i"),
      },
      {
        icon: "format_underlined",
        command: "underline",
        active: tags.includes("u"),
      },
      {
        icon: "format_align_left",
        command: "justifyleft",
      },
      {
        icon: "format_align_center",
        command: "justifycenter",
      },
      {
        icon: "format_align_right",
        command: "justifyright",
      },
      {
        icon: "format_list_numbered",
        command: "insertorderedlist",
        active: tags.includes("ol"),
      },
      {
        icon: "format_list_bulleted",
        command: "insertunorderedlist",
        active: tags.includes("ul"),
      },
      {
        icon: "format_quote",
        command: "formatblock",
        command_value: "blockquote",
      },
      {
        icon: "format_indent_decrease",
        command: "outdent",
      },
      {
        icon: "format_indent_increase",
        command: "indent",
      },

      {
        icon: "add_link",
        command: () => {
          const newLink = prompt("Write the URL here", "http://");
          if (newLink && newLink != "" && newLink != "http://") {
            command("createlink", newLink);
          }
        },
      },
      { icon: "link_off", command: "unlink" },
      {
        icon: "format_color_text",
        command: () => {
          const input = this.shadowRoot!.querySelector(
            "#fg"
          )! as HTMLInputElement;
          input.addEventListener("input", (e: any) => {
            const val = e.target.value;
            command("forecolor", val);
          });
          input.click();
        },
        type: "color",
      },
      {
        icon: "border_color",
        command: () => {
          const input = this.shadowRoot!.querySelector(
            "#bg"
          )! as HTMLInputElement;
          input.addEventListener("input", (e: any) => {
            const val = e.target.value;
            command("backcolor", val);
          });
          input.click();
        },
        type: "color",
      },
      {
        icon: "title",
        command: "formatblock",
        values: [
          { name: "Normal Text", value: "--" },
          { name: "Heading 1", value: "h1" },
          { name: "Heading 2", value: "h2" },
          { name: "Heading 3", value: "h3" },
          { name: "Heading 4", value: "h4" },
          { name: "Heading 5", value: "h5" },
          { name: "Heading 6", value: "h6" },
          { name: "Paragraph", value: "p" },
          { name: "Pre-Formatted", value: "pre" },
        ],
      },
      {
        icon: "text_format",
        command: "fontname",
        values: [
          { name: "Font Name", value: "--" },
          ...[...checkFonts()].map((f) => ({
            name: f,
            value: f,
            font: true,
          })),
        ],
      },
      {
        icon: "format_size",
        command: "fontsize",
        values: [
          { name: "Font Size", value: "--" },
          { name: "Very Small", value: "1" },
          { name: "Small", value: "2" },
          { name: "Normal", value: "3" },
          { name: "Medium Large", value: "4" },
          { name: "Large", value: "5" },
          { name: "Very Large", value: "6" },
          { name: "Maximum", value: "7" },
        ],
      },
      {
        icon: "undo",
        command: "undo",
      },
      {
        icon: "redo",
        command: "redo",
      },
      {
        icon: "content_cut",
        command: "cut",
      },
      {
        icon: "content_copy",
        command: "copy",
      },
      {
        icon: "content_paste",
        command: "paste",
      },
    ];

    return html`
      ${commands.map((n) => {
        return html`
          ${n.values
            ? html` <select
                id="${n.icon}"
                @change=${(e: any) => {
                  const val = e.target.value;
                  if (val === "--") {
                    command("removeFormat", undefined);
                  } else if (typeof n.command === "string") {
                    command(n.command, val);
                  }
                }}
              >
                ${n.values.map(
                  (v) => html` <option value=${v.value}>${v.name}</option>`
                )}
              </select>`
            : html` <mwc-icon-button
                icon="${n.icon}"
                class="${n.active ? "active" : "inactive"}"
                @click=${() => {
                  if (n.values) {
                  } else if (typeof n.command === "string") {
                    command(n.command, n.command_value);
                  } else {
                    n.command();
                  }
                }}
              ></mwc-icon-button>`}
        `;
      })}
    `;
}
```

This takes an array of objects that we can map to `mwc-icon-button` or `select` depending on the passed values. This will also set up the event listeners and execute the command for the given action.

Inside the `<div id="toolbar">` tag add the following:

```js
${this.renderToolbar((command, val) => {
    document.execCommand(command, false, val);
    console.log("command", command, val);
})}
```

This will listen for the callback and fire the command on the document and log it to the console.

And finally at the bottom of the file add the following:

```js

export function checkFonts(): string[] {
  const fontCheck = new Set(
    [
      // Windows 10
      "Arial",
      "Arial Black",
      "Bahnschrift",
      "Calibri",
      "Cambria",
      "Cambria Math",
      "Candara",
      "Comic Sans MS",
      "Consolas",
      "Constantia",
      "Corbel",
      "Courier New",
      "Ebrima",
      "Franklin Gothic Medium",
      "Gabriola",
      "Gadugi",
      "Georgia",
      "HoloLens MDL2 Assets",
      "Impact",
      "Ink Free",
      "Javanese Text",
      "Leelawadee UI",
      "Lucida Console",
      "Lucida Sans Unicode",
      "Malgun Gothic",
      "Marlett",
      "Microsoft Himalaya",
      "Microsoft JhengHei",
      "Microsoft New Tai Lue",
      "Microsoft PhagsPa",
      "Microsoft Sans Serif",
      "Microsoft Tai Le",
      "Microsoft YaHei",
      "Microsoft Yi Baiti",
      "MingLiU-ExtB",
      "Mongolian Baiti",
      "MS Gothic",
      "MV Boli",
      "Myanmar Text",
      "Nirmala UI",
      "Palatino Linotype",
      "Segoe MDL2 Assets",
      "Segoe Print",
      "Segoe Script",
      "Segoe UI",
      "Segoe UI Historic",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "SimSun",
      "Sitka",
      "Sylfaen",
      "Symbol",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
      "Webdings",
      "Wingdings",
      "Yu Gothic",
      // macOS
      "American Typewriter",
      "Andale Mono",
      "Arial",
      "Arial Black",
      "Arial Narrow",
      "Arial Rounded MT Bold",
      "Arial Unicode MS",
      "Avenir",
      "Avenir Next",
      "Avenir Next Condensed",
      "Baskerville",
      "Big Caslon",
      "Bodoni 72",
      "Bodoni 72 Oldstyle",
      "Bodoni 72 Smallcaps",
      "Bradley Hand",
      "Brush Script MT",
      "Chalkboard",
      "Chalkboard SE",
      "Chalkduster",
      "Charter",
      "Cochin",
      "Comic Sans MS",
      "Copperplate",
      "Courier",
      "Courier New",
      "Didot",
      "DIN Alternate",
      "DIN Condensed",
      "Futura",
      "Geneva",
      "Georgia",
      "Gill Sans",
      "Helvetica",
      "Helvetica Neue",
      "Herculanum",
      "Hoefler Text",
      "Impact",
      "Lucida Grande",
      "Luminari",
      "Marker Felt",
      "Menlo",
      "Microsoft Sans Serif",
      "Monaco",
      "Noteworthy",
      "Optima",
      "Palatino",
      "Papyrus",
      "Phosphate",
      "Rockwell",
      "Savoye LET",
      "SignPainter",
      "Skia",
      "Snell Roundhand",
      "Tahoma",
      "Times",
      "Times New Roman",
      "Trattatello",
      "Trebuchet MS",
      "Verdana",
      "Zapfino",
    ].sort()
  );
  const fontAvailable = new Set<string>();
  // @ts-ignore
  for (const font of fontCheck.values()) {
    // @ts-ignore
    if (document.fonts.check(`12px "${font}"`)) {
      fontAvailable.add(font);
    }
  }
  // @ts-ignore
  return fontAvailable.values();
}

```

Following this great suggestion [here](https://stackoverflow.com/a/62755574/7303311) the document checks to see all the avaliable fonts for the browser and given document.

## Running

If everything went well when the command `npm run dev` is run the following should appear in the viewport:

<img width="100%" src="/img/rich-text/editor-finish.png">

## Conclusion

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev). There is also an example on the Lit playground [here](https://lit.dev/playground/#project=W3sibmFtZSI6InJpY2gtdGV4dC1lZGl0b3IudHMiLCJjb250ZW50IjoiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCwgY3NzLCBzdGF0ZSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWljb24tYnV0dG9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwicmljaC10ZXh0LWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIFJpY2hUZXh0RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBzdGF0ZSgpIGNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XG4gIEBzdGF0ZSgpIHJvb3Q6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIC0tZWRpdG9yLXdpZHRoOiA2MDBweDtcbiAgICAgIC0tZWRpdG9yLWhlaWdodDogNjAwcHg7XG4gICAgICAtLWVkaXRvci1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgLS1lZGl0b3ItdG9vbGJhci1oZWlnaHQ6IDMzcHg7XG4gICAgICAtLWVkaXRvci10b29sYmFyLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgLS1lZGl0b3ItdG9vbGJhci1vbi1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIC0tZWRpdG9yLXRvb2xiYXItb24tYWN0aXZlLWJhY2tncm91bmQ6ICNhNGE0YTQ7XG4gICAgfVxuICAgIG1haW4ge1xuICAgICAgd2lkdGg6IHZhcigtLWVkaXRvci13aWR0aCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLWVkaXRvci1oZWlnaHQpO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwidG9vbGJhciB0b29sYmFyXCJcbiAgICAgICAgXCJlZGl0b3IgZWRpdG9yXCI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWVkaXRvci10b29sYmFyLWhlaWdodCkgYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgIH1cbiAgICAjZWRpdG9yLWFjdGlvbnMge1xuICAgICAgZ3JpZC1hcmVhOiB0b29sYmFyO1xuICAgICAgd2lkdGg6IHZhcigtLWVkaXRvci13aWR0aCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLWVkaXRvci10b29sYmFyLWhlaWdodCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0b3ItdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1lZGl0b3ItdG9vbGJhci1vbi1iYWNrZ3JvdW5kKTtcbiAgICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIH1cbiAgICAjZWRpdG9yLWFjdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNlZGl0b3Ige1xuICAgICAgd2lkdGg6IHZhcigtLWVkaXRvci13aWR0aCk7XG4gICAgICBncmlkLWFyZWE6IGVkaXRvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXRvci1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gICAgI3Rvb2xiYXIge1xuICAgICAgd2lkdGg6IDEwODBweDtcbiAgICAgIGhlaWdodDogdmFyKC0tZWRpdG9yLXRvb2xiYXItaGVpZ2h0KTtcbiAgICB9XG4gICAgW2NvbnRlbnRlZGl0YWJsZV0ge1xuICAgICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAjdG9vbGJhciA-IG13Yy1pY29uLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tZWRpdG9yLXRvb2xiYXItb24tYmFja2dyb3VuZCk7XG4gICAgICAtLW1kYy1pY29uLXNpemU6IDIwcHg7XG4gICAgICAtLW1kYy1pY29uLWJ1dHRvbi1zaXplOiAzMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAjdG9vbGJhciA-IC5hY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLWVkaXRvci10b29sYmFyLW9uLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gICAgc2VsZWN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1lZGl0b3ItdG9vbGJhci1oZWlnaHQpIC0gMTBweCk7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tZWRpdG9yLXRvb2xiYXItaGVpZ2h0KSAtIDE1cHgpO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIGA7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxtYWluPlxuICAgICAgPGlucHV0IGlkPVwiYmdcIiB0eXBlPVwiY29sb3JcIiBzdHlsZT0nZGlzcGxheTpub25lJyAvPlxuICAgICAgPGlucHV0IGlkPVwiZmdcIiB0eXBlPVwiY29sb3JcIiBzdHlsZT0nZGlzcGxheTpub25lJyAvPlxuICAgICAgPGRpdiBpZD1cImVkaXRvci1hY3Rpb25zXCI-XG4gICAgICAgIDxkaXYgaWQ9XCJ0b29sYmFyXCI-XG4gICAgICAgICAgJHt0b29sYmFyKHRoaXMuc2hhZG93Um9vdCEsIHRoaXMuZ2V0U2VsZWN0aW9uKCksIChjb21tYW5kLCB2YWwpID0-IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCB2YWwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21tYW5kXCIsIGNvbW1hbmQsIHZhbCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY-XG4gICAgICA8ZGl2IGlkPVwiZWRpdG9yXCI-JHt0aGlzLnJvb3R9PC9kaXY-XG4gICAgPC9tYWluPiBgO1xuICB9XG5cbiAgYXN5bmMgZmlyc3RVcGRhdGVkKCkge1xuICAgIGNvbnN0IGVsZW0gPSB0aGlzLnBhcmVudEVsZW1lbnQhLnF1ZXJ5U2VsZWN0b3IoXCJyaWNoLXRleHQtZWRpdG9yIHRlbXBsYXRlXCIpO1xuICAgIHRoaXMuY29udGVudCA9IGVsZW0_LmlubmVySFRNTCA_PyBcIlwiO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRoaXMuY29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yXCIsIGZhbHNlLCBcImJyXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICByb290IS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKTogU2VsZWN0aW9uIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuc2hhZG93Um9vdD8uZ2V0U2VsZWN0aW9uKSByZXR1cm4gdGhpcy5zaGFkb3dSb290Py5nZXRTZWxlY3Rpb24oKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b29sYmFyKFxuICBzaGFkb3dSb290OiBTaGFkb3dSb290LFxuICBzZWxlY3Rpb246IFNlbGVjdGlvbiB8IG51bGwsXG4gIGNvbW1hbmQ6IChjOiBzdHJpbmcsIHZhbDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4pIHtcbiAgY29uc3QgdGFnczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKHNlbGVjdGlvbj8udHlwZSA9PT0gXCJSYW5nZVwiKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCBwYXJlbnROb2RlID0gc2VsZWN0aW9uPy5iYXNlTm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgY29uc3QgY2hlY2tOb2RlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRUYWdOYW1lID0gcGFyZW50Tm9kZT8udGFnTmFtZT8udG9Mb3dlckNhc2UoKT8udHJpbSgpO1xuICAgICAgICBpZiAocGFyZW50VGFnTmFtZSkgdGFncy5wdXNoKHBhcmVudFRhZ05hbWUpO1xuICAgICAgfTtcbiAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgY2hlY2tOb2RlKCk7XG4gICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlPy5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRzOiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGNvbW1hbmQ6IHN0cmluZyB8ICgoKSA9PiB2b2lkKTtcbiAgICBhY3RpdmU_OiBib29sZWFuO1xuICAgIHR5cGU_OiBzdHJpbmc7XG4gICAgdmFsdWVzPzogeyB2YWx1ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGZvbnQ_OiBib29sZWFuIH1bXTtcbiAgICBjb21tYW5kX3ZhbHVlPzogc3RyaW5nO1xuICB9W10gPSBbXG4gICAge1xuICAgICAgaWNvbjogXCJmb3JtYXRfY2xlYXJcIixcbiAgICAgIGNvbW1hbmQ6IFwicmVtb3ZlRm9ybWF0XCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2JvbGRcIixcbiAgICAgIGNvbW1hbmQ6IFwiYm9sZFwiLFxuICAgICAgYWN0aXZlOiB0YWdzLmluY2x1ZGVzKFwiYlwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2l0YWxpY1wiLFxuICAgICAgY29tbWFuZDogXCJpdGFsaWNcIixcbiAgICAgIGFjdGl2ZTogdGFncy5pbmNsdWRlcyhcImlcIiksXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImZvcm1hdF91bmRlcmxpbmVkXCIsXG4gICAgICBjb21tYW5kOiBcInVuZGVybGluZVwiLFxuICAgICAgYWN0aXZlOiB0YWdzLmluY2x1ZGVzKFwidVwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2FsaWduX2xlZnRcIixcbiAgICAgIGNvbW1hbmQ6IFwianVzdGlmeWxlZnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2FsaWduX2NlbnRlclwiLFxuICAgICAgY29tbWFuZDogXCJqdXN0aWZ5Y2VudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImZvcm1hdF9hbGlnbl9yaWdodFwiLFxuICAgICAgY29tbWFuZDogXCJqdXN0aWZ5cmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2xpc3RfbnVtYmVyZWRcIixcbiAgICAgIGNvbW1hbmQ6IFwiaW5zZXJ0b3JkZXJlZGxpc3RcIixcbiAgICAgIGFjdGl2ZTogdGFncy5pbmNsdWRlcyhcIm9sXCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJmb3JtYXRfbGlzdF9idWxsZXRlZFwiLFxuICAgICAgY29tbWFuZDogXCJpbnNlcnR1bm9yZGVyZWRsaXN0XCIsXG4gICAgICBhY3RpdmU6IHRhZ3MuaW5jbHVkZXMoXCJ1bFwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X3F1b3RlXCIsXG4gICAgICBjb21tYW5kOiBcImZvcm1hdGJsb2NrXCIsXG4gICAgICBjb21tYW5kX3ZhbHVlOiBcImJsb2NrcXVvdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2luZGVudF9kZWNyZWFzZVwiLFxuICAgICAgY29tbWFuZDogXCJvdXRkZW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImZvcm1hdF9pbmRlbnRfaW5jcmVhc2VcIixcbiAgICAgIGNvbW1hbmQ6IFwiaW5kZW50XCIsXG4gICAgfSxcbiAgICB0YWdzLmluY2x1ZGVzKFwiYVwiKVxuICAgICAgPyB7IGljb246IFwibGlua19vZmZcIiwgY29tbWFuZDogXCJ1bmxpbmtcIiB9XG4gICAgICA6IHtcbiAgICAgICAgICBpY29uOiBcImFkZF9saW5rXCIsXG4gICAgICAgICAgY29tbWFuZDogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGluayA9IHByb21wdChcIldyaXRlIHRoZSBVUkwgaGVyZVwiLCBcImh0dHA6Ly9cIik7XG4gICAgICAgICAgICBpZiAobmV3TGluayAmJiBuZXdMaW5rICE9IFwiXCIgJiYgbmV3TGluayAhPSBcImh0dHA6Ly9cIikge1xuICAgICAgICAgICAgICBjb21tYW5kKFwiY3JlYXRlbGlua1wiLCBuZXdMaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X2NvbG9yX3RleHRcIixcbiAgICAgIGNvbW1hbmQ6ICgpID0-IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjZmdcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgY29tbWFuZChcImZvcmVjb2xvclwiLCB2YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICAgIH0sXG4gICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImJvcmRlcl9jb2xvclwiLFxuICAgICAgY29tbWFuZDogKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNiZ1wiKSEgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlOiBhbnkpID0-IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICBjb21tYW5kKFwiYmFja2NvbG9yXCIsIHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgfSxcbiAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwidGl0bGVcIixcbiAgICAgIGNvbW1hbmQ6IFwiZm9ybWF0YmxvY2tcIixcbiAgICAgIHZhbHVlczogW1xuICAgICAgICB7IG5hbWU6IFwiTm9ybWFsIFRleHRcIiwgdmFsdWU6IFwiLS1cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiSGVhZGluZyAxXCIsIHZhbHVlOiBcImgxXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkhlYWRpbmcgMlwiLCB2YWx1ZTogXCJoMlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJIZWFkaW5nIDNcIiwgdmFsdWU6IFwiaDNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiSGVhZGluZyA0XCIsIHZhbHVlOiBcImg0XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkhlYWRpbmcgNVwiLCB2YWx1ZTogXCJoNVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJIZWFkaW5nIDZcIiwgdmFsdWU6IFwiaDZcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUGFyYWdyYXBoXCIsIHZhbHVlOiBcInBcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUHJlLUZvcm1hdHRlZFwiLCB2YWx1ZTogXCJwcmVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwidGV4dF9mb3JtYXRcIixcbiAgICAgIGNvbW1hbmQ6IFwiZm9udG5hbWVcIixcbiAgICAgIHZhbHVlczogW1xuICAgICAgICB7IG5hbWU6IFwiRm9udCBOYW1lXCIsIHZhbHVlOiBcIi0tXCIgfSxcbiAgICAgICAgLi4uWy4uLmNoZWNrRm9udHMoKV0ubWFwKChmKSA9PiAoe1xuICAgICAgICAgIG5hbWU6IGYsXG4gICAgICAgICAgdmFsdWU6IGYsXG4gICAgICAgICAgZm9udDogdHJ1ZSxcbiAgICAgICAgfSkpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwiZm9ybWF0X3NpemVcIixcbiAgICAgIGNvbW1hbmQ6IFwiZm9udHNpemVcIixcbiAgICAgIHZhbHVlczogW1xuICAgICAgICB7IG5hbWU6IFwiRm9udCBTaXplXCIsIHZhbHVlOiBcIi0tXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlZlcnkgU21hbGxcIiwgdmFsdWU6IFwiMVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTbWFsbFwiLCB2YWx1ZTogXCIyXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk5vcm1hbFwiLCB2YWx1ZTogXCIzXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1lZGl1bSBMYXJnZVwiLCB2YWx1ZTogXCI0XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkxhcmdlXCIsIHZhbHVlOiBcIjVcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVmVyeSBMYXJnZVwiLCB2YWx1ZTogXCI2XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1heGltdW1cIiwgdmFsdWU6IFwiN1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJ1bmRvXCIsXG4gICAgICBjb21tYW5kOiBcInVuZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwicmVkb1wiLFxuICAgICAgY29tbWFuZDogXCJyZWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImNvbnRlbnRfY3V0XCIsXG4gICAgICBjb21tYW5kOiBcImN1dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJjb250ZW50X2NvcHlcIixcbiAgICAgIGNvbW1hbmQ6IFwiY29weVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJjb250ZW50X3Bhc3RlXCIsXG4gICAgICBjb21tYW5kOiBcInBhc3RlXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gaHRtbGBcbiAgICAke2NvbW1hbmRzLm1hcCgobikgPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtd2MtaWNvbi1idXR0b25cIik7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImljb25cIiwgbi5pY29uKTtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gbi5hY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAobi52YWx1ZXMpIHtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbi5jb21tYW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29tbWFuZChuLmNvbW1hbmQsIG4uY29tbWFuZF92YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbi5jb21tYW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7bi52YWx1ZXNcbiAgICAgICAgICA_IGh0bWxgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCIke24uaWNvbn1cIlxuICAgICAgICAgICAgICBAY2hhbmdlPSR7KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IFwiLS1cIikge1xuICAgICAgICAgICAgICAgICAgY29tbWFuZChcInJlbW92ZUZvcm1hdFwiLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG4uY29tbWFuZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgY29tbWFuZChuLmNvbW1hbmQsIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke24udmFsdWVzLm1hcChcbiAgICAgICAgICAgICAgICAodikgPT4gaHRtbGAgPG9wdGlvbiB2YWx1ZT0ke3YudmFsdWV9PiR7di5uYW1lfTwvb3B0aW9uPmBcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PmBcbiAgICAgICAgICA6IGh0bWxgICR7ZWxlbX1gfVxuICAgICAgYDtcbiAgICB9KX1cbiAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9udHMoKTogc3RyaW5nW10ge1xuICBjb25zdCBmb250Q2hlY2sgPSBuZXcgU2V0KFxuICAgIFtcbiAgICAgIC8vIFdpbmRvd3MgMTBcbiAgICAgIFwiQXJpYWxcIixcbiAgICAgIFwiQXJpYWwgQmxhY2tcIixcbiAgICAgIFwiQmFobnNjaHJpZnRcIixcbiAgICAgIFwiQ2FsaWJyaVwiLFxuICAgICAgXCJDYW1icmlhXCIsXG4gICAgICBcIkNhbWJyaWEgTWF0aFwiLFxuICAgICAgXCJDYW5kYXJhXCIsXG4gICAgICBcIkNvbWljIFNhbnMgTVNcIixcbiAgICAgIFwiQ29uc29sYXNcIixcbiAgICAgIFwiQ29uc3RhbnRpYVwiLFxuICAgICAgXCJDb3JiZWxcIixcbiAgICAgIFwiQ291cmllciBOZXdcIixcbiAgICAgIFwiRWJyaW1hXCIsXG4gICAgICBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIixcbiAgICAgIFwiR2FicmlvbGFcIixcbiAgICAgIFwiR2FkdWdpXCIsXG4gICAgICBcIkdlb3JnaWFcIixcbiAgICAgIFwiSG9sb0xlbnMgTURMMiBBc3NldHNcIixcbiAgICAgIFwiSW1wYWN0XCIsXG4gICAgICBcIkluayBGcmVlXCIsXG4gICAgICBcIkphdmFuZXNlIFRleHRcIixcbiAgICAgIFwiTGVlbGF3YWRlZSBVSVwiLFxuICAgICAgXCJMdWNpZGEgQ29uc29sZVwiLFxuICAgICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsXG4gICAgICBcIk1hbGd1biBHb3RoaWNcIixcbiAgICAgIFwiTWFybGV0dFwiLFxuICAgICAgXCJNaWNyb3NvZnQgSGltYWxheWFcIixcbiAgICAgIFwiTWljcm9zb2Z0IEpoZW5nSGVpXCIsXG4gICAgICBcIk1pY3Jvc29mdCBOZXcgVGFpIEx1ZVwiLFxuICAgICAgXCJNaWNyb3NvZnQgUGhhZ3NQYVwiLFxuICAgICAgXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLFxuICAgICAgXCJNaWNyb3NvZnQgVGFpIExlXCIsXG4gICAgICBcIk1pY3Jvc29mdCBZYUhlaVwiLFxuICAgICAgXCJNaWNyb3NvZnQgWWkgQmFpdGlcIixcbiAgICAgIFwiTWluZ0xpVS1FeHRCXCIsXG4gICAgICBcIk1vbmdvbGlhbiBCYWl0aVwiLFxuICAgICAgXCJNUyBHb3RoaWNcIixcbiAgICAgIFwiTVYgQm9saVwiLFxuICAgICAgXCJNeWFubWFyIFRleHRcIixcbiAgICAgIFwiTmlybWFsYSBVSVwiLFxuICAgICAgXCJQYWxhdGlubyBMaW5vdHlwZVwiLFxuICAgICAgXCJTZWdvZSBNREwyIEFzc2V0c1wiLFxuICAgICAgXCJTZWdvZSBQcmludFwiLFxuICAgICAgXCJTZWdvZSBTY3JpcHRcIixcbiAgICAgIFwiU2Vnb2UgVUlcIixcbiAgICAgIFwiU2Vnb2UgVUkgSGlzdG9yaWNcIixcbiAgICAgIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICAgIFwiU2Vnb2UgVUkgU3ltYm9sXCIsXG4gICAgICBcIlNpbVN1blwiLFxuICAgICAgXCJTaXRrYVwiLFxuICAgICAgXCJTeWxmYWVuXCIsXG4gICAgICBcIlN5bWJvbFwiLFxuICAgICAgXCJUYWhvbWFcIixcbiAgICAgIFwiVGltZXMgTmV3IFJvbWFuXCIsXG4gICAgICBcIlRyZWJ1Y2hldCBNU1wiLFxuICAgICAgXCJWZXJkYW5hXCIsXG4gICAgICBcIldlYmRpbmdzXCIsXG4gICAgICBcIldpbmdkaW5nc1wiLFxuICAgICAgXCJZdSBHb3RoaWNcIixcbiAgICAgIC8vIG1hY09TXG4gICAgICBcIkFtZXJpY2FuIFR5cGV3cml0ZXJcIixcbiAgICAgIFwiQW5kYWxlIE1vbm9cIixcbiAgICAgIFwiQXJpYWxcIixcbiAgICAgIFwiQXJpYWwgQmxhY2tcIixcbiAgICAgIFwiQXJpYWwgTmFycm93XCIsXG4gICAgICBcIkFyaWFsIFJvdW5kZWQgTVQgQm9sZFwiLFxuICAgICAgXCJBcmlhbCBVbmljb2RlIE1TXCIsXG4gICAgICBcIkF2ZW5pclwiLFxuICAgICAgXCJBdmVuaXIgTmV4dFwiLFxuICAgICAgXCJBdmVuaXIgTmV4dCBDb25kZW5zZWRcIixcbiAgICAgIFwiQmFza2VydmlsbGVcIixcbiAgICAgIFwiQmlnIENhc2xvblwiLFxuICAgICAgXCJCb2RvbmkgNzJcIixcbiAgICAgIFwiQm9kb25pIDcyIE9sZHN0eWxlXCIsXG4gICAgICBcIkJvZG9uaSA3MiBTbWFsbGNhcHNcIixcbiAgICAgIFwiQnJhZGxleSBIYW5kXCIsXG4gICAgICBcIkJydXNoIFNjcmlwdCBNVFwiLFxuICAgICAgXCJDaGFsa2JvYXJkXCIsXG4gICAgICBcIkNoYWxrYm9hcmQgU0VcIixcbiAgICAgIFwiQ2hhbGtkdXN0ZXJcIixcbiAgICAgIFwiQ2hhcnRlclwiLFxuICAgICAgXCJDb2NoaW5cIixcbiAgICAgIFwiQ29taWMgU2FucyBNU1wiLFxuICAgICAgXCJDb3BwZXJwbGF0ZVwiLFxuICAgICAgXCJDb3VyaWVyXCIsXG4gICAgICBcIkNvdXJpZXIgTmV3XCIsXG4gICAgICBcIkRpZG90XCIsXG4gICAgICBcIkRJTiBBbHRlcm5hdGVcIixcbiAgICAgIFwiRElOIENvbmRlbnNlZFwiLFxuICAgICAgXCJGdXR1cmFcIixcbiAgICAgIFwiR2VuZXZhXCIsXG4gICAgICBcIkdlb3JnaWFcIixcbiAgICAgIFwiR2lsbCBTYW5zXCIsXG4gICAgICBcIkhlbHZldGljYVwiLFxuICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgICAgXCJIZXJjdWxhbnVtXCIsXG4gICAgICBcIkhvZWZsZXIgVGV4dFwiLFxuICAgICAgXCJJbXBhY3RcIixcbiAgICAgIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgICAgXCJMdW1pbmFyaVwiLFxuICAgICAgXCJNYXJrZXIgRmVsdFwiLFxuICAgICAgXCJNZW5sb1wiLFxuICAgICAgXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLFxuICAgICAgXCJNb25hY29cIixcbiAgICAgIFwiTm90ZXdvcnRoeVwiLFxuICAgICAgXCJPcHRpbWFcIixcbiAgICAgIFwiUGFsYXRpbm9cIixcbiAgICAgIFwiUGFweXJ1c1wiLFxuICAgICAgXCJQaG9zcGhhdGVcIixcbiAgICAgIFwiUm9ja3dlbGxcIixcbiAgICAgIFwiU2F2b3llIExFVFwiLFxuICAgICAgXCJTaWduUGFpbnRlclwiLFxuICAgICAgXCJTa2lhXCIsXG4gICAgICBcIlNuZWxsIFJvdW5kaGFuZFwiLFxuICAgICAgXCJUYWhvbWFcIixcbiAgICAgIFwiVGltZXNcIixcbiAgICAgIFwiVGltZXMgTmV3IFJvbWFuXCIsXG4gICAgICBcIlRyYXR0YXRlbGxvXCIsXG4gICAgICBcIlRyZWJ1Y2hldCBNU1wiLFxuICAgICAgXCJWZXJkYW5hXCIsXG4gICAgICBcIlphcGZpbm9cIixcbiAgICBdLnNvcnQoKVxuICApO1xuICBjb25zdCBmb250QXZhaWxhYmxlID0gbmV3IFNldDxzdHJpbmc-KCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgZm9yIChjb25zdCBmb250IG9mIGZvbnRDaGVjay52YWx1ZXMoKSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoZG9jdW1lbnQuZm9udHMuY2hlY2soYDEycHggXCIke2ZvbnR9XCJgKSkge1xuICAgICAgZm9udEF2YWlsYWJsZS5hZGQoZm9udCk7XG4gICAgfVxuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZvbnRBdmFpbGFibGUudmFsdWVzKCk7XG59XG4ifSx7Im5hbWUiOiJpbmRleC5odG1sIiwiY29udGVudCI6IjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI-XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8-XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9zcmMvZmF2aWNvbi5zdmdcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICA8bGlua1xuICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29ucyZkaXNwbGF5PWJsb2NrXCJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIC8-XG4gICAgPHRpdGxlPkxpdCBIVE1MIEVkaXRvcjwvdGl0bGU-XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi9yaWNoLXRleHQtZWRpdG9yLmpzXCI-PC9zY3JpcHQ-XG4gICAgPHN0eWxlPlxuICAgICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICByaWNoLXRleHQtZWRpdG9yIHtcbiAgICAgICAgLS1lZGl0b3Itd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tZWRpdG9yLWhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8cmljaC10ZXh0LWVkaXRvcj5cbiAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgPGgxPkhlYWRsaW5lIDE8L2gxPlxuICAgICAgICA8cD5UaGlzIGlzIGEgcGFyYWdyYXBoLjwvcD5cbiAgICAgICAgPHA-XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKVwiXG4gICAgICAgICAgICA-PGZvbnQgY29sb3I9XCIjZmZmZmZmXCI-U3R5bGVkIFRleHQ8L2ZvbnQ-PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICA8L3A-XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcmljaC10ZXh0LWVkaXRvcj5cbiAgPC9ib2R5PlxuPC9odG1sPlxuIn1d).

The source for this example can be found [here](https://github.com/rodydavis/lit-html-editor).

