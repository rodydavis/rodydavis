---
title: How To Send Push Notifications on Flutter Web (FCM)
date: '2025-01-20 01:11:12.099Z'
draft: false
tags:
  - flutter
  - firebase
  - html
  - dart
  - javascript
  - web
summary: >-
  *Learning how to implement Firebase Cloud Messaging (FCM) for sending push
  notifications specifically within a Flutter Web application.*
embedding: >-
  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
related:
  - flutter/web-deep-linking.md
  - flutter/lit-interop.md
  - flutter/display-html.md
  - flutter/graph-database.md
  - videos/take-5/shared-preferences-flutter.mdx
last_updated_metadata: '2026-05-23T00:12:33.690Z'
---

# How To Send Push Notifications on Flutter Web (FCM)

If you are using Firebase then you are probably familiar with Firebase Cloud Messaging. The setup on Flutter web is very different than mobile and other plugins you are probably used to.

![](../../../assets/p_1_sml0ik8i1v.webp)

Setting Up 
-----------

Open your web/index.html and look for the following script. If you do not have one you can add it now in the tag.

```markup
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/flutter_service_worker.js");
  });
}
</script>
```

We need to modify it to support the FCM service worker. The important thing we need to do is comment out the flutter\_service\_worker.js so that we will not get 404 errors when registering the FCM service worker.

```markup
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // navigator.serviceWorker.register("/flutter_service_worker.js");
    navigator.serviceWorker.register("/firebase-messaging-sw.js");
  });
}
</script>
```

Now create a new file called firebase-messaging-sw.js in the web folder with the following contents:

```javascript
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});
```

Make sure to replace the config keys with your firebase keys.

Helper Methods 
---------------

Create a new dart file wherever you like named firebase\_messaging.dart with the following:

```dart
import 'dart:async';
import 'package:firebase/firebase.dart' as firebase;

class FBMessaging {
  FBMessaging._();
  static FBMessaging _instance = FBMessaging._();
  static FBMessaging get instance => _instance;
  firebase.Messaging _mc;
  String _token;

  final _controller = StreamController<Map<String, dynamic>>.broadcast();
  Stream<Map<String, dynamic>> get stream => _controller.stream;

  void close() {
    _controller?.close();
  }

  Future<void> init() async {
    _mc = firebase.messaging();
    _mc.usePublicVapidKey('FCM_SERVER_KEY');
    _mc.onMessage.listen((event) {
      _controller.add(event?.data);
    });
  }

  Future requestPermission() {
    return _mc.requestPermission();
  }

  Future<String> getToken([bool force = false]) async {
    if (force || _token == null) {
      await requestPermission();
      _token = await _mc.getToken();
    }
    return _token;
  }
}
```

Create a button in the app that will be used to request permissions. While it is possible to request for permission when the app launches this is usually bad practice as the user is unlikely to accept and there is no trust built yet. You can request permissions with the following:

```dart
final _messaging = FBMessaging.instance;
_messaging.requestPermission().then((_) async {
  final _token = await _messaging.getToken();
  print('Token: $_token');
});
```

You can listen to messages with the following:

```dart
final _messaging = FBMessaging.instance;
_messaging.stream.listen((event) {
  print('New Message: ${event}');
});
```

Testing 
--------

Now when you run your application and request permissions you will get a token back. With this token you can open the firebase console and sent a test message to the token.

![](../../../assets/p_2_cab21gsn50.webp)

Conclusion 
-----------

Now you can send push notifications to Flutter apps! You still need to use conditional imports to support the mobile side as well but stay tuned for an example with that. Let me know your questions and any feedback you may have.
