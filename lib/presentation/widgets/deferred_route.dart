import 'package:flutter/material.dart';

class DeferredRoute extends StatelessWidget {
  const DeferredRoute(this.future, this.buildChild, {super.key});
  final Future<dynamic> Function() future;
  final Widget Function() buildChild;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<dynamic>(
        future: future(),
        builder: ((context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return buildChild();
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        }));
  }
}
