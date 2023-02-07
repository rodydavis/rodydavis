---
title: "How to deploy PocketBase to Cloud Run"
date: 2022-09-24
publishDate: 24 Sep 2022
tags:
- posts
- sqlite
image: /attachments/pocketbase_thumbnail.webp
---

> **TLDR** Fork this [repo](https://github.com/bscott/pocketbase-litestream) to setup Google Cloud Build and setup environment variables.

This is a quick guide on how to deploy PocketBase to Cloud Run.

## PocketBase Setup

Follow the [setup guide](https://pocketbase.io/docs/) to get PocketBase setup on your local machine.

Create a new database and add some data.

## Google Cloud Setup

First you need to setup a Google Cloud Project. You can use the [free tier](https://cloud.google.com/free) to get started.

Next you need to setup a Cloud Storage bucket. You can use the [Cloud Console](https://console.cloud.google.com/storage/browser) to create a bucket.

## LiteStream Setup

Follow the [setup guide](https://litestream.io/getting-started/) to get LiteStream setup on your local machine.

Backup the local database to bucket you created and save the `bucket url` for later.

Save the LiteStream `username` and `password` for later.

## Cloud Run Setup

Fork this [repo](https://github.com/bscott/pocketbase-litestream) for use with Google Cloud Build.

### Google Cloud Build

Create a new Cloud Run service and select the repo you forked under the Google Cloud Build section.

Choose the Dockerfile in the root of the repo.

Set the minimum instances to 1 and the maximum to 1.

You can also set CPU to always be allocated.

![](/attachments/pocketbase_settings.webp)

### Environment Variables

Setup the environment variables for the Cloud Run service:

```bash
LITESTREAM_ACCESS_KEY_ID=YOUR_LITESTREAM_USERNAME
LITESTREAM_SECRET_ACCESS_KEY=YOUR_LITESTREAM_PASSWORD
REPLICA_URL=YOUR_REPLICA_URL
```

## Conclusion

After a successful build you should be able to access your PocketBase instance at the url provided by Cloud Run.

If you want to generate the dart classes for your database check out this [repo](https://github.com/rodydavis/pocketbase_dart_generator).
