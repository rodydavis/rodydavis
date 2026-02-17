---
title: Lightweight Flutter Animations
description: >
  Learn how to create a streamlined animation widget in Flutter that eliminates
  the need for `setState` by leveraging an abstract class and
  `SingleTickerProviderStateMixin` for efficient UI updates.
date: '2025-01-19 05:45:19.179Z'
draft: false
tags:
  - UI-UX
  - Dart
  - Flutter
  - Animations
summary: >-
  Dart code defines `AnimationWidget`, an abstract class for creating animated
  widgets that simplifies UI updates by integrating a ticker and avoiding manual
  `setState` calls, demonstrated with an inline canvas painter example.
embedding: >-
  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
related:
  - snippets/flutter-stream-widget.md
  - signals-and-flutter-hooks.md
  - snippets/flutter-infinite-canvas.md
  - snippets/flutter-input-output-preview.md
  - flutter-multi-touch-canvas.md
---

Overview 
---------

First we need to create the abstract class:

```dart
abstract class AnimationWidget<T extends StatefulWidget> extends State<T>
    with SingleTickerProviderStateMixin {
  Duration elapsed = Duration.zero;
  Duration delta = Duration.zero;
  late final Ticker ticker;
  BoxConstraints constraints = const BoxConstraints.tightFor();

  @override
  void initState() {
    super.initState();
    ticker = createTicker((elapsed) {
      delta = elapsed - this.elapsed;
      this.elapsed = elapsed;
      update(elapsed);
      if (mounted) setState(() {});
    });
    ticker.start();
    WidgetsBinding.instance.addPostFrameCallback(start);
  }

  @override
  void dispose() {
    ticker.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, dimens) {
      constraints = dimens;
      return paint(context, dimens);
    });
  }

  void start(Duration time) {}

  void update(Duration time);

  Widget paint(BuildContext context, BoxConstraints constraints);
}
```

This will let us replace `State` with `AnimationWidget` and not need to call `setState` to rebuild the ui.

Example 
--------

For the example we need an inline canvas painter:

```dart
class InlinePainter extends CustomPainter {
  InlinePainter({
    required this.draw,
    super.repaint,
  });

  final void Function(Canvas canvas, Size size) draw;

  @override
  void paint(Canvas canvas, Size size) {
    draw(canvas, size);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}
```

And the example using the new widget class:

```dart
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class SimpleExample extends StatefulWidget {
  const SimpleExample({Key? key}) : super(key: key);

  @override
  State<SimpleExample> createState() => _SimpleExampleState();
}

class _SimpleExampleState extends AnimationWidget<SimpleExample> {
  var x = 0.0;
  var y = 0.0;
  var z = 0.0;

  @override
  void update(Duration time) {
    final t = delta.inMilliseconds / 1000;
    x += t;
    y += t;
    z += t;
  }

  @override
  Widget paint(BuildContext context, BoxConstraints constraints) {
    return Material(
      child: Center(
        child: Container(
          width: 100,
          height: 100,
          transform: Matrix4.identity()
            ..rotateX(x)
            ..rotateY(y)
            ..rotateZ(z),
          child: const Text(
            'Hello World',
            style: TextStyle(
              fontSize: 30,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }
}
```

Demo
----
