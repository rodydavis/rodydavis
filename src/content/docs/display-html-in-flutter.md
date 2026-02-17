---
title: Displaying HTML in Flutter
description: >
  Easily display and interact with HTML content in your Flutter app using the
  `easy_web_view` package, which supports both web and mobile platforms.
date: '2025-01-19 08:08:22.142Z'
draft: false
tags:
  - HTML
  - Dart
  - Flutter
summary: >-
  Display HTML content within your Flutter app using the easy_web_view package,
  which provides a simple way to render HTML, Markdown, and URLs on both mobile
  and web platforms.
embedding: >-
  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
related:
  - native-cross-platform-flutter.md
  - flutter-ssr-rfw.md
  - deep-linking-flutter-web.md
  - push-notifications-flutter-web.md
  - flutter-and-lit.md
---

Sometimes you have content in HTML that needs to be displayed and interacted with in Flutter.

Online Demo:[https://rodydavis.github.io/easy\_web\_view/#/](https://rodydavis.github.io/easy_web_view/#/)

![](../../assets/html_1_yaak9yba8y.webp)

For those impatient I created a package for you to get all the following functionally and more here: [https://pub.dev/packages/easy\_web\_view](https://pub.dev/packages/easy_web_view)

Getting Started 
----------------

Create a new flutter project named whatever you want.

> If you plan on showing HTML content on iOS/Android you will need to add the following to your pubspec.yaml

```python
dependencies:
    webview_flutter: ^0.3.15+1
```

Web 
----

Reference: [/lib/src/web.dart](https://github.com/rodydavis/easy_web_view/blob/master/lib/src/web.dart)

To show html on Flutter web we need to use an HTMLElementView. This is a platform view that allows us to display native content.

We first need to register the Element and add all the options we need. Here we are creating an iFrame element and setting the source based on if it is markdown, html or a url.

![](../../assets/html_2_uowumu74gx.webp)

To display valid HTML you can set the src field to the following:

```dart
_src = "data:text/html;charset=utf-8," + Uri.encodeComponent("HTML_CONTENT_HERE");
```

> For the package you can also pass markdown to the src and it will convert it for you.

After you call the setup method it is now time to display your new platform view:

![](../../assets/html_3_d2x4h481p0.webp)

You need to use the same viewType string as you registered for “registerViewFactory” method earlier.

Finally you need to wrap it in a container or sized box with an explicit width and height!

Mobile 
-------

Reference: [https://github.com/rodydavis/easy\_web\_view/blob/master/lib/src/mobile.dart](https://github.com/rodydavis/easy_web_view/blob/master/lib/src/mobile.dart)

Mobile setup should be easier. Let’s add a method for updating the url that we will pass to the web view.

![](../../assets/html_4_can4qsn59m.webp)

Create the controller:

```dart
WebViewController _controller;
```

And when ever the src changes call this method:

```dart
_controller.loadUrl(_updateUrl(widget.src), headers: widget.headers);
```

Finally lets show the html in the widget tree:

![](../../assets/html_5_ue0rqxe1sr.webp)

Conclusion 
-----------

If you want to see a complete example and advanced use case view the source here: [https://github.com/rodydavis/easy\_web\_view](https://github.com/rodydavis/easy_web_view)

And if you just want to have it all done for you use this package: [https://pub.dev/packages/easy\_web\_view](https://pub.dev/packages/easy_web_view)

Feel free to make PRs if you have anything that could help make it better too (Or if you find bugs).

When you show HTML this way you will find that you can interact, select text and work with it just like you would it it were a regular web page. If you are using the package you can also just pass embedded content or html elements too without needing a full html valid file (YouTube video for example).
