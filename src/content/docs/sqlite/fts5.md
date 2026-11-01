---
title: How to do Full Text Search with SQLite
date: '2025-01-18 20:49:31.481Z'
draft: false
tags:
  - html
  - sqlite
summary: >-
  SQLite enables advanced full-text search (FTS) functionality through the fts5
  extension and virtual tables, allowing users to efficiently query large
  datasets using the `MATCH` keyword.
embedding: >-
  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
related:
  - sqlite/no-sql.md
  - sqlite/key-value.md
  - dart/export-sqlite.md
  - flutter/graph-database.md
  - ai/vector-recommendations.md
last_updated_metadata: '2026-11-01T02:29:44.469Z'
---

# How to do Full Text Search with SQLite

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
