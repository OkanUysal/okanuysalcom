import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';
import '../widgets/link_button.dart';

class EducationPage extends StatelessWidget {
  const EducationPage({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = AppThemeData.black();

    return Scaffold(
      backgroundColor: theme.body,
      body: ListView(
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
                    PortfolioData.assetImagePath('education.svg'),
                    fit: BoxFit.contain,
                  ),
                ),
                const SizedBox(width: 18),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Education',
                        style:
                            Theme.of(context).textTheme.displaySmall?.copyWith(
                                  color: theme.text,
                                  fontWeight: FontWeight.w800,
                                ),
                      ),
                      const SizedBox(height: 10),
                      Text(
                        'Basic Qualification and Certifcations',
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.text,
                              fontWeight: FontWeight.w600,
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
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Degrees Received',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: theme.text,
                        fontWeight: FontWeight.w800,
                      ),
                ),
                const SizedBox(height: 12),
                ...PortfolioData.degrees.map((degree) {
                  return Container(
                    margin: const EdgeInsets.only(bottom: 18),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: theme.compImgHighlight,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 90,
                          child: Image.asset(
                            PortfolioData.assetImagePath(degree.logoPath),
                            fit: BoxFit.contain,
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                degree.title,
                                style: Theme.of(context)
                                    .textTheme
                                    .titleLarge
                                    ?.copyWith(
                                      color: theme.text,
                                      fontWeight: FontWeight.w800,
                                    ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                degree.subtitle,
                                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                      color: theme.secondaryText,
                                      fontWeight: FontWeight.w600,
                                    ),
                              ),
                              const SizedBox(height: 8),
                              Text(
                                degree.duration,
                                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                      color: theme.secondaryText,
                                    ),
                              ),
                              const SizedBox(height: 10),
                              ...degree.descriptions.map(
                                (d) => Padding(
                                  padding: const EdgeInsets.only(bottom: 6),
                                  child: Text(
                                    d,
                                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                          color: theme.text,
                                          height: 1.35,
                                        ),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 10),
                              Align(
                                alignment: Alignment.centerLeft,
                                child: LinkButton(
                                  text: 'Visit Website',
                                  url: degree.websiteLink,
                                  backgroundColor: theme.headerColor,
                                  textColor: theme.text,
                                  newTab: true,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                }),
                const SizedBox(height: 20),
                Text(
                  'Certifications',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: theme.text,
                        fontWeight: FontWeight.w800,
                      ),
                ),
                const SizedBox(height: 12),
                ...PortfolioData.certifications.map((cert) {
                  return Container(
                    margin: const EdgeInsets.only(bottom: 18),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: theme.compImgHighlight,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 90,
                          child: Image.asset(
                            PortfolioData.assetImagePath(cert.logoPath),
                            fit: BoxFit.contain,
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 12, vertical: 6),
                                decoration: BoxDecoration(
                                  color: cert.colorCode,
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Text(
                                  'Certificate',
                                  style: Theme.of(context)
                                      .textTheme
                                      .titleMedium
                                      ?.copyWith(
                                        color: theme.body,
                                        fontWeight: FontWeight.w800,
                                      ),
                                ),
                              ),
                              const SizedBox(height: 10),
                              Text(
                                cert.title,
                                style: Theme.of(context)
                                    .textTheme
                                    .titleLarge
                                    ?.copyWith(
                                      color: theme.text,
                                      fontWeight: FontWeight.w800,
                                    ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                cert.subtitle,
                                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                      color: theme.secondaryText,
                                      fontWeight: FontWeight.w600,
                                    ),
                              ),
                              const SizedBox(height: 10),
                              LinkButton(
                                text: 'View Certificate',
                                url: cert.certificateLink,
                                backgroundColor: theme.headerColor,
                                textColor: theme.text,
                                newTab: true,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                }),
              ],
            ),
          ),
          AppFooter(),
        ],
      ),
    );
  }
}


