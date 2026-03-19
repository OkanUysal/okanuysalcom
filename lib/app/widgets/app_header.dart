import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';

class AppHeader extends StatelessWidget {
  final AppThemeData theme;

  const AppHeader({super.key, required this.theme});

  static const _items = [
    (label: 'Home', path: '/home'),
    (label: 'Education', path: '/education'),
    (label: 'Experience', path: '/experience'),
    (label: 'Projects', path: '/projects'),
    (label: 'Open Source', path: '/opensource'),
    (label: 'Contact', path: '/contact'),
  ];

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _Logo(theme: theme),
          if (width > 720)
            Row(
              children: _items
                  .map(
                    (item) => TextButton(
                      onPressed: () => context.go(item.path),
                      style: TextButton.styleFrom(
                        foregroundColor: theme.text,
                      ),
                      child: Text(item.label),
                    ),
                  )
                  .toList(),
            )
          else
            PopupMenuButton<String>(
              color: theme.body,
              itemBuilder: (context) => _items
                  .map(
                    (item) => PopupMenuItem<String>(
                      value: item.path,
                      child: Text(item.label),
                    ),
                  )
                  .toList(),
              onSelected: (path) => context.go(path),
              child: Icon(Icons.menu, color: theme.text),
            ),
        ],
      ),
    );
  }
}

class _Logo extends StatelessWidget {
  final AppThemeData theme;
  const _Logo({required this.theme});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: 'Logo',
      child: InkWell(
        onTap: () => context.go('/home'),
        child: Row(
          children: [
            Text('<', style: TextStyle(color: theme.text)),
            const SizedBox(width: 6),
            Text(
              PortfolioData.greeting.logoName,
              style: TextStyle(
                color: theme.text,
                fontWeight: FontWeight.w700,
                fontSize: 18,
              ),
            ),
            const SizedBox(width: 6),
            Text('/>', style: TextStyle(color: theme.text)),
          ],
        ),
      ),
    );
  }
}

