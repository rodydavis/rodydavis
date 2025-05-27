import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class TagItem extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  link$ = this.attr("link", "");
  name$ = this.attr("name", "");

  styles = computed(() => css`
    :host {
      display: inline-block;
      margin: 0.2em 0.3em;
    }
    a {
      display: inline-block;
      padding: 0.3em 0.9em;
      border-radius: 1em;
      background: var(--theme-sys-color-primary-container, #e0e7ff);
      color: var(--theme-sys-color-on-primary-container, #222);
      font-size: 0.98em;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
      border: 1px solid var(--theme-sys-color-outline, #b3b3b3);
      cursor: pointer;
    }
    a:hover {
      background: var(--theme-sys-color-primary, #6366f1);
      color: var(--theme-sys-color-on-primary, #fff);
    }
  `);

  builder = computed(() => html`
    <a href=${this.link$}>${this.name$}</a>
  `);
}

customElements.define("tag-item", TagItem);
