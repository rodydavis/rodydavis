import 'files.dart';
import 'files.g.dart';

class FilesImpl extends Files {
  @override
  List<File> getApps() {
    final items = files['apps'] as List;
    return items
        .map((e) => e as Map<String, dynamic>)
        .map(FileImpl.fromJson)
        .toList();
  }

  @override
  List<File> getPosts() {
    final items = files['posts'] as List;
    return items
        .map((e) => e as Map<String, dynamic>)
        .map(FileImpl.fromJson)
        .toList();
  }
}

class FileImpl extends File {
  FileImpl({
    required this.name,
    this.title,
    this.date,
    this.publishDate,
    this.tags,
    this.image,
  });

  factory FileImpl.fromJson(Map<String, dynamic> json) => FileImpl(
        name: json['name'] as String,
        title: json['title'] as String?,
        date: json['date'] as String?,
        publishDate: json['publishDate'] as String?,
        tags: (json['tags'] as List<dynamic>? ?? []).cast<String>(),
        image: json['image'] as String?,
      );

  @override
  final String name;
  @override
  final String? title;
  @override
  final String? date;
  @override
  final String? publishDate;
  @override
  final List<String>? tags;
  @override
  final String? image;
}
