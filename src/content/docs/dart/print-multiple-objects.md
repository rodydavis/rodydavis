---
title: How to Print Multiple Objects to the Console with print() in Dart
date: '2025-01-19 02:39:50.688Z'
draft: false
tags:
  - html
  - dart
  - javascript
summary: >-
  To print multiple objects to the console in Dart, use Records, which allow
  grouping multiple distinct values into a single `Object?` printable unit.
embedding: >-
  XkG3vRd0UbxOc347HHRpOnAHR72xHJw8mSbAvL8imjt/VHo9d1+SvZvfqzxAVjK9oECcO/56wL0Wr/88gRUkPDWRPjxcPfQ7QmkXPZHkPL07zBY9pMDmvHQVkDxfc1u8as9eux2kuD2Xzdq8OkBZvAy+yjz4/Eq92/ahPKSriDzBCjA9WNjdvChyADxCD0s93GbHvL2cBL3M8RA5DAMRvFDsL7zZejy8MeSxvHA81TyyyA+9Dnp9vWSYS71eo209RThdvRJI6TxiTb+8FpefO92usTzamAG99VScvaOnEz0yfA68Os2lPNDyprzVY/y8ZxT4OuOoKL1tMhY8Y8QFPdFOfT0DUGa9TViDvAuJSr0rPoo8AFbvPdzdG709nES8c5/4vDYwULxWCgY+kAjxPX4gBz0hpty7zg2vvArX/DzyK0G8D/QzvW3QA72z7OK8/d96PQV/1Drq6FW7Yk4dPYt45zsdp0y9vEdPPJdRGb2kvcY87fcXvSiUCrvvYzy8Yd8fvcpSoDtn9Va6/E4VvEBcOj2Rxoe9AzrluhndQz0tJTK9oqxfPUmFybx2xLC8IjFNvLtC3DzWlIu8gZgcvD5sC73o2fu8Rn4/vEnOozvt3gq89bNXvVGlMDxXjM07PwayPGARqzxdnVE99Nz8O1cBGr1OCHY9cVgBPN3xO73E+rq8gZWhPP9+xjxJjHY8Ex4hvS3tnjxEi5+9Vzmru57hmzxoU8k4qMu3vG/Wcj3N6EE8onKgPIh4Vb2YQMc8lOjJPGEKgbu9RJa96GhIvKDBS73UbqI945rfPNhY/Tzyh9e87ffmPJIWPr0Z3gw9qR8SvDJeZj1rF8U7x4a5u4aaKr0Ut0W8YRH7PFUSf7uQNeg8RxCCPMDEYDwksDg9IoeUvE1gS7s8Fwi9bsSOvH2gn7xa9f08sV+hPCINL7uDEp86rfImvNEp8bsPizI9lx8uuzVgfz1QHkm9c/40vEIr3jw/Ov08/RX4PFBDF71/xsK8jMxTvWaiFr1bM9K70CGavA38jbx1GWQ8gG0ouxPSmz1zvoy8YK6VvD82wbzpAQ69SXFGvX/4EbziWBA9RuoAvQPBgbx2x+G8rUV3PEKCQ71YxZa8OfDgvLOOCzxrMUE9nxdxvArtsTxlp1W8ok9iPP5GAry9X7g8oxo7PG4107yI0hG9yv8qvStun7yqHFg80xM7vfdasr0iv9y8jO73u9djDjzG2YU9w6SEvGOP2Tzf1Rk9PZcZvehcGjwE4rY82MIiPDHFuTvlhNe8wGSFvczUib2NqMk6QQLvPA4igj2OkjG9xbUuPRn0gr3NpY49sV4yvfppGb1ewKQ9D6ljPQ0fSr3qvY68iLcRPVZqID2vbhQ9GlZPvLcRAjuMcs485P4AvSeqUb05hUU84JtFvLr+GT1s7DM9sBVVveO8U72OBio9NkhqPGgCHr3H7Zm7JzTSvBeKK7xxVVw8Vz0DPQ+8xzzFuZE8AikkvWhuqjwphbk7Gak7PG2kTD3dDao752BrPN19HDxrL+a68HG3vW7IOzzh7B48ecRXPdUb/zxeC4g8LWyLvVy7gbyMJSW8cxq/Pbn5DbyT2Bs934uiPDhLNL1aB4S8oPOAuoAGyby2kYA8aE26ORvymLzFKZC9UQjQvDE6zDwakdo6EqliO14mAL0eNxi87SI3PVkmYb2UDm+8mNE5PPMD1TtmFpg8shZOupBO7jokDcc7yjsRvX1RH729hgA9jEI2PTQ1jL0uxS89a21xPPqe0rwcF/A8UHSwvPbdj72k5mO8oXmKPMJNjL1jw4s79vzaPPBabr0XeP682ZODPBesv73knN8793w7PWLOdDxGci897/1pvOvaUL2Jxqo8YA8evUWfgrxfOW48G33SPLUxBr0f+kG9/MskPdX0Mz3yeIu8VNwxPbERBb3wJ7c8cc21PAQwJ7w4rA28JuPGu/zVSz0ChRy9kWsovLqnIr0fRK68IdkOvdQ/dbyogRO9uUl/vJcfoLxRyP87DsCDOhaBAT12/R69NzwrvL1AAbxREQs8GFqlvGmerbyKul46RuFSPReWXb0Y+Hk9VcaevNXBf7za9wS9CDTuPHvgpTzIebo8xDCgPNme0zwxbUI9A9sPvY5uebxyIlC9fHJEvOqT5zpPB1i8J2oCu486Gj2sY8o7c0ODPEZqM734qAG9DJ4pvU7cwDxq9Pq697/8vKhdk73P33W8nFUlPVU1/7uoSAy7jBNUO5mm8Lr5Yso9wSqSPHn2kTwq5Ay9z+uzPRFjLD3n0qw7WOzmupIuJD3z7IS8YlPEO1SyQT1AxA88cnN8vDtJEr0i7RS98ptKPFynyj1tkiG8MpwpvWXKlTz3xAw9AnSGvAP5s7yaOOM83AccPGgt67tKTbk9jl4EPWl1WTxSOAc9F+hvO22BNrzslgK8RS1FPeiVTr1WLlE7eC2hvGan3bzz5cm78897PTUs27wsJPs6KBIvPJIPmbvYnIm9RnuUvVO26bzd44y8OETgPLB9vLyiaAM7844XvfqxAj2WH+u83FZrvLXVFD1mvYu8/eZFvDWXo7uQtWq8VaPxu7QKB7uhCkK9C6IOPRSpjjunc5W8SH7FPJzKXbzrWiY7vdmCPBxXfr3HRLW747zGPF8cLD1zJN+8Xa1kvUv3R7yGloa96nLxO9OJdT3byoc9B5SWvKnboLzrsC28RhBqvbKbVz3h7RO9pqMDPXxnqTz2Gfo7XdT1PEsHOr0wUQA9rs83vYTkirzeU3a92zY1vRIEzbq+e5o9LqN3vZ/hFbxNYg29E7EbPRhLNLre0987VYkcPRMlFrs82bg8kYPrvPJXsDmaO+K8ttXdPHtkPL0desw8jcXVuwWJ77z+MEE9+Wi9vbn8z7wETyw8DHuovDKnUD20Ypw6cEqFvOv8YD0hzDQ9p5efPe/dLbuKLKw9fxWZPL4bHj0PzUY9GQRtPVLzTbxrvto7L5UfO4GFszzBPss8ghEjvP+w9jyGQpK8Q4ICO7/C9DsL6io9BBgdvKEaWzxZmvk7h4YMPZzLND0lFgy9CZ99PAofNT1bZoE8Y2DHPM0GnDzDNXC8tqsbvaBJ5rwNN2I82aJNu3QDZL1B7Zy8N0CDPB/QgL3pcWA9+PH8vPK0cLzpyNG8EzzcvCb5iryuCsy8Nby2O+NXXbxpsRU9AMFNPeNSOz00SCE9Op4rPS/+ijxKiQ87eg3AvB3uzTzzcMw7asSevAr1Tz0DMNy8qsCpu8XMe7watzU8vX0qvcO6NT13iRC9/acYvHXukz18UHO9lBJ3PNWVEr1uCEc8uP+cOjGLsrz42aY8gXBKPTNiDD1JTW49rMA8vBD6G71/QH86GmQxvcZidjx2Aqc8Rk1FvIQeZTznujy9YJ4xPKYoeT2eCB09eNQhPZpp+rw8TCw9mV7iPI8FmT1cm5S9uRugvWHoWbzFtKi9Slzauzl1QjxoyVs96TGKPbkI27zMRTe9T5iLPGWp3zzsvE88C3NQPRb+ZTsz33s8Y6I9vGLpiT3QWrU4xEiPPMBbxjwRkxs9aEslPYDrIz0zO7K8wB0vO/VbnbxWQX+9DHKTPKScIb30pcE7px2zvAwy4ruXDDm905EVvShfG7yi7IQ90Gf8vE9t1TzRXYI92icJPWE75jug8gY72nZJvEQO7Lv8UYG9TxtnO4ysP7xGml68q8KkvaV/l7sHUZM9hCKbvcV1Bj16PeC6NGejvAIQHL2m7S87Af2NPZHThTvQwIE8LSghPGof/7uMJDK9wLtPPRlPGbvdCMi8HEx+uy4FRr3LTyQ9J0hOPTCKAj3ELAc8TuaCvara3zyiVCS87a19PPakhr0Jjxs9Y09JvQvG87zAlsW7MpYbvcuDgzwWkgE9MteXOyEWDTzm7lW9GwCKPOwaPjzFuPO8oIa+PZuWIz0t9FQ9mzZFO0WdWDxYXIe8J1C7vAYXMr3JhMy8Szc+vTnzAbu99+O7bM+5O59bXz3xsu67N5FFvERMnD3XQDQ9FeEXO/HBA73O4yq9MUP9u01Yjz1cuCs81pykPd8YHrsa9y6906S7PFDkuLxSe9K83xd3vaTYnbzPWSK9
related:
  - dart/function-invoking.md
  - flutter/host-rest-api.md
  - flutter/snippets/input-output-preview.md
  - dart/html-web-components.md
  - dart/bitwise.md
last_updated_metadata: '2026-05-23T00:09:23.858Z'
---

# How to Print Multiple Objects to the Console with print() in Dart

If you are coming from JavaScript you may be used to printing multiple objects to the console with `console.log()`:

```dart
console.log('a', 1, 'b', 2); // a 1 b 2
```

In Dart we can only print `Object?` to the console with [`print()`](https://api.dart.dev/stable/3.3.1/dart-core/print.html):

```dart
print(1); // 1
print(null); // null
print({'a': 1, 'b': 2}); // {a: 1, b: 1}
```

But it is totally possible to print multiple objects too, we need to use [Records](https://dart.dev/language/records):

```dart
final number = 1;
final str = 'Hello World';

print((number, str));

print((DateTime.now(), str));

print((DateTime.now(), count: number, description: str));

print((DateTime.now(), StackTrace.current));
```

Print the following:

```markdown
(1, Hello World)
(2024-03-06 15:48:26.514, Hello World)
(2024-03-06 15:48:26.514, count: 1, description: Hello World)
(2024-03-06 15:48:26.514, Error
    at get current [as current] (https://storage.googleapis.com/nnbd_artifacts/3.3.0/dart_sdk.js:139991:30)
    at Object.main$0 [as main] (<anonymous>:52:94)
    at Object.main$ [as main] (<anonymous>:44:10)
    at <anonymous>:89:26
    at Object.execCb (https://dartpad.dev/require.js:5:16727)
    at e.check (https://dartpad.dev/require.js:5:10499)
    at e.<anonymous> (https://dartpad.dev/require.js:5:12915)
    at https://dartpad.dev/require.js:5:1542
    at https://dartpad.dev/require.js:5:13376
    at each (https://dartpad.dev/require.js:5:1020)
    at e.emit (https://dartpad.dev/require.js:5:13344)
    at e.check (https://dartpad.dev/require.js:5:11058)
    at e.enable (https://dartpad.dev/require.js:5:13242)
    at e.init (https://dartpad.dev/require.js:5:9605)
    at a (https://dartpad.dev/require.js:5:8305)
    at Object.completeLoad (https://dartpad.dev/require.js:5:15962)
    at HTMLScriptElement.onScriptLoad (https://dartpad.dev/require.js:5:16882))

```

Demo 
-----
