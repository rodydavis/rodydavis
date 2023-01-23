import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

import '../../../data/source/module.dart';
import '../widgets/file_card.dart';

class AppList extends ConsumerWidget {
  const AppList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getApps();
    return LayoutBuilder(
      builder: (context, constraints) {
        const itemWidth = 250;
        final count = (constraints.maxWidth / itemWidth).floor();
        return MasonryGridView.count(
          padding: const EdgeInsets.all(8),
          crossAxisCount: count,
          mainAxisSpacing: 4,
          crossAxisSpacing: 4,
          itemCount: files.length,
          itemBuilder: (context, index) {
            final file = files[index];
            return FileCard(
              file: file,
              link: '/apps/${file.name}',
            );
          },
        );
      },
    );
  }
}
