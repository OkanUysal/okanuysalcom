import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../widgets/app_footer.dart';
import '../widgets/app_header.dart';
import '../widgets/link_button.dart';
import '../widgets/social_media_strip.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = AppThemeData.black();
    final data = PortfolioData.contactPageData;

    final addressCanOpen = data.addressSection.locationMapLink != '-' &&
        data.addressSection.locationMapLink.trim().isNotEmpty;

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
                  child: Image.asset(
                    PortfolioData.assetImagePath(data.contactSection.profileImagePath),
                    fit: BoxFit.contain,
                  ),
                ),
                const SizedBox(width: 18),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        data.contactSection.title,
                        style:
                            Theme.of(context).textTheme.displaySmall?.copyWith(
                                  color: theme.text,
                                  fontWeight: FontWeight.w900,
                                ),
                      ),
                      const SizedBox(height: 10),
                      Text(
                        data.contactSection.description,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.secondaryText,
                              height: 1.5,
                            ),
                      ),
                      const SizedBox(height: 16),
                      SocialMediaStrip(theme: theme),
                      const SizedBox(height: 16),
                      LinkButton(
                        text: 'See My Resume',
                        url: PortfolioData.greeting.resumeLink,
                        newTab: true,
                        backgroundColor: theme.highlight,
                        textColor: theme.text,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 26),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  width: 260,
                  child: SvgPicture.asset(
                    PortfolioData.assetImagePath(data.addressSection.avatarImagePath),
                    fit: BoxFit.contain,
                  ),
                ),
                const SizedBox(width: 18),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        data.addressSection.title,
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                              color: theme.text,
                              fontWeight: FontWeight.w900,
                            ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        data.addressSection.subtitle,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.secondaryText,
                              fontWeight: FontWeight.w600,
                            ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        data.phoneSection.title,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.text,
                              fontWeight: FontWeight.w800,
                            ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        data.phoneSection.subtitle,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: theme.secondaryText,
                              fontWeight: FontWeight.w600,
                            ),
                      ),
                      const SizedBox(height: 16),
                      if (addressCanOpen)
                        LinkButton(
                          text: 'Visit on Google Maps',
                          url: data.addressSection.locationMapLink,
                          newTab: true,
                          backgroundColor: theme.headerColor,
                          textColor: theme.text,
                        ),
                    ],
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


