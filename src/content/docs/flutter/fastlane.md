---
title: Using Fastlane in Flutter and CI
date: '2025-01-20 02:50:39.713Z'
draft: false
tags:
  - flutter
  - dart
  - github
  - fastlane
  - google
summary: >-
  This guide outlines how to use Fastlane to automate the build process for
  Flutter applications, including steps for initializing Fastlane and
  configuring scripts for generating APK (Android) and IPA (iOS) files for both
  general and beta releases.
embedding: >-
  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
related:
  - flutter/automation.md
  - flutter/one-click-release.md
  - flutter/native-cross-platform.md
  - flutter/ssr-rfw.md
  - flutter/cheat-sheet.md
last_updated_metadata: '2026-11-01T02:28:36.939Z'
---

# Using Fastlane in Flutter and CI

Prerequisites:

*   Understand what [Fastlane](https://fastlane.tools/) is and how it works
    
*   Project builds correctly following these [docs](https://flutter.dev/docs/deployment/cd)
    
*   Android app setup in [Google Play Console](https://developer.android.com/distribute/console)
    
*   iOS app setup in [AppStore Connect](https://appstoreconnect.apple.com/)
    
*   [Flutter is installed](https://flutter.dev/docs/get-started/install) and your project is created
    

### Steps

1.  Open your Flutter project
    
2.  Run: cd ios
    
3.  Run: fastlane init and follow the prompts
    
4.  Replace the Fastfile contents with this:
    

```ruby
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

5.  Run: cd .. && cd android
    
6.  Run: fastlane init and follow the prompts
    
7.  Replace the Fastfile contents with this:
    

```ruby
# Uncomment the line if you want fastlane to automatically update itself
# update_fastlane

default_platform(:android)

platform :android do
  desc "Prepare and archive app"
  lane :prepare  do |options|
    #bundle_install
    Dir.chdir "../.." do
      sh("flutter", "packages", "get")
      sh("flutter", "clean")
      sh("flutter", "build", "appbundle", "--release")
    end
  end
  
  desc "Push a new beta build to Google Play"
  lane :beta do
    prepare(release: false)
    upload_to_play_store(
      track: 'beta',
      aab: "../build/app/outputs/bundle/release/app.aab"
    )
    add_git_tag(
      grouping: "fastlane-builds",
      prefix: "v",
      build_number: android_get_version_code
    )
    push_to_git_remote
  end

  desc "Push a new release build to the Google Play"
  lane :release do
    prepare(release: true)
    upload_to_play_store(
      track: 'production',
      aab: "../build/app/outputs/bundle/release/app.aab"
    )
    add_git_tag(
      grouping: "release",
      prefix: "v",
      build_number: android_get_version_name
    )
    push_to_git_remote
  end
end
```

8.  Run: fastlane add\_plugin versioning\_android and enter your password if needed
    
9.  Run: cd ..
    

Now you are ready to launch your app to beta!

For ios run: cd ios && fastlane beta

For android run: cd android && fastlane beta

Stay tuned for an article soon where we use these fastlane sub folders for automating the releases on [Github Actions](https://github.com/features/actions) CI
