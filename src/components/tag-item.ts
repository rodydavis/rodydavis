import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "tag-item";

@customElement(tagName)
export class TagItem extends LitElement {
  static styles = css`
    .tag {
      margin-right: 0.5rem;
      padding: 0.25rem 0.5rem;
      background-color: var(--md-sys-color-tertiary);
      color: var(--md-sys-color-on-tertiary);
      border-radius: 8px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
  `;

  @property() name = "";

  render() {
    return html`<a href="/tags/${this.name}">
      <span class="tag">${this.name}</span>
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tag-item": TagItem;
  }
}
