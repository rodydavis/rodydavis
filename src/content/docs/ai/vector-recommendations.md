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
  - >-
    videos/firebase-studio/building-ai-powered-experiences-with-firebase-studio-and-firebase-platform-rody-davis.mdx
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.mdx
  - flutter/graph-database.md
  - podcast/tech-walks/building-with-antigravity-gemini-cli-and-stitch.mdx
last_updated_metadata: '2026-05-23T00:08:51.701Z'
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
