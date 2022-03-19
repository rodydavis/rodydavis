/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a;function r(){if(a===void 0){const n=document.createElement("div");n.innerHTML='<div><template shadowroot="open"></template></div>',a=!!n.firstElementChild.shadowRoot}return a}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=n=>n.parentElement===null,h=n=>n.tagName==="TEMPLATE",c=n=>n.nodeType===Node.ELEMENT_NODE;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=n=>{var o;if(r())return;const d=[];let e=n.firstElementChild;for(;e!==n&&e!==null;)if(h(e))d.push(e),e=e.content;else if(e.firstElementChild!==null)e=e.firstElementChild;else if(c(e)&&e.nextElementSibling!==null)e=e.nextElementSibling;else{let t;for(;e!==n&&e!==null;)if(m(e)){t=d.pop();const i=t.parentElement,l=t.getAttribute("shadowroot");if(e=t,l==="open"||l==="closed"){const s=t.hasAttribute("shadowrootdelegatesfocus");try{i.attachShadow({mode:l,delegatesFocus:s}).append(t.content)}catch{}}else t=void 0}else{const i=e.nextElementSibling;if(i!=null){e=i,t!==void 0&&t.parentElement.removeChild(t);break}const l=(o=e.parentElement)===null||o===void 0?void 0:o.nextElementSibling;if(l!=null){e=l,t!==void 0&&t.parentElement.removeChild(t);break}e=e.parentElement,t!==void 0&&(t.parentElement.removeChild(t),t=void 0)}}};export{r as hasNativeDeclarativeShadowRoots,f as hydrateShadowRoots};
