if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"1252c720b0c5de93ed1c5df345ee36a8"},{url:"about/index.html",revision:"8dd38613821349139854f93f36a2d68f"},{url:"apps/hymns-for-worship/index.html",revision:"7b2eadf6b33a6a277d98db217248429b"},{url:"apps/index.html",revision:"2459cbdfabb5fdb25b8f8a7d42818bf5"},{url:"apps/info.json",revision:"03fdca2e3c6cf250e6f6c34b0d3e234d"},{url:"apps/launch-space-curiosity/index.html",revision:"bfea374397811ed4a2bd6900abc7c70f"},{url:"apps/the-pitch-pipe/index.html",revision:"9693532cd6819cb2f18fc188bfaa8464"},{url:"apps/the-pocket-piano/index.html",revision:"1939d1181a6c765e3463ee2d62f538fb"},{url:"article.css",revision:"1097246929d7b91fbc5bb98598625f35"},{url:"blog/automate-flutter-apps/index.html",revision:"edaee5a078ed6841f6535acb6c2091c3"},{url:"blog/codebase-many-places/index.html",revision:"f49d318781c38d7ac198c5a64212b047"},{url:"blog/cooking/brisket-time/index.html",revision:"c3b5598c64cdfabd816a834fa8d7bc9b"},{url:"blog/cooking/index.html",revision:"29e2320674a176c89da9202002040091"},{url:"blog/cooking/info.json",revision:"412b53af309e5ddf60aa9324e2b1bd38"},{url:"blog/deep-linking-flutter-web/index.html",revision:"541ffa263c8350076ecf353ceecdbf09"},{url:"blog/display-html-in-flutter/index.html",revision:"cd350f4c000f8b67cba99be290ebecbe"},{url:"blog/fastlane-and-flutter/index.html",revision:"ec82349532f13ba719e6b40ba2f915f7"},{url:"blog/first-flutter-project/index.html",revision:"abab6b5aab46737b143ca597770a95b6"},{url:"blog/flutter-cheat-sheet/index.html",revision:"17aae76547958d93528080bc6de835d1"},{url:"blog/flutter-multi-touch-canvas/index.html",revision:"957c392d537e52ed859987aeb110fcfa"},{url:"blog/flutter-one-click-release/index.html",revision:"1420b0b575a819c00be004fbd0f90855"},{url:"blog/host-flutter-rest-api/index.html",revision:"717c278ddb0b97cefaf161e9704e4ac6"},{url:"blog/index.html",revision:"df31fa6c60e46364efd043bb56453235"},{url:"blog/info.json",revision:"4a5ad58cb278ad044b83ebd8ce4166a8"},{url:"blog/making-a-piano/index.html",revision:"b8bbefa85a251aecc416f201fafb3c16"},{url:"blog/native-cross-platform-flutter/index.html",revision:"bc009498cf143e59c37e483720d049b4"},{url:"blog/push-notifications-flutter-web/index.html",revision:"64f025929a12c6adb3258a2d174bb061"},{url:"blog/the-perfect-brisket/index.html",revision:"c0f8cba4b2db59b40e4868a02928258f"},{url:"favicon.ico",revision:"2106d4897b6dde00bcd710b8d04b829f"},{url:"feed.xml",revision:"f7d975301198b5635f27f8d644ba4a04"},{url:"images/banner.jpeg",revision:"b3e3a7ca9b831a635c437ca83af16fcc"},{url:"images/cooking/brisket-closed.jpeg",revision:"f80d5187947b995f21c87e6b4078e74c"},{url:"images/cooking/brisket-diffuse.jpeg",revision:"c5bdae6527df5a233ed36cca65651676"},{url:"images/cooking/brisket-done.jpeg",revision:"1c5fbd50e6270369c2b0ce0dd8da3078"},{url:"images/cooking/brisket-foil.jpeg",revision:"37ee5ec7a207bf66fb2b37bb8d1fc41a"},{url:"images/cooking/brisket-grill.jpeg",revision:"6cb8306d16a17fa4fb1272b4bd839795"},{url:"images/cooking/brisket-mid.jpeg",revision:"c85ba77dc135c7e0c9bdab0e15143af3"},{url:"images/cooking/brisket-mustard.jpeg",revision:"6d313b229a897fd84d1f3fd43c023393"},{url:"images/cooking/brisket-prep.jpeg",revision:"3469fc0224fcf55b9b5b276a873b59d4"},{url:"images/cooking/brisket-raw.jpeg",revision:"80c655acc37e2bc04ce21a7e951f300d"},{url:"images/cooking/brisket-rub.jpeg",revision:"bed87e0e269be4d18c0663ebe2ecfc46"},{url:"images/cooking/brisket-smoker.jpeg",revision:"6b26170726dad17630a3ddd78f214e54"},{url:"images/cooking/brisket-start.jpeg",revision:"3469fc0224fcf55b9b5b276a873b59d4"},{url:"images/cooking/brisket-temperature.jpeg",revision:"eba2b185aa3cfe05f788a68b9e4ed79c"},{url:"images/cooking/brisket-trim.jpeg",revision:"04d66585c41cdbb05d105bf2979b7418"},{url:"images/cooking/brisket-trimmed.jpeg",revision:"37711f30c21968ee66ff91401ec4b540"},{url:"images/flutter_piano/comments.png",revision:"04c9003a7144e3b7a3fb583de0d88430"},{url:"images/flutter_piano/convert.png",revision:"43b10237e43a1adbd850899094f9b044"},{url:"images/flutter_piano/darkmode.png",revision:"75943479fbe38dde7894ad214d4189a6"},{url:"images/flutter_piano/final.png",revision:"b52f349d7efa8935844fe6fc939dc957"},{url:"images/flutter_piano/keys.png",revision:"278ac781d898e756de3836815403dca1"},{url:"images/flutter_piano/labels.png",revision:"49d8debf2118d8511b6380d5ee3595ae"},{url:"images/flutter_piano/landscape.png",revision:"5bb554432d0eaad91bd270c1f500b69a"},{url:"images/flutter_piano/menu.png",revision:"9c9f26894d36912842be82171d24f268"},{url:"images/flutter_piano/selectall.png",revision:"41bf751c0ca2e9b73e6319f37f8f26ab"},{url:"images/flutter_piano/settings.png",revision:"ceca5a171c63281b003f8e86da774932"},{url:"images/flutter_piano/starter.png",revision:"403850e1cf752af2513b1b1cd3e9aa90"},{url:"images/flutter_x/import.png",revision:"ececb1646eb9e7b0d81355e206c702b4"},{url:"images/flutter_x/mobile_1.png",revision:"404170df10debca32c8e47b80ddd3a54"},{url:"images/flutter_x/mobile_2.png",revision:"942bd3bc0beed2723f7618145051e458"},{url:"images/flutter_x/new_project.png",revision:"c5eeae6cb8f9a6c547e0941df95a9201"},{url:"images/flutter_x/starter_ipad.png",revision:"b5e0ecfcea87911761c32bb3c9bdab54"},{url:"images/flutter_x/starter_web.png",revision:"0b3676f1cac363104431a355abd0adbd"},{url:"images/flutter_x/structure.png",revision:"cebdb60dd4a5117965bb07248be6a111"},{url:"images/flutter_x/url_launcher.png",revision:"6022ede48b459b23a6addf822a039015"},{url:"images/flutter_x/web_1.png",revision:"ea78b6e0da4b2142ea8bf09de4d1e1dd"},{url:"images/flutter/automator.jpg",revision:"27ff430ad7613d418cbbc6f40bb2b2ba"},{url:"images/flutter/cross-platform.jpg",revision:"77aa8df21a0633095d32d22c41822aae"},{url:"images/flutter/fastlane.jpg",revision:"27909dfc44a00550a7a72d63181874a8"},{url:"images/flutter/logo.jpg",revision:"d4f55c3a40e0c76a7f1b7068bb7205b2"},{url:"images/flutter/terminal-drag.gif",revision:"6a2adb8a2b2de54d3aa03a6897061b64"},{url:"images/gifs/congratulations.gif",revision:"2a8c16ba3bac31f0e39648de78e14406"},{url:"images/gifs/yes_yes_yes.gif",revision:"7a9487930d26b0db9a8acc87cbdc9800"},{url:"images/hymns-for-worship/icon.png",revision:"44a95bc603479483786201fa09538b9c"},{url:"images/icons/article.svg",revision:"89c2c90a48cb41c2beac10d4ebbdb485"},{url:"images/icons/circle-empty.svg",revision:"903f1c713781905d7308b22730c9fce7"},{url:"images/icons/circle-filled.svg",revision:"54779019087c96413f3df9a334eb9674"},{url:"images/icons/link.svg",revision:"6af56728888d9074aaf4d8261a3eceda"},{url:"images/social/email.svg",revision:"82189696539164bc0b0e271a3bcac397"},{url:"images/social/facebook.svg",revision:"53757d9306796cd8c19df677d30a10c7"},{url:"images/social/github.svg",revision:"a8bef2fb56663fc6dccbe44598cba939"},{url:"images/social/instagram.svg",revision:"e75317fafc5e835195adf92be513d35b"},{url:"images/social/linkedin.svg",revision:"1e01f0c0dea217ba568ebbcec49c5b6b"},{url:"images/social/rss.svg",revision:"8d81e009201ca6738ca213eefa3c5047"},{url:"images/social/tiktok.svg",revision:"3f984ed2ff9183deb70749f43a558290"},{url:"images/social/twitter.svg",revision:"fdd650447aeb9b27bf6333f1f958ecfe"},{url:"images/social/youtube.svg",revision:"980a7e8a79f2056db3a50794bc8567b7"},{url:"images/space-curiosity/calc.PNG",revision:"2d249727d29b4d277f779341a1feec71"},{url:"images/space-curiosity/icon.png",revision:"80d5015ef402de24743bea30316d9490"},{url:"images/space-curiosity/news.PNG",revision:"7db158fac81dc264f63a32dbbaf2c67f"},{url:"images/the-pitch-pipe/icon.png",revision:"a10e568d763d07453971399421cb6985"},{url:"images/the-pocket-piano/icon.png",revision:"d690eaf97512b7acb7889f0cbc53c3ef"},{url:"index.css",revision:"0fda85412d3a7cb223c2548f7ae050f5"},{url:"index.html",revision:"fe39da4fd9a37be1d29012bb6e689eb7"},{url:"manifest.json",revision:"4347f055cfc6d7d32391363be55649d8"},{url:"privacy-policy/index.html",revision:"75860a7f8cf827f7f463b3ecd67834e2"},{url:"resume/index.html",revision:"97b5789eb7176e12d6f1ffe5565f5a8d"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"stories/index.html",revision:"04dc4f4bbe8054758740378c005ef3c8"},{url:"stories/info.json",revision:"93ca06865a0ea605fc8709fb95567322"},{url:"stories/welcome/index.html",revision:"cc17dced36ae252bc1f997c3f2cc76a8"}],{})}));
//# sourceMappingURL=sw.js.map
