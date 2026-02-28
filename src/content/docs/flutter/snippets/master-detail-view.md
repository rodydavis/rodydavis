---
title: Flutter Master-detail view
date: '2025-01-19 05:38:59.532Z'
draft: false
tags:
  - flutter
  - dart
  - web
summary: >-
  Build a Flutter master-detail view for mobile, desktop, and web applications,
  handling list rendering and detail screen navigation with a customizable
  widget.
embedding: >-
  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
related:
  - videos/take-5/master-detail-scaffold-flutter.md
  - flutter/host-rest-api.md
  - flutter/native-cross-platform.md
  - flutter/getting-started.md
  - videos/take-5/responsive-design-flutter.md
---

# Flutter Master-detail view

When building mobile, desktop and web applications with Flutter often times you are faced with what to do with lists and the content when selected. Depending on the data you may have a list that renders another list before resolving to a detail view. On tablet or desktop this can be achieved with multi-column layouts.

> On mobile you will still need to push to the details screen since the space is constrained.

How to build a [Master-detail](https://en.wikipedia.org/wiki/Master%E2%80%93detail_interface) view with Flutter:

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

This widget will size itself after layout and try to size the list as small as possible with the details filling up the rest. This is important for later when we nest multiple of these to create progressively adapting layouts.
