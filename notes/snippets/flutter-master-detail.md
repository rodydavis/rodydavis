---
title: Flutter Master-detail view
tags:
- dart
- flutter
- adaptive
- snippets
---

## Overview

How to build a [Master-detail](https://en.wikipedia.org/wiki/Master%E2%80%93detail_interface) view with Flutter:

```dart
import 'package:flutter/material.dart';

class MasterDetail<T> extends StatefulWidget {
  const MasterDetail({
    Key? key,
    required this.listBuilder,
    required this.detailBuilder,
    required this.onPush,
    this.emptyBuilder,
  }) : super(key: key);

  final Widget Function(BuildContext, ValueChanged<T?>, T?) listBuilder;
  final Widget Function(BuildContext, T, bool) detailBuilder;
  final void Function(BuildContext, T) onPush;
  final WidgetBuilder? emptyBuilder;

  @override
  State<MasterDetail<T>> createState() => _MasterDetailState<T>();
}

class _MasterDetailState<T> extends State<MasterDetail<T>> {
  final selected = ValueNotifier<T?>(null);
  double? detailsWidth;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      primary: false,
      body: LayoutBuilder(
        builder: (context, dimens) {
          const double minWidth = 350;
          final maxWidth = dimens.maxWidth - minWidth;
          if (detailsWidth != null) {
            if (detailsWidth! > maxWidth) {
              detailsWidth = maxWidth;
            }
            if (detailsWidth! < minWidth) {
              detailsWidth = minWidth;
            }
          }
          return ValueListenableBuilder<T?>(
            valueListenable: selected,
            builder: (context, item, child) {
              final canShowDetails = dimens.maxWidth > 800;
              final showDetails = item != null && canShowDetails;
              return Row(
                children: [
                  Expanded(
                    child: widget.listBuilder(context, (item) {
                      if (canShowDetails) {
                        selected.value = item;
                      } else {
                        selected.value = null;
                        if (item != null) widget.onPush(context, item);
                      }
                    }, selected.value),
                  ),
                  if (canShowDetails)
                    MouseRegion(
                      cursor: SystemMouseCursors.resizeLeftRight,
                      child: GestureDetector(
                        behavior: HitTestBehavior.opaque,
                        onHorizontalDragUpdate: (details) {
                          if (mounted) {
                            setState(() {
                              double w = detailsWidth ?? maxWidth;
                              w -= details.delta.dx;
                              // Check for min width
                              if (w < minWidth) {
                                w = minWidth;
                              }
                              // Check for max width
                              if (w > maxWidth) {
                                w = maxWidth;
                              }
                              detailsWidth = w;
                            });
                          }
                        },
                        child: const SizedBox(
                          width: 5,
                          height: double.infinity,
                          child: VerticalDivider(),
                        ),
                      ),
                    ),
                  if (canShowDetails)
                    SizedBox(
                      width: detailsWidth ?? maxWidth,
                      height: double.infinity,
                      child: showDetails
                          ? widget.detailBuilder(context, item, false)
                          : widget.emptyBuilder?.call(context) ??
                              const Center(
                                child: Text('Select a item to view details'),
                              ),
                    ),
                ],
              );
            },
          );
        },
      ),
    );
  }
}
```