---
title: Flutter Stream Widget
description: >
  Learn how to build dynamic Flutter UIs by directly using streams within your
  widget's build method, enabling reactive screen updates and more efficient
  data handling.
date: '2025-01-19 05:41:20.631Z'
draft: false
tags:
  - Dart
  - Flutter
summary: >-
  Flutter widget using streams in the `build` method for reactive UI updates,
  handling errors and empty states with `StreamBuilder`.
embedding: >-
  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
related:
  - signals-and-flutter-hooks.md
  - flutter-ssr-rfw.md
  - snippets/lightweight-flutter-animations.md
  - snippets/flutter-master-detail-view.md
  - automate-flutter-apps.md
---

Work with streams directly in the build method of a [Flutter](https://flutter.dev/) widget:

```dart
import 'dart:async';

import 'package:flutter/widgets.dart';

abstract class StreamWidget extends StatefulWidget {
  const StreamWidget({Key? key}) : super(key: key);

  Stream<Widget> build(BuildContext context);

  void initState() {}

  void dispose() {}

  void reassemble() {}

  Widget? buildEmpty(BuildContext context) => null;

  Widget? buildError(BuildContext context, Object? error) => null;

  @override
  State<StreamWidget> createState() => _StreamWidgetState();
}

class _StreamWidgetState extends State<StreamWidget> {
  @override
  void initState() {
    widget.initState.call();
    super.initState();
  }

  @override
  void dispose() {
    widget.dispose.call();
    super.dispose();
  }

  @override
  void reassemble() {
    widget.reassemble.call();
    super.reassemble();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
      stream: widget.build(context),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          final result = widget.buildError(context, snapshot.error);
          if (result != null) return result;
        }
        if (snapshot.hasData) {
          return snapshot.data!;
        } else {
          final result = widget.buildEmpty(context);
          if (result != null) return result;
        }
        return const SizedBox.shrink();
      },
    );
  }
}
```

This could also be applied to Future widgets, but for reactive screens, streams are closer to what is actually happening.

Riverpod Example
----------------

```dart
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'generated.g.dart';

@riverpod
class GeneratedWidget extends _$GeneratedWidget {
  @override
  Widget build(BuildContext context) {
    return const Text('Generated widget!');
  }
}

@riverpod
class StreamWidget extends _$StreamWidget {
  @override
  Stream<Widget> build(BuildContext context) async* {
    final controller = StreamController<int>();
    final timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      controller.add(timer.tick);
    });
    yield* controller.stream.map((event) => Text('Stream widget: $event'));
    timer.cancel();
    await controller.close();
  }
}

@riverpod
class FutureWidget extends _$FutureWidget {
  @override
  Future<Widget> build(BuildContext context) async {
    await Future.delayed(const Duration(seconds: 3));
    return const Text('Future completed!');
  }
}

class Example extends StatelessWidget {
  const Example({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            Consumer(builder: (context, ref, child) {
              final generated = ref.watch(generatedWidgetProvider(context));
              return generated;
            }),
            Consumer(builder: (context, ref, child) {
              final stream = ref.watch(streamWidgetProvider(context));
              return stream.when(
                data: (data) => data,
                error: (error, stack) => Text(error.toString()),
                loading: () => const CircularProgressIndicator(),
              );
            }),
            Consumer(builder: (context, ref, child) {
              final future = ref.watch(futureWidgetProvider(context));
              return future.when(
                data: (data) => data,
                error: (error, stack) => Text(error.toString()),
                loading: () => const CircularProgressIndicator(),
              );
            }),
          ],
        ),
      ),
    );
  }
}
```
