import 'package:go_router/go_router.dart';

import 'screens/about.dart' deferred as about;
import 'screens/app_details.dart' deferred as app_details;
import 'screens/apps_list.dart' deferred as apps_list;
import 'screens/blog_post.dart' deferred as blog_post;
import 'screens/home.dart' deferred as home;
import 'screens/blog_list.dart' deferred as blog_list;
import 'screens/privacy.dart' deferred as privacy;
import 'screens/root.dart' deferred as root;
import 'screens/talks.dart' deferred as talks;
import 'widgets/deferred_route.dart';

final router = GoRouter(
  routes: [
    ShellRoute(
      builder: (context, state, child) => DeferredRoute(
        root.loadLibrary,
        () => root.RootPage(child: child),
      ),
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => DeferredRoute(
            home.loadLibrary,
            () => home.Home(),
          ),
          routes: [
            GoRoute(
              path: 'privacy-policy',
              builder: (context, state) => DeferredRoute(
                privacy.loadLibrary,
                () => privacy.PrivacyPolicy(),
              ),
            ),
            GoRoute(
              path: 'about',
              builder: (context, state) => DeferredRoute(
                about.loadLibrary,
                () => about.About(),
              ),
            ),
            GoRoute(
              path: 'talks',
              builder: (context, state) => DeferredRoute(
                talks.loadLibrary,
                () => talks.Talks(),
              ),
            ),
            GoRoute(
              path: 'blog',
              builder: (context, state) => DeferredRoute(
                blog_list.loadLibrary,
                () => blog_list.BlogList(),
              ),
              routes: [
                GoRoute(
                  path: ':id',
                  builder: (context, state) => DeferredRoute(
                    blog_post.loadLibrary,
                    () => blog_post.BlogPost(
                      id: state.params['id']!,
                    ),
                  ),
                ),
              ],
            ),
            GoRoute(
              path: 'apps',
              builder: (context, state) => DeferredRoute(
                apps_list.loadLibrary,
                () => apps_list.AppList(),
              ),
              routes: [
                GoRoute(
                  path: ':id',
                  builder: (context, state) => DeferredRoute(
                    app_details.loadLibrary,
                    () => app_details.AppDetails(
                      id: state.params['id']!,
                    ),
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
