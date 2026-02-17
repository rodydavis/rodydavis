---
title: How to do Bitwise operations in Dart
description: >
  Explore Dart's bitwise operations for both integers and booleans, including
  AND, OR (inclusive & exclusive), NAND, NOR, and XNOR, with practical code
  examples.
date: '2025-01-19 02:35:57.588Z'
draft: false
tags:
  - Dart
summary: >-
  Perform bitwise operations on integers and booleans in Dart using AND, OR,
  XOR, NAND, and NOR operators.
embedding: >-
  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
related:
  - dart/function-invoking.md
  - dart/truthy.md
  - deep-linking-flutter-web.md
  - snippets/lightweight-flutter-animations.md
  - dart/print-multiple-objects.md
---

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
