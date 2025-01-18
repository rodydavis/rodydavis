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
      :root {
        --yellow: hsl(47, 88%, 63%);
        --white: hsl(0, 0%, 100%);
        --grey: hsl(0, 0%, 50%);
        --black: hsl(0, 0%, 7%);
      }
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
      .wrapper {
        display: grid;
        max-width: 380px;
        padding: 1.25rem;
        border: 1px solid black;
        border-radius: 1rem;
        background-color: var(--white);
        box-shadow: 10px 10px 0px -3px rgba(0, 0, 0, 1);
        img {
          display: block;
          width: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          max-height: 400px;
        }
        button {
          background-color: var(--yellow);
          padding: 0.5rem 1rem;
          margin: 1rem 0;
          border-radius: 0.25rem;
          border: none;
          &:hover {
            cursor: pointer;
            background-color: var(--black);
            color: var(--white);
          }
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          &:hover {
            color: var(--yellow);
            cursor: pointer;
          }
        }
        p {
          line-height: 1.5;
          color: var(--grey);
          padding: 0.5rem 0rem;
          font-weight: 300;
        }
        .user_profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1.5rem;
          img {
            width: 10%;
          }
        }
      }
      @media (max-width: 768px) {
        .wrapper {
          max-width: 100%;
          height: 100%;
          margin: 0 1rem;
        }
      }
      .tags {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
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
