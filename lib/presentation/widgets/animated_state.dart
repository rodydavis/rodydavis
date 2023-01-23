import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

abstract class AnimatedState<T extends StatefulWidget> extends State<T>
    with SingleTickerProviderStateMixin {
  Duration elapsed = Duration.zero;
  Duration delta = Duration.zero;
  late final Ticker ticker;
  BoxConstraints constraints = const BoxConstraints.tightFor();

  @override
  void initState() {
    super.initState();
    ticker = createTicker((elapsed) {
      delta = elapsed - this.elapsed;
      this.elapsed = elapsed;
      update(elapsed);
      if (mounted) setState(() {});
    });
    ticker.start();
    WidgetsBinding.instance.addPostFrameCallback(start);
  }

  @override
  void dispose() {
    ticker.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, dimens) {
      constraints = dimens;
      return paint(context, dimens);
    });
  }

  void start(Duration time) {}

  void update(Duration time);

  Widget paint(BuildContext context, BoxConstraints constraints);
}

