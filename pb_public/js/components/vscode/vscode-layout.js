import { html, css } from "lit";
import { mix } from "/js/mixwith.js"; // Assuming these paths are correct for your project
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import "./vscode-header.js";
import "./vscode-sidebar.js";
import "./vscode-outline.js";
import "./vscode-footer.js";
import "/js/components/app-footer.js";
import "/js/components/vscode/vscode-outline-section.js";
import { computed } from "@preact/signals-core";

export class VSCodeLayout extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
    selectedActivity = "Posts";

    constructor() {
        super();
        this.addEventListener('activity-selected', (e) => {
            this.selectedActivity = e.detail.name;
            this.requestUpdate(); // Ensure this method exists or is provided by your mixins
        });
    }

    styles = computed(() => css`
    :host {
      display: grid;
      /* Default to 2-column layout (no outline) */
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      grid-template-columns: 50px 1fr;
      grid-template-rows: auto 1fr auto;
      height: 100vh;
      min-height: 100vh;
      background: var(--vscode-bg, #1e1e1e);
      color: var(--vscode-fg, #d4d4d4);
      box-sizing: border-box;
    }

    .header {
      grid-area: header;
      background-color: #3c3c3c;
      border-bottom: 1px solid #00000030;
      box-sizing: border-box;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #333333;
      border-right: 1px solid #00000030;
      height: 100%;
      min-height: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .main {
      grid-area: main;
      overflow: auto;
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
      padding: 16px;
    }

    .outline {
      grid-area: outline; /* Still define grid-area for when it's shown */
      background-color: #252526;
      border-left: 1px solid #00000030;
      height: 100%;
      min-height: 0;
      width: 100%;
      display: none; /* Default to hidden */
      overflow-y: auto;
      box-sizing: border-box;
    }

    .footer {
      grid-area: footer;
      background-color: #007acc;
      color: #ffffff;
      box-sizing: border-box; 
      width: 100%;
    }

    @media (min-width: 800px) {
      :host:has([slot="outline"]) {
        grid-template-areas:
          "header header header"
          "sidebar main outline"
          "footer footer footer";
        grid-template-columns: 50px 1fr 300px;

        .outline {
          display: block; 
        }
      }
    }
  `);

    builder = computed(() => {
        return html`
      <div class="header"><slot name="header"><vscode-header></vscode-header></slot></div>
      <div class="sidebar"><slot name="sidebar"></slot></div>
      <main class="main"><slot></slot></main>
      <div class="outline"><slot name="outline"></slot></div>
      <div class="footer"><slot name="footer"><vscode-footer></vscode-footer></slot></div>
    `;
    });
}
customElements.define("vscode-layout", VSCodeLayout);

