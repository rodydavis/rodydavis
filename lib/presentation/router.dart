import 'package:go_router/go_router.dart';

import 'screens/about.dart';
import 'screens/app_details.dart';
import 'screens/apps_list.dart';
import 'screens/blog_post.dart';
import 'screens/home.dart';
import 'screens/blog_list.dart';
import 'screens/privacy.dart';
import 'screens/root.dart';
import 'screens/talks.dart';

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
              path: 'privacy-policy',
              builder: (context, state) => const PrivacyPolicy(),
            ),
            GoRoute(
              path: 'about',
              builder: (context, state) => const About(),
            ),
            GoRoute(
              path: 'talks',
              builder: (context, state) => const Talks(),
            ),
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
            GoRoute(
              path: 'apps',
              builder: (context, state) => const AppList(),
              routes: [
                GoRoute(
                  path: ':id',
                  builder: (context, state) => AppDetails(
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
