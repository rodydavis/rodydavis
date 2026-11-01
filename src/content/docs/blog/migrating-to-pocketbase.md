---
title: Migrating my Blog to PocketBase
date: '2025-01-20 20:08:23.622Z'
draft: false
tags:
  - flutter
  - lit
  - html
  - sqlite
  - pocketbase
  - github
  - web
  - google
summary: >-
  The author details a multi-stage process of migrating their personal blog
  across various technologies—including Wix, Jekyll, 11ty, and web
  components—before moving to Obsidian.
embedding: >-
  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
related:
  - blog/podcast-github-pages.md
  - backend/pocketbase-webrtc.md
  - astro/ssr-pocketbase.md
  - backend/pocketbase-cloudrun.md
  - flutter/native-cross-platform.md
last_updated_metadata: '2026-11-01T02:28:33.863Z'
---

# Migrating my Blog to PocketBase

As the plight of every developer, we must constantly improve our personal website and blog to reflect our latest passion and exploration.

![](../../../assets/giphy_fa0f9ejfy5.gif)

...of course not all developers need to do this but it is a fun exercise none the less.

I really enjoy being able to look at new tech stacks and find ways to simplify my setup or make it more fun to use.

Context
-------

For those that have not been following my migrations, I have been an early adopter on various tech stacks and especially for my blog.

My very first website for [rodydavis.com](https://%20rodydavis.com) was made with [Wix](https://wix.com/) which was great to get started but it was before I became a developer.

I later migrated my blog to [Github Pages](https://pages.github.com/) with [Jekyll](https://jekyllrb.com/) and was very happy with it and introduced me to [Frontmatter](https://dev.to/dailydevtips1/what-exactly-is-frontmatter-123g) and [Markdown](https://google.github.io/styleguide/docguide/style.html).

This worked for awhile, but then I wanted to make it a lot more customized which is when I migrated to [11ty](https://www.11ty.dev/). This was a dead simple migration as I just needed to move my blog posts and add some config for my website metadata.  
  
As much as I loved the customization, it became hard to make my blog depend on [Node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) but I still adopted it and setup some [Github Actions](https://github.com/features/actions) to build my website when I push commits.

I then migrated my blog to a custom solution based on [lit](https://lit.dev/) [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) but did not last long as it was mostly just for exploration. In the past I even had a version of my website built with [Flutter](https://flutter.dev/) too.

The next big migration was to [Obsidian](https://obsidian.md/) which allowed me to publish my website with [Obsidian Publish](https://obsidian.md/publish) very easily from my phone or laptop.

This finally broke me free of needing to bundle my website and was very happy with this setup, which leads me to today...

PocketBase
----------

For those that are not familiar, [PocketBase](https://pocketbase.io/) is a [Go](https://go.dev/) library that compiles to a single binary, backed by SQLite as an open source CMS.

![](../../../assets/screenshot_2025_01_20_at_11_53_in1ca1lmdg.29AM.png)

This makes it dead simple to deploy to a small VPS and and just point your custom domain to it with free SSL cert generation using [Let's Encrypt](https://letsencrypt.org/).

Coolify
-------

The other thing I am now doing is hosting my website on [Coolify](https://www.coolify.io/) via a [Hetzner](https://www.hetzner.com/) server.

![](../../../assets/screenshot_2025_01_20_at_12_01_u1dsid5hmx.06PM.png)

This has been a joy to use and makes it easy to deploy to VPS you own in [GCP](https://cloud.google.com/), [Digitial Ocean](https://www.digitalocean.com/), [Hetzner](https://www.hetzner.com/) or even a [Rasberry PI](https://www.raspberrypi.com/) 👀.

Conclusion
----------

Now I can deploy my website with no build step (for the frontend) and have dynamic features like the [Open Heart Protocol](https://openheart.fyi/), live view counts, dynamic tag pages, live editor on the web and generated RSS feed.

If you want to see the **source code** you can find it [here](https://github.com/rodydavis/rodydavis).
