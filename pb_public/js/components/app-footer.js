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
        padding: 20px;
        text-align: center;
        background-color: var(--app-footer-background);
        color: var(--app-footer-text);
        font-size: 0.9rem;
      }
      footer a {
        color: var(--app-footer-link-text);
        text-decoration: none;
      }
    `
  );
}

customElements.define("app-footer", AppFooter);
