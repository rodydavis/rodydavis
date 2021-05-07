---
layout: layouts/post.njk
title: "Creating Your First Flutter Project"
date: 2019-04-28
categories: [flutter]
hasComments: 'true'
---

Flutter is a UI Toolkit from Google allowing you to create expressive and unique experiences unmatched on any platform. You can write your UI once and run it everywhere. Yes everywhere! Web, iOS, Android, Windows, Linux, MacOS, Raspberry PI and much more…

<iframe src="https://medium.com/media/f76ce9fa69d591d191fb2d83334153d7" frameborder=0></iframe>

If you prefer a video you can follow the YouTube series I am doing called “Flutter Take 5” where I explore topics that you encounter when building a Flutter application. I will also give you tips and tricks as I go through the series.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/rtBkU4pvHcw" frameborder="0" allowfullscreen></iframe></center>

## What is Flutter

Flutter recently crossed React Native on Github and now has more than 2 million developers using Flutter to create applications. There are more than 50,000 apps on Google Play alone published with Flutter.
[**Flutter - Beautiful native apps in record time**
*Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from…*flutter.dev](https://flutter.dev/)

## Getting Started

Getting started is very easy once you get the SDK installed. After it is installed creating new applications, plugins and packages is lighting fast. Follow this guide to install Flutter:
[**Install**
*How to set up your code editor.*flutter.dev](https://flutter.dev/docs/get-started/install)

One nice thing about Flutter is that it is developed in the open as an open source project that anyone can contribute to. If there is something missing you can easily fork the repo and make a PR for the missing functionality.

<iframe src="https://medium.com/media/8cce835d2d6193d6b3cd27468349b02a" frameborder=0></iframe>

## Create the Project

Now that you have Flutter installed it is time to create your first (Of Many 😉) Flutter project! Open up your terminal and navigate to wherever you want the application folder to be created. Once you “cd” into the directory you can type the following:

```bash
$ flutter create my_awesome_project
```

You can replace “my_awesome_project” with whatever you want the project to be called. It is important to use snake_case as it is the valid syntax for project names in dart.

<iframe src="https://medium.com/media/e92b75a1454d3a24dda41a5266ee1936" frameborder=0></iframe>

Congratulations you just created your first project!

## Open the Project

So you may be wondering what we just created so let us dive in to the details. You can open up you project in VSCode if you have it installed by typing the following into terminal:

```bash
$ cd my_awesome_project && code .
```

You can open up the folder in your favorite IDE if you prefer. Two important files to notice are the pubspec.yaml and lib/main.dart

Your UI and Logic is located at “lib/main.dart” and you should see the following:

<iframe src="https://medium.com/media/0e7b12e3b326ec2802a9a5a38d7c39d6" frameborder=0></iframe>

You can define any dependencies and plugins needed for the application at “pubspec.yaml” and you should see the following:

<iframe src="https://medium.com/media/8cbad32b9a14728b5a2dbb1b8d0bcab4" frameborder=0></iframe>

## Running the Project

Running the application is very easy too. While there are buttons in all the IDEs you can also run your project from the command line for quick testing. You can also configure [Flutter for Desktop](https://flutter.dev/desktop) and no need to wait for an emulator to warm up. Open your project and enter the following into terminal:

```bash
$ flutter run -d macos
```

Notice the “-d macos” as you can customize what device you want to run on. You should see the following in terminal:

```bash
Building macOS application...                                           
Syncing files to device macOS...                                   141ms

Flutter run key commands.
r Hot reload. 🔥🔥🔥
R Hot restart.
h Repeat this help message.
d Detach (terminate "flutter run" but leave application running).
c Clear the screen
q Quit (terminate the application on the device).
An Observatory debugger and profiler on macOS is available at: [http://127.0.0.1:58932/f1Mspofty_k=/](http://127.0.0.1:58932/f1Mspofty_k=/)
Application finished.
```

You can also run multiple devices at the same time. You can find more info on the [Flutter Octopus here](https://github.com/flutter/flutter/wiki/Multi-device-debugging-in-VS-Code). If everything went well you should see the following application launch:

![](https://cdn-images-1.medium.com/max/3560/1*O3W-7Ge-qfMk7i4CgqN-oQ.png)

It is a pretty basic application at this point but it is important to show how easy it is to change the state in the application. You can rebuild the UI just by calling “setState()”.

## Testing the Project

Testing is one of the reasons I love Flutter so much and it is dead simple to run and write tests for the project. If you look at the file “test/widget_test.dart” you should see the following:

<iframe src="https://medium.com/media/0906ce21f6d0fc21a4f1c348cb7cd6cd" frameborder=0></iframe>

You can run these tests very easily. Open your project and type the following into the terminal:

```bash
$ flutter test
00:07 +1: All tests passed!
```

Just like that all your tests will run and you can catch any bugs you missed.

<iframe src="https://medium.com/media/2c0ca7eeb14d9eec543125f78fcead9c" frameborder=0></iframe>

You can also generate code coverage for your applications easily by typing the following:

```bash
$ flutter test --coverage
```

This will generate a new file at “coverage/lcov.info” and will read the following:

<iframe src="https://medium.com/media/81c45c00e752b960fa4bacaa5d59c718" frameborder=0></iframe>

You can now easily create badges and graphs with the LCOV data. Here is a package that will make that easier:
[**test_coverage | Dart Package**
*Command line utility to run tests in Dart VM and collect coverage data.*pub.dev](https://pub.dev/packages/test_coverage)

## Conclusion

Flutter makes it possible to build applications very quickly that do not depend on web or mobile technologies. It can familiar to writing a game as you have to design all your own UI. You can find the final source code here:
[**rodydavis/flutter_take_5**
*A new Flutter project. This project is a starting point for a Flutter application. A few resources to get you started…*github.com](https://github.com/rodydavis/flutter_take_5/tree/master/01_your_first_project)

You can also find the Flutter source code here:
[**flutter/flutter**
*Flutter makes it easy and fast to build beautiful apps for mobile and beyond. - flutter/flutter*github.com](https://github.com/flutter/flutter)
