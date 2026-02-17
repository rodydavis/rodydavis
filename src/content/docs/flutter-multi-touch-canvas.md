---
title: Multi-touch Canvas with Flutter
description: >
  Learn how to create a Flutter canvas with multi-touch support for panning,
  zooming, and object interaction, overcoming common gesture recognition
  conflicts.
date: '2025-01-20 03:07:56.301Z'
draft: false
tags:
  - Flutter
  - Dart
  - UI-UX
summary: >-
  Flutter package providing multi-touch canvas functionality with panning,
  zooming, object selection, and trackpad support, including project setup
  instructions and a live demo.
embedding: >-
  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
related:
  - snippets/flutter-input-output-preview.md
  - snippets/flutter-infinite-canvas.md
  - first-flutter-project.md
  - automate-flutter-apps.md
  - flutter-cheat-sheet.md
---

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
