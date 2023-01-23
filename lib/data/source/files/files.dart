abstract class Files {
  List<File> getApps();
  List<File> getPosts();
}

abstract class File {
  String get name;
  String? get title;
  String? get date;
  String? get publishDate;
  List<String>? get tags;
  String? get image;
}
