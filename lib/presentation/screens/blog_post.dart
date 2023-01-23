import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../data/source/module.dart';
import '../extensions.dart';
import '../widgets/file_header.dart';
import '../widgets/footer.dart';
import '../widgets/markdown_view.dart';

class BlogPost extends ConsumerWidget {
  const BlogPost({Key? key, required this.id}) : super(key: key);

  final String id;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getPosts();
    final file = files.firstWhereOrNull((element) => element.name == id);
    final colors = Theme.of(context).colorScheme;
    if (file == null) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Post not found'),
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: () => context.$go('/blog'),
              child: const Text('Go back'),
            ),
          ],
        ),
      );
    }
    return Scrollbar(
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            FileHeader(file: file),
            const SizedBox(height: 8),
            MarkdownView(
              path: 'assets/data/blog/$id.md',
              shrinkWrap: true,
            ),
            const SizedBox(height: 8),
            const Footer(),
            const SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}
