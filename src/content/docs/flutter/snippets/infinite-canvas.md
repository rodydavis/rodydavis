---
title: Flutter Infinite Canvas
date: '2025-01-19 05:33:00.331Z'
draft: false
tags:
  - flutter
  - html
  - dart
summary: >-
  Build an infinite canvas in Flutter using InteractiveViewer and
  CustomMultiChildLayout for creating multi-touch canvases and dynamic layouts.
embedding: >-
  /xD1vTAcxbzu1wI91KvAPSajML3V4Mo83EN8vGglIjyuHxM9lvkjvQrXRzxb5128Dr2KvFJl4jtCun45ZhhqPevI3TydpS29TdOZPMlWC7wb5lE9vfyVPY3NdDzqYpg6bnomvVNBtD02Lok8pMTbvNn7Lj2+RYe80XZ/PUE4CTwtN4Y9BYHCPVuN2LtDntc7yFbSOxhGujz/1xY9eJOyO2DO4ryEOgq8AfomOh9UtTtZVh09tf6cvKoUerzcO1C9A8hKvDRebbxE8zw87ESXPA0IJr0Jyqq81ZhMvZr8E72rzkC9D7LavKlyCjuOM108w8QYvfyE3DwhrTS8wzDTu2sQ8DwMlhq9ybCRPX9KUDzHkPQ8syURPg6zUL2iy5G8BCL0PH0Ekr3zlqo9QwQfPsrQtLpWM5M83bi7vMhI0DyYlFI8ZZBDvVNOHT1y2AS8MDeQPTU/Pj09sBg9+bp8uw5Hjj29CsO7QhmDvNAF6bzVxde7D/KAva426rq6jKO6OdhqvLsdzLywY3m6q7oZvKzM/rvCod08qPvJOwwzyz1Cu8U8iSZkPcpKrTx3RZ28QHZRvQTlMTwLH9K97THIPcJ4dD1pNF8991BdPZzelLunMEK923eIOwVh5zt1UgU9w6QtPbuh4DsqXgg9oWL+vIE5tbwvz+a68smQvXd3qDzPU+07rloJPJ6DaTuhfZI8bzkBPS9xhDwurYW9CCLqPPPAcLwgVkU98LCDPKtYHTsA5i28EbhHvZPwlbuZFV49FDVwPcLVBD2RxGm9sjrgPN4v4jvwS8u7VV5bvH+YBL1+KCo8r0stPN6odjxs1ze78FT7vBY4Nj3JOmO85suavYzHGb3srNw8gRmWPXQXgTyTtx49LyPhPAbYxTz7jWw9PT/HvH/4Pr34Rek8574OvZlzIj3oPyE8nP2+vJGnQb2MLNy8G2ZgvWukXjwMUZo9Ut0wvQAb/jzx8qW8YESDPcOUUz3I0PO8Gou8vf6Yv7yyjyI88rYFvaAPZjx/Ghu918+GuxFARTte4349eDoJPVr6cT3cp9g8ySCBvRaR2rqowQQ97Q8nvWCp9LzloNa8BmaJO1JG0jwG7MO8aI4vPCoyg70DiR89Nsf7ulHBkb39mIQ8mZPmvN2zGz1ChQu8z44hPKojpbzp+1c9au6PvFljtTskU2Y7XVSWvWvHKr3PpwO8teIKvNzy0ryO3BW8iXU2PcGZNTox5DQ9Ur0zvZFtEryQYNg8i3E2u6ri77wRE8K8BcoPPEDVI7z73rq7L2tuve8vk7xvTwq9Q/WnuyW/pjzjQQU98eqwO9MsKL1iz9c8wbs5PLfMI70YVos9ej9tvP1Rzr2XyDe9iKiYPbJHDL1uiQI8a4l4vWkHbjvinIw9wcUDvQERpbqAGb45wBafPWQAlTxUUxG8UyY2vQr+v72kmGA8K+jGO0rN+Lxf/c+8LLxsOz9x4zvTdnq7xEjTuXCSzbqH7708tkmsvM6VUzz/0aM7BufSvBjHAD0A2EY8n4i8PC6kmD21hhc9564OvXl6kb2L48O8CqGyPAAiADzHGV68M2R6vdgY9jtJwb68tTQSuy2xrLuJqQS74+zRPBzjgryfF5686KksvajJWL36l8M8deGEPcvBT72b19+8prnZPOb+i7xNq+Q6oU8Iu/HUKTuxPxU9nJo3PaxkNb3lQcE8XHRfu1iBmDxyF987daEGPIhCsbxhsOc8T1GQO1Ge8LzWcgi9NxdzPM201b1El6g80OzzPF6wHL1DOlQ9YNe9PPPMOr0P0G67561xPTiQWTs9bIq8EiKEvFs7Ybz/Kl28rYL0Otq2BLzUDEA9ur+MO1AYCD3jKXA9O/8XPXQmM7ztcyc8ANMIvPBoSjxdpy89zlxhO1mjtjvwPiK94+sRPcdMgj29Jyq9aXMgPROZv70Q2Rw9FXNZvSqmRT3Ruok8rOP8uf+elDxr0BO9G063vP1Yhb3Mwgw9amQIPNmKH724ZHW7mLJmOiLRTT1I7yS85xI0PBSmyzwJ/Uq8MgkRPYKJgjvguYM7g/vSPBgbH7234Zi8l/adPXL7Vb1h/k47+oEauyqqEb1o2uG89ZmpvLOwtDuOT1e8pqwDvTZxTj1UGAg9JtJnvEiKGb2BUMO8rd3fvLua7rpZ6AM9iO2ZvC/53Dsp43A9F9FevL7UM727//M8fUEqO5wMGD2BQrS9gDHaO7CJMj2zeYC8MEHhPIWu3rwgQmE9jqlrvVgrhrzFm5w8p8CmPRq7Jz31z0k84PioPJNFMbu7KFU86DGHPWtojDzTRB48vNyJvMtAND3ZrcC8L0uyvPg/7jwh2tI80HcHPZI/pTy4qam8jM5yvEhfPj2pRtc84H+9vCe2Tr2CRci8vAD0O2CRSTy3wJY8KrZOPIq+MzzFaqs8mmocu4EEYjz0X8O8GEC+uxO9HjxkGTk713HYusgLCrvfFpk9t214PXYBgr2NWDC90jlpPTzrA7391Ss8vGzLvBJX/LxEsaA7iUUjPXn1nrz5zmk9+oC+vHlWODt2FYU8WU+OPJ11Ur2tTQC8hZUqvBFnX7z+Ada8fdEsu7+4OToZIuC8aiwnPYxUVjywFMS8P9fWOxlkDTw74IQ8MNYhO8B89zx2iQk9PksJvb9Y0jvD0cM8PFfZOwESrLyx9nK90Kc/Pa8zmT37xpi8bI2sPL5zUTunZts8e7aAPCdTqrt7Tm07CWElvbFk4ryGn2m8VK8ZPs1LI70Pyz49MfVzvDEP1rxtJ9u8ogbNu2cKhbwPsR89xuifvI/rdD1m+/g8YvblPHfz2rz/l6E6vkuOPPfBLL2Mw0A6+nkZvA0uQ7wySTi9NBMxPPMj0rxSGHG5Bul0vARWvTpntvK7/TVPOhq4br0NbRG97hm6vFkSwzv08p+72BthO3tL6DzejQo9s5pnPLCLST2OuZm71gnYvOtKhjp6Q2s9cBfuvPWC2zyC+Ay8ghrUO3le5rrcfCw9uzYqPJLFbzvzjgK92aZJu3k5bz24qhQ8i9igOj9EKTzbZkC66D5XvNr+k7zxoGK7J0sDvQ3/sL32ADI9htYjPUlNDLy/0ug7cReuvEhSdTynvhI8r907PEuiObpyt6s86BLCu1Kotzwjfio98E3CvLchVj1qKoW8HgoqvYIHgjyFSM48xb59PL4KFzzim1M9HcBqvGMDaD33uOe7tHLtPGYnzrw4aWc7gL2APRAflj0hEc28H74KPYoocjyJRp87fZBmvKQ1GDwRBAi8+QKsPE1NWLwfyYA9rmSJu4+ooTy4Kye8dqyXvH2jUzyVNLc8/lZPPcnAOz1parm8VIkpPTSOLrzVpyY9X96tPXlpsryVuQO8C1MVvWEzqjtHfju9H3YxPcE7qrzOJCS9GIQwPadAHbxk1Au8TSPLO/aLyzy/QnC9qlWhPPWskT2yjDq9UnDrvHKIODzqbkO8TjoGvbB9yzz/pY+9FhE4PZjRmDwiqSG9qutOvV50zruaD568d3wKvQwWIj3H/bM8sP4hvRQRgTwR+Yk7AC2+vEBgPj0VfPw8GgS1O+ZHoLyC/fi8PBdlPPGD1jwAXku95nr9vM3GlLsSFZU87NmdvFqsL7zIXtY7spKcvXixlbxDUgI955NevBFABD1zePI6HyoAvTXD27yayBI8hQjwvLsK0LtFLuI8NZFrPOibkj2DOJA8OiqnvWAK1b2gfrO8RiBYvVQUL70aYdO8lIgOvaHRxbxqH4k9GPkOPVJI2rwK4ga8PPKmPCz+BL2a6kk9ZPjdPFCKb7sdHvm8w2BGuz+Pj7xwnoY7IxwpPY+8Jz0FAou8Kcy5PGOrhrxb8ns8JoFOvBq/7bytLc28a7MrvQptIjwOubO7Vr2GvVlgbb1475I7CK0XPDZEgTzrFhO81GsBvOz3/jwPlK88QWMzunwQCT1e9Ti9wkYbPdUUsDzgrds8dmAUvWQiWz18iWK98MPMvcZR+jxmlW29SPIVPTMIcLquKQQ9HnQSuz4QlDzuEwg98LQBPKE2oTyHurA82/ohPXe8VzweBO08a3LtOZaWW7ybLR0909unPNPj1rt3/049X+L3vKA2MbyJptO8
related:
  - flutter/multi-touch-canvas.md
  - videos/take-5/responsive-design-flutter.md
  - flutter/snippets/stream-widget.md
  - videos/flutter/material-3-from-design-to-deployment.md
  - flutter/snippets/lightweight-animations.md
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
