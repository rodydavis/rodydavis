---
title: Multi-touch Canvas with Flutter
date: '2025-01-20 03:07:56.301Z'
draft: false
tags:
  - flutter
  - html
  - dart
  - github
  - web
summary: >-
  Flutter package providing a multi-touch canvas implementation with panning,
  zooming, object selection, and trackpad support, including project setup
  instructions and a live demo.
embedding: >-
  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
related:
  - flutter/snippets/infinite-canvas.md
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.md
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/lightweight-animations.md
  - videos/take-5/responsive-design-flutter.md
---

# Multi-touch Canvas with Flutter

If you ever wanted to create a canvas in [Flutter](https://flutter.dev/) that needs to be panned in any direction and allow zoom then you also probably tried to create a [MultiGestureRecognizer](https://api.flutter.dev/flutter/gestures/MultiDragGestureRecognizer-class.html) or under a [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html) added onPanUpdate and onScaleUpdate and received an error because both can not work at the same time. Even if you have to GestureDetectors then you will still find it does not work how you want and one will always win.

> **TLDR** The final source [here](https://github.com/rodydavis/flutter_multi_touch_canvas) and an online [demo](https://rodydavis.github.io/flutter_multi_touch_canvas/).

This is the canvas rendering logic used in [https://widget.studio](https://widget.studio/)

Multi Touch Goal 
-----------------

*   Pan the canvas with two or more fingers
*   Zoom the canvas with two fingers only (Pinch/Zoom)
*   Single finger will interact with canvas object and detect selection
*   Bonus trackpad support with similar results

In order to achieve this we need to use a Listener for the trackpad events and raw touch interactions and [RawKeyboardListener](https://api.flutter.dev/flutter/widgets/RawKeyboardListener-class.html) for keyboard shortcuts.

Part 1 - Project Setup 
-----------------------

Open your terminal and type the following:

```markdown
mkdir flutter_multi_touch
cd flutter_multi_touch
flutter create .
code .
```

The last line is optional and if you have VSCode installed. The command will open the directory inside VSCode.

Part 2 - Boilerplate 
---------------------

*   Remove all comments
*   Remove extra empty lines
*   Update UI

Right now when you run the project you will have this UI.

Create a new file located at `ui/home/screen.dart` and add the following:

```dart
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

```

Update `main.dart` with the following:

```dart
import 'package:flutter/material.dart';

import 'ui/home/screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      darkTheme: ThemeData.dark().copyWith(
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

```

You will now have a black screen when you run the application.

Part 3 - Creating the Controller 
---------------------------------

Now we want to create a class that will act as our controller on the canvas.  
Create a new file at `src/controllers/canvas.dart` and add the following to start:

```dart
import 'dart:async';

/// Control the canvas and the objects on it
class CanvasController {
  // Controller for the stream output
  final _controller = StreamController<CanvasController>();
  // Reference to the stream to update the UI
  Stream<CanvasController> get stream => _controller.stream;
  // Emit a new event to rebuild the UI
  void add([CanvasController val]) => _controller.add(val ?? this);
  // Stop the stream and finish
  void close() => _controller.close();
	// Start the stream
  void init() => add();
}

```

Update the home screen with the following:

```dart
import 'package:flutter/material.dart';

import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    super.initState();
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(),
            body: Stack(
              children: [
                Positioned(
                  top: 20,
                  left: 20,
                  width: 100,
                  height: 100,
                  child: Container(color: Colors.red),
                )
              ],
            ),
          );
        });
  }
}

```

Here we are just adding the basics to rebuild when the controller changes or the screen is finished. We are using a stateful widget here because we want to dispose of the controller and load it only once. We are also using a stack because thats all we need under the hood. After a quick hot restart you should have the following view.

Part 4 - Adding Canvas Objects 
-------------------------------

Now we need to create the class for the objects that will be stored on the canvas. Create a new file at `src/classes/canvas_object.dart` and add the following:

```dart
import 'dart:ui';

class CanvasObject<T> {
  final double dx;
  final double dy;
  final double width;
  final double height;
  final T child;

  CanvasObject({
    this.dx = 0,
    this.dy = 0,
    this.width = 100,
    this.height = 100,
    this.child,
  });

  CanvasObject<T> copyWith({
    double dx,
    double dy,
    double width,
    double height,
    T child,
  }) {
    return CanvasObject<T>(
      dx: dx ?? this.dx,
      dy: dy ?? this.dy,
      width: width ?? this.width,
      height: height ?? this.height,
      child: child ?? this.child,
    );
  }

  Size get size => Size(width, height);
  Offset get offset => Offset(dx, dy);
  Rect get rect => offset & size;
}

```

We are using a generic here to not depend on flutter or material in the class. Update the controller with the following:

```dart
import 'dart:async';

import 'package:flutter/material.dart';

import '../classes/canvas_object.dart';

/// Control the canvas and the objects on it
class CanvasController {
  /// Controller for the stream output
  final _controller = StreamController<CanvasController>();

  /// Reference to the stream to update the UI
  Stream<CanvasController> get stream => _controller.stream;

  /// Emit a new event to rebuild the UI
  void add([CanvasController val]) => _controller.add(val ?? this);

  /// Stop the stream and finish
  void close() => _controller.close();

  /// Start the stream
  void init() => add();

  // -- Canvas Objects --

  final List<CanvasObject<Widget>> _objects = [];

  /// Current Objects on the canvas
  List<CanvasObject<Widget>> get objects => _objects;

  /// Add an object to the canvas
  void addObject(CanvasObject<Widget> value) => _update(() {
        _objects.add(value);
      });

  /// Add an object to the canvas
  void updateObject(int i, CanvasObject<Widget> value) => _update(() {
        _objects[i] = value;
      });

  /// Remove an object from the canvas
  void removeObject(int i) => _update(() {
        _objects.removeAt(i);
      });

  void _update(void Function() action) {
    action();
    add(this);
  }
}

```

We are just adding the objects to the canvas and removing them if needed. Update the home screen with the following to use these new objects:

```dart
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(),
            body: Stack(
              children: [
                for (final object in instance.objects)
                  Positioned(
                    top: object.dy,
                    left: object.dx,
                    width: object.width,
                    height: object.height,
                    child: object.child,
                  )
              ],
            ),
          );
        });
  }
}

```

The UI is thee same as before but now is dynamic and we have access to the Stack children and position of each child.

Part 5 - Capture the Input 
---------------------------

We need to capture the input of the MultiGestureRecognizer, GestureDetector and RawKeyboardListener. Update the canvas controller with the following:

```dart
import 'dart:async';

import 'package:flutter/material.dart';

import '../classes/canvas_object.dart';

/// Control the canvas and the objects on it
class CanvasController {
  /// Controller for the stream output
  final _controller = StreamController<CanvasController>();

  /// Reference to the stream to update the UI
  Stream<CanvasController> get stream => _controller.stream;

  /// Emit a new event to rebuild the UI
  void add([CanvasController val]) => _controller.add(val ?? this);

  /// Stop the stream and finish
  void close() {
    _controller.close();
    focusNode.dispose();
  }

  /// Start the stream
  void init() => add();

  // -- Canvas Objects --

  final List<CanvasObject<Widget>> _objects = [];

  /// Current Objects on the canvas
  List<CanvasObject<Widget>> get objects => _objects;

  /// Add an object to the canvas
  void addObject(CanvasObject<Widget> value) => _update(() {
        _objects.add(value);
      });

  /// Add an object to the canvas
  void updateObject(int i, CanvasObject<Widget> value) => _update(() {
        _objects[i] = value;
      });

  /// Remove an object from the canvas
  void removeObject(int i) => _update(() {
        _objects.removeAt(i);
      });

  /// Focus node for listening for keyboard shortcuts
  final focusNode = FocusNode();

  /// Raw events from keys pressed
  void rawKeyEvent(BuildContext context, RawKeyEvent key) {}

  /// Called every time a new finger touches the screen
  void addTouch(int pointer, Offset offsetVal, Offset globalVal) {}

  /// Called when any of the fingers update position
  void updateTouch(int pointer, Offset offsetVal, Offset globalVal) {}

  /// Called when a finger is removed from the screen
  void removeTouch(int pointer) {}

  /// Checks if the shift key on the keyboard is pressed
  bool shiftPressed = false;

  /// Scale of the canvas
  double get scale => _scale;
  double _scale = 1;
  set scale(double value) => _update(() {
        _scale = value;
      });

  /// Max possible scale
  static const double maxScale = 3.0;
  /// Min possible scale
  static const double minScale = 0.2;
  /// How much to scale the canvas in increments
  static const double scaleAdjust = 0.05;

  /// Current offset of the canvas
  Offset get offset => _offset;
  Offset _offset = Offset.zero;
  set offset(Offset value) => _update(() {
        _offset = value;
      });

  void _update(void Function() action) {
    action();
    add(this);
  }
}

```

Update the home screen with the following:

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(),
            body: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerSignal: (details) {
                if (details is PointerScrollEvent) {
                  GestureBinding.instance.pointerSignalResolver
                      .register(details, (event) {
                    if (event is PointerScrollEvent) {
                      if (_controller.shiftPressed) {
                        double zoomDelta = (-event.scrollDelta.dy / 300);
                        _controller.scale = _controller.scale + zoomDelta;
                      } else {
                        _controller.offset =
                            _controller.offset - event.scrollDelta;
                      }
                    }
                  });
                }
              },
              onPointerMove: (details) {
                _controller.updateTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerDown: (details) {
                _controller.addTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerUp: (details) {
                _controller.removeTouch(details.pointer);
              },
              onPointerCancel: (details) {
                _controller.removeTouch(details.pointer);
              },
              child: RawKeyboardListener(
                autofocus: true,
                focusNode: _controller.focusNode,
                onKey: (key) => _controller.rawKeyEvent(context, key),
                child: Stack(
                  children: [
                    for (final object in instance.objects)
                      Positioned(
                        top: object.dy,
                        left: object.dx,
                        width: object.width,
                        height: object.height,
                        child: object.child,
                      )
                  ],
                ),
              ),
            ),
          );
        });
  }
}

```

All we are doing now is just mapping the inputs of the UI to the actions in the controller. Feel free to look through the comments if you are curious how each one works. Running the application should still just show the red square.

Part 5 - Canvas Offset and Scale 
---------------------------------

Now we want to start moving the canvas. Let’s first tackle the offset as scale will take a different approach. Update the home screen with the following:

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(),
            body: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerSignal: (details) {
                if (details is PointerScrollEvent) {
                  GestureBinding.instance.pointerSignalResolver
                      .register(details, (event) {
                    if (event is PointerScrollEvent) {
                      if (_controller.shiftPressed) {
                        double zoomDelta = (-event.scrollDelta.dy / 300);
                        _controller.scale = _controller.scale + zoomDelta;
                      } else {
                        _controller.offset =
                            _controller.offset - event.scrollDelta;
                      }
                    }
                  });
                }
              },
              onPointerMove: (details) {
                _controller.updateTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerDown: (details) {
                _controller.addTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerUp: (details) {
                _controller.removeTouch(details.pointer);
              },
              onPointerCancel: (details) {
                _controller.removeTouch(details.pointer);
              },
              child: RawKeyboardListener(
                autofocus: true,
                focusNode: _controller.focusNode,
                onKey: (key) => _controller.rawKeyEvent(context, key),
                child: SizedBox.expand(
                  child: Stack(
                    children: [
                      for (final object in instance.objects)
                        AnimatedPositioned.fromRect(
                          duration: const Duration(milliseconds: 50),
                          rect: object.rect.adjusted(
                            _controller.offset,
                            _controller.scale,
                          ),
                          child: FittedBox(
                            fit: BoxFit.fill,
                            child: SizedBox.fromSize(
                              size: object.size,
                              child: object.child,
                            ),
                          ),
                        )
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }
}

extension RectUtils on Rect {
  Rect adjusted(Offset offset, double scale) {
    final left = (this.left + offset.dx) * scale;
    final top = (this.top + offset.dy) * scale;
    final width = this.width * scale;
    final height = this.height * scale;
    return Rect.fromLTWH(left, top, width, height);
  }
}

```

Now when you use your trackpad to pan with two fingers you will see the red square move. We now need to add finger support too. You may notice the FittedBox and that will come in as soon as we add scaling.

Now if we move the square off the screen we may need to bring it back. We can add a reset button to the AppBar. Add the following to the canvas controller:

```dart
  static const double _scaleDefault = 1;
  static const Offset _offsetDefault = Offset.zero;

  void reset() {
    scale = _scaleDefault;
    offset = _offsetDefault;
  }

```

Update the home screen with the following:

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(
              actions: [
                IconButton(
                  tooltip: 'Reset the Scale and Offset',
                  icon: Icon(Icons.restore),
                  onPressed: _controller.reset,
                ),
              ],
            ),
            body: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerSignal: (details) {
                if (details is PointerScrollEvent) {
                  GestureBinding.instance.pointerSignalResolver
                      .register(details, (event) {
                    if (event is PointerScrollEvent) {
                      if (_controller.shiftPressed) {
                        double zoomDelta = (-event.scrollDelta.dy / 300);
                        _controller.scale = _controller.scale + zoomDelta;
                      } else {
                        _controller.offset =
                            _controller.offset - event.scrollDelta;
                      }
                    }
                  });
                }
              },
              onPointerMove: (details) {
                _controller.updateTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerDown: (details) {
                _controller.addTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerUp: (details) {
                _controller.removeTouch(details.pointer);
              },
              onPointerCancel: (details) {
                _controller.removeTouch(details.pointer);
              },
              child: RawKeyboardListener(
                autofocus: true,
                focusNode: _controller.focusNode,
                onKey: (key) => _controller.rawKeyEvent(context, key),
                child: SizedBox.expand(
                  child: Stack(
                    children: [
                      for (final object in instance.objects)
                        AnimatedPositioned.fromRect(
                          duration: const Duration(milliseconds: 50),
                          rect: object.rect.adjusted(
                            _controller.offset,
                            _controller.scale,
                          ),
                          child: FittedBox(
                            fit: BoxFit.fill,
                            child: SizedBox.fromSize(
                              size: object.size,
                              child: object.child,
                            ),
                          ),
                        )
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }
}

extension RectUtils on Rect {
  Rect adjusted(Offset offset, double scale) {
    final left = (this.left + offset.dx) * scale;
    final top = (this.top + offset.dy) * scale;
    final width = this.width * scale;
    final height = this.height * scale;
    return Rect.fromLTWH(left, top, width, height);
  }
}

```

Now when you press the reset button the canvas animates back to the default offset and scale.

While we are here we can add actions for zoom in/out and connect them to the controller. Add the following to the canvas controller:

```dart
  void zoomIn() {
    scale += scaleAdjust;
  }

  void zoomOut() {
    scale -= scaleAdjust;
  }

```

Add the following to the AppBar actions:

```dart
IconButton(
    tooltip: 'Zoom In',
    icon: Icon(Icons.zoom_in),
    onPressed: _controller.zoomIn,
 ),
IconButton(
    tooltip: 'Zoom Out',
    icon: Icon(Icons.zoom_out),
    onPressed: _controller.zoomOut,
),

```

Now when you run the application you can easily zoom in/out.

Part 6 - Keyboard Shortcuts 
----------------------------

Now we need to capture the keyboard events so we can move the canvas with the arrow keys and scale with +/- keys. Update the controller with the following:

```dart
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../classes/canvas_object.dart';

/// Control the canvas and the objects on it
class CanvasController {
  /// Controller for the stream output
  final _controller = StreamController<CanvasController>();

  /// Reference to the stream to update the UI
  Stream<CanvasController> get stream => _controller.stream;

  /// Emit a new event to rebuild the UI
  void add([CanvasController val]) => _controller.add(val ?? this);

  /// Stop the stream and finish
  void close() {
    _controller.close();
    focusNode.dispose();
  }

  /// Start the stream
  void init() => add();

  // -- Canvas Objects --

  final List<CanvasObject<Widget>> _objects = [];

  /// Current Objects on the canvas
  List<CanvasObject<Widget>> get objects => _objects;

  /// Add an object to the canvas
  void addObject(CanvasObject<Widget> value) => _update(() {
        _objects.add(value);
      });

  /// Add an object to the canvas
  void updateObject(int i, CanvasObject<Widget> value) => _update(() {
        _objects[i] = value;
      });

  /// Remove an object from the canvas
  void removeObject(int i) => _update(() {
        _objects.removeAt(i);
      });

  /// Focus node for listening for keyboard shortcuts
  final focusNode = FocusNode();

  /// Raw events from keys pressed
  void rawKeyEvent(BuildContext context, RawKeyEvent key) {
    // Scale keys
    if (key.isKeyPressed(LogicalKeyboardKey.minus)) {
      zoomOut();
    }
    if (key.isKeyPressed(LogicalKeyboardKey.equal)) {
      zoomIn();
    }
    // Directional Keys
    if (key.isKeyPressed(LogicalKeyboardKey.arrowLeft)) {
      offset = offset + Offset(offsetAdjust, 0.0);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowRight)) {
      offset = offset + Offset(-offsetAdjust, 0.0);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowUp)) {
      offset = offset + Offset(0.0, offsetAdjust);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowDown)) {
      offset = offset + Offset(0.0, -offsetAdjust);
    }

    _shiftPressed = key.isShiftPressed;

    /// Update Controller Instance
    add(this);
  }

  /// Called every time a new finger touches the screen
  void addTouch(int pointer, Offset offsetVal, Offset globalVal) {}

  /// Called when any of the fingers update position
  void updateTouch(int pointer, Offset offsetVal, Offset globalVal) {}

  /// Called when a finger is removed from the screen
  void removeTouch(int pointer) {}

  /// Checks if the shift key on the keyboard is pressed
  bool get shiftPressed => _shiftPressed;
  bool _shiftPressed = false;

  /// Scale of the canvas
  double get scale => _scale;
  double _scale = 1;
  set scale(double value) => _update(() {
        _scale = value;
      });

  /// Max possible scale
  static const double maxScale = 3.0;

  /// Min possible scale
  static const double minScale = 0.2;

  /// How much to scale the canvas in increments
  static const double scaleAdjust = 0.05;

  /// How much to shift the canvas in increments
  static const double offsetAdjust = 15;

  /// Current offset of the canvas
  Offset get offset => _offset;
  Offset _offset = Offset.zero;
  set offset(Offset value) => _update(() {
        _offset = value;
      });

  static const double _scaleDefault = 1;
  static const Offset _offsetDefault = Offset.zero;

  /// Reset the canvas zoom and offset
  void reset() {
    scale = _scaleDefault;
    offset = _offsetDefault;
  }

  /// Zoom in the canvas
  void zoomIn() {
    scale += scaleAdjust;
  }

  /// Zoom out the canvas
  void zoomOut() {
    scale -= scaleAdjust;
  }

  void _update(void Function() action) {
    action();
    add(this);
  }
}

```

Now when you run the application you can control the zoom and pan with just a keyboard. This could be useful for a fallback input that would work on a TV for example…

If you want to see if it is actually scaling proportionally then add the following the home screen:

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
    _controller.addObject(
      CanvasObject(
        dx: 80,
        dy: 60,
        width: 100,
        height: 200,
        child: Container(color: Colors.green),
      ),
    );
    _controller.addObject(
      CanvasObject(
        dx: 100,
        dy: 40,
        width: 100,
        height: 50,
        child: Container(color: Colors.blue),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(
              actions: [
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Zoom In',
                    icon: Icon(Icons.zoom_in),
                    onPressed: _controller.zoomIn,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Zoom Out',
                    icon: Icon(Icons.zoom_out),
                    onPressed: _controller.zoomOut,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Reset the Scale and Offset',
                    icon: Icon(Icons.restore),
                    onPressed: _controller.reset,
                  ),
                ),
              ],
            ),
            body: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerSignal: (details) {
                if (details is PointerScrollEvent) {
                  GestureBinding.instance.pointerSignalResolver
                      .register(details, (event) {
                    if (event is PointerScrollEvent) {
                      if (_controller.shiftPressed) {
                        double zoomDelta = (-event.scrollDelta.dy / 300);
                        _controller.scale = _controller.scale + zoomDelta;
                      } else {
                        _controller.offset =
                            _controller.offset - event.scrollDelta;
                      }
                    }
                  });
                }
              },
              onPointerMove: (details) {
                _controller.updateTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerDown: (details) {
                _controller.addTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerUp: (details) {
                _controller.removeTouch(details.pointer);
              },
              onPointerCancel: (details) {
                _controller.removeTouch(details.pointer);
              },
              child: RawKeyboardListener(
                autofocus: true,
                focusNode: _controller.focusNode,
                onKey: (key) => _controller.rawKeyEvent(context, key),
                child: SizedBox.expand(
                  child: Stack(
                    children: [
                      for (final object in instance.objects)
                        AnimatedPositioned.fromRect(
                          duration: const Duration(milliseconds: 50),
                          rect: object.rect.adjusted(
                            _controller.offset,
                            _controller.scale,
                          ),
                          child: FittedBox(
                            fit: BoxFit.fill,
                            child: SizedBox.fromSize(
                              size: object.size,
                              child: object.child,
                            ),
                          ),
                        )
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }
}

extension RectUtils on Rect {
  Rect adjusted(Offset offset, double scale) {
    final left = (this.left + offset.dx) * scale;
    final top = (this.top + offset.dy) * scale;
    final width = this.width * scale;
    final height = this.height * scale;
    return Rect.fromLTWH(left, top, width, height);
  }
}


```

You can zoom and the blocks all scale correctly and pan around.

Just press the reset button to start over.

Part 7 - Multi Touch Input 
---------------------------

Now time for the fingers. For this you will need a touchscreen device to test. You can plug in your phone or if you have a touch screen computer you can run the web version. Update the controller with following:

```dart
import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../classes/canvas_object.dart';
import '../classes/rect_points.dart';

/// Control the canvas and the objects on it
class CanvasController {
  /// Controller for the stream output
  final _controller = StreamController<CanvasController>();

  /// Reference to the stream to update the UI
  Stream<CanvasController> get stream => _controller.stream;

  /// Emit a new event to rebuild the UI
  void add([CanvasController val]) => _controller.add(val ?? this);

  /// Stop the stream and finish
  void close() {
    _controller.close();
    focusNode.dispose();
  }

  /// Start the stream
  void init() => add();

  // -- Canvas Objects --

  final List<CanvasObject<Widget>> _objects = [];

  /// Current Objects on the canvas
  List<CanvasObject<Widget>> get objects => _objects;

  /// Add an object to the canvas
  void addObject(CanvasObject<Widget> value) => _update(() {
        _objects.add(value);
      });

  /// Add an object to the canvas
  void updateObject(int i, CanvasObject<Widget> value) => _update(() {
        _objects[i] = value;
      });

  /// Remove an object from the canvas
  void removeObject(int i) => _update(() {
        _objects.removeAt(i);
      });

  /// Focus node for listening for keyboard shortcuts
  final focusNode = FocusNode();

  /// Raw events from keys pressed
  void rawKeyEvent(BuildContext context, RawKeyEvent key) {
    // Scale keys
    if (key.isKeyPressed(LogicalKeyboardKey.minus)) {
      zoomOut();
    }
    if (key.isKeyPressed(LogicalKeyboardKey.equal)) {
      zoomIn();
    }
    // Directional Keys
    if (key.isKeyPressed(LogicalKeyboardKey.arrowLeft)) {
      offset = offset + Offset(offsetAdjust, 0.0);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowRight)) {
      offset = offset + Offset(-offsetAdjust, 0.0);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowUp)) {
      offset = offset + Offset(0.0, offsetAdjust);
    }
    if (key.isKeyPressed(LogicalKeyboardKey.arrowDown)) {
      offset = offset + Offset(0.0, -offsetAdjust);
    }

    _shiftPressed = key.isShiftPressed;
    _metaPressed = key.isMetaPressed;

    /// Update Controller Instance
    add(this);
  }

  /// Trigger Shift Press
  void shiftSelect() {
    _shiftPressed = true;
  }

  /// Trigger Meta Press
  void metaSelect() {
    _metaPressed = true;
  }

  final Map<int, Offset> _pointerMap = {};

  /// Number of inputs currently on the screen
  int get touchCount => _pointerMap.values.length;

  /// Marquee selection on the canvas
  RectPoints get marquee => _marquee;
  RectPoints _marquee;

  /// Dragging a canvas object
  bool get isMovingCanvasObject => _isMovingCanvasObject;
  bool _isMovingCanvasObject = false;

  final List<int> _selectedObjects = [];
  List<int> get selectedObjectsIndices => _selectedObjects;
  List<CanvasObject<Widget>> get selectedObjects =>
      _selectedObjects.map((i) => _objects[i]).toList();
  bool isObjectSelected(int i) => _selectedObjects.contains(i);

  /// Called every time a new input touches the screen
  void addTouch(int pointer, Offset offsetVal, Offset globalVal) {
    _pointerMap[pointer] = offsetVal;

    if (shiftPressed) {
      final pt = (offsetVal / scale) - (offset);
      _marquee = RectPoints(pt, pt);
    }

    /// Update Controller Instance
    add(this);
  }

  /// Called when any of the inputs update position
  void updateTouch(int pointer, Offset offsetVal, Offset globalVal) {
    if (_marquee != null) {
      // Update New Widget Rect
      final _pts = _marquee;
      final a = _pointerMap.values.first;
      _pointerMap[pointer] = offsetVal;
      final b = _pointerMap.values.first;
      final delta = (b - a) / scale;
      _pts.end = _pts.end + delta;
      _marquee = _pts;
      final _rect = Rect.fromPoints(_pts.start, _pts.end);
      _selectedObjects.clear();
      for (var i = 0; i < _objects.length; i++) {
        if (_rect.overlaps(_objects[i].rect)) {
          _selectedObjects.add(i);
        }
      }
    } else if (touchCount == 1) {
      // Widget Move
      _isMovingCanvasObject = true;
      final a = _pointerMap.values.first;
      _pointerMap[pointer] = offsetVal;
      final b = _pointerMap.values.first;
      if (_selectedObjects.isEmpty) return;
      for (final idx in _selectedObjects) {
        final widget = _objects[idx];
        final delta = (b - a) / scale;
        final _newOffset = widget.offset + delta;
        _objects[idx] = widget.copyWith(dx: _newOffset.dx, dy: _newOffset.dy);
      }
    } else if (touchCount == 2) {
      // Scale and Rotate Update
      _isMovingCanvasObject = false;
      final _rectA = _getRectFromPoints(_pointerMap.values.toList());
      _pointerMap[pointer] = offsetVal;
      final _rectB = _getRectFromPoints(_pointerMap.values.toList());
      final _delta = _rectB.center - _rectA.center;
      final _newOffset = offset + (_delta / scale);
      offset = _newOffset;
      final aDistance = (_rectA.topLeft - _rectA.bottomRight).distance;
      final bDistance = (_rectB.topLeft - _rectB.bottomRight).distance;
      final change = (bDistance / aDistance);
      scale = scale * change;
    } else {
      // Pan Update
      _isMovingCanvasObject = false;
      final _rectA = _getRectFromPoints(_pointerMap.values.toList());
      _pointerMap[pointer] = offsetVal;
      final _rectB = _getRectFromPoints(_pointerMap.values.toList());
      final _delta = _rectB.center - _rectA.center;
      offset = offset + (_delta / scale);
    }
    _pointerMap[pointer] = offsetVal;

    /// Update Controller Instance
    add(this);
  }

  /// Called when a input is removed from the screen
  void removeTouch(int pointer) {
    _pointerMap.remove(pointer);

    if (touchCount < 1) {
      _isMovingCanvasObject = false;
    }
    if (_marquee != null) {
      _marquee = null;
      _shiftPressed = false;
    }

    /// Update Controller Instance
    add(this);
  }

  void selectObject(int i) => _update(() {
        if (!_metaPressed) {
          _selectedObjects.clear();
        }
        _selectedObjects.add(0);
        final item = _objects.removeAt(i);
        _objects.insert(0, item);
      });

  /// Checks if the shift key on the keyboard is pressed
  bool get shiftPressed => _shiftPressed;
  bool _shiftPressed = false;

  /// Checks if the meta key on the keyboard is pressed
  bool get metaPressed => _metaPressed;
  bool _metaPressed = false;

  /// Scale of the canvas
  double get scale => _scale;
  double _scale = 1;
  set scale(double value) => _update(() {
        if (value <= minScale) {
          value = minScale;
        } else if (value >= maxScale) {
          value = maxScale;
        }
        _scale = value;
      });

  /// Max possible scale
  static const double maxScale = 3.0;

  /// Min possible scale
  static const double minScale = 0.2;

  /// How much to scale the canvas in increments
  static const double scaleAdjust = 0.05;

  /// How much to shift the canvas in increments
  static const double offsetAdjust = 15;

  /// Current offset of the canvas
  Offset get offset => _offset;
  Offset _offset = Offset.zero;
  set offset(Offset value) => _update(() {
        _offset = value;
      });

  static const double _scaleDefault = 1;
  static const Offset _offsetDefault = Offset.zero;

  /// Reset the canvas zoom and offset
  void reset() {
    scale = _scaleDefault;
    offset = _offsetDefault;
  }

  /// Zoom in the canvas
  void zoomIn() {
    scale += scaleAdjust;
  }

  /// Zoom out the canvas
  void zoomOut() {
    scale -= scaleAdjust;
  }

  void _update(void Function() action) {
    action();
    add(this);
  }

  Rect _getRectFromPoints(List<Offset> offsets) {
    if (offsets.length == 2) {
      return Rect.fromPoints(offsets.first, offsets.last);
    }
    final dxs = offsets.map((e) => e.dx).toList();
    final dys = offsets.map((e) => e.dy).toList();
    double left = _minFromList(dxs);
    double top = _minFromList(dys);
    double bottom = _maxFromList(dys);
    double right = _maxFromList(dxs);
    return Rect.fromLTRB(left, top, right, bottom);
  }

  double _minFromList(List<double> values) {
    double value = double.infinity;
    for (final item in values) {
      value = math.min(item, value);
    }
    return value;
  }

  double _maxFromList(List<double> values) {
    double value = -double.infinity;
    for (final item in values) {
      value = math.max(item, value);
    }
    return value;
  }
}

```

Add a new file `src/classes/rect_points.dart` and add the following:

```dart
import 'dart:ui';

class RectPoints {
  RectPoints(this.start, this.end);

  Offset start, end;

  Rect get rect => Rect.fromPoints(start, end);
}

```

Update the `main.dart` with the following:

```dart
import 'package:flutter/material.dart';

import 'ui/home/screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        accentColor: Colors.red,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      darkTheme: ThemeData.dark().copyWith(
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

```

Update the home screen with the following:

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import '../../src/classes/canvas_object.dart';
import '../../src/controllers/canvas.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = CanvasController();

  @override
  void initState() {
    _controller.init();
    _dummyData();
    super.initState();
  }

  void _dummyData() {
    _controller.addObject(
      CanvasObject(
        dx: 20,
        dy: 20,
        width: 100,
        height: 100,
        child: Container(color: Colors.red),
      ),
    );
    _controller.addObject(
      CanvasObject(
        dx: 80,
        dy: 60,
        width: 100,
        height: 200,
        child: Container(color: Colors.green),
      ),
    );
    _controller.addObject(
      CanvasObject(
        dx: 100,
        dy: 40,
        width: 100,
        height: 50,
        child: Container(color: Colors.blue),
      ),
    );
  }

  @override
  void dispose() {
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<CanvasController>(
        stream: _controller.stream,
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(),
              body: Center(child: CircularProgressIndicator()),
            );
          }
          final instance = snapshot.data;
          return Scaffold(
            appBar: AppBar(
              actions: [
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Selection',
                    icon: Icon(Icons.select_all),
                    color: instance.shiftPressed
                        ? Theme.of(context).accentColor
                        : null,
                    onPressed: _controller.shiftSelect,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Meta Key',
                    color: instance.metaPressed
                        ? Theme.of(context).accentColor
                        : null,
                    icon: Icon(Icons.category),
                    onPressed: _controller.metaSelect,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Zoom In',
                    icon: Icon(Icons.zoom_in),
                    onPressed: _controller.zoomIn,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Zoom Out',
                    icon: Icon(Icons.zoom_out),
                    onPressed: _controller.zoomOut,
                  ),
                ),
                FocusScope(
                  canRequestFocus: false,
                  child: IconButton(
                    tooltip: 'Reset the Scale and Offset',
                    icon: Icon(Icons.restore),
                    onPressed: _controller.reset,
                  ),
                ),
              ],
            ),
            body: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerSignal: (details) {
                if (details is PointerScrollEvent) {
                  GestureBinding.instance.pointerSignalResolver
                      .register(details, (event) {
                    if (event is PointerScrollEvent) {
                      if (_controller.shiftPressed) {
                        double zoomDelta = (-event.scrollDelta.dy / 300);
                        _controller.scale = _controller.scale + zoomDelta;
                      } else {
                        _controller.offset =
                            _controller.offset - event.scrollDelta;
                      }
                    }
                  });
                }
              },
              onPointerMove: (details) {
                _controller.updateTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerDown: (details) {
                _controller.addTouch(
                  details.pointer,
                  details.localPosition,
                  details.position,
                );
              },
              onPointerUp: (details) {
                _controller.removeTouch(details.pointer);
              },
              onPointerCancel: (details) {
                _controller.removeTouch(details.pointer);
              },
              child: RawKeyboardListener(
                autofocus: true,
                focusNode: _controller.focusNode,
                onKey: (key) => _controller.rawKeyEvent(context, key),
                child: SizedBox.expand(
                  child: Stack(
                    children: [
                      for (var i = 0; i < instance.objects.length; i++)
                        Positioned.fromRect(
                          rect: instance.objects[i].rect.adjusted(
                            _controller.offset,
                            _controller.scale,
                          ),
                          child: Container(
                            decoration: BoxDecoration(
                                border: Border.all(
                              color: instance.isObjectSelected(i)
                                  ? Colors.grey
                                  : Colors.transparent,
                            )),
                            child: GestureDetector(
                              onTapDown: (_) => _controller.selectObject(i),
                              child: FittedBox(
                                fit: BoxFit.fill,
                                child: SizedBox.fromSize(
                                  size: instance.objects[i].size,
                                  child: instance.objects[i].child,
                                ),
                              ),
                            ),
                          ),
                        ),
                      if (instance?.marquee != null)
                        Positioned.fromRect(
                          rect: instance.marquee.rect
                              .adjusted(instance.offset, instance.scale),
                          child: Container(
                            color: Colors.blueAccent.withOpacity(0.3),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }
}

extension RectUtils on Rect {
  Rect adjusted(Offset offset, double scale) {
    final left = (this.left + offset.dx) * scale;
    final top = (this.top + offset.dy) * scale;
    final width = this.width * scale;
    final height = this.height * scale;
    return Rect.fromLTWH(left, top, width, height);
  }
}

```

Now you can move any object on the canvas just by clicking and dragging. You can zoom with 2 fingers and pan with 2 or 3 fingers. If you hold down the shift key then you can use a marquee to select multiple and if you hold down the meta/command key then you can select multiple by tapping each.

Conclusion 
-----------

If you are on a device without a keyboard you can tap the new icons to turn on the keyboard key actions. When the object is selected there is a grey border.

Now you can add any widget to the canvas and pan and zoom!
