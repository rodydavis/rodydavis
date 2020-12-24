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
      .social-link {
        text-decoration: none;
      }
      .social-icons {
        width: 100%;
        text-align: center;
        padding-right: 10px;
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
            ${this.buildSocial()}
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
      class="action"
      @click=${() => this.navigate(route)}
    >
      ${label}
    </button>`;
  }

  private buildSocial(): TemplateResult {
    return html` <div class="social-icons">
      ${this._socialIcon('github', 'https://github.com/rodydavis')}
      ${this._socialIcon('twitter', 'https://twitter.com/rodydavis')}
      ${this._socialIcon('youtube', 'https://youtube.com/rodydavis')}
      ${this._socialIcon('instagram', 'https://instagram.com/rodydavisjr')}
      ${this._socialIcon(
        'facebook',
        'https://facebook.com/rodydavisjr',
      )}${this._socialIcon('linkedin', 'https://www.linkedin.com/in/rodydavis')}
      ${this._socialIcon('tiktok', 'https://tiktok.com/@rodydavisjr')}
      ${this._socialIcon('email', 'mailto:rody.davis.jr@gmail.com')}
    </div>`;
  }

  private menuItem(label: string, route: string): TemplateResult {
    return html` <button @click=${() => (window.location.href = route)}>
      ${label}
    </button>`;
  }

  private _socialIcon(icon: string, link: string): TemplateResult {
    const size = 25;
    return html` <a class="social-link" href="${link}" target="_blank">
      <img
        width="${size}"
        height="${size}"
        slot="actionItems"
        src="/images/social/${icon}.svg"
        slot="onIcon"
      />
    </a>`;
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
