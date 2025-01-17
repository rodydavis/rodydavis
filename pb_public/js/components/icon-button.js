import { computed } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class IconButton extends mix(HTMLElement).with(
  LitTemplateMixin,
  ShadowRootMixin
) {
  styles = computed(
    () => css`
      button {
        border: none;
        background: transparent;
        color: currentColor;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
      }
    `
  );

  builder = computed(
    () =>
      html`
        <button>
          <slot></slot>
        </button>
      `
  );
}

customElements.define("icon-button", IconButton);
