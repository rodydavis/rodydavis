import 'package:go_router/go_router.dart';

import 'screens/blog_post.dart';
import 'screens/home.dart';
import 'screens/blog_list.dart';
import 'screens/root.dart';

final router = GoRouter(
  routes: [
    ShellRoute(
      builder: (context, state, child) => RootPage(child: child),
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const Home(),
          routes: [
            GoRoute(
              path: 'blog',
              builder: (context, state) => const BlogList(),
              routes: [
                GoRoute(
                  path: ':id',
                  builder: (context, state) => BlogPost(
                    id: state.params['id']!,
                  ),
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  ],
);
