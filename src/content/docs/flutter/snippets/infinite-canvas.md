---
title: Flutter Infinite Canvas
date: '2025-01-19 05:33:00.331Z'
draft: false
tags:
  - flutter
  - html
  - dart
summary: >-
  Learn how to build a customizable, multi-touch infinite canvas widget in
  Flutter using combinations of `InteractiveViewer` and
  `CustomMultiChildLayout`.
embedding: >-
  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
related:
  - flutter/multi-touch-canvas.md
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/lightweight-animations.md
  - flutter/snippets/stream-widget.md
  - flutter/signals-and-hooks.md
last_updated_metadata: '2026-11-01T02:28:43.285Z'
---

# Flutter Infinite Canvas

Overview 
---------

The following is an example of how to build an infinite canvas with [InteractiveViewer](https://api.flutter.dev/flutter/widgets/InteractiveViewer-class.html) and [CustomMultiChildLayout](https://api.flutter.dev/flutter/widgets/CustomMultiChildLayout-class.html).

Blog post: [Create a multi touch canvas in Flutter](https://rodydavis.com/posts/flutter-multi-touch-canvas)

```dart
import 'package:flutter/material.dart';
import 'package:vector_math/vector_math_64.dart' hide Colors;

void main() {
  final controller = WidgetCanvasController([
    WidgetCanvasChild(
      key: UniqueKey(),
      offset: Offset.zero,
      size: const Size(400, 800),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Scaffold 1'),
        ),
        body: const Placeholder(),
      ),
    ),
    WidgetCanvasChild(
      key: UniqueKey(),
      offset: const Offset(200, 200),
      size: const Size(400, 800),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Scaffold 2'),
        ),
        body: const Placeholder(),
      ),
    ),
  ]);
  runApp(MaterialApp(home: WidgetCanvas(controller: controller)));
}

class WidgetCanvas extends StatefulWidget {
  const WidgetCanvas({super.key, required this.controller});

  final WidgetCanvasController controller;

  @override
  State<WidgetCanvas> createState() => WidgetCanvasState();
}

class WidgetCanvasState extends State<WidgetCanvas> {
  @override
  void initState() {
    super.initState();
    controller.addListener(onUpdate);
  }

  @override
  void dispose() {
    controller.removeListener(onUpdate);
    super.dispose();
  }

  void onUpdate() {
    if (mounted) setState(() {});
  }

  static const Size _gridSize = Size.square(50);
  WidgetCanvasController get controller => widget.controller;

  Rect axisAlignedBoundingBox(Quad quad) {
    double xMin = quad.point0.x;
    double xMax = quad.point0.x;
    double yMin = quad.point0.y;
    double yMax = quad.point0.y;
    for (final Vector3 point in <Vector3>[
      quad.point1,
      quad.point2,
      quad.point3,
    ]) {
      if (point.x < xMin) {
        xMin = point.x;
      } else if (point.x > xMax) {
        xMax = point.x;
      }

      if (point.y < yMin) {
        yMin = point.y;
      } else if (point.y > yMax) {
        yMax = point.y;
      }
    }

    return Rect.fromLTRB(xMin, yMin, xMax, yMax);
  }

  @override
  Widget build(BuildContext context) {
    const inset = 2.0;
    return Listener(
      onPointerDown: (details) {
        controller.mouseDown = true;
        controller.checkSelection(details.localPosition);
      },
      onPointerUp: (details) {
        controller.mouseDown = false;
      },
      onPointerCancel: (details) {
        controller.mouseDown = false;
      },
      onPointerMove: (details) {},
      child: LayoutBuilder(
        builder: (context, constraints) => InteractiveViewer.builder(
          transformationController: controller.transform,
          panEnabled: controller.canvasMoveEnabled,
          scaleEnabled: controller.canvasMoveEnabled,
          onInteractionStart: (details) {
            controller.mousePosition = details.focalPoint;
          },
          onInteractionUpdate: (details) {
            if (!controller.mouseDown) {
              controller.scale = details.scale;
            } else {
              controller.moveSelection(details.focalPoint);
            }
            controller.mousePosition = details.focalPoint;
          },
          onInteractionEnd: (details) {},
          minScale: 0.4,
          maxScale: 4,
          boundaryMargin: const EdgeInsets.all(double.infinity),
          builder: (context, viewport) {
            return SizedBox(
              width: 1,
              height: 1,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Positioned.fill(
                    child: GridBackgroundBuilder(
                      cellWidth: _gridSize.width,
                      cellHeight: _gridSize.height,
                      viewport: axisAlignedBoundingBox(viewport),
                    ),
                  ),
                  Positioned.fill(
                    child: CustomMultiChildLayout(
                      delegate: WidgetCanvasDelegate(controller),
                      children: controller.children.map((e) {
                        return LayoutId(
                            id: e,
                            child: Stack(
                              clipBehavior: Clip.none,
                              children: [
                                Positioned.fill(
                                  child: Material(
                                    elevation: 4,
                                    child: SizedBox.fromSize(
                                      size: e.size,
                                      child: e.child,
                                    ),
                                  ),
                                ),
                                if (controller.isSelected(e.key!))
                                  Positioned.fill(
                                    top: -inset,
                                    left: -inset,
                                    right: -inset,
                                    bottom: -inset,
                                    child: Container(
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                          color: Colors.blue,
                                          width: 1,
                                        ),
                                      ),
                                    ),
                                  ),
                              ],
                            ));
                      }).toList(),
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

class GridBackgroundBuilder extends StatelessWidget {
  const GridBackgroundBuilder({
    super.key,
    required this.cellWidth,
    required this.cellHeight,
    required this.viewport,
  });

  final double cellWidth;
  final double cellHeight;
  final Rect viewport;

  @override
  Widget build(BuildContext context) {
    final int firstRow = (viewport.top / cellHeight).floor();
    final int lastRow = (viewport.bottom / cellHeight).ceil();
    final int firstCol = (viewport.left / cellWidth).floor();
    final int lastCol = (viewport.right / cellWidth).ceil();

    return Stack(
      clipBehavior: Clip.none,
      children: <Widget>[
        for (int row = firstRow; row < lastRow; row++)
          for (int col = firstCol; col < lastCol; col++)
            Positioned(
              left: col * cellWidth,
              top: row * cellHeight,
              child: Container(
                height: cellHeight,
                width: cellWidth,
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.grey.withOpacity(0.1),
                    width: 1,
                  ),
                ),
              ),
            ),
      ],
    );
  }
}

class WidgetCanvasDelegate extends MultiChildLayoutDelegate {
  WidgetCanvasDelegate(this.controller);
  final WidgetCanvasController controller;
  List<WidgetCanvasChild> get children => controller.children;

  Size backgroundSize = const Size(100000, 100000);
  late Offset backgroundOffset = Offset(
    -backgroundSize.width / 2,
    -backgroundSize.height / 2,
  );

  @override
  void performLayout(Size size) {
    // Then draw the screens.
    for (final widget in children) {
      layoutChild(widget, BoxConstraints.tight(widget.size));
      positionChild(widget, widget.offset);
    }
  }

  @override
  bool shouldRelayout(WidgetCanvasDelegate oldDelegate) => true;
}

class WidgetCanvasChild extends StatelessWidget {
  const WidgetCanvasChild({
    required Key key,
    required this.size,
    required this.offset,
    required this.child,
  }) : super(key: key);

  final Size size;
  final Offset offset;
  final Widget child;

  Rect get rect => offset & size;

  WidgetCanvasChild copyWith({
    Size? size,
    Offset? offset,
    Widget? child,
  }) {
    return WidgetCanvasChild(
      key: key!,
      size: size ?? this.size,
      offset: offset ?? this.offset,
      child: child ?? this.child,
    );
  }

  @override
  Widget build(BuildContext context) {
    return child;
  }
}

class WidgetCanvasController extends ChangeNotifier {
  WidgetCanvasController(this.children);

  final List<WidgetCanvasChild> children;
  final Set<Key> _selected = {};
  late final transform = TransformationController();
  Matrix4 get matrix => transform.value;
  double scale = 1;
  Offset mousePosition = Offset.zero;

  bool _mouseDown = false;
  bool get mouseDown => _mouseDown;
  set mouseDown(bool value) {
    _mouseDown = value;
    notifyListeners();
  }

  bool isSelected(Key key) => _selected.contains(key);

  bool get hasSelection => _selected.isNotEmpty;

  bool get canvasMoveEnabled => !mouseDown;

  Offset toLocal(Offset global) {
    return transform.toScene(global);
  }

  void checkSelection(Offset localPosition) {
    final offset = toLocal(localPosition);
    final selection = <Key>[];
    for (final child in children) {
      final rect = child.rect;
      if (rect.contains(offset)) {
        selection.add(child.key!);
      }
    }
    if (selection.isNotEmpty) {
      setSelection({selection.last});
    } else {
      deselectAll();
    }
  }

  void moveSelection(Offset position) {
    final delta = toLocal(position) - toLocal(mousePosition);
    for (final key in _selected) {
      final index = children.indexWhere((e) => e.key == key);
      if (index == -1) continue;
      final current = children[index];
      children[index] = current.copyWith(
        offset: current.offset + delta,
      );
    }
    mousePosition = position;
    notifyListeners();
  }

  void select(Key key) {
    _selected.add(key);
    notifyListeners();
  }

  void setSelection(Set<Key> keys) {
    _selected.clear();
    _selected.addAll(keys);
    notifyListeners();
  }

  void deselect(Key key) {
    _selected.remove(key);
    notifyListeners();
  }

  void deselectAll() {
    _selected.clear();
    notifyListeners();
  }

  void add(WidgetCanvasChild child) {
    children.add(child);
    notifyListeners();
  }

  void remove(Key key) {
    children.removeWhere((e) => e.key == key);
    notifyListeners();
  }
}
```

Demo
----
