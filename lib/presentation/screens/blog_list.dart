import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:go_router/go_router.dart';
import 'package:recase/recase.dart';

import '../../../data/source/module.dart';
import '../../data/source/files/files.dart';
import '../module.dart';
import '../widgets/post_card.dart';

class BlogList extends ConsumerStatefulWidget {
  const BlogList({Key? key}) : super(key: key);

  @override
  ConsumerState<BlogList> createState() => _BlogListState();
}

class _BlogListState extends ConsumerState<BlogList> {
  late List<File> files = ref.watch(filesProvider).getPosts();
  final controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    final router = ref.read(routerProvider);
    if (router.location.contains('?tag=')) {
      if (mounted) {
        setState(() {
          final tag = router.location.split('?tag=')[1];
          files = files
              .where((element) => element.tags?.contains(tag) ?? false)
              .toList();
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: controller,
          decoration: InputDecoration(
            hintText: 'Search',
            prefixIcon: const Icon(Icons.search),
            suffix: IconButton(
              icon: const Icon(Icons.clear),
              onPressed: () {
                controller.clear();
                if (mounted) {
                  setState(() {
                    files = ref.watch(filesProvider).getPosts();
                  });
                }
              },
            ),
          ),
          onChanged: (value) {
            if (mounted) {
              setState(() {
                files = ref.watch(filesProvider).getPosts();
                if (value.isNotEmpty) {
                  files = files.where((element) {
                    final target = value.toLowerCase().trim();
                    if ((element.title ?? element.name)
                        .titleCase
                        .toLowerCase()
                        .contains(target)) {
                      return true;
                    }
                    if (element.tags?.any(
                          (tag) => tag.toLowerCase().trim().contains(target),
                        ) ??
                        false) {
                      return true;
                    }
                    return false;
                  }).toList();
                }
              });
            }
          },
        ),
        Expanded(
          child: LayoutBuilder(
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
          ),
        ),
      ],
    );
  }
}
