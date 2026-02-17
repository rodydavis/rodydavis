---
title: How to do Full Text Search with SQLite
description: >
  Learn how to supercharge your SQLite databases with full-text search
  capabilities using the built-in fts5 extension, enabling efficient and
  powerful querying with the `MATCH` keyword.
date: '2025-01-18 20:49:31.481Z'
draft: false
tags:
  - SQLite
summary: >-
  Implement full-text search in SQLite using loadable extensions like fts5 by
  creating virtual tables and updating them with data from your database.
embedding: >-
  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
related:
  - offline-vector-recommendations.md
  - export-sqlite-dart.md
  - sqlite/no-sql.md
  - lit-vscode-extension.md
  - pocketbase-webrtc-signal-server-js.md
---

SQLite has a powerful way to add new functionality via [loadable extensions](https://www.sqlite.org/loadext.html). The first-party ones include [fts5](https://www.sqlite.org/fts5.html), [json1](https://www.sqlite.org/json1.html) and a couple others.

When building applications it is common to add searching features based on data coming from tables and you may already have queries for fuzzy searching with **LIKE**. You may be excited to hear that SQLite can easily add fully query capabilities over a dataset all with just a simple **MATCH** keyword. 👀

Creating your first search index 
---------------------------------

Full text search in SQLite requires storing the index in **VIRTUAL** tables, which allow for optimized storage of the index based on the queries we will execute against it.

You can create the virtual table for the index making sure to include the **USING** directive for the fts5 target.

```sql
CREATE VIRTUAL TABLE posts_fts USING fts5 (
    title,
    description,
    content,
    content=posts,
    content_rowid=id
);
```

> Text IDs are also supported instead of just INTEGERS.

This is a standard callout. You can customize its content and even the icon.

### Contentless tables 

You can also create a contentless table that will not be based on any existing tables:

```sql
CREATE VIRTUAL TABLE example_fts USING fts5 (
    name,
    description,
    content=''
);
```

Keeping the index up to date 
-----------------------------

By having the source content be stored in another table we need to make sure to keep both tables in sync and avoid updating the index in a hot path when trying to make a query.

By default when you create table it will be empty, even if the source table is populated. You do have various options for populating the index.

### Update by query 

If you use a contentless table or want to pull in data from a view you can update by query.

```sql
INSERT INTO posts_fts (id, title, description, content)
SELECT id, title, description, content FROM posts;
```

### Rebuild command 

Using the rebuild command it will update the index based on the content table specified.

```sql
INSERT INTO posts_fts(posts_fts) VALUES('rebuild');
```

### Triggers 

We can use SQLite triggers to automatically keep the records updated:

```sql
CREATE TRIGGER posts_insert AFTER INSERT ON posts BEGIN
  INSERT INTO posts_fts(id, title, description, content)
  VALUES (new.id, new.title, new.description, new.content);
END;

CREATE TRIGGER posts_delete AFTER DELETE ON posts BEGIN
  INSERT INTO posts_fts(posts_fts, id, title, description, content)
  VALUES ('delete', old.id, old.title, old.description, old.content);
END;

CREATE TRIGGER posts_update AFTER UPDATE ON posts BEGIN
  INSERT INTO posts_fts(posts_fts, id, title, description, content)
  VALUES ('delete', old.id, old.title, old.description, old.content);
  INSERT INTO posts_fts(id, title, description, content)
  VALUES (new.id, new.title, new.description, new.content);
END;
```

This will always ensure the two tables are in sync for any CRUD actions on the source table.

Searching the index 
--------------------

### Query syntax 

Here is the supported query syntax:

```markdown
<phrase>    := string [*]
<phrase>    := <phrase> + <phrase>
<neargroup> := NEAR ( <phrase> <phrase> ... [, N] )
<query>     := [ [-] <colspec> :] [^] <phrase>
<query>     := [ [-] <colspec> :] <neargroup>
<query>     := [ [-] <colspec> :] ( <query> )
<query>     := <query> AND <query>
<query>     := <query> OR <query>
<query>     := <query> NOT <query>
<colspec>   := colname
<colspec>   := { colname1 colname2 ... }
```

To preform an actual query on the index we will need to use the **MATCH** keyword and order by the rank.

```sql
SELECT posts.* FROM posts_fts
INNER JOIN posts ON posts.id = posts_fts.rowid
WHERE posts_fts MATCH :query
ORDER BY rank;
```

Reference 
----------

*   [https://www.sqlite.org/fts5.html](https://www.sqlite.org/fts5.html)
*   [https://docs.datasette.io/en/latest/full\_text\_search.html](https://docs.datasette.io/en/latest/full_text_search.html)
