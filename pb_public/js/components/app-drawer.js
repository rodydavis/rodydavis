import { signal, computed, effect } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin } from "/js/mixins.js";
import { close } from "/js/components/icons.js";
import "/js/components/icon-button.js";

export const isDrawerOpen = signal(false);

export class AppDrawer extends mix(HTMLElement).with(LitTemplateMixin) {
  builder = computed(
    () => html`
      <style>
        .drawer {
          width: 300px;
          left: 0;
          top: 0;
          bottom: 0;
          height: 100vh;
          background-color: #2a2a2a;
          color: white;
          border: none;
          max-height: unset;
          outline: none;
          button {
            border: none;
            background: transparent;
            color: currentColor;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
          }
        }
      </style>
      <dialog class="drawer">
        <form method="dialog">
          <button>${close("24px")}</button>
        </form>
      </dialog>
    `
  );

  connectedCallback() {
    super.connectedCallback();
    const el = this.getRoot().querySelector("dialog");
    this.cleanup.push(
      effect(() => {
        if (isDrawerOpen.value) {
          el.showModal();
        }
      })
    );
  }
}

customElements.define("app-drawer", AppDrawer);
