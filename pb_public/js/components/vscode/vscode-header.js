import { html, css } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import { computed } from "@preact/signals-core";

export class VSCodeHeader extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
    styles = computed(() => css`
    :host {
      display: flex;
      align-items: center;
      height: 100%;
      background: var(--vscode-titleBar-activeBackground, #2c2c32);
      color: var(--vscode-titleBar-activeForeground, #fff);
      padding: 0 16px;
    }
    .title {
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-right: 24px;
        a {
            color: inherit;
            text-decoration: none;
        }
    }
    .search-slot-container {
      flex: 1;
      display: flex;
      align-items: center;
    }
  `);
    builder = computed(() => html`
    <span class="title">
        <a href="/" title="Home" aria-label="Home">Rody Davis</a>
    </span>
    <div class="search-slot-container">
      <slot name="search"></slot>
    </div>
    <slot></slot>
  `);
}
customElements.define("vscode-header", VSCodeHeader);
