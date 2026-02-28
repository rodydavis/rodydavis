---
title: Automate Flutter App Releases
date: '2025-01-19 06:09:34.328Z'
draft: false
tags:
  - flutter
  - dart
  - github
  - fastlane
summary: >-
  Automates Flutter app release processes, including building, committing
  changes, and deploying to beta and production via Fastlane.
embedding: >-
  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
related:
  - flutter/fastlane.md
  - flutter/one-click-release.md
  - flutter/cheat-sheet.md
  - flutter/git-worktree-channels.md
  - videos/firebase-studio/start-prototyping-with-firebase-studio.md
---

# Automate Flutter App Releases

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
