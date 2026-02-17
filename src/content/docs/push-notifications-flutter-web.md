---
title: How To Send Push Notifications on Flutter Web (FCM)
description: >
  Learn how to implement Firebase Cloud Messaging (FCM) in your Flutter web app
  with this guide, covering service worker setup, helper methods, and testing to
  enable push notifications.
date: '2025-01-20 01:11:12.099Z'
draft: false
tags:
  - Flutter
  - Dart
  - Javascript
  - HTML
summary: >-
  Configure Firebase Cloud Messaging for Flutter web by modifying the index.html
  to use the `firebase-messaging-sw.js` service worker and providing your
  Firebase project credentials.
embedding: >-
  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
related:
  - native-cross-platform-flutter.md
  - display-html-in-flutter.md
  - flutter-and-xcode-cloud.md
  - flutter-one-click-release.md
  - flutter-and-lit.md
---

If you are using Firebase then you are probably familiar with Firebase Cloud Messaging. The setup on Flutter web is very different than mobile and other plugins you are probably used to.

![](../../assets/p_1_sml0ik8i1v.webp)

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

![](../../assets/p_2_cab21gsn50.webp)

Conclusion 
-----------

Now you can send push notifications to Flutter apps! You still need to use conditional imports to support the mobile side as well but stay tuned for an example with that. Let me know your questions and any feedback you may have.
