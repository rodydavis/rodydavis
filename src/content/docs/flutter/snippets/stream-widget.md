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
  - flutter/ssr-rfw.md
  - flutter/signals-and-hooks.md
  - videos/take-5/responsive-design-flutter.mdx
  - flutter/snippets/master-detail-view.md
last_updated_metadata: '2026-05-23T00:12:20.126Z'
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
