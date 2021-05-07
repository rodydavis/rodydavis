---
layout: layouts/post.njk
title: "How to build a native cross platform project with Flutter"
date: 2019-09-06
categories: [flutter]
image: /img/banner.jpeg
---

Import dart:html and dart:io in the same project!

You can find the final project [here](https://github.com/AppleEducate/flutter_x/tree/finish).

Up to now you have been able to create projects with Flutter that run on iOS/Android, Web and Desktop but only sharing pure dart plugins. Flutter launched Flutter for web at Google I/O and was a temporary fork that required you to change imports from import 'package:flutter/material.dart'; to import 'package:flutter_web/material.dart';. As you can image this was really difficult for a code base as you had to create a fork and change the imports. This also meant that you could not import any package that needed on a path or depended on flutter. The time as come and the merge is complete. Now you no longer need to change the imports!

![](https://cdn-images-1.medium.com/max/2000/1*epSHkw0msNuaisyHy9yYAA.gif)

You can use any plugin now, have a debugger, create new flutter projects with the web folder added, web plugins, and so much more..

## Disclaimer

You will need to be on the latest flutter for this to work.

[Download Flutter](https://flutter.io/get-started/install/)

![](https://cdn-images-1.medium.com/max/2000/1*1PVcOkDgx2p_G3Bou3IFsg.jpeg)

If you are pretty new to Flutter you can check out [this useful guide](https://flutter.io/get-started/codelab/) on how to create a new project step by step.

![](https://cdn-images-1.medium.com/max/2000/1*d6qN8hoGMwldMtIsQYIqrg.jpeg)

Create a new project named flutter_x and it should look like this:

![](https://cdn-images-1.medium.com/max/2628/1*xe6ubLj5psVH4JQd-VqSAQ.png)

You can also down the starter project [here](https://github.com/AppleEducate/flutter_x/tree/starter).

Your code should look like this:

<iframe src="https://medium.com/media/64311732193c2dd39b2cdbc42965b538" frameborder=0></iframe>

Just to make sure everything is working go ahead and run the project on iOS/Android.

![](https://cdn-images-1.medium.com/max/5464/1*teDs_OqHkRdhwyuzyb2rVA.png)

You should have the counter application running and working correctly. Now quit and run on Chrome. It should be listed as a device. You can also run from the command line flutter run -d chrome.

![](https://cdn-images-1.medium.com/max/5248/1*CzZ28crDYxBEMaNVq9CtvQ.png)
> *You do not get hot reload yet on web so be aware of that.*
> *This is optional but I use this structure in all my apps*

<iframe src="https://medium.com/media/139a52e7b9117765d41bf34d5813f57c" frameborder=0></iframe>

![](https://cdn-images-1.medium.com/max/2000/1*zr22DdSlEXlluwcki-ahEQ.png)

Your project should now look like this.

Open your pubspec.yaml and import the following packages.

```yaml
dependencies:
  universal_html:
  url_launcher:
```
> *You can also remove the comments generated in the pubspec.yaml*

Your pubspec.yaml will now read like this:

```yaml
name: flutter_x
description: A new Flutter project.

version: 1.0.0+1

environment:
  sdk: ">=2.1.0 <3.0.0"

dependencies:
  flutter:
    sdk: flutter

cupertino_icons: ^0.1.2
  universal_html: ^1.1.0
  url_launcher: ^5.1.2

dev_dependencies:
  flutter_test:
    sdk: flutter

flutter:

uses-material-design: true
```

By default if you were to check if the device was mobile or web you will get an error at compile time when trying to import a plugin that is not meant for the platform. To get around this we will use dynamic imports.

![](https://cdn-images-1.medium.com/max/2000/1*YCLt5ItFmyOmrd-CKgOQFQ.png)

Create a url_launcher folder and file url_launcher.dart, mobile.dart, web.dart, unsupported.dart inside the plugins folder.

In the file url_launcher.dart add the following:

```dart
export 'unsupported.dart'
    if (dart.library.html) 'web.dart'
    if (dart.library.io) 'mobile.dart';
```

This will pick the correct file at runtime and give a fallback if it is not supported.

To protect against edge cases you will need to set up a fallback for the import. In unsupported.dart add the following:

```dart
class UrlUtils {
  UrlUtils._();

static void open(String url, {String name}) {
    throw 'Platform Not Supported';
  }
}
```

The class UrlUtils and the public methods have to match all three files for this to work correctly. Always set up the unsupported first then copy the file into mobile.dart and web.dart to ensure no typos.

You should now have 3 files with the above code in each class.

In mobile.dart add the following:

```dart
import 'package:url_launcher/url_launcher.dart';

class UrlUtils {
  UrlUtils._();

static void open(String url, {String name}) async {
    if (await canLaunch(url)) {
      await launch(url);
    }
  }
}
```

This will open the link in safari view controller or android’s default browser respectively.

In web.dart add the following:

```dart
import 'package:universal_html/prefer_universal/html.dart' as html;

class UrlUtils {
  UrlUtils._();

static void open(String url, {String name}) {
    html.window.open(url, name);
  }
}
```

This will open up a new window in the browser with the specified link.

Add a button to the center of the screen. The ui/home/screen.dart should read the following:

```dart
import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

final String title;

@override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
          child: RaisedButton(
        child: Text('Open Flutter.dev'),
        onPressed: () {},
      )),
    );
  }
}
```

Update the onPressed to the following:

```dart
onPressed: () {
    try {
        UrlUtils.open('[https://flutter.dev'](https://flutter.dev'));
    } catch (e) {
        print('Error -> $e');
    }
},
```

Now when you go to import the UrlUtils it is important to import the correct URI.

![](https://cdn-images-1.medium.com/max/2140/1*7OyxZG6557DYE1XiBscCtA.png)

Make sure to import import 'package:flutter_x/plugins/url_launcher/url_launcher.dart'; only.
> *You can use the relative import if you wish.*

You UI code will now read the following:

```dart
import 'package:flutter/material.dart';

import '../../plugins/url_launcher/url_launcher.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

final String title;

@override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
          child: RaisedButton(
        child: Text('Open Flutter.dev'),
        onPressed: () {
          try {
            UrlUtils.open('[https://flutter.dev'](https://flutter.dev'));
          } catch (e) {
            print('Error -> $e');
          }
        },
      )),
    );
  }
}
```

Your app on the web should look like this:

![](https://cdn-images-1.medium.com/max/5248/1*6ni24NpLIULqi_Cd5NHh3Q.png)

And when you tap the button..

![](https://cdn-images-1.medium.com/max/5248/1*tgcfnrgu9O4joiPeKFmqKw.png)

And when you run it on iOS/Android it should look like this:

![](https://cdn-images-1.medium.com/max/5036/1*QEFw3xDevKMsjke4Dd06VA.png)

And when you tap the button..

![](https://cdn-images-1.medium.com/max/5036/1*lCvTvAvu0nI_dhgUUFHkWA.png)

Congratulations! You made it :)

![](https://cdn-images-1.medium.com/max/2000/1*KowWujusMfDjlkjeeOFEBg.gif)

Here is the final project located [here](https://github.com/AppleEducate/flutter_x/tree/finish).

Please reach out if you have any questions!

*Originally published at [http://github.com](https://gist.github.com/a2c38b2020d09e718c8d894d048e9c7e).*
