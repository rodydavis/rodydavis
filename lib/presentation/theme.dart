import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Theme extends ChangeNotifier {
  Theme() {
    init();
  }

  SharedPreferences? _prefs;

  void init() async {
    _prefs = await SharedPreferences.getInstance();
    _themeMode = ThemeMode.values[_prefs!.getInt('themeMode') ?? 0];
    _sourceColor =
        Color(_prefs!.getInt('sourceColor') ?? Colors.blueGrey.value);
    notifyListeners();
  }

  Color _sourceColor = Colors.blueGrey;
  Color get sourceColor => _sourceColor;
  set sourceColor(Color value) {
    _sourceColor = value;
    notifyListeners();
  }

  ThemeMode _themeMode = ThemeMode.system;
  ThemeMode get themeMode => _themeMode;
  set themeMode(ThemeMode value) {
    _themeMode = value;
    notifyListeners();
  }
}
