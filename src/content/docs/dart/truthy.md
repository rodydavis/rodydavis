---
title: Check if an Object is Truthy in Dart
description: >
  Learn how to extend Dart's functionality to implement JavaScript-style
  "truthy" checks for easier conditional logic and value evaluations.
date: '2025-01-19 02:25:47.322Z'
draft: false
tags:
  - Dart
  - Javascript
summary: >-
  Dart's `isTruthy` extension allows treating objects as truthy, mimicking
  JavaScript's behavior, by handling null, boolean, numeric, string, iterable,
  and map types.
embedding: >-
  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
related:
  - dart/bitwise.md
  - dart/function-invoking.md
  - dart/print-multiple-objects.md
  - snippets/lightweight-flutter-animations.md
  - lit-vscode-extension.md
---

If you are coming from language like JavaScript you may be used to checking if an object is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

In Dart you need to explicitly check if an object is not null, true/false or determine if the value is true based on the type.

It is possible however to use Dart extensions to add the truthy capability.

```dart
extension on Object? {
  bool get isTruthy => truthy(this);
}

bool truthy(Object? val) {
  if (val == null) return false;
  if (val is bool) return val;
  if (val is num && val == 0) return false;
  if (val is String && (val == 'false' || val == '')) return false;
  if (val is Iterable && val.isEmpty) return false;
  if (val is Map && val.isEmpty) return false;
  return true;
}
```

This will now make it possible for any object to be evaluated as a truthy value in if statements or value assignments.

Prints the following:

```markdown
(null, false)
(, false)
(false, false)
(true, true)
(0, false)
(1, true)
(false, false)
(true, true)
([], false)
([1, 2, 3], true)
({}, false)
({1, 2, 3}, true)
({a: 1, b: 2}, true)
```

Demo 
-----
