import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
  hexFromArgb,
} from "@material/material-color-utilities";
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

    .links {
      display: none;
    }

    @media (min-width: 600px) {
      .links {
        display: flex;
      }
    }
  `;

  @property({ type: Boolean }) dark =
    localStorage.getItem("theme-dark") === "true";
  @property() color = localStorage.getItem("theme-color") || randomColor();
   //"#6750A4";
  @property() title = document.title;

  render() {
    const title =
      this.title && this.title !== "Rody Davis"
        ? `Rody Davis | ${this.title}`
        : "Rody Davis";
    let canShare = false;
    try {
      canShare = navigator.canShare();
    } catch (e) {
      canShare = false;
    }
    return html`<header class="wrapper">
      <article>
        <h1>
          <a href="/">
            <span>${title}</span>
          </a>
        </h1>
        <div class="links">
          <a href="/apps"> Apps </a>
          <a href="/posts"> Blog </a>
          <a href="/talks"> Talks </a>
          <a href="/about"> About </a>
        </div>
        <div class="actions">
          <input
            type="color"
            .value=${this.color}
            @input=${this.onColor.bind(this)}
          />
          <icon-button
            @click=${this.randomColor.bind(this)}
            icon="shuffle"
          ></icon-button>
          <icon-button
            @click=${this.toggle.bind(this)}
            icon="${this.dark ? "light_mode" : "dark_mode"}"
          ></icon-button>
          ${canShare
            ? html` <icon-button
                @click=${this.share.bind(this)}
                icon="share"
              ></icon-button>`
            : html``}
        </div>
      </article>
    </header>`;
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
