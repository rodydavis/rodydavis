---
title: Signals and Flutter Hooks
description: >
  Explore state management in Flutter, from the basics of `setState` to advanced
  techniques using ValueNotifier, Signals, Flutter Hooks, and the new
  signals_hooks package for a reactive and efficient approach.
date: '2025-01-31 12:00:00.000Z'
draft: false
tags:
  - Signals
  - Dart
  - Flutter
summary: >-
  Flutter's `setState` method manages UI updates by marking widgets as dirty,
  but using `ValueNotifier` in a container provides a more efficient and
  maintainable way to manage state and update the widget tree.
embedding: >-
  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
related:
  - snippets/flutter-stream-widget.md
  - snippets/lightweight-flutter-animations.md
  - flutter-ssr-rfw.md
  - flutter/git-worktree-channels.md
  - native-cross-platform-flutter.md
---

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
