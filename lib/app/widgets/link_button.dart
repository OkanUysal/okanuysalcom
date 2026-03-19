import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class LinkButton extends StatelessWidget {
  final String text;
  final String url;
  final bool newTab;
  final Color? backgroundColor;
  final Color? textColor;

  const LinkButton({
    super.key,
    required this.text,
    required this.url,
    this.newTab = true,
    this.backgroundColor,
    this.textColor,
  });

  Future<void> _open() async {
    final uri = Uri.parse(url);
    if (newTab) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    } else {
      await launchUrl(uri, mode: LaunchMode.platformDefault);
    }
  }

  @override
  Widget build(BuildContext context) {
    final bg = backgroundColor ?? Theme.of(context).colorScheme.primary;
    final fg = textColor ?? Theme.of(context).colorScheme.onPrimary;
    return InkWell(
      onTap: _open,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Text(
          text,
          style: TextStyle(color: fg, fontWeight: FontWeight.w700),
        ),
      ),
    );
  }
}

