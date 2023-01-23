import 'package:flutter/material.dart';

class InlinePainter extends CustomPainter {
  InlinePainter({
    required this.draw,
    super.repaint,
  });

  final void Function(Canvas canvas, Size size) draw;

  @override
  void paint(Canvas canvas, Size size) {
    draw(canvas, size);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}
