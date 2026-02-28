---
title: Calling the PaLM 2 API with Dart and Flutter
date: '2025-01-19 07:17:50.962Z'
draft: false
tags:
  - flutter
  - firebase
  - dart
  - github
  - web
  - talk
  - google
summary: >-
  This tutorial guides Flutter developers through calling the PaLM 2 API using
  Dart, including setup, API key management, and an example API wrapper.
embedding: >-
  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
related:
  - flutter/host-rest-api.md
  - videos/take-5/your-first-flutter-project.md
  - flutter/web-deep-linking.md
  - flutter/getting-started.md
  - flutter/native-cross-platform.md
---

# Calling the PaLM 2 API with Dart and Flutter

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

![](../../../assets/palm_1_q1r92hn4gb.png)

Update `lib/main.dart` main method to be async and load the `.env` file on launch:

```dart
+ import 'package:flutter_dotenv/flutter_dotenv.dart';

- void main() {
+ Future<void> main() async {
+	await dotenv.load(fileName: ".env");
```

> This example loads the API key into the bundle as plain text but for production apps you need to call the API from a server

Firebase has an [extension for securely calling](https://extensions.dev/extensions/googlecloud/palm-secure-backend) the API from your mobile app. 🎉

![](../../../assets/palm_2_twuynn8nx3.png)

In addition you can help prevent abuse to your API by using [App Check](https://firebase.google.com/docs/app-check). 🔐

If you want to learn more check out [this codelab](https://firebase.google.com/codelabs/appcheck-web#0). 👀

![](../../../assets/palm_3_mbtl09n8wz.png)

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
