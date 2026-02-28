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
  Implement Firebase Cloud Messaging (FCM) on Flutter Web by registering a
  service worker and initializing the Firebase app with your project
  credentials.
embedding: >-
  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
related:
  - flutter/native-cross-platform.md
  - flutter/lit-interop.md
  - flutter/web-deep-linking.md
  - flutter/xcode-cloud.md
  - flutter/getting-started.md
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
