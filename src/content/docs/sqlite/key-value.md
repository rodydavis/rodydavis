---
title: Using SQLite as a Key Value Store
date: '2025-01-17 06:54:23.265Z'
draft: false
tags:
  - html
  - sqlite
  - dart
summary: >-
  Learn how to create and manage a robust key-value store in SQLite using
  standard SQL commands to perform operations like inserting, retrieving,
  updating, and deleting data pairs.
embedding: >-
  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
related:
  - dart/export-sqlite.md
  - sqlite/no-sql.md
  - flutter/graph-database.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.mdx
  - ai/vector-recommendations.md
last_updated_metadata: '2026-05-23T00:15:15.696Z'
---

# Using SQLite as a Key Value Store

[SQLite](https://www.sqlite.org/) is a very capable edge database that can store various shapes of data.

Key/Value databases are popular in applications for storing settings, and other non-relational data.

By using SQLite to store the key/values you can contain all the data for a user in a single file and can [attach it to other databases](https://www.sqlite.org/lang_attach.html) or sync it to a server.

Create the table
----------------

To store key/value type data we need to first create our table.

```sql
CREATE TABLE key_value (
  key TEXT NOT NULL PRIMARY KEY,
  value,
  UNIQUE(key)
);
```

| key | value |
|---|---|
| user\_id | 1 |
| foo | bar |
| active | 1 |
| guest | 0 |

SQLite has [optional column types](https://www.sqlite.org/datatype3.html) and can be very useful for dynamic values.

Save a value
------------

To save a value for a given key we can run the following:

```sql
INSERT OR REPLACE 
INTO key_value (key, value) 
VALUES (:key, :value)
RETURNING *;
```

| key | value |
|---|---|
| user\_id | 1 |

Since the key is [UNIQUE](https://www.sqlitetutorial.net/sqlite-unique-constraint/) we do not have to worry about conflicts as it will overwrite the value as intended.

Read a value
------------

To read a value we can pass in a key to our query:

```sql
SELECT value FROM key_value 
WHERE key = :key;
```

value

1

This will only return a single value column with a max of 1 rows.

Delete a value
--------------

To delete a value or key we can run the following:

```sql
DELETE FROM key_value 
WHERE key = :key;
```

Search for key or value
-----------------------

We can also search for a specific key or value (if it is a string) with the following:

```sql
SELECT key, value
FROM key_value 
WHERE key LIKE :query 
OR value LIKE :query;
```

| key | value |
|---|---|
| bar | 1 |
| foo | bar |

Drift Support
-------------

If you are using [Drift](https://drift.simonbinder.eu/) in dart, create a new file `key_value.drift` and add the following:

```sql
CREATE TABLE key_value (
  "key" TEXT NOT NULL PRIMARY KEY,
  value TEXT,
  UNIQUE("key")
);

setItem:
INSERT OR REPLACE 
INTO key_value ("key", value) 
VALUES (:key, :value)
RETURNING *;

getItem:
SELECT value FROM key_value 
WHERE "key" = :key;

deleteItem:
DELETE FROM key_value 
WHERE "key" = :key;

searchItem:
SELECT "key", value
FROM key_value 
WHERE "key" LIKE :query 
OR value LIKE :query;
```
