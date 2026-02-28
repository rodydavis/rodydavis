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
  Automate Flutter app builds and releases to Google Play and App Store using
  Fasthlane by initializing the tool, configuring the Fasthile, and defining
  build/beta actions.
embedding: >-
  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
related:
  - flutter/automation.md
  - flutter/one-click-release.md
  - flutter/xcode-cloud.md
  - flutter/host-rest-api.md
  - flutter/git-worktree-channels.md
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
