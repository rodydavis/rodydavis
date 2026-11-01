---
title: How to Run Astro SSR and PocketBase on the Same Server
date: '2025-01-18 22:05:53.055Z'
draft: false
tags:
  - astro
  - html
  - dart
  - pocketbase
  - javascript
  - typescript
  - github
  - web
summary: >-
  Learn how to integrate and run Astro in Server-Side Rendering mode with
  PocketBase on the same server using a Go reverse proxy setup.
embedding: >-
  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
related:
  - backend/pocketbase-webrtc.md
  - web/file-based-routing.md
  - flutter/host-rest-api.md
  - flutter/ssr-rfw.md
  - flutter/lit-interop.md
last_updated_metadata: '2026-11-01T02:28:35.839Z'
---

# How to Run Astro SSR and PocketBase on the Same Server

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

 

![](../../../assets/astro_ssr_1_l8se0qq5gx.png)

Then update the API Rules to allow read access for list and view.

![](../../../assets/astro_ssr_2_nbohwwy3lp.png)

> This is just for example purposes and on a production app you will rely on auth for ACLs

Create 3 new records with placeholder data.

![](../../../assets/astro_ssr_3_s8uxkyvvla.png)

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

![](../../../assets/astro_ssr_4_2jgteusxtt.png)

![](../../../assets/astro_ssr_5_3u7bekhf36.png)

Conclusion 
-----------

Now you can build a new binary for both the server and client and deploy them both on the same server instance. 🎉

You can find the final code [here](https://github.com/rodydavis/pocketbase_astro_ssr).
