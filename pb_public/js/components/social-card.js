import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class SocialCard extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  link$ = this.attr("link", "");
  title$ = this.attr("title", "");

  styles = computed(() => css`
    :host {
      display: block;
      width: 100%;
    }
    .social-tile {
      border: 1px solid var(--theme-sys-color-outline);
      border-radius: 1rem;
      background-color: var(--theme-sys-color-surface-container-lowest);
      box-shadow: 6px 6px 0px 0px var(--theme-sys-color-primary);
      transition: box-shadow 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 0.7rem 0.5rem 0.7rem 0.5rem;
      min-height: unset;
      height: auto;
      text-decoration: none;
      color: var(--app-footer-link-text, #555);
    }
    .social-tile:hover {
      box-shadow: 8px 8px 0px 0px var(--theme-sys-color-primary-container);
    }
    .icon {
      width: 38px;
      height: 38px;
      margin-bottom: 0.5rem;
      margin-top: auto;
      display: block;
    }
    span {
      font-size: 1em;
      margin-top: 0.2em;
      text-align: center;
      color: var(--app-footer-heading-color, var(--app-footer-text));
    }
    @media (max-width: 768px) {
      .icon {
        width: 28px;
        height: 28px;
      }
    }
  `);

  builder = computed(() => html`
    <a class="social-tile" href=${this.link$} target="_blank" rel="noopener" title=${this.title$}>
      <slot name="icon"></slot>
      <span><slot></slot></span>
    </a>
  `);
}

customElements.define("social-card", SocialCard);
