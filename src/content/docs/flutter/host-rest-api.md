---
title: Host your Flutter Project as a REST API
date: '2025-01-20 00:30:40.634Z'
draft: false
tags:
  - flutter
  - firebase
  - dart
  - material-design
  - javascript
  - typescript
  - github
  - web
  - google
summary: >-
  This tutorial demonstrates how to create a single Flutter project that serves
  as both a client application and a REST API, enabling code reuse and
  simplifying data management, deployable to platforms like Google Cloud Run.
embedding: >-
  FUHFvTsQBj3TrAM9mXExu0rSO70ys9881updvUbS17y6KZ09TsXUvCWzmjxMrSe9Zv0pvIodorxmHC29E45qPc3Ebj0z2Co9lZ6EO18aLb1RX2A81q52PV9gezzcu7y7bJvFu3GLIj2FpzU96RRsvYQJG7xZLQG8gTIlPZcx3zyNTqM7ygdtPd9iH7wkace7gnTru2tHz7sFYXg83jNkPOYO07vkUwk90UrXPCw6rTwwxD29KPKNvTOoebwj/rG8V+uxvBX4Dr2WJHu6rKzFOt0wU7317o864NUPvfBlAb15f5S9exlrvRyvErzEdIy82W2hvaTvabxhS1Y8PS/BvHwmGj1hzZg8AcqiO1PHHbvLwwA9EhQRPm0agrzuXwC9SQ8tvDx8kDszlas9wOjRPfQ+EDxQgoO8oyTFPJ+GiLxFK8K6NsOzvEmPfr1Rdjq91hiSPchFbD0DTyq8YM4CPPVXqzwzY5S8nV2HvLWzAL1w47E8cfX0vLOHYryqPpS7DKDyvCgrybuizyW8HlYnPQvEADyshco8kwvYO5T9IjyS7gA8fhQAPSes5jwSglg7+HsYvXN5hT3Y2SG9cR+bPZcyhTwXkdw6rM/VvBRCFD3tgpG9j1BnPH+PVj2uK/W7Zqh2PRyXnL0SwWM6pjSWvMT03jxm0IE9Y40qvGQGdL0jwPY8xDgbvWZE7Dw4VHk9EJJKPc82KT0Yauq9szhzvMU2TL25K6M8hV3TPFjVGrp1zwS8jIw4vTooFr0R49Y8mvFOPdaouDw8f4C9Nt8dvRnkg71FlTQ9NPiQO1cGS7ph4yw9aSTBPN/jxDwtSAy8eiUrPTn1rD0P3ba8aG00vNfYMzwBRd+7CqoTPXJxnTv8mVY8nWuWPCA+vrwI5eS7DEMTvR0af733ap88SoTcuxyClbzWGhE9NuLOPNpSXD0SFnu9pOeUPGNcrLyUfnM9z1lxvF/bDD103wO9odqzvDnL2zx2K1g92qCHvcSQSz2tFTm9zkYPPKTSLbsjaPa8MQO/vB549by4m5M9p+mCPOlXZT1KxgI9ZeIDveq/droAvio7IXxDvcglwbwg/DW9ryExu0IXTD1H0jW88B7avMTCEr1XE4s8XvRnvQ41dr3/0YM8z01oPKf4Kz3SLZ07VM8NvboSgbzzcAc9tHkHPHztBL2D5mC9lYICvcvYzTpeTJy6taONvP+2krxwFVU61znxuVYzkDvvFuu739H7vOfbwbwOJR29FxxQPKgQqzzX9cg8xRbyu0EZG70Nn4s86GFtu3YxjryIeja7FJ0Ou3rK6TxF/RM9O9hyPRx9d7zuvxS94NBjPA/YwrvThNE8etmmu/4U/ryxeIe8SHxgu+5RBr2mG088NZhNPJFNxLwC8Eo97DWivLjch73uwM28W0ydPNuPFD3u6/i8y91lPHZRA77Xh267qPMGPXPgyjyEcYC7PxINvWs/Crr03Ug8aWiSPLFtGrxQiKC8O3hvvJMtBb0DCf4801wdvTMVvzxPd129eFVAum/XDz1keGI9Uq6OO4o+Qr34IBu8duyOPPaP7LyHwwU84UFsvdgfGz2IO1G9sF/Gu6x3hLy9QL+7B0CQPdLRQb22nn08D+f1vPMslruhN6Y9JGqRPNObz7yHeRe9PCEKPB3Ykbw49l88UWqRPNsRK73TOds8jAJ2PPtWUb15bJk83C+vPK/k8TwLeP870pB2PcpAPbsA5gc9Zigcvfp1GL21dDM840GMPeKkAr6KjUw9tOM6vHRzi71TTVg9LKmJO+NCgL2WJuY8eZfMPRXCDD0QZ5y8pdb3PG+CHD04O0Q7gK4bPbkjyr1ZVhc9NchOPY8WrTx9bES8FUZVvLMpjD0/X388zEJ7vES/dr1KlOI8WL7NvS8h5DqO47q7lAS3PAhVxjwNzy+8Cn8ZO+5zz73dixA98U5fvZW70joVNI68UFbiPLEWgT3uDbA8BdIpvScqO73nRg49QwcnPYc4hjzvzB47TU22u6L7J7zZUqQ8qJ+NuD/vZTyupwG9dK1dPEJOKL0wMc08JYXjO9qejbz2EnE7KJm5PSy1Mb12e2Y9X8mkOlEfLr1rclI8pT8BvWf3hbxI8Ie8nU+pvH1dej2M8r27xp4nvUcufLsijJ08ldOEvdD1Zrx5XTW7dQ8JvfXBgLyWN3q74VD/vNFn2DuT2nQ9kKWivaYEVD0oxbW8oUAyvH40iLyJXzg8EJsuPPziPLsLCgI9/znTvB4yHzy6E6w8X0AnPalsvzsQhM46t7UcvQ5/yjxn06o8V9ZbPatqRj1dXJa8EqvMvBLaVj0lniy9wCLPu3wWWjs+nAu9bTXNuh3lpDzUkis6wsJwu8BbdLxsCsy8NObvvGxGLLzTBVS8qyZDvM5Z3Ds30cs8NYNhPE/BHr1QgXE9RzgkvDqstDwE0Vo8WHDFPLz9AL1s+Sa8gQ8pPbmtEb3O+6Q8ZmoKPauAVbz7SoO93gsFPYxbp7wiPas8qpEIvSbeCj2y/Ik8rB+QPRWdKLzHDTA9GKnEuwnWILxZFL08RrAYPZzuwzp+M1o7blu+PFp/Yz0KON+8pamgOo9nMLxd0Ti9dSYwPCyCXDtWbEW8EtEwvTDatjym4Qc80ZITPVCY7TxJUpm8JXWBPG4oZ708p1a826WYO9yHHrx5a2u6/+ZXPT39GT0arJE9y3K3PJlDmTv5DLE91sBlPO+GD72IDZQ8mGVcPajyBj3t+Re9ovS/PaKKfbwbI309FViDvFTGPb3UVzK9U5kgPKivmbywDIU9MCBfve/PGj2bdsY7gBSQvLQsA70n/xy9URcIu9FEeL1odii9csx2ux8ZZDx4kJG9W1gtPXbXB7z9tmM7ZnPMPNuNIz3JH8W7H8kJPIy3Ib2LEjy9hheOu9ACuLxLzQa9QNXDvcWtnjycoXw90HMLPfWHwLwoQSS8za+eOwDs4DvhVKg8CUm6PNOXbj3n/0e9pXT3vF80oDxJ5hG8GVWoPILn6LzlKhQ8ydqDvU/93DwnNJ47dIMzvKvWBL3TFnq8RVSUPDgbnzx9RN88WPCbPCPu5rym1BE9f6uNPN3cQ72Wf588CGkZvNhspLy80qG8fgkgPbCkvTxwEaI7P26DvDAvSrxSGmY9840FPRsawDwSDt27FHlxvcS0aDs0b5S8YmEEvKZqRLwcTYc9NyJLO6UA9Lsa1UK8QsbTPMHHr7yU+8w7ji1wPT/iaz2Vrt48EuF5Or+Gsj0LrRW9oOskPMoBbrztDCi9TJuAPcQjfL1Ss4c8gQ9vvVMwDj0NzAy9kQwlvDpunjyDx/Y8YzsgPPP46zxKwYw8DL8hvKeRTjzX6Bu98nBzvELp0bzAti88qlywPBqpDj2xmmY9UcRrvFgLDDw9Nwu9/wNzvLsEZL23eFe7tR13PWDvpjtduAe9DWNNPctusz32aUW9wnGhvVCRK73IcoS8pcuOvEqgyjyf3YW9t3MNve/elbzsEwm9SkYlvUm1AD09Hyq8aVwpPIbm1Du+oPI5AO0KvdKtEDxWioe8ZbdhvdRpPjvn5AY8JU4jPI39oTxbaxG9xF4EvfY4wjkteR298WCVvBFo87xb9UG8oYIWvSCer7zL4zK7PXGVvM1uyLwjDSk8fFeFvF1XJj33NiY9I7kpPVvhgDzlzcU8Q1mUvNmbEj1lDuQ8f7DVvIzssz3GGx09ewd4vYU4Db2ZCxk87DqAvSfZKLw6wim9YduEvAJCDju+iyY9IXaDPHnberykZ+S8BZJsPe+TNr2Kjaw8eH+tu+z2lLv5p8G8ydoHPVWN5Lx2dNK8zfRqPNTS0zyz2Aw60tTIPNqH6TwAzZo8hnAIPfMJLL1zUN88JTwjvc+oaj1kzTm8jHDkvRiv1zx8wo08gEnePNdxGz3jJ3e8+C3YvHvxuTy1Ecc87sagO4teAr1zmRG613k7PWZn1Dzbc7c8v4UevLYyyjzM2dm8rma6vfCADroiFXG8zEoSPXkFFL3Fday7fmsEvbJusDy+uUo8fg+tvOO4/7wlaeG8hjzuu0+merxi1oA9WimyPeQlhjwsuPe8OBw/PSyD8LrpZDQ92MOCvB3khDy6QyC7
related:
  - videos/take-5/your-first-flutter-project.md
  - flutter/native-cross-platform.md
  - flutter/getting-started.md
  - flutter/web-deep-linking.md
  - flutter/xcode-cloud.md
---

# Host your Flutter Project as a REST API

After you build your flutter project you may want to reuse the models and business logic from your lib folder. I will show you how to go about setting up the project to have iOS, Android, Web, Windows, MacOS, Linux and a REST API interface with one project. The REST API can also be deploy to Google Cloud Run for Dart everywhere.

![](../../../assets/r_1_gl7e2erkta.gif)

> One Codebase for Client and Sever.

This will allow you to expose your Dart models as a REST API and run your business logic from your lib folder while the application runs the models as they are. [Here](https://github.com/rodydavis/shared_dart) is the final project.

Setting Up 
-----------

As with any Flutter project I am going to assume that you already have [Flutter](https://flutter.dev/) installed on your machine and that you can create a project. This is a intermediate level difficulty so read on if you are up to the challenge. You will also need to know the basics of [Docker](https://www.docker.com/).

Why one project? 
-----------------

It may not be obvious but when building complex applications you will at some point have a server and an application that calls that server. [Firebase](https://firebase.google.com/) is an excellent option for doing this and I use it in almost all my projects. [Firebase Functions](https://firebase.google.com/products/functions/) are really powerful but you are limited by Javascript or Typescript. What if you could use the same packages that you are using in the Flutter project, or better yet what if they both used the same?

![](../../../assets/r_2_t53hqci5ox.gif)

When you have a server project and a client project that communicate over a rest api or client sdk like Firebase then you will run into the problem that the server has models of objects stored and the client has models of the objects that are stored. This can lead to a serious mismatch when it changed without you knowing. GraphQL helps a lot with this since you define the model that you recieve. This approach allows your business logic to be always up to date for both the client and server.

Client Setup 
-------------

The first step is to just build your application. The only difference that we will make is keeping the UI and business logic separate. When starting out with Flutter it can be very easy to throw all the logic into the screen and calling setState when the data changes. Even the application when creating a new Flutter project does this. That's why [choosing a state management solution](https://flutter.dev/docs/development/data-and-backend/state-mgmt/options) is so important.

To make things clean and concise we will make 2 folders in our lib folder.

*   ui for all Flutter Widgets and Screens
    
*   src for all business logic, classes, models and utility functions
    

This will leave us with main.dart being only the entry point into our client application.

```javascript
import 'package:flutter/material.dart';

import 'plugins/desktop/desktop.dart';
import 'ui/home/screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      home: HomeScreen(),
    );
  }
}
```

Let’s Start by making a tab bar for the 2 screens. Create a file in the folder ui/home/screen.dart and add the following:

```javascript
import 'package:flutter/material.dart';

import '../counter/screen.dart';
import '../todo/screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;

@override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: <Widget>[
          CounterScreen(),
          TodosScreen(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (val) {
          if (mounted)
            setState(() {
              _currentIndex = val;
            });
        },
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.add),
            title: Text('Counter'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list),
            title: Text('Todos'),
          ),
        ],
      ),
    );
  }
}
```

This is just a basic screen and should look very normal.

### Counter Example

![](../../../assets/r_3_pwj25p3nfr.webp)

Now create a file ui/counter/screen.dart and add the following:

```dart
import 'package:flutter/material.dart';
import 'package:shared_dart/src/models/counter.dart';

class CounterScreen extends StatefulWidget {
  @override
  _CounterScreenState createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  CounterModel _counterModel = CounterModel();

void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counterModel.add();
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
        // Here we take the value from the MyCounterPage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text('Counter Screen'),
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
              '${_counterModel.count}',
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

This is the default counter app you get when you create a Flutter application but with one change, it uses `CounterModel` to hold the logic.

Create the counter model at src/models/counter.dart and add the following:

```dart
class CounterModel {
  CounterModel();

  int _count = 0;

  int get count => _count;

  void add() => _count++;

  void subtract() => _count--;

  void set(int val) => _count = val;
}
```

As you can see it is really easy to expose only what we want to while still having complete flexibility. You could use provider here if you choose, or even bloc and/or streams.

### Todo Example

![](../../../assets/r_4_4cia0ajhj0.webp)

Lets create a file at ui/todos/screen.dart and add the following:

```dart
import 'package:flutter/material.dart';

import '../../src/classes/todo.dart';
import '../../src/models/todos.dart';

class TodosScreen extends StatefulWidget {
  @override
  _TodosScreenState createState() => _TodosScreenState();
}

class _TodosScreenState extends State<TodosScreen> {
  final _model = TodosModel();
  List<ToDo> _todos;

@override
  void initState() {
    _model.getList().then((val) {
      if (mounted)
        setState(() {
          _todos = val;
        });
    });
    super.initState();
  }

@override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Todos Screen'),
      ),
      body: Builder(
        builder: (_) {
          if (_todos != null) {
            return ListView.builder(
              itemCount: _todos.length,
              itemBuilder: (context, index) {
                final _item = _todos[index];
                return ListTile(
                  title: Text(_item.title),
                  subtitle: Text(_item.completed ? 'Completed' : 'Pending'),
                );
              },
            );
          }
          return Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}
```

You will see that we have the logic in TodosModel and uses the class ToDo for toJson and fromJson.

Create a file at the location src/classes/todo.dart and add the following:

```dart
// To parse this JSON data, do
//
//     final toDo = toDoFromJson(jsonString);

import 'dart:convert';

List<ToDo> toDoFromJson(String str) => List<ToDo>.from(json.decode(str).map((x) => ToDo.fromJson(x)));

String toDoToJson(List<ToDo> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class ToDo {
    int userId;
    int id;
    String title;
    bool completed;

ToDo({
        this.userId,
        this.id,
        this.title,
        this.completed,
    });

factory ToDo.fromJson(Map<String, dynamic> json) => ToDo(
        userId: json["userId"],
        id: json["id"],
        title: json["title"],
        completed: json["completed"],
    );

Map<String, dynamic> toJson() => {
        "userId": userId,
        "id": id,
        "title": title,
        "completed": completed,
    };
}
```

and create the model src/models/todo.dart and add the following:

```dart
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:shared_dart/src/classes/todo.dart' as t;

class TodosModel {
  final kTodosUrl = '[https://jsonplaceholder.typicode.com/todos'](https://jsonplaceholder.typicode.com/todos');

Future<List<t.ToDo>> getList() async {
    final _response = await http.get(kTodosUrl);
    if (_response != null) {
      final _todos = t.toDoFromJson(_response.body);
      if (_todos != null) {
        return _todos;
      }
    }
    return [];
  }

Future<t.ToDo> getItem(int id) async {
    final _response = await http.get('$kTodosUrl/$id');
    if (_response != null) {
      final _todo = t.ToDo.fromJson(json.decode(_response.body));
      if (_todo != null) {
        return _todo;
      }
    }
    return null;
  }
}
```

Here we just get dummy data from a url that emits json and convert them to our classes. This is an example I want to show with networking. There is only one place that fetches the data.

### Run the Project (Web)

![](../../../assets/r_5_cpppxwnavj.webp)

![](../../../assets/r_6_7bhqlwxjfs.webp)

As you can see when you run your project on chrome you will get the same application that you got on mobile. Even the networking is working in the web. You can call the model and retrieve the list just like you would expect.

Server Setup
------------

> Now time for the magic..

In the root of the project folder create a file Dockerfile and add the following:

```markdown
# Use Google's official Dart image.
# [https://hub.docker.com/r/google/dart-runtime/](https://hub.docker.com/r/google/dart-runtime/)
FROM google/dart-runtime
```

Create another file at the root called service.yaml and add the following:

```python
apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: PROJECT_NAME
      namespace: default
    spec:
      template:
        spec:
          containers:
            - image: docker.io/YOUR_DOCKER_NAME/PROJECT_NAME
              env:
                - name: TARGET
                  value: "PROJECT_NAME v1"
```

Replace PROJECT\_NAME with your project name, mine is shared-dart for this example.

You will also need to replace YOUR\_DOCKER\_NAME with your docker username so the container can be deployed correctly.

Update your pubspec.yaml with the following:

```python
name: shared_dart
description: A new Flutter project.
publish_to: none
version: 1.0.0+1

environment:
  sdk: ">=2.1.0 <3.0.0"

dependencies:
  flutter:
    sdk: flutter
  shelf: ^0.7.3
  cupertino_icons: ^0.1.2
  http: ^0.12.0+2

dev_dependencies:
  flutter_test:
    sdk: flutter

flutter:
  uses-material-design: true
```

The important package here is shelf as it allows us to run a http server with dart.

Create a folder in the root of the project called bin then add a file server.dart and replace it with the following:

```dart
import 'dart:io';

import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as io;

import 'src/routing.dart';

void main() {
  final handler = const shelf.Pipeline()
      .addMiddleware(shelf.logRequests())
      .addHandler(RouteUtils.handler);

final port = int.tryParse(Platform.environment['PORT'] ?? '8080');
  final address = InternetAddress.anyIPv4;

io.serve(handler, address, port).then((server) {
    server.autoCompress = true;
    print('Serving at [http://${server.address.host}:${server.port}'](http://${server.address.host}:${server.port}'));
  });
}
```

This will tell the container what port to listen for and how to handle the requests.

Create a folder src in the bin folder and add a file routing.dart and replace the contents with the following:

```dart
import 'dart:async';

import 'package:shelf/shelf.dart' as shelf;

import 'controllers/index.dart';
import 'result.dart';

class RouteUtils {
  static FutureOr<shelf.Response> handler(shelf.Request request) {
    var component = request.url.pathSegments.first;
    var handler = _handlers(request)[component];
    if (handler == null) return shelf.Response.notFound(null);
    return handler;
  }

static Map<String, FutureOr<shelf.Response>> _handlers(
      shelf.Request request) {
    return {
      'info': ServerResponse('Info', body: {
        "version": 'v1.0.0',
        "status": "ok",
      }).ok(),
      'counter': CounterController().result(request),
      'todos': TodoController().result(request),
    };
  }
}
```

There is still nothing imported from our main project but you will start to see some similarities. Here we specify controllers for todos and counter url paths.

```dart
'counter': CounterController().result(request),
'todos': TodoController().result(request),
```

that means any url with the following:[https://mydomain.com/todos](https://mydomain.com/todos) , [https://mydomain.com/todos](https://mydomain.com/todos)/1

will get routed to the TodoController to handle the request.

> This is also the first time I found out about FutureOr. It allows you to return a sync or async function.

And important part about build a REST API is having a consistent response body, so here we can create a wrapper that adds fields we always want to return, like the status of the call, a message and the body.

Create a file at src/result.dart and add the following:

```dart
import 'dart:convert';

import 'package:shelf/shelf.dart' as shelf;

class ServerResponse {
  final String message;
  final dynamic body;
  final StatusType type;

ServerResponse(
    this.message, {
    this.type = StatusType.success,
    this.body,
  });

Map<String, dynamic> toJson() {
    return {
      "status": type.toString().replaceAll('StatusType.', ''),
      "message": message,
      "body": body ?? '',
    };
  }

String toJsonString() {
    return json.encode(toJson());
  }

shelf.Response ok() {
    return shelf.Response.ok(
      toJsonString(),
      headers: {
        'Content-Type': 'application/json',
      },
    );
  }
}

enum StatusType { success, error }

abstract class ResponseImpl {
  Future<shelf.Response> result(shelf.Request request);
}
```

This will always return json and the fields that we want to show. You could also include your paging meta data here.

Create a file in at the location src/controllers/counter.dart and add the following:

```dart
import 'package:shared_dart/src/models/counter.dart';
import 'package:shelf/shelf.dart' as shelf;

import '../result.dart';

class CounterController implements ResponseImpl {
  const CounterController();

@override
  Future<shelf.Response> result(shelf.Request request) async {
    final _model = CounterModel();
    final _params = request.url.queryParameters;
    if (_params != null) {
      final _val = int.tryParse(_params['count'] ?? '0');
      _model.set(_val);
    } else {
      _model.add();
    }
    return ServerResponse('Info', body: {
      "counter": _model.count,
    }).ok();
  }
}
```

You will see the import to the lib folder of the root project. Since it shares the pubspec.yaml all the packages can be shared. You can import the CounterModel that we created earlier.

Create a file in at the location src/controllers/todos.dart and add the following:

```dart
import 'package:shared_dart/src/models/todos.dart';
import 'package:shelf/src/request.dart';

import 'package:shelf/src/response.dart';

import '../result.dart';

class TodoController implements ResponseImpl {
  @override
  Future<Response> result(Request request) async {
    final _model = TodosModel();
    if (request.url.pathSegments.length > 1) {
      final _id = int.tryParse(request.url.pathSegments[1] ?? '1');
      final _todo = await _model.getItem(_id);
      return ServerResponse('Todo Item', body: _todo).ok();
    }
    final _todos = await _model.getList();
    return ServerResponse(
      'List Todos',
      body: _todos.map((t) => t.toJson()).toList(),
    ).ok();
  }
}
```

Just like before we are importing the TodosModel model from the lib folder.

For convenience add a file at the location src/controllers/index.dart and add the following:

```dart
export 'counter.dart';
export 'todo.dart';
```

This will make it easier to import all the controllers.

Run the Project (Server) 
-------------------------

If you are using [VSCode](https://code.visualstudio.com/) then you will need to update your launch.json with the following:

```javascript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: [https://go.microsoft.com/fwlink/?linkid=830387](https://go.microsoft.com/fwlink/?linkid=830387)
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Client",
            "request": "launch",
            "type": "dart",
            "program": "lib/main.dart"
        }, 
          {
            "name": "Server",
            "request": "launch",
            "type": "dart",
            "program": "bin/server.dart"
        }
    ]
}
```

Now when you hit run with Server selected you will see the output:

![](../../../assets/r_7_fph074ovtl.webp)

You can navigate to this in a browser but you can also work with this in [Postman](https://www.getpostman.com/).

![](../../../assets/r_8_3jwm0aouc0.webp)

![](../../../assets/r_9_ry6xjpbpbx.webp)

Just by adding to the url todos and todos/1 it will return different responses.

For the counter model we can use query parameters too!

![](../../../assets/r_10_ec9e6yhbxc.webp)

![](../../../assets/r_11_puha19uiln.webp)

Just by adding ?count=22 it will update the model with the input.

> Keep in mind this is running your Dart code from you lib folder in your Flutter project without needing the Flutter widgets!

As a side benefit we can also run this project on Desktop. Check out the final project for the desktop folders needed from [Flutter Desktop Embedding](https://github.com/google/flutter-desktop-embedding).

![](../../../assets/r_12_2rv9jnqeo0.webp)

![](../../../assets/r_13_k7amx8s1d5.webp)

Conclusion 
-----------

Now if you wanted to deploy the container to Cloud Run you could with the following command:

gcloud builds submit — tag gcr.io/YOUR\_GOOGLE\_PROJECT\_ID/PROJECT\_NAME .

Replace PROJECT\_NAME with your project name, mine is shared-dart for this example.

You will also need to replace YOUR\_GOOGLE\_PROJECT\_ID with your Google Cloud Project ID. You can create one [here](https://cloud.google.com/cloud-build/docs/quickstart-docker).

Again the final project source code is [here](https://github.com/rodydavis/shared_dart). Let me know your thoughts!
