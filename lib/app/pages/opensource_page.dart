import 'dart:convert';

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';

class OpensourcePage extends StatelessWidget {
  const OpensourcePage({super.key});

  Future<Map<String, int>> _loadCounts(String assetPath, List<String> keys) async {
    final str = await rootBundle.loadString(assetPath);
    final jsonRoot = jsonDecode(str);

    final result = <String, int>{};
    for (final k in keys) {
      result[k] = 0;
    }

    if (jsonRoot is Map<String, dynamic>) {
      for (final k in keys) {
        final v = jsonRoot[k];
        if (v is num) result[k] = v.toInt();
      }
    }

    return result;
  }

  Future<List<dynamic>> _loadList(String assetPath) async {
    final str = await rootBundle.loadString(assetPath);
    final jsonMap = jsonDecode(str) as Map<String, dynamic>;
    final data = jsonMap['data'];
    if (data is List<dynamic>) return data;
    return const [];
  }

  Widget _donut(
    BuildContext context, {
    required AppThemeData theme,
    required String title,
    required List<(String label, int value, Color color)> sections,
  }) {
    final total = sections.fold<int>(0, (p, e) => p + e.$2);

    final pieSections = sections
        .map(
          (s) => PieChartSectionData(
            value: s.$2.toDouble(),
            color: s.$3,
            title: '',
          ),
        )
        .toList();

    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      color: theme.compImgHighlight,
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    color: theme.text,
                    fontWeight: FontWeight.w900,
                  ),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 220,
              child: PieChart(
                PieChartData(
                  sections: total == 0 ? [] : pieSections,
                  centerSpaceRadius: 65,
                  sectionsSpace: 0,
                  borderData: FlBorderData(show: false),
                ),
              ),
            ),
            if (total == 0)
              Text(
                'No data yet.',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: theme.secondaryText,
                    ),
              ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = AppThemeData.black();

    return Scaffold(
      backgroundColor: theme.body,
      body: FutureBuilder(
        future: Future.wait([
          _loadCounts('assets/shared/opensource/issues.json', ['open', 'closed']),
          _loadCounts('assets/shared/opensource/pull_requests.json', ['open', 'merged', 'closed']),
          _loadList('assets/shared/opensource/organizations.json'),
          _loadList('assets/shared/opensource/issues.json'),
          _loadList('assets/shared/opensource/pull_requests.json'),
          _loadList('assets/shared/opensource/projects.json'),
        ]),
        builder: (context, snap) {
          if (snap.connectionState == ConnectionState.waiting) {
            return ListView(
              children: [
                AppHeader(theme: theme),
                const SizedBox(height: 60),
                Center(child: CircularProgressIndicator(color: theme.text)),
              ],
            );
          }

          final results = snap.data as List<dynamic>? ?? [];
          if (results.length < 2) {
            return ListView(
              children: [
                AppHeader(theme: theme),
                const SizedBox(height: 60),
                Center(
                  child: Text(
                    'Open source data not available.',
                    style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                          color: theme.secondaryText,
                        ),
                  ),
                ),
                AppFooter(),
              ],
            );
          }

          final issuesCounts = (results[0] as Map?)?.cast<String, dynamic>() ?? {};
          final prCounts = (results[1] as Map?)?.cast<String, dynamic>() ?? {};
          final organizations = results[2] as List<dynamic>? ?? const [];
          final issues = results[3] as List<dynamic>? ?? const [];
          final prs = results[4] as List<dynamic>? ?? const [];

          final openI = (issuesCounts['open'] as int?) ?? 0;
          final closedI = (issuesCounts['closed'] as int?) ?? 0;
          final openPR = (prCounts['open'] as int?) ?? 0;
          final mergedPR = (prCounts['merged'] as int?) ?? 0;
          final closedPR = (prCounts['closed'] as int?) ?? 0;

          return ListView(
            children: [
              AppHeader(theme: theme),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(
                      width: 260,
                      child: SvgPicture.asset(
                        PortfolioData.assetImagePath('jsFramework.svg'),
                        fit: BoxFit.contain,
                      ),
                    ),
                    const SizedBox(width: 18),
                    Expanded(
                      child: Text(
                        'Open Source',
                        style: Theme.of(context).textTheme.displaySmall?.copyWith(
                              color: theme.text,
                              fontWeight: FontWeight.w900,
                            ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Contributed Organizations',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            color: theme.text,
                            fontWeight: FontWeight.w900,
                          ),
                    ),
                    const SizedBox(height: 12),
                    organizations.isEmpty
                        ? Text(
                            'No organizations data yet.',
                            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                  color: theme.secondaryText,
                                ),
                          )
                        : Wrap(
                            spacing: 12,
                            runSpacing: 12,
                            children: organizations.map((org) {
                              final avatarUrl = org is Map ? org['avatarUrl'] : null;
                              final login = org is Map ? org['login'] : null;
                              return Container(
                                width: 74,
                                height: 74,
                                decoration: BoxDecoration(
                                  color: theme.compImgHighlight,
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: avatarUrl is String && avatarUrl.isNotEmpty
                                    ? ClipRRect(
                                        borderRadius: BorderRadius.circular(16),
                                        child: Image.network(avatarUrl, fit: BoxFit.cover),
                                      )
                                    : Center(child: Text(login?.toString() ?? '')),
                              );
                            }).toList(),
                          ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Column(
                  children: [
                    _donut(
                      context,
                      theme: theme,
                      title: 'Issue Distribution',
                      sections: [
                        ('Open', openI, const Color(0xFF28a745)),
                        ('Closed', closedI, const Color(0xFFd73a49)),
                      ],
                    ),
                    _donut(
                      context,
                      theme: theme,
                      title: 'Pull Request Distribution',
                      sections: [
                        ('Open', openPR, const Color(0xFF28a745)),
                        ('Merged', mergedPR, const Color(0xFF6f42c1)),
                        ('Closed', closedPR, const Color(0xFFd73a49)),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Text(
                  'Issues: ${issues.length} • Pull Requests: ${prs.length}',
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: theme.secondaryText,
                      ),
                ),
              ),
              const SizedBox(height: 16),
              AppFooter(),
            ],
          );
        },
      ),
    );
  }
}


