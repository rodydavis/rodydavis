import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../module.dart';
import '../widgets/social_icon.dart';

class RootPage extends ConsumerWidget {
  const RootPage({
    Key? key,
    required this.child,
  }) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final theme = ref.watch(themeProvider);
    final location = GoRouter.of(context).location;
    final title = getTitle(location);
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          final showBottomBar = constraints.maxWidth < 600;
          return Scaffold(
            appBar: AppBar(
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
            body: Column(
              children: [
                Expanded(
                  child: showBottomBar
                      ? child
                      : Row(
                          children: [
                            NavigationRail(
                              labelType: NavigationRailLabelType.all,
                              destinations: destinations
                                  .map(
                                    (e) => NavigationRailDestination(
                                      icon: Icon(e.icon),
                                      label: Text(e.title),
                                    ),
                                  )
                                  .toList(),
                              selectedIndex: getIndex(location),
                              onDestinationSelected: (index) {
                                context.go(destinations[index].path);
                              },
                            ),
                            const VerticalDivider(thickness: 1, width: 1),
                            Expanded(child: child),
                          ],
                        ),
                ),
                // const Divider(thickness: 1, height: 1),
                // buildFooter(context),
              ],
            ),
            bottomNavigationBar: showBottomBar
                ? NavigationBar(
                    destinations: destinations
                        .map(
                          (e) => NavigationDestination(
                            icon: Icon(e.icon),
                            label: e.title,
                          ),
                        )
                        .toList(),
                    selectedIndex: getIndex(location),
                    onDestinationSelected: (index) {
                      context.go(destinations[index].path);
                    },
                  )
                : null,
          );
        },
      ),
    );
  }

  int getIndex(String location) {
    for (var i = 1; i < destinations.length; i++) {
      final path = destinations[i].path;
      if (location.startsWith(path)) {
        return i;
      }
    }
    return 0;
  }

  Widget buildFooter(BuildContext context) {
    return SizedBox(
      height: 40,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: const [
          SocialIcon(
            tooltip: 'Twitter Profile',
            url: 'https://twitter.com/rodydavis',
            path: 'assets/images/twitter.svg',
          ),
          SocialIcon(
            tooltip: 'Facebook Profile',
            url: 'https://facebook.com/rodydavisjr',
            path: 'assets/images/facebook.svg',
          ),
          SocialIcon(
            tooltip: 'LinkedIn Profile',
            url: 'https://www.linkedin.com/in/rodydavis',
            path: 'assets/images/linkedin.svg',
          ),
          SocialIcon(
            tooltip: 'YouTube Profile',
            url: 'https://www.youtube.com/rodydavis',
            path: 'assets/images/youtube.svg',
          ),
          SocialIcon(
            tooltip: 'Instagram Profile',
            url: 'https://www.instagram.com/rodydavisjr',
            path: 'assets/images/instagram.svg',
          ),
          SocialIcon(
            tooltip: 'GitHub Profile',
            url: 'https://www.github.com/rodydavis',
            path: 'assets/images/github.svg',
          ),
          // SocialIcon(
          //   tooltip: 'StackOverflow Profile',
          //   url: 'https://stackoverflow.com/users/1021946/rody-davis',
          //   path: 'assets/images/stackoverflow.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Medium Profile',
          //   url: 'https://medium.com/@rodydavis',
          //   path: 'assets/images/medium.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Dev.to Profile',
          //   url: 'https://dev.to/rodydavis',
          //   path: 'assets/images/dev.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Dart Pub Profile',
          //   url: 'https://pub.dev/publishers/rodydavis.com/packages',
          //   path: 'assets/images/dart.svg',
          // ),
          SocialIcon(
            tooltip: 'TikTok Profile',
            url: 'https://www.tiktok.com/@rodydavisjr',
            path: 'assets/images/tiktok.svg',
          ),
        ],
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

class Destination {
  const Destination({
    required this.path,
    required this.title,
    required this.icon,
  });

  final String path;
  final String title;
  final IconData icon;
}

List<Destination> get destinations => const [
      Destination(
        path: '/',
        title: 'Home',
        icon: Icons.home,
      ),
      Destination(
        path: '/apps',
        title: 'Apps',
        icon: Icons.apps,
      ),
      Destination(
        path: '/blog',
        title: 'Blog',
        icon: Icons.article,
      ),
      Destination(
        path: '/talks',
        title: 'Talks',
        icon: Icons.mic,
      ),
      Destination(
        path: '/about',
        title: 'About',
        icon: Icons.person,
      ),
    ];
