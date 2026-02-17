---
title: Host your Flutter Project as a REST API
description: >
  Learn how to structure a Flutter project to reuse models and business logic
  across iOS, Android, Web, desktop platforms, and a REST API deployable to
  Google Cloud Run, enabling a single codebase for both client and server.
date: '2025-01-20 00:30:40.634Z'
draft: false
tags:
  - Dart
  - Flutter
  - Docker
  - REST
summary: >-
  Create a single Flutter project with a shared Dart library for models and
  business logic, enabling cross-platform development (iOS, Android, Web, etc.)
  and a REST API interface deployable to Google Cloud Run.
embedding: >-
  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
related:
  - flutter-one-click-release.md
  - snippets/flutter-master-detail-view.md
  - first-flutter-project.md
  - flutter-cheat-sheet.md
  - fastlane-and-flutter.md
---

After you build your flutter project you may want to reuse the models and business logic from your lib folder. I will show you how to go about setting up the project to have iOS, Android, Web, Windows, MacOS, Linux and a REST API interface with one project. The REST API can also be deploy to Google Cloud Run for Dart everywhere.

![](../../assets/r_1_gl7e2erkta.gif)

> One Codebase for Client and Sever.

This will allow you to expose your Dart models as a REST API and run your business logic from your lib folder while the application runs the models as they are. [Here](https://github.com/rodydavis/shared_dart) is the final project.

Setting Up 
-----------

As with any Flutter project I am going to assume that you already have [Flutter](https://flutter.dev/) installed on your machine and that you can create a project. This is a intermediate level difficulty so read on if you are up to the challenge. You will also need to know the basics of [Docker](https://www.docker.com/).

Why one project? 
-----------------

It may not be obvious but when building complex applications you will at some point have a server and an application that calls that server. [Firebase](https://firebase.google.com/) is an excellent option for doing this and I use it in almost all my projects. [Firebase Functions](https://firebase.google.com/products/functions/) are really powerful but you are limited by Javascript or Typescript. What if you could use the same packages that you are using in the Flutter project, or better yet what if they both used the same?

![](../../assets/r_2_t53hqci5ox.gif)

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

![](../../assets/r_3_pwj25p3nfr.webp)

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

![](../../assets/r_4_4cia0ajhj0.webp)

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

![](../../assets/r_5_cpppxwnavj.webp)

![](../../assets/r_6_7bhqlwxjfs.webp)

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

![](../../assets/r_7_fph074ovtl.webp)

You can navigate to this in a browser but you can also work with this in [Postman](https://www.getpostman.com/).

![](../../assets/r_8_3jwm0aouc0.webp)

![](../../assets/r_9_ry6xjpbpbx.webp)

Just by adding to the url todos and todos/1 it will return different responses.

For the counter model we can use query parameters too!

![](../../assets/r_10_ec9e6yhbxc.webp)

![](../../assets/r_11_puha19uiln.webp)

Just by adding ?count=22 it will update the model with the input.

> Keep in mind this is running your Dart code from you lib folder in your Flutter project without needing the Flutter widgets!

As a side benefit we can also run this project on Desktop. Check out the final project for the desktop folders needed from [Flutter Desktop Embedding](https://github.com/google/flutter-desktop-embedding).

![](../../assets/r_12_2rv9jnqeo0.webp)

![](../../assets/r_13_k7amx8s1d5.webp)

Conclusion 
-----------

Now if you wanted to deploy the container to Cloud Run you could with the following command:

gcloud builds submit — tag gcr.io/YOUR\_GOOGLE\_PROJECT\_ID/PROJECT\_NAME .

Replace PROJECT\_NAME with your project name, mine is shared-dart for this example.

You will also need to replace YOUR\_GOOGLE\_PROJECT\_ID with your Google Cloud Project ID. You can create one [here](https://cloud.google.com/cloud-build/docs/quickstart-docker).

Again the final project source code is [here](https://github.com/rodydavis/shared_dart). Let me know your thoughts!
