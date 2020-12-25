import { css, customElement, html, LitElement, property } from 'lit-element';
import { nothing } from 'lit-html';
import type { PostMeta } from 'src/utils/meta';
import './mwc-chip';

@customElement('meta-list')
export class MetaList extends LitElement {
  @property() folder: string = 'blog';

  private _meta:
    | {
        items: PostMeta[];
        folders: string[];
      }
    | undefined;

  static styles = css`
    .privacy-policy {
      padding: 10px;
    }
    .md-chips {
      padding-bottom: 2px;
    }
    .cards {
      width: calc(100% - 40px);
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
    .filters {
      width: calc(100% - 40px);
      overflow-x: scroll;
      padding-left: 20px;
      padding-top: 10px;
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
  allFilters: string[] = [];
  filters: string[] = [];

  render() {
    if (!this._meta) {
      fetch(`./${this.folder}/info.json`)
        .then((res) => res.text())
        .then((data) => {
          this._meta = JSON.parse(data);
          this.allFilters = [];
          if (this._meta?.items) {
            for (const post of this._meta.items) {
              if (post.categories) {
                for (const tag of post.categories) {
                  if (!this.allFilters.includes(tag)) {
                    this.allFilters.push(tag);
                  }
                }
              }
            }
          }
          this.requestUpdate();
        });
    }
    const filteredPosts: PostMeta[] = [];
    if (this._meta) {
      if (this.filters.length > 0) {
        for (const item of this._meta.items) {
          if (item.categories) {
            for (const cat of item.categories) {
              if (this.filters.includes(cat)) {
                if (!filteredPosts.includes(item)) {
                  filteredPosts.push(item);
                }
              }
            }
          }
        }
      } else {
        for (const item of this._meta.items) {
          filteredPosts.push(item);
        }
      }
    }
    return html`
      ${this._meta
        ? html`
            <div class="filters">
              ${this.allFilters.map(
                (item) => html`<mwc-chip
                  label=${item}
                  clickable
                  ?selected=${this.filters.includes(item)}
                  @click=${() => {
                    if (this.filters.includes(item)) {
                      const index = this.filters.indexOf(item);
                      if (index > -1) this.filters.splice(index, 1);
                    } else {
                      this.filters.push(item);
                    }
                    this.requestUpdate();
                  }}
                ></mwc-chip>`,
              )}
            </div>
            <div class="cards">
              ${filteredPosts
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
                      <!-- <p>${p.date || 'unknown'}</p> -->
                      ${p.timeToRead ? html`<p>${p.timeToRead}</p>` : nothing}
                    </div>
                  </div>`,
                )}
              ${this._meta.folders.map(
                (p) => html`<div
                  class="card"
                  @click=${() => {
                    window.location.assign(`/${this.folder}/${p}`);
                  }}
                >
                  <div class="container">
                    <h4><b>${p}</b></h4>
                  </div>
                </div>`,
              )}
            </div>
          `
        : html`<mwc-circular-progress indeterminate></mwc-circular-progress>`}
    `;
  }
}
