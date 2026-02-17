---
title: Deep Linking for Flutter Web
description: >
  Learn how to implement proper URL navigation in your Flutter application,
  including deep linking to specific pages, handling protected routes, and
  creating custom transitions for a seamless user experience.
date: '2025-01-19 07:56:03.725Z'
draft: false
tags:
  - HTML
  - Dart
  - Flutter
summary: >-
  This tutorial demonstrates how to implement URL navigation, protected routes,
  and custom transitions in a Flutter application using deep linking and a
  custom router.
embedding: >-
  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
related:
  - palm-2-api-dart.md
  - flutter-ssr-rfw.md
  - flutter-one-click-release.md
  - static-site-file-based-routing.md
  - flutter-and-xcode-cloud.md
---

In this article I will show you how to have proper URL navigation for your application. Open links to specific pages, protected routes and custom transitions.

> **TLDR** The final source [here](https://github.com/rodydavis/flutter_deep_linking) and an online [demo](https://rodydavis.github.io/flutter_deep_linking/).

Setup 
------

Create a new flutter project called “flutter\_deep\_linking”

Open that folder up in VSCode.

Update your “pubspec.yaml” with the following:

![](../../assets/deep_1_qbot26kikl.webp)

Step 1 
-------

Create a file at “lib/ui/home/screen.dart” and add the following:

![](../../assets/deep_2_8o7bk1h6ep.webp)

Update your “lib/main.dart” with the following:

![](../../assets/deep_3_u638b3ccuy.webp)

Run your application and you should see the following:

![](../../assets/deep_4_fk5zfnixom.webp)

Step 2 
-------

Now we need to grab the url the user enters into the address bar.

Create a folder at this location “lib/plugins/navigator”

Create a file inside named: “web.dart” with the following:

![](../../assets/deep_5_r37mgvwx5q.webp)

Create a file inside named: “unsupported.dart” with the following:

![](../../assets/deep_6_xogk4ly3ze.webp)

Create a file inside named: “navigator.dart” with the following:

![](../../assets/deep_7_atfvh3z2tt.webp)

Now go back to your “lib/main.dart” file and add the navigator:

![](../../assets/deep_8_4esmqtror6.webp)

> It’s important to import the navigator as shown as this will have the conditional import for web compiling.

If you run the app now nothing should change.

Step 3 
-------

Now let’s add the proper routing.

Create a new file “lib/ui/router.dart” and add the following:

![](../../assets/deep_9_xae1ebw89x.webp)

Also update “lib/main.dart” with the following:

![](../../assets/deep_10_ijxwpy9f4h.webp)

> Notice how we removed the “home” field for MaterialApp. This is because the router will handle everything. By default we will go home on “/”

Step 4 
-------

Now let’s add multiple screens to put this to the test! Add the following folders and files.

Create a file “lib/ui/account/screen.dart” and add the following:

![](../../assets/deep_11_o9tev9myvc.webp)

Create a file “lib/ui/settings/screen.dart” and add the following:

![](../../assets/deep_12_8gbj5hxdmq.webp)

Create a file “lib/ui/about/screen.dart” and add the following:

![](../../assets/deep_13_aojf2nh3fj.webp)

Add the following to “lib/ui/router.dart”:

![](../../assets/deep_14_9p3q4k5nqt.webp)

Now when you navigate to /about, /account and /settings you will go to the new pages!

![](../../assets/deep_15_lahb8r2wyw.webp)

Step 5 
-------

Now let’s tie into the browser navigation buttons! Update “lib/ui/home/screen.dart” with the following:

![](../../assets/deep_16_6ccpd3agpc.webp)

Now when you run the application and click on the settings icon it will launch the new screen as expected. But if you click your browsers back button it will go back to the home screen!

![](../../assets/deep_17_rovfeoa2t1.webp)

![](../../assets/deep_18_75rxz9598q.webp)

Step 6 
-------

These urls are great but what if you want to pass data such as an ID that is not known ahead of time? No worries!

Update “lib/ui/account/screen.dart” with the following:

![](../../assets/deep_19_qyhv82wxfe.webp)

Let’s update our “lib/ui/router.dart” with the following:

![](../../assets/deep_20_i6mmwwv4bg.webp)

Now when you run your application and navigate to “/account/40” you will see the following:

![](../../assets/deep_21_ytsnzw349i.webp)

Conclusion 
-----------

Dynamic routes work great for Flutter web, you just need to know what to tweak! This package uses a forked version of fluro for some fixes I added but once the PRs is merged you can just use the regular package. Let me know what you think below and if there is a better way I am not seeing!

Here is the final code: [https://github.com/rodydavis/flutter\_deep\_linking](https://github.com/rodydavis/flutter_deep_linking)
