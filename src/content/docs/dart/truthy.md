---
title: Check if an Object is Truthy in Dart
date: '2025-01-19 02:25:47.322Z'
draft: false
tags:
  - dart
  - javascript
summary: >-
  Dart doesn't natively support truthy checks like JavaScript, but you can add a
  custom extension to treat objects as truthy, handling null, boolean, numeric,
  string, iterable, and map types.
embedding: >-
  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
related:
  - dart/bitwise.md
  - dart/function-invoking.md
  - dart/html-web-components.md
  - dart/print-multiple-objects.md
  - >-
    videos/talks/google-cloud-next-2022-dart-partnership-with-github-and-more-dev-news.md
---

# Check if an Object is Truthy in Dart

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
