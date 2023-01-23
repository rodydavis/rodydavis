'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c350dfba3a7a90876adda916ec88a8e3",
"favicon.ico": "4e217bd40d8dce3e195108914fa4ed38",
"index.html": "cc181b3995304e6d11b53eac326ea65d",
"/": "cc181b3995304e6d11b53eac326ea65d",
"CNAME": "f58b1a77bbf4f3de40f2e38c3e0cd4b7",
"main.dart.js": "ee11e935f33c6df4678856d965587547",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"feed/feed.xml": "554884091ffce6a25101f5dea7b99706",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2ad3fad41f6bcb012da0b56f3b9d2d7",
"assets/AssetManifest.json": "c04f3bd99f9e1735ee0bb08ce56ce327",
"assets/NOTICES": "abf1628d8c0107623623d21e25908939",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/fonts/MaterialIcons-Regular.otf": "00a1679ba8371ad9b40560ef391fb1ee",
"assets/assets/images/dynamic-theme_green-dark.png": "56553267d985cf4ed35885260eaa6b25",
"assets/assets/images/gifs_super-excited.gif": "344380c1fa8eb47f5cfe0b3ff5511588",
"assets/assets/images/space-curiosity_nasa-images.png": "94beeaed8d72d81e517d1b50224c7b05",
"assets/assets/images/deep-linking_10.png": "dc7b2dc650d95fee9dfc071becb5df38",
"assets/assets/images/space-curiosity_icon.png": "80d5015ef402de24743bea30316d9490",
"assets/assets/images/sheet-music_preview.gif": "979ddf211c0c467bfa36654c03235953",
"assets/assets/images/flutter_multi-touch.png": "dc45f6fa4fd9cf36a3412cb3991593b5",
"assets/assets/images/deep-linking_11.png": "e614af4dab3bae4b6c93b5c97c96f4d7",
"assets/assets/images/flutter_x_url_launcher.png": "6022ede48b459b23a6addf822a039015",
"assets/assets/images/flutter_piano_convert.png": "43b10237e43a1adbd850899094f9b044",
"assets/assets/images/flutter_logo.jpg": "d4f55c3a40e0c76a7f1b7068bb7205b2",
"assets/assets/images/dynamic-theme_green-light.png": "a5eca9dd6331a478bac66eac5dca8825",
"assets/assets/images/space-curiosity_news.png": "7db158fac81dc264f63a32dbbaf2c67f",
"assets/assets/images/banner.jpeg": "b3e3a7ca9b831a635c437ca83af16fcc",
"assets/assets/images/code-editor_dark.png": "4ac54ff73fbf26f9057cbc1888b54ee2",
"assets/assets/images/flutter_x_starter_ipad.png": "b5e0ecfcea87911761c32bb3c9bdab54",
"assets/assets/images/gifs_very-interesting.gif": "d841faa2c5a72f7c1f6f8fb0b3836775",
"assets/assets/images/cooking_brisket-temperature.jpeg": "eba2b185aa3cfe05f788a68b9e4ed79c",
"assets/assets/images/deep-linking_13.png": "5d8ba4b8cbd9abb1a9e0aa847ecf347f",
"assets/assets/images/flutter_cross-platform.jpg": "77aa8df21a0633095d32d22c41822aae",
"assets/assets/images/html-sandbox_preview.png": "89c424d9f8bfaae81e949d67f681b5cc",
"assets/assets/images/deep-linking_12.png": "651c6616e5b98a6c27e440ce2f1e844d",
"assets/assets/images/firebase_banner.png": "5335302f1366508c32870e77d546713c",
"assets/assets/images/cooking_brisket-trim.jpeg": "04d66585c41cdbb05d105bf2979b7418",
"assets/assets/images/widget-studio_icon.png": "0b6e3d19df66c3c602e61d58dc4147dc",
"assets/assets/images/firebase_notification.png": "65ff3665d1657fd1280ce1cd42863c7b",
"assets/assets/images/flutter_x_mobile_1.png": "404170df10debca32c8e47b80ddd3a54",
"assets/assets/images/deep-linking_16.png": "14852df74bb07654a1632123321db1c2",
"assets/assets/images/json-to-table_editor.png": "8c60cd683fd290da1948f3c73b0436e1",
"assets/assets/images/cooking_brisket-mid.jpeg": "c85ba77dc135c7e0c9bdab0e15143af3",
"assets/assets/images/deep-linking_17.png": "1f8d923b21f616d0adf3b3a287037689",
"assets/assets/images/gifs_congratulations.gif": "2a8c16ba3bac31f0e39648de78e14406",
"assets/assets/images/flutter_piano_comments.png": "04c9003a7144e3b7a3fb583de0d88430",
"assets/assets/images/cooking_brisket-grill.jpeg": "6cb8306d16a17fa4fb1272b4bd839795",
"assets/assets/images/cooking_brisket-mustard.jpeg": "6d313b229a897fd84d1f3fd43c023393",
"assets/assets/images/force-graph_3d-dark.png": "b049037b10d7061785bc0e24df2ddf62",
"assets/assets/images/flutter_x_mobile_2.png": "942bd3bc0beed2723f7618145051e458",
"assets/assets/images/deep-linking_15.png": "afafabada350596a9f04d24a828e00fd",
"assets/assets/images/flutter_version-bump.gif": "3921634a84930e4992db8575bde43b19",
"assets/assets/images/rich-text_editor-finish.png": "f21830b09539726edd072a138d32c893",
"assets/assets/images/flutter_first.png": "5ac7cf7a5926c713e5591558e5746028",
"assets/assets/images/deep-linking_14.png": "440262f8aeac081b6d1940c6a3bff56e",
"assets/assets/images/personal_grand_canyon.jpeg": "475fabc5fe41e8e8a0e964b3747c531e",
"assets/assets/images/dynamic-theme_purple-light.png": "407a8b7bd5e9d20d12a56bc357eda746",
"assets/assets/images/widget-studio_4.png": "2a022f61ef8e431b61b14df2492e8568",
"assets/assets/images/flutter_piano_landscape.png": "5bb554432d0eaad91bd270c1f500b69a",
"assets/assets/images/cooking_brisket-foil.jpeg": "37ee5ec7a207bf66fb2b37bb8d1fc41a",
"assets/assets/images/flutter_piano_keys.png": "278ac781d898e756de3836815403dca1",
"assets/assets/images/flutter_x_web_2.png": "b6071f9eb82ef4ee23a223de2859aa2b",
"assets/assets/images/space-curiosity_calc.png": "2d249727d29b4d277f779341a1feec71",
"assets/assets/images/flutter_piano_settings.png": "ceca5a171c63281b003f8e86da774932",
"assets/assets/images/widget-studio_5.png": "d4d13b766d52e21add7ff4f6212e0236",
"assets/assets/images/figma_manage-plugin.png": "ef91fe3904ab61d20c5d822afb93ceff",
"assets/assets/images/deep-linking_8.png": "c0fca64860d39cef410eebacf61e4013",
"assets/assets/images/flutter_xcode-open.png": "eb53895a3e92bbc981a26a62659059c2",
"assets/assets/images/flutter_piano_final.png": "b52f349d7efa8935844fe6fc939dc957",
"assets/assets/images/figma_run-plugin.png": "38a7b64f9ca2606d8f72af84b3a13951",
"assets/assets/images/flutter_piano_labels.png": "49d8debf2118d8511b6380d5ee3595ae",
"assets/assets/images/flutter_x_web_1.png": "ea78b6e0da4b2142ea8bf09de4d1e1dd",
"assets/assets/images/figma_run-lit-plugin.png": "97224daeb73f8c6af9e30c17cc5b6a2e",
"assets/assets/images/deep-linking_9.png": "e2e009ab39a002391e10b592fdafab79",
"assets/assets/images/flutter_terminal-drag.gif": "6a2adb8a2b2de54d3aa03a6897061b64",
"assets/assets/images/pocketbase_settings.png": "0156a2e087f5bcda7f75b3825f12b02d",
"assets/assets/images/widget-studio_2.png": "ac55be3fddc565e89bf433d41a1a0574",
"assets/assets/images/gifs_broken-door.gif": "e7f286852be3d1bee702efd37268c6a5",
"assets/assets/images/hymns-for-worship_icon.png": "44a95bc603479483786201fa09538b9c",
"assets/assets/images/personal_golden_gate.jpeg": "52e16b08e2b09f418fea51d44c6287ee",
"assets/assets/images/flutter_automator.jpg": "27ff430ad7613d418cbbc6f40bb2b2ba",
"assets/assets/images/favicon/favicon-16x16.png": "ceca8591bc08f31721e2ac21429d5421",
"assets/assets/images/favicon/android-chrome-384x384.png": "51ef5d147b16b72c6dd4015c61840171",
"assets/assets/images/favicon/safari-pinned-tab.svg": "54d84cba40a914bc20354bd1d66e6ba1",
"assets/assets/images/favicon/favicon.ico": "4e217bd40d8dce3e195108914fa4ed38",
"assets/assets/images/favicon/android-chrome-192x192.png": "25bbcb0dbb46b227a007cfcf4718f313",
"assets/assets/images/favicon/apple-touch-icon.png": "bba0b7edb5525e703a1a60f7db23a900",
"assets/assets/images/favicon/site.webmanifest": "57425a403714747b47dd0c0b3524a5f1",
"assets/assets/images/favicon/mstile-150x150.png": "1a763e300d619d3afeed313f3f999ced",
"assets/assets/images/favicon/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"assets/assets/images/favicon/favicon-32x32.png": "a50a6af57e9645ed490735d87d1b8d22",
"assets/assets/images/space-curiosity_space-x.png": "2dfa172fedbaec2cf7e259fe350f928f",
"assets/assets/images/rich-text_editor-start.png": "1154665eb11e426a2ba681d523045ac2",
"assets/assets/images/pocketbase_thumbnail.png": "364aaf75881132fff679210a2394cccf",
"assets/assets/images/widget-studio_3.png": "bf6dfcb2eb21166d1237e5bb845845fe",
"assets/assets/images/widget-studio_1.png": "9ce4ad56f8558f03db891a54b56fb710",
"assets/assets/images/figma_plugin-overview.png": "315255f39dc092a2bfe63e553f766fad",
"assets/assets/images/the-pocket-piano_icon.png": "d690eaf97512b7acb7889f0cbc53c3ef",
"assets/assets/images/figma_create-plugin.png": "e9d30adc9ce03af471be3b030fe2e228",
"assets/assets/images/flutter_piano_selectall.png": "41bf751c0ca2e9b73e6319f37f8f26ab",
"assets/assets/images/force-graph_2d-dark.png": "f81421dbdb7864dde479954a25df282e",
"assets/assets/images/force-graph_3d-light.png": "8790f20eb3df5ef0c2049010f2b04223",
"assets/assets/images/flutter_x_import.png": "ececb1646eb9e7b0d81355e206c702b4",
"assets/assets/images/gifs_interesting.mp4": "5580e32eba7e0efba56882ca9cfae632",
"assets/assets/images/flutter_html_return.png": "5dee640135ef7d94547ce492e6663400",
"assets/assets/images/flutter_html_update_url.png": "7a5eb34d832fe3efc231a00fda6867ed",
"assets/assets/images/figma_rectangles.png": "c63cdef5573fcd43bf5e33750da7053b",
"assets/assets/images/cooking_brisket-raw.jpeg": "80c655acc37e2bc04ce21a7e951f300d",
"assets/assets/images/pocketbase/pocketbase_settings.png": "0156a2e087f5bcda7f75b3825f12b02d",
"assets/assets/images/pocketbase/pocketbase_thumbnail.png": "364aaf75881132fff679210a2394cccf",
"assets/assets/images/deep-linking_2.png": "4ebd01f682074c1abe3293bb4813487a",
"assets/assets/images/flutter_files.png": "bfc70ca234ea07f9012d3f2787776608",
"assets/assets/images/flutter_piano_darkmode.png": "75943479fbe38dde7894ad214d4189a6",
"assets/assets/images/cooking_brisket-start.jpeg": "3469fc0224fcf55b9b5b276a873b59d4",
"assets/assets/images/social/github.svg": "a8bef2fb56663fc6dccbe44598cba939",
"assets/assets/images/social/share-apple.svg": "c5c784695ed510b8bed5b1adb3178c06",
"assets/assets/images/social/instagram.svg": "e75317fafc5e835195adf92be513d35b",
"assets/assets/images/social/rss.svg": "8d81e009201ca6738ca213eefa3c5047",
"assets/assets/images/social/email.svg": "82189696539164bc0b0e271a3bcac397",
"assets/assets/images/social/facebook.svg": "53757d9306796cd8c19df677d30a10c7",
"assets/assets/images/social/youtube.svg": "980a7e8a79f2056db3a50794bc8567b7",
"assets/assets/images/social/share.svg": "fc640400175c60cee26a44f395990499",
"assets/assets/images/social/linkedin.svg": "1e01f0c0dea217ba568ebbcec49c5b6b",
"assets/assets/images/social/twitter.svg": "fdd650447aeb9b27bf6333f1f958ecfe",
"assets/assets/images/social/tiktok.svg": "3f984ed2ff9183deb70749f43a558290",
"assets/assets/images/flutter_fastlane.jpg": "27909dfc44a00550a7a72d63181874a8",
"assets/assets/images/deep-linking_3.png": "20358c0314b699f92e061f65327b039b",
"assets/assets/images/flutter_html_web_view.png": "ed532a5b7bfe4ebec453fdaf18945d17",
"assets/assets/images/code-editor_popup.png": "58b433e79159e7752023d50344c3ba7f",
"assets/assets/images/deep-linking_1.png": "da8f1c57e8e276564eea21b18bc1b040",
"assets/assets/images/figma_add-plugin.png": "f343084f9f5114b6b14c0b1abaed7090",
"assets/assets/images/personal_personal_family.jpeg": "82b33538efc604105efe2a130338dd65",
"assets/assets/images/flutter_workflow-create.png": "ccb393c4b7ae97064f13ae2441a22bce",
"assets/assets/images/code-editor_light.png": "d8c11aa998e6263599e4304fe88cbf39",
"assets/assets/images/deep-linking_0.png": "ef2731a304e508c15cb93c94c6185d7a",
"assets/assets/images/podcast-github_gh-pages.jpeg": "1fc4e54c73676c8bd368ddff45cdbc97",
"assets/assets/images/flutter_xcode-launch.png": "0ab69337cec95cf76d0173ae79d52713",
"assets/assets/images/deep-linking_4.png": "c257e56067199f63d91cd527d398285d",
"assets/assets/images/sheet-music_finished.png": "4031795fc1f14310dfd6eaad1f9a05a1",
"assets/assets/images/vscode_tools.png": "d1a201358f548e7e4ada8d19434439a6",
"assets/assets/images/cooking_brisket-prep.jpeg": "3469fc0224fcf55b9b5b276a873b59d4",
"assets/assets/images/space-curiosity_iss.png": "6e3895968ff8b5ec1eee883bdf66325c",
"assets/assets/images/icons/circle-empty.svg": "903f1c713781905d7308b22730c9fce7",
"assets/assets/images/icons/link.svg": "6af56728888d9074aaf4d8261a3eceda",
"assets/assets/images/icons/article.svg": "89c2c90a48cb41c2beac10d4ebbdb485",
"assets/assets/images/icons/circle-filled.svg": "54779019087c96413f3df9a334eb9674",
"assets/assets/images/flutter_x_new_project.png": "c5eeae6cb8f9a6c547e0941df95a9201",
"assets/assets/images/deep-linking_5.png": "be91ad4fecd6557495c7646b27faec0c",
"assets/assets/images/profile.jpg": "cca04f0ca72e644ef323678de1d453b1",
"assets/assets/images/deep-linking_7.png": "20cab2a1b9131fd55519c24712c6e802",
"assets/assets/images/json-to-table_finished.png": "6d8268fae7ae8778a5128426a0f3d5f7",
"assets/assets/images/flutter_html_iframe.png": "a04463576cd237df1dd3b451017a6c44",
"assets/assets/images/gifs_thinking.gif": "f6c1360c51af80c737307cad74dfc40e",
"assets/assets/images/rich-text/rich-text_editor-finish.png": "f21830b09539726edd072a138d32c893",
"assets/assets/images/rich-text/rich-text_editor-start.png": "1154665eb11e426a2ba681d523045ac2",
"assets/assets/images/deep-linking_6.png": "65dd5a19d109852c13889afc65a1ffc4",
"assets/assets/images/gifs_nod_yes.gif": "c5b7d66afb364bb2884940ea33e2d7ec",
"assets/assets/images/flutter_html_preview.png": "ed532a5b7bfe4ebec453fdaf18945d17",
"assets/assets/images/flutter_x_structure.png": "cebdb60dd4a5117965bb07248be6a111",
"assets/assets/images/deep-linking_19.png": "6a89a3deca25327188d0fecb5171e679",
"assets/assets/images/cooking_brisket-rub.jpeg": "bed87e0e269be4d18c0663ebe2ecfc46",
"assets/assets/images/deep-linking_18.png": "82672dec16a9a8a376d912681a9bc0cc",
"assets/assets/images/force-graph_2d-light.png": "9ef2a7821fb50a0d0a3de0668941810f",
"assets/assets/images/cooking_brisket-trimmed.jpeg": "37711f30c21968ee66ff91401ec4b540",
"assets/assets/images/personal_family.jpeg": "82b33538efc604105efe2a130338dd65",
"assets/assets/images/flutter_x_starter_web.png": "0b3676f1cac363104431a355abd0adbd",
"assets/assets/images/cooking_brisket-diffuse.jpeg": "c5bdae6527df5a233ed36cca65651676",
"assets/assets/images/draggable-dom_canvas.png": "a23b8abb3feb6c325853f71177552826",
"assets/assets/images/google_play.png": "7bd4bd0cebf2b47f337f134544e24fe5",
"assets/assets/images/gifs_yes_yes_yes.gif": "7a9487930d26b0db9a8acc87cbdc9800",
"assets/assets/images/vscode_final.png": "0d543b9ef8887a81b580b75691888754",
"assets/assets/images/flutter_workflow-done.png": "ad37b0e8eafc9230c38cb5f078e16395",
"assets/assets/images/flutter_piano_starter.png": "403850e1cf752af2513b1b1cd3e9aa90",
"assets/assets/images/the-pitch-pipe_icon.png": "a10e568d763d07453971399421cb6985",
"assets/assets/images/cooking_brisket-smoker.jpeg": "6b26170726dad17630a3ddd78f214e54",
"assets/assets/images/personal_shuttle.jpeg": "ad3c825a4d5279f2259a824c1aca2e2e",
"assets/assets/images/cooking_brisket-done.jpeg": "1c5fbd50e6270369c2b0ce0dd8da3078",
"assets/assets/images/dynamic-theme_purple-dark.png": "b2125973febeea07ff5556cb44b1b737",
"assets/assets/images/app_store.png": "6f0180b0b03c171f9f627a7319947744",
"assets/assets/images/dynamic-theme_start.png": "2f6fdd2b35c4b0692d286f081c5433a2",
"assets/assets/images/flutter_html_setup.png": "499827bc69d1b87a2452e39c3f30578f",
"assets/assets/images/static-site_preview.png": "b007b1928d59d478bdcee7894f2afe86",
"assets/assets/images/gifs_mind_blown.gif": "6082f977c418631558161bb6c135e8c4",
"assets/assets/images/deep-linking_20.png": "1ba587ca8235e936cc425dcc7122cb75",
"assets/assets/images/vscode_commands.png": "7495d994b9316138358ae0b64777f538",
"assets/assets/images/social.png": "4c06869d5fb85dffa2d0d9bb0a2a83e2",
"assets/assets/images/gifs_check-it-out.webp": "afff786b80f0dc9ad143e102a61de3eb",
"assets/assets/images/gifs_fast-typing.webp": "40c47b531150df08868ebd685b4566bd",
"assets/assets/images/social.jpg": "5dfa876e2b154b8dfa4d10428543cab4",
"assets/assets/images/flutter_xcode-cloud.png": "5a80722b6849349eb70c89d6c3a3d2fa",
"assets/assets/images/flutter_piano_menu.png": "9c9f26894d36912842be82171d24f268",
"assets/assets/images/cooking_brisket-closed.jpeg": "f80d5187947b995f21c87e6b4078e74c",
"assets/assets/data/blog/making-a-piano.md": "3d2f1c011dd1bb0fff19036dbd63c680",
"assets/assets/data/blog/lit-sheet-music.md": "1f5969a77ab48536126369290a920026",
"assets/assets/data/blog/lit-force-graph.md": "34e7795d2e37a4ec6d5305714351cd3d",
"assets/assets/data/blog/flutter-and-lit.md": "de6d6ccee1a0315addcc0924eced2180",
"assets/assets/data/blog/codemirror-dynamic-theme.md": "06b1813d7b731add5f8d44ff36658855",
"assets/assets/data/blog/flutter-one-click-release.md": "21fcda0597925163f916591f66bf8984",
"assets/assets/data/blog/figma-and-lit.md": "39574e5f60552e1bcec04121c63d457b",
"assets/assets/data/blog/static-site-file-based-routing.md": "f363ed4fa237b1374de0a84fab1b4584",
"assets/assets/data/blog/flutter-cheat-sheet.md": "8452553ef9dc78970b50e94c3c46818c",
"assets/assets/data/blog/automate-flutter-apps.md": "14a556f3b5af40a5eb3217474fbfc7c8",
"assets/assets/data/blog/podcast-github-pages.md": "5e63958352769d926689c89ce9f64cf4",
"assets/assets/data/blog/pocketbase-cloudrun.md": "b910543b820be0b7e518a5e228b770dd",
"assets/assets/data/blog/fastlane-and-flutter.md": "ccf5f6ef5546c0dec322f304aff00e3d",
"assets/assets/data/blog/html-code-sandbox.md": "6ff82edc75574dd076b2d4004104d157",
"assets/assets/data/blog/lit-vscode-extension.md": "11e51ac9e56a0474fce753891825d472",
"assets/assets/data/blog/lit-monaco-editor.md": "5eb80d4a51017b970e174539db7d712e",
"assets/assets/data/blog/lit-rich-text-editor.md": "399774a2284ca93758f6a620138d542f",
"assets/assets/data/blog/flutter-master-detail.md": "a3722c0957fe5de337944397e562d597",
"assets/assets/data/blog/push-notifications-flutter-web.md": "9209777aec2f81c0a2f512ece4dc9408",
"assets/assets/data/blog/lit-html-table.md": "53160d764aa931b9b668abc4928edfb9",
"assets/assets/data/blog/host-flutter-rest-api.md": "cc8a7c5cf94da59522d8407711904110",
"assets/assets/data/blog/first-flutter-project.md": "7746416ddcfef6c030cb99f3e7a8a839",
"assets/assets/data/blog/deep-linking-flutter-web.md": "8e7ef2a92deca6f094f5d2faa838ccd1",
"assets/assets/data/blog/lit-draggable-dom.md": "d9324422a08e338bf4840f02b379e938",
"assets/assets/data/blog/flutter-and-xcode-cloud.md": "9717a762deb0071773a70dd44f920cd2",
"assets/assets/data/blog/native-cross-platform-flutter.md": "0d43220774466098e2a1f35d65399890",
"assets/assets/data/blog/display-html-in-flutter.md": "5d01f9b1ac416611c5d802709dfca76e",
"assets/assets/data/blog/flutter-multi-touch-canvas.md": "56b7a0711ec7a1867cec897bdbb516f9",
"assets/assets/data/static/privacy.md": "3f0ec3edd189caef900abfcbb225b4da",
"assets/assets/data/static/talks.md": "f93090da25dbc9e08583eaec9bef2545",
"assets/assets/data/static/about.md": "80091cf1bf497f7dc30b4f0d1a284d29",
"assets/assets/data/apps/the-pocket-piano.md": "566dfcf70ebc322f6117ead2b7944503",
"assets/assets/data/apps/hymns-for-worship.md": "c15d49d8489aa6551501a4520481f83e",
"assets/assets/data/apps/widget-studio.md": "1e849de82a05728da0067faea1d03eac",
"assets/assets/data/apps/the-pitch-pipe.md": "4ecb6e6f63967b586eac70cde95791de",
"assets/assets/data/apps/space-curiosity.md": "5efa47576816f3056ceca74dcf0ef228",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
