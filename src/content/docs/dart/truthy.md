---
title: Check if an Object is Truthy in Dart
date: '2025-01-19 02:25:47.322Z'
draft: false
tags:
  - dart
  - javascript
summary: >-
  An extension method can be used in Dart to simulate JavaScript-style truthy
  checking, allowing developers to determine if objects and values are logically
  true within conditional statements.
embedding: >-
  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
related:
  - dart/print-multiple-objects.md
  - dart/bitwise.md
  - dart/function-invoking.md
  - dart/html-web-components.md
  - flutter/web-push-notifications.md
last_updated_metadata: '2026-11-01T02:28:36.177Z'
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
