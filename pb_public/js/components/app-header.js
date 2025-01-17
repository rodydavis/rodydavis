import { computed } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import { menu } from "/js/components/icons.js";
import { isDrawerOpen } from "/js/components/app-drawer.js";
import "/js/components/icon-button.js";

export class AppHeader extends mix(HTMLElement).with(
  LitTemplateMixin,
  ShadowRootMixin
) {
  title$ = this.attr("title", "");
  styles = computed(
    () => css`
      header {
        --padding: 8px;
        width: calc(100% - (var(--padding) * 2));
        background-color: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        padding: var(--padding);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }
      .title {
        font-weight: semi-bold;
        font-size: 18px;
      }
      .spacer {
        flex: 1;
      }
      .actions {
        display: flex;
        flex-direction: row;
      }
      .social-link {
        img {
          width: 18px;
          height: 18px;
          color: var(--md-sys-color-on-primary);
        }
      }
    `
  );

  toggleMenu() {
    isDrawerOpen.value = !isDrawerOpen.value;
  }

  getSocialLinks() {
    return [
      {
        link: `https://facebook.com/rodydavisjr`,
        src: "/media/svg/facebook.svg",
      },
      {
        link: `https://tiktok.com/@rodydavisjr`,
        src: "/media/svg/tiktok.svg",
      },
      {
        link: `https://instagram.com/rodydavisjr`,
        src: "/media/svg/instagram.svg",
      },
      {
        link: `https://linkedin.com/in/rodydavis`,
        src: "/media/svg/linkedin.svg",
      },
      {
        link: `https://twitter.com/rodydavis`,
        src: "/media/svg/twitter.svg",
      },
      {
        link: `https://bsky.app/profile/rodydavis.com`,
        src: "/media/svg/bluesky.svg",
      },
      {
        link: `https://youtube.com/rodydavis`,
        src: "/media/svg/youtube.svg",
      },
      {
        link: `https://github.com/rodydavis`,
        src: "/media/svg/github.svg",
      },
    ];
  }

  builder = computed(
    () => html`
      <header>
        <icon-button @click=${this.toggleMenu.bind(this)}
          >${menu("24px")}</icon-button
        >
        <span class="title">${this.title$}</span>
        <div class="spacer"></div>
        ${this.getSocialLinks().map(
          ({ link, src }) => html`
            <a class="social-link" href=${link} target="_blank" rel="noopener">
              <img src=${src} />
            </a>
          `
        )}
      </header>
    `
  );
}

// github: username: "rodydavis";
// twitter: username: "rodydavis";
// facebook: username: "rodydavisjr";
// instagram: username: "rodydavisjr";
// youtube: username: "rodydavis";
// tiktok: username: "rodydavisjr";
// linkedin: username: "rodydavis";

customElements.define("app-header", AppHeader);
