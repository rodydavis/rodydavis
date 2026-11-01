---
title: SQLite on the UI Thread
date: '2025-01-18 20:38:57.089Z'
draft: false
tags:
  - flutter
  - html
  - sqlite
  - javascript
  - github
summary: >-
  SQLite, when used correctly for UI-driven applications, can provide extremely
  fast and seamless data access, often outperforming asynchronous approaches and
  enabling high performance even with massive datasets.
embedding: >-
  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
related:
  - dart/export-sqlite.md
  - sqlite/key-value.md
  - sqlite/no-sql.md
  - flutter/graph-database.md
  - sqlite/fts5.md
last_updated_metadata: '2026-11-01T02:29:46.563Z'
---

# SQLite on the UI Thread

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
