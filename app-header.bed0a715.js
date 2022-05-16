import{r as h,e as d,s as m,$ as s,n as f}from"./client-shim.6d491e7a.js";var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(r,t,n,i)=>{for(var e=i>1?void 0:i?x(t,n):t,a=r.length-1,o;a>=0;a--)(o=r[a])&&(e=(i?o(t,n,e):o(e))||e);return i&&e&&v(t,n,e),e};let l=class extends m{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?s`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `:s`
      <div class="icon">
        <i class="material-icons">${this.icon}</i>
      </div>
    `}};l.styles=h`
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
  `;p([d({type:String})],l.prototype,"icon",2);p([d({type:String})],l.prototype,"href",2);l=p([f("icon-button")],l);var y=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=(r,t,n,i)=>{for(var e=i>1?void 0:i?u(t,n):t,a=r.length-1,o;a>=0;a--)(o=r[a])&&(e=(i?o(t,n,e):o(e))||e);return i&&e&&y(t,n,e),e};const w="app-header";let c=class extends m{constructor(){super(...arguments);this.title=document.title}render(){let r=!1;try{r=navigator.canShare()}catch{r=!1}const t=(this.title||"").trim();return s`<header class="wrapper">
      <article>
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${t!=="Rody Davis"?s`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div class="title-details">${t}</div>`:s``}
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
          <material-theme-control></material-theme-control>
          ${r?s` <icon-button
                @click=${this.share}
                icon="share"
              ></icon-button>`:s``}
        </div>
      </article>
    </header> `}share(){const t=new URL(window.location.href).toString(),n=`${t}`,i=`${t}`;navigator.share&&navigator.share({text:n,title:i}).catch(e=>{console.error(e)})}};c.styles=h`
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
      display: block;
    }

    .title-prefix {
      display: block;
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
    a:hover {
      text-decoration: underline;
    }
    a icon-button {
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
  `;g([d()],c.prototype,"title",2);c=g([f(w)],c);export{c as AppHeader,w as tagName};
