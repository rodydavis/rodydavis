---
title: How to Print Multiple Objects to the Console with print() in Dart
date: '2025-01-19 02:39:50.688Z'
draft: false
tags:
  - html
  - dart
  - javascript
summary: >-
  To print multiple objects to the console in Dart, use Records, which allow
  grouping multiple distinct values into a single `Object?` printable unit.
embedding: >-
  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
related:
  - dart/truthy.md
  - dart/function-invoking.md
  - dart/html-web-components.md
  - flutter/multi-touch-canvas.md
  - flutter/web-push-notifications.md
last_updated_metadata: '2026-11-01T02:28:36.066Z'
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
