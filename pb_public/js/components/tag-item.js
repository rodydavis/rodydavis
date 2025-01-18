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
      .tag {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background-color: var(--md-sys-color-tertiary);
        color: var(--md-sys-color-on-tertiary);
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }
      }
    `
  );
}

customElements.define("tag-item", TagItem);
