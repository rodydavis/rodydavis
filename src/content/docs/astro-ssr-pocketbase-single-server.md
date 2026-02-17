---
title: How to Run Astro SSR and PocketBase on the Same Server
description: >
  Learn how to host PocketBase and an Astro SSR application on the same server,
  using PocketBase's Go integration and a reverse proxy to delegate requests to
  Astro for dynamic web content.
date: '2025-01-18 22:05:53.055Z'
draft: false
tags:
  - Astro
  - HTML
  - Javascript
  - Go
  - PocketBase
  - SQLite
  - SSR
summary: >-
  This tutorial demonstrates how to run PocketBase and Astro in server-side
  rendering (SSR) mode on the same server using Go, providing instructions for
  project setup and server configuration.
embedding: >-
  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
related:
  - pocketbase-webrtc-signal-server-js.md
  - flutter-ssr-rfw.md
  - deep-linking-flutter-web.md
  - pocketbase-cloudrun.md
  - static-site-file-based-routing.md
---

In this article I will show you how to host [PocketBase](https://pocketbase.io/) and [Astro in SSR](https://docs.astro.build/en/guides/server-side-rendering/) mode on the same server. PocketBase does let you [render templates](https://pocketbase.io/docs/go-rendering-templates/) on the server but requires [Go Templates](https://pkg.go.dev/text/template) or pre-building with Static Site Generation (SSG).

> This could also be modified to use your web server or framework of choice ([Next.js](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering), [SvelteKit](https://kit.svelte.dev/docs/page-options), [Qwik](https://qwik.builder.io/), [Angular](https://angular.io/guide/ssr)).

Before getting started make sure you have the latest version of [Node](https://nodejs.org/en/blog/announcements/v19-release-announce) and [Go](https://go.dev/doc/install) installed locally.

Getting started 
----------------

In a terminal run the following to create the base project:

```markdown
mkdir pocketbase_astro_ssr
cd pocketbase_astro_ssr
mkdir server
mkdir www
```

This will create the `server` and `www` folders in our project needed for both Astro and PocketBase.

Setting up the server 
----------------------

Create a file at `server/main.go` and update it with the following:

```dart
package main

import (
	"log"
	"net/http/httputil"
	"net/url"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()

    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        proxy := httputil.NewSingleHostReverseProxy(&url.URL{
			Scheme: "http",
			Host:   "localhost:4321",
		})
		e.Router.Any("/*", echo.WrapHandler(proxy))
		e.Router.Any("/", echo.WrapHandler(proxy))
        return nil
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
```

Here we are extending [PocketBase with Go](https://pocketbase.io/docs/go-overview/) and taking advantage of the [Echo router](https://echo.labstack.com/docs/routing) integration and using a [reverse proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server/#:~:text=A%20reverse%20proxy%20server%20is,traffic%20between%20clients%20and%20servers.) to handle all requests not defined by PocketBase already and delegating them to Astro.

Next run the following in a terminal to install the dependencies:

```markdown
go mod init server
go mod tidy
```

Now we can start the server and move on to the client:

```markdown
go run main.go serve
```

You should see the following and note that this will run in debug mode so all the SQL statements will start to show:

```markdown
2023/11/09 10:28:52 Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

### Collections 

Open up the Admin UI url and after creating a new admin user, create a new collection `items` and add the following metadata:

Column Name

Column Type

Column Settings

title

Plain Text

 

![](../../assets/astro_ssr_1_l8se0qq5gx.png)

Then update the API Rules to allow read access for list and view.

![](../../assets/astro_ssr_2_nbohwwy3lp.png)

> This is just for example purposes and on a production app you will rely on auth for ACLs

Create 3 new records with placeholder data.

![](../../assets/astro_ssr_3_s8uxkyvvla.png)

Creating the client 
--------------------

Now we can create the client that will be used to connect to PocketBase and serve all of the web traffic.

Navigate to the `www` directory and run the following in a terminal:

```markdown
npm create astro@latest
```

Follow the prompts and enter the following:

Question

Answer

Where should we create your new project?

.

How would you like to start your new project?

Empty

Install dependencies?

Yes

Do you plan to write TypeScript?

Yes

How strict should TypeScript be?

Strict

Initialize a new git repository?

No

You can of course customize this as you need, but next we can install the dependencies needed by running the following in a terminal:

```markdown
npm i -D @astrojs/node
npm i pocketbase
```

Next update `www/astro.config.mjs` and update it with the following:

```dart
import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: nodejs({
    mode: "standalone",
  }),
  output: "server",
});
```

This will use Server Side Rendering (SSR) instead of Static Site Generation (SSG) when we run the web server.

### UI 

#### Layouts 

We can start by creating a shared layout for all the routes. Create a file at `www/src/layouts/Root.astro` and update it with the following:

```javascript
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

#### Routes 

Now we can update the index `/` route by updating the following file `www/src/pages/index.astro`:

```javascript
---
import Root from "../layouts/Root.astro";

import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
const items = pb.collection("items");
const records = await items.getFullList();
---

<Root title="Items">
  <h1>Items</h1>
  <ul>
    {
      records.map((record) => (
        <li>
          <a href={`/items/${record.id}`}>{record.title}</a>
        </li>
      ))
    }
  </ul>
</Root>
```

This will call the `items` collection on the server and render it with 0 JS on the client.

Next create a file `www/src/pages/[...slug].astro` and update it with the following:

```javascript
---
import Root from "../layouts/Root.astro";

import PocketBase from "pocketbase";

const slug = Astro.params.slug!;
const id = slug.split("/").pop()!;

const pb = new PocketBase("http://127.0.0.1:8090");
const items = pb.collection("items");

const records = await items.getList(1, 1, {
  filter: `id = '${id}'`,
});

if (records.items.length === 0) {
  return new Response("Not found", { status: 404 });
}

const {title} = records.items[0];
---

<Root {title}>
  <a href="/">Back</a>
  <h1>{title}</h1>
</Root>
```

This is almost like before but now we can return a proper `404` response if not found for an item.

#### Running 

Now we can run the web server with the following command:

```markdown
npm run dev
```

You should see the following:

```markdown
> dev
> astro dev

  🚀  astro  v3.4.4 started in 67ms
  
  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

Then if we open up the PocketBase url `http://127.0.0.1:8090` and you should see the following for the index route and detail routes:

![](../../assets/astro_ssr_4_2jgteusxtt.png)

![](../../assets/astro_ssr_5_3u7bekhf36.png)

Conclusion 
-----------

Now you can build a new binary for both the server and client and deploy them both on the same server instance. 🎉

You can find the final code [here](https://github.com/rodydavis/pocketbase_astro_ssr).
