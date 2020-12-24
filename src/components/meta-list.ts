import { css, customElement, html, LitElement, property } from 'lit-element';
import type { PostMeta } from 'src/utils/meta';

@customElement('meta-list')
export class MetaList extends LitElement {
  @property() folder: string = 'blog';

  private _posts:
    | {
        items: PostMeta[];
      }
    | undefined;

  static styles = css`
    .privacy-policy {
      padding: 10px;
    }
    .cards {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: auto;
      grid-gap: 1rem;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card > img {
      height: 200px;
      object-fit: cover;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
      flex: 1fr;
      padding: 2px 16px;
    }
    @media screen and (min-width: 400px) {
      .cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (min-width: 600px) {
      .cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media screen and (min-width: 800px) {
      .cards {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    @media screen and (min-width: 1000px) {
      .cards {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  `;

  render() {
    if (!this._posts) {
      fetch(`./${this.folder}/info.json`)
        .then((res) => res.text())
        .then((data) => {
          this._posts = JSON.parse(data);
          this.requestUpdate();
        });
    }
    return html`
      ${this._posts
        ? html`
            <div class="cards">
              ${this._posts.items
                .sort((a, b) => {
                  if (a.date && b.date) {
                    if (a.date > b.date) return -1;
                    if (a.date > b.date) return 1;
                  }
                  return 0;
                })
                .map(
                  (p) => html`<div
                    class="card"
                    @click=${() => {
                      window.location.assign(`/${this.folder}/${p.id}`);
                    }}
                  >
                    <img
                      src=${p?.image || `images/banner.jpeg`}
                      alt="Avatar"
                      style="width:100%"
                    />
                    <div class="container">
                      <h4><b>${p.title || p.id}</b></h4>
                      <p>${p.date || 'unknown'}</p>
                    </div>
                  </div>`,
                )}
            </div>
          `
        : html`<mwc-circular-progress indeterminate></mwc-circular-progress>`}
    `;
  }
}
