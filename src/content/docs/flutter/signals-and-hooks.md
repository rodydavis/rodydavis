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
  - flutter/ssr-rfw.md
  - flutter/snippets/lightweight-animations.md
  - podcast/creative-engineering/talking-about-riverpod-with-remi-rousselet.mdx
  - flutter/snippets/stream-widget.md
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.mdx
last_updated_metadata: '2026-05-23T00:11:36.048Z'
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
