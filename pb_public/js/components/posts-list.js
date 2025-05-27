import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class PostsList extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
    styles = computed(() => css`
    :host {
      display: block;
      width: 100%;
    }
    .posts-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      width: 100%;
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      align-items: stretch;
      justify-content: flex-start;
    }
    .posts-list ::slotted(post-card) {
      flex: 1 1 320px;
      min-width: 280px;
      max-width: 1fr;
      min-block-size: 12em;
      display: block;
      box-sizing: border-box;
    }
    @media (max-width: 768px) {
      .posts-list {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `);

    builder = computed(() => {
        return html`
      <div class="posts-list">
        <slot></slot>
      </div>
    `;
    });
}

customElements.define("posts-list", PostsList);
