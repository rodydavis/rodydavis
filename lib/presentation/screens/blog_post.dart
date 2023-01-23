import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../data/source/module.dart';

class BlogPost extends ConsumerWidget {
  const BlogPost({Key? key, required this.id}) : super(key: key);

  final String id;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getPosts();
    final file = files.firstWhereOrNull((element) => element.name == id);
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
    return FutureBuilder<String?>(
      future: rootBundle.loadString('assets/data/blog/$id.md'),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          String content = snapshot.data!;
          // Remove front matter
          content = content.split('---').last;
          return Markdown(
            data: content,
            selectable: true,
            onTapLink: (text, href, title) {
              final url = Uri.parse(href!);
              if (url.isScheme('http') || url.isScheme('https')) {
                launchUrl(url, mode: LaunchMode.externalApplication);
              } else {
                context.go(href);
              }
            },
          );
        }
        return const Center(child: CircularProgressIndicator());
      },
    );
  }
}
