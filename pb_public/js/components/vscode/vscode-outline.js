import { html, css } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import { computed } from "@preact/signals-core";

export class VSCodeOutline extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  styles = computed(() => css`
    :host {
      display: block;
      background: var(--vscode-sideBar-background, #23232b);
      border-left: 1px solid var(--vscode-sideBar-border, #222);
      height: 100%;
    }
    .outline-inner {
      height: 100%;
      max-height: 100%;
      overflow-y: auto;
    }
  `);
  builder = computed(() => html`
    <div class="outline-inner">
      <slot></slot>
    </div>
  `);
}
customElements.define("vscode-outline", VSCodeOutline);
