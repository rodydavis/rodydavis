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
  rLbGvc/qcLwgB3I8IXmzva2r5bt7RSG52sscvfmxdj1FPTo9GwXIvBIXBzrYfAk9ajKCvO4TiLxgC5Q87Q8mPU7+r7xDSAc85v09PDBRm72PA9E8Xo16PQr8J72v/3o9SOCHvf5omzxPxAY9ffwBvUn+bzy2v029fv8iPQ8OOzxT0z67LfkEPfPcizyvEHu9rm1RvVzmqLwVUgK9HeVyvDe6LrvrRo891vswvT3+RLy3Bcy6IL8dvAzyCDzzQki834LVPJofVT1nBBW9aeDfPNrRTL0MCo49B5Weu9xMo70OmAW9fs5XPC68N73tULy8PNqSvUYOkT3a3Fu9PA0GPe8EtjxLYms8GuXqvC4KIT3meB278YX4PRcPE72tlOy8nQ41PI9aq70NcRg+bzyKPTTAtDxT4769UVx0vLwGPLxDeMC8+8WcO78hu73jrbG86AX5PD6eVD0RAS294xKbPOVsLD0ynKe7vg36O7e+krzxw8E8DIQ8PVbwjTzS89G9iLOCvYxzAb25Xdm6JM/ovJxJEbySHlI8pRugPFqXtTwy7qA52VmUPEEuPDyrFaK8Lq0avflWXb2teAY7l4duPayIxrsRHaG8uHPzPJdWXr1r2m+8OdA8PToOqjztHGY959SLvJTan715jGQ8YicrujI+hbyEMwg9DPsivWm4IL3Utza9/nwEPZD49zzNlnI9pDiePBAfILxZ3KS8S8U9PV7Gmzy19R096DU1PKSBpjxu5tY840S3vaP4j7syxQM8iGmmu68aIjyLGX695flKvePKgTzkeJO8PeUaPXqOK7w4RSe9NFJ9PXikFL3wKoK5FvQVPSp+FL3WRUy9buC8PCCn3bwFSuy8r+jTO6QILr1qQ1W85iIVPTIORD1d98g8tyeRvehLCL344bA6tDUpOwmmnDzjyOA8fND9u8SgC7ylqZk6MUixPVbj2bpkV/Q8mxtKPTMq1LvyXBy9d8fgvEff/jyZT2s8QdhDvTD+IbygpkM8vHOQPFxoqLxGFKo7kcwHu0Oa8bzdwiI9QhlOPZsB3D1wqYW6dodnvS41hDzeLqe875PRuzpzzDqvuHc8ja6+PEfL9jxAexy8eGHYO6+lKr3G5MK5h014PKAmLryzuhg9yaa2vC6gCT00TQi9R+JFux/DkTsmLSO9193OO2rmVbx+hme8s0/mvMGThbxQ4Rq7mqQQvcZpl7ytDcM8XyQSPJEOiTyWeZQ89j9QvbfqOLxO/R89bScLvZdPYL0QuII7xMvVPEkTUL36i249k0QUvQex6zvOd9Y8Rl1sPY/8aD3b4WO9mMDlPIDyaDv7WWy8L13FuvFxRDwrsJ49BiAAPK5DlL2UsUe9tH7xvFe9RbzypRa9lqT2O28ZtLvsFSS6uL0tvYzbj71ZMRA88R3PPA8G97ugjx09RYkRPaMUuL10wxA9il88vfnB8DiFIxi8wVGyvYXpZzwZ7pW8oTqVu/D8bDyyPpq76pAoPAGKwrwufAA7LIqRvOVRCj1wDtG8yx0CO3Gxaj3jdEw9TrK5vMmhx7xMzm48ViOLPOUudTzOqBu9DoARvJReg7xZ47W9toH9vALckTu4ibY85Z3pPPdLNTxRJDw88+KrPKh55LyObmQ8eTAGvHtYE71jSby8N2/svHBhIbsmmLC6SiILPPGm1DtxFzY9kbUqvP9nu7zrAgy8rSQ+PViqrzyS1DO90DGGPKkmR7xDHpo9geZPvBqNs7zxKTc9GlY+PVpeAr65IYY9o0nYu1ZlXj00Kwg9eHNCO3hWk70u4Gs8BVaFu8pAkD2mtsK8hitwPWotSTzpoAS8jakvPed4i7yK0dK85HhkPTf59TxRDou6CnZ0PPvhqDzft2W9+ClquzAkMD3OQUs9idqqvCLbMzxCul88+z/YPCuWfTy9ZuU8TAqEu6/gwrqAk129/Q9BvLb0hjsXxSi90YnwvKLQnTxFDAe8SckgPehZNL0ixCY8bI9VPfP7Fr0xeoW9CCmIvRZPuzx61ks9Eqn0PItpAD1OXXo8LEaaPFQQ7buXhYa7CWmBvKXawzwRt4+51if6PDDcMz0DKb45wXsQvbskxbsOjnQ8MzyAu0Xo5TuGIza9qzDgvN+ISTsDnau3QaUQvT7XKbxhBOK8f+hcvegVUTzn9ao8mLfjvHOKPTsaq2g9nhuxvLCuZDpX4qu81RAnvR/r4Dyxz+Y8i/D9vAQzLjwR6AM9zppKPURxL7hb6jm9/2sbvSyKgj11AYU9I54tPWiCRj2+KG+7WtVaOreekr2DRbo8D973u/BCNTwvUo67jnkxPUjS8jwJ8KO6kRXbvBto0bw9qaA59tAQPYwpizw+M4C8kfG0vPxYhDsn10E8gRUYvQLedr3lNFm8Cq3fvHjZbb0MuhI8YyRjPayMS73aBRw9dhQvvT86D7vAvH88egQtPFOLo7vOCRs8dzkBPHwA2Lz4HC49vNklvZmg2rv8MC280retvMxvIb1q7568TC6NPF77d725KJC8JdxEPWW/S70Anmq9hqG1PHzlTL3gQia9mtymPP5vfz0dZ5u8j+znvBwHyriQgu475TwiPWfUGz1K1T69074Lvfy9CzzbGo+8yoPJvFhxnDyzgIc8hr0ZvNUrTDyUwLk8bmj+PBkyUL2kFcA9qHHbO9ENQT2GCII8evTSPBu3I7y3IPy8YaMFPYke97vIvCq9DzmDvLj6Kr1Go8g9OBXlPE9rTzyU2gG7aUYvPSDlVjy5ydA83QoivWmzPzzsn/a87QiivAAsJ7yU3gI9WmkNvf5SaL2taFM8EKKtvFLDQb1QLgq920cxPVFROj23LKa6O85mPanPj7rx1rW8mSw7vMj787zHLYy8RuurPJjCoTwnvuw83TnZvYEtJD23iJY8G479POxTRDwxt/K88EXdPFY6wzz7oA894x5PvIrKvrtzXs4913AnPYm9pj1gih28XutjPW7H97xHQow7fyaKPFCoAD0w5Qq9FB/LuxDEozwzVhi8/jVdPXHLrDvHPaS7BIJRvMZ9ZL2CbZE8WxGxvNskUz2e+Uq699SxPL88Kj0MJ4I8Eb3DOrpym7yqpdw8WjkAPOCVszoQ77U8K/IKPXVApjybUY08YixJPaQRgz21bCg71aCuO27mqDxzshS9qE1HPZLMoLtafFy78w2EPEkMT7ynlns7LfRIvbJcqj2ZZIW8JpAAvMaOIb13FSw95AB1PD3YdDy+QN28MSQHvV0v+Tyvz5O7NpnQu1AjvTxKH2w8VMgEvYqeDz0xjgK9NfYOvay+HT1tKhk9nplhu/k6srqNml89gp0KPPjk5zqpl/o8MxDNvEMSBj0NEc478VWIvcKROD1A+Zc9Ik6BvTTirDxfWOI7qmMVPV7KUj0yOlG8AnOlOxHSQD2fu9Q8XpzWvAeVEb3aZa48nMcPPZmERz1SMYC6qj5HvSe2sLwZfYm8JGu2vPR6QL1KR+27hbF9uAGk5rxoxd08niDsvMHy0LwePhO9mouKuoQQOLsUpBk9MwdFPJWTIr2+hw49AtaAvRaqaLyFFIW9mtwyPF3Z4Tw+lgA9D8wgvbiNLz3Ht4C8lFPoPIlsPD28wj08eVe5utTGyDxu1667OWUWPbrg0LxJJqu8wE+HvCcaJT3gqWc83eETPU3aX71j9+u8/2IIvcdxzbxEb+o8sstlvKvUaT2jL2U828RYOxrrGL0lanI9MOLMu2LbCj1BnsC819joPMhq7zsqYLG83ZQUPS7WK72iNK47A+9QvDjk9DwIxKk78v8FPTh1Iz2qmAo7j1LQPSUMor1m8Jw7X/FoPYlAfzxjUy09WJ1lvIXPr7zytdc8hrM4PXhm+zwuuE89LagDPOukAL1kOGA9nQKgu44lL7wChlY8ZB0jPXYJUbsPTAq9DrBLPDpZbr1WTlo9O/YGva59bbz12yi92K1aPUStUj1yQzc9YYkzvbSYQTynuqy8FAdvvHKtoT0zcqe7GCgGPb7QFD0YYuc8LLnQvGAnBb3YDlM6AoR9PBmDv7xMVQO9xSIyvbfSFr0Jpv88gnVuPVvdo7zZyEy87HIHPYE5Pr3dTbI8sXuyPMAfRL2iatu8
related:
  - videos/talks/moving-an-angular-app-to-flutter-web-devfest-fl-2019.mdx
  - lit/vscode-extension.md
  - lit/monaco-editor.md
  - podcast/tech-walks/building-with-antigravity-gemini-cli-and-stitch.mdx
  - lit/figma-interop.md
last_updated_metadata: '2026-05-23T00:09:03.315Z'
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
