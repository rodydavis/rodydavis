// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rodydavis.com',
  integrations: [react()],

  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // }),

  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    "/posts/[...slug]": "/[...slug]",
    "/making-a-piano": "/lit/making-a-piano",
    "/lit-sheet-music": "/lit/sheet-music",
    "/snippets/lightweight-flutter-animations": "/flutter/snippets/lightweight-animations",
    "/snippets/flutter-master-detail-view": "/flutter/snippets/master-detail-view",
    "/snippets/m3-to-m2-css-adapter": "/web/snippets/m3-to-m2-adapter",
    "/snippets/flutter-infinite-canvas": "/flutter/snippets/infinite-canvas",
    "/snippets/workflow-nasa-image-of-day": "/automation/snippets/nasa-image-of-day",
    "/snippets/flutter-markdown-view-material-3": "/flutter/snippets/markdown-view-material-3",
    "/snippets/typescript-color-utilities": "/web/snippets/color-utilities",
    "/snippets/flutter-input-output-preview": "/flutter/snippets/input-output-preview",
    "/snippets/flutter-stream-widget": "/flutter/snippets/stream-widget",
    "/snippets/flutter-native-http-client": "/flutter/snippets/native-http-client",
    "/palm-2-api-dart": "/dart/palm-2-api",
    "/lit-force-graph": "/lit/force-graph",
    "/flutter-and-lit": "/flutter/lit-interop",
    "/async-preact-signal": "/web/preact-signals",
    "/migrating-my-blog-to-pocketbase": "/blog/migrating-to-pocketbase",
    "/dart-html-web-components": "/dart/html-web-components",
    "/codemirror-dynamic-theme": "/lit/codemirror-dynamic-theme",
    "/flutter-one-click-release": "/flutter/one-click-release",
    "/figma-and-lit": "/lit/figma-interop",
    "/astro-ssr-pocketbase-single-server": "/astro/ssr-pocketbase",
    "/flutter-ssr-rfw": "/flutter/ssr-rfw",
    "/static-site-file-based-routing": "/web/file-based-routing",
    "/flutter-cheat-sheet": "/flutter/cheat-sheet",
    "/automate-flutter-apps": "/flutter/automation",
    "/podcast-github-pages": "/blog/podcast-github-pages",
    "/pocketbase-cloudrun": "/backend/pocketbase-cloudrun",
    "/privacy": "/legal/privacy",
    "/fastlane-and-flutter": "/flutter/fastlane",
    "/export-sqlite-dart": "/dart/export-sqlite",
    "/html-code-sandbox": "/web/html-code-sandbox",
    "/lit-vscode-extension": "/lit/vscode-extension",
    "/lit-monaco-editor": "/lit/monaco-editor",
    "/offline-vector-recommendations": "/ai/vector-recommendations",
    "/lit-rich-text-editor": "/lit/rich-text-editor",
    "/push-notifications-flutter-web": "/flutter/web-push-notifications",
    "/lit-html-table": "/lit/html-table",
    "/host-flutter-rest-api": "/flutter/host-rest-api",
    "/first-flutter-project": "/flutter/getting-started",
    "/deep-linking-flutter-web": "/flutter/web-deep-linking",
    "/lit-draggable-dom": "/lit/draggable-dom",
    "/flutter-and-xcode-cloud": "/flutter/xcode-cloud",
    "/native-cross-platform-flutter": "/flutter/native-cross-platform",
    "/display-html-in-flutter": "/flutter/display-html",
    "/pocketbase-webrtc-signal-server-js": "/backend/pocketbase-webrtc",
    "/signals-and-flutter-hooks": "/flutter/signals-and-hooks",
    "/flutter-multi-touch-canvas": "/flutter/multi-touch-canvas",
    "/flutter-graph-database": "/flutter/graph-database",
  }
});