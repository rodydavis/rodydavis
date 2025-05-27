import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class AppsList extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  styles = computed(() => css`
    :host {
      display: block;
      width: 100%;
    }
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
    @media (max-width: 768px) {
      .apps-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
      }
    }
  `);

  builder = computed(() => html`
    <div class="apps-grid">
      <slot></slot>
    </div>
  `);
}

customElements.define("apps-list", AppsList);
