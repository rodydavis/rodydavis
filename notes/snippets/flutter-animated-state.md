---
title: Flutter Animated State
tags:
- dart
- flutter
- animations
- snippets
---

## Overview

Sometimes instead of calling **setState** it is desirable to update every frame. 

The following is an example of how to create an **AnimatedState**:

```dart
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Animation Example',
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      home: const SimpleExample(),
    );
  }
}

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