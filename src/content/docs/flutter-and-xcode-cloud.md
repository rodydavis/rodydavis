---
title: How to build a Flutter app on Xcode Cloud
description: >
  Learn how to set up Xcode Cloud to build and deploy your Flutter application
  to TestFlight and the App Store with this step-by-step guide.
date: '2025-01-20 00:38:40.775Z'
draft: false
tags:
  - CI-CD
  - Dart
  - Flutter
  - Xcode
summary: >-
  This article details how to set up Xcode Cloud for building Flutter
  applications for TestFlight and App Store submission, including project setup,
  installing dependencies, and configuring a post-clone script.
embedding: >-
  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
related:
  - flutter-one-click-release.md
  - fastlane-and-flutter.md
  - figma-and-lit.md
  - palm-2-api-dart.md
  - host-flutter-rest-api.md
---

In this article we are going to go over how to setup [Xcode Cloud](https://developer.apple.com/xcode-cloud/) to build your [Flutter](https://flutter.dev/) application for [TestFlight](https://developer.apple.com/testflight/) and the [AppStore](https://developer.apple.com/app-store/).

Step 1 
-------

Before we begin Flutter needs to be installed, and you can check by running the following:

```markdown
flutter doctor -v
```

After it is installed we can run the following command to create and open our Flutter project (skip down to step 2 if adding to an existing app).

```markdown
mkdir flutter_ci_example
cd flutter_ci_example
flutter create .
```

If you need more help with creating the first project you can check out my previous blog post [here](https://rodydavis.com/posts/first-flutter-project/).

After the project is created open it in your favorite code editor.

```markdown
code .
```

Step 2 
-------

The generated files should look like the following:

![](../../assets/x_1_qw8btmibvc.webp)

Create a new file at `ios/ci_scripts/ci_post_install.sh` and update it with the following:

```markdown
#!/bin/sh

# Install CocoaPods using Homebrew.
brew install cocoapods

# Install Flutter
brew install --cask flutter

# Run Flutter doctor
flutter doctor

# Get packages
flutter packages get

# Update generated files
flutter pub run build_runner build

# Build ios app
flutter build ios --no-codesign
```

This is a file Xcode Cloud needs to run after the project is downloaded. We need to install [cocoapods](https://cocoapods.org/) for any plugins we are using and Flutter to prebuild our application.

Then run the following command which will make the script executable:

```markdown
chmod +x ios/ci_scripts/ci_post_clone.sh
```

Step 3 
-------

Open up the iOS project in Xcode by right clicking on the iOS folder and selecting "Open in Xcode".

![](../../assets/x_2_i34bfwz1u0.webp)

You can also open the project by double clicking on the `ios/Runner.xcworkspace` file.

![](../../assets/x_3_80qu3qrdlp.webp)

Make sure you have the latest version of Xcode Cloud install and that you have [access to the beta](https://developer.apple.com/xcode-cloud/beta/). Create a new workflow by the menu `Product > Xcode Cloud > Create Workflow`:

![](../../assets/x_4_xsrdzbddjh.webp)

Follow the flow to add the project and choose which type of build you want.

Make sure to remove MacOS as a target in the workflow by selecting `Archive - MacOS` and the delete icon on the top right.

If you want to build and release the MacOS app you will need to do that with another script in the macos folder and a workflow in that Xcode workspace.

You can create the file `macos/ci_scripts/ci_post_clone.sh` and update it with the following:

```markdown
#!/bin/sh

# Install CocoaPods using Homebrew.
brew install cocoapods

# Install Flutter
brew install --cask flutter

# Run Flutter doctor
flutter doctor

# Enable macos
flutter config --enable-macos-desktop

# Get packages
flutter packages get

# Update generated files
flutter pub run build_runner build

# Build ios app
flutter build ios --no-codesign
```

If all goes well it will look like the following after a successful build:

![](../../assets/x_5_zgz4x31cbp.webp)

Conclusion 
-----------

Flutter makes it ease to build and deploy to multiple platforms and Xcode Cloud takes care of the signing for Apple platforms.

You can learn more about cd and flutter [here](https://docs.flutter.dev/deployment/cd).
