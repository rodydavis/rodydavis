import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_highlighter/flutter_highlighter.dart';
import 'package:flutter_highlighter/themes/atom-one-dark.dart';
import 'package:flutter_highlighter/themes/atom-one-light.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seo_renderer/seo_renderer.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:markdown/markdown.dart' as md;

import 'hover_builder.dart';

class MarkdownView extends StatelessWidget {
  const MarkdownView({
    Key? key,
    required this.path,
    this.textScaleFactor = 1,
    this.shrinkWrap = false,
  }) : super(key: key);

  final String path;
  final double textScaleFactor;
  final bool shrinkWrap;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;
    return FutureBuilder<String?>(
      future: rootBundle.loadString(path),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          String content = snapshot.data!;
          // Remove front matter
          content = content.split('---').last;
          return Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 800),
              child: Markdown(
                selectable: true,
                data: content,
                shrinkWrap: shrinkWrap,
                inlineSyntaxes: [
                  md.InlineHtmlSyntax(),
                ],
                blockSyntaxes: const [
                  md.HeaderWithIdSyntax(),
                  md.FencedCodeBlockSyntax(),
                  md.SetextHeaderWithIdSyntax(),
                  md.TableSyntax(),
                ],
                extensionSet: md.ExtensionSet(
                  md.ExtensionSet.gitHubFlavored.blockSyntaxes,
                  [
                    md.EmojiSyntax(),
                    ...md.ExtensionSet.gitHubFlavored.inlineSyntaxes
                  ],
                ),
                styleSheet: MarkdownStyleSheet(
                  textScaleFactor: textScaleFactor,
                  p: textTheme.bodyLarge!.copyWith(
                    fontSize: 16,
                    color: colors.onSurface.withOpacity(0.72),
                  ),
                  a: TextStyle(
                    decoration: TextDecoration.underline,
                    color: colors.onSurface.withOpacity(0.72),
                  ),
                  h1: textTheme.displaySmall!.copyWith(
                    fontSize: 25,
                    color: colors.onSurface,
                  ),
                  h2: textTheme.headlineLarge!.copyWith(
                    fontSize: 20,
                    color: colors.onSurface,
                  ),
                  h3: textTheme.headlineMedium!.copyWith(
                    fontSize: 18,
                    color: colors.onSurface,
                  ),
                  h4: textTheme.headlineSmall!.copyWith(
                    fontSize: 16,
                    color: colors.onSurface,
                  ),
                  h5: textTheme.titleLarge!.copyWith(
                    fontSize: 16,
                    color: colors.onSurface,
                  ),
                  h6: textTheme.titleMedium!.copyWith(
                    fontSize: 16,
                    color: colors.onSurface,
                  ),
                  listBullet: textTheme.bodyLarge!.copyWith(
                    color: colors.onSurface,
                  ),
                  em: const TextStyle(fontStyle: FontStyle.italic),
                  strong: const TextStyle(fontWeight: FontWeight.bold),
                  blockquote: TextStyle(
                    fontStyle: FontStyle.italic,
                    fontWeight: FontWeight.w500,
                    color: colors.onSurfaceVariant,
                  ),
                  blockquoteDecoration: BoxDecoration(
                    color: colors.surfaceVariant,
                    borderRadius: BorderRadius.circular(4),
                  ),
                  code: const TextStyle(fontFamily: 'monospace'),
                  tableHead: const TextStyle(
                      fontSize: 16, fontWeight: FontWeight.w500),
                  tableBody: const TextStyle(
                      fontSize: 16, fontWeight: FontWeight.w500),
                  blockSpacing: 8,
                  listIndent: 32,
                  blockquotePadding: const EdgeInsets.all(8),
                  h1Padding: const EdgeInsets.symmetric(vertical: 8),
                  h2Padding: const EdgeInsets.symmetric(vertical: 8),
                  h3Padding: const EdgeInsets.symmetric(vertical: 8),
                  h4Padding: const EdgeInsets.symmetric(vertical: 8),
                  h5Padding: const EdgeInsets.symmetric(vertical: 8),
                  h6Padding: const EdgeInsets.symmetric(vertical: 8),
                  // codeblockPadding: const EdgeInsets.all(8),
                  // codeblockDecoration: BoxDecoration(
                  //   borderRadius: BorderRadius.circular(4),
                  //   color: colors.surfaceVariant,
                  // ),
                  horizontalRuleDecoration: BoxDecoration(
                    border: Border(
                      top: BorderSide(
                        color: colors.outline.withOpacity(0.4),
                        width: 1,
                      ),
                    ),
                  ),
                ),
                onTapLink: (text, href, title) {
                  final url = Uri.parse(href!);
                  if (url.isScheme('http') || url.isScheme('https')) {
                    launchUrl(url, mode: LaunchMode.externalApplication);
                  } else {
                    context.go(href);
                  }
                },
                builders: {
                  'code': CodeElementBuilder(),
                },
                imageBuilder: (uri, title, alt) {
                  return Center(
                    child: Tooltip(
                      message: alt ?? title ?? '',
                      child: ConstrainedBox(
                        constraints: const BoxConstraints(maxHeight: 500),
                        child: Image.network(
                          uri.toString(),
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          );
        }
        return const Center(child: CircularProgressIndicator());
      },
    );
  }
}

class CodeElementBuilder extends MarkdownElementBuilder {
  @override
  Widget? visitElementAfter(md.Element element, TextStyle? preferredStyle) {
    final contents = element.textContent;
    if (contents.split('\n').isEmpty || contents.split('\n').length == 1) {
      // Bold text
      return Builder(
        builder: (context) {
          return Text(
            contents,
            style: GoogleFonts.robotoMono().copyWith(
              fontWeight: FontWeight.bold,
              backgroundColor: Theme.of(context).colorScheme.surfaceVariant,
              color: Theme.of(context).colorScheme.onSurfaceVariant,
            ),
          );
        },
      );
    }

    var language = '';

    if (element.attributes['class'] != null) {
      String lg = element.attributes['class'] as String;
      language = lg.substring(9);
    }
    return SizedBox(
      width: double.infinity,
      child: HoverBuilder(
        builder: (context, hover) {
          final brightness = Theme.of(context).brightness;
          return Stack(
            children: [
              SizedBox(
                width: double.infinity,
                child: HighlightView(
                  contents,
                  language: language,
                  theme: brightness == Brightness.light
                      ? atomOneLightTheme
                      : atomOneDarkTheme,
                  padding: const EdgeInsets.all(8),
                  textStyle: GoogleFonts.robotoMono(),
                ),
              ),
              if (hover)
                Positioned(
                  top: 0,
                  right: 0,
                  child: IconButton(
                    icon: const Icon(Icons.copy),
                    onPressed: () async {
                      final messenger = ScaffoldMessenger.of(context);
                      await Clipboard.setData(
                        ClipboardData(text: contents),
                      );
                      messenger.showSnackBar(
                        const SnackBar(
                          content: Text('Copied to clipboard'),
                        ),
                      );
                    },
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}
