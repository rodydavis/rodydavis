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
  - flutter/lit-interop.md
  - flutter/host-rest-api.md
  - flutter/web-deep-linking.md
  - flutter/native-cross-platform.md
  - flutter/cheat-sheet.md
last_updated_metadata: '2026-11-01T02:28:46.317Z'
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
