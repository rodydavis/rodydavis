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

  // Replicating social links from app-header.js for text display
  getSocialLinks() {
    return [
      { name: "Facebook", url: `https://facebook.com/rodydavisjr` },
      { name: "TikTok", url: `https://tiktok.com/@rodydavisjr` },
      { name: "Instagram", url: `https://instagram.com/rodydavisjr` },
      { name: "LinkedIn", url: `https://linkedin.com/in/rodydavis` },
      { name: "Twitter", url: `https://twitter.com/rodydavis` },
      { name: "Bluesky", url: `https://bsky.app/profile/rodydavis.com` },
      { name: "YouTube", url: `https://youtube.com/rodydavis` },
      { name: "GitHub", url: `https://github.com/rodydavis` },
    ];
  }

  builder = computed(
    () => html`
      <footer>
        <div class="footer-content">
          <div class="footer-section links-section">
            <h3>Links</h3>
            <ul>
              <li><a href="/apps">Apps</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/feed.rss">RSS</a></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/graph">Graph</a></li>
            </ul>
          </div>
          <div class="footer-section social-media-section">
            <h3>Social Media</h3>
            <ul>
              ${this.getSocialLinks().map(
                (social) =>
                  html`<li>
                    <a href="${social.url}" target="_blank" rel="noopener"
                      >${social.name}</a
                    >
                  </li>`
              )}
            </ul>
          </div>
          <div class="footer-section copyright-section">
            <h3>Copyright</h3>
            <p>&copy; ${this.copyrightStr} Rody Davis Productions</p>
          </div>
        </div>
      </footer>
    `
  );

  styles = computed(
    () => css`
      footer {
        padding: 40px 20px;
        color: var(--app-footer-text, #333);
        font-size: 0.9rem;
        border-top: 1px solid var(--app-footer-border-color, #e0e0e0);
      }
      .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .footer-section {
        flex: 1;
        min-width: 200px; /* Ensures sections don't get too squeezed */
        padding: 0 15px;
      }
      .footer-section h3 {
        font-size: 1.1em;
        margin-bottom: 15px;
        color: var(--app-footer-heading-color, var(--app-footer-text)); /* Fallback to main text color */
        font-weight: bold;
      }
      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .footer-section ul li {
        margin-bottom: 8px;
      }
      .footer-section a,
      .copyright-section p {
        color: var(--app-footer-link-text, #555);
        text-decoration: none;
      }
      .footer-section a:hover {
        text-decoration: underline;
        color: var(--app-footer-link-hover-text, #007bff);
      }
      .copyright-section {
        text-align: center;
        flex-basis: 100%; /* Makes copyright take full width if it wraps */
        margin-top: 20px;
      }

      @media (min-width: 768px) {
        .footer-content {
          flex-wrap: nowrap; /* Prevent wrapping on larger screens */
          text-align: left;
        }
        .copyright-section {
          text-align: right; /* Align copyright to the right on larger screens */
          margin-top: 0;
          flex-basis: auto; /* Reset basis for flex layout */
        }
        .links-section,
        .social-media-section {
          text-align: left;
        }
      }
    `
  );
}

customElements.define("app-footer", AppFooter);
