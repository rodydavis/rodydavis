import{r as u,e as d,s as g,$ as l,n as f,t as y,a as v,b}from"./client-shim.751854cd.js";var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,p=(t,e,r,i)=>{for(var o=i>1?void 0:i?k(e,r):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&w(e,r,o),o};let c=class extends g{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?l`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `:l`
      <div class="icon">
        <i class="material-icons">${this.icon}</i>
      </div>
    `}};c.styles=u`
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
  `;p([d({type:String})],c.prototype,"icon",2);p([d({type:String})],c.prototype,"href",2);c=p([f("icon-button")],c);var x=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(t,e,r,i)=>{for(var o=i>1?void 0:i?$(e,r):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(i?n(e,r,o):n(o))||o);return i&&o&&x(e,r,o),o};const _="app-header";let s=class extends g{constructor(){super(...arguments);this.dark=localStorage.getItem("theme-dark")==="true",this.color=localStorage.getItem("theme-color")||m(),this.title=document.title}render(){const t=this.title&&this.title!=="Rody Davis"?`Rody Davis | ${this.title}`:"Rody Davis";let e=!1;try{e=navigator.canShare()}catch{e=!1}return l`<header class="wrapper">
      <article>
        <h1>
          <a href="/">
            <span>${t}</span>
          </a>
        </h1>
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
          ${e?l` <icon-button
                @click=${this.share.bind(this)}
                icon="share"
              ></icon-button>`:l``}
        </div>
      </article>
    </header>`}share(){const e=new URL(window.location.href).toString(),r=`${e}`,i=`${e}`;navigator.share&&navigator.share({text:r,title:i}).catch(o=>{console.error(o)})}toggle(){this.dark=!this.dark,localStorage.setItem("theme-dark",this.dark.toString()),this.updateTheme()}setColor(t){this.color=t,localStorage.setItem("theme-color",t),this.updateTheme()}onColor(t){const e=t.target;this.setColor(e.value)}randomColor(){this.setColor(m())}updateTheme(){const t=this.color,e=this.dark;this.dark?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const r=this.shadowRoot.querySelector("main"),i=y(v(t));b(i,{target:r,dark:e})}firstUpdated(){const t=window.matchMedia("(prefers-color-scheme: dark)"),e=localStorage.getItem("theme-dark")??t.matches.toString();this.dark=e==="true",this.dark&&document.body.classList.add("dark-theme"),this.updateTheme(),t.addEventListener("change",r=>{this.dark=r.matches,this.updateTheme()})}};s.styles=u`
    header {
      width: 100%;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      display: flex;
      align-items: center;
      --input-size: 32px;
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
  `;h([d({type:Boolean})],s.prototype,"dark",2);h([d()],s.prototype,"color",2);h([d()],s.prototype,"title",2);s=h([f(_)],s);function m(){const t="0123456789ABCDEF";let e="#";for(let r=0;r<6;r++)e+=t[Math.floor(Math.random()*16)];return e}export{s as AppHeader,_ as tagName};
