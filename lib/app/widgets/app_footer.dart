import 'package:flutter/material.dart';

import '../data/portfolio_data.dart';

class AppFooter extends StatelessWidget {
  const AppFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
      child: Center(
        child: Text(
          'Made by ${PortfolioData.greeting.title}',
          style: Theme.of(context).textTheme.bodyMedium,
        ),
      ),
    );
  }
}

