import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:seo/seo.dart';

import '../../../data/source/module.dart';
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
              onPressed: () => context.go('/blog'),
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
            const SizedBox(height: 8),
            if (file.title != null) ...[
              Padding(
                padding: const EdgeInsets.all(20),
                child: Text(
                  file.title!,
                  style: Theme.of(context).textTheme.displayMedium!.copyWith(
                        color: colors.onSurface,
                      ),
                ),
              ),
              const SizedBox(height: 8),
            ],
            if (file.image != null) ...[
              Hero(
                tag: ValueKey(file.image!),
                child: AspectRatio(
                  aspectRatio: 16 / 9,
                  child: Image.asset(
                    assetImg(file.image!),
                    fit: BoxFit.contain,
                    height: 300,
                  ),
                ),
              ),
              const SizedBox(height: 8),
            ],
            if (file.tags != null) ...[
              Wrap(
                spacing: 4,
                children: [
                  for (final tag in file.tags!)
                    ActionChip(
                      label: Text(tag),
                      onPressed: () => context.go('/blog?tag=$tag'),
                      backgroundColor: colors.tertiary,
                      labelStyle: TextStyle(
                        color: colors.onTertiary,
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 8),
            ],
            const SizedBox(height: 8),
            MarkdownView(
              path: 'assets/data/blog/$id.md',
              shrinkWrap: true,
            ),
          ],
        ),
      ),
    );
  }

  String assetImg(String url) {
    if (url.startsWith('/')) {
      return url.substring(1);
    } else {
      return url;
    }
  }
}
