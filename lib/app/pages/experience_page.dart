import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';
import '../widgets/link_button.dart';

class ExperienceDataModel {
  final String title;
  final String subtitle;
  final String description;
  final String headerImagePath;
  final List<ExperienceSection> sections;

  ExperienceDataModel({
    required this.title,
    required this.subtitle,
    required this.description,
    required this.headerImagePath,
    required this.sections,
  });

  factory ExperienceDataModel.fromJson(Map<String, dynamic> json) {
    return ExperienceDataModel(
      title: json['title'] as String,
      subtitle: json['subtitle'] as String,
      description: json['description'] as String,
      headerImagePath: json['header_image_path'] as String,
      sections: (json['sections'] as List<dynamic>)
          .map((e) => ExperienceSection.fromJson(e as Map<String, dynamic>))
          .toList(),
    );
  }
}

class ExperienceSection {
  final String title;
  final List<ExperienceItem> experiences;

  ExperienceSection({required this.title, required this.experiences});

  factory ExperienceSection.fromJson(Map<String, dynamic> json) {
    return ExperienceSection(
      title: json['title'] as String,
      experiences: (json['experiences'] as List<dynamic>)
          .map((e) => ExperienceItem.fromJson(e as Map<String, dynamic>))
          .toList(),
    );
  }
}

class ExperienceItem {
  final String title;
  final String company;
  final String companyUrl;
  final String logoPath;
  final String duration;
  final String location;
  final String description;
  final Color color;

  ExperienceItem({
    required this.title,
    required this.company,
    required this.companyUrl,
    required this.logoPath,
    required this.duration,
    required this.location,
    required this.description,
    required this.color,
  });

  factory ExperienceItem.fromJson(Map<String, dynamic> json) {
    return ExperienceItem(
      title: json['title'] as String,
      company: json['company'] as String,
      companyUrl: json['company_url'] as String,
      logoPath: json['logo_path'] as String,
      duration: json['duration'] as String,
      location: json['location'] as String? ?? '',
      description: json['description'] as String? ?? '',
      color: _cssHexToColor(json['color'] as String? ?? '#000000'),
    );
  }

  static Color _cssHexToColor(String hex) {
    var clean = hex.replaceAll('#', '').trim();
    if (clean.length == 6) clean = 'FF$clean';
    return Color(int.parse(clean, radix: 16));
  }
}

class ExperiencePage extends StatelessWidget {
  const ExperiencePage({super.key});

  Future<ExperienceDataModel> _loadExperienceData() async {
    final str = await rootBundle.loadString('assets/shared/experience_data.json');
    final jsonMap = jsonDecode(str) as Map<String, dynamic>;
    return ExperienceDataModel.fromJson(jsonMap);
  }

  @override
  Widget build(BuildContext context) {
    final theme = AppThemeData.black();

    return Scaffold(
      backgroundColor: theme.body,
      body: FutureBuilder<ExperienceDataModel>(
        future: _loadExperienceData(),
        builder: (context, snapshot) {
          final data = snapshot.data;
          if (snapshot.connectionState == ConnectionState.waiting) {
            return ListView(
              children: [
                AppHeader(theme: theme),
                const SizedBox(height: 60),
                Center(child: CircularProgressIndicator(color: theme.text)),
              ],
            );
          }

          if (data == null) {
            return ListView(
              children: [
                AppHeader(theme: theme),
                const SizedBox(height: 60),
                const Center(child: Text('Experience data not found')),
                AppFooter(),
              ],
            );
          }

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
                        PortfolioData.assetImagePath(data.headerImagePath),
                        fit: BoxFit.contain,
                      ),
                    ),
                    const SizedBox(width: 18),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            data.title,
                            style: Theme.of(context)
                                .textTheme
                                .displaySmall
                                ?.copyWith(
                                  color: theme.text,
                                  fontWeight: FontWeight.w900,
                                ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            data.subtitle,
                            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                  color: theme.text,
                                  fontWeight: FontWeight.w700,
                                ),
                          ),
                          const SizedBox(height: 12),
                          Text(
                            data.description,
                            style:
                                Theme.of(context).textTheme.bodyLarge?.copyWith(
                                      color: theme.secondaryText,
                                      height: 1.5,
                                    ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: ExpansionTile(
                  tilePadding: EdgeInsets.zero,
                  title: Text(
                    'Experience',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          color: theme.text,
                          fontWeight: FontWeight.w900,
                        ),
                  ),
                  initiallyExpanded: true,
                  children: [
                    const SizedBox(height: 6),
                    ...data.sections.map((section) {
                      return Card(
                        color: theme.compImgHighlight,
                        margin: const EdgeInsets.only(bottom: 12),
                        child: ExpansionTile(
                          title: Text(
                            section.title,
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                  color: theme.text,
                                  fontWeight: FontWeight.w800,
                                ),
                          ),
                          children: section.experiences.map((exp) {
                            return Container(
                              padding: const EdgeInsets.all(14),
                              decoration: BoxDecoration(
                                border: Border(
                                  left: BorderSide(
                                    color: exp.color,
                                    width: 4,
                                  ),
                                ),
                              ),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(
                                    width: 84,
                                    child: Image.asset(
                                      PortfolioData.assetImagePath(exp.logoPath),
                                      fit: BoxFit.contain,
                                    ),
                                  ),
                                  const SizedBox(width: 14),
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          exp.title,
                                          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                                color: theme.text,
                                                fontWeight: FontWeight.w800,
                                              ),
                                        ),
                                        const SizedBox(height: 6),
                                        InkWell(
                                          onTap: () {
                                            // link buttons handle open; keep simple for now
                                          },
                                          child: Text(
                                            exp.company,
                                            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                                  color: theme.secondaryText,
                                                  fontWeight: FontWeight.w700,
                                                ),
                                          ),
                                        ),
                                        const SizedBox(height: 4),
                                        Text(
                                          '${exp.duration} • ${exp.location}',
                                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                                color: theme.secondaryText,
                                              ),
                                        ),
                                        const SizedBox(height: 10),
                                        Text(
                                          exp.description,
                                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                                color: theme.text,
                                                height: 1.45,
                                              ),
                                        ),
                                        const SizedBox(height: 10),
                                        LinkButton(
                                          text: 'Visit',
                                          url: exp.companyUrl,
                                          backgroundColor:
                                              Color.fromARGB(
                                            (exp.color.a * 0.25 * 255.0)
                                                .round()
                                                .clamp(0, 255)
                                                .toInt(),
                                            (exp.color.r * 255.0)
                                                .round()
                                                .clamp(0, 255)
                                                .toInt(),
                                            (exp.color.g * 255.0)
                                                .round()
                                                .clamp(0, 255)
                                                .toInt(),
                                            (exp.color.b * 255.0)
                                                .round()
                                                .clamp(0, 255)
                                                .toInt(),
                                          ),
                                          textColor: theme.text,
                                          newTab: true,
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            );
                          }).toList(),
                        ),
                      );
                    }),
                  ],
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


