import{r as h,e as p,s as f,$ as s,n as m}from"./client-shim.6d491e7a.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(r,t,o,i)=>{for(var e=i>1?void 0:i?y(t,o):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(e=(i?n(t,o,e):n(e))||e);return i&&e&&u(t,o,e),e};let l=class extends f{constructor(){super(...arguments);this.icon="add",this.href=""}render(){return this.href?s`
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
  `;d([p({type:String})],l.prototype,"icon",2);d([p({type:String})],l.prototype,"href",2);l=d([m("icon-button")],l);var x=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(r,t,o,i)=>{for(var e=i>1?void 0:i?g(t,o):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(e=(i?n(t,o,e):n(e))||e);return i&&e&&x(t,o,e),e};const b="app-header";let c=class extends f{constructor(){super(...arguments);this.title=document.title}render(){let r=!1;try{r=navigator.canShare()}catch{r=!1}const t=(this.title||"").trim();return s`
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-css/top-app-bar/style.css"
      />
      <header class="top-app-bar">
        <h1 class="title">
          <a href="/">
            <div class="title-prefix">Rody Davis</div>
            ${t!=="Rody Davis"?s`<div class="title-prefix">&nbsp;|&nbsp;</div>
                  <div class="title-details">${t}</div>`:s``}
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
          ${r?s` <icon-button
                @click=${this.share}
                icon="share"
              ></icon-button>`:s``}
        </div>
      </header>
    `}share(){const t=new URL(window.location.href).toString(),o=`${t}`,i=`${t}`;navigator.share&&navigator.share({text:o,title:i}).catch(e=>{console.error(e)})}};c.styles=h`
    header {
      --input-size: 32px;
      font-family: "Roboto", sans-serif;
    }
    .spacer {
      flex: 1;
    }
    .title {
      display: block;
      white-space: nowrap;
      overflow: hidden;
    }
    .title-prefix {
      display: block;
    }
    .title-details {
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
  `;v([p()],c.prototype,"title",2);c=v([m(b)],c);export{c as AppHeader,b as tagName};
