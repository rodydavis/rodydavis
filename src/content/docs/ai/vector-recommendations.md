---
title: How to do Offline Recommendations with SQLite and Gemini
date: '2025-02-10 12:00:00.000Z'
draft: false
tags:
  - html
  - sqlite
  - gemini
  - ai
  - youtube
  - pocketbase
  - github
  - google
summary: >-
  Learn how to implement offline content recommendations by using Gemini to
  generate text embeddings and storing/querying them efficiently within a local
  SQLite database.
embedding: >-
  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
related:
  - videos/ai/offline-vector-search-with-sqlite-and-embeddinggemma.mdx
  - sqlite/fts5.md
  - sqlite/no-sql.md
  - sqlite/key-value.md
  - dart/export-sqlite.md
last_updated_metadata: '2026-11-01T02:28:32.868Z'
---

# How to do Offline Recommendations with SQLite and Gemini

When working with a CMS (like [PocketBase](https://pocketbase.io)) it is common to add some sort of recommendatios for related content. For example you can have a list of blog posts, and show related posts either by random selection or recently viewed.  
  
I first learned about this technique from [Aaron Francis](https://aaronfrancis.com) on his YouTube channel:

Text Embeddings
---------------

[Text embeddings](https://ai.google.dev/gemini-api/docs/embeddings) are a way to convert a chunk of text into a an array of numbers. Having a mathematical representation means we can easily store them in a database and run common functions to calculate the distances between vectors that we have stored.

> You will need an [API Key from AI Studio](https://aistudio.google.com/apikey) to generate the descriptions and embeddings.

In order to create the embedding we need to first generate chunk small enough to fit in the embedding window size. For example we can use an LLM like [Gemini to generate a description](https://ai.google.dev/gemini-api/docs/text-generation?lang=go) for a blog post and then vectorize the description which we can store in the database.

> We only need to generate a new embedding and description when the content changes which limits the billing costs to the frequency of the content changes.

Storing the Vectors
-------------------

To store the text embeddings as vectors we can save them in a [SQLite](https://www.sqlite.org) database using a [runtime loadable extension](https://www.sqlite.org/loadext.html) called [sqlite-vec](https://github.com/asg017/sqlite-vec). Here is an example from the readme on how to query the vectors directly in SQLite:

```sql
.load ./vec0

create virtual table vec_examples using vec0(
  sample_embedding float[8]
);

-- vectors can be provided as JSON or in a compact binary format
insert into vec_examples(rowid, sample_embedding)
  values
    (1, '[-0.200, 0.250, 0.341, -0.211, 0.645, 0.935, -0.316, -0.924]'),
    (2, '[0.443, -0.501, 0.355, -0.771, 0.707, -0.708, -0.185, 0.362]'),
    (3, '[0.716, -0.927, 0.134, 0.052, -0.669, 0.793, -0.634, -0.162]'),
    (4, '[-0.710, 0.330, 0.656, 0.041, -0.990, 0.726, 0.385, -0.958]');


-- KNN style query
select
  rowid,
  distance
from vec_examples
where sample_embedding match '[0.890, 0.544, 0.825, 0.961, 0.358, 0.0196, 0.521, 0.175]'
order by distance
limit 2;
/*
┌───────┬──────────────────┐
│ rowid │     distance     │
├───────┼──────────────────┤
│ 2     │ 2.38687372207642 │
│ 1     │ 2.38978505134583 │
└───────┴──────────────────┘
*/
```

Now we can just take the vectors we created earlier and store them in a table which can update as content changes.

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  description TEXT.
  embeddings TEXT
);

CREATE VIRTUAL TABLE vec_posts USING vec0(
  id INTEGER PRIMARY KEY,
  embedding float[768]
);

-- Sync vectors
INSERT INTO vec_posts(id, embedding) SELECT id, embeddings FROM posts;
```

> We could also setup triggers to keep them up to date but in PocketBase I am using event hooks to keep the virtual table udpated.

Generate the Recommendation
---------------------------

Now to generate the recommendation offline we just need to use one of the blog posts to use as the input query to then use [k-nearest neighbor search (kNN)](https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html) to get N number of related posts.

```sql
SELECT
  vec_posts.id as id,
  vec_posts.embedding as embedding,
  posts.title as title,
  posts.description as description,
  posts.slug as slug
FROM vec_posts
INNER JOIN vec_posts.id = posts.id
WHERE embedding match ?
AND k = 6
ORDER BY distance;
```

We just need to provide the ? argument with the vector of the currently selected blog post, and then after we filter out the current blog post from the list then we have the N closest number of blog posts that are related in a vector database.

Conclusion
----------

This makes it so no matter how many times a blog posts is visited no network calls are made for the recommendation which enables this to scale really well.

To see this in action you can click around on the various blog posts I have on my site and see the generated descriptions and related posts at the end of each article.
