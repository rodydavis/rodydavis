import { computed } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import "/js/components/icon-button.js";

export class TagItem extends mix(HTMLElement).with(
  LitTemplateMixin,
  ShadowRootMixin
) {
  name = this.attr("name", "Tag");
  link = this.attr("link", "#");

  builder = computed(
    () => html` <a class="tag" href="${this.link}">${this.name}</a> `
  );

  styles = computed(
    () => css`
      :host {
        display: inline-block;
        margin: 4px;
        padding: 8px 12px;
        border-radius: 16px;
        background-color: var(--tag-item-background);
        color: var(--tag-item-text);
        font-size: 0.85rem;
        cursor: pointer;
        transition: filter 0.2s ease-in-out;
      }

      .tag {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background-color: var(--tag-item-background);
        color: var(--tag-item-text);
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }
      }
    `
  );
}

customElements.define("tag-item", TagItem);
