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
  Flutter's `setState` method manages widget state, but using `ValueNotifier` in
  a container provides a more efficient and manageable way to update the UI
  based on data changes, especially with widgets like `ValueListenableBuilder`.
embedding: >-
  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
related:
  - flutter/snippets/lightweight-animations.md
  - flutter/snippets/stream-widget.md
  - flutter/ssr-rfw.md
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.md
  - >-
    podcast/creative-engineering/flutter-state-management-and-dart-nullability-feat-simon-lightfoot.md
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
