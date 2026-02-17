---
title: Using Fastlane in Flutter and CI
description: >
  Automate Flutter app builds and deployments to both the App Store and Google
  Play using Fastlane with this step-by-step guide.
date: '2025-01-20 02:50:39.713Z'
draft: false
tags:
  - Fastlane
  - Flutter
  - Dart
  - CI-CD
summary: >-
  Automates Flutter project building, APK/IPA generation, and Git commits using
  Fastlane, requiring Flutter, Android/iOS app store setups, and basic project
  build knowledge.
embedding: >-
  c/LRvfkJkzt9qxw9a8SBvACUVTxl1lg8BGrBvEk+RTpb5s49OYwyvaCmGj0XA468+cpYvS7mUL3qiGm83UVRPQd03zwDq0893CnsvFxSeLxe68s83VsHPRxmaLyNG1E7B2kVPXaguDyWfN08qj1TvT1RcT0l0US9nzZ0PQdsGD2Sbw49OxVyPabJfL1cduQ7Stqcuz5fMDuxkck8eUcXvUl5GL274iM9S16PuyLOHrw9n488XAmovVeJfzmjKCG9Wb9fvTNhgbx1ukE94H2evO3fmrqnhNS8xIToPLPfCb2/gNm8ee4hu6SPGzxnuQU8PAm+vWiWNTvIJeK8qagivY6ynTxCqh49vphYPfQEmj1qoCo7dVsIPkNQHz3aZg68QhEtvQJF6bw6wMo9T9P1PVAT8Dp7dXk8Ozq+PIwxejwA8aM84rP3vDO9Bb1P7L679Q+fPUC9Sz2Cq+k823amvLU+jj2mmcq7xfWUupTIkrs3+1y9He3pO/S7K71KqRO9ccB8vEbt1rwDVX259Gu7OiBCEzzyImI9XDVuvCWaDj2C7Q088sfNPPLfkjzZiyc8YFmAvSu3ibtCdWa9CVu9PE7kJb3f1IW9FedOPGo7ez2+fLa8uZMKPP57UbzR9YE8wypMPTz7q7yzvzK901lUu040rbxaa0M9GM4fPMq4X7wX0PY7sD9qPU+b7jxC/BM9YYz3PFpYmTwxo5q9E2lGvNKeObtArvU8FOuzOvkX0by0Kqm8PVw9vc5PjbxRkqC7tax6PQ+iKz3mDvK8NQFSO+iZsrtw7ec8O354PPJmJj26zsg8aKM6PQA+brwhRJa8+NB+O+tamz22NM+7XZSFO1Zqw7tmN7+72abHPbxk6DvC8/68VKirPT3sWj0Jlac7RDgmvcAxa71TuO48XMAEvR+qIr02bw+9CSYkPd7KLDwOW5g8hQBfPJTFSrwH7zk9BV1ZPHInGz0vs1a8KW2ju48FSrxrOfo8orm0vE09Dz2ceMq8IvwWPTyDuDsk6p27OhpKuzZZr7zlij09P5uqPO1uXj3qXhm8A0Kvvdj7Kz1tty+8mppAvTbGnLwUY268EZEkPXCNLzxPF987wdeku2L0lDrMOYu8Z/H5vK6li72FJgS8mdwUPUqcszypQ2a6dimIPPcqqbpxgSm5iXQpvSfaHD1PENU7ms1yvd2gSb2gdk+8vRx4vFLhDzv3igQ7fzrOu4TXQbzlXxG9px6lPKbxNby2ztk8SBwDPE0iEbsivUc7/MNiPYtZSLxVpy49HwWTvFsYdTyVJHG7zVIzPJZaEz0KPwI8fPbrPJpdg72Ux/07dQRaPcUFmzzHnPw8S1mAPRNfAL20wfe87vObOjlPXLyv3fa6ThUgPeEjojzw/309MhJlu8p+HL2tnwm98TQCPLwHAj0DK+k8JwIQvZz00b3/ykG9jLpxPbl1vru7NFm8J1qQu9IZZzyNao64s3LYOsz+Lb2+FqW84O9ovQmHI7zoIEY9Ic6CvOrhrzzRA9k8kNv1vB793jygCyk9cUDfvEiFIL26igW91mDYPH4NNDxHRX47AftUvV3UBT39YTG9BDbavOzbz7uozY87dvK5PcHY17yLTSo9X/aSvHzVrLorCUw9tOdKPQLrcb0P6zu9wdwUusZUPL0KDd+8bYwnPGTiPL0LFPW7UXFPvPItlb3mjys8qhaLvG2MpbwiSB29OlXGPEcAxTx21zI9SBeCvHwIob2ZuQa9GBmmvO5V4b0aOQ+86d7hPLyoKL2/ESo9bCrPPN1xgb1e7Oq7VreCPQhYLj3C0RG7wi7ZPFI6aTzKME+8uMLFvFM3x70uprK8AlJIPSIFiLxciYw8P1eFvPMnHz2EzQ29RXbTu/6I0Dx5HRo9ZAycvcPOEL34kss7DibePPCJlj3CLgk924I8vMjcHr2aiBC8ClOivKqnQDxU+326gXwGvMtXODyuf7E6e6ywu+5ykb0lEWI7tWUoPaGtdDyD+9W7SugaPdGIFb2wup+9uDNCO8gxrD2lE4e6udCnPItfLrzAfMM8FSQgPUAmZL2zvpe8onvCPeWXL7wvpxM9JlgQvZmEQL2zgxo9H1eUvS/WojvDivi8PnjMPE4sfz0VH4+9v2w1vNoi0LvV3yq94wVLvQJgojveADw7/AIEvb7kN7xGRRk97n23uis7H7zGwTK838EhvXI/8DzGYj+7xRojPXorDj39TJw6FoOFPbtvI70D2707mdiCvUj14zw0s6W8zZqZPJMaNz0WoIY9Bq41PTpxTb2jcZY9XfQjveLCBzxPYU29QS9wvb+GEr3dTLG7Od3MvF1tRjquUSo6Lo+MOxkte7wUvkO84QdAPesbY73WZGk8zb/wvAZEAbz8wuI87xlKvQniPb361dG7sK9NvGvvRL1tfL08uTqfvAzvKrwJrqu8GuABPGQp4DwKq7G8bmg2PLoTgryA8/w8WAN8O423t7xpEtK7J+AXPXzMAL05chA9eQpxPEwwCb0frz+8hEQGPQ3jqLxINJ08CCYKvJ/dOL2N6Tg9JlqjPU1MS7wsXfc8FFMFPJ2ZFj3730y9igOAO6UzlLsdpiO9qs8APLFoU7wKIIg86ysOvTdcSb1hWN88iObbPAhyH73bCXc8s9IHvTP8O72nRr88JRj2uxwAmTy3Ad68xrzMPDkgjj1Ltbm59qdZu1oZyjsMXcA9whTVvBOybz0BvBA7rTsoPDQc7zrZ5W+6+w6iPVER77ykqgy9jNQivWnxTbve8Cq9A5CqvBOk3LzIkgI9njMVvZo+az2ojKW7tHHHO3dKIL2yV1C7hXIVPc6wEztY6C69argNPYafBz3qZUC9T9zMPNfj7bwoCtu8j3XtOxxFPz3JepO89i+fPC0XB7xJJw+9uXeJvGvX7LxJQh490CgRvBVDuLuYHDI9/10qPN6BYTv/6H47NbBGvZAGe7uFR9S8PsjlO9SYKT3fhow7K96CPEElojw2LCw99As8PUbWvL3HUKs70IbGvK1SazyMhjm7w+qvPDeBBr1r9jw77ANxOzAU+LyMutE7jC3JPC/fqrzvLhM9L/o5PXXVuzx7e+s70kQLvL1wnrwnDZY814aHPOQZETtIAiE9nU+pujPyEjymC+k83KplvLFL9jyIOhM6jLkPOOw4vTyXpbA8yBDhvJ7zGrzj17Y9HC+Du311Kj2bw1K9lmpMPQqkKL2zemI9mLxrPdE6nTxC6EM9oMGcPEaLqT0ymBQ8MosEveuEvrzEnj69zkQSPewSrDzVgbA8lwMrvViksDxV4um8mNbuvKqzILyfDTo9wdf4PN+F07tkM3M8r5LsPBgxMDwR8qE8cy+tuz2O9rwIZe68NbZ2OjBKuzzcv9w8VnRhPfoB0rtTbRu96L1VPduW3ruQGQW9BY1hvT0IVD24J+S8QfhlPN81Hz1vswm9Mb4YvPVROLyjsjs8JzDlPO1BIjxqOQg7MjX4vQ4aqLtey0+95UDovNAXIz3OQhS9Ul5ROsojr7wuVpC8CUqpvQ0KBT2J3yS9YpB0vR173DyUOFC8fswYvX62JrwKxiU8CamovPxiDr3fwiK8JhDiOwquSrziTAm7dzfFPJ0hn7z/lYK8b9tivV2arL0rivk7AhHouuzZ+TzWYmk9bzavPOUWCL1Zae88dGRFvKaAcD0anBA9ja+IPEJYtT09AT09N70mvS3sG71u+j88uLaMvQQMpLsIE5M7NqmFvUgKmjwDYQK9lGo+vVztp7xVR/u8HNVbvcGlG73NrkE9LEoEvKWxE7zpDti87cw4PQwX6TzsNkW89CFZvIj7Jz2rep89IjwCPKM9vztEMYg9/kWVO0muF72+Uro8qs3EvGdIGz0/Q1y7oCngvD2pTTycDzK8WAPpPEr3v7vHD+o8xt62vDokhDyQYki9ldV+vCcBAD1eiPC85ooTvJxgqbxTQI49RvQdPAeahz3q3Iy9jTFuvWULmjx6lHg80+ljPdjzALtD6X89hnm/vAsRJjwacQ49m/Y4vAeq7Tvxl2e9fYFZPK2QVr0+vOM6ENUqvQSo2ryvTU68nxn4PAVCWbz2+/s8P1UpvLs9brzgS5S8
related:
  - automate-flutter-apps.md
  - flutter-cheat-sheet.md
  - flutter-one-click-release.md
  - flutter-and-xcode-cloud.md
  - host-flutter-rest-api.md
---

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
