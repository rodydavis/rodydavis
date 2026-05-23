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
  A guide using Flutter and Dart to programmatically export all tables and
  indexes from a SQLite database into runnable SQL CREATE statements.
embedding: >-
  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
related:
  - flutter/graph-database.md
  - flutter/cheat-sheet.md
  - flutter/getting-started.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.mdx
  - flutter/multi-touch-canvas.md
last_updated_metadata: '2026-05-23T00:09:08.550Z'
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
