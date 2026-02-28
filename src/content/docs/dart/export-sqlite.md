---
title: How to Export SQLite Tables to CREATE Statements
date: '2025-01-18 20:43:35.986Z'
draft: false
tags:
  - flutter
  - html
  - sqlite
  - dart
  - github
summary: >-
  Export SQLite database schema to CREATE statements using Dart, SQLite3, and
  Mustache templating for code generation.
embedding: >-
  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
related:
  - lit/codemirror-dynamic-theme.md
  - sqlite/no-sql.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.md
  - backend/pocketbase-webrtc.md
  - sqlite/key-value.md
---

# How to Export SQLite Tables to CREATE Statements

In this article I will show you how to export all the tables and indexes in a [SQLite](https://www.sqlite.org/index.html) database to CREATE statements at runtime.

Getting started 
----------------

Start by creating a new directory and [Flutter](https://flutter.dev/) project:

```markdown
mkdir sqlite_introspect
cd sqlite_introspect
flutter create .
flutter pub add sqlite3 mustache_template
```

This will add the `sqlite3` package which uses FFI to call the native executable and mustache that we will use for templates later.

Creating the database 
----------------------

Creating the database can be done either in memory or based on a local file. For this example we will use in memory:

```dart
final Database db = sqlite3.openInMemory();
```

Don't forget to dispose of the database after use:

```dart
db.dispose();
```

Defining the template 
----------------------

Since we will be using [Mustache](https://mustache.github.io/) we can define the variables that we will pass to the template as JSON.

Create a `TableInfo` class that will store the fields and indexes:

```dart
class TableInfo {
  final String name;
  final List<Map<String, dynamic>> fields;
  final List<Map<String, dynamic>> indexes;

  TableInfo({
    required this.name,
    required this.fields,
    required this.indexes,
  });

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'fields': [
        for (var i = 0; i < fields.length; i++)
          {
            'index': i,
            'table': name,
            'isLast': i == fields.length - 1,
            ...fields[i],
          },
      ],
      'indexes': [
        for (var i = 0; i < indexes.length; i++)
          {
            'index': i,
            'table': name,
            'isLast': i == indexes.length - 1,
            ...indexes[i],
          },
      ],
    };
  }
}
```

Now we can create the Mustache template used to build up the CREATE statements:

```dart
const template = '''
{{#tables}}
CREATE TABLE {{name}} (
  {{#fields}}
  {{name}} {{#type}} {{.}}{{/type}}{{#notnull}} NOT NULL{{/notnull}}{{#pk}} PRIMARY KEY{{/pk}}{{#dflt_value}} DEFAULT {{.}}{{/dflt_value}}{{^isLast}},{{/isLast}}
  {{/fields}}
);
{{#indexes}}
CREATE {{#unique}} UNIQUE{{/unique}} {{name}}
ON {{table}}({{#values}} {{name}} {{/values}}{{^isLast}},{{/isLast}});
{{/indexes}}
{{/tables}}
''';
```

Exporting the PRAGMA 
---------------------

Now we can export the [PRAGMA](https://www.sqlite.org/pragma.html) for the database by exporting the list of tables, querying the column information and indexes about each one.

```dart
final tables = <TableInfo>[];
// Export table names
final tableNames = db
	.select("SELECT name FROM sqlite_master WHERE type='table';")
	.map((e) => e['name'] as String);
for (final t in tableNames) {
  // Export column information
  final info = db.select('PRAGMA table_info($t);');
  final tbl = TableInfo(name: t, fields: [], indexes: []);
  for (final c in info) {
    tbl.fields.add(c);
  }
  // Export index names
  final indexList = db.select('PRAGMA index_list($t);');
  for (final index in indexList) {
    final name = index['name'] as String;
    // Export index information
    final infos = db.select('PRAGMA index_info($name);');
    final indexValue = {...index, 'values': infos};
    tbl.indexes.add(indexValue);
  }
  tables.add(tbl);
}
```

Rendering the template 
-----------------------

Now take the tables we just exported and pass them to the mustache template to render:

```dart
final tml = Template(template);
final args = {"tables": tables.map((e) => e.toJson()).toList()};
final str = tml.renderString(args);
print(str);
```

This will now print out all the tables and indexes as CREATE as valid SQL. 🎉
