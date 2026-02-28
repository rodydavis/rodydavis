---
title: How to do Bitwise operations in Dart
date: '2025-01-19 02:35:57.588Z'
draft: false
tags:
  - dart
summary: >-
  Learn how to perform bitwise operations (AND, OR, XOR, NAND, NOR) with
  integers and booleans in Dart, including examples and explanations.
embedding: >-
  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
related:
  - dart/html-web-components.md
  - dart/truthy.md
  - flutter/getting-started.md
  - videos/take-5/shared-preferences-flutter.md
  - flutter/web-deep-linking.md
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
