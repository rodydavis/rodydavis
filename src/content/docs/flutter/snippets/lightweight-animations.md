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
  - flutter/signals-and-hooks.md
  - flutter/snippets/stream-widget.md
  - flutter/ssr-rfw.md
  - flutter/snippets/infinite-canvas.md
  - videos/take-5/responsive-design-flutter.mdx
last_updated_metadata: '2026-05-23T00:11:56.757Z'
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
