---
title: Various Ways to Invoke Functions in Dart
description: >
  Discover the surprising flexibility of calling Dart functions, including mixed
  positional and named arguments, the `.call` operator, and dynamic invocation
  with `Function.apply`.
date: '2025-01-19 02:43:50.527Z'
draft: false
tags:
  - Dart
summary: >-
  Dart functions can be called with positional arguments in any order mixed with
  named arguments, using the `.call` operator, or dynamically with
  `Function.apply` (note performance implications).
embedding: >-
  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
related:
  - dart/bitwise.md
  - dart/truthy.md
  - dart/print-multiple-objects.md
  - snippets/lightweight-flutter-animations.md
  - snippets/flutter-stream-widget.md
---

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
