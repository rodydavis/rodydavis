---
title: How to do Full Text Search with SQLite
date: '2025-01-18 20:49:31.481Z'
draft: false
tags:
  - html
  - sqlite
summary: >-
  Learn how to implement full-text search in SQLite using the fts5 extension by
  creating virtual tables and keeping the index synchronized with your data.
embedding: >-
  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
related:
  - ai/vector-recommendations.md
  - sqlite/key-value.md
  - sqlite/no-sql.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.md
  - flutter/web-deep-linking.md
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
