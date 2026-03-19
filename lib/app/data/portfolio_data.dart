import 'package:flutter/material.dart';

class GreetingData {
  final String title;
  final String logoName;
  final String nickname;
  final String subTitle;
  final String resumeLink;
  final String portfolioRepository;
  final String githubProfile;

  const GreetingData({
    required this.title,
    required this.logoName,
    required this.nickname,
    required this.subTitle,
    required this.resumeLink,
    required this.portfolioRepository,
    required this.githubProfile,
  });
}

class SocialMediaLink {
  final String name;
  final String link;
  final String fontAwesomeIcon;
  final Color backgroundColor;

  const SocialMediaLink({
    required this.name,
    required this.link,
    required this.fontAwesomeIcon,
    required this.backgroundColor,
  });
}

class DegreeData {
  final String title;
  final String subtitle;
  final String logoPath;
  final String duration;
  final List<String> descriptions;
  final String websiteLink;
  final String altName;

  const DegreeData({
    required this.title,
    required this.subtitle,
    required this.logoPath,
    required this.duration,
    required this.descriptions,
    required this.websiteLink,
    required this.altName,
  });
}

class CertificationData {
  final String title;
  final String subtitle;
  final String logoPath;
  final String certificateLink;
  final String altName;
  final Color colorCode;

  const CertificationData({
    required this.title,
    required this.subtitle,
    required this.logoPath,
    required this.certificateLink,
    required this.altName,
    required this.colorCode,
  });
}

class SectionHeaderData {
  final String title;
  final String description;
  final String avatarImagePath;

  const SectionHeaderData({
    required this.title,
    required this.description,
    required this.avatarImagePath,
  });
}

class ContactPageData {
  final ContactSection contactSection;
  final AddressSection addressSection;
  final PhoneSection phoneSection;

  const ContactPageData({
    required this.contactSection,
    required this.addressSection,
    required this.phoneSection,
  });
}

class ContactSection {
  final String title;
  final String profileImagePath;
  final String description;

  const ContactSection({
    required this.title,
    required this.profileImagePath,
    required this.description,
  });
}

class AddressSection {
  final String title;
  final String subtitle;
  final String avatarImagePath;
  final String locationMapLink;

  const AddressSection({
    required this.title,
    required this.subtitle,
    required this.avatarImagePath,
    required this.locationMapLink,
  });
}

class PhoneSection {
  final String title;
  final String subtitle;

  const PhoneSection({
    required this.title,
    required this.subtitle,
  });
}

class AppSkillsData {
  final List<SkillBlock> data;
  const AppSkillsData({required this.data});
}

class SkillBlock {
  final String title;
  final String fileName;
  final List<String> skills;
  final List<dynamic> softwareSkills;

  const SkillBlock({
    required this.title,
    required this.fileName,
    required this.skills,
    required this.softwareSkills,
  });
}

class PortfolioData {
  static const greeting = GreetingData(
    title: 'Okan UYSAL',
    logoName: 'Okan UYSAL',
    nickname: 'uysalokan',
    subTitle:
        'Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success. Highly skilled software development professional bringing more than 6 years in software design, development and integration. Offering advanced knowledge of C and Java programming languages.',
    resumeLink:
        'https://github.com/OkanUysal/resume/blob/master/okan_uysal_resume.pdf',
    portfolioRepository: 'https://github.com/OkanUysal/okanuysalcom',
    githubProfile: 'https://github.com/OkanUysal',
  );

  static const socialMediaLinks = [
    SocialMediaLink(
      name: 'Github',
      link: 'https://github.com/OkanUysal',
      fontAwesomeIcon: 'fa-github',
      backgroundColor: Color(0xFF181717),
    ),
    SocialMediaLink(
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/okanuysal/',
      fontAwesomeIcon: 'fa-linkedin-in',
      backgroundColor: Color(0xFF0077B5),
    ),
    SocialMediaLink(
      name: 'Gmail',
      link: 'mailto:uysal.okan.2010@gmail.com',
      fontAwesomeIcon: 'fa-google',
      backgroundColor: Color(0xFFD14836),
    ),
    SocialMediaLink(
      name: 'Play Store',
      link: 'https://play.google.com/store/search?q=uysalokan',
      fontAwesomeIcon: 'fa-google-play',
      backgroundColor: Color(0xFF414141),
    ),
  ];

  static const skills = AppSkillsData(
    data: [
      SkillBlock(
        title: 'TO BE ADDED',
        fileName: 'DataScienceImg',
        skills: [],
        softwareSkills: [],
      ),
    ],
  );

  static const degrees = [
    DegreeData(
      title: 'Hacettepe University',
      subtitle: 'B.S in Computer Science',
      logoPath: 'hacettepe.png',
      duration: '2010 - 2015',
      descriptions: [
        '⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
        '⚡ Apart from this, I have done courses on Computer Networks, Data Science, OpenGL and Computer Vision etc. With the courses I completed, I took responsibility for a project aimed at preventing violence against women.',
      ],
      websiteLink: 'https://www.cs.hacettepe.edu.tr/',
      altName: 'Hacettepe University',
    ),
  ];

  static const certifications = [
    CertificationData(
      title: 'Google Hash Code',
      subtitle: '-',
      logoPath: 'google_logo.png',
      certificateLink:
          'https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809',
      altName: 'Google Hash Code',
      // CSS renk formatı: #RRGGBBAA. Flutter: 0xAARRGGBB
      colorCode: Color(0x998C1515),
    ),
    CertificationData(
      title: 'Google Code Jam',
      subtitle: '-',
      logoPath: 'google_logo.png',
      certificateLink:
          'https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000004360f1',
      altName: 'Google Code Jam',
      colorCode: Color(0x99000000),
    ),
    CertificationData(
      title: 'Google Kick Start',
      subtitle: '-',
      logoPath: 'google_logo.png',
      certificateLink:
          'https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/000000000019ffc6',
      altName: 'Google Kick Start',
      colorCode: Color(0x990C9D58),
    ),
  ];

  static const projectsHeader = SectionHeaderData(
    title: 'Projects',
    description:
        'On this page, I will share the open source projects I have developed.',
    avatarImagePath: 'projects_image.svg',
  );

  static const publicationsHeader = SectionHeaderData(
    title: 'Publications',
    description: 'If I have a publication one day, I will share it here :)',
    avatarImagePath: 'projects_image.svg',
  );

  static const contactPageData = ContactPageData(
    contactSection: ContactSection(
      title: 'Contact Me',
      profileImagePath: 'self.jpeg',
      description:
          'I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.',
    ),
    addressSection: AddressSection(
      title: 'Address',
      subtitle: 'Gebze/Kocaeli TURKEY',
      avatarImagePath: 'address_image.svg',
      locationMapLink: '-',
    ),
    phoneSection: PhoneSection(
      title: 'Phone Number',
      subtitle: '-',
    ),
  );

  static String assetImagePath(String assetFileName) =>
      'assets/images/$assetFileName';
}

