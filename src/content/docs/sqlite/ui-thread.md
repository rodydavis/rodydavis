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
  - sqlite/fts5.md
  - sqlite/no-sql.md
  - sqlite/key-value.md
  - dart/export-sqlite.md
  - flutter/ssr-rfw.md
last_updated_metadata: '2026-05-23T00:15:19.402Z'
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
