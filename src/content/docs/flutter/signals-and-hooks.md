---
title: Signals and Flutter Hooks
date: '2025-01-31 12:00:00.000Z'
draft: false
tags:
  - flutter
  - html
  - dart
  - signals
summary: >-
  The guide contrasts basic state management using `setState` with the more
  advanced, reactive approach of using `ValueNotifier` and
  `ValueListenableBuilder` to efficiently update specific parts of the Flutter
  widget tree.
embedding: >-
  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
related:
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.mdx
  - flutter/snippets/infinite-canvas.md
  - flutter/snippets/lightweight-animations.md
  - flutter/snippets/stream-widget.md
  - dart/function-invoking.md
last_updated_metadata: '2026-11-01T07:49:06.282Z'
---

# Signals and Flutter Hooks

When working with data in [Flutter](https://flutter.dev), on of the first things you are exposed to is [setState](https://api.flutter.dev/flutter/widgets/State/setState.html).

setState
--------

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;

  void increment() {
    if (mounted) {
      setState(() {
        count++;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(child: Text('Count: $count')),
      floatingActionButton: FloatingActionButton(
        onPressed: increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

This simply marks the widget as dirty every time you call **setState** but requires you (as the developer) to be mindful and explict about when those updates happen. If you forget to call **setState** when mutating data the widget tree can become stale.

ValueNotifier
-------------

We can impove this by using [ValueNotifier](https://api.flutter.dev/flutter/foundation/ValueNotifier-class.html) instead of storing the value directly. This gives us the ability to read and write a value in a container and use helper widgets like [ValueListenableBuilder](https://api.flutter.dev/flutter/widgets/ValueListenableBuilder-class.html) to update sub parts of the widget tree on value changes.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  final count = ValueNotifier(0);

  void increment() {
    count.value++;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(child: ValueListenableBuilder(
        valueListenable: count,
        builder: (context, value, child) {
          return Text('Count: $value');
        }
      )),
      floatingActionButton: FloatingActionButton(
        onPressed: increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

FlutterSignal
-------------

Using the [signals](https://pub.dev/packages/signals) package we can upgrade ValueNotifier to a [signal backed implmentation](https://preactjs.com/guide/v10/signals/) which uses a reactive graph based on a push / pull architecture.

```dart
import 'package:flutter/material.dart';
import 'package:signals/signals_flutter.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  final count = signal(0);

  void increment() {
    count.value++;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: ValueListenableBuilder(
          valueListenable: count,
          builder: (context, value, child) {
            return Text('Count: $value');
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

> Signals created after **6.0.0** also implement ValueNotifier so you can easily migrate them without changing any other code.

Instead of ValueListenableBuilder we can use the Watch widget or .watch(context) extension.

```dart
import 'package:flutter/material.dart';
import 'package:signals/signals_flutter.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  final count = signal(0);

  void increment() {
    count.value++;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: Text('Count: ${count.watch(context)}'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

flutter\_hooks
--------------

Using [Flutter Hooks](https://pub.dev/packages/flutter_hooks) we can reduce boilerplate of StatefulWidget by switching to a HookWidget. With **useState** we can define the state directly in the build method and easily share them across widgets.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends HookWidget {
  const Counter({super.key});

  @override
  Widget build(BuildContext context) {
    final count = useState(0);
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(child: Text('Count: ${count.value}')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => count.value++,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

> **useState** returns a ValueNotifier that automatically rebuilds the widget on changes

signals\_hooks
--------------

Using a new package [signals\_hooks](https://pub.dev/packages/signals_hooks) we can now define signals in HookWidgets and have the benifits of a reactive graph with shareable lifecycles between widgets.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:signals_hooks/signals_hooks.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: Counter()));
}

class Counter extends HookWidget {
  const Counter({super.key});

  @override
  Widget build(BuildContext context) {
    final count = useSignal(0);
    final countStr = useComputed(() => count.value.toString());
    useSignalEffect(() {
      print('count: $count');
    });
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(child: Text('Count: $countStr')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => count.value++,
        child: const Icon(Icons.add),
      ),
    );
  }
}

```
