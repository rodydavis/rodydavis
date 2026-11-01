---
title: How to Deploy PocketBase to Cloud Run
date: '2025-01-18 22:12:22.964Z'
draft: false
tags:
  - pocketbase
  - cloudrun
  - github
  - google
summary: >-
  Deploy PocketBase to Google Cloud Run using a step-by-step guide that
  leverages volume mounting to connect it with Google Cloud Storage.
embedding: >-
  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
related:
  - astro/ssr-pocketbase.md
  - blog/migrating-to-pocketbase.md
  - >-
    videos/dev-show/announcing-tensorstore-chrome-root-program-and-more-dev-news.mdx
  - blog/podcast-github-pages.md
  - flutter/host-rest-api.md
last_updated_metadata: '2026-11-01T02:28:33.682Z'
---

# How to Deploy PocketBase to Cloud Run

It is now possible to run [PocketBase](https://pocketbase.io/) on Google [CloudRun](https://cloud.google.com/run?hl=en) because of the recent support for [mounting volumes](https://cloud.google.com/run/docs/configuring/services/cloud-storage-volume-mounts). This is a guide on how to deploy PocketBase on Google Cloud Run.

Features 
---------

*   Scale to zero
*   Infinite storage (and file deletion protection, file versions, and multi region)
*   `pb_data`/`pb_public`/`pb_hooks` all in the same file system
*   Backups can be done either by PocketBase or by protecting the bucket

Prerequisites 
--------------

*   Google Cloud project
*   Google Cloud Storage bucket

Getting Started 
----------------

Fork [this repository](https://github.com/rodydavis/pocketbase-cloudrun/tree/main) or click "Use this template" to create your own repository.

Steps 
------

### Create a new service

![](../../../assets/pb_cloud_run_1_3qclbfac0c.png)

#### Google Cloud Build 

*   Setup with Cloud Build
    *   Repository Provider: `GitHub`
    *   Select Repository: `THIS_REPOSITORY_FORK`
*   Branch: `main`
*   Build Configuration: `Dockerfile`

#### General Settings 

*   Allow unauthenticated invocations
*   CPU is only allocated when the service is handling requests
*   Maximum number of requests per container is set to `1000`
*   Maximum number of containers is set to `1`
*   Timeout is set to `3600`
*   Ingress is set to internal and `all` traffic

#### Container(s), Volumes, Networking, Security 

##### Volumes 

*   Add volume
    *   Volume type: `Google Storage bucket`
    *   Volume name: `remote-storage (or any name you want)`
    *   Bucket: `YOUR_BUCKET_NAME`
    *   Read-only: `false`

##### Container(s) 

*   Startup CPU boost is `enabled`
*   Volume mount (s)
    *   Volume name: `remote-storage`
    *   Mount path: `/cloud/storage`

#### Add Health Checks 

You can add a health check to your service that uses Pocketbase's health check endpoint `/api/health`.

![](../../../assets/pb_cloud_run_2_7911u5glhr.png)

### Deploy and Wait 

Now create the service and wait for the cloud build to finish.

If everything goes well, you should see the service deployed.

![](../../../assets/pb_cloud_run_3_y6n1ukkd8u.png)

FAQ 
----

### What if I have local files that I want to use? 

`pb_data`, `pb_public`, and `pb_hooks` are all directories you might use during development.

You can upload these directories to your Google Cloud Storage bucket you created earlier to the root directory.

### Can I use a custom domain? 

Yes, you can use a custom domain. You can follow the guide on the [official documentation](https://cloud.google.com/run/docs/mapping-custom-domains).
