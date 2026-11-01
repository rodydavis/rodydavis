---
title: Deep Linking for Flutter Web
date: '2025-01-19 07:56:03.725Z'
draft: false
tags:
  - flutter
  - dart
  - github
  - web
summary: >-
  Learn how to implement deep linking for Flutter Web to enable proper URL
  navigation, including opening links to specific pages and protected routes.
related:
  - flutter/ssr-rfw.md
  - flutter/native-cross-platform.md
  - flutter/multi-touch-canvas.md
  - flutter/display-html.md
  - flutter/lit-interop.md
last_updated_metadata: '2026-11-01T09:41:36.869Z'
---

# Deep Linking for Flutter Web

In this article I will show you how to have proper URL navigation for your application. Open links to specific pages, protected routes and custom transitions.

> **TLDR** The final source [here](https://github.com/rodydavis/flutter_deep_linking) and an online [demo](https://rodydavis.github.io/flutter_deep_linking/).

Setup 
------

Create a new flutter project called “flutter\_deep\_linking”

Open that folder up in VSCode.

Update your “pubspec.yaml” with the following:

![](../../../assets/deep_1_qbot26kikl.webp)

Step 1 
-------

Create a file at “lib/ui/home/screen.dart” and add the following:

![](../../../assets/deep_2_8o7bk1h6ep.webp)

Update your “lib/main.dart” with the following:

![](../../../assets/deep_3_u638b3ccuy.webp)

Run your application and you should see the following:

![](../../../assets/deep_4_fk5zfnixom.webp)

Step 2 
-------

Now we need to grab the url the user enters into the address bar.

Create a folder at this location “lib/plugins/navigator”

Create a file inside named: “web.dart” with the following:

![](../../../assets/deep_5_r37mgvwx5q.webp)

Create a file inside named: “unsupported.dart” with the following:

![](../../../assets/deep_6_xogk4ly3ze.webp)

Create a file inside named: “navigator.dart” with the following:

![](../../../assets/deep_7_atfvh3z2tt.webp)

Now go back to your “lib/main.dart” file and add the navigator:

![](../../../assets/deep_8_4esmqtror6.webp)

> It’s important to import the navigator as shown as this will have the conditional import for web compiling.

If you run the app now nothing should change.

Step 3 
-------

Now let’s add the proper routing.

Create a new file “lib/ui/router.dart” and add the following:

![](../../../assets/deep_9_xae1ebw89x.webp)

Also update “lib/main.dart” with the following:

![](../../../assets/deep_10_ijxwpy9f4h.webp)

> Notice how we removed the “home” field for MaterialApp. This is because the router will handle everything. By default we will go home on “/”

Step 4 
-------

Now let’s add multiple screens to put this to the test! Add the following folders and files.

Create a file “lib/ui/account/screen.dart” and add the following:

![](../../../assets/deep_11_o9tev9myvc.webp)

Create a file “lib/ui/settings/screen.dart” and add the following:

![](../../../assets/deep_12_8gbj5hxdmq.webp)

Create a file “lib/ui/about/screen.dart” and add the following:

![](../../../assets/deep_13_aojf2nh3fj.webp)

Add the following to “lib/ui/router.dart”:

![](../../../assets/deep_14_9p3q4k5nqt.webp)

Now when you navigate to /about, /account and /settings you will go to the new pages!

![](../../../assets/deep_15_lahb8r2wyw.webp)

Step 5 
-------

Now let’s tie into the browser navigation buttons! Update “lib/ui/home/screen.dart” with the following:

![](../../../assets/deep_16_6ccpd3agpc.webp)

Now when you run the application and click on the settings icon it will launch the new screen as expected. But if you click your browsers back button it will go back to the home screen!

![](../../../assets/deep_17_rovfeoa2t1.webp)

![](../../../assets/deep_18_75rxz9598q.webp)

Step 6 
-------

These urls are great but what if you want to pass data such as an ID that is not known ahead of time? No worries!

Update “lib/ui/account/screen.dart” with the following:

![](../../../assets/deep_19_qyhv82wxfe.webp)

Let’s update our “lib/ui/router.dart” with the following:

![](../../../assets/deep_20_i6mmwwv4bg.webp)

Now when you run your application and navigate to “/account/40” you will see the following:

![](../../../assets/deep_21_ytsnzw349i.webp)

Conclusion 
-----------

Dynamic routes work great for Flutter web, you just need to know what to tweak! This package uses a forked version of fluro for some fixes I added but once the PRs is merged you can just use the regular package. Let me know what you think below and if there is a better way I am not seeing!

Here is the final code: [https://github.com/rodydavis/flutter\_deep\_linking](https://github.com/rodydavis/flutter_deep_linking)
