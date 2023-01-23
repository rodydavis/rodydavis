import 'dart:io';

Map<String, dynamic> getInfo(File file, [bool description = false]) {
// ---
// title: "Automate Flutter App Releases"
// date: 2019-03-15
// publishDate: 15 Mar 2019
// tags:
// - posts
// - flutter
// - apps
// - ci
// image: /assets/images/flutter_fastlane.jpg
// ---
  final name = file.path.split('/').last.split('.').first;
  final contents = file.readAsStringSync();
  final output = <String, dynamic>{};
  output['name'] = name;
  String frontMatter = '';
  if (contents.startsWith('---') && contents.contains('---', 3)) {
    frontMatter = contents.substring(3, contents.indexOf('---', 3));
  }
  if (frontMatter.isNotEmpty) {
    final lines = frontMatter.split('\n');
    for (final line in lines) {
      final parts = line.split(':');
      if (parts.length >= 2) {
        final key = parts[0].trim();
        final value = parts.sublist(1).join(':').trim();
        if (key == 'title') {
          output['title'] = removeQuotes(value);
        } else if (key == 'demo') {
          output['demo'] = value;
        } else if (key == 'apple') {
          output['apple'] = value;
        } else if (key == 'google') {
          output['google'] = value;
        } else if (key == 'date') {
          output['date'] = value;
        } else if (key == 'publishDate') {
          output['publishDate'] = value;
        } else if (key == 'tags') {
          // Get tag list
          final lines = frontMatter.split('\n');
          final tags = <String>[];
          final startIdx = lines.indexOf('tags:');
          for (var i = startIdx + 1; i < lines.length; i++) {
            final line = lines[i];
            if (line.startsWith('-')) {
              tags.add(line.substring(2).trim());
            } else {
              break;
            }
          }
          output['tags'] = tags;
        } else if (key == 'image') {
          output['image'] = value;
        }
      }
    }
  }

  if (description && frontMatter.isNotEmpty) {
    final desc = contents.replaceAll(frontMatter, '');
    // Max 500 characters
    output['description'] = desc.substring(0, 500);
  }

  return output;
}

String removeQuotes(String value) {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.substring(1, value.length - 1);
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.substring(1, value.length - 1);
  }
  return value;
}
