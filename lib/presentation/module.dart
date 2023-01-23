import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'router.dart';
import 'theme.dart';

final routerProvider = Provider<GoRouter>((ref) => router);

final themeProvider = ChangeNotifierProvider<Theme>((ref) => Theme());
