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
  Deploy PocketBase to Google Cloud Run by leveraging volume mounts for
  persistent storage and scaling, enabling features like zero scaling and
  infinite storage.
embedding: >-
  sxzwvSjjEb2uQz+8dmF+vFbOhj2GItQ83XcuvWV9Ez0VxLA5rzEivUe8PD2Fpik8kO45u3fO0btIE0E8TK5mO/Aef7ofZgc8Iu1rOwmA67zIAyO7+EsEvf3ZmbtI12E8t4nWPGXDLT14rjQ9vRDpuznl2TxjNHy9ihxHPT39Dz120Km83hl6PIDCWT1xe7q8a6iUu2O9aDw9Y6o85IgnPJe6Az0U44A9p6EXPAep1byQr6q88BdNvcnX/Dunrqs8J1BrvPSmnby+PsQ8wxSdPSyop71zvpg83fGJO2vc+bx3ybO8ljgGvRM5YDuxoiW8msR/vXpH6zu2HvW6yYfePHSMOz3vWOK7ByewPFlgJDxl0sa84+saPgV6oL2jdG+9NCTCPCbeFL2my9Y95KEpPnviwrxeqgi9On/7u/h0+jxQM4k8Tibou4P+OL3zpQc9dfcwPcw7Yj1jhha9DJHPvK2knLxlNTe9W4NSPDY0yrwBlzU9/HBYvb9yzLxfhha964S8OkFX+rx/YzA8ee1cPENiIzz1i+68U8K8Oxo9mz3vqVY8cpodOxPDvTzfElG8xVkGvOYFUL3Fvoe9hX61PVaRmTvZO0486BuKvawTm7wfHxu9MNlMPcgHjLxpajK9MhFAPE/p7bwHi2G9+Yfwu/NIt7xFgCw90Bz9O4ir87w2Uwy9rVhNPRaLkD1C4x89B1f5PAuxDL0BkT+9UKIOPUkFfr112iy9GWnYPKr/hLsLSdC8Ln7RPP4Xmbz2s5g7N7A/O0lDOLy30em9MgflPHDwgr0KY868yDBZPXPvU7y71XW84NCtvAFIGT1EGvG8wV5JvM66o7xGeWS9a3PrvNozqL2OL+a8hEZRPdAKCj1lu6k8nQuIPcF+LDx6siI938livVIO3bw39IU9JrVHvCv1jDxhunY9gAmEPIgpEDwJlFE6Asu9vKD3MzzRrce8LY7Muz3MMz2Txc+8PytVO+3vnzpggua7KdwnvYnWczwx1347c0iiPDXXi708pRu9H++BPN7BGL1VEpg9+Ds5vEFFhT3nYEg9h41pvRbULDwSr608ZVOSuyOCJDwILLG84uAiPYDQIryDOJo8OQvDPJEbE703vKc6YazfvGnuiLxCv5s8cxgQvTE9Hz2OjVY8f/CLvaLFEjxclwA7oCq4u0xX5LtsX4E8egQMvRVauj1kt6i7WItqvFIanTy5G5e8XOqmPXvYZrpIWOC8G0L+vGzxGr2givA7Osx8vYO08DxJbRa8RYAIvDYyM7yxW509yPtaO+jfS73vQ+m7FbloPFwpDj2GKKI8JVoBvdM39Dv+f3Q7mYPUvFVz1bykJ3W87QsmPRoFfbzXJMg7+IspPaoHDb3/URu8stoFvVVOFr3PiuM8skgfO++4Orx9M9K7HL5NPc39gjyiv8E8Z00/ux4WVr1tgK88IDpOvEXKizwvp748nVZUPAkL8TtyRYk95xQrPaNmGD1zjw48915APbzpCr0mB2m89UYlvT04Xj1dkvA8YvwavbS1YD0oBgg9NwXzPKukSr3yF6C9nSE6PGIGFL2NKLA8lXaCvG69nTxYEE69DcZwvS6mFD0xhSq8ZihiPVIifbsuk9e7HsTPvI5F3Lw877A9w8oMPePZBL0Mxsu8DF3oumrjgrwHPYS8T1gAvaet1rxujwC9W3qLvZpx37xV4Ua8HumkPPpPaT0oaMC7iYl5PZLGpLz3pmM9xgsCvPril7399lQ9V8ioPDqn573TJUQ9u2RSPOXUDb1/kow9zQ91PGxKnryEYJ+8T5yEPVLdxbzqcAu9Bb6nuviHLT3m4S68h8uTPeSQPb1Em9M8oiFPPPZW8DwI9pU8Ib1lOx7x4bxHlmY9sF02Pa/doTvhBAc9DP+bvHThoDxfs1g9tveUOw7P/TzgPPM7gByyvCPAvr1WvuA7ukmwOryfJbzq8Jy8/tscPYpOEbxZKSc8HkwKPDNperx/2LM8JuXBvDy4cjykC/M7ezSQPb7qGT0CRzg9kxIJPVzQortqpIm8RZ2kvHjbvrym0fK7MlhOPWzLpr3lzoq882YDPhzhEzwCUuw71VRMORG01jvYsjo8zZWFvUzGED10V4E88Ln7vO3Asj25idW89t0DveR7fjzvPia9F/VevZ0aMD0cGdK79Kk1vfGejTziCBo9XbGuvPeXGL1iito8wScMvaiWDD0/+yW9eWcBPCr1dzzATxE9FlHnO0QafDy3Oxm8LpT/vDHerzyGJe07enStPCtUfT3RpdM6ZcOtvCcQ57xGCl094JP/PLHAnbl2jaG8xUNGPFLTMTxBQi69eVcFvHtNmTu/tlO5nnEBu4sCNT0OxzS8P8myPPP03zxLWqO8Qa+yPL11mDxrEx67Yil8PDgcZT0ImQo9ryp9vDL4Xb0fuYQ7N8bgvCa7oryAUTO9OguevHfBIL1WiJS5WdeVvJLSvbxlpHg8pqotPeOZkr0s6/O80k+FPGLVp7wNEcS5Tu0EvQml07xz61+8pyi8PBSclDxuBKU9McZxt+rt/TzSnC+8hrg8Pf+yULy/boQ97NU+vMcy0jxyBoY6Zl0jPBejBb2VEC69uZ9tO0Va2DzvoQY96meyvJfjqbuCMjM97+4WPDIvA72U1I+801UPPZ3Bt7ysLiQ9dQIAPWDk07x8+rM8XS4LuwZNr7xBU7I9LVh3PaVt0bwmm4Y8hBWZOLAhCr1LUFO8ux96PH7CWjxKT9m8T2o/PevKVzxvjRo9CwKRPNwmBjzi+vY8HeSPvH99bDwa9MM7wQcGPKNYlTwfudM81MKQPbXJy7swE+w8Az67PKADS70GoBI8fZx+ur1Bhruk9TG91cH6O7rBaTyURIy8DwkLPTqyQj3O1VU9COcOvFS927zmQb48WhHuvMNaiTyR6q69zeAcO9s7SD39YeU8kq2nPdKzxDxEKT+9qN4kvUAWubwnQeo7wr3lugqk+zvWjsK8xXvavIX7Qj3Z8ga9UDOcvUPAm7zs07O6pJFvPTfeFz3ZaEO8v6AjvZpX/bzN8H06JkAHPZsrXrkpWJE8MSS9PHU9ljqWLX28BmOVPIPLFLyC0To9Ww0zPFlHfTzaV1M7J12YPNIeyDtd2L27yoJZPJXOHbuW1ig9lWVrPDLQGzwUKSi7AVInvRxs87zgiwO9ZlorvTmuCj1lIla8PBhfvHcSsDz5FCq5Ae3wPHpKUjy87SA80/WdPMwoPzysN8K9HjP8PO6jgj0gHSU8hLHDPMNFALz0V0C7vklCu6DpX70U26S8RL2kva7L9zwBVPg547cWPQZbkDwbS1Y9BAtZu8XdeT3b04c6ufR/vU/gJ7yOYIQ9+ALEuzCG7Tr6/M87pwowvDiDJD24Pb48vqsivQY76TuO7eu8+q+YPBdyzzv13hU9qG0lveoTEL1Rk8K81hbPPK4iQz37wbO8+mBuvEM+hL3iBYo8TKloO4la17yDmWU9cWKHvEG6Fb2DBVO8CAyVvI36zzxgyNC8k+2XPFlltjl8fb+84ogevNgFkz2ZJj68j1ZqvYWHhTyafu47E5muPE2NsTzsQjQ9PxEwvMeHHT0GaQG9vbzDu0tLmjsymxo98Ii3O2mm+7sVIHk83PGUu8wsb71ATFo90LB2veGFMj0SWMQ7wnNVPNHTeDvXy9U8Ar1cvbzsVT3SAPA8N1UBvfuUUj2PrvA7f2Uau5SnFr3/pwS9kMdIvRyuRL3YhpK9GP8TPZoZtryzVyA9fbElPQBhwLz0gKI7DXrzPKax5bzwNCw9CPVLPeJdML3bVkW9hhQZPU5Vhbwe3Tu9QlPMuhNTBb3g9oE7vCwCPAxV3Ltsii89aW9XPFEOt7zEGUq8tYrhvSzMKb1IQW49MY4EvFmx3TzgfJi84KIIPaF1zTyfAdA4329HPCfb6DyXjiG8t+hhPAC0BrxWK5W6w4igPYC3Rb2QVT49SIcdPRIVI7y4++k8uVDxvJMaDjxMSpS9FE2FvK2C0zyImSk9Dop9Ox5/EjzVp3O7/Gt2uBQwM7xP1Zu94AdMvZF3Jj0d+Nw8cn8wvQKnTDx3R1m8oYNYPeq0i73BrS49PgRfvCzRnDqLDKm8
related:
  - backend/pocketbase-webrtc.md
  - astro/ssr-pocketbase.md
  - videos/talks/design-at-scale-with-web-components-and-ducks.md
  - >-
    videos/dev-show/announcing-tensorstore-chrome-root-program-and-more-dev-news.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.md
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
