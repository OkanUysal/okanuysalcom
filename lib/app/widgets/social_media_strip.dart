import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';

Future<void> _openUrl(String url) async {
  final uri = Uri.parse(url);
  if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
    throw Exception('Could not launch $url');
  }
}

FaIconData _iconForFontAwesome(String faName) {
  switch (faName) {
    case 'fa-github':
      return FontAwesomeIcons.github;
    case 'fa-linkedin-in':
      return FontAwesomeIcons.linkedinIn;
    case 'fa-google':
      return FontAwesomeIcons.google;
    case 'fa-google-play':
      return FontAwesomeIcons.googlePlay;
    default:
      return FontAwesomeIcons.circle;
  }
}

class SocialMediaStrip extends StatelessWidget {
  final AppThemeData theme;
  final List<SocialMediaLink> links;

  const SocialMediaStrip({
    super.key,
    required this.theme,
    this.links = const [],
  });

  @override
  Widget build(BuildContext context) {
    final items = links.isEmpty ? PortfolioData.socialMediaLinks : links;

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: items
          .map(
            (link) => Padding(
              padding: const EdgeInsets.only(right: 10),
              child: InkWell(
                onTap: () => _openUrl(link.link),
                child: Container(
                  width: 42,
                  height: 42,
                  decoration: BoxDecoration(
                    color: link.backgroundColor,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: FaIcon(
                    _iconForFontAwesome(link.fontAwesomeIcon),
                    color: theme.highlight,
                    size: 18,
                  ),
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}

