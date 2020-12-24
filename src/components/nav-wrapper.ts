import {
  customElement,
  property,
  LitElement,
  html,
  css,
  TemplateResult,
  query,
} from 'lit-element';

import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-icon';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import type { Drawer } from '@material/mwc-drawer';

@customElement('nav-wrapper')
export class NavWrapper extends LitElement {
  @property() title = 'Website';
  @property({ type: Boolean }) fixed = true;
  @property({ type: Boolean }) showHeader = true;

  static get styles() {
    return css`
      * {
        --header-height: 45px;
        --mdc-theme-primary: navy;
      }
      .action {
        cursor: pointer;
      }
      .actionItems > button {
        background-color: inherit;
        color: white;
        font-size: 16px;
        border: none;
      }
      header > * {
        padding: 0;
        margin: 0;
      }
      slot {
        grid-area: main;
      }
      mwc-top-app-bar-fixed > button {
        border: none;
        background-color: inherit;
        color: var(--mdc-theme-on-primary);
        font-size: 16px;
      }
      @media screen and (max-width: 400px) {
        .action-menu {
          display: none;
        }
      }
    `;
  }

  navigate(route: string) {
    window.location.href = route;
  }

  _drawer: Drawer | undefined;
  _root: HTMLElement | undefined;

  async firstUpdated() {
    this._drawer = this.shadowRoot?.getElementById('menu') as Drawer;
    this._root = this.shadowRoot?.getElementById('root') as HTMLElement;
    this._root.addEventListener('MDCTopAppBar:nav', () => this.toggleDrawer());
  }

  toggleDrawer() {
    if (this._drawer) {
      this._drawer.open = !this._drawer.open;
    }
  }

  render() {
    return html`
      <div id="root">
        <mwc-drawer id="menu" type="modal">
          <div id="drawer-content">
            <mwc-list>
              ${this._drawerItem('home', 'Home', '/')}
              ${this._drawerItem('import_contacts', 'Blog', '/blog')}
              ${this._drawerItem('grid_on', 'Apps', '/apps')}
              ${this._drawerItem('list', 'Stories', '/stories')}
              ${this._drawerItem('info', 'About', '/about')}
            </mwc-list>
          </div>
          <div slot="appContent">
            <mwc-top-app-bar-fixed>
              <mwc-icon-button
                icon="menu"
                slot="navigationIcon"
              ></mwc-icon-button>
              <div
                class="action"
                @click=${() => this.navigate('/')}
                slot="title"
              >
                Rody Davis
              </div>
              <main>
                <slot></slot>
              </main>
              ${this.appBarMenuItem('/about', 'About')}
              ${this.appBarMenuItem('/apps', 'Apps')}
              ${this.appBarMenuItem('/blog', 'Blog')}
            </mwc-top-app-bar-fixed>
          </div>
        </mwc-drawer>
      </div>
    `;
  }

  private appBarMenuItem(route: string, label: string): TemplateResult {
    return html` <button
      slot="actionItems"
      class="action action-menu"
      @click=${() => this.navigate(route)}
    >
      ${label}
    </button>`;
  }

  private _drawerItem(
    icon: string,
    label: string,
    route: string,
  ): TemplateResult {
    return html` <mwc-list-item
      graphic="avatar"
      @click=${() => this.navigate(route)}
    >
      <span>${label}</span>
      <mwc-icon slot="graphic">${icon}</mwc-icon>
    </mwc-list-item>`;
  }
}
