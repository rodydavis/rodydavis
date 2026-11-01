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
  - sqlite/key-value.md
  - sqlite/ui-thread.md
  - flutter/getting-started.md
  - flutter/multi-touch-canvas.md
last_updated_metadata: '2026-11-01T02:28:34.147Z'
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
