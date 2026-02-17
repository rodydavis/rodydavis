---
title: Flutter Master-detail view
description: >
  Learn how to implement a responsive Master-Detail interface in Flutter that
  adapts to different screen sizes, leveraging multi-column layouts on larger
  screens and pushing to detail screens on mobile.
date: '2025-01-19 05:38:59.532Z'
draft: false
tags:
  - UI-UX
  - Dart
  - Flutter
summary: >-
  Build a Flutter master-detail interface for displaying lists and details,
  adapting to mobile, desktop, and web layouts with a customizable widget.
embedding: >-
  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
related:
  - host-flutter-rest-api.md
  - snippets/flutter-input-output-preview.md
  - flutter-cheat-sheet.md
  - snippets/flutter-stream-widget.md
  - flutter-one-click-release.md
---

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
