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
  SQLite offers efficient, synchronous database access within the UI thread,
  enabling fast data retrieval and seamless integration for UI-driven
  applications, even with large datasets.
embedding: >-
  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
related:
  - sqlite/key-value.md
  - sqlite/no-sql.md
  - backend/pocketbase-webrtc.md
  - sqlite/fts5.md
  - flutter/graph-database.md
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
