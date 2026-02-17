---
title: How to store SQLite as NoSQL Store
description: >
  Discover how to leverage SQLite's JSON support to build a NoSQL-like document
  store, complete with TTL-based expiration, within this powerful embedded
  database.
date: '2025-01-18 06:24:22.553Z'
draft: false
tags:
  - SQLite
  - NoSql
summary: >-
  Store, manage, and retrieve JSON documents efficiently using SQLite with
  path-based indexing, TTL support, and built-in JSON functions.
embedding: >-
  jZrBvaprirs1yu48I4A0vYkRMj3qVZm8rTRqvf12vjyP4ww9p5+tPI5/3zybmg+8aBwyvGjdGD36+Sc9CrnHvBhYMTy38iY91jNRvZ+RBD3et7Y7cdSFu+CtPb0GhZs8S+EmPOTIBT0tM888pctkPELUmzw9Wyq9N2TXuLfgpjxOxMy64Q0OPc3gnrt00ec8OgJ0vHAkrbymYta84ss3PNbAkDwbe6e8e+0GvQyeJTsGM8k7pwkBvQsCi7zHREY7+2EQve7nLz2alSc8jx9pPTifLL0wu4s8bncDvQKMNDt6LgW8d+V9vRGrZr1FXvu702jDvR5ZxbzAqgK9auXYu5wJjj0JlQ27XlD7O7r5Kb22PX27uygVPiri5LxI+hW9d4xnvWl6mr3/cQM+gPUCPmJLP7ybDj+8R6z9OwAUVT2CmAC9lw3cO12gs7xc7pM8pZDMPS7Nfz2Aj+q7zr2IPC2kJD2AtRi9+rXiu6CrDz0C/AY9v1mkPG7nxTuK4KC8tSVLvL1SQ7oUpqO7dx36vFvYRL077qM7q6zbvDCZLT1Ss2y9mQEJvZGMHj0eCiG9ostYPImOFT31iV69sM6oORi9CzwFUx29sJynvXXD3jyfMX68a3SNPZytLj1ou448k10NPboxj7yOn4u8ZBoHvfh3kLwb2Is9fzeWPLXZVb3pXS89ayLlO+wJkLypRpC7ejQtPWHtjLxDD4m9IA0tPbaGEz3CWSW9wqaSPKvU9Lx1mgs8tzVQO502Ob1ELpa7NV7Zu0eY9ruC3K69cQNwvCljiL178h49y0NbvNhMgL2baAW8aknMPAoOKD2vIna765H9vC5rEDzgf5C9cNB4vWxvq70dj1G8VXD7PODooDwloPG70VDyPP71ETwidQm9L/oOvQ0mVb0iOdy7lJgwvU6pQjx9+AW8jaROvQahXD3xgzA8BD6nPOP+n7wGPyO9q1L2u2fKxzxPYgS9akgHuwawiT0JX167M7WTPaBWQTwwaL08ccwXOxHZFLt+5QY8fJ+JPGxpvryk3mk9zGpyuoCffT2TLTQ8o2XLuxkYXr0iqlo87itNvTSjPL3BnjC8kyQnPR2DUD087LG73h0uvXory7ztQ007KYVlvRKtuzwF3UG8MpM9vb/IRj0XDjA9RHFvvcbjs7xZ2Tu9Jvdpvam0pTz3tea6Xy8BvQITezzD4va82sUPvNPiizxFza08D35QPSI04ryjrVO97MeFveWjfzwt+P68OOYNvLtmejky+yg8XPs+PUt8Aj2eYbg823WOvPGexbxELEY7NntAvGD3oDyczk08vuQCPtFhuLxyR/48YxVkPKyFMzxQNRc8pMJYPRM96jz559G92SrpO2m/yjwckBq8rcb+OnTxB7yo0ku7fjdkPMAFi70HQMG7raY7vRES0Dx/XHw9jlcNPTHlXL1fLpO8f4rXvIKdnLwjsZW8edY1u2h2Cjz0FEy8NOhvPK4sKL0YIw88totPvMPdf7pvEgs9kkfRvCZqhD0v61E9UVw2vOcfAz3EqKU53u5XPf5LSr1qTc+89zzru4AJEb1II7Y8QIUoPV+GDr3RNGe9Tr+9vLVpmr2Sn3E9SgkcPSk+djtfGJc7lAFsPdc7STq/dym8J1QHvJceT7z1Sdy7YkI5PQfglDtXjCA95/OGvMDsvLw39Yw8I2oJvUL/gr3uCDW9WZqpvJmR9zxFuKq8PWHcPCSL67rOoJc8J3r+O5hRojoC8FC8PKbdPE/YA76b9QE994SUvE+nizrKTnM9nnC+vPKynLxVzqs8fh4TPfLdGLwKLIq8w2UPPbBXvLvnwy26Mktcvc6mqr3SL4q8pFUmPSOMNj0txmY8b0v/PP3GYr2QKKq83+D2u9U6VTsgh8s8FdO/vYaqUr0MzNu8+mPZPMkNYjyNafW8K+F1PVk9er0HkRi95Wq5vTguh7xYxAY9uiobvZntNLsj19U7p1iHu9rwFz1rrnM8ZNxCPVae9bx0Rhu9NC9evZ7DnD2k7CI8zCMgvb5xGj0EtIg829t1vHYalr3FWjs7NWYxO88wwrx+aLQ8OubFPEq+Dr3LaVA87V0rvHrnTbwCVXI8chOdvICjA7wHNES9VqZuOhwF6jy5y0E9QsBmPMgn7zttbH69U4oAvXStCz30OAU9URkavQ6FCD3TwYs8mZiaPAlD2LyEu9Q7+WDjvCRTxrxnt4w8gbM4PXE3CDzKSG096qm+PNw9j7xJDgM8UKCvvUGDRDhKHc28ftUHvdhnu7z0vps8gmeqvCV2rzwJyLI9gTZOvE+CPbvZTg88CmHyvP3GjTs2W2M94by8vHTCn70p9TG8Row2PQPs6jy0oQ29ZsmjO4MOHDzSAPo7Z8eavGj/IbxtwSE9kiilO7pEIjymo1o9CN4XPGgoE7yWz788O4wiPJGeirv9reK8TlZ0vFqi+LugCnm9YAMMvHfi+jvIFzY7tRzZvF3DSr3vMhM8hCf6PO1Kd7wBqOA7l2M8PFKzGTwczuc8Wg8YPWOErTwXuY48AP1TvJ/dDLwywDA56g2xPJD+Az301oM9pbGyPHeyIz2jtya8RtFCPAtVh7xmluy7NX1WParWSr1AvzY9YUZ3PFFahL3QmB09a0GYO/CI0zyR54I8H2BRPJjrebwJfCY52LgrvA2+8rzAYTa8ia1sPH5PN7xVA/49cPepPZJoE71+0UQ9CB5/vTqGCT2tamS8am7Vu4g/Nr1Gray6e4TSvG0uUb1NFRE9bTjLvC7DGzyEMd+8kAEePfIRYzw8nE48OTkyPKZhLD2brZq8vsbRu2Klq7xNvZY8ZNLfPILsFD1papo7YQ8MPfbrTbwLcx29Edf7u4tmj7xNkTc8h2YhPA72vLwjGIG8bA8nvTxvJbzT/768d7HpO+ca6rwgILu8KCCKPCWbxzz2CJI84SgFPcCxYjxH1/w8WpTpvLvHmTxlJbG8jhzaPKyWa73s3wi98ZvyugWX5DwkS647MkMaOw3KGb3lUac8D6LXu9a/RzxR6fe7nm9Nu+twj73bIFy9O1/1u5qpzLxVu8A9fgjBvAR43zyMHdE784onPXEFlL1f1xg831tAPfKbPz1Tb8Q7MLJRPTttlzx50kI9Gwc3PThElLx061A99Yt3vFitcj2Yx926IbeTujz8ijo9azm9zGBIvJzyNzws0XY960GmuyzRrDz7XqG9AJ8QveDcWD0vQKW8urHdvFwOD7wb9AQ9mC+oPGmJMj1/8bS8xkMkveGmYz1JelG9pE7vvMCVNb1neAw9q3dGvVQX9jymQsO7vQsevAFhuzyFLds8ps7KvE99Jr0qhAE914PNPO6J2zv+sQS8akuCPMXPpr31k+u8132KPDZjUD1X3Y09AS+aPDURgjzEQWK9GS4hPNvpBr0vIU+8k2OAvEyc6bxGJrU6iXjmvBzOZzxCEiW6Mj65O3540r1JwtE8mL2IPCP6ZLxLq288xBjGPBZSKr1IKjm9+rK5vALvVT3t7yS9EMvZvJHg4Dym2K69KtUDvKa4gDyBbjU9uH4uvZN4u7v7BNa7HdWMvaC9srw3woY8l8QQPc2cwzs8hA097piavLuv9ru87f+7FbWuPOsqFzwo/yY9D47uOUlzOrx5X5g8yHp5PEO3ljyXv1G918P9PNkgeLsdZvC8RA+lvc4vDz0NQjE78db+u+ILsTybqmY9JqW5OyAOnjy2XIY8KMKWvMNchTy+xey7sjsDvbmN77yZjgG9oxKoPFTS+bxFeWG9iMC8vIId37v7a4k9fybYPbAgqDvfn1W9y2bFPF+SCbwQsrI7GdBwPRlgGzzi+js9w9Tiu8FCpzzB1wi8W9z/PDtUZb31njU9cSRVvQ0MCb3SWMK6Y0Zcus5wkD0OqNy8JNruPBb+YTwLWg48Mdmsuxy66byaUsS7TelaPHJ+JL2T8nk8NgggPYxgnbt2YU24V5livD3hMDy4Us+8+cE4PJMVtTtVKTy9xIjnPOc0BLwijI09yjwhPdhda72JioO990rDPISxG71mGTC9BnPbPLaNP7yPSqe8RfGeu0/ypbx1eCs80ZxwvMUyNr3+OMy7NwYVvRDsfr192Ia9
related:
  - sqlite/key-value.md
  - sqlite/ui-thread.md
  - export-sqlite-dart.md
  - sqlite/fts5.md
  - flutter-graph-database.md
---

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
