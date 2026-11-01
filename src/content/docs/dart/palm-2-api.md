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
  Learn how to call the PaLM 2 API using Dart and Flutter, including setup
  steps, dependency management, and API key handling.
embedding: >-
  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
related:
  - flutter/lit-interop.md
  - flutter/ssr-rfw.md
  - flutter/host-rest-api.md
  - flutter/getting-started.md
  - flutter/multi-touch-canvas.md
last_updated_metadata: '2026-11-01T02:28:37.462Z'
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
