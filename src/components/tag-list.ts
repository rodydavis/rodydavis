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
      justify-content: center;
      align-items: center;
      margin-left: 2rem;
      margin-right: 2rem;
      width: calc(100% - 4rem);
    }
    tag-item {
      margin-bottom: 0.4rem;
      margin-top: 0.4rem;
    }
    .tags[card] {
      align-items: flex-start;
      justify-content: flex-start;
      margin-left: 0;
    }
  `;

  @property({ type: Array }) tags: string[] = [];
  @property({ type: Boolean }) card = false;

  render() {
    const tags = this.tags || [];
    return html` <div class="tags" ?card=${this.card}>
      ${tags.map((tag) => html`<tag-item name=${tag}></tag-item>`)}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tag-list": TagList;
  }
}
