---
title: Calling the PaLM 2 API with Dart and Flutter
description: >
  Learn how to integrate the PaLM 2 API into your Flutter apps using Dart,
  including setting up API keys, creating prompt templates, and securely making
  API calls.
date: '2025-01-19 07:17:50.962Z'
draft: false
tags:
  - Dart
  - AI-ML
summary: >-
  This tutorial guides Flutter developers through integrating the PaLM 2 API
  into their apps using Dart, including setup, API key management, and best
  practices for security and abuse prevention.
embedding: >-
  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
related:
  - deep-linking-flutter-web.md
  - flutter-one-click-release.md
  - flutter-and-xcode-cloud.md
  - fastlane-and-flutter.md
  - flutter-ssr-rfw.md
---

Example 
--------

### Prompt Template 

To call the API with a prompt we can start by creating a template:

This post will talk about how to call the PaLM 2 API with pure Dart in Flutter.

Getting Started 
----------------

> Make sure you have the [Flutter SDK installed](https://docs.flutter.dev/get-started/install) and an [API key for the PaLM API](https://developers.generativeai.google/tutorials/setup).

In a terminal window create a new directory and Flutter project:

```markdown
mkdir flutter_ai_example
cd flutter_ai_example
flutter create .
```

Then run the following to add the required dependencies to you `pubspec.yaml`:

```markdown
flutter pub add flutter_dotenv mustache_template http
```

### API Keys 

Now create a `.env` and the root of the project and add the [API key](https://developers.generativeai.google/tutorials/setup) you created earlier to the file:

```markdown
GOOGLE_AI_API_KEY=[Your API Key Here]
```

![](../../assets/palm_1_q1r92hn4gb.png)

Update `lib/main.dart` main method to be async and load the `.env` file on launch:

```dart
+ import 'package:flutter_dotenv/flutter_dotenv.dart';

- void main() {
+ Future<void> main() async {
+	await dotenv.load(fileName: ".env");
```

> This example loads the API key into the bundle as plain text but for production apps you need to call the API from a server

Firebase has an [extension for securely calling](https://extensions.dev/extensions/googlecloud/palm-secure-backend) the API from your mobile app. 🎉

![](../../assets/palm_2_twuynn8nx3.png)

In addition you can help prevent abuse to your API by using [App Check](https://firebase.google.com/docs/app-check). 🔐

If you want to learn more check out [this codelab](https://firebase.google.com/codelabs/appcheck-web#0). 👀

![](../../assets/palm_3_mbtl09n8wz.png)

### API Wrapper 

Create a new file called `lib/palm_api.dart` and add the following:

```dart
import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:mustache_template/mustache_template.dart';
import 'package:http/http.dart' as http;

class PalmApi {
  final String template;
  final String model;

  PalmApi(
    this.template, {
    this.model = 'text-bison-001',
    this.settings = const {
      "temperature": 0.7,
      "top_k": 40,
      "top_p": 0.95,
      "candidate_count": 1,
      "max_output_tokens": 1024,
      "stop_sequences": [],
      "safety_settings": [
        {"category": "HARM_CATEGORY_DEROGATORY", "threshold": 1},
        {"category": "HARM_CATEGORY_TOXICITY", "threshold": 1},
        {"category": "HARM_CATEGORY_VIOLENCE", "threshold": 2},
        {"category": "HARM_CATEGORY_SEXUAL", "threshold": 2},
        {"category": "HARM_CATEGORY_MEDICAL", "threshold": 2},
        {"category": "HARM_CATEGORY_DANGEROUS", "threshold": 2}
      ]
    },
  });

  Uri _createUrl(String apiKey) {
    const domain = 'https://generativelanguage.googleapis.com';
    final path = 'v1beta3/models/$model:generateText';
    return Uri.parse('$domain/$path?key=$apiKey');
  }

  final Map<String, Object?> settings;

  Future<List<String>> execute([Map<String, Object?> args = const {}]) async {
    // Load the API key from .env
    final apiKey = dotenv.env['GOOGLE_AI_API_KEY'];
    if (apiKey == null) throw Exception('GOOGLE_AI_API_KEY Required in .env');

    // Create the API url to call the correct model
    final uri = _createUrl(apiKey);

    // Render the prompt with the tokens
    final text = Template(template).renderString(args);

    // Call the API with the model settings and prompt template
    final response = await http.post(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        "prompt": {"text": text},
        ...settings
      }),
    );

    // Check for a successful response and parse out the results
    if (response.statusCode == 200) {
      final body = response.body;
      final json = jsonDecode(body) as Map<String, dynamic>;
      final candidates = (json['candidates'] as List<dynamic>)
          .map((e) => e as Map<String, dynamic>)
          .toList();
      return candidates.map((e) => e['output'] as String).toList();
    }

    // Default to empty result set
    return [];
  }
}
```

Here we are using [Mustache](https://mustache.github.io/) to add tokens to our prompt that we pass to the API. This will feel familiar if you are used to working with [MakerSuite](https://developers.generativeai.google/products/makersuite) and makes it easier to iterate on prompts and desired outputs.

> You can also copy the config from MakerSuite if you want to change the model or other settings.

Example 
--------

### Prompt Template 

To call the API with a prompt we can start by creating a template:

```dart
const _template = '''
Generate a valid SVG that does not include animations based on the following UI description "{{description}}".

Make sure that the content is centered in the middle of the svg.

The width will be {{width}}.
The height will be {{height}}.
The viewbox will be 0 0 {{width}} {{height}}.
''';
```

Here we are adding tokens for description, width, and height that we will pass in later. Notice that the template is a `const` since it will reuse this string at compile time.

Now we can create the API wrapper:

```dart
final api = PalmApi(_template);
```

### Passing Tokens 

To call the API we can pass in the tokens we defined earlier:

```dart
final results = await api.execute({
  'description': 'Red rectangle with blue circle',
  'width': 300,
  'height': 600,
});
```

Since the API can return different results we can check for just the SVG code and extract it out:

```dart
final res = results.first;
var result = res.trim();
final startIdx = result.indexOf('```');
final endIdx = result.lastIndexOf('```');
result = result.substring(startIdx + 3, endIdx).trim();
if (result.startsWith('svg')) {
  result = result.replaceFirst('svg', '').trim();
}
if (result.startsWith('xml')) {
  result = result.replaceFirst('xml', '').trim();
}
result = result.trim();
```

If `result` is not empty then we can work with it as an SVG string now 🎉

```dart
import 'package:flutter_svg/flutter_svg.dart';
...
SvgPicture(SvgStringLoader(result))
```

Conclusion 
-----------

If you still want to explore PaLM 2 in Flutter further check out this [codelab](https://codelabs.developers.google.com/haiku-generator#0).
