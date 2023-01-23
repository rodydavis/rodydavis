import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../module.dart';

class RootPage extends ConsumerWidget {
  const RootPage({
    Key? key,
    required this.child,
  }) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final theme = ref.watch(themeProvider);
    final title = getTitle(GoRouter.of(context).location);
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          return CustomScrollView(
            slivers: [
              SliverAppBar(
                floating: true,
                pinned: true,
                title: InkWell(
                  mouseCursor: SystemMouseCursors.click,
                  onTap: () => context.go('/'),
                  child: Text.rich(
                    TextSpan(
                      children: [
                        const TextSpan(text: 'Rody Davis'),
                        if (title.isNotEmpty) ...[
                          const TextSpan(text: ' - '),
                          TextSpan(text: title),
                        ],
                      ],
                    ),
                  ),
                ),
                actions: [
                  if (constraints.maxWidth > 600) ...[
                    TextButton(
                      onPressed: () => context.go('/apps'),
                      child: const Text('Apps'),
                    ),
                    TextButton(
                      onPressed: () => context.go('/blog'),
                      child: const Text('Blog'),
                    ),
                    TextButton(
                      onPressed: () => context.go('/talks'),
                      child: const Text('Talks'),
                    ),
                    TextButton(
                      onPressed: () => context.go('/about'),
                      child: const Text('About'),
                    ),
                  ],
                  IconButton(
                    icon: theme.themeMode == ThemeMode.dark
                        ? const Icon(Icons.light_mode)
                        : const Icon(Icons.dark_mode),
                    onPressed: () {
                      if (theme.themeMode == ThemeMode.dark) {
                        theme.themeMode = ThemeMode.light;
                      } else {
                        theme.themeMode = ThemeMode.dark;
                      }
                    },
                  ),
                ],
              ),
              SliverFillRemaining(child: child),
            ],
          );
        },
      ),
    );
  }

  String getTitle(String location) {
    if (location.startsWith('/apps')) return 'Apps';
    if (location.startsWith('/blog')) return 'Blog';
    if (location.startsWith('/talks')) return 'Talks';
    if (location.startsWith('/about')) return 'About';
    return '';
  }
}
