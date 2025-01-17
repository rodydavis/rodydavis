import { computed } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class Counter extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  count = this.attr("count", "0");
  countInt = computed(() => parseInt(this.count.value));
  increment() {
    this.count.value = (this.countInt.value + 1).toString();
  }
  decrement() {
    this.count.value = (this.countInt.value - 1).toString();
  }
  reset() {
    this.count.value = "0";
  }
  styles = computed(
    () => css`
      .actions {
        button {
          border-radius: 10px;
        }
      }
    `
  );
  builder = computed(
    () => html`
      <span>Count: ${this.count}</span>
      <div class="actions">
        <button @click=${this.decrement.bind(this)}>-</button>
        <button @click=${this.increment.bind(this)}>+</button>
        <button
          @click=${this.reset.bind(this)}
          ?disabled=${this.countInt.value === 0}
        >
          Reset
        </button>
      </div>
    `
  );
}

customElements.define("x-counter", Counter);
