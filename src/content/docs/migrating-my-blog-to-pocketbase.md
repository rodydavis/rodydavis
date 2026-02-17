---
title: Migrating my Blog to PocketBase
description: >
  This blog post chronicles a developer's fun and ongoing journey of migrating
  their personal website through various tech stacks, ultimately landing on a
  PocketBase and Coolify setup for simplified deployment and dynamic features.
date: '2025-01-20 20:08:23.622Z'
draft: false
tags:
  - Go
  - SQLite
  - PocketBase
  - Web Components
  - Lit
  - Coolify
summary: >-
  Developer exploring various tech stacks and personal website migrations,
  including Wix, Github Pages with Jekyll, 11ty, Lit, and Obsidian Publish, to
  optimize workflow and showcase explorations.
embedding: >-
  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
related:
  - dart-html-web-components.md
  - html-code-sandbox.md
  - lit-draggable-dom.md
  - codemirror-dynamic-theme.md
  - figma-and-lit.md
---

As the plight of every developer, we must constantly improve our personal website and blog to reflect our latest passion and exploration.

![](../../assets/giphy_fa0f9ejfy5.gif)

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

![](../../assets/screenshot_2025_01_20_at_11_53_in1ca1lmdg.29AM.png)

This makes it dead simple to deploy to a small VPS and and just point your custom domain to it with free SSL cert generation using [Let's Encrypt](https://letsencrypt.org/).

Coolify
-------

The other thing I am now doing is hosting my website on [Coolify](https://www.coolify.io/) via a [Hetzner](https://www.hetzner.com/) server.

![](../../assets/screenshot_2025_01_20_at_12_01_u1dsid5hmx.06PM.png)

This has been a joy to use and makes it easy to deploy to VPS you own in [GCP](https://cloud.google.com/), [Digitial Ocean](https://www.digitalocean.com/), [Hetzner](https://www.hetzner.com/) or even a [Rasberry PI](https://www.raspberrypi.com/) 👀.

Conclusion
----------

Now I can deploy my website with no build step (for the frontend) and have dynamic features like the [Open Heart Protocol](https://openheart.fyi/), live view counts, dynamic tag pages, live editor on the web and generated RSS feed.

If you want to see the **source code** you can find it [here](https://github.com/rodydavis/rodydavis).
