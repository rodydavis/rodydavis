---
title: How to Print Multiple Objects to the Console with print() in Dart
description: >
  Learn how to print multiple objects to the console in Dart using Records,
  offering a similar experience to JavaScript's `console.log()` functionality.
date: '2025-01-19 02:39:50.688Z'
draft: false
tags:
  - Dart
summary: >-
  Print multiple objects in Dart using Records for concise output, similar to
  JavaScript's `console.log` with object printing.
embedding: >-
  ZtXbvdbj+7xKz3c8qPF0vPqNab1ZWIQ8ombVvF/PBz09Jj89BDfNvajozzyCTF29DsqXu/nPt70RGyc7R1alvPvJ4Twe7kg8NOUWPUuWkb241PI8TJwbvXTpTjkYyzu93+J0PH9Tzz3EB3q8E0PLvLII6zxK3y69Lh0HO4BmIDyE7D896yGevPzT4Tzuk/o8KaiWvCoGB7xlKkM8fW/9vI6Cnrz/2zi8hlZfvKNS8zzJoye8xXKZvVRHOL2oJC09k+5dvSWQDz2uXCw8pL06PNRtoTycZqe72hjEvbXxGz2kuB295Zk8PBbSFL3ag169zhKTvMt7J70vRJ48nd6OPJBGzTyM5dC8TcukvF2wTb1cMZk7Yg8KPmoHBr0pBLG7NuiTvPBzzztXvuM9YuanPdIT9DziVTG8OQT6vJfgbTz/L2U812ALvdvSE72R+Ry9yT9iPYn+sLwGhLM8YRsJPbBg1zylR8q80RBYPK1Jlbxeg6Y8tfL2vBF7dTwNgbQ8I/wdvezSsTwM5sy8f6/Hu6LFJz1mrYu9WwMlPGyYBz0EPwa9AyN7PZCqPLwMPIW8FBKxvNX+ODwuqyW9ifXovNgQXL31zR29297cuwLQgrvsgr68YbhovWRBQTyP+MU8KhZoPX0aCz3x3RA9+ea8PGAVG73e7aE9JgkKu79mAr0Q4Vg8MlnZPFKIFz1Mbis8yHY9vW0v9jt5mn69PbYOvKIAkDxPIYK8jfq5vDiH+zybrBU9TCuoOreURb1URme6D88NPfRQxjuI3r69A9pQvH6mIr2gQok9Bvi5ui2qrjynCT283R/8PDZgRb3wjAQ9FAgEvCQzMj0gJiI91EZZuzV9/buA6Z270W3uPJWzHDwV++k8L5eGOeahlToW0yM9XPjUO3ouvDvBDOq8YZMWvebeS7sVL3o8tjW1PEnvqLy5CK07bxkyPOIVuTyB2w09yt/su3odaz1DDDW9kpRsPCmSizw82YM9CcNGPVFNLr2W2XO8F90qvdWDJ70FD1K8oh75vMtrPb1fiyU96OxfvHX8oD32haK8/YJ6vC/CTr02heq8DMpHvUkgeLz5cko9Bb3Mun9O6ryCv9a81Om3POY8cr1iiua81ysqvZ7zrzzYmjc9GKzDO5GHvDybtYI7bY39O52hwryD+sc8FedsPNAiD7220Dq92dsSvdlWA73rILe63CZGvem+lr33V7G7zHqYPPTzkjxucjw935SdvI4IrDza6yI9nPPFvKxmSztumhU9DDHFPNEmC73vZJu8bflAvRYaI71PzQg8IEQCPXK8MD3hfSm9pGZgPYN/pb1vJHA9erkZvTkCbLzGLI89jjS7PYRQN71uTpa8kdsAPSyuTz3J9i09TXnWupCWCzubov87SbK2uwbFIr1jkjo8aULYPGlZ7TyQ51s9WxPsvBKiY70EoBg9G5kyOR14Jb0uUSI70VmXvCe0yrtEccA8QVnfPNfrsLsczcQ8dXYdvZ1Wrzu6tBI8UtKYPKFIWj3XndY83gUXOyFMbrtYpLu8nsO3vX6geDus1rY81QFwPUAjkjxENyo7FY2Kve8Tb7x/B9S853qIPRJbd7yavy89IdoNPXu5J731cZW4+FnrO9bg57zo4Hs8LxmUOCgizLxJ4UG9OYLfvCQjAjpUwAU85156PGNZYrySEk88kggSPVKxQb0uzia8HUM3PYisGjwTuxA9uvDKPEYknbuatCw86FLbvBQxdr3hhDs9R7fnPC2By71nDVM91db8Oq8JE7x4hg89h10GvS13i71CCMe7BDoYPOf1gr1B66A8Jq1uPM37gL27xCm8YcXgPAnosL0fYa+8re5MPaJchLuzjz09LeriuwzhIb0tGj488vJAvaommLxF8SO7tpJNu7ZMsryfAV69U00ePcQHnTu39kI81FeIPV4qx7w/UVI9lGdmPMeN+rxiKyq9sg4wvEZWvjyRKo+8mmw4utiYe72fOeq8ZsJlu12qibyERji9oDyjvJ1KB71vnUS7TARsO4e5CTyFqeu8axmFu6DMxLzDa8q7bywXvXhvIb2nuq+75mhtPeyPQL1i70Q9pi3HvM3yqrynuhu9l44rPZpe6jv1BZA7xRQfPbEQsDzuO0Q9bEAbvaMzlbwq6j+9RfeGvBTngTz3Lme8SfMGt5F18DwKi5u7XbZxPEjRJ72BV8y808R5vZ2QdDyqysq7OWpLvF//nL0TWea8kWH/PDz4D7xwMrU7MqIzOYeTN7z/s+o9Wl+APLVU7TseEBC8jiqIPX950Dzt0lg80IeoO/Cobzy1BXw7fOQ4vFQfQz2JRSo8MZg0vTsqwrxpwDy848oAvLocqz1KGIi8Y8H7vJK1TbzPhBQ9GOc4vXMbhLz33F08gPjkO5S0Y7rh+189a/tPPSdqtTdQODE95mqNu5g6PzxtHUU8/95GPdKvHb2vVUA8gdx0uzUe7byhZjw81qVMPSfpBL2DYJq8DhwHPW6Dv7wlNla9ByiXvUBH0LzLc4e88mJlPH9HJL1Hhry7fsHcvFuwhTw5ghS9RhvxO5bWJz34cRq7uTgMvBwj37wuRI68WTMqOtvN4rnCABu9tzEMPV6UyTywIAe9AHsXvJBlz7wBFPA8cSsXPAh5Fr0puG68vbASPcw9PT0qSMu88I43vWTy+LzBckW9rokiu6EckT3GzxU9g/gevBTh47yu1oa8nCcxvTjMpz2Mb3O8aKYTPSwxvzsTtHA7/aOVPOfMbL1OiKI8AiQ1vcFsDzs4kJq9nvjVvIO/q7yru0M9UZNSvVPXvbyh4+u8rjocPdwLhbzyw3s8IeHjPDr+KrsxhmE8vNcfvXspmbsoK1K9PrqlPGINlLwjqAk8EocBPdiodbycdS88vLSvvSdyirzsVO081hWUvM0YZj0maxm9vzKovGi6Jz3NsRU9+uGqPUI0hDunLLI9FP81PMsKXD1K/iY9xlufPS8gzryWhpW7cpyDPJnlFj0AQeM8+LtlOy1sGDvlUYy7WGB7PEvquLr0Efo8jjZvuzSUIbwfCbA8+mopPRYSLT3vDsK8jNnVuz0DQz2gFwa9DlAGPcOOuTqhIuS82UHyvFgOury6QBc9/WUuvJtgDL376e07YyA8PQbtkL1wAWE9AUWXu6X25ry9wsi6jGASu9sCGTs3u067hdftPD9CjLy7OO48hMYCPbohIz3cuBU9XSPJPDnkET2nEnE8pC1zvPmOizw1NsI8K7uqutcMTD1FKCK9QDKuu2T9C7t5GIQ8M03tvDZ7uzxwNS28rgXTu0hZaj0kSmG91Ga4OxyGcr0+piA9fEYMPEdLZb14bus8ESXePMf8kjzdFrM9bA+bvAt3Vr3ay2s88CwxvXMobzwev4o8Sm9OvIW7zzxA2Wi9nagyPVXjoTzhRsg7xy1FPAaKA73ZuhM96bF6PP5RkD1pU5K9jBOrvRRQ7rvWYnu9fXtfO2qEbzxQuBQ92d1xPTUq37xKJ7+8rj5aPIbtIT34pje8DYQGPQqBv7vqfco8l1YjO3Mnkj1Hzu47X4qvuz53Rzu83iQ9KFFjvNQstTyu3gK8xBj4PAl/5byceV29lgFNPAOpdL3rNIi89WwAvU8pnLuCJDE8cT0WvQ85mrznmUE9ir73vJ8cnDxqK2c9zScNPTkxcjsUuwm8+XsRvBfyfTypOH29sUWsPLA21ryvRrC7M3HCvdleWjyaQ3g97eBRvXYQMz3BsVe82cwKvfmMOrzoQNa7fMyxPWE5QzyPbmS8+R3hPEHr9LslTzu9w3NhPW/9IT2Dz8m8jtYOPW0sWry19+A8bnKOPdPkZz20vre87hUUveioNj1lsoK8IJzSPLY9gb2hA5w9KdALvZlvPr0Msyo8p8/6vB2mvDw1mYQ9RPPhO1CEkDsfJhi91T0ju+h/sbzaa1y99qOQPe3LfD1x9e48YTufPKcCAjsQzNy8RZY9veTajrz4SiG9CO7MvNQLiTt1Nio8/SXnurs7hj3dXIk7d6RTvAKiCz1ZKW49IpenPI2Wv7wtuxu9fR2EvGogID2YhR472ye3PdlXEzsMkv28Ho1HPcLmCTqKxUq9HyZwvb63Cr2phVC9
related:
  - dart/truthy.md
  - dart/function-invoking.md
  - snippets/lightweight-flutter-animations.md
  - dart/bitwise.md
  - display-html-in-flutter.md
---

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
