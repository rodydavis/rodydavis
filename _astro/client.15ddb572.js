import{h as f,P as S}from"./preact.module.fd86da4c.js";const v="modulepreload",y=function(e){return"/"+e},m={},k=function(l,r,i){if(!r||r.length===0)return l();const c=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=y(n),n in m)return;m[n]=!0;const s=n.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!i)for(let a=c.length-1;a>=0;a--){const u=c[a];if(u.href===n&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const t=document.createElement("link");if(t.rel=s?"stylesheet":v,s||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),s)return new Promise((a,u)=>{t.addEventListener("load",a),t.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>l())},_=({value:e,name:l})=>e?f("astro-slot",{name:l,dangerouslySetInnerHTML:{__html:e}}):null;_.shouldComponentUpdate=()=>!1;var g=_;const h=new Map;var R=e=>async(l,r,{default:i,...c})=>{if(!e.hasAttribute("ssr"))return;for(const[s,o]of Object.entries(c))r[s]=f(g,{value:o,name:s});if(e.dataset.preactSignals){const{signal:s}=await k(()=>import("./signals.module.c50869a9.js"),["_astro/signals.module.c50869a9.js","_astro/preact.module.fd86da4c.js","_astro/hooks.module.ae4b1a91.js"]);let o=JSON.parse(e.dataset.preactSignals);for(const[d,t]of Object.entries(o)){if(!h.has(t)){const a=s(r[d]);h.set(t,a)}r[d]=h.get(t)}}S(f(l,r,i!=null?f(g,{value:i}):i),e)};export{R as default};
