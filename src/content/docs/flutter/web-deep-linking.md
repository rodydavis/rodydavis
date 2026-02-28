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
  This tutorial demonstrates how to implement deep linking, protected routes,
  and custom transitions in a Flutter web application.
embedding: >-
  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
related:
  - videos/take-5/responsive-design-flutter.md
  - flutter/native-cross-platform.md
  - flutter/host-rest-api.md
  - videos/talks/moving-an-angular-app-to-flutter-web-devfest-fl-2019.md
  - videos/take-5/your-first-flutter-project.md
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
