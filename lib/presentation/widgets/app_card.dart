import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:recase/recase.dart';
import 'package:seo/seo.dart';

import '../../../data/source/files/files.dart';
import 'tag.dart';

class AppCard extends StatelessWidget {
  const AppCard({Key? key, required this.file}) : super(key: key);

  final File file;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Card(
      color: colors.surface,
      child: InkWell(
        onTap: () => context.push('/apps/${file.name}'),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            if (file.image != null) ...[
              AspectRatio(
                aspectRatio: 16 / 9,
                child: Image.asset(
                  assetImg(file.image!),
                  fit: BoxFit.contain,
                  height: 300,
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
                    style: Theme.of(context).textTheme.titleLarge!.copyWith(
                          color: colors.onSurface,
                        ),
                  ),
                  const SizedBox(height: 4),
                  if (file.tags != null) ...[
                    Wrap(
                      spacing: 4,
                      children: [
                        for (final tag in file.tags!) ...[
                          Tag(text: tag, link: false),
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
