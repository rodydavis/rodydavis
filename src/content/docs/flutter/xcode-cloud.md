---
title: How to build a Flutter app on Xcode Cloud
date: '2025-01-20 00:38:40.775Z'
draft: false
tags:
  - flutter
summary: >-
  This article explains how to set up Xcode Cloud for building Flutter
  applications, including installing dependencies, running Flutter doctor, and
  building for TestFlight and the App Store.
embedding: >-
  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
related:
  - flutter/getting-started.md
  - flutter/native-cross-platform.md
  - flutter/host-rest-api.md
  - videos/ai/how-to-connect-interfaces-to-the-cloud-with-ai-agents.md
  - videos/take-5/your-first-flutter-project.md
---

# How to build a Flutter app on Xcode Cloud

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

![](../../../assets/x_1_qw8btmibvc.webp)

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

![](../../../assets/x_2_i34bfwz1u0.webp)

You can also open the project by double clicking on the `ios/Runner.xcworkspace` file.

![](../../../assets/x_3_80qu3qrdlp.webp)

Make sure you have the latest version of Xcode Cloud install and that you have [access to the beta](https://developer.apple.com/xcode-cloud/beta/). Create a new workflow by the menu `Product > Xcode Cloud > Create Workflow`:

![](../../../assets/x_4_xsrdzbddjh.webp)

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

![](../../../assets/x_5_zgz4x31cbp.webp)

Conclusion 
-----------

Flutter makes it ease to build and deploy to multiple platforms and Xcode Cloud takes care of the signing for Apple platforms.

You can learn more about cd and flutter [here](https://docs.flutter.dev/deployment/cd).
