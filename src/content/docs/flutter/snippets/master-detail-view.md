---
title: Flutter Master-detail view
date: '2025-01-19 05:38:59.532Z'
draft: false
tags:
  - flutter
  - dart
  - web
summary: >-
  Implement adaptive Master-detail views in Flutter using a reusable widget that
  handles multi-column desktop layouts while providing necessary push navigation
  for constrained mobile screens.
embedding: >-
  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
related:
  - videos/take-5/master-detail-scaffold-flutter.mdx
  - videos/take-5/responsive-design-flutter.mdx
  - flutter/snippets/input-output-preview.md
  - videos/take-5/adaptive-dialogs-flutter.mdx
  - videos/flutter/material-3-from-design-to-deployment.mdx
last_updated_metadata: '2026-05-23T00:12:08.474Z'
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
