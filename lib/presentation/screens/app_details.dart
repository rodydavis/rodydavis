import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../data/source/module.dart';
import '../extensions.dart';
import '../widgets/file_header.dart';
import '../widgets/footer.dart';
import '../widgets/markdown_view.dart';

class AppDetails extends ConsumerWidget {
  const AppDetails({Key? key, required this.id}) : super(key: key);

  final String id;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final files = ref.watch(filesProvider).getApps();
    final file = files.firstWhereOrNull((element) => element.name == id);
    if (file == null) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('App not found'),
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: () => context.$go('/apps'),
              child: const Text('Go back'),
            ),
          ],
        ),
      );
    }
    return Scrollbar(
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            FileHeader(file: file, link: false),
            const SizedBox(height: 8),
            MarkdownView(
              path: 'assets/data/apps/$id.md',
              shrinkWrap: true,
            ),
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              alignment: WrapAlignment.center,
              children: [
                if (file.apple != null)
                  _ImageButton(
                    url: file.apple!,
                    image: 'assets/images/app_store.png',
                  ),
                if (file.google != null)
                  _ImageButton(
                    url: file.google!,
                    image: 'assets/images/google_play.png',
                  ),
                if (file.demo != null)
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 8),
                    child: SizedBox(
                      width: 200,
                      height: 60,
                      child: ElevatedButton.icon(
                        onPressed: () => launchUrl(
                          Uri.parse(file.demo!),
                          mode: LaunchMode.externalApplication,
                        ),
                        label: const Text('Launch'),
                        icon: const Icon(Icons.exit_to_app),
                      ),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 8),
            const Footer(),
            const SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}

class _ImageButton extends StatelessWidget {
  const _ImageButton({
    Key? key,
    required this.url,
    this.image,
    // ignore: unused_element
    this.child,
  }) : super(key: key);

  final String url;
  final String? image;
  final Widget? child;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
      ),
      child: SizedBox(
        width: 200,
        height: 60,
        child: child ?? (image != null ? Image.asset(image!) : null),
      ),
    );
  }
}
