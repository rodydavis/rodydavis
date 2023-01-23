import 'dart:io';

import 'package:rss_generator/rss_generator.dart';

import 'info.dart';

final inDir = Directory('./assets/data');
final outFile = File('./web/feed/feed.xml');

void main() {
  final now = DateTime.now();
  final builder = RssBuilder(
    channelName: "Rody's Blog",
    channelDescription:
        'Rody Davis personal blog with all my apps, examples and crazy explorations.',
    channelLink: 'https://rodydavis.com/',
    channelAtomLink: 'https://rodydavis.com/feed/feed.xml',
  ).copyright('Copyright ${now.year}').pubDate(DateTime.now()).ttl(60);

  final posts = Directory('${inDir.path}/blog').listSync().whereType<File>();

  for (final post in posts) {
    final info = getInfo(post, true);
    builder.addItem(
      RssItemBuilder(
        title: info['title'] as String,
        description: info['description'] as String,
        link: 'https://rodydavis.com/blog/${info['name']}',
      ),
    );
  }

  final doc = builder.build();
  final output = doc.toXmlString(pretty: true);
  if (!outFile.existsSync()) outFile.createSync(recursive: true);
  outFile.writeAsStringSync(output);
}
