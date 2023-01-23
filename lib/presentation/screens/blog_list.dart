import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:recase/recase.dart';

import '../../../data/source/module.dart';
import '../../data/source/files/files.dart';
import '../module.dart';
import '../widgets/file_card.dart';

class BlogList extends ConsumerStatefulWidget {
  const BlogList({Key? key}) : super(key: key);

  @override
  ConsumerState<BlogList> createState() => _BlogListState();
}

class _BlogListState extends ConsumerState<BlogList> {
  List<File> files = [];
  final controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final router = ref.read(routerProvider);
      final all = ref.watch(filesProvider).getPosts();
      if (router.location.contains('?tag=')) {
        if (mounted) {
          setState(() {
            final tag = router.location.split('?tag=')[1];
            files = all
                .where((element) => element.tags?.contains(tag) ?? false)
                .toList();
          });
        }
      } else {
        if (mounted) {
          setState(() {
            files = all;
          });
        }
      }
    });
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
                padding: const EdgeInsets.all(8),
                crossAxisCount: count,
                mainAxisSpacing: 4,
                crossAxisSpacing: 4,
                itemCount: files.length,
                itemBuilder: (context, index) {
                  final file = files[index];
                  return FileCard(
                    file: file,
                    link: '/blog/${file.name}',
                  );
                },
              );
            },
          ),
        ),
      ],
    );
  }
}
