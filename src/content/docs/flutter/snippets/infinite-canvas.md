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
  - videos/take-5/responsive-design-flutter.mdx
  - videos/take-5/adaptive-dialogs-flutter.mdx
  - videos/take-5/master-detail-scaffold-flutter.mdx
  - flutter/snippets/master-detail-view.md
last_updated_metadata: '2026-05-23T00:11:45.178Z'
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
