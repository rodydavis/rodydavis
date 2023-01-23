import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RootPage extends StatelessWidget {
  const RootPage({
    Key? key,
    required this.child,
  }) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final title = getTitle(GoRouter.of(context).location);
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          return CustomScrollView(
            slivers: [
              SliverAppBar(
                floating: true,
                pinned: true,
                title: GestureDetector(
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
                  onTap: () => context.go('/'),
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
