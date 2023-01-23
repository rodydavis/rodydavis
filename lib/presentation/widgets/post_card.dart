import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:recase/recase.dart';

import '../../../data/source/files/files.dart';

class PostCard extends StatelessWidget {
  const PostCard({Key? key, required this.file}) : super(key: key);

  final File file;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Card(
      color: colors.surface,
      child: InkWell(
        onTap: () => context.go('/blog/${file.name}'),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
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
            Padding(
              padding: const EdgeInsets.all(8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    file.title ?? file.name.titleCase,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 4),
                  if (file.tags != null) ...[
                    Wrap(
                      spacing: 4,
                      children: [
                        for (final tag in file.tags!) ...[
                          Chip(
                            label: Text(tag),
                            backgroundColor: colors.tertiary,
                            labelStyle: TextStyle(
                              color: colors.onTertiary,
                            ),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 4),
                  ],
                ],
              ),
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
