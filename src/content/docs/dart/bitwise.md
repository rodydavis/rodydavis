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
  - dart/html-web-components.md
  - flutter/host-rest-api.md
  - flutter/snippets/native-http-client.md
last_updated_metadata: '2026-05-23T00:09:06.917Z'
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
