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
  - sqlite/ui-thread.md
  - dart/export-sqlite.md
  - ai/vector-recommendations.md
last_updated_metadata: '2026-05-23T00:15:17.542Z'
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
