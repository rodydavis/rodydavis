---
title: How to store SQLite as NoSQL Store
date: '2025-01-18 06:24:22.553Z'
draft: false
tags:
  - html
  - sqlite
summary: >-
  SQLite can function as a NoSQL store by utilizing its JSON support (including
  JSONB) to store schema-less JSON documents in a structured table.
embedding: >-
  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
related:
  - sqlite/key-value.md
  - sqlite/fts5.md
  - dart/export-sqlite.md
  - sqlite/ui-thread.md
  - ai/vector-recommendations.md
last_updated_metadata: '2026-11-01T02:29:45.797Z'
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
