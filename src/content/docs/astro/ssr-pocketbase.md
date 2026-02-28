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
  This tutorial demonstrates how to run Astro with server-side rendering (SSR)
  and PocketBase on the same server by setting up a Go proxy to route requests
  between them.
embedding: >-
  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
related:
  - flutter/ssr-rfw.md
  - flutter/host-rest-api.md
  - backend/pocketbase-cloudrun.md
  - backend/pocketbase-webrtc.md
  - flutter/web-deep-linking.md
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
