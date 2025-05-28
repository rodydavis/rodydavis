import { html, css } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import "../current-year.js";
import { computed } from "@preact/signals-core";

export class VSCodeFooter extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  styles = computed(() => css`
    :host {
      display: flex;
      align-items: center;
      background: var(--theme-sys-color-primary); /* Updated from var(--vscode-statusBar-background, #007acc) */
      color: var(--theme-sys-color-on-primary); /* Updated from var(--vscode-statusBar-foreground, #fff) */
      align-items: center;
      justify-content: space-between;
      font-size: 0.95rem;
      width: 100%;
      gap: 16px;
      white-space: nowrap;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap; /* Prevent copyright from wrapping */
      padding-left: 16px;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      flex: 1;
      overflow-x: auto;
      padding-right: 16px;
    }
    .footer-reactions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  `);

  builder = computed(() => html`
    <div class="left">
      &copy; <current-year></current-year> Rody Davis
    </div>
    <div class="right">
      <slot></slot>
    </div>
  `);
}
customElements.define("vscode-footer", VSCodeFooter);
