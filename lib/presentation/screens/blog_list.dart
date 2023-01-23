import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

import '../../data/source/module.dart';
import '../widgets/post_card.dart';

class BlogList extends ConsumerWidget {
  const BlogList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getPosts();
    return LayoutBuilder(
      builder: (context, constraints) {
        const itemWidth = 400;
        final count = (constraints.maxWidth / itemWidth).floor();
        return MasonryGridView.count(
          crossAxisCount: count,
          mainAxisSpacing: 4,
          crossAxisSpacing: 4,
          itemCount: files.length,
          itemBuilder: (context, index) => PostCard(file: files[index]),
        );
      },
    );
  }
}
