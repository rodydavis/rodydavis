import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./icon-button";

export const tagName = "app-header";

@customElement(tagName)
export class AppHeader extends LitElement {
  static styles = css`
    header {
      width: 100%;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      display: flex;
      align-items: center;
      --input-size: 32px;
    }

    .spacer {
      flex: 1;
    }

    .title {
      display: block;
    }

    .title-prefix {
      display: block;
    }

    .title-details {
      max-width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (min-width: 200px) {
      .title {
        display: block;
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

    article {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    img {
      margin-right: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      max-width: 100%;
      display: flex;
      flex-grow: 1;
    }

    .logo {
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
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
    a icon-button {
      margin-left: 3px;
    }
    .actions {
      display: flex;
      align-items: center;
    }

    .links {
      display: none;
    }

    @media (min-width: 600px) {
      .links {
        display: flex;
      }
    }

    .title a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .title a div {
      white-space: nowrap;
    }

    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    .row icon-button,
    .row input {
      margin-left: 10px;
    }

    .theme-options {
      font-size: 1.5rem;
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
    return html`<header class="wrapper">
      <article>
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${title !== "Rody Davis"
              ? html`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div class="title-details">${title}</div>`
              : html``}
          </a>
        </h1>
        <div class="spacer"></div>
        <div class="links">
          <a href="/apps"> Apps </a>
          <a href="/posts"> Blog </a>
          <a href="/talks"> Talks </a>
          <a href="/about"> About </a>
        </div>
        <div class="actions">
          <material-theme-control></material-theme-control>
          ${canShare
            ? html` <icon-button
                @click=${this.share}
                icon="share"
              ></icon-button>`
            : html``}
        </div>
      </article>
    </header> `;
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
