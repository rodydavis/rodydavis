import 'package:flutter/material.dart';

import '../widgets/markdown_view.dart';

class PrivacyPolicy extends StatelessWidget {
  const PrivacyPolicy({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MarkdownView(path: 'assets/data/static/privacy.md');
  }
}
