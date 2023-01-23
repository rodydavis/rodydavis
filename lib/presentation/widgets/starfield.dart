import 'dart:math';

import 'package:flutter/material.dart';

import 'animated_state.dart';
import 'inline_painter.dart';

class StarField extends StatefulWidget {
  const StarField({Key? key}) : super(key: key);

  @override
  State<StarField> createState() => _StarFieldState();
}

class _StarFieldState extends AnimatedState<StarField> {
  late final stars = createStars(constraints.biggest);

  @override
  Widget paint(BuildContext context, BoxConstraints constraints) {
    return Container(
      color: Colors.black,
      child: CustomPaint(
        painter: InlinePainter(
          draw: (canvas, size) {
            // Draw animated star field
            for (final star in stars) {
              final paint = Paint()..color = Colors.white;
              final offset = Offset(star.x, star.y);
              canvas.drawCircle(offset, star.radius, paint);
            }
          },
        ),
      ),
    );
  }

  @override
  void update(Duration time) {
    final center = constraints.biggest.center(Offset.zero);
    // Update star positions from center out
    for (final star in stars) {
      final offset = Offset(star.x, star.y) - center;
      final angle = atan2(offset.dy, offset.dx);
      final distance = offset.distance;
      final speed = star.speed * delta.inMilliseconds / 1000;
      final newDistance = distance + speed;
      star.x = center.dx + cos(angle) * newDistance;
      star.y = center.dy + sin(angle) * newDistance;
    }
    // Remove stars that have left the screen
    stars.removeWhere((star) {
      final offset = Offset(star.x, star.y) - center;
      final distance = offset.distance;
      return distance > constraints.biggest.longestSide;
    });
    // Add new stars to replace removed stars
    while (stars.length < 500) {
      final x = Random().nextDouble() * constraints.biggest.width;
      final y = Random().nextDouble() * constraints.biggest.height;
      final radius = Random().nextDouble() * 2;
      final speed = Random().nextDouble() * 10;
      stars.add(Star(x, y, radius, speed));
    }
  }
}

class Star {
  Star(this.x, this.y, this.radius, this.speed);
  double x, y;
  final double radius;
  final double speed;
}

List<Star> createStars(Size size) {
  final stars = <Star>[];
  for (var i = 0; i < 500; i++) {
    final x = Random().nextDouble() * size.width;
    final y = Random().nextDouble() * size.height;
    final radius = Random().nextDouble() * 2;
    final speed = Random().nextDouble() * 10;
    stars.add(Star(x, y, radius, speed));
  }
  return stars;
}
