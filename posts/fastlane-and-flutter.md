---
layout: layouts/post.njk
title: "Using Fastlane in Flutter and CI"
date: 2019-10-16
categories: [flutter, ci]
image: /img/banner.jpeg
---

Prerequisites:

* Understand what [Fastlane](https://fastlane.tools/) is and how it works

* Project builds correctly following these [docs](https://flutter.dev/docs/deployment/cd)

* Android app setup in [Google Play Console](https://developer.android.com/distribute/console)

* iOS app setup in [AppStore Connect](https://appstoreconnect.apple.com/)

* [Flutter is installed](https://flutter.dev/docs/get-started/install) and your project is created

1. Open your Flutter project

1. Run: cd ios

1. Run: fastlane init and follow the prompts

1. Replace the Fastfile contents with this:

<iframe src="https://medium.com/media/fbfeb5ff49f489283bb93b88172e4a44" frameborder=0></iframe>

5. Run: cd .. && cd android

6. Run: fastlane init and follow the prompts

7. Replace the Fastfile contents with this:

<iframe src="https://medium.com/media/ef171e4a2ba0d48a77bcb266754d2886" frameborder=0></iframe>

8. Run: fastlane add_plugin versioning_android and enter your password if needed

9. Run: cd ..

Now you are ready to launch your app to beta!

For ios run: cd ios && fastlane beta

For android run: cd android && fastlane beta

Stay tuned for an article soon where we use these fastlane sub folders for automating the releases on [Github Actions](https://github.com/features/actions) CI
