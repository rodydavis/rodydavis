---
title: Flutter Native HTTP Client
date: '2025-01-19 05:39:48.030Z'
draft: false
tags:
  - flutter
  - dart
summary: >-
  The provided Dart code demonstrates how to initialize a cross-platform HTTP
  client in Flutter, automatically selecting between specialized networking
  libraries (like Cronet for Android and Cupertino for iOS) to ensure optimal
  performance.
related:
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/stream-widget.md
  - flutter/snippets/lightweight-animations.md
  - flutter/snippets/markdown-view-material-3.md
  - flutter/ssr-rfw.md
last_updated_metadata: '2026-11-01T09:41:36.847Z'
---

# Flutter Native HTTP Client

```dart
import 'package:cronet_http/cronet_http.dart';
import 'package:cupertino_http/cupertino_http.dart';
import 'package:device_info_plus/device_info_plus.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:platform_info/platform_info.dart';

void main() async {
  var clientFactory = Client.new;
  final device = DeviceInfoPlugin();
  if (platform.isAndroid) {
    final engine = CronetEngine.build(
      cacheMode: CacheMode.memory,
      userAgent: (await device.androidInfo).model,
    );
    clientFactory = () => CronetClient.fromCronetEngine(engine);
  } else if (platform.isCupertino) {
    clientFactory = CupertinoClient.defaultSessionConfiguration.call;
  }
  runWithClient(() => runApp(const MyApp()),clientFactory);
}
```
