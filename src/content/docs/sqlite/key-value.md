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
related:
  - sqlite/no-sql.md
  - sqlite/fts5.md
  - dart/export-sqlite.md
  - sqlite/ui-thread.md
  - flutter/graph-database.md
last_updated_metadata: '2026-11-01T09:41:36.875Z'
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
