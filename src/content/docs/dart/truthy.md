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
related:
  - dart/print-multiple-objects.md
  - dart/bitwise.md
  - dart/function-invoking.md
  - dart/html-web-components.md
  - flutter/web-push-notifications.md
last_updated_metadata: '2026-11-01T09:41:36.817Z'
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
