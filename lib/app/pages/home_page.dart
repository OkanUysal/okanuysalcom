import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';
import '../widgets/link_button.dart';
import '../widgets/social_media_strip.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  String _skillSvgForFileName(String fileName) {
    switch (fileName) {
      case 'DataScienceImg':
        return 'data_science.svg';
      case 'FullStackImg':
        return 'fullstack.svg';
      case 'CloudInfraImg':
        return 'cloud_infrastructure.svg';
      case 'DesignImg':
        return 'ui_ux_design.svg';
      default:
        return 'ui_ux_design.svg';
    }
  }

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
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  PortfolioData.greeting.title,
                  style: Theme.of(context).textTheme.displayLarge?.copyWith(
                        fontWeight: FontWeight.w800,
                        color: theme.text,
                      ),
                ),
                const SizedBox(height: 6),
                Text(
                  '( ${PortfolioData.greeting.nickname} )',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: theme.text,
                        fontWeight: FontWeight.w600,
                      ),
                ),
                const SizedBox(height: 14),
                Text(
                  PortfolioData.greeting.subTitle,
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: theme.secondaryText,
                        height: 1.4,
                      ),
                ),
                const SizedBox(height: 18),
                SocialMediaStrip(theme: theme),
                const SizedBox(height: 18),
                LinkButton(
                  text: '⭐ Star Me On Github',
                  url: PortfolioData.greeting.portfolioRepository,
                  newTab: true,
                  backgroundColor: theme.highlight,
                  textColor: theme.text,
                ),
              ],
            ),
          ),
          const SizedBox(height: 26),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'What I Do?',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        color: theme.text,
                        fontWeight: FontWeight.w800,
                      ),
                ),
                const SizedBox(height: 18),
                ...PortfolioData.skills.data.map(
                  (skill) => Container(
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
                          width: 180,
                          child: SvgPicture.asset(
                            PortfolioData.assetImagePath(
                              _skillSvgForFileName(skill.fileName),
                            ),
                            fit: BoxFit.contain,
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: Text(
                            skill.title,
                            style:
                                Theme.of(context).textTheme.titleLarge?.copyWith(
                                      color: theme.text,
                                      fontWeight: FontWeight.w700,
                                    ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          AppFooter(),
        ],
      ),
    );
  }
}


