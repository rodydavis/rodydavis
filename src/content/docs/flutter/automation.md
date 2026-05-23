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
  Automate Flutter app releases using a comprehensive bash script that handles
  building the APK and IPA, calculating project size, and deploying versions to
  beta testing tracks.
embedding: >-
  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
related:
  - flutter/fastlane.md
  - flutter/one-click-release.md
  - flutter/cheat-sheet.md
  - videos/antigravity/how-to-build-with-flutter-and-google-antigravity.mdx
  - flutter/git-worktree-channels.md
last_updated_metadata: '2026-05-23T00:09:44.301Z'
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
