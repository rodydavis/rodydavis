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
  - sqlite/ui-thread.md
  - sqlite/no-sql.md
  - sqlite/key-value.md
  - dart/export-sqlite.md
  - ai/vector-recommendations.md
last_updated_metadata: '2026-05-23T00:15:08.177Z'
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
