import 'package:flutter/material.dart';

import '../widgets/markdown_view.dart';

class Talks extends StatelessWidget {
  const Talks({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MarkdownView(path: 'assets/data/static/talks.md');
  }
}
