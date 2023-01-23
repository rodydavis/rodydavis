import 'package:flutter/material.dart';
import 'package:reading_time/reading_time.dart';

import '../../data/source/files/files.dart';
import 'tag.dart';

class FileHeader extends StatelessWidget {
  const FileHeader({
    Key? key,
    required this.file,
    this.link = true,
  }) : super(key: key);

  final File file;
  final bool link;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Column(
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
              for (final tag in file.tags!) Tag(text: tag, link: link),
            ],
          ),
          const SizedBox(height: 8),
        ],
      ],
    );
  }

  String assetImg(String url) {
    if (url.startsWith('/')) {
      return url.substring(1);
    } else {
      return url;
    }
  }

  String time(String content) {
    final reader = readingTime(content);
    return reader.msg;
  }
}
