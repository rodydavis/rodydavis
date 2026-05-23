---
title: Displaying HTML in Flutter
date: '2025-01-19 08:08:22.142Z'
draft: false
tags:
  - flutter
  - html
  - dart
  - video
  - youtube
  - github
  - web
summary: >-
  Learn how to display and interact with complex HTML and web content in Flutter
  using the robust `easy_web_view` package, with specific setup guides for web
  and mobile platforms.
embedding: >-
  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
related:
  - flutter/web-deep-linking.md
  - dart/html-web-components.md
  - flutter/ssr-rfw.md
  - flutter/lit-interop.md
  - flutter/getting-started.md
last_updated_metadata: '2026-05-23T00:10:07.018Z'
---

# Displaying HTML in Flutter

Sometimes you have content in HTML that needs to be displayed and interacted with in Flutter.

Online Demo:[https://rodydavis.github.io/easy\_web\_view/#/](https://rodydavis.github.io/easy_web_view/#/)

![](../../../assets/html_1_yaak9yba8y.webp)

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

![](../../../assets/html_2_uowumu74gx.webp)

To display valid HTML you can set the src field to the following:

```dart
_src = "data:text/html;charset=utf-8," + Uri.encodeComponent("HTML_CONTENT_HERE");
```

> For the package you can also pass markdown to the src and it will convert it for you.

After you call the setup method it is now time to display your new platform view:

![](../../../assets/html_3_d2x4h481p0.webp)

You need to use the same viewType string as you registered for “registerViewFactory” method earlier.

Finally you need to wrap it in a container or sized box with an explicit width and height!

Mobile 
-------

Reference: [https://github.com/rodydavis/easy\_web\_view/blob/master/lib/src/mobile.dart](https://github.com/rodydavis/easy_web_view/blob/master/lib/src/mobile.dart)

Mobile setup should be easier. Let’s add a method for updating the url that we will pass to the web view.

![](../../../assets/html_4_can4qsn59m.webp)

Create the controller:

```dart
WebViewController _controller;
```

And when ever the src changes call this method:

```dart
_controller.loadUrl(_updateUrl(widget.src), headers: widget.headers);
```

Finally lets show the html in the widget tree:

![](../../../assets/html_5_ue0rqxe1sr.webp)

Conclusion 
-----------

If you want to see a complete example and advanced use case view the source here: [https://github.com/rodydavis/easy\_web\_view](https://github.com/rodydavis/easy_web_view)

And if you just want to have it all done for you use this package: [https://pub.dev/packages/easy\_web\_view](https://pub.dev/packages/easy_web_view)

Feel free to make PRs if you have anything that could help make it better too (Or if you find bugs).

When you show HTML this way you will find that you can interact, select text and work with it just like you would it it were a regular web page. If you are using the package you can also just pass embedded content or html elements too without needing a full html valid file (YouTube video for example).
