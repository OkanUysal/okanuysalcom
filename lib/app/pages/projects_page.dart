import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  Future<List<dynamic>> _loadList(String assetPath) async {
    final str = await rootBundle.loadString(assetPath);
    final jsonMap = jsonDecode(str) as Map<String, dynamic>;
    final data = jsonMap['data'];
    if (data is List<dynamic>) return data;
    return const [];
  }

  Widget _sectionHeader(
    BuildContext context, {
    required AppThemeData theme,
    required SectionHeaderData header,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 260,
            child: SvgPicture.asset(
              PortfolioData.assetImagePath(header.avatarImagePath),
              fit: BoxFit.contain,
            ),
          ),
          const SizedBox(width: 18),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  header.title,
                  style: Theme.of(context).textTheme.displaySmall?.copyWith(
                        color: theme.text,
                        fontWeight: FontWeight.w900,
                      ),
                ),
                const SizedBox(height: 10),
                Text(
                  header.description,
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: theme.secondaryText,
                        height: 1.5,
                      ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = AppThemeData.black();

    return Scaffold(
      backgroundColor: theme.body,
      body: FutureBuilder<List<dynamic>>(
        future: _loadList('assets/shared/opensource/projects.json'),
        builder: (context, projectsSnap) {
          final projects = projectsSnap.data ?? const [];
          return ListView(
            children: [
              AppHeader(theme: theme),
              const SizedBox(height: 18),
              _sectionHeader(
                context,
                theme: theme,
                header: PortfolioData.projectsHeader,
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: projects.isEmpty
                    ? Text(
                        'No projects data available yet.',
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.secondaryText,
                              height: 1.6,
                            ),
                      )
                    : Column(
                        children: projects.map((repo) {
                          final name = repo['name'] ?? repo['full_name'] ?? 'Repo';
                          final desc = repo['description'] ?? '';
                          return Card(
                            color: theme.compImgHighlight,
                            margin: const EdgeInsets.only(bottom: 12),
                            child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    name.toString(),
                                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                          color: theme.text,
                                          fontWeight: FontWeight.w900,
                                        ),
                                  ),
                                  if (desc.toString().isNotEmpty) ...[
                                    const SizedBox(height: 8),
                                    Text(
                                      desc.toString(),
                                      style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                            color: theme.secondaryText,
                                            height: 1.5,
                                          ),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                          );
                        }).toList(),
                      ),
              ),
              const SizedBox(height: 26),
              _sectionHeader(
                context,
                theme: theme,
                header: PortfolioData.publicationsHeader,
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: FutureBuilder<List<dynamic>>(
                  future: _loadList('assets/shared/opensource/publications.json'),
                  builder: (context, pubSnap) {
                    final pubs = pubSnap.data ?? const [];
                    if (pubSnap.connectionState == ConnectionState.waiting) {
                      return const SizedBox.shrink();
                    }
                    return pubs.isEmpty
                        ? Text(
                            'No publications data available yet.',
                            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                  color: theme.secondaryText,
                                  height: 1.6,
                                ),
                          )
                        : Column(
                            children: pubs.map((pub) {
                              final name = pub['name'] ?? pub['title'] ?? 'Publication';
                              return Card(
                                color: theme.compImgHighlight,
                                margin: const EdgeInsets.only(bottom: 12),
                                child: Padding(
                                  padding: const EdgeInsets.all(16),
                                  child: Text(
                                    name.toString(),
                                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                          color: theme.text,
                                          fontWeight: FontWeight.w900,
                                        ),
                                  ),
                                ),
                              );
                            }).toList(),
                          );
                  },
                ),
              ),
              AppFooter(),
            ],
          );
        },
      ),
    );
  }
}


