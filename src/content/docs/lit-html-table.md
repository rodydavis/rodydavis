---
title: JSON to HTML Table with Lit
description: >
  Learn how to create a dynamic HTML table from JSON data using a Lit web
  component, with examples for fetching data from a URL or using inline JSON,
  and the ability to make the table editable.
date: '2025-01-20 01:18:07.887Z'
draft: false
tags:
  - Lit
  - Web Components
  - HTML
  - Javascript
summary: >-
  Create a dynamic HTML table from JSON data using Lit and Vite, with setup
  instructions and a working example.
embedding: >-
  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
related:
  - html-code-sandbox.md
  - codemirror-dynamic-theme.md
  - lit-rich-text-editor.md
  - lit-draggable-dom.md
  - figma-and-lit.md
---

In this article I will go over how to set up a [Lit](https://lit.dev/) web component and use it to create a HTML [Table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) from json url or inline json.

> **TLDR** The final source [here](https://github.com/rodydavis/lit-html-table) and an online [demo](https://rodydavis.github.io/lit-html-table/).

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

Then enter a project name `lit-html-table` and now open the project in vscode and install the dependencies:

```markdown
cd lit-html-table
npm i lit
npm i -D @types/node
code .
```

Update the `vite.config.ts` with the following:

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-html-table/",
  build: {
    lib: {
      entry: "src/lit-html-table.ts",
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
    <title>JSON to Lit HTML Table</title>
    <script type="module" src="/src/lit-html-table.ts"></script>
  </head>

  <body>
    <lit-html-table src="https://jsonplaceholder.typicode.com/posts">
      <!-- <span slot="title" style="color: red;">Title</span> -->
      <!-- <script type="application/json">
      [
        {
          "id": "0",
          "name": "First Item"
        }
      ]
    </script> -->
    </lit-html-table>
  </body>
</html>
```

We are passing a src attribute to the web component for this example but we can also add a script tag with the type attribute set to `application/json` with the contents containing the json.

If any table header cell needed to be replaced an element can be provided with the slot name set to the key in the json object.

Web Component 
--------------

Before we update our component we need to rename `my-element.ts` to `lit-html-table.ts`

Open up `lit-html-table.ts` and update it with the following:

```javascript
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type ObjectData = { [key: string]: any };

@customElement("lit-html-table")
export class LitHtmlTable extends LitElement {
  @property() src = "";

  data?: ObjectData[];

  static styles = css`
    tr {
      text-align: var(--table-tr-text-align, left);
      vertical-align: var(--table-tr-vertical-align, top);
      padding: var(--table-tr-padding, 10px);
    }
  `;

  render() {
    // Check if data is loaded
    if (!this.values) {
      return html`<slot name="loading">Loading...</slot>`;
    }
    // Check if items are not empty
    if (this.values.length === 0) {
      return html`<slot name="empty">No Items Found!</slot>`;
    }
    // Convert JSON to HTML Table
    return html`
      <table>
        <thead>
          <tr>
            ${Object.keys(this.values[0]).map((key) => {
              const name = key.replace(/\b([a-z])/g, (_, val) =>
                val.toUpperCase()
              );
              return html`<th>
                <slot name="${key}">${name}</slot>
              </th>`;
            })}
          </tr>
        </thead>
        <tbody>
          ${this.values.map((item) => {
            return html`
              <tr>
                ${Object.values(item).map((row) => {
                  return html`<td>${row}</td>`;
                })}
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  async firstUpdated() {
    await this.fetchData();
  }

  // Download the latest json and update it locally
  async fetchData() {
    let _data: any;
    if (this.src.length > 0) {
      // If a src attribute is set prefer it over any slots
      _data = await fetch(this.src).then((res) => res.json());
    } else {
      // If no src attribute is set then grab the inline json in the slot
      const elem = this.parentElement?.querySelector(
        'script[type="application/json"]'
      ) as HTMLScriptElement;
      if (elem) _data = JSON.parse(elem.innerHTML);
    }
    this.values = this.transform(_data ?? []);
    this.requestUpdate();
  }

  transform(data: any) {
    return data;
  }
}

```

We have defined a few [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to style the table cell but many more can be added here.

If everything goes well run the command `npm run dev` and the follow should appear:

![](../../assets/h_1_dab8xdgmxb.webp)

Editing 
--------

What if we wanted to support editing of any cell? With Lit and Web Components we can progressively enhance the experience without changing the html.

At the top of the class add the following boolean property:

```javascript
@property({ type: Boolean }) editable = false;
```

Now update the `tbody` tag in the render method:

```javascript
<tbody>
  ${this.values.map((item, index) => {
    return html`
      <tr>
        ${Object.entries(item).map((row) => {
          return html`<td>
            ${this.editable
              ? html`<input
                  value="${row[1]}"
                  type="text"
                  @input=${(e: any) => {
                    const value = e.target.value;
                    const key = row[0];
                    const current = this.values![index];
                    current[key] = value;
                    this.values![index] = current;
                    this.requestUpdate();
                    this.dispatchEvent(
                      new CustomEvent("input-cell", {
                        detail: {
                          index: index,
                          data: current,
                        },
                      })
                    );
                  }}
                />`
              : html`${row[1]}`}
          </td>`;
        })}
      </tr>
    `;
  })}
</tbody>
```

By checking to see if the `editable` and if `true` return an input with an event listener to update the data and dispatch an `input` event.

Add the `editable` attribute to the `index.html`:

```markup
<lit-html-table editable> ... </lit-html-table>
```

After a reload the table should look like this and any cell can be edited.

![](../../assets/h_2_8s8pheteqq.webp)

An event listener can be added just before the closing `body` tag in `index.html` to grab the latest values or cell information:

```markup
<script>
  const elem = document.querySelector("lit-html-table");
  elem.addEventListener(
    "input-cell",
    (e) => {
      // Index and data for the individual cell
      const { index, data } = e.detail;
      // New array of json items
      const values = elem.values;
    },
    false
  );
</script>
```

This can be taken farther by checking for the type of the value and returning a color, number or checkbox input.

Conclusion 
-----------

If you want to learn more about building with Lit you can read the docs [here](https://lit.dev/). There is also an example on the Lit playground [here](https://lit.dev/playground/#project=W3sibmFtZSI6ImxpdC1odG1sLXRhYmxlLnRzIiwiY29udGVudCI6ImltcG9ydCB7IGh0bWwsIGNzcywgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzLmpzXCI7XG5cbnR5cGUgT2JqZWN0RGF0YSA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbkBjdXN0b21FbGVtZW50KFwibGl0LWh0bWwtdGFibGVcIilcbmV4cG9ydCBjbGFzcyBMaXRIdG1sVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgc3JjID0gXCJcIjtcblxuICBkYXRhPzogT2JqZWN0RGF0YVtdO1xuXG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgdHIge1xuICAgICAgdGV4dC1hbGlnbjogdmFyKC0tdGFibGUtdHItdGV4dC1hbGlnbiwgbGVmdCk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdmFyKC0tdGFibGUtdHItdmVydGljYWwtYWxpZ24sIHRvcCk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS10YWJsZS10ci1wYWRkaW5nLCAxMHB4KTtcbiAgICB9XG4gIGA7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIENoZWNrIGlmIGRhdGEgaXMgbG9hZGVkXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybiBodG1sYDxzbG90IG5hbWU9XCJsb2FkaW5nXCI-TG9hZGluZy4uLjwvc2xvdD5gO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBpdGVtcyBhcmUgbm90IGVtcHR5XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYDxzbG90IG5hbWU9XCJlbXB0eVwiPk5vIEl0ZW1zIEZvdW5kITwvc2xvdD5gO1xuICAgIH1cbiAgICAvLyBDb252ZXJ0IEpTT04gdG8gSFRNTCBUYWJsZVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ-XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgJHtPYmplY3Qua2V5cyh0aGlzLmRhdGFbMF0pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBrZXkucmVwbGFjZSgvXFxiKFthLXpdKS9nLCAoXywgdmFsKSA9PlxuICAgICAgICAgICAgICAgIHZhbC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYDx0aD5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiJHtrZXl9XCI-JHtuYW1lfTwvc2xvdD5cbiAgICAgICAgICAgICAgPC90aD5gO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5kYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAke09iamVjdC52YWx1ZXMoaXRlbSkubWFwKCh2YWwpID0-IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYDx0ZD4ke3ZhbH08L3RkPmA7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdHI-XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgO1xuICB9XG5cbiAgYXN5bmMgZmlyc3RVcGRhdGVkKCkge1xuICAgIGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaERhdGEoKSB7XG4gICAgbGV0IF9kYXRhOiBhbnk7XG4gICAgaWYgKHRoaXMuc3JjLmxlbmd0aCA-IDApIHtcbiAgICAgIF9kYXRhID0gYXdhaXQgZmV0Y2godGhpcy5zcmMpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnBhcmVudEVsZW1lbnQ_LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIl0nXG4gICAgICApIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgaWYgKGVsZW0pIF9kYXRhID0gSlNPTi5wYXJzZShlbGVtLmlubmVySFRNTCk7XG4gICAgfVxuICAgIF9kYXRhID8_PSBbXTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnRyYW5zZm9ybShfZGF0YSk7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0oZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJ9LHsibmFtZSI6ImluZGV4Lmh0bWwiLCJjb250ZW50IjoiPCFET0NUWVBFIGh0bWw-XG48aHRtbCBsYW5nPVwiZW5cIj5cblxuPGhlYWQ-XG4gIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8-XG4gIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGhyZWY9XCIvc3JjL2Zhdmljb24uc3ZnXCIgLz5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICA8dGl0bGU-SlNPTiB0byBMaXQgSFRNTCBUYWJsZTwvdGl0bGU-XG4gIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4vbGl0LWh0bWwtdGFibGUuanNcIj48L3NjcmlwdD5cbjwvaGVhZD5cblxuPGJvZHk-XG4gIDxsaXQtaHRtbC10YWJsZSBzcmM9XCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIj5cbiAgICA8IS0tIDxzcGFuIHNsb3Q9XCJ0aXRsZVwiIHN0eWxlPVwiY29sb3I6IHJlZDtcIj5UaXRsZTwvc3Bhbj4gLS0-XG4gICAgPCEtLSA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCI-XG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkZpcnN0IEl0ZW1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgPC9zY3JpcHQ-IC0tPlxuICA8L2xpdC1odG1sLXRhYmxlPlxuXG48L2JvZHk-XG5cbjwvaHRtbD4ifV0).

The source for this example can be found [here](https://github.com/rodydavis/lit-html-table).
