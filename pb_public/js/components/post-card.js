import { computed } from "@preact/signals-core";
import { css, html } from "lit";
import { mix } from "/js/mixwith.js";
import { LitTemplateMixin, ShadowRootMixin } from "/js/mixins.js";
import "/js/components/icon-button.js";

export class PostCard extends mix(HTMLElement).with(
  LitTemplateMixin,
  ShadowRootMixin
) {
  img$ = this.attr("img", "");
  link$ = this.attr("link", "");
  type$ = this.attr("type", "");
  author$ = this.attr("author", "");
  avatar$ = this.attr("avatar", "");
  date$ = this.attr("date", "");
  title$ = this.attr("title", "");
  description$ = this.attr("description", "");

  //   tagsList$ = computed(() => {
  //     const str = this.tags$.value;
  //     const json = JSON.parse(str);
  //     return json;
  //   });

  styles = computed(
    () => css`
      * {
        box-sizing: border-box;
        font-family: "Figtree", sans-serif;
        padding: 0;
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .wrapper { /* This is the <a> tag */
        display: flex;
        flex-direction: column;
        height: 100%; /* Fill allocated space by masonry item */
        width: 100%; /* Take full width of masonry item */
        padding: 1.25rem;
        border: 1px solid var(--theme-sys-color-outline);
        border-radius: 1rem;
        background-color: var(--theme-sys-color-surface-container-lowest);
        box-shadow: 6px 6px 0px 0px var(--theme-sys-color-primary);
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
          box-shadow: 8px 8px 0px 0px var(--theme-sys-color-primary-container);
        }

        img {
          display: block;
          width: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          max-height: 200px; /* Max height for the image */
        }

        & > section { /* Targets the <section> holding content */
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Allows section to grow and push tags down */
          padding-top: 1rem; /* Space below image or at top of card content */
        }

        button { /* Type button */
          background-color: var(--theme-sys-color-primary-container);
          color: var(--theme-sys-color-on-primary-container);
          padding: 0.5rem 1rem;
          margin-bottom: 1rem; /* Space below button */
          border-radius: 0.25rem;
          border: none;
          align-self: flex-start; /* Prevent stretching */
          &:hover {
            cursor: pointer;
            background-color: var(--theme-sys-color-primary);
            color: var(--theme-sys-color-on-primary);
          }
        }

        h3 { /* Title */
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--theme-sys-color-on-surface);
          margin-top: 0.5rem; /* Adjusted spacing */
          margin-bottom: 0.5rem; /* Adjusted spacing */
          &:hover {
            color: var(--theme-sys-color-primary);
            cursor: pointer;
          }
        }

        p { /* Date and Description */
          line-height: 1.5;
          color: var(--theme-sys-color-on-surface-variant);
          font-weight: 400; /* Regular weight */
        }
        
        /* Assuming date is the first <p> directly in <section> if type button is not present, or after button */
        /* Description <p> styling (if it's the one after title) */
        h3 + p { /* Targets a p directly after h3, likely description */
            margin-bottom: 1rem; /* Space before user profile or tags */
        }


        .user_profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem; /* Space above user profile */
          img { /* Avatar */
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
          h4 { /* Author name */
            color: var(--theme-sys-color-on-surface-variant);
            font-weight: 500; /* Medium weight */
          }
        }
      } /* End of .wrapper */

      /* Media query for responsiveness inside card if needed, masonry handles overall layout */
      @media (max-width: 480px) { /* Example: adjust padding on very small cards */
        .wrapper {
          padding: 1rem;
          h3 {
            font-size: 1.25rem;
          }
        }
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto; /* Pushes tags to the bottom of the flex section */
        padding-top: 1rem; /* Space above tags */
      }
    `
  );

  builder = computed(
    () => html`
      <a href=${this.link$} class="wrapper">
        ${this.img$.value &&
        html`<img src=${this.img$} alt="illustration-article" />`}
        <section>
          ${this.type$.value && html`<button>${this.type$}</button>`}
          <p>${new Date(Date.parse(this.date$)).toLocaleDateString("en-US")}</p>
          <h3>${this.title$}</h3>
          ${this.description$.value && html`<p>${this.description$}</p>`}
          ${(this.author$.value || this.avatar$.value) &&
          html`<div class="user_profile">
            <img src=${this.avatar$} alt="image-avatar" />
            <h4>${this.author$}</h4>
          </div>`}
          <div class="tags">
            <slot name="tags"></slot>
          </div>
        </section>
      </a>
    `
  );
}

customElements.define("post-card", PostCard);
