import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./tag-list";

export const tagName = "post-preview";

@customElement(tagName)
export class PostPreview extends LitElement {
  static styles = css`
    .content :global(main > * + *) {
      margin-top: 1rem;
    }
    header {
      grid-area: header;
      padding: 1rem;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 2rem;
      text-align: left;
    }

    .title,
    .author,
    .publish-date {
      margin: 0;
    }

    .publish-date,
    .author {
      font-size: 1.25rem;
      color: var(--md-sys-color-on-surface);
    }

    .title {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--md-sys-color-on-surface);
    }

    a {
      text-decoration: none;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }

    .tag {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.25rem 0.5rem;
      background-color: var(--md-sys-color-tertiary);
      color: var(--md-sys-color-on-tertiary);
      border-radius: 8px;
    }

    .card {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-areas:
        "header header"
        "preview preview";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-gap: 1rem;
      border-radius: 20px;
      align-items: center;
      cursor: pointer;
    }

    img {
      grid-area: preview;
      width: 100%;
      height: var(--image-height);
      object-fit: cover;
      border-radius: 4px;
      display: none;
      margin: 0.5rem;
    }
    .card:hover {
      border: 1px solid var(--md-sys-color-outline);
    }

    @media (hover: none) {
      .card {
        border: 1px solid var(--md-sys-color-outline);
      }
    }

    @media (min-width: 768px) {
      .card {
        grid-template-areas:
          "header header preview"
          "header header preview";
        grid-template-columns: 1fr 400px;
        grid-template-rows: auto 200px;
      }

      img {
        width: 400px;
        display: block;
      }
    }
  `;

  @property({ type: Object }) post: Post;

  render() {
    const post = this.post;
    return html`<a href=${post.url}>
      <div class="card">
        <header>
          <p class="publish-date">${post.publishDate}</p>
          <h1 class="title">${post.title}</h1>
          <tag-list ?card=${post.card} .tags=${post.tags}> </tag-list>
        </header>
        ${post.image ? html`<img src="${post.image}" />` : ""}
      </div>
    </a>`;
  }
}

export interface Post {
  title: string;
  url: string;
  tags: string[];
  publishDate: string;
  image?: string;
  card?: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    "post-preview": PostPreview;
  }
}
