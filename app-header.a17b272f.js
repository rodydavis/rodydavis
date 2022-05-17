import{r as h,e as p,s as f,$ as o,n as m}from"./client-shim.6d491e7a.js";var u=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=(r,t,a,i)=>{for(var e=i>1?void 0:i?x(t,a):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(e=(i?s(t,a,e):s(e))||e);return i&&e&&u(t,a,e),e};let l=class extends f{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?o`
        <div class="icon">
          <a href="${this.href}" target="_blank" rel="noopener noreferrer">
            <i class="material-icons">${this.icon}</i>
          </a>
        </div>
      `:o`
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
  `;d([p({type:String})],l.prototype,"icon",2);d([p({type:String})],l.prototype,"href",2);l=d([m("icon-button")],l);var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(r,t,a,i)=>{for(var e=i>1?void 0:i?g(t,a):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(e=(i?s(t,a,e):s(e))||e);return i&&e&&y(t,a,e),e};const w="app-header";let c=class extends f{constructor(){super(...arguments);this.title=document.title}render(){let r=!1;try{r=navigator.canShare()}catch{r=!1}const t=(this.title||"").trim();return o`
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-css/all.css"
      />
      <header class="top-app-bar">
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${t!=="Rody Davis"?o`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div class="title-details">${t}</div>`:o``}
          </a>
        </h1>

        <div class="actions">
          <div class="links">
            <a href="/apps"> Apps </a>
            <a href="/posts"> Blog </a>
            <a href="/talks"> Talks </a>
            <a href="/about"> About </a>
          </div>
          <material-theme-control></material-theme-control>
          ${r?o` <icon-button
                @click=${this.share}
                icon="share"
              ></icon-button>`:o``}
        </div>
      </header>
    `}share(){const t=new URL(window.location.href).toString(),a=`${t}`,i=`${t}`;navigator.share&&navigator.share({text:a,title:i}).catch(e=>{console.error(e)})}};c.styles=h`
    header {
      --input-size: 32px;
    }
    .spacer {
      flex: 1;
    }
    .title {
      display: block;
      white-space: nowrap;
    }
    .title-prefix {
      display: block;
    }
    .title-details {
      max-width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
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
    .links {
      display: none;
      align-items: center;
    }
    @media (min-width: 200px) {
      .title {
        display: block;
      }
    }
    @media (min-width: 600px) {
      .links {
        display: flex;
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
  `;v([p()],c.prototype,"title",2);c=v([m(w)],c);export{c as AppHeader,w as tagName};
