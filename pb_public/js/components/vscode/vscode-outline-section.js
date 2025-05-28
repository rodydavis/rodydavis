import { html, css } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import { computed } from "@preact/signals-core";

export class VSCodeOutlineSection extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  static get observedAttributes() {
    return ["title"];
  }

  get title() {
    return this.getAttribute("title") || "";
  }

  styles = computed(() => css`
    :host {
      display: block;
      margin-bottom: 16px;
      padding: 8px 16px;
    }
    .section-title {
      font-weight: 600;
      margin-bottom: 6px;
      color: var(--vscode-panelTitle-activeForeground, #fff);
      font-size: 1.05em;
    }
    ::slotted(*) {
      margin: 0;
    }
  `);

  builder = computed(() => html`
    <div class="section-title">${this.title}</div>
    <slot></slot>
  `);
}
customElements.define("vscode-outline-section", VSCodeOutlineSection);
