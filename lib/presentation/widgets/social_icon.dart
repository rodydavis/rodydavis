import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:seo/seo.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialIcon extends StatelessWidget {
  const SocialIcon({
    Key? key,
    required this.path,
    required this.url,
    required this.tooltip,
  }) : super(key: key);

  final String path;
  final String url;
  final String tooltip;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
      ),
      child: Tooltip(
        message: tooltip,
        child: Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: 8,
            vertical: 4,
          ),
          child: SvgPicture.asset(
            path,
            color: Theme.of(context).colorScheme.onSurface,
            width: 24,
            height: 24,
            semanticsLabel: tooltip,
            fit: BoxFit.contain,
          ),
        ),
      ),
    );
  }
}
