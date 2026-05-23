---
title: Various Ways to Invoke Functions in Dart
date: '2025-01-19 02:43:50.527Z'
draft: false
tags:
  - flutter
  - html
  - dart
summary: >-
  Dart provides multiple ways to invoke functions, allowing mixed positional and
  named arguments, utilizing the `.call()` operator, or using the
  `Function.apply()` method.
embedding: >-
  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
related:
  - dart/bitwise.md
  - dart/palm-2-api.md
  - dart/html-web-components.md
  - dart/print-multiple-objects.md
  - dart/truthy.md
last_updated_metadata: '2026-05-23T00:09:18.424Z'
---

# Various Ways to Invoke Functions in Dart

There are multiple ways to call a [Function](https://dart.dev/language/functions) in Dart.

The examples below will assume the following function:

```dart
void myFunction(int a, int b, {int? c, int? d}) {
  print((a, b, c, d));
}
```

But recently I learned that you can call a functions positional arguments in any order mixed with the named arguments. 🤯

```dart
myFunction(1, 2, c: 3, d: 4);
myFunction(1, c: 3, d: 4, 2);
myFunction(c: 3, d: 4, 1, 2);
myFunction(c: 3, 1, 2, d: 4);
```

In addition you can use the [`.call`](https://dart.dev/language/callable-objects) operator to invoke the function if you have a reference to it:

```dart
myFunction.call(1, 2, c: 3, d: 4);
```

You can also use [`Function.apply`](https://api.flutter.dev/flutter/dart-core/Function/apply.html) to dynamically invoke a function with a reference but it should be noted that it will effect js dart complication size and performance:

```dart
Function.apply(myFunction, [1, 2], {#c: 3, #d: 4});
```

All of these methods print the following:

```dart
(1, 2, 3, 4)
```

Demo
----
