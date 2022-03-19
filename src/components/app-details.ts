import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "app-details";

@customElement(tagName)
export class AppDetails extends LitElement {
  static styles = css`
    iframe {
      --width: 100%;
      --height: 50vh;
      width: var(--width);
      height: var(--height);
      border: none;
      display: block;
      outline: 1px solid var(--md-sys-color-outline);
    }

    .app-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
    }

    .web-app {
      background-color: var(--md-sys-color-tertiary-container);
      color: var(--md-sys-color-on-tertiary-container);
      border: none;
      padding: 15px 32px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      border-radius: 20px;
    }
    .web-app:hover {
      outline: 1px solid var(--md-sys-color-outline);
    }

    .apple {
      background-image: url("/img/badges/app_store.png");
      margin: 4px;
      height: 80px;
      width: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    .google {
      background-image: url("/img/badges/google_play.png");
      margin: 4px;
      height: 80px;
      width: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    article {
      max-width: 960px;
      margin: 0 auto;
    }

    a {
      text-decoration: none;
    }

    section {
      margin-top: 1rem;
    }

    @media (max-width: 960px) {
      article {
        max-width: 100%;
        margin: 1rem;
      }
    }

    @media (hover: hover) {
      iframe {
        display: block;
      }
    }

    .screenshot {
      width: 100%;
      border-radius: 20px;
    }
  `;

  @property({ type: Object }) app: App;

  render() {
    const props = this.app;
    return html`
      <article>
        <div style="height: 10px"></div>
        <img class="app-icon" src="${props.image}" hidden />

        ${props.demo
          ? html` <iframe class="app" src="${props.demo}"></iframe>`
          : html``}

        <section><slot></slot></section>

        ${props.screenshots
          ? html`
              <div class="screenshots">
                ${props.screenshots.map(
                  (screenshot: string) =>
                    html` <img class="screenshot" src="${screenshot}" /> `
                )}
              </div>
            `
          : html``}

        <div class="app-links">
          ${props.apple
            ? html`<a
                target="_blank"
                rel="noopener noreferrer"
                href="${props.apple}"
              >
                <div class="apple"></div>
              </a>`
            : html``}
          ${props.google
            ? html`<a
                target="_blank"
                rel="noopener noreferrer"
                href="${props.google}"
              >
                <div class="google"></div>
              </a>`
            : html``}
          ${props.demo
            ? html`<a
                class="web-app"
                target="_blank"
                href="${props.demo}"
                class="button"
                role="button"
              >
                <div class="web">Web App</div>
              </a>`
            : html``}
        </div>
      </article>
    `;
  }
}

export interface App {
  title: string;
  demo?: string;
  apple?: string;
  google?: string;
  image: string;
  screenshots?: string[];
}

declare global {
  interface HTMLElementTagNameMap {
    "app-details": AppDetails;
  }
}
