import{r as f,e as d,s as u,$ as s,n as g,t as y,a as v,b}from"./client-shim.751854cd.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(e,t,i,o)=>{for(var r=o>1?void 0:o?x(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&w(t,i,r),r};let c=class extends u{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?s`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `:s`
      <div class="icon">
        <i class="material-icons">${this.icon}</i>
      </div>
    `}};c.styles=f`
    .icon {
      --icon-size: 24px;
      --icon-padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      user-select: none;
      color: var(--icon-color);
    }
    .icon:hover {
      outline: 1px solid var(--md-sys-color-outline);
    }
    .icon :first-child {
      padding: var(--icon-padding);
    }
    .material-icons {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      font-size: var(--icon-size);
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: "liga";
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;p([d({type:String})],c.prototype,"icon",2);p([d({type:String})],c.prototype,"href",2);c=p([g("icon-button")],c);var k=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(e,t,i,o)=>{for(var r=o>1?void 0:o?$(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&k(t,i,r),r};const _="app-header";let l=class extends u{constructor(){super(...arguments);this.dark=localStorage.getItem("theme-dark")==="true",this.color=localStorage.getItem("theme-color")||m(),this.title=document.title}render(){let e=!1;try{e=navigator.canShare()}catch{e=!1}return s`<header class="wrapper">
      <article>
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${this.title.trim()!=="Rody Davis"?s`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div>${this.title}</div>`:s``}
          </a>
        </h1>
        <div class="spacer"></div>
        <div class="links">
          <a href="/apps"> Apps </a>
          <a href="/posts"> Blog </a>
          <a href="/talks"> Talks </a>
          <a href="/about"> About </a>
        </div>
        <div class="actions">
          <input
            type="color"
            .value=${this.color}
            @input=${this.onColor.bind(this)}
          />
          <icon-button
            @click=${this.randomColor.bind(this)}
            icon="shuffle"
          ></icon-button>
          <icon-button
            @click=${this.toggle.bind(this)}
            icon="${this.dark?"light_mode":"dark_mode"}"
          ></icon-button>
          ${e?s` <icon-button
                @click=${this.share.bind(this)}
                icon="share"
              ></icon-button>`:s``}
        </div>
      </article>
    </header>`}share(){const t=new URL(window.location.href).toString(),i=`${t}`,o=`${t}`;navigator.share&&navigator.share({text:i,title:o}).catch(r=>{console.error(r)})}toggle(){this.dark=!this.dark,localStorage.setItem("theme-dark",this.dark.toString()),this.updateTheme()}setColor(e){this.color=e,localStorage.setItem("theme-color",e),this.updateTheme()}onColor(e){const t=e.target;this.setColor(t.value)}randomColor(){this.setColor(m())}updateTheme(){const e=this.color,t=this.dark;this.dark?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const i=this.shadowRoot.querySelector("main"),o=y(v(e));b(o,{target:i,dark:t})}firstUpdated(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme-dark")??e.matches.toString();this.dark=t==="true",this.dark&&document.body.classList.add("dark-theme"),this.updateTheme(),e.addEventListener("change",i=>{this.dark=i.matches,this.updateTheme()})}};l.styles=f`
    header {
      width: 100%;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      display: flex;
      align-items: center;
      --input-size: 32px;
    }

    .spacer {
      flex: 1;
    }

    .title {
      display: none;
    }

    .title-prefix {
      display: none;
    }

    @media (min-width: 200px) {
      .title {
        display: block;
      }
    }

    @media (min-width: 300px) {
      .title-prefix {
        display: block;
      }
    }

    article {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    img {
      margin-right: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      max-width: 100%;
      display: flex;
      flex-grow: 1;
    }

    .logo {
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    a {
      text-decoration: none;
      display: inline-flex;
      color: var(--md-sys-color-on-primary-container);
      margin-right: 1rem;
    }

    icon-button {
      margin-left: 3px;
    }

    .actions {
      display: flex;
      align-items: center;
    }

    input[type="color"] {
      width: calc(var(--input-size) * 2);
      height: var(--input-size);
      outline: none;
      border: none;
      border-radius: 50%;
      background-color: var(--md-sys-color-primary-container);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: var(--input-size);
      border: var(--md-sys-color-outline) solid 1px;
    }

    .links {
      display: none;
    }

    @media (min-width: 600px) {
      .links {
        display: flex;
      }
    }

    .title a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .title a div {
      white-space: nowrap;
    }
  `;h([d({type:Boolean})],l.prototype,"dark",2);h([d()],l.prototype,"color",2);h([d()],l.prototype,"title",2);l=h([g(_)],l);function m(){const e="0123456789ABCDEF";let t="#";for(let i=0;i<6;i++)t+=e[Math.floor(Math.random()*16)];return t}export{l as AppHeader,_ as tagName};
