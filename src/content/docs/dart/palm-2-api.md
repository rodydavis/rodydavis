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
  - flutter/host-rest-api.md
  - videos/take-5/your-first-flutter-project.mdx
  - videos/ai/how-to-connect-interfaces-to-the-cloud-with-ai-agents.mdx
  - lit/making-a-piano.md
  - videos/take-5/internationalization-flutter.mdx
last_updated_metadata: '2026-05-23T00:09:21.746Z'
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
