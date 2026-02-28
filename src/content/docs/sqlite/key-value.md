---
title: Using SQLite as a Key Value Store
date: '2025-01-17 06:54:23.265Z'
draft: false
tags:
  - html
  - sqlite
  - dart
summary: >-
  Use SQLite as a key-value store to efficiently manage settings and
  non-relational data by creating a table, saving, reading, deleting, and
  searching values using SQL queries.
embedding: >-
  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
related:
  - sqlite/no-sql.md
  - sqlite/ui-thread.md
  - sqlite/fts5.md
  - dart/export-sqlite.md
  - backend/pocketbase-webrtc.md
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
