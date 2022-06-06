---
title: "Building a Master / Detail list with Flutter"
date: 2022-04-17
publishDate: 17 Apr 2022
tags:
- posts
- flutter
- layout
- design
- ui
image: /img/flutter/first.png
---

In this article we will go over how to build a master / detail list with Flutter.

## Behind the widget

When building mobile, desktop and web applications with Flutter often times you are faced with what to do with lists and the content when selected. Depending on the data you may have a list that renders another list before resolving to a detail view. On tablet or desktop this can be achieved with multi-column layouts.

// TODO: Images of multi column

On mobile you will still need to push to the details screen since the space is constrained.

// TODO: Mobile demo

## Getting started

First we need to create our Flutter project and that is possible with the following command:

```bash
flutter create flutter_master_detail_example
```

After the project is created you can open it in your favorite IDE.

## Master Detail Widget

Create a new file at `/lib/widgets/master_detail.dart` and add the following:

```dart
import 'package:flutter/material.dart';

class MasterDetail<T> extends StatefulWidget {
  const MasterDetail({
    Key? key,
    required this.listBuilder,
    required this.detailBuilder,
    required this.onPush,
    this.emptyBuilder,
    this.width = 350,
  }) : super(key: key);

  final Widget Function(BuildContext, ValueChanged<T?>, T?) listBuilder;
  final Widget Function(BuildContext, T, bool) detailBuilder;
  final void Function(BuildContext, T) onPush;
  final WidgetBuilder? emptyBuilder;
  final double width;

  @override
  State<MasterDetail<T>> createState() => _MasterDetailState<T>();
}

class _MasterDetailState<T> extends State<MasterDetail<T>> {
  final selected = ValueNotifier<T?>(null);
  double? detailsWidth;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, dimens) {
          double minWidth = widget.width;
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
              final canShowDetails = dimens.maxWidth > widget.width * 2;
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

## Using the widget
