import{r as f,e as h,s as g,$ as l,n as u,t as v,i as y,a as w,b,c as x}from"./client-shim.70661ac8.js";var k=Object.defineProperty,$=Object.getOwnPropertyDescriptor,p=(e,t,o,r)=>{for(var i=r>1?void 0:r?$(t,o):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&k(t,o,i),i};let d=class extends g{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?l`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `:l`
      <div class="icon">
        <i class="material-icons">${this.icon}</i>
      </div>
    `}};d.styles=f`
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
  `;p([h({type:String})],d.prototype,"icon",2);p([h({type:String})],d.prototype,"href",2);d=p([u("icon-button")],d);var O=Object.defineProperty,S=Object.getOwnPropertyDescriptor,c=(e,t,o,r)=>{for(var i=r>1?void 0:r?S(t,o):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&O(t,o,i),i};const _="app-header";let s=class extends g{constructor(){super(...arguments);this.dark=localStorage.getItem("theme-dark")==="true",this.color=localStorage.getItem("theme-color")||m(),this.title=document.title,this.showOptions=!1}render(){let e=!1;try{e=navigator.canShare()}catch{e=!1}const t=(this.title||"").trim();return l`<header class="wrapper">
        <article>
          <h1 class="title">
            <a href="/">
              <div class="title-prefix">Rody Davis</div>
              ${t!=="Rody Davis"?l`<div class="title-prefix">&nbsp;|&nbsp;</div>
                    <div class="title-details">${t}</div>`:l``}
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
            <icon-button
              @click=${this.toggleOptions}
              icon="palette"
            ></icon-button>
            ${e?l` <icon-button
                  @click=${this.share}
                  icon="share"
                ></icon-button>`:l``}
          </div>
        </article>
      </header>
      <dialog
       id="theme-options" @close=${()=>this.showOptions=!1}>
        <div class="wrapper">
          <div>
            <h2 class="theme-options">Theme Options</h2>
          </div>
          <div class="row">
            <label for="source">Source Color</label>
            <input
              id="source"
              type="color"
              .value=${this.color}
              @input=${this.onColor}
            />
          </div>
          <div class="row">
            <label for="shuffle">Shuffle</label>
            <icon-button
              id="shuffle"
              @click=${this.randomColor}
              icon="shuffle"
            ></icon-button>
          </div>
          <div class="row">
            <label for="brightness">Brightness</label>
            <icon-button
              id="brightness"
              @click=${this.toggle}
              icon="${this.dark?"light_mode":"dark_mode"}"
            ></icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`}toggleOptions(){this.showOptions=!this.showOptions,this.showOptions&&this.options.showModal()}share(){const t=new URL(window.location.href).toString(),o=`${t}`,r=`${t}`;navigator.share&&navigator.share({text:o,title:r}).catch(i=>{console.error(i)})}toggle(){this.dark=!this.dark,localStorage.setItem("theme-dark",this.dark.toString()),this.updateTheme()}setColor(e){this.color=e,localStorage.setItem("theme-color",e),this.updateTheme()}onColor(e){const t=e.target;this.setColor(t.value)}randomColor(){this.setColor(m())}updateTheme(){const e=this.color,t=this.dark;this.dark?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const o=this.shadowRoot.querySelector("main"),r=w(b(e));x(r,{target:o,dark:t})}firstUpdated(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme-dark")??e.matches.toString();this.dark=t==="true",this.dark&&document.body.classList.add("dark-theme"),this.updateTheme(),e.addEventListener("change",o=>{this.dark=o.matches,this.updateTheme()})}};s.styles=f`
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

    .title-details {
      max-width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (min-width: 200px) {
      .title {
        display: block;
      }
    }

    @media (min-width: 700px) {
      .title-prefix {
        display: block;
      }
      .title-details {
        max-width: 350px;
      }
    }
    @media (min-width: 900px) {
      .title-details {
        max-width: 450px;
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

    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    .row icon-button,
    .row input {
      margin-left: 10px;
    }

    .theme-options {
      font-size: 1.5rem;
    }
  `;c([h({type:Boolean})],s.prototype,"dark",2);c([h()],s.prototype,"color",2);c([h()],s.prototype,"title",2);c([v()],s.prototype,"showOptions",2);c([y("#theme-options")],s.prototype,"options",2);s=c([u(_)],s);function m(){const e="0123456789ABCDEF";let t="#";for(let o=0;o<6;o++)t+=e[Math.floor(Math.random()*16)];return t}export{s as AppHeader,_ as tagName};
