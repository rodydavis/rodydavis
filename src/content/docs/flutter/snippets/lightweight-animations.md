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
related:
  - flutter/snippets/stream-widget.md
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/infinite-canvas.md
  - flutter/snippets/markdown-view-material-3.md
  - flutter/snippets/native-http-client.md
last_updated_metadata: '2026-11-01T09:41:36.845Z'
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
