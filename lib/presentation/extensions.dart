import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:recase/recase.dart';

extension BuildContextUtils on BuildContext {
  void navigate(String url) {
    go(url);
    _log(url);
  }

  void navigatePush(String url) {
    push(url);
    _log(url, true);
  }
}

void _log(String route, [bool push = false]) {
  final instance = FirebaseAnalytics.instance;
  instance.logEvent(name: 'navigate', parameters: {
    'route': route,
    'push': push,
  });
  final name = route.split('?').first.split('/').join('_').titleCase;
  instance.setCurrentScreen(screenName: name);
  debugPrint('Navigated to $route - $name');
}
