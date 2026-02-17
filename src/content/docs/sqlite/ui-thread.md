---
title: SQLite on the UI Thread
description: >
  Unlock the surprising speed of SQLite in Flutter for building responsive UIs,
  showcasing its ability to handle large datasets with synchronous queries and
  optimized configurations.
date: '2025-01-18 20:38:57.089Z'
draft: false
tags:
  - SQLite
  - Flutter
  - Dart
  - Drift
summary: >-
  SQLite is a fast, process-level database library well-suited for UI-driven
  applications, offering efficient data handling even with large datasets and
  benefits from strategic indexing and query optimization.
embedding: >-
  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
related:
  - sqlite/key-value.md
  - sqlite/no-sql.md
  - first-flutter-project.md
  - flutter-graph-database.md
  - export-sqlite-dart.md
---

[SQLite](https://www.sqlite.org/) is a lot faster than you may realize. In [Flutter](https://flutter.dev/) for example there is [drift](https://pub.dev/packages/drift), [sqlite\_async](https://pub.dev/packages/sqlite_async) and [sqflite](https://pub.dev/packages/sqflite) which allow for async access of data. But with [sqlite3](https://pub.dev/packages/sqlite3) you can query with sync functions! 🤯

Here is a list view where there are 10000 items and each item is retrieved with a select statement 👀

![](../../../assets/demo_tobl81yuqz.gif)

Source: [https://gist.github.com/rodydavis/4a6dca4a2e1afc530ac93e94a76a594a](https://gist.github.com/rodydavis/4a6dca4a2e1afc530ac93e94a76a594a)

SQLite, when used effectively, can be a powerful asset for UI-driven applications. Operating within the same process and thread as the UI, it offers a seamless integration that can significantly improve component building.

Async/await does not mean you will be building the most performant applications, and in some cases will [incur a performance penalty](https://madelinemiller.dev/blog/javascript-promise-overhead/).

Even with extensive datasets, SQLite demonstrates remarkable efficiency. Its ability to handle millions of rows without compromising speed is a testament to its robust architecture. Contrary to the misconception of being solely a background-thread database, SQLite functions as a process-level library, akin to any other C-based library.

By strategically employing indexes and queries, developers can achieve nanosecond response times and mitigate N+1 query issues. The judicious use of views, indexes, and virtual tables is paramount in optimizing performance.

Complex join operations and the ability to retrieve only essential data for display further underscore SQLite's versatility. For example, when presenting a list view or cards, SQLite can efficiently fetch the required 30 items without undue overhead.

SQLite's flexibility extends beyond single-database scenarios. The [ATTACH](https://www.sqlite.org/lang_attach.html) feature enables the management of multiple databases within a single application. Additionally, the concept of isolates or workers allows for parallel processing, further enhancing performance and responsiveness.

From simple [key-value](https://rodydavis.com/sqlite/key-value) stores to intricate data modeling, SQLite's capabilities are vast. By applying appropriate [PRAGMAs](https://www.sqlite.org/pragma.html), such as WAL mode, developers can tailor SQLite's behavior to meet specific application requirements.

[Example PRAGMA](https://www.reddit.com/r/rails/comments/16cbiz9/the_6_pragmas_you_need_to_know_to_tune_your/):

```sql
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA journal_size_limit = 67108864;
PRAGMA mmap_size = 134217728;
PRAGMA cache_size = 2000;
PRAGMA busy_timeout = 5000;
```
