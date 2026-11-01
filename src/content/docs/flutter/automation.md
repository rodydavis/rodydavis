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
  - flutter/git-worktree-channels.md
  - flutter/cheat-sheet.md
  - flutter/ssr-rfw.md
last_updated_metadata: '2026-11-01T02:28:36.402Z'
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
