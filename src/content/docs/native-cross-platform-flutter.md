---
title: How to build a native cross platform project with Flutter
description: >
  Learn how to import `dart:html` and `dart:io` in the same Flutter project to
  create cross-platform plugins that work seamlessly on mobile and web.
date: '2025-01-20 00:56:31.391Z'
draft: false
tags:
  - Dart
  - Flutter
summary: >-
  Flutter now natively supports web development, removing the need for import
  changes and enabling full plugin compatibility; get started with the latest
  Flutter version and a starter project.
embedding: >-
  DiERvvYCIzueYBQ867rJu8ZhTL1iBcY79WsEvXOTRzwrUo49iDxHvdizr7sqq/i64hFjO0NwkbzKoFO7lcqKOza9fT1SzYm6KOR8PT17Nb3E/Tw9dkJJPUE88rsqODI9YRFPPFhEVDzv0hU7mSxUvcmdSj1oYLm8YyykPEZJkT1gg0O8K3+qPPau/TzOI5o7M0gvvVVfubxjzM08JTamvDOpTz1w+xa6R2N2vUnCYTyV1TU8WQpwvaGFdr3FKLi8sPVwvGkFX7yLPBy9YPm7vCI8pDxxuv472oRCvU0ua70u0Hu8sqKgvCi1jTuoF7g85SAxvY+rory1vqe7Pfjdu+TiIT2DBL+68HrSPJ/H9TsVfTU96/8bPuDvbTwU4ja9seN5vBo/Obzsd7o96OsQPmLITzxq8pi83fKrPMRA1DxZvLo8wXm5vaTcA726sii9vNgMPSr0nz0ICtE8W10APXSKmjt2n168tbv3OpvRU71VHIc8ZCLQvMdJ3btwY/M81BCsvOLpobt98I48iuXkvMQj9zsoQAU9qtH5uSifBz3SUD88IGwcPUKEpTwB4gu90rvLu3UNNjzcvnm9D3WAPS0AvDy3MH69Zo1sOhptGD2/aTC9Na8TPb3WkzxWS8M8YNlVPSYsxry3ysO8J8hsvSXAFD2bpj89y7QVvNyrHL10KSy8TOlvOmsL6Dynwqs6YvEhPVB2VD2DzHy9vOM9O++0WT0Hi9c5Dz+EPaTUaT2Q6DG9a0lUvQ+FgL2+Rxe7/K+1vGNllD0tGWW9U5tjvRYDfTxVA/Y8m6XdPEwAerzcOzg9l11MvA2E6DznnH073p5LPYL5qjxm3t480DOxPAg/prxElZs8ZoyhPcV617uOa0W8v5QcPUMSrTvaggM8mZxaPDmXd7wyLRa99Z/xvEHaxjwT0We9vhCIPbn3iTykVk+7Fa3aPDgUAz0B8Sk71m+BvdHd1zsywCE96XmSPBDRIz2qOzc9i8QNPG8RHz3tawS9NwYFPT7yqbtrOei8rKHavLZu+7yBjgU9dFiMPGJPRj1dD+c8D4JivXmpfryblg+9nTFmvfqw+Dq37FM87hlVvDJlPD3EqRa802VSOyy987xXiQA9VdkCvcDrQLvvdMe7O6w3PTiYgz3FjZm8mSxHvUhaYD2lZw09ZFp8veqndDuYJBE9yVo1vZ7EU71W7bA7pw3KvIwQ8boIHMY7EsUWvfknJDz+62u8jRxOvIs23Dv2GiM8qvVWvOPDKb1inT49EnIIvXByC73ikx49q7MYvOF5tLpJeyw9CNj3vPJvFD3f9DU8RKNoPY59Nb0dbQ09bJTjO+10YjyX9bs8VKjePNcWX71xZ029bgDqPM/rEz1Iiwa9syqBuk4KBr2CZ0g9G7aEO7PPdL3vYiu9bmMTOr/9Lz1Bhbq8aOBWvS17K727ulW9hMdgPbLvXLybzyq8JkggvU0GHTxrCJ88Bu4RPVkxkbylNBs9BvGTvXSHzLw3Yms9FaHvOgduLz3cGyc8jBoRO5HaAbyVyI085aoavXyDSb00jum8kOrBPNszJr2e5Ja8fo0ZO1ZwzruOTT695Pw3vO1ky7yDZkc8ZjujPR2RcDpfqr08ymSTPPVEjTziCJY9bMEwPU+UzbwUMRi9WLKePPbnnr1uAIa6A/ZqPJHk1bywAh68ULONu2FffL2ekto8ENDnPE0mDb1Nbtw5g8+EOxatGDswAh66l5lTvVpONr1jXSa96gY7vHMQ0r3mIMg8usBOvLSaO73fBgw9FX2GvN3FZrwDNVi85/tXPZDWlz2wIqs7rY9ZvDCr7LtzAeK86Xt8PUQMnr2CfCo8eRRWPbs+k7z8xQ08BaiaPNAniD25cy29cKm2vC3bA71ToTw8XbTSvX2O47xBuAI9KN2Suw6RTzwh7428jEitu9yni737xMS8C3gXvVFHOTzlaiq8h3cQvWliNLpUPfE5flzwvCXT17w3X528on8cPUfSZjxsXxa92YUMvQN/Eb0pN0i8uWTTPHesTjzYOTs8ckkrPaIFab0Zsb678AT2PDrdEr0aiPA86k4uPMMFgDvn1oK82s6qvJ/hWrzDbFs9ZnW3vSgrBr0X6gu9kc9xuz4SKD1ZOza9W7wSvSlviztgALW9Wqkvva0kG7wzi4Q7g2QHuwkQhbwtQqM9FzcDvFCnyzuXwB09S8bjvfoBKz3R+uO8l57+u1X+gzwjhMS8EKh5vLlt3brgto09/9llvcTgLrwPY9O8JW21PA50KzyMlTi72Y4bvA7zvLyL6SI9wCLsOWPckTtTCkm98blPvXl4F7zpiXm96d99O5KaoLz8OgI7l+WoPBQlvzxl8nK8H9mWPBH6IjoTIlS9zqj3vFldbLwVbLm87CIAvMTwEL1viKE7/x0KPWXzOr0qpdQ8vPXaO30utDzkzKs8Eh5uPbkC07zBnlI80G/JvPW3WDzihmY9O+qHPHNuFDxKYcy8HXjFOyHWCLxdhQ68PUJAO10JO73fSRO9um3yPOT97rxN1no8yA4avGxFGL3ZIeM7QcHrPAjY4rtChUs81YA7PZ1kRT30eQG9HcEqPCE+Vry1bCW9ElXfPDVfcb1rLY49gDfAvD1kKD0cKNU8vx/tPPQK8TxYPxA9U6rdvGlsPr29RHu8ER0BvQ/EI7zPfom9Aw0cPdJHRT1xcXo9g/uWPMRMt7yWK649sRmgPBr1Az07l6Q8AOr/vJrfMLxBBBm7XaoQPV2UIL2tf0w9abBmvUFDkDwMa8W9ruKDvFPxTL1HlVI9Xm2QvZ+v1jwoCwU9X0mCPBMOzb2yTN47qjJrPN71i73p64881TqAPFNg8DzDrVG9TQMbPXmx2ry4N1W8UvNyPahKVT2kvaK81AINvfeegL0ENcM7SZ47vVwNQjwqHOa8d8++vEjSTzxbzuc8JxwLPCx9CLx860U9es1evWvBDz3WBiI9fT4BPScDyLuzx928xczFPDAEjzytUYO7iboovAiasrz8riG9F2oXvVgahTwbnra7L5s/vHMiVLqDH548E0ckPKjxurt+c0U9u+ETvblUF7znBKc88nt5PX3JOD3CaoA8wzA8PfwecbxS9Zm7/ooOPTkMxDwuQ8s85Q+0PMMIYzzSxwG8X/uLPLNqjD2j2qK8GfV9vKDSLz3llI89TJXNPLeWTj22L+w9zd0JvU/cBT1vt8m79NEIvFAjDD3Ub/s82crfPBWHED0YwLG8/tiPPFn0LD1k+BU9uCcRPQ8bw7z15wG7P6onPSUvsLyjt+68dKHOvIMzK7wEFM28zsj3PKH817wfv1o9whkTPUL9dj0vNzU4iq6SvCDANDyxdtM83pfLPO94jDzhjyW8EZYlvD1KKj3QO209mUDWuuU34zy7xQS8A664PCiQBb1W6AK7F4TQvK8O2Tzwqn27yewYPbAj6DywTCS90EKWPKanI7qeHp48tdv0PJSieD3aTLq8mYVdvLHTGL1Bx7G8yWiyvBuXoTwVE5q9yKkRvDyNIr2xdzI6kkmtvV4oZ72nVe079nrxPE76gDuXOiC9lukOvVH+BL21xau8A0FvPPgvQ7wXatm73TszOqkxWjxMJ4O88T8XvKQZmLzb+6+8CDmDO7GHvrw07K08JQZUPeE/fT1vWGY75O1xPfiCFD3djDI90DEqvYhbDrw6Puc8SrtaOifLQz3kZzq8IBxGvWJY5jojfCs8A9HVvOF+Rb03vxY8dwA/vXwUpbwZlBM9QyyMPWoODTt2vRg8yRTKPLUNfb3FgLQ9F4WnO27T2LwHYum6e05fPPBMtrwvUwi9m+YqvVGc4rzbiJ28UYBMPCL26rwWG4S5kfwJPCRxm71D3VQ8WkWoPFjYMz1uUPE7Pg5ovfOg+Tw8aVQ8NO8nPBptAj36bo+88h0vvIvv5DzHMWk8qYlmu6d7EbxWKuC8QYkgPYqpK7zlviI9AyePvV63G7vTbo+95b5+vcrk97qs0pC759iFvGNL0LxISA09oLbyPBYU6jsUuqU9Bjx+O5gtpzzVGvi8ymjavE6d/ztt7SI9FZpKPBBHsbsJLJo8ZReLPffcCb0gsiq8TkayvFmamzz97yK9
related:
  - flutter-cheat-sheet.md
  - flutter-and-lit.md
  - push-notifications-flutter-web.md
  - flutter-ssr-rfw.md
  - automate-flutter-apps.md
---

Import dart:html and dart:io in the same project!

> **TLDR** The final source [here](https://github.com/rodydavis/flutter_x/tree/finish).

Up to now you have been able to create projects with Flutter that run on iOS/Android, Web and Desktop but only sharing pure dart plugins.

Flutter launched _Flutter for web_ at Google I/O and was a temporary fork that required you to change imports from `import 'package:flutter/material.dart';` to `import 'package:flutter_web/material.dart';`.

As you can image this was really difficult for a code base as you had to create a fork and change the imports. This also meant that you could not import any package that needed on a path or depended on flutter. The time as come and the merge is complete. Now you no longer need to change the imports!

![](../../assets/n_2_kvxta7kwbn.gif)

You can use any plugin now, have a debugger, create new flutter projects with the web folder added, web plugins, and so much more..

Disclaimer 
-----------

You will need to be on the latest flutter for this to work.

[Download Flutter](https://flutter.io/get-started/install/)

![](../../assets/ff_1_u67ip3pbk5.webp)

If you are pretty new to Flutter you can check out [this useful guide](https://flutter.io/get-started/codelab/) on how to create a new project step by step.

![](../../assets/ff_2_9dljl4hgqq.webp)

Create a new project named **flutter\_x** and it should look like this:

![](../../assets/xx_1_mdevnjnwh7.webp)

You can also down the starter project [here](https://github.com/rodydavis/flutter_x/tree/starter).

Your code should look like this:

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

Just to make sure everything is working go ahead and run the project on iOS/Android.

![](../../assets/xx_2_srn7elmk0c.webp)

You should have the counter application running and working correctly. Now quit and run on Chrome. It should be listed as a device. You can also run from the command line flutter run -d chrome.

![](../../assets/xx_3_iq2vozt6xi.webp)

> You do not get hot reload yet on web so be aware of that.

![](../../assets/xx_4_f6ht1u443m.webp)

Your project should now look like this.

Open your pubspec.yaml and import the following packages.

```python
dependencies:
  universal_html:
  url_launcher:
```

> You can also remove the comments generated in the pubspec.yaml

Your pubspec.yaml will now read like this:

```python
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

![](../../assets/xx_5_a7g3ejp2xp.webp)

Create a url\_launcher folder and file url\_launcher.dart, mobile.dart, web.dart, unsupported.dart inside the plugins folder.

In the file url\_launcher.dart add the following:

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

![](../../assets/xx_6_z13qycty3g.webp)

Make sure to import `import 'package:flutter_x/plugins/url_launcher/url_launcher.dart';` only.

> You can use the relative import if you wish.

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

Your app on the **web** should look like this:

![](../../assets/xx_7_gr9gvvqov4.webp)

And when you tap the button..

![](../../assets/xx_8_kw9mhvznx0.webp)

And when you run it on **iOS**/**Android** it should look like this:

![](../../assets/xx_9_af3wexxmw2.webp)

And when you tap the button..

![](../../assets/xx_10_c184w6lu7g.webp)

Congratulations! You made it 🎉

![](../../assets/xx_11_k1m9m1qs1w.gif)

Here is the final project located [here](https://github.com/rodydavis/flutter_x/tree/finish).

Please reach out if you have any questions!
