---
title: Various Ways to Invoke Functions in Dart
date: '2025-01-19 02:43:50.527Z'
draft: false
tags:
  - flutter
  - html
  - dart
summary: >-
  Dart functions can be invoked using positional arguments, named arguments in
  any order, the `.call` operator, or `Function.apply` for dynamic invocation,
  with `Function.apply` impacting compilation size and performance.
embedding: >-
  ac8kvMRTTL0GVRu8XtGMvA5wib2QTTM91s5LvL0MIr0Nd109c9fCvMmRYLyKrKU8euYhvX0Tc71WpiS9YtSEu0lbkj1P1Ta9BjAKu3sSWr2N2zw91Dr7vITfPz3tBCE7M2eKPUjRnrslifa7UkVwvYQrpzs4HCK7Qzr8PJKLUDsP8ng7T3UJvEBWRbwlYBk9M+xhvI8JQjwIVkM9vSWWu+SQvLyT+bq62hTlvIb0c70s1rO8HFNRvOwtirz33Z69vnzCvGMmpjwZgnM8gqKgO7A3Kj1PMOE7QnR+vbuEHL0NcWS9ZN+4vD9Kyjz0M9O8udZFveoyqzw7sQO97pDLvIuFXTwtG0a9XxL8vHSvzrvJiS68TG28PWAMFL3tcUS9DAHuO6kZVb0X6gg+tbUTPsI107viBps9gT+CuxPtQDuRwwe9iZJVu77jwzxl4rC9TKDlPd2Y8DxFSdi8EOTAPP3NtzuTuwO9rmXIvGIFCL0Zgh87dRZ3vKoYsDz/hg69cleIvbEXMj2r0ew8rTervH8S2LzwYze85NctvR+XbD3Whw89dbHLPD7yCjzmaWm9QZ4HvHofsTrCbcm6MjwuvCeq7zyh1Yq9dH/jO4PZKL1FnOo8HgTuvMffQ7xmsQw9i/rDPHFMMj3umiE8B/0xvX1k4LzOu4g9gvmoPJcMgDsOXJk8pArSvHWRWTyEOdy8kF/2OwFSUbyLlQq9+/fGuwSgID3o6qK8k5PePNMqkT099ju9Bqu7PPHqgjyfFZQ8E+djPXLAT7wj3Ie9rzbjO5WqwbwECYg8LFh/OQ868bzHaVa7Fh+uOoeuqrt89uU77x6jO4vUET2AlZY8s2CjvTbqcb0/P6u8hiURuwSWvTxPI6E90hWuPGAqHr1XouW8FYyEOfgOmbuaYAS9ae0nvK9q/rxMfgO8bomKvFDzDz0vGxU9OMHYO5MVOz15NxW8slfFvPuNqzxf2DQ9qcYmPN/HILyruVY99wF0O02fCD34ANG8uKqAPGjJYbwB0o68Q/WxPG4Tqb2D9iE9mEyCu1jIQz2w+9M8UC5tvZZKSrwCZnK9+1dkvWWabL2Fw/08qVOTPI4o6jwAy+O6WqYDPR6Jlr2lQu08XpH9O+Y50LxHlFY81aHjvMdRsrzvOCQ96EqWuyvC9bysasq8cS3gvNdUkrxMFhG9+NBavSxfpTvR9ti7x8VFvdZSPr18sUu8W8PKPAjKLr2gTzC7hXqCu5bJNz2Ie5k7f5oNvOsZZL0eM/Y8lkxaPMzILzztzcA8Zm/Xve2NeL3v75S8WYpZPTvPlD3POAc8t2kVvbTo47vrbLk9KRuJPYDd1Tqeq6g8Ol+KPJNwX7x3gOm8rDu9PG8pwzwaqim9NojpPPd+sDw47eg89LyhPJOlhr29nkk9zpurPG+b+ruTJVU9UjRDPFTAAL0D/ia9kWsQPf108Dwz7C072zckvdZ7LL0/BhE8meBPPUlGfDyMIka85QAVvZzgYz0oeFA8eLU1vegybDw0Bv480IGOvMH6grwnnK+992lcvHsoG7w+HxW9WEisuyR8Nj3A4lg8XmfWvD9x+7uRMgG82bsNPcTsUzvUJU68whcuPWPQEzzR8qC728f1vLz+Q7xy5Ac811LfvKGJ8jxEBUS96oDLu95k8LxNDPC8eYolPdLKobz8Tt88V00uvUrqNL3L9AM9hrXKvMgbqDzrgSo90qKYvD180rzmnCY9PdwCPLT4vb36wg49wtOTPDpmLr0a8A88tB16vbuyzLvMvgM9VtINPS3TfL2PGMS81Bn1PGlg5TxP4Em8ioMmPBA0A71A2168s+sLvB6XG73Q8OE8AL1qPYicvTt+rDU92ZNZvCeqvLuzdag7VtJRPDJbHb28byI98mNCvF5DTL30tue8A9T1PN3XTT1NHLu8J+ZLvHM9ob1t/Q49acbEPGH+1Lvc03E8k20MPBXUM731ema8DgIZvcr+kr1iaCg9OehLPWMNSTu8nv27PgNdPZZL/Lx9Mai7E9qIu+ydAj3LrW+9k8jbu8dCizxD5yI6+jiGOzdHn7yeuy+85u/xPRVlk7xbpwc9uylCPVfeuTut0jA81dRKPdHUD72DEno8sNS3u7NXaj0y63I8jqjxPPRaorlWykI9o/7+vDs8LT2Sr4u4REv9vDA/6DysH309lBwWPe/Hg7x4Ywq9sNf7vG70aj1+jEm9loDFPKCq47yKjgs993k2vPuXMrql7Ag7xeplve11Hz3q6OE8R8ktvGZJyLzmjYQ89sBMvEWzVjwRM6U80LQ4PYzkj7zIvw49g6sqvXLy9DxSiVc8otivPFFSG71oZxG9tMKnPN/Qt7wK3ca8PnGGPAbgg7yldl48JTzOvOG63Ts97yS8s/n9PLKb9bsPs509ev5fPAZBAD1YvtI9aiUwPEManzxE5ii8yCc4PZYciLl+0xq5beDLvLMGGb2fLoQ9IrTjPD9CZ7wiLBm7mhY3PMm1xDvtLDK9FewAvXwNbDslcjK9yXeWPJl7IbzDtvC6t7qcPF4+7rtV4oS8vq/7PD26rD0ViA09z6ccveTSML25Mya9xY86O3cW7TwAPOY8UzuvPDgkFjx0xeE8qKtBvOvp7rziUKo96xtHvOoMRb0Z3SK9/j79vMiT1Dy8eVe9Q/QsvQpLIb3s7Jm9+BglvPymWLwyTI49a45COycNfruFBWE9thwvvPLr+zxIas28ulpZvAEdlTydfNC8J9gKPIXLeL3Hho099WB0PJo31LyChII8vUsAvZlyhzywYfm8pr0aPRheEb1fUEi7Z7mXPOLYxrxoD1g9Ho/HPHkNbjtAAzg8houuvLIe3DygcFe9+cgVPceeXb3Y06e8aQt4PRNDDLwXp9I81opMvdPwybyJuVe91dxWO1fnkj3y17K8eb6dOgnBizxqa8w9Bv8ePSZ1XLviWks9da0qucoxA71IZYC6B7/BPPVAUbxBtF+8AL1FPBDW1jwJOhu95yHPu7IV/7ztc5+9QMpZPCUCf7tfmGY9tcPoO/CZTT2hwDE7cFqcu7/bz7wU4tW5EPc+PF8rgDx2sro7g9nCvDG2MTzKURU9yep4PTw3MjyXMmK9SPmvOY7odDwfONy7CTdGPD6oYr054kq8/q+OOer4Xj2Z2Yu9wCKvvMchPD1u8zm7zLNvvfp3IT3extK7MOvrPF09mD19X4E81AlnPEc7Az0jyLg8Wy0oPOvO67uPDJi8/ZmgPF54/DztulI85Z1CPIxq2bwZX2i9IxRmPHJ6Njx3J4i9ve9GvdGLXj0x9XC9zUHzvJ9FjTstzM48XOb9PPNVm7y0l/k8KXZBPOd2Xr38NIa8eJvjPNqhIb26gau8O3pdvDlCPDwhOxi7k2iivOSZdTwJoWk857caPQV7Hzxz78U8h2ZWvBA7H7ujIw89LqFYPej0c7tsZya9QoDCPOseobtVHka90owePfiDRDziZS+91dWTvMmoz7v6vui7vqGKO28S8j1M67K9IbHyPAQzzDymKLs8jLceO6TxaTyUxiS8rx25PGxjHDuusIG85P8WvVAFMz1NPCu9sXn5vA5vkrstDBC8uW0DvaRgIbxJqSI9NwDovNGfGD1jDwW99oxbOllcnbzhDKQ85vrRPBwtLzx6XQ89xhhgPUN1T7wIPAU9nq2Juw4hPz0/rWI81ckoPFFTSrg4Uz88yLkTvPSAUbyrmm092S7EvLU/gD14oR+9POpSPbNdH7yiDlY92r23PKnN/jsZ1w49XusKvWCA3zqvviK9/mexPG5VnbwKZ768N9gWvLbg4rzN97i7AS6ePSYaWz3ruHk9OHPsPEpqYL0wugW9DTFBPdlVpb2LF9g88bmVvJDU5b1ZZpm8q7kQvX3BOD2q/uu8y3acPPrvMj05VGC8GSPVPcwLvz08agU8NgpIPVXFSj1L0WI8Z2wCPUmk2jv8O/88Kc8dvXFMH71J7tY5ZUUJvT3Qk70nKSU9ZcvPO49rRTzsTAo9AM+3O0UYCD1bYDe8qAW8vJbS+7xvTnC9oZUZveG01znowJQ8X/QCPTRplroC6pe8DuZhPa1Fgr10P9289ZoXPKS6AL1DiHQ7
related:
  - dart/bitwise.md
  - dart/truthy.md
  - dart/html-web-components.md
  - dart/print-multiple-objects.md
  - videos/take-5/adaptive-dialogs-flutter.md
---

# Various Ways to Invoke Functions in Dart

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
