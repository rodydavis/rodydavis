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
  Learn how to implement offline content recommendations using Gemini for text
  embeddings and SQLite for vector storage, enabling efficient similarity
  searches for related content in applications like CMS platforms.
embedding: >-
  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
related:
  - videos/ai/offline-vector-search-with-sqlite-and-embeddinggemma.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.md
  - sqlite/fts5.md
  - videos/ai/how-to-connect-interfaces-to-the-cloud-with-ai-agents.md
  - >-
    videos/firebase-studio/building-ai-powered-experiences-with-firebase-studio-and-firebase-platform-rody-davis.md
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
