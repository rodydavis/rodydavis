---
title: Using SQLite as a Key Value Store
description: >
  Learn how to use SQLite as a simple and efficient key/value store for your
  applications, offering benefits like single-file data containment, attachment
  capabilities, and easy integration with tools like Drift.
date: '2025-01-17 06:54:23.265Z'
draft: false
tags:
  - SQLite
summary: >-
  Store and manage key-value pairs efficiently using SQLite, a versatile
  database ideal for settings, user data, and syncing across applications and
  servers.
embedding: >-
  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
related:
  - sqlite/no-sql.md
  - sqlite/ui-thread.md
  - export-sqlite-dart.md
  - flutter-graph-database.md
  - pocketbase-cloudrun.md
---

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
