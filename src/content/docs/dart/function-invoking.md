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
related:
  - flutter/snippets/infinite-canvas.md
  - dart/print-multiple-objects.md
  - flutter/snippets/lightweight-animations.md
  - flutter/signals-and-hooks.md
  - flutter/multi-touch-canvas.md
last_updated_metadata: '2026-11-01T09:41:36.814Z'
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
