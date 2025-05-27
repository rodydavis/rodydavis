import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class SocialList extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  styles = computed(() => css`
    :host {
      display: block;
      width: 100%;
    }
    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.2rem;
      margin-top: 1rem;
    }
    @media (max-width: 768px) {
      .social-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.7rem;
      }
    }
  `);

  builder = computed(() => html`
    <div class="social-grid">
      <slot></slot>
    </div>
  `);
}

customElements.define("social-list", SocialList);
