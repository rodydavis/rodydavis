import 'package:flutter/material.dart';

import '../widgets/markdown_view.dart';

class About extends StatelessWidget {
  const About({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MarkdownView(path: 'assets/data/static/about.md');
  }
}
