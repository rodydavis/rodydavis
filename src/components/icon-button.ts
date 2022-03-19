import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("icon-button")
export class IconButton extends LitElement {
  static styles = css`
    .icon {
      --icon-size: 24px;
      --icon-padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      user-select: none;
      color: var(--icon-color);
    }
    .icon:hover {
      outline: 1px solid var(--md-sys-color-outline);
    }
    .icon :first-child {
      padding: var(--icon-padding);
    }
    .material-icons {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      font-size: var(--icon-size);
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: "liga";
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @property({ type: String }) icon = "add";
  @property({ type: String }) href = "";

  render() {
    if (this.href) {
      return html`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `;
    }
    return html`
      <div class="icon">
        <i class="material-icons">${this.icon}</i>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "icon-button": IconButton;
  }
}
