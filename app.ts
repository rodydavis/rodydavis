import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  TemplateResult,
} from "lit-element";
import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-icon-button";
import "@material/mwc-drawer";
import "@material/mwc-icon";
import "@material/mwc-list/mwc-list.js";
import "@material/mwc-list/mwc-list-item.js";
import { Drawer } from "@material/mwc-drawer";
import "./src/views/graph";
import "./src/components/meta-list";
import "./src/views/home";
import "./src/components/md-view";
import Navigo from "navigo";
import "@material/mwc-tab-bar";
import "@material/mwc-tab";
import "@material/mwc-circular-progress";
import { nothing } from "lit-html";

@customElement("main-app")
export class MainApp extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    * {
      --mdc-theme-primary: navy;
    }
    mwc-top-app-bar-fixed {
      margin: 0px;
      padding: 0px;
    }
    .clickable {
      cursor: pointer;
    }
    .padded {
      padding: 20px;
    }
    footer {
      position: fixed;
      bottom: 0px;
      left: 0px;
      right: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      /* padding-left: 10px;
      padding-right: 10px;
       */
      padding: 5px;
      padding-bottom: 0px;
      padding-top: 10px;
      background-color: WhiteSmoke;
    }
    /* .social-icons > a > img {
      padding: 1px;
    } */
    .social-link {
      text-decoration: none;
    }
    @media screen and (max-width: 600px) {
      #tabs {
        display: none;
      }
    }
    @media screen and (max-height: 500px) {
      footer {
        display: none;
      }
    }
  `;

  @internalProperty()
  _router = new Navigo("https://rodydavis.com/", true);

  async firstUpdated() {
    document.addEventListener("DOMContentLoaded", (event) => {
      this.setupRouter();
      const drawer = this.shadowRoot.getElementById("menu");
      if (drawer) {
        const container = drawer.parentNode;
        container.addEventListener("MDCTopAppBar:nav", () => {
          if (drawer instanceof Drawer) {
            drawer.open = !drawer.open;
            this.requestUpdate();
          }
        });
      }
    });
  }

  @internalProperty()
  _content: TemplateResult = html``;

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
    route: string
  ): TemplateResult {
    return html` <mwc-list-item
      graphic="avatar"
      @click=${() => this._router.navigate(route)}
    >
      <span>${label}</span>
      <mwc-icon slot="graphic">${icon}</mwc-icon>
    </mwc-list-item>`;
  }

  fullscreen = false;

  private setupRouter() {
    var useHash = true;
    this._router.on({
      graph: () => this.setContent("graph"),
      about: () => this.setContent("about"),
      "privacy-policy": () => this.setContent("privacy-policy"),
      "/apps": () => this.setContent("apps"),
      "/apps/:id": (params, query) => {
        this.setContent("apps", params.id);
      },

      "/blog": () => {
        this.setContent("blog");
      },
      "/blog/:id": (params, query) => {
        this.setContent("blog", params.id);
      },
      "/stories": () => {
        this.setContent("stories");
      },
      "/stories/:id": (params, query) => {
        this.setContent("stories", params.id);
      },
      "*": () => this.setContent("home"),
    });
    this._router.notFound(function (query) {
      this.setContent("unknown");
    });
    this._router.resolve();
    // console.log("set up router with hash:", useHash);
  }

  private setContent(url: string, id: string | undefined = undefined) {
    this.fullscreen = false;
    switch (url) {
      case "about":
        this.activeIndex = 2;
        this._content = this.buildContent(
          html` <md-view src="./about.md"></md-view>`,
          { tabBar: true, footer: true }
        );
        break;
      case "apps":
        if (id) {
          this._content = html`<meta-list folder="apps" id=${id}></meta-list>`;
        } else {
          this._content = html`<meta-list folder="apps"></meta-list>
            <p class="privacy-policy padded">
              <a href="/#/privacy-policy">Privacy Policy</a>
            </p>`;
        }
        break;
      case "graph":
        this._content = html`<personal-graph></personal-graph>`;
        break;
      case "blog":
        this.activeIndex = 1;
        if (id) {
          this._content = html`<meta-list
            comments
            folder="blog"
            id=${id}
          ></meta-list>`;
        } else {
          this._content = this.buildContent(
            html`<meta-list comments folder="blog"></meta-list>
              <p class="rss-subscribe padded">
                subscribe <a href="/feed.xml">via RSS</a>
              </p>`,
            {
              tabBar: true,
              footer: true,
            }
          );
        }
        break;
      case "privacy-policy":
        this._content = html` <md-view src="./${url}.md"></md-view>`;
        break;
      case "stories":
        if (id) {
          this.fullscreen = true;
          this._content = html`<meta-list
            folder="${url}"
            id=${id}
          ></meta-list>`;
        } else {
          this._content = html`<meta-list folder="${url}"></meta-list> `;
        }
        break;
      case "home":
      default:
        this.activeIndex = 0;
        this._content = this.buildContent(html`<home-page></home-page>`, {
          tabBar: true,
          footer: true,
        });
        break;
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <mwc-drawer id="menu" type="modal">
        <div id="drawer-content">
          <mwc-list>
            ${this._drawerItem("home", "Home", "/")}
            ${this._drawerItem("import_contacts", "Blog", "/blog")}
            ${this._drawerItem("grid_on", "Apps", "/apps")}
            ${this._drawerItem("info", "About", "/about")}
            ${this._drawerItem("list", "Stories", "/stories")}
            ${this._drawerItem("insights", "Graph", "/graph")}
          </mwc-list>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar-fixed>
            <mwc-icon-button
              icon="menu"
              slot="navigationIcon"
              @click=${() => {
                const drawer: Drawer = document.querySelector("#menu");
                if (drawer) {
                  const container = drawer.parentNode;
                  const toggle = () => {
                    drawer.open = !drawer.open;
                  };
                  container.addEventListener("MDCTopAppBar:nav", toggle);
                  container.removeEventListener("MDCTopAppBar:nav", toggle);
                }
              }}
            ></mwc-icon-button>
            <div
              class="clickable"
              @click=${() => this._router.navigate("/")}
              slot="title"
            >
              Rody Davis
            </div>

            <mwc-icon-button
              icon="insights"
              slot="actionItems"
              @click=${() => this._router.navigate("/graph")}
            ></mwc-icon-button>

            <main>${this._content}</main>
          </mwc-top-app-bar-fixed>
        </div>
      </mwc-drawer>
    `;
  }

  private buildContent(
    content: TemplateResult,
    options: { tabBar: boolean; footer: boolean }
  ): TemplateResult {
    return html` ${options.tabBar ? this.buildTabBar() : nothing}
      <div class="content">${content}</div>
      ${options.footer ? this.buildFooter() : nothing}`;
  }

  activeIndex: number = 0;
  buildTabBar(): TemplateResult {
    return html`
      <div id="tabs">
        <mwc-tab-bar activeIndex="${this.activeIndex}">
          <mwc-tab
            label="Home"
            @click=${() => {
              this._router.navigate("/");
            }}
          ></mwc-tab>
          <mwc-tab
            label="Blog"
            @click=${() => {
              this._router.navigate("/blog");
            }}
          ></mwc-tab>
          <mwc-tab
            label="About"
            @click=${() => {
              this._router.navigate("/about");
            }}
          ></mwc-tab>
        </mwc-tab-bar>
      </div>
    `;
  }

  buildFooter(): TemplateResult {
    return html` <footer>
      <div class="social-icons">
        ${this._socialIcon("github", "https://github.com/rodydavis")}
        ${this._socialIcon("twitter", "https://twitter.com/rodydavis")}
        ${this._socialIcon("youtube", "https://youtube.com/rodydavis")}
        ${this._socialIcon("instagram", "https://instagram.com/rodydavisjr")}
        ${this._socialIcon(
          "facebook",
          "https://facebook.com/rodydavisjr"
        )}${this._socialIcon(
          "linkedin",
          "https://www.linkedin.com/in/rodydavis"
        )}
        ${this._socialIcon("tiktok", "https://tiktok.com/@rodydavisjr")}
        ${this._socialIcon("email", "mailto:rody.davis.jr@gmail.com")}
      </div>

      <!-- <p>Copyright 2020 Rody Davis</p> -->
    </footer>`;
  }
}
