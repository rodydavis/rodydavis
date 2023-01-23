import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seo/seo.dart';

import 'firebase_options.dart';
import 'presentation/module.dart';

Future<void> main() async {
  usePathUrlStrategy();
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    final theme = ref.watch(themeProvider);
    return SeoController(
      enabled: true,
      tree: SemanticsTree(),
      child: MaterialApp.router(
        debugShowCheckedModeBanner: false,
        title: 'Rody Davis',
        theme: ThemeData.light(useMaterial3: true).copyWith(
          colorScheme: ColorScheme.fromSeed(
            seedColor: theme.sourceColor,
            brightness: Brightness.light,
          ),
          textTheme: GoogleFonts.spaceMonoTextTheme(),
        ),
        darkTheme: ThemeData.dark(useMaterial3: true).copyWith(
          colorScheme: ColorScheme.fromSeed(
            seedColor: theme.sourceColor,
            brightness: Brightness.dark,
          ),
          textTheme: GoogleFonts.spaceMonoTextTheme(),
        ),
        themeMode: theme.themeMode,
        routeInformationParser: router.routeInformationParser,
        routeInformationProvider: router.routeInformationProvider,
        routerDelegate: router.routerDelegate,
      ),
    );
  }
}
