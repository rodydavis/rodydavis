import 'package:flutter/material.dart';

import 'social_icon.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 40,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: const [
          SocialIcon(
            tooltip: 'Twitter Profile',
            url: 'https://twitter.com/rodydavis',
            path: 'assets/images/social/twitter.svg',
          ),
          SocialIcon(
            tooltip: 'Facebook Profile',
            url: 'https://facebook.com/rodydavisjr',
            path: 'assets/images/social/facebook.svg',
          ),
          SocialIcon(
            tooltip: 'LinkedIn Profile',
            url: 'https://www.linkedin.com/in/rodydavis',
            path: 'assets/images/social/linkedin.svg',
          ),
          SocialIcon(
            tooltip: 'YouTube Profile',
            url: 'https://www.youtube.com/rodydavis',
            path: 'assets/images/social/youtube.svg',
          ),
          SocialIcon(
            tooltip: 'Instagram Profile',
            url: 'https://www.instagram.com/rodydavisjr',
            path: 'assets/images/social/instagram.svg',
          ),
          SocialIcon(
            tooltip: 'GitHub Profile',
            url: 'https://www.github.com/rodydavis',
            path: 'assets/images/social/github.svg',
          ),
          // SocialIcon(
          //   tooltip: 'StackOverflow Profile',
          //   url: 'https://stackoverflow.com/users/1021946/rody-davis',
          //   path: 'assets/images/social/stackoverflow.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Medium Profile',
          //   url: 'https://medium.com/@rodydavis',
          //   path: 'assets/images/social/medium.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Dev.to Profile',
          //   url: 'https://dev.to/rodydavis',
          //   path: 'assets/images/social/dev.svg',
          // ),
          // SocialIcon(
          //   tooltip: 'Dart Pub Profile',
          //   url: 'https://pub.dev/publishers/rodydavis.com/packages',
          //   path: 'assets/images/social/dart.svg',
          // ),
          SocialIcon(
            tooltip: 'TikTok Profile',
            url: 'https://www.tiktok.com/@rodydavisjr',
            path: 'assets/images/social/tiktok.svg',
          ),
          SocialIcon(
            tooltip: 'RSS Feed',
            url: 'https://rodydavis.com/feed/feed.xml',
            path: 'assets/images/social/rss.svg',
          ),
        ],
      ),
    );
  }
}
