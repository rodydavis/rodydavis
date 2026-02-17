---
title: How to Export SQLite Tables to CREATE Statements
description: >
  Learn how to export your entire SQLite database schema, including tables and
  indexes, into runnable CREATE statements at runtime using Flutter and the
  `sqlite3` package.
date: '2025-01-18 20:43:35.986Z'
draft: false
tags:
  - SQLite
  - Dart
  - Flutter
summary: >-
  Export SQLite database schema (tables and indexes) to CREATE statements using
  Flutter, SQLite3, and Mustache templating.
embedding: >-
  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
related:
  - flutter-graph-database.md
  - sqlite/no-sql.md
  - sqlite/fts5.md
  - sqlite/key-value.md
  - automate-flutter-apps.md
---

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
