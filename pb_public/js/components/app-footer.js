import { computed, signal } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import "/js/components/icon-button.js";

export class AppFooter extends mix(HTMLElement).with(
  LitTemplateMixin,
  ShadowRootMixin
) {
  copyrightDate = signal(new Date());
  copyrightStr = computed(() => {
    return this.copyrightDate.value.getFullYear();
  });

  builder = computed(
    () => html`
      <footer>
        <div class="links">
          <a href="/about">About</a>
          <a href="/apps">Apps</a>
          <a href="/feed.rss">RSS</a>
        </div>
        <div class="copyright">
          <p>&copy; ${this.copyrightStr} Rody Davis Productions</p>
        </div>
      </footer>
    `
  );

  styles = computed(
    () => css`
      footer {
        background-color: var(--md-sys-color-surface-dim);
        color: var(--md-sys-color-on-surface);
        padding: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .links {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      a {
        color: var(--md-sys-color-on-surface);
        text-decoration: none;
      }
      p {
        font-size: 14px;
      }
      .copyright {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
    `
  );
}

customElements.define("app-footer", AppFooter);
