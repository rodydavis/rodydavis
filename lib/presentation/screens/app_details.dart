import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../data/source/module.dart';
import '../widgets/markdown_view.dart';

class AppDetails extends ConsumerWidget {
  const AppDetails({Key? key, required this.id}) : super(key: key);

  final String id;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getApps();
    final file = files.firstWhereOrNull((element) => element.name == id);
    if (file == null) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('App not found'),
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: () => context.go('/apps'),
              child: const Text('Go back'),
            ),
          ],
        ),
      );
    }
    return MarkdownView(path: 'assets/data/apps/$id.md');
  }
}
