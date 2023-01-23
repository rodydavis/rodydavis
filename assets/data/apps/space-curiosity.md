---
title:  "Launching... Space Curiosity"
date:   2019-03-10
tags:
- flutter
- spacex
- nasa
- iss
- planets
- space
- ios
- android
image: /img/space-curiosity/icon.png
apple: https://apps.apple.com/us/app/space-curiosity/id1435609944
google: https://play.google.com/store/apps/details?id=com.chechu.curiosity
---

A brief overview of a new app built with [Flutter](https://Flutter.io) by Rody Davis and Jesus Rodriguez.

## Background

About 6 months ago Jesus Rodriguez launched his app "SpaceX GO!" On Reddit and I had just recently had launched my app "Daily NASA". I messaged him because not many people were building production apps with Flutter yet. I wasn't to see what he thought about collaboration. Over the next 6 months, we would brainstorm and design an app together in Flutter that could reach a larger audience. Him being an Android Dev took Google Play and me being iOS Dev I took the App Store.

![space-x-section](/img/space-curiosity/space-x.PNG)

## Development

What was so amazing about Flutter is that for the first time an iOS Dev and Android Dev could collaborate to design an app together that targeted both audiences. In our app, we decided to not go with material design or Cupertino style. 
With GitHub, it made it so easy to do Pull Requests and pitch and refactor the app without messing up the other. Aside from the occasional merge conflict. Most of the issues were due to Flutter and Dart evolving so fast and lots of hacks or struggles would be solved with an update.

![nasa-images](/img/space-curiosity/nasa-images.PNG)

One great thing about the Flutter plugin system is that if you find a plugin that does almost what you need but not all, you can fork the source and override the dependency in your `pubspec.yaml`. This was extremely useful when we had to update all of our plugins to support AndroidX.

![iss-section](/img/space-curiosity/iss.PNG)

When Flare by 2Dimensions came out, I was so inspired and created the "Weight Calculators" as you see in the app. All the 60fps animations are done in the app. This is the first product that allows the designer and developer to work together without messing up each other's workflow. You can view the animation here.

![calc-section](/img/space-curiosity/calc.PNG)

For the other parts of the app, we combined what we were working on individually. Jesus brought in and modified SpaceX Go!, and I did the same for daily NASA. Once we had a working prototype it was just a matter of writing a list of features and tackle them 1 by 1.

![news-section](/img/space-curiosity/news.PNG)

## Release

All this work would not be possible without the incredible community behind Flutter, and the tools at our disposal. Because we love you guys so much we are making the app free and open source. If there is a feature we do not have yet, feel free to dive into the code and make a Pull Request! We have a lot more to add and you can expect some pretty cool updated coming soon.

## Download Now (Beta)

[Source](https://github.com/jesusrp98/space-curiosity)

[TestFlight](https://testflight.apple.com/join/uIwSD3Rj)

## Other

Big thanks to Jesus Rodriguez to the awesome collaboration and ideas set forth.
You can find [Rody Davis](https://www.github.com/rodydavis) and [Jesus Rodriguez](https://www.github.com/jesusrp98) on Github.
