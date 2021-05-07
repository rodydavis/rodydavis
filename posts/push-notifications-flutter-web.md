---
layout: layouts/post.njk
title: "How To Send Push Notifications on Flutter Web (FCM)"
date: 2020-05-01
categories: [flutter, web]
image: /img/banner.jpeg
---

If you are using Firebase then you are probably familiar with Firebase Cloud Messaging. The setup on Flutter web is very different than mobile and other plugins you are probably used to.

![](https://cdn-images-1.medium.com/max/3200/1*B0Av_NnFrCKsyC7gN94ytg.png)

## Setting Up

Open your web/index.html and look for the following script. If you do not have one you can add it now in the <body> tag.

```js
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/flutter_service_worker.js");
  });
}
</script>
```

We need to modify it to support the FCM service worker. The important thing we need to do is comment out the flutter_service_worker.js so that we will not get 404 errors when registering the FCM service worker.

```js
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

<iframe src="https://medium.com/media/455c7a3a979544d73c10a03369d054b4" frameborder=0></iframe>

Make sure to replace the config keys with your firebase keys.

## Helper Methods

Create a new dart file wherever you like named firebase_messaging.dart with the following:

<iframe src="https://medium.com/media/cc60e06d906b5b5d7be89e9479fa37e7" frameborder=0></iframe>

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

## Testing

Now when you run your application and request permissions you will get a token back. With this token you can open the firebase console and sent a test message to the token.

![](https://cdn-images-1.medium.com/max/2000/1*ZzoPP7kRHOR-yDN6Sv9XjQ.png)

## Conclusion

Now you can send push notifications to Flutter apps! You still need to use conditional imports to support the mobile side as well but stay tuned for an example with that. Let me know your questions and any feedback you may have.
