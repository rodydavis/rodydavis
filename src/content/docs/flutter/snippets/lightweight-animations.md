---
title: Lightweight Flutter Animations
date: '2025-01-19 05:45:19.179Z'
draft: false
tags:
  - flutter
  - dart
summary: >-
  Use the specialized `AnimationWidget` abstract class to efficiently manage
  Flutter animations and continuous UI updates without relying on standard
  `setState` calls.
embedding: >-
  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
related:
  - flutter/snippets/stream-widget.md
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/infinite-canvas.md
  - flutter/snippets/markdown-view-material-3.md
  - flutter/snippets/native-http-client.md
last_updated_metadata: '2026-11-01T02:28:43.735Z'
---

# Lightweight Flutter Animations

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
