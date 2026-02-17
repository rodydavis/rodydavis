---
title: How to Deploy PocketBase to Cloud Run
description: >
  Learn how to deploy PocketBase on Google Cloud Run using the new volume
  mounting feature, enabling scale-to-zero, infinite storage, and easy backups.
date: '2025-01-18 22:12:22.964Z'
draft: false
tags:
  - PocketBase
  - SQLite
  - Google Cloud
  - Cloud Run
  - Go
summary: >-
  Deploy PocketBase on Google Cloud Run with features like scaling to zero,
  infinite storage, and easy backups, using a Cloud Storage bucket for
  persistent data.
embedding: >-
  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
related:
  - astro-ssr-pocketbase-single-server.md
  - pocketbase-webrtc-signal-server-js.md
  - host-flutter-rest-api.md
  - sqlite/no-sql.md
  - podcast-github-pages.md
---

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

![](../../assets/pb_cloud_run_1_3qclbfac0c.png)

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

![](../../assets/pb_cloud_run_2_7911u5glhr.png)

### Deploy and Wait 

Now create the service and wait for the cloud build to finish.

If everything goes well, you should see the service deployed.

![](../../assets/pb_cloud_run_3_y6n1ukkd8u.png)

FAQ 
----

### What if I have local files that I want to use? 

`pb_data`, `pb_public`, and `pb_hooks` are all directories you might use during development.

You can upload these directories to your Google Cloud Storage bucket you created earlier to the root directory.

### Can I use a custom domain? 

Yes, you can use a custom domain. You can follow the guide on the [official documentation](https://cloud.google.com/run/docs/mapping-custom-domains).
