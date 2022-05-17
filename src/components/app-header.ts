import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./icon-button";

export const tagName = "app-header";

@customElement(tagName)
export class AppHeader extends LitElement {
  static styles = css`
    header {
      --input-size: 32px;
      font-family: "Roboto", sans-serif;
    }
    .spacer {
      flex: 1;
    }
    .title {
      display: block;
      white-space: nowrap;
      overflow: hidden;
    }
    .title-prefix {
      display: block;
    }
    .title-details {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    a {
      text-decoration: none;
      display: inline-flex;
      color: var(--md-sys-color-on-primary-container);
      margin-right: 1rem;
    }
    a:hover {
      text-decoration: underline;
    }
    .links {
      display: none;
      align-items: center;
    }
    @media (min-width: 200px) {
      .title {
        display: block;
       
      }
    }
    @media (min-width: 600px) {
      .links {
        display: flex;
      }
    }
    @media (min-width: 700px) {
      .title-prefix {
        display: block;
      }
      .title-details {
        max-width: 350px;
      }
    }
    @media (min-width: 900px) {
      .title-details {
        max-width: 450px;
      }
    }
  `;

  @property() title = document.title;

  render() {
    let canShare = false;
    try {
      canShare = navigator.canShare();
    } catch (e) {
      canShare = false;
    }
    const title = (this.title || "").trim();
    return html`
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-css/top-app-bar/style.css"
      />
      <header class="top-app-bar">
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${title !== "Rody Davis"
              ? html`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div class="title-details">${title}</div>`
              : html``}
          </a>
        </h1>

        <div class="actions">
          <div class="links">
            <a href="/apps"> Apps </a>
            <a href="/posts"> Blog </a>
            <a href="/talks"> Talks </a>
            <a href="/about"> About </a>
          </div>
          <material-theme-control></material-theme-control>
          ${canShare
            ? html` <icon-button
                @click=${this.share}
                icon="share"
              ></icon-button>`
            : html``}
        </div>
      </header>
    `;
  }

  private share() {
    const url = new URL(window.location.href);
    const link = url.toString();
    const text = `${link}`;
    const title = `${link}`;
    if (navigator.share) {
      navigator.share({ text, title }).catch((err) => {
        console.error(err);
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
