---
title: Flutter Terminal Cheat Sheet
date: '2025-01-20 00:13:39.469Z'
draft: false
tags:
  - flutter
  - firebase
  - html
  - dart
  - swift
  - kotlin
  - github
  - web
summary: >-
  A comprehensive cheat sheet of advanced Flutter commands detailing procedures
  for web deployment, iOS dependency management, code generation, project
  cleanup, and debugging.
related:
  - flutter/native-cross-platform.md
  - lit/making-a-piano.md
  - flutter/getting-started.md
  - flutter/multi-touch-canvas.md
  - flutter/graph-database.md
last_updated_metadata: '2026-11-01T09:41:36.818Z'
---

# Flutter Terminal Cheat Sheet

Run Flutter web with SKIA
-------------------------

```markdown
flutter run -d web --release --dart-define=FLUTTER_WEB_USE_SKIA=true
```

Run Flutter web with Canvas Kit
-------------------------------

```markdown
flutter run -d chrome --release --dart-define=FLUTTER_WEB_USE_EXPERIMENTAL_CANVAS_TEXT=true
```

Build your Flutter web app to Github Pages to the docs folder
-------------------------------------------------------------

```markdown
flutter build web && rm -rf ./docs && mkdir ./docs && cp -a ./build/web/. ./docs/
```

Clean rebuild CocoaPods
-----------------------

```markdown
cd ios && pod deintegrate && pod cache clean —all && pod install && cd ..
```

> Sometimes with firebase you need to run: `pod update Firebase`

Create Dart package with Example
--------------------------------

```markdown
flutter create -t plugin . && flutter create -i swift -a kotlin --androidx example
```

Watch Build Files
-----------------

```markdown
flutter packages pub run build_runner watch  -—delete-conflicting-outputs
```

Generate Build Files
--------------------

```markdown
flutter packages pub run build_runner build  -—delete-conflicting-outputs
```

Build Bug Report
----------------

```markdown
flutter run —bug-report
```

Flutter generate test coverage
------------------------------

```markdown
flutter test --coverage && genhtml -o coverage coverage/lcov.info
```

Rebuild Flutter Cache
---------------------

```markdown
flutter pub pub cache repair
```

Clean every flutter project
---------------------------

```markdown
find . -name "pubspec.yaml" -exec $SHELL -c '
    echo "Done. Cleaning all projects."
    for i in "$@" ; do
        DIR=$(dirname "${i}")
        echo "Cleaning ${DIR}..."
        (cd "$DIR" && flutter clean >/dev/null 2>&1)
    done
    echo "DONE!"
' {} +
```

Conditional Export/Import
-------------------------

```dart
export 'unsupported.dart'
    if (dart.library.html) 'web.dart'
    if (dart.library.io) 'mobile.dart';
```

Kill Dart Running
-----------------

```markdown
killall -9 dart
```

Flutter scripts 
----------------

Add all the scripts to your `pubspec.yaml` with [flutter\_scripts](https://pub.dev/packages/flutter_scripts).
