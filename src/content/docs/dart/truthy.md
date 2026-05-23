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
  - dart/bitwise.md
  - dart/html-web-components.md
  - dart/function-invoking.md
  - lit/vscode-extension.md
  - sqlite/fts5.md
last_updated_metadata: '2026-05-23T00:09:33.717Z'
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
