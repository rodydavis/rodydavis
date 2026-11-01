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
  - flutter/snippets/infinite-canvas.md
  - dart/print-multiple-objects.md
  - flutter/snippets/lightweight-animations.md
  - flutter/signals-and-hooks.md
  - flutter/multi-touch-canvas.md
last_updated_metadata: '2026-11-01T02:28:34.486Z'
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
