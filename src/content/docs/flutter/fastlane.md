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
  - flutter/one-click-release.md
  - flutter/automation.md
  - flutter/getting-started.md
  - videos/antigravity/how-to-build-with-flutter-and-google-antigravity.mdx
  - videos/take-5/your-first-flutter-project.mdx
last_updated_metadata: '2026-05-23T00:10:09.272Z'
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
