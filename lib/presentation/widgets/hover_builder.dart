import 'package:flutter/material.dart';

class HoverBuilder extends StatefulWidget {
  const HoverBuilder({super.key, required this.builder});
  final Widget Function(BuildContext context, bool hover) builder;

  @override
  State<HoverBuilder> createState() => _HoverBuilderState();
}

class _HoverBuilderState extends State<HoverBuilder> {
  bool hover = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => hover = true),
      onExit: (_) => setState(() => hover = false),
      child: widget.builder(context, hover),
    );
  }
}
