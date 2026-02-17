---
title: How to do Offline Recommendations with SQLite and Gemini
description: "Learn how to enhance your CMS like PocketBase with AI-powered content recommendations using text embeddings, SQLite, and k-nearest neighbor search for efficient and scalable related content suggestions.\r\n"
date: '2025-02-10 12:00:00.000Z'
draft: false
tags:
  - PocketBase
  - SQLite
  - AI-ML
  - Local First
  - Google Cloud
  - Go
  - Gemini
summary: >-
  Learn how to implement related content recommendations in your CMS using text
  embeddings, Google's Gemini API, and a SQLite extension for efficient vector
  storage.
embedding: >-
  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
related:
  - dart-html-web-components.md
  - sqlite/fts5.md
  - deep-linking-flutter-web.md
  - figma-and-lit.md
  - palm-2-api-dart.md
---

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
