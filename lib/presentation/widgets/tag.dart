import 'package:flutter/material.dart';

import '../extensions.dart';

class Tag extends StatelessWidget {
  const Tag({
    Key? key,
    required this.text,
    this.link = true,
  }) : super(key: key);

  final String text;
  final bool link;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return ActionChip(
      elevation: 0,
      label: Text(text),
      backgroundColor: colors.tertiary,
      labelStyle: TextStyle(color: colors.onTertiary),
      onPressed: link ? () => context.navigate('/blog?tag=$text') : () {},
    );
  }
}
