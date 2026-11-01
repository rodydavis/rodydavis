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
  - sqlite/no-sql.md
  - sqlite/fts5.md
  - dart/export-sqlite.md
  - sqlite/ui-thread.md
  - flutter/graph-database.md
last_updated_metadata: '2026-11-01T02:29:45.050Z'
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
