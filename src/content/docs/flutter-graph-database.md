---
title: How to build a graph database with Flutter
description: >
  Learn how to build and utilize a graph database within your Flutter
  applications using SQLite and the Drift package to model relationships between
  data.
date: '2025-01-18 21:09:38.105Z'
draft: false
tags:
  - Flutter
  - Dart
  - Drift
  - SQLite
summary: >-
  Create a graph database in Flutter using SQLite and the Drift package to model
  relationships between data, ideal for applications like social networks,
  games, and blogs.
embedding: >-
  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
related:
  - export-sqlite-dart.md
  - host-flutter-rest-api.md
  - deep-linking-flutter-web.md
  - flutter-one-click-release.md
  - lit-force-graph.md
---

In this article I will go over how to create and use a graph database with [Flutter](https://flutter.dev/).

**TLDR** The final source [here](https://github.com/rodydavis/flutter_graph_database) and an online [demo](https://rodydavis.github.io/flutter_graph_database/).

Prerequisites 
--------------

Flutter installed and setup (Refer to this [article](https://rodydavis.com/posts/first-flutter-project/) if you need help).

Basic knowledge of [SQLite](https://www.sqlite.org/index.html).

Basic knowledge of Graph Databases (Refer to this [video](https://www.youtube.com/watch?v=GekQqFZm7mA) if you need to learn more).

Overview 
---------

First of all, why do we need a graph database when other storage options exist?

Why not use key value stores, document stores, or relational databases?

Well, the answer is that it depends on the problem you are trying to solve.

Graph databases are great for modeling relationships between data.

A couple examples:

*   A social network app can model the relationships between users and posts
*   A game can model the relationships between players and items
*   A blog can model the relationships between posts and comments

The possibilities are endless.

Instead of storing data in a table for each collection we store the data as a graph in a nodes and edges table with some additional extensions in SQLite to make it easier.

Here is a [page](https://www.hytradboi.com/2022/simple-graph-sqlite-as-probably-the-only-graph-database-youll-ever-need) that goes in to detail about it and showcases what we are trying to build.

Getting Started 
----------------

First we need to create a new Flutter project.

```markdown
mkdir flutter_graph_database
cd flutter_graph_database
flutter create .
```

After the project is created open it in your favorite code editor.

```markdown
code .
```

Creating the Database 
----------------------

We are going to use the [drift](hhttps://pub.dev/packages/drift) package to create the database.

Update the **pubspec.yaml** file with the following:

```python
name: flutter_graph_database
description: A new Flutter package project.
version: 0.0.1
publish_to: none

environment:
  sdk: ">=2.19.0-238.0.dev <3.0.0"
  flutter: ">=1.17.0"

dependencies:
  flutter:
    sdk: flutter
  drift: ^2.1.0
  sqlite3_flutter_libs: ^0.5.5
  http: ^0.13.5
  path_provider: ^2.0.0
  path: ^1.8.2
  sqlite3: ^1.7.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.0
  build_runner: ^2.2.0
  drift_dev: ^2.1.0

flutter:

```

### Database Connection 

Next we need to create the database.

Create a new file at **lib/database/connection/unsupported.dart** and update it with the following:

```dart
import 'package:drift/drift.dart';
import 'package:drift/native.dart';

DatabaseConnection connect(
  String dbName, {
  bool useWebWorker = false,
  bool logStatements = false,
}) {
  return DatabaseConnection(NativeDatabase.memory(
    logStatements: logStatements,
  ));
}

```

Create a new file at **lib/database/connection/native.dart** and update it with the following:

```dart
import 'dart:io';
import 'dart:isolate';

import 'package:drift/drift.dart';
import 'package:drift/isolate.dart';
import 'package:drift/native.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;

DatabaseConnection connect(
  String dbName, {
  bool useWebWorker = false,
  bool logStatements = false,
}) {
  return DatabaseConnection.delayed(Future.sync(() async {
    final appDir = await getApplicationDocumentsDirectory();
    final dbPath = p.join(appDir.path, dbName);

    final receiveDriftIsolate = ReceivePort();
    await Isolate.spawn(_entrypointForDriftIsolate,
        _IsolateStartRequest(receiveDriftIsolate.sendPort, dbPath));

    final driftIsolate = await receiveDriftIsolate.first as DriftIsolate;
    return driftIsolate.connect();
  }));
}

class _IsolateStartRequest {
  final SendPort talkToMain;
  final String databasePath;

  _IsolateStartRequest(this.talkToMain, this.databasePath);
}

void _entrypointForDriftIsolate(_IsolateStartRequest request) {
  final databaseImpl = NativeDatabase(
    File(request.databasePath),
    logStatements: false,
  );

  final driftServer = DriftIsolate.inCurrent(
    () => DatabaseConnection(databaseImpl),
  );

  request.talkToMain.send(driftServer);
}

```

Create a new file at **lib/database/connection/web.dart** and update it with the following:

```dart
import 'dart:async';

// ignore: avoid_web_libraries_in_flutter
import 'dart:html';

import 'package:drift/drift.dart';
import 'package:drift/remote.dart';
import 'package:drift/web.dart';
import 'package:drift/wasm.dart';
import 'package:http/http.dart' as http;
import 'package:sqlite3/wasm.dart';

DatabaseConnection connect(
  String dbName, {
  bool useWebWorker = false,
  bool logStatements = false,
}) {
  if (useWebWorker) {
    final worker = SharedWorker('shared_worker.dart.js');
    return remote(worker.port!.channel());
  } else {
    return DatabaseConnection.delayed(Future.sync(() async {
      final response = await http.get(Uri.parse('sqlite3.wasm'));
      final fs = await IndexedDbFileSystem.open(dbName: '/db/');
      final path = '/drift/db/$dbName';
      final sqlite3 = await WasmSqlite3.load(
        response.bodyBytes,
        SqliteEnvironment(fileSystem: fs),
      );
      final databaseImpl = WasmDatabase(
        sqlite3: sqlite3,
        path: path,
        fileSystem: fs, // <- this is required but not documented
        logStatements: logStatements,
      );
      return DatabaseConnection(databaseImpl);
    }));
  }
}

```

Create a new file at **lib/database/connection/connection.dart** and update it with the following:

```dart
export 'unsupported.dart'
    if (dart.library.js) 'web.dart'
    if (dart.library.ffi) 'native.dart';

```

### Database SQL Files 

#### Schema 

Create a new file at **lib/database/sql/schema.drift** and update it with the following:

```sql
CREATE TABLE IF NOT EXISTS nodes (
    body TEXT,
    id   TEXT GENERATED ALWAYS AS (json_extract(body, '$.id')) VIRTUAL NOT NULL UNIQUE
);

CREATE INDEX IF NOT EXISTS id_idx ON nodes(id);

CREATE TABLE IF NOT EXISTS edges (
    source     TEXT,
    target     TEXT,
    properties TEXT,
    UNIQUE(source, target, properties) ON CONFLICT REPLACE,
    FOREIGN KEY(source) REFERENCES nodes(id),
    FOREIGN KEY(target) REFERENCES nodes(id)
);

CREATE INDEX IF NOT EXISTS source_idx ON edges(source);
CREATE INDEX IF NOT EXISTS target_idx ON edges(target);
```

> The ID column is a virtual column that is generated from the body column. This is done so that we can query the database by ID without having to parse the JSON body column.

#### Queries 

Create a new file at **lib/database/sql/queries.drift** and update it with the following:

```sql
import 'schema.drift';

getAllNodes: 
    SELECT * FROM nodes;
getAllEdges: 
    SELECT * FROM edges;
```

#### Delete Edge 

Create a new file at **lib/database/sql/delete-edge.drift** and update it with the following:

```sql
import 'schema.drift';

deleteEdge:
    DELETE FROM edges 
    WHERE source = ? OR target = ?;
```

#### Delete Node 

Create a new file at **lib/database/sql/delete-node.drift** and update it with the following:

```sql
import 'schema.drift';

deleteNode: 
    DELETE FROM nodes 
    WHERE id = ?;
```

#### Insert Edge 

Create a new file at **lib/database/sql/insert-edge.drift** and update it with the following:

```sql
import 'schema.drift';

insertEdge(:source as TEXT, :target as TEXT, :body as TEXT): 
    INSERT INTO edges VALUES(:source, :target, json(:body));
```

#### Search Edges Inbound 

Create a new file at **lib/database/sql/search-edges-inbound.drift** and update it with the following:

```sql
import 'schema.drift';

searchEdgesInbound: 
    SELECT * FROM edges 
    WHERE source = ?;
```

#### Search Edges Outbound 

Create a new file at **lib/database/sql/search-edges-outbound.drift** and update it with the following:

```sql
import 'schema.drift';

searchEdgesOutbound: 
    SELECT * FROM edges 
    WHERE target = ?;
```

#### Search Edges 

Create a new file at **lib/database/sql/search-edges.drift** and update it with the following:

```sql
import 'schema.drift';

searchEdges: 
    SELECT * FROM edges WHERE source = ? 
    UNION 
    SELECT * FROM edges WHERE target = ?;
```

#### Search Node By ID 

Create a new file at **lib/database/sql/search-node-by-id.drift** and update it with the following:

```sql
import 'schema.drift';

searchNodeById: 
    SELECT body FROM nodes 
    WHERE id = ?;
```

#### Search Node 

Create a new file at **lib/database/sql/search-node.drift** and update it with the following:

```sql
import 'schema.drift';

-- Create a text index of entries, see https://www.sqlite.org/fts5.html#external_content_tables
CREATE VIRTUAL TABLE node_entries USING fts5 (
    body,
    content=nodes,
    content_rowid=id
);

-- Triggers to keep entries and fts5 index in sync.
CREATE TRIGGER nodes_insert AFTER INSERT ON nodes BEGIN
  INSERT INTO node_entries(rowid, body) VALUES (new.id, new.body);
END;

CREATE TRIGGER nodes_delete AFTER DELETE ON nodes BEGIN
  INSERT INTO node_entries(node_entries, rowid, body) VALUES ('delete', old.id, old.body);
END;

CREATE TRIGGER nodes_update AFTER UPDATE ON nodes BEGIN
  INSERT INTO node_entries(node_entries, rowid, body) VALUES ('delete', new.id, new.body);
  INSERT INTO node_entries(rowid, body) VALUES (new.id, new.body);
END;

-- Full text search query.
searchNode: SELECT r.** FROM node_entries
    INNER JOIN nodes r ON r.id = node_entries.rowid
    WHERE node_entries MATCH :query
    ORDER BY rank;
```

> Here we are using the [fts5](https://www.sqlite.org/fts5.html) extension to create a full text search index. This is a very powerful feature that allows us to search for nodes by their body text.

#### Traverse Inbound 

Create a new file at **lib/database/sql/traverse-inbound.drift** and update it with the following:

```sql
import 'schema.drift';

traverseInbound(:source AS TEXT): 
  WITH RECURSIVE traverse(id) AS (
  SELECT :source
  UNION
  SELECT source FROM edges JOIN traverse ON target = id
) SELECT id FROM traverse;
```

#### Traverse Outbound 

Create a new file at **lib/database/sql/traverse-outbound.drift** and update it with the following:

```sql
import 'schema.drift';

traverseOutbound(:source AS TEXT): 
  WITH RECURSIVE traverse(id) AS (
  SELECT :source
  UNION
  SELECT target FROM edges JOIN traverse ON source = id
) SELECT id FROM traverse;
```

#### Traverse Bodies Inbound 

Create a new file at **lib/database/sql/traverse-with-bodies-inbound.drift** and update it with the following:

```sql
import 'schema.drift';

traverseWithBodiesInbound(:source AS TEXT): 
  WITH RECURSIVE traverse(x, y, obj) AS (
  SELECT :source, '()', '{}'
  UNION
  SELECT id, '()', body FROM nodes JOIN traverse ON id = x
  UNION
  SELECT source, '<-', properties FROM edges JOIN traverse ON target = x
) SELECT x, y, obj FROM traverse;
```

#### Traverse Bodies Outbound 

Create a new file at **lib/database/sql/traverse-with-bodies-outbound.drift** and update it with the following:

```sql
import 'schema.drift';

traverseWithBodiesOutbound(:source AS TEXT): 
  WITH RECURSIVE traverse(x, y, obj) AS (
  SELECT :source, '()', '{}'
  UNION
  SELECT id, '()', body FROM nodes JOIN traverse ON id = x
  UNION
  SELECT target, '->', properties FROM edges JOIN traverse ON source = x
) SELECT x, y, obj FROM traverse;
```

#### Traverse Bodies 

Create a new file at **lib/database/sql/traverse-bodies.drift** and update it with the following:

```sql
import 'schema.drift';

traverseWithBodies(:source AS TEXT): 
  WITH RECURSIVE traverse(x, y, obj) AS (
  SELECT :source, '()', '{}'
  UNION
  SELECT id, '()', body FROM nodes JOIN traverse ON id = x
  UNION
  SELECT source, '<-', properties FROM edges JOIN traverse ON target = x
  UNION
  SELECT target, '->', properties FROM edges JOIN traverse ON source = x
) SELECT x, y, obj FROM traverse;
```

#### Traverse 

Create a new file at **lib/database/sql/traverse.drift** and update it with the following:

```sql
import 'schema.drift';

traverse(:source AS TEXT): 
  WITH RECURSIVE traverse(id) AS (
  SELECT :source
  UNION
  SELECT source FROM edges JOIN traverse ON target = id
  UNION
  SELECT target FROM edges JOIN traverse ON source = id
) SELECT id FROM traverse;
```

#### Update Node 

Create a new file at **lib/database/sql/update-node.drift** and update it with the following:

```sql
import 'schema.drift';

updateNode: 
    UPDATE nodes SET body = json(?) 
    WHERE id = ?;
```

### Database Setup 

Create a new file at **lib/database/database.dart** and update it with the following:

```dart
import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:flutter/foundation.dart';

import 'connection/connection.dart' as impl;

part 'database.g.dart';

@DriftDatabase(include: {
  'sql/schema.drift',
  'sql/queries.drift',
  'sql/delete-edge.drift',
  'sql/delete-node.drift',
  'sql/insert-edge.drift',
  'sql/insert-node.drift',
  'sql/search-edges-inbound.drift',
  'sql/search-edges-outbound.drift',
  'sql/search-edges.drift',
  'sql/search-node-by-id.drift',
  'sql/search-node.drift',
  'sql/traverse-inbound.drift',
  'sql/traverse-outbound.drift',
  'sql/traverse-with-bodies-inbound.drift',
  'sql/traverse-with-bodies-outbound.drift',
  'sql/traverse-with-bodies.drift',
  'sql/traverse.drift',
  'sql/update-node.drift',
})
class GraphDatabase extends _$GraphDatabase {
  GraphDatabase({
    String dbName = 'graph_db.db',
    DatabaseConnection? connection,
    bool useWebWorker = false,
    bool logStatements = false,
  }) : super.connect(
          connection ??
              impl.connect(
                dbName,
                useWebWorker: useWebWorker,
                logStatements: logStatements,
              ),
        );

  @override
  int get schemaVersion => 1;

  /// Helper method to add graph data from json
  Future<void> addGraphData(
    Map<String, dynamic> data, {
    bool shouldBatch = false,
  }) {
    return transaction(() async {
      try {
        final localNodes = data['nodes'] as List<dynamic>;
        final localEdges = data['edges'] as List<dynamic>;
        // Update nodes
        for (final node in localNodes) {
          final id = node['id'] as String?;
          if (id != null) {
            final current = await searchNodeById(id).getSingleOrNull();
            final body = jsonEncode(node);
            if (current != null) {
              await updateNode(id, body);
            } else {
              await insertNode(body);
            }
          }
        }
        // Update edges
        for (final edge in localEdges) {
          final source = edge['from'] ?? edge['source'] as String?;
          final target = edge['to'] ?? edge['target'] as String?;
          if (source != null && target != null) {
            final body = jsonEncode(edge);
            await insertEdge(source, target, body);
          }
        }
      } catch (e) {
        debugPrint('Error adding graph data: $e');
      }
    });
  }

  Future<void> deleteAll() {
    return transaction(() async {
      try {
        await deleteAllEdges();
        await deleteAllNodes();
      } catch (e) {
        debugPrint('Error clearing graph data: $e');
      }
    });
  }

  Future<void> deleteAllEdges() {
    return transaction(() async {
      final edges = await getAllEdges().get();
      for (final edge in edges) {
        await deleteEdge(edge.source, edge.target);
      }
    });
  }

  Future<void> deleteAllNodes() {
    return transaction(() async {
      final nodes = await getAllNodes().get();
      for (final node in nodes) {
        await deleteNode(node.id);
      }
    });
  }
}

```

Create a new file at **build.yaml** and update it with the following:

```python
targets:
  $default:
    sources:
      - lib/**
      - web/**
      - "tool/**"
      - pubspec.yaml
      - lib/$lib$
      - $package$
    builders:
      drift_dev:
        options:
          sql:
            dialect: sqlite
            options:
              version: "3.38"
              modules:
                - json1
                - fts5
          generate_connect_constructor: true
          apply_converters_on_variables: true
          generate_values_in_copy_with: true
          scoped_dart_components: true
```

Now run the following command to generate the database files:

```markdown
flutter pub run build_runner build --delete-conflicting-outputs
```

Connecting to the Database 
---------------------------

Add a new dependency to your **pubspec.yaml** file:

```markdown
flutter pub add graphview
```

This will be used for the graph visualization.

Create a new file at **lib/main.dart** and update it with the following:

```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_graph_database/flutter_graph_database.dart' as db;
import 'package:graphview/GraphView.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Graph Database',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: const Example(),
    );
  }
}

class Example extends StatefulWidget {
  const Example({Key? key}) : super(key: key);

  @override
  State<Example> createState() => _ExampleState();
}

class _ExampleState extends State<Example> {
  final database = db.GraphDatabase();
  Graph graph = Graph();
  Algorithm builder = FruchtermanReingoldAlgorithm();

  final nodes = <String, db.Node>{};
  bool loaded = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => loadData());
  }

  @override
  void reassemble() {
    super.reassemble();
    // Needed to reset graph on hot reload
    loadData();
  }

  void setLoadedState(bool value) {
    if (mounted) {
      setState(() {
        loaded = value;
      });
    }
  }

  Future<void> addDummyData() async {
    // Load example data
    try {
      // Optionally reset data
      await database.deleteAll();
      // Add example data to database
      await database.addGraphData({
        "nodes": [
          {"id": '1', "label": 'circle'},
          {"id": '2', "label": 'ellipse'},
          {"id": '3', "label": 'database'},
          {"id": '4', "label": 'box'},
          {"id": '5', "label": 'diamond'},
          {"id": '6', "label": 'dot'},
          {"id": '7', "label": 'square'},
          {"id": '8', "label": 'triangle'},
          {"id": '9', "label": "star"},
        ],
        "edges": [
          {"from": '1', "to": '2'},
          {"from": '2', "to": '3'},
          {"from": '2', "to": '4'},
          {"from": '2', "to": '5'},
          {"from": '5', "to": '6'},
          {"from": '5', "to": '7'},
          {"from": '6', "to": '8'},
          {"from": '2', "to": '8'},
          {"from": '1', "to": '8'},
          {"from": '1', "to": '7'},
          {"from": '1', "to": '6'},
          {"from": '1', "to": '5'},
          {"from": '1', "to": '4'},
          {"from": '1', "to": '3'},
          {"from": '1', "to": '9'},
          {"from": '9', "to": '8'},
          {"from": '9', "to": '5'},
          {"from": '9', "to": '3'},
        ]
      });
      loadData();
    } catch (e) {
      debugPrint('Error loading example data: $e');
    }
  }

  Future<void> loadData() async {
    setLoadedState(false);

    final nodeMap = <String, Node>{};
    this.nodes.clear();
    graph = Graph();
    builder = FruchtermanReingoldAlgorithm();

    // Load graph data
    final nodes = await database.getAllNodes().get();
    final edges = await database.getAllEdges().get();

    for (final node in nodes) {
      final newNode = Node.Id(node.id);
      nodeMap[node.id] = newNode;
      this.nodes[node.id] = node;
      graph.addNode(newNode);
    }
    for (final edge in edges) {
      final source = nodeMap[edge.source];
      final target = nodeMap[edge.target];
      if (source != null && target != null) {
        graph.addEdge(source, target);
      }
    }

    setLoadedState(true);
  }

  Widget buildNode(Node node) {
    final dbNode = nodes[node.key!.value];
    final data = jsonDecode(dbNode?.body ?? '{}') as Map<String, dynamic>;
    final label = data['label'] ?? '';
    return SizedBox(
      width: 80,
      height: 80,
      child: Center(
        child: Text(
          label,
          textAlign: TextAlign.center,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Graph Database'),
        actions: [
          IconButton(
            icon: const Icon(Icons.restore),
            onPressed: addDummyData,
          ),
        ],
      ),
      body: !loaded
          ? const Center(child: CircularProgressIndicator())
          : nodes.isEmpty
              ? const Center(child: Text('No Data Loaded'))
              : LayoutBuilder(builder: (context, dimens) {
                  return SizedBox.expand(
                    child: InteractiveViewer(
                      constrained: false,
                      boundaryMargin: EdgeInsets.symmetric(
                        horizontal: dimens.maxWidth * 0.75,
                        vertical: dimens.maxHeight * 0.75,
                      ),
                      minScale: 0.01,
                      maxScale: 5.6,
                      child: GraphView(
                        key: UniqueKey(),
                        graph: graph,
                        algorithm: builder,
                        paint: Paint()
                          ..color = Colors.green
                          ..strokeWidth = 1
                          ..style = PaintingStyle.stroke,
                        builder: buildNode,
                      ),
                    ),
                  );
                }),
    );
  }
}
```

When you run the flutter app you should see the following:

![](../../assets/graph_flutter_final_yikh8roctq.webp)

Conclusion 
-----------

If you want to learn more about building a graph database in Flutter, check out the [source code](https://github.com/rodydavis/flutter_graph_database).
