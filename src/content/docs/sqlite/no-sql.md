---
title: How to store SQLite as NoSQL Store
date: '2025-01-18 06:24:22.553Z'
draft: false
tags:
  - html
  - sqlite
summary: >-
  Store JSON data in SQLite by creating a table with a path, data (as a string),
  TTL, created, and updated columns, then use INSERT/REPLACE statements to save
  and retrieve JSON objects.
embedding: >-
  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
related:
  - sqlite/key-value.md
  - lit/html-table.md
  - dart/export-sqlite.md
  - sqlite/fts5.md
  - sqlite/ui-thread.md
---

# How to store SQLite as NoSQL Store

[SQLite](https://www.sqlite.org/) is a very capable edge database that can store various shapes of data.

[NoSQL databases](https://www.mongodb.com/nosql-explained#:~:text=Some%20say%20the%20term%20%E2%80%9CNoSQL,format%20other%20than%20relational%20tables.) are very popular due to the schema-less nature of storing of the data but it is totally possible to store these documents in SQLite.

SQLite actually has great [JSON support](https://www.sqlite.org/json1.html) and even supports [JSONB](https://sqlite.org/draft/jsonb.html).

Create the table 
-----------------

To store JSON documents we need to create a table to store the values as strings.

```sql
CREATE TABLE documents (
  path TEXT NOT NULL PRIMARY KEY,
  data TEXT,
  ttl INTEGER,
  created INTEGER NOT NULL,
  updated INTEGER NOT NULL,
  UNIQUE(path)
);
```

| path | data | ttl | created | updated |
|---|---|---|---|---|
| /posts/1 | {"id":1} | NULL | 0 | 0 |
| /posts/2 | {"id":2} | NULL | 0 | 0 |
| /users/1 | {"id":1} | NULL | 0 | 0 |

The basic idea is to store a JSON object and an unique path.

There is an optional [TTL](https://www.cloudflare.com/learning/cdn/glossary/time-to-live-ttl/#:~:text=What%20is%20time%2Dto%2Dlive%20\(TTL\)%20in%20networking,CDN%20caching%20and%20DNS%20caching.) to automatically delete rows when they reach the stale date.

Save a document 
----------------

To save a document we can encode our JSON as a string or binary and save in in the table with a unique path.

```sql
INSERT OR REPLACE 
INTO documents (path, data, ttl, created, updated) 
VALUES (:path, :data, :ttl, :created, :updated)
RETURNING *;
```

You can also use JSON functions to save the Object to a valid JSON string.

```sql
INSERT OR REPLACE 
INTO documents (path, data, ttl, created, updated) 
VALUES ("/posts/1", json('{"id" 1}'), NULL, 0, 0)
RETURNING *;
```

| path | data | ttl | created | updated |
|---|---|---|---|---|
| /posts/1 | {"id":1} | NULL | 0 | 0 |

Reading a document 
-------------------

To read a document we just need the path. If a TTL is set we can [calculate if the current date](https://www.sqlite.org/lang_datefunc.html) is greater than the offset and not return the document.

```sql
SELECT * FROM documents 
WHERE path = :path
AND (
	(ttl IS NOT NULL AND ttl + updated < unixepoch())
	OR
	ttl IS NULL
);
```

| path | data | ttl | created | updated |
|---|---|---|---|---|
| /posts/1 | {"id":1} | NULL | 0 | 0 |

Get documents for a collection 
-------------------------------

We can query all the docs for a given collection using some built-in functions and a path prefix:

```sql
SELECT *
FROM documents 
WHERE (
	path LIKE :prefix
	AND
	(LENGTH(path) - LENGTH(REPLACE(path, '/', ''))) = (LENGTH(:prefix) - LENGTH(REPLACE(:prefix, '/', '')))
)
AND (
	(ttl IS NOT NULL AND ttl + updated < unixepoch())
	OR
	ttl IS NULL
)
ORDER BY created;
```

It is expected to search for a :prefix with the `/%` at the end:

`"/my/path/%" // search for /my/path`

Deleting expired documents 
---------------------------

Using the TTL field we can delete all expired documents:

```sql
DELETE FROM documents
WHERE ttl IS NOT NULL
AND ttl + updated < unixepoch();
```
