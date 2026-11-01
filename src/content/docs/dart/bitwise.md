---
title: How to do Bitwise operations in Dart
date: '2025-01-19 02:35:57.588Z'
draft: false
tags:
  - dart
summary: >-
  Dart supports bitwise operations (AND, OR, XOR, NAND, NOR) directly on `int`
  and `bool` types, demonstrated with working code examples.
embedding: >-
  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
related:
  - dart/truthy.md
  - dart/function-invoking.md
  - dart/print-multiple-objects.md
  - flutter/snippets/native-http-client.md
  - flutter/snippets/input-output-preview.md
last_updated_metadata: '2026-11-01T02:28:33.352Z'
---

# How to do Bitwise operations in Dart

In Dart it is possible to do [Bitwise Operations](https://en.wikipedia.org/wiki/Bitwise_operation#:~:text=In%20computer%20programming%2C%20a%20bitwise,directly%20supported%20by%20the%20processor.) with **int** and **bool** types.

AND 
----

Checks if the left and right side are both true. [Learn more](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=expressions-bitwise-operator).

```dart
// int
print(0 & 1); // 0
print(1 & 0); // 0
print(1 & 1); // 1
print(0 & 0); // 0

// bool
print(false & true); // false
print(true & false); // false
print(true & true); // true
print(false & false); // false
```

OR 
---

### Inclusive 

Checks if either the left or right side are true. [Learn more](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=be-logical-operator).

```dart
// int
print(0 | 1); // 1
print(1 | 0); // 1
print(1 | 1); // 1
print(0 | 0); // 0

// bool
print(false | true); // true
print(true | false); // true
print(true | true); // true
print(false | false); // false
```

### Exclusive 

Checks if both the left or right side are true but not both. [Learn more](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=expressions-bitwise-exclusive-operator).

```dart
// int
print(0 ^ 1); // 1
print(1 ^ 0); // 1
print(1 ^ 1); // 0
print(0 ^ 0); // 0

// bool
print(false ^ true); // true
print(true ^ false); // true
print(true ^ true); // false
print(false ^ false); // false
```

NAND 
-----

Negated AND operation.

```dart
// int
print(~(0 & 1) & 1); // 1
print(~(1 & 0) & 1); // 1
print(~(1 & 1) & 1); // 0
print(~(0 & 0) & 1); // 1

// bool
print(!(false & true)); // true
print(!(true & false)); // true
print(!(true & true)); // false
print(!(false & false)); // true
```

NOR 
----

Negated inclusive OR operation.

```dart
// int
print(~(0 | 1) & 1); // 0
print(~(1 | 0) & 1); // 0
print(~(1 | 1) & 1); // 0
print(~(0 | 0) & 1); // 1

// bool
print(!(false | true)); // false
print(!(true | false)); // false
print(!(true | true)); // false
print(!(false | false)); // true
```

XNOR 
-----

Negated exclusive OR operation.

```dart
// int
print(~(0 ^ 1) & 1); // 0
print(~(1 ^ 0) & 1); // 0
print(~(1 ^ 1) & 1); // 1
print(~(0 ^ 0) & 1); // 1

// bool
print(!(false ^ true)); // false
print(!(true ^ false)); // false
print(!(true ^ true)); // true
print(!(false ^ false)); // true
```
