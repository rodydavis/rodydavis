import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./tag-item";

export const tagName = "tag-list";

@customElement(tagName)
export class TagList extends LitElement {
  static styles = css`
    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
    tag-item {
      margin-bottom: 0.4rem;
      margin-top: 0.4rem;
    }
  `;

  @property({ type: Array }) tags: string[] = [];

  render() {
    const tags = this.tags || [];
    return html` <div class="tags">
      ${tags.map((tag) => html`<tag-item name=${tag}></tag-item>`)}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tag-list": TagList;
  }
}
