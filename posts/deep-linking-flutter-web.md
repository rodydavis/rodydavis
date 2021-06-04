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

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*T8p4RgLHWHHaAo1JbhUB-g.png">

## Step 1

* Create a file at “lib/ui/home/screen.dart” and add the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*1qTWt0lGfSQeUwoTjzbFuA.png">

* Update your “lib/main.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*Vo3FEkRX_to3SbYsUQ8a5Q.png">

* Run your application and you should see the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/3468/1*1O9oKvIOSCpgwJ6GekFG4Q.png">

## Step 2

Now we need to grab the url the user enters into the address bar.

* Create a folder at this location “lib/plugins/navigator”

* Create a file inside named: “web.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2072/1*hkuI9pfODs-yewfNUPMbTw.png">

* Create a file inside named: “unsupported.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*u2BPO9L2w9ci-RI9dOi43Q.png">

* Create a file inside named: “navigator.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2032/1*-QnmWVuypD4z58ZXLircaA.png">

* Now go back to your “lib/main.dart” file and add the navigator:

<img width="100%" src="https://cdn-images-1.medium.com/max/2080/1*UN0nQy8wcXELNBzfIMqNZA.png">

> It’s important to import the navigator as shown as this will have the conditional import for web compiling.

* If you run the app now nothing should change.

## Step 3

Now let’s add the proper routing.

* Create a new file “lib/ui/router.dart” and add the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2404/1*JpwIDmcnQMzxTdSr0OQWfQ.png">

* Also update “lib/main.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2120/1*4e_oz-ENDkaBS35ZoEZQMA.png">

> Notice how we removed the “home” field for MaterialApp. This is because the router will handle everything. By default we will go home on “/”

## Step 4

Now let’s add multiple screens to put this to the test! Add the following folders and files.

* Create a file “lib/ui/account/screen.dart” and add the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2056/1*vRXbGfLK-D1827s2C57aEQ.png">

* Create a file “lib/ui/settings/screen.dart” and add the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*FJK7a8eeOyVFbAcULxo_Gw.png">

* Create a file “lib/ui/about/screen.dart” and add the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2000/1*A9CJ8-bGCv2Np6ZLS9l5oA.png">

* Add the following to “lib/ui/router.dart”:

<img width="100%" src="https://cdn-images-1.medium.com/max/2332/1*kKTHn14JH6AXhkbuLUCnFA.png">

* Now when you navigate to /about, /account and /settings you will go to the new pages!

<img width="100%" src="https://cdn-images-1.medium.com/max/3468/1*5Qtymz13vrEZmCa9zRikWw.png">

## Step 5

Now let’s tie into the browser navigation buttons! Update “lib/ui/home/screen.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2516/1*6JTelDsDG6njWK8watZdlQ.png">

* Now when you run the application and click on the settings icon it will launch the new screen as expected. But if you click your browsers back button it will go back to the home screen!

<img width="100%" src="https://cdn-images-1.medium.com/max/3468/1*Fji7xHupcpduXITJ9JmzYw.png">

<img width="100%" src="https://cdn-images-1.medium.com/max/3468/1*8wQrI1MJPi6MGr65jaqjTQ.png">

## Step 6

These urls are great but what if you want to pass data such as an ID that is not known ahead of time? No worries!

* Update “lib/ui/account/screen.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2184/1*yOpcN7lpYP9cc5Mo2dJQwg.png">

* Let’s update our “lib/ui/router.dart” with the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/2064/1*izyMARAi5g8GrV3q-qwUcw.png">

* Now when you run your application and navigate to “/account/40” you will see the following:

<img width="100%" src="https://cdn-images-1.medium.com/max/3468/1*wKMr8wDsEWKxvrkTVnfKLQ.png">

## Conclusion

Dynamic routes work great for Flutter web, you just need to know what to tweak! This package uses a forked version of fluro for some fixes I added but once the PRs is merged you can just use the regular package. Let me know what you think below and if there is a better way I am not seeing!

Here is the final code: [https://github.com/rodydavis/flutter_deep_linking](https://github.com/rodydavis/flutter_deep_linking)
