---
title: "Flutter Cheat Sheet — Terminal"
date: 2020-03-05
publishDate: 5 Mar 2020
tags:
- posts
- flutter
- scripting
image: /assets/images/flutter_first.png
---

Run Flutter web with SKIA

```bash
flutter run -d web --release --dart-define=FLUTTER_WEB_USE_SKIA=true
```

* Run Flutter web with Canvas Kit

```bash
flutter run -d chrome --release --dart-define=FLUTTER_WEB_USE_EXPERIMENTAL_CANVAS_TEXT=true
```

* Build your Flutter web app to Github Pages to the docs folder

```bash
flutter build web && rm -rf ./docs && mkdir ./docs && cp -a ./build/web/. ./docs/
```

* Clean rebuild CocoaPods

```bash
cd ios && pod deintegrate && pod cache clean —all && pod install && cd ..
```

> Sometimes with firebase you need to run: `pod update Firebase`

* Create Dart package with Example

```bash
flutter create -t plugin . && flutter create -i swift -a kotlin --androidx example
```

* Watch Build Files

```bash
flutter packages pub run build_runner watch  -—delete-conflicting-outputs
```

* Generate Build Files

```bash
flutter packages pub run build_runner build  -—delete-conflicting-outputs
```

* Build Bug Report

```bash
flutter run —bug-report
```

* Flutter generate test coverage

```bash
flutter test --coverage && genhtml -o coverage coverage/lcov.info
```

* Rebuild Flutter Cache

```bash
flutter pub pub cache repair
```

* Conditional Export/Import

```bash
export 'unsupported.dart'

if (dart.library.html) 'web.dart'

if (dart.library.io) 'mobile.dart';
```

* Kill Dart Running

```bash
killall -9 dart
```
