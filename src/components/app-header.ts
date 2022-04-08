import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
  hexFromArgb,
} from "@material/material-color-utilities";
import { html, css, LitElement } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

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
      display: none;
    }

    .title-prefix {
      display: none;
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

    icon-button {
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

  @property({ type: Boolean }) dark =
    localStorage.getItem("theme-dark") === "true";
  @property() color = localStorage.getItem("theme-color") || randomColor();
  //"#6750A4";
  @property() title = document.title;
  @state() showOptions = false;
  @query("#theme-options") options!: HTMLDivElement;

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
            <icon-button
              @click=${this.toggleOptions}
              icon="palette"
            ></icon-button>
            ${canShare
              ? html` <icon-button
                  @click=${this.share}
                  icon="share"
                ></icon-button>`
              : html``}
          </div>
        </article>
      </header>
      <dialog id="theme-options" @close=${() => (this.showOptions = false)}>
        <div class="wrapper">
          <div>
            <h2 class="theme-options">Theme Options</h2>
          </div>
          <div class="row">
            <label for="source">Source Color</label>
            <input
              id="source"
              type="color"
              .value=${this.color}
              @input=${this.onColor}
            />
          </div>
          <div class="row">
            <label for="shuffle">Shuffle</label>
            <icon-button
              id="shuffle"
              @click=${this.randomColor}
              icon="shuffle"
            ></icon-button>
          </div>
          <div class="row">
            <label for="brightness">Brightness</label>
            <icon-button
              id="brightness"
              @click=${this.toggle}
              icon="${this.dark ? "light_mode" : "dark_mode"}"
            ></icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`;
  }

  private toggleOptions() {
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      // @ts-ignore
      this.options.showModal();
    }
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

  private toggle() {
    this.dark = !this.dark;
    localStorage.setItem("theme-dark", this.dark.toString());
    this.updateTheme();
  }

  private setColor(val: string) {
    this.color = val;
    localStorage.setItem("theme-color", val);
    this.updateTheme();
  }

  private onColor(e: Event) {
    const target = e.target as HTMLInputElement;
    this.setColor(target.value);
  }

  private randomColor() {
    this.setColor(randomColor());
  }

  private updateTheme() {
    const source = this.color;
    const dark = this.dark;
    if (this.dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    const target = this.shadowRoot!.querySelector("main") as HTMLElement;
    const theme = themeFromSourceColor(argbFromHex(source));
    applyTheme(theme, { target, dark });
  }

  firstUpdated() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const dark =
      localStorage.getItem("theme-dark") ?? prefersDark.matches.toString();
    this.dark = dark === "true";
    if (this.dark) {
      document.body.classList.add("dark-theme");
    }
    this.updateTheme();
    prefersDark.addEventListener("change", (e) => {
      this.dark = e.matches;
      this.updateTheme();
    });
  }
}

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
