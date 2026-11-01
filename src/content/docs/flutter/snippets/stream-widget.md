---
title: Flutter Stream Widget
date: '2025-01-19 05:41:20.631Z'
draft: false
tags:
  - flutter
  - dart
summary: >-
  Implement the `StreamWidget` pattern to manage reactive UIs in Flutter by
  integrating asynchronous data streams directly into the widget's build method,
  handling data, error, and loading states automatically.
embedding: >-
  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
related:
  - flutter/snippets/lightweight-animations.md
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/infinite-canvas.md
  - flutter/snippets/markdown-view-material-3.md
  - flutter/snippets/native-http-client.md
last_updated_metadata: '2026-11-01T02:28:44.209Z'
---

# Flutter Stream Widget

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
