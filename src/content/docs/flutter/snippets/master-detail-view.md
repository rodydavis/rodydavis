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
  5zi3PK+Xpjw0n/M8RE10vMug2rxK0yA72uEvvN7lgr1LHzo6C3/GvaW9wby1/pY4ueE3PZYKqjx3L3c9dlF0u0mdoD2qthu7GNH2PDBMpjweN/w7/TMDvFQBdzvuz0U9G0xDOiodrDwGhFa8bTvtvLjJiL0cDDU+G7kuvS+G8jwUy209mnwzvHxEzDxCfCA99RCNu+sB87o8MSu9zTojPTQTjDyel0o92dDNu7mrFz1m2ZO8NUMqvMmwirwG8oy96GhVPbjpDz3pYz69IsQVvCU8YT2BP3w7K041PCP3ND2xvyy9EHf1O05EvzvQ0ao8IVjVPP5+sTwfhAA75IHIO2L4iLwXY+A8MzLIPBDn4TzTor68TP18PcrhEzyF7pI7uyu7vDUmxDwWMIE8H7m1vOs7n72PwvU86e3PPH0GFL2uDgC9g/fVvIF2h7ybIGq8TDh0PKQ4xzzHZdy8OPWBPL+7Fb0n9tA7dXedPJZab7wUdea7fVswvF2j5bsqcog6cjPcuoUmCTyLT4E8zeqdvMZPY7yF7pI64EmLvfjEmj0CYac8sANnvF2MAbxeKyE8f1CXPPje3zwrvoE94e2JvohmHjv+0Xc9VIuIu1sJfT6lo5w8TTFHvQR2dT1OtKs9pG7nPOxQ7T0tzwO93VuROojY4LwDJQU9URGHPfwApDzttgu9MuPtvOCiEz0ZWEc8Rbz1vAoxF70xeJg7OdMEvbLZkbxZGKK85UecPbezLzvGT2M9hXp6vCwsODx07+E7Ef3au6DAuzzg1t28wAUZvcoXNDq0Vck8at0GvUW4CT335cy8Xwg5vRqGjzvPayy94UJePRKDAL2rkog9NzemPCtONbyfVeY8sFhDvIkK1Txiga86JLa7PDsAYr3dXtK7P2+qvD83tDzrqRW9cD+gPfmELL27tQw9KNL9u4bJFD1Q/QO8EyyOPEFHKz2gips8dji6O/HVjruBeUi7w0ZZvVuyqjyMFbW8ZTQyvcxjTbvTaLK9ndkuveF5qToUQZy8/9AMPVNCsLveHoS4JLgRvdxmKj0dIu68l8XEu7wFEj1gx/+8go9BvZdULb13v6o9DJHTPP8laT3vdOc8Xyf1vDYe7LzTZhy8LSEfPf8/Tj2+Tmq9ngjivCxkLrsDCJ+8wlCHvAiucj0k8h09t0ZEvY+M1btUHt28tRs9PdB/jzyduQc8CisVvavq5TyxNDA9R6xFvMSxrrzJOlw9FVI+PSP43zy/02S9SdpNPaMG0zrUmXu9JSERvOxsyDy5p6u8zTw5vAr0Cbv9+Ta6ExCTO2WOZT2Fd5m9zO90PT7o2Tsh5Dy9Gt1Bve1/AD3WHCA9OEnzvJm3arzmQA89oRCBvNkjFD38qfE7WBwOPUm70Tz4+8U76q7sO4Wwmryb5bI8qJCrvMe44rvDEaQ8qORcvVplpjxDIJe6NXlKvHJrUjwg79W8dR+AvO2fJzxoA7A8YK+wudJRjjx5Otc8IohzOtAo3TyGds48SUmPvEpDDb2o/da86Zjzu3WsEr32lQc9deUzPQGhdT0tmDg9LsZAvdsXEL1kd4E73IAPvYlccD0wTKa8DKxjPdgNGz1pcrE9Zr/uOxlxAT3Akou9SplUOhH8bz3B4jA9DOavvOyEFzpPybm8CW25PNMXAr2sdPe8ol0Fu8404bwPDva7lBeZOqiPQLw9uSa7NE1YPLq7Dr11qye9LCw4vJT1Gzz35je9X+w9O5Er9TyW6Rc7llxFPODzQz2EmqE8Qs9mvV/svbyq1Re9P+ABvUSJFjspI648hLkdvUPKzzw6WlW83BBjvF96e7y3fOS9LlZUvPPK9TvEzH69FhfHPJfJML2W6Ze82H3HuhYYkr0K16M8NPTPPA0YJD26oD48gqh7OcLexDona9Q8/872PGQ+gL2+wKw8UWyFvDtTaLsSTaA7zm+YvK1LjTob1Wm8I9g4PP1KZzyMLBk8cFsbveMWc7wTueA8pdhRPGA7mLzkwCu8E4FqPKOuNbxpN/q8DFeHPAA6zDzeHgQ8DY4SvOQRXDtHBOO5KESAPRiXqrttOZc9cefCOz4FwLvNsNG8P3LrvBEcdz47/gu9Gmv/vOlEgrxOKwU6sWmlOhMOvbwUXgI8CiyAvMzQOL1sQS89S+pEPSelILzGv8884GZxPB0FCD3T2cm656kOvW+f1bw4agU9X0YxPENzHT2Q+YA7LbDHu63BezzqQoy9nWOAvbSOqrsgs7M6ozqdvOuoar3on2A8le6uPCQPBD28AtG8xmkIvXnm5bwxs088SDQBPQ98jDzMs5I8VWvhPOifID0ldBe7ppiDug0YpDx9dRW9Spd+vKMEfTzjM9k8U1gpOiaN0bz5or08rMUnuD0LAj1Y/2c8jfEhvfD3Cz1LlJ09u7l4vMaIxLyCOuU8ECRvPHqpWDwyycg84L6OPBYV8bxA2n855j8kvBssHLwFF6s85EuoOlIP0bxivCY94A5UvOwvO7yILxM9U3hQu6vPFT0ddIm8AYX6PHaLAL2x3FK9fo4PPCeEjjybO3o8NQleO1x1nbwOEEw80CVcPTLlw7xXfAO9wvsqPM1Znzt+xZq82EroO0w3Cb2KPwo8WfnlvImWvDxl+xC9ELDWvHXKIzyY3RO8ggEEvLO3FLySJIi8aCFBva2lgLyAuCs8xVZQPFbwWzu1wnS8QZ7dPM0dfTzxEbE8vqIbvtWwX7z43t87NxnVvHpsy7i1boM8xy+8O7aCZj3PaoG8308NvJ8+gjzu6Sq9TrMAvXvcNzyuga07pUqUPE5CKb0Ec/S6Ic5DvNCbCryC5Yi8yY6NO1J/PTycU0k6ViqoPNAJIbydnKG8EOgMvRKFlrxlNki7uYuwPKzgNzwDQYC71SKiuyiBTbwxtaW8kbUGPKZfYr1wlpK8Ytf2PJ7vJzzh8W08JAotPS0nIbxDqT08g98GO2iwKTy9AEu+uU8OPMeDrbyRYoA7kfP+vGa/brxvuA+8AcAxPJksbry6g1i9WhKguzdtRrz3x/u87GcxvGCwW72HU+Y7ar91PXoAiztVayE9avpsuoQQkD2VRky8bAn5upQw07u3XlM8qyCGPL1yvbyxpQe9v+40PbwCUTzDRwS9Pe9GvKkRerz0+ag8tw0jukktlDzXFbM8VTRWvFEWfj10RSm9c2n8PCRhXzxiTtA81Cp6vLyxoLsAxx68DRp6PEIGMj2dunI8uHYiPHk+g7yg+/K8+N/KvAIpMbws8QC8XD6SO1lOAj1S1Bk8zqW4PK2F2TwyItG83zOSPAOUBj0bKsY8qYM8PYlhh7y1p2Q8VRYFvCBCHD1mTME7xAhhPHpRuzzriwQ8S8wzPEUNJr2BIhY9Me6GPLoufDyKHvg6k/yIPOs7Pz1Q+6088WWiO66Brbs89ci812kkPAyUlLw/qwy9vk5qvOyHWLomjdG7B7GzPLwjIz1qwQu8KuMfvbYvILw66ui8WvW5u7whjbwCgU679gkgvH6K4zvzAJa8FviKOwWm07tWm3889IuSPL+A3jwfLyS8uW81PP3BAL2dunK8tAHYOIxnUDwcQhW8vma5Oy+Knry+EV08NskPPa5mHbwVG3M8RdUvvPNXyLz7lrm8KGKRPFYtabtR9pa87dPxOxU2A70+P4w8CakbvcO4Gz3zc0M9qtOBvOvF0LwaqIy8GVSbPL4wGTy+hAo9LnUQPBGnEzyxbGa75UYRPDgVKbp9Bz89/wUCu+317jyHpuw8aauSPIMwdz3cEjk91nE8vTXPUb3ToCi94KKTPK2lALv438o8HuKfvPCFSbyUvSU7x2XcO18mCrwKgke8T+rLPHr83jv8/He6s+00vAgii7vFqda70931PHWUgzzgL+a8HM0RPCPAaTyqRcS8dHnzPPFlojomyEg9wY86PuVeID0eM9C8Z2U7vbjkOLx79ty8zCUVPcl0aLw/4he93NhsPLCQObwmOWC96WUUPeRO6TyQawO98StWuoQOujt0JFe9TdlpPMug2juufxc9bk6lPFgBPj3Bq+U7QN2AvSFZwLvt1109RdWvvG+4D7tU/co8vXOovJaVJj0jEoW8+Z4Ru9Ul47vI60E8
related:
  - flutter/snippets/input-output-preview.md
  - flutter/snippets/stream-widget.md
  - flutter/snippets/infinite-canvas.md
  - flutter/multi-touch-canvas.md
  - flutter/snippets/markdown-view-material-3.md
last_updated_metadata: '2026-11-01T02:28:44.025Z'
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
