---
title: How to Print Multiple Objects to the Console with print() in Dart
date: '2025-01-19 02:39:50.688Z'
draft: false
tags:
  - html
  - dart
  - javascript
summary: >-
  Print multiple objects in Dart using Records for a concise output, similar to
  JavaScript's `console.log`.
embedding: >-
  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
related:
  - dart/html-web-components.md
  - dart/truthy.md
  - dart/function-invoking.md
  - dart/bitwise.md
  - videos/flutter/idx-flutter-by-rody-davis-senior-developer-advocate-google.md
---

# How to Print Multiple Objects to the Console with print() in Dart

If you are coming from JavaScript you may be used to printing multiple objects to the console with `console.log()`:

```dart
console.log('a', 1, 'b', 2); // a 1 b 2
```

In Dart we can only print `Object?` to the console with [`print()`](https://api.dart.dev/stable/3.3.1/dart-core/print.html):

```dart
print(1); // 1
print(null); // null
print({'a': 1, 'b': 2}); // {a: 1, b: 1}
```

But it is totally possible to print multiple objects too, we need to use [Records](https://dart.dev/language/records):

```dart
final number = 1;
final str = 'Hello World';

print((number, str));

print((DateTime.now(), str));

print((DateTime.now(), count: number, description: str));

print((DateTime.now(), StackTrace.current));
```

Print the following:

```markdown
(1, Hello World)
(2024-03-06 15:48:26.514, Hello World)
(2024-03-06 15:48:26.514, count: 1, description: Hello World)
(2024-03-06 15:48:26.514, Error
    at get current [as current] (https://storage.googleapis.com/nnbd_artifacts/3.3.0/dart_sdk.js:139991:30)
    at Object.main$0 [as main] (<anonymous>:52:94)
    at Object.main$ [as main] (<anonymous>:44:10)
    at <anonymous>:89:26
    at Object.execCb (https://dartpad.dev/require.js:5:16727)
    at e.check (https://dartpad.dev/require.js:5:10499)
    at e.<anonymous> (https://dartpad.dev/require.js:5:12915)
    at https://dartpad.dev/require.js:5:1542
    at https://dartpad.dev/require.js:5:13376
    at each (https://dartpad.dev/require.js:5:1020)
    at e.emit (https://dartpad.dev/require.js:5:13344)
    at e.check (https://dartpad.dev/require.js:5:11058)
    at e.enable (https://dartpad.dev/require.js:5:13242)
    at e.init (https://dartpad.dev/require.js:5:9605)
    at a (https://dartpad.dev/require.js:5:8305)
    at Object.completeLoad (https://dartpad.dev/require.js:5:15962)
    at HTMLScriptElement.onScriptLoad (https://dartpad.dev/require.js:5:16882))

```

Demo 
-----
