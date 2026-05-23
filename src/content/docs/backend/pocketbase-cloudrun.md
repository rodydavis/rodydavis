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
  KIvpvfrOsrxeTBA7aRsOvQK9pj1nru4828QSvfPTWzwtF1Y8Il4wvXqzQz0K2k28Zim2PHsA1byfzEA9lNIbPSp6k7vWyD88u4HCvIJcOLz2B9w70RSovDmFP7phVdg8Xd3hPO98Lz04cgM9XP6HvIiYAD1svzC90+X/PK0VDT0vqKW8rmACvN2qBz26CcG8RioivPaXED31y907XoSRu6/qYz2rC4w9UA/pPPXrAbz+Qxa8/Et+vVOKDD0ZC4m7hk+Bu+KhlrzKAXI7esJOPThYlb3JDig8nvivO9GB0LyxVwS9n4M3vemLTLxEM0e8MXBwvRfEybuo4t28dnAqPQYFFj0Pbsm7uavjO4GS6zxNYai867UXPlCN5rzfC5S922eIPHAdf721DZg9i8oSPuHKp7wtIfu8bCi9O4DyvjzpfLQ8+EVnu/Z5ib0+NyY9CfY6PXYiIj1k9bi8gp/mvPrpIbw7hva8d1wgu52R4bzaAZE8OC2QvVTly7wkG0W9h2iyuxmvlbz9+uY75CxEPSGlqTw2xNK7oB96PMbXdD1RQok8dcm3PPv6yzxtr507NJTZt6oPJr2IlUK9/ZqpPYGqYjwUMK28SCCgvesY+jzUcta88Pc5PX22L7wl4dW8IAgsvOlbOb0pSlO9ujUcvaXwRjvLOD09B8OWPALAOb02vIq8WUWaPJs4jD0pWpw9elQnPKiLZ70kSCe9/HspPXUXZr2shRi9AJ21PJGP9zuxGxG92HWwvApznzoUSDk9Rzkgu1kOgrufqwO+eJCfOwlEsb27LIK8BKM1PQROMj2Arys8r5PSukiSLD1WzlK9kMmHO6A5/btaTA29BQ3xu5WKYr3Z6Yi8Lw35PIoF0jx4rgg98LCpPRQ/OzvRndk83gdjvX0IubxCoYg9wSq+O7Y3AjzYf1A9o1AjPQiXAT3V+3e89siNO5GmbbwQK5y8dDoEvGIbRD3EG/W7ysA+vAlsB7wgMfU8V1c0vY4w0Dx6J707qsqNPF8fgr2IsRi9QUL3PGDzA72mPII97mHYu2N+Zz26xlM92dogvSqd2TtfNrm84wAXu4JkbLw9/5g8Af6eO+yRl7pmKRo88RD5PILRabxAaoU79NA/vF1e3bxqLPo89n6tO6ffCz3DuT+8Ev0pvS2Wvjzov408wxruvITOIrxj2aq7WUIoPJdpcj2dVKy7Blg9u5kZB70w3OS8B7vAPLYCEbyrtKe8Tj0AvBD8wryJFwe8s/FXvbyD0TxzvJ88REWMvIsgQjzsEcM9+yWePP2piL2Cn9U8lLeIPOCEvjz7CQI7XQwau7ywxLuT3b275R9CvXjJm7u/nUM76YuxOxXi8jy7KXY8A8VRPWxET72Bxcm8lkfZu7PA77zYBai8r6+jPD3krLvcK/u84GsoPdX1x7rLR0Q8qRqlPKD7yr3LLo481whOvDFf8boyPfE8wFyDu6cyIbplHy893c2HPZgbqz1LO+q83IbKPJJ5+bz4F+O6tOxwPDntHj3YaFg8U3qFvZpzCT0teTs940/bPID3Xr2gJr69MgzHu1Rcrrt+RyK8EutLvJv3dz3beYW9TOcBvUxXGT0b5eM7qQe+PMWZUbwBf4Y8nPebvEeGdryA4vc9UJ8UPQq48rzMtey7x3UmvVMxcLxI2pm8tpqTvQwfz7vqVH289/KGvaHeyLzasUq8M7cUPaYXIT2tvay7TTuUPSNlDLwxQIs9ZuqhvAYlsb1BwJA9P4Z6vOcHv72hsNU86WkTPaQa2LzB01s9YmomPbo7LL2F9I68gyIDPWOmYLzM9rC8hpIEPVfUWD0QhHs7/ZnAPZD5Rb34zZo8wsG7PG8T/Dyp4CQ9yhLKOpzv37z9h687HrYLPUU60LqNMho8y/M2vSXmabwO0xY9/9Lsu5FLiD2AY7A82fEDvZh0jL392ug7cm+sOzAjlry/+T68OufYPA1fhbx69gU9ShYtPfYoDL2Sm/s8laK1vAWOtTyjExS8TCZTPcXVwzuADxo9+llfPQCdo7yu8do7DBGGu/HYCL0P6Jm74UeHPV92kb0QDeu7BuEdPsDkPT3EiAA9aOuiu3RCY7zRTl08ARf6vMB8cT2k0s67cSlcvMe/bz1v9zy9ydkRvXFFXjzjoCa9cd6HverP4jwb8wg9AnaTvao8KDx2q9k8VJ4bvVvlB7vnHxM9aqwmvX/OID1OFgO9NJDJPJ4WhLrtS3o8RSo9PPmQiLkIloq7P6XfuzCu4zwHWPE6eukxPHT3dT3GLpw8FDHmvF3RzrzpfhA9PagUPd9EMTwtvQW9UwtKPB3LhjsFLBO8UWsnOgnrjzwTrey6MQ2BO2i5XD3UJti7gmVlPAQE8zxEM+S7whOfPPIHWTzpzQg8Daz+PCMZOD2P4YE9ypdSvPOzpb3zLRa6seB5vGOgC712/By9XvsCvYRQwrwXv585SX9YO/b8zLy9f985/NzlPAR0lb1uT2a8CJA/PBD6JbtFHyG8VOBUvaOxl7x1CaG7WikLPVSErzz1+GA9KNERvP1HFj3Elnc75SRTPUuaF73u5xQ9yi5buyvqnDiPvzi8BnvVPHSa17xgewS9ePQPPFzCEj09lmc97Y6OvKVr+jy8prc8Q0rUOpXAlLsD4TM7T8smPYUYEL0mWPg84DqQPIz2orzkNls9czEwufCIQ7hNP5g9wnQtPT5Jh7xZCTM8WZY6vJ7BFb3/qy07N+0gPYbArjwkcSy9l4EwPW+4QT0zqx49Uq0IPaVNpzyZeZS8D5z9vEOIWzxqhly84GB+O7xVGj3hds87JgU+Pa3XhDwaUlc8kIVIPX4oc73KEzK86uk4PFqA9Due5Wi9Ofh9PBEbGzwDUI287HxBPH8XLj3EZBY97RzQu71r1rxwp5A8D4vwvHmbzDwDLLO9FoJDPNtfYD2F2eQ7i7QXPexEojys9gS9ntjLvLaO17yP0Ya72GdcPCqtDjwSEpe7gF99vAXoGz0m95O8fDxJvTqrPb2G+sU8KDFMPXm7KD21RQC85uEgvWzPDb0E1A07+g9gPLupnjtaoNM8tJ6MPKMlMrx7zvA8BrwTPPSps7uNmkk91UaHvNvugTz04ii8sh+1PL+cN7x5ip27ZtRPuy7mMTy08DU9+0WWPBeG07sadoq7Jg4LvY6P9LuTYle9MbUWvQ3uQz2UjQi7yykzvDJQ9Ly1Zbo7y7BrPaaiM70BSdc8E1z4PHFNojz0F4a96w93POmblT1INXc83FO2PA1iJbxTRUW8ACquPJQrIL2EJ0+9riWzvdtyITznWds7plPNOT1Uez3DS5g8pc2/vA7SOj3Gm587Jk2JvUP2Mb2gZoQ9+Y6SvB+BjDzO2wk9gWqGO1+3kDwAeT09S8EjvYJrI7zCACu9ksG9PGw5/7uxHBE9ABE/vcccT70rfhm9XEFou5sfQj1zMTa9+tNevZ/eFL1S05a6LrNCO+Un8Lvkeow9DmGFu53WOLybXsu8GKVAvQOFTbxpB4u9l5OTuvzGGb2nS/q6i+J/vOqPdD2q8C88e4REvbjJTTznFyu79jhIui26RD2uhyI9m5u4vBAq1zxUA7C8CSwIvX8muDyRzZI9MfkCPYawPzwBp408Bj6Ous/5ib2+Z0E9W+KdvUlFMD3iMCU5+0mzPG5+BT2Wo0Y8iSxsvcRtUD3Htjg9j9EevVmBlj1PMMo8oLa6vDicNr10LyW9PCqCvQLv2rtH70G91obMPHLoebznDNA8COd+vNEjpDv3qzg88upzPfvmOb2mj4E9Q2ZyPDspxbuLPCC92nMDPbr+SLwthAy9jM0IvF47z7wDdUe8eGfru3A8jzzUHok8DzjWO81dMb1QdCm8NqaTvWPE1bzfvxw9pl2RuxbC8LlTFy071GG+POFAAz3TD/I6ACPtulSmaDwHu9K8sXyZPKkzE71A7FM9YBSBPRlnHb1OKIo8W0cvPYgGvTyt5cY8ZYMKvU97kruh1iW9heTJPM7xfbuLIAI9DpTzvFQoDjwAdye8cBwau0+FqrxO7LG9/GkgvUEYyDuswi88N5ggvdVJg7snjCg8jymAPciARr0aG1A8tGZ3vAiQtTzbw8M7
related:
  - flutter/one-click-release.md
  - astro/ssr-pocketbase.md
  - backend/pocketbase-webrtc.md
  - flutter/xcode-cloud.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.mdx
last_updated_metadata: '2026-05-23T00:08:42.683Z'
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
