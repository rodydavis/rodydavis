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
  - backend/pocketbase-cloudrun.md
  - flutter/host-rest-api.md
  - blog/podcast-github-pages.md
  - web/file-based-routing.md
last_updated_metadata: '2026-05-23T00:08:34.033Z'
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
