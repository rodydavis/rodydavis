---
layout: layouts/post.njk
title: "Deep Linking for Flutter Web"
date: 2020-03-11
categories: [flutter, web]
image: /img/banner.jpeg
---

In this article I will show you how to have proper URL navigation for your application. Open links to specific pages, protected routes and custom transitions.

There is a online demo here:

[https://rodydavis.github.io/flutter_deep_linking/](https://rodydavis.github.io/flutter_deep_linking/)

Here is the source code:

[https://github.com/rodydavis/flutter_deep_linking](https://github.com/rodydavis/flutter_deep_linking)

## Setup

* Create a new flutter project called “flutter_deep_linking”

* Open that folder up in VSCode

* Update your “pubspec.yaml” with the following:

<img width="100%" src="/img/deep-linking/0.png">

## Step 1

* Create a file at “lib/ui/home/screen.dart” and add the following:

<img width="100%" src="/img/deep-linking/1.png">

* Update your “lib/main.dart” with the following:

<img width="100%" src="/img/deep-linking/2.png">

* Run your application and you should see the following:

<img width="100%" src="/img/deep-linking/3.png">

## Step 2

Now we need to grab the url the user enters into the address bar.

* Create a folder at this location “lib/plugins/navigator”

* Create a file inside named: “web.dart” with the following:

<img width="100%" src="/img/deep-linking/4.png">

* Create a file inside named: “unsupported.dart” with the following:

<img width="100%" src="/img/deep-linking/5.png">

* Create a file inside named: “navigator.dart” with the following:

<img width="100%" src="/img/deep-linking/6.png">

* Now go back to your “lib/main.dart” file and add the navigator:

<img width="100%" src="/img/deep-linking/7.png">

> It’s important to import the navigator as shown as this will have the conditional import for web compiling.

* If you run the app now nothing should change.

## Step 3

Now let’s add the proper routing.

* Create a new file “lib/ui/router.dart” and add the following:

<img width="100%" src="/img/deep-linking/8.png">

* Also update “lib/main.dart” with the following:

<img width="100%" src="/img/deep-linking/9.png">

> Notice how we removed the “home” field for MaterialApp. This is because the router will handle everything. By default we will go home on “/”

## Step 4

Now let’s add multiple screens to put this to the test! Add the following folders and files.

* Create a file “lib/ui/account/screen.dart” and add the following:

<img width="100%" src="/img/deep-linking/10.png">

* Create a file “lib/ui/settings/screen.dart” and add the following:

<img width="100%" src="/img/deep-linking/11.png">

* Create a file “lib/ui/about/screen.dart” and add the following:

<img width="100%" src="/img/deep-linking/12.png">

* Add the following to “lib/ui/router.dart”:

<img width="100%" src="/img/deep-linking/13.png">

* Now when you navigate to /about, /account and /settings you will go to the new pages!

<img width="100%" src="/img/deep-linking/14.png">

## Step 5

Now let’s tie into the browser navigation buttons! Update “lib/ui/home/screen.dart” with the following:

<img width="100%" src="/img/deep-linking/15.png">

* Now when you run the application and click on the settings icon it will launch the new screen as expected. But if you click your browsers back button it will go back to the home screen!

<img width="100%" src="/img/deep-linking/16.png">

<img width="100%" src="/img/deep-linking/17.png">

## Step 6

These urls are great but what if you want to pass data such as an ID that is not known ahead of time? No worries!

* Update “lib/ui/account/screen.dart” with the following:

<img width="100%" src="/img/deep-linking/18.png">

* Let’s update our “lib/ui/router.dart” with the following:

<img width="100%" src="/img/deep-linking/19.png">

* Now when you run your application and navigate to “/account/40” you will see the following:

<img width="100%" src="/img/deep-linking/20.png">

## Conclusion

Dynamic routes work great for Flutter web, you just need to know what to tweak! This package uses a forked version of fluro for some fixes I added but once the PRs is merged you can just use the regular package. Let me know what you think below and if there is a better way I am not seeing!

Here is the final code: [https://github.com/rodydavis/flutter_deep_linking](https://github.com/rodydavis/flutter_deep_linking)
