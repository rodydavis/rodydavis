---
title: Automate Flutter App Releases
description: >
  Automate your Flutter app releases to beta or production with this handy shell
  script that handles version bumping, formatting, cleaning, rebuilding, and
  deployment via Fastlane.
date: '2025-01-19 06:09:34.328Z'
draft: false
tags:
  - Flutter
  - CI-CD
  - Fastlane
summary: >-
  Automates Flutter project building, beta testing, and release processes with
  Git commit integration.
embedding: >-
  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
related:
  - fastlane-and-flutter.md
  - flutter-cheat-sheet.md
  - flutter/git-worktree-channels.md
  - first-flutter-project.md
  - host-flutter-rest-api.md
---

> **TLDR** You can find the script [here](https://gist.github.com/rodydavis/774b36e32d7efa882cca8dd16da6e74c).

```markdown
#!/bin/bash

echo "App Release Automator by @rodydavis"

action="$1"
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [ ${action} = "build" ]; then

    echo "${green}Generating built files.. ${reset}"
    flutter packages pub run build_runner clean
    flutter packages pub run build_runner build --delete-conflicting-outputs

    pub global activate pubspec_version
    git commit -a -m "Build $(pubver bump patch)"
    
    echo "${green}Building Project...${reset}"
    find . -name "*-e" -type f -delete
    flutter format .
    flutter clean

    echo "${green}Project Size: $(find . -name "*.dart" | xargs cat | wc -c)${reset}"

    echo "${green}Building APK...${reset}"
    flutter build apk

    echo "${green}Builing IPA..${reset}"
    cd ./ios && pod install && pod repo update && cd ..
    flutter build ios

    git commit -a -m "Project Rebuilt"


elif [ ${action} = "beta" ]; then

    echo "${green}Generating built files..${reset}"
    flutter packages pub run build_runner clean
    flutter packages pub run build_runner build --delete-conflicting-outputs

    pub global activate pubspec_version
    git commit -a -m "Beta $(pubver bump patch)"
    
    echo "${green}Building Project...${reset}"
    find . -name "*-e" -type f -delete
    flutter format .
    flutter clean

    echo "${green}Project Size: $(find . -name "*.dart" | xargs cat | wc -c)${reset}"

    echo "${green}Building APK...${reset}"
    flutter build apk

    echo "${green}Sending Android to Beta...${reset}"
    cd ./android && fastlane beta && cd ..

    echo "${green}Builing IPA..${reset}"
    flutter build ios

    echo "${green}Sending iOS to Beta..${reset}"
    cd ./ios && fastlane beta && cd ..

    git commit -a -m "Sent to Beta"


elif [ ${action} = "release" ]; then

    echo "${green}Generating built files..${reset}"
    flutter packages pub run build_runner clean
    flutter packages pub run build_runner build --delete-conflicting-outputs

    pub global activate pubspec_version
    git commit -a -m "Production $(pubver bump minor)"

    echo "${green}Building Project...${reset}"
    find . -name "*-e" -type f -delete
    flutter format .
    flutter clean

    echo "${green}Project Size: $(find . -name "*.dart" | xargs cat | wc -c)${reset}"

    echo "${green}Building APK...${reset}"
    flutter build apk

    echo "${green}Sending Android to Production...${reset}"
    cd ./android && fastlane release && cd ..

    echo "${green}Builing IPA..${reset}"
    flutter build ios

    echo "${green}Sending iOS to Production...${reset}"
    cd ./ios && fastlane release && cd ..

    git commit -a -m "Sent to Production"

fi

echo "${green}Successfully completed${reset}"
```

Needed:

*   Fastlane setup in each directory
*   build\_runner as a dependency
*   Git Project in VCS

Steps to Run:

1.  Download this file and put it at the root level of your flutter project
2.  Open the terminal and navigate to your project location
3.  Enter this command: `chmod +x release.sh`

Usage

*   For beta: `./release.sh beta`
*   For production: `./release.sh release`

It will do the following:

*   Bump the version numbers if you are using the version in the `pubspec.yaml`
*   Release the apps with Fastlane
*   Format all Dart Files
*   Clean Project
*   Rebuild classes
*   Add commit message

Make your life easier and automate your builds to beta and production!

What you need 
--------------

*   [Fastlane](https://fastlane.tools/) setup in each directory
*   [build\_runner](https://pub.dartlang.org/packages/build_runner) as a dependency
*   Git Project in VCS

Initial Setup 
--------------

*   Download [this file](https://gist.github.com/rodydavis/774b36e32d7efa882cca8dd16da6e74c)
*   Put it at the root level of your flutter project
*   Open the terminal and navigate to your project location
*   Enter this command: chmod +x release.sh

Usage 
------

Now you can call this script!

*   For beta: `./release.sh beta`
*   For production: `./release.sh release`

Overview 
---------

*   Bump the version numbers if you are using the version in the pubspec.yaml
*   Release the apps with Fastlane
*   Format all Dart Files
*   Clean Project
*   Rebuild classes
*   Add commit messages
*   Updates Cocoa Pods
