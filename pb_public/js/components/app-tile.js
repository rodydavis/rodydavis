import { css, html } from "lit";
import { computed } from "@preact/signals-core";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";

export class AppTile extends mix(HTMLElement).with(LitTemplateMixin, ShadowRootMixin) {
  icon$ = this.attr("icon", "");
  name$ = this.attr("name", "");
  link$ = this.attr("link", "");

  styles = computed(() => css`
    :host {
      display: block;
      width: 100%;
    }
    .app-tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      min-height: unset;
      height: auto;
      padding: 1.25rem;
      position: relative;
      border: 1px solid var(--theme-sys-color-outline);
      border-radius: 1rem;
      background-color: var(--theme-sys-color-surface-container-lowest);
      box-shadow: 6px 6px 0px 0px var(--theme-sys-color-primary);
      transition: box-shadow 0.2s ease-in-out;
    }
    .app-tile:hover {
      box-shadow: 8px 8px 0px 0px var(--theme-sys-color-primary-container);
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      object-fit: contain;
      margin-bottom: 0.7rem;
      margin-top: auto;
      display: block;
    }
    .app-info {
      width: 100%;
      text-align: center;
      margin-top: auto;
      margin-bottom: 0.2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
    .app-info h3 {
      margin: 0.5rem 0 0 0;
      font-size: 1.08em;
      color: var(--app-footer-heading-color, var(--app-footer-text));
      width: 100%;
      text-align: center;
    }
    @media (max-width: 768px) {
      img {
        width: 60px;
        height: 60px;
      }
    }
  `);

  builder = computed(() => html`
    <div class="app-tile">
      <a href=${this.link$}>
        <img src=${this.icon$} alt=${this.name$} />
        <div class="app-info">
          <h3>${this.name$}</h3>
        </div>
      </a>
    </div>
  `);
}

customElements.define("app-tile", AppTile);
