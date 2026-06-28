export interface GreetingData {
  title: string;
  logoName: string;
  nickname: string;
  subTitle: string;
  resumeLink: string;
  portfolioRepository: string;
  githubProfile: string;
}

export interface SocialMediaLink {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

export interface DegreeData {
  title: string;
  subtitle: string;
  logoPath: string;
  duration: string;
  descriptions: string[];
  websiteLink: string;
  altName: string;
  gpa: string;
}

export interface CertificationData {
  title: string;
  subtitle: string;
  logoPath: string;
  certificateLink: string;
  altName: string;
  colorCode: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  logoPath: string;
  duration: string;
  location: string;
  description: string[];
  color: string;
}

export interface ExperienceSection {
  title: string;
  experiences: ExperienceItem[];
}

export interface SectionHeaderData {
  title: string;
  description: string;
  avatarImagePath: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  githubLink?: string;
  tags: string[];
}

export const portfolioData = {
  greeting: {
    title: 'Okan UYSAL',
    logoName: 'Okan UYSAL',
    nickname: 'uysalokan',
    subTitle: 'Detail-oriented, organized and meticulous Technical Lead & Senior Software Engineer. Highly skilled software development professional bringing more than 10 years in software design, development, and integration. Experienced in leading team workflows, system architecture, microservices, and AI integrations.',
    resumeLink: 'https://github.com/OkanUysal/resume/blob/master/okan_uysal_resume.pdf',
    portfolioRepository: 'https://github.com/OkanUysal/okanuysalcom',
    githubProfile: 'https://github.com/OkanUysal',
  } as GreetingData,

  socialMediaLinks: [
    {
      name: 'Github',
      link: 'https://github.com/OkanUysal',
      fontAwesomeIcon: 'github',
      backgroundColor: '#181717',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/okanuysal/',
      fontAwesomeIcon: 'linkedin',
      backgroundColor: '#0077B5',
    },
    {
      name: 'Gmail',
      link: 'mailto:uysal.okan.2010@gmail.com',
      fontAwesomeIcon: 'envelope',
      backgroundColor: '#D14836',
    },
    {
      name: 'Play Store',
      link: 'https://play.google.com/store/search?q=uysalokan',
      fontAwesomeIcon: 'play',
      backgroundColor: '#414141',
    },
  ] as SocialMediaLink[],

  skills: {
    languages: ['Java', 'Golang (Go)', 'Dart', 'C', 'Python', 'Bash Script'],
    techStack: ['Spring Boot', 'Kafka', 'RabbitMQ', 'Flutter', 'Flame Engine', 'LibGDX', 'Railway'],
    toolsAutomation: ['Git', 'Selenide', 'Cucumber', 'Firebase', 'Grafana', 'Local LLMs'],
  },

  degrees: [
    {
      title: 'Hacettepe University',
      subtitle: 'B.S. in Computer Science',
      logoPath: 'hacettepe.png',
      duration: 'September 2010 - August 2015',
      gpa: '2.78 / 4.00',
      descriptions: [
        '⚡ Core computer science subjects like Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence.',
        '⚡ Specialized coursework in Computer Networks, Data Science, OpenGL, and Computer Vision.',
        '⚡ Developed and took responsibility for a graduation project aimed at preventing violence against women.',
      ],
      websiteLink: 'https://www.cs.hacettepe.edu.tr/',
      altName: 'Hacettepe University',
    },
  ] as DegreeData[],

  certifications: [
    {
      title: 'ISO-26262 Functional Safety',
      subtitle: 'TÜV / Automotive Functional Safety training and certification.',
      logoPath: '', // No specific logo
      certificateLink: '#',
      altName: 'ISO-26262 Certification',
      colorCode: 'rgba(99, 102, 241, 0.2)',
    },
    {
      title: 'Google Hash Code Certificate',
      subtitle: 'Certificate of qualification in Google Hash Code competition.',
      logoPath: 'google_logo.png',
      certificateLink: 'https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809',
      altName: 'Google Hash Code',
      colorCode: 'rgba(219, 68, 85, 0.2)',
    },
    {
      title: 'Google Code Jam Certificate',
      subtitle: 'Certificate of qualification in Google Code Jam.',
      logoPath: 'google_logo.png',
      certificateLink: 'https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000004360f1',
      altName: 'Google Code Jam',
      colorCode: 'rgba(0, 0, 0, 0.2)',
    },
    {
      title: 'Google Kick Start Certificate',
      subtitle: 'Certificate of qualification in Google Kick Start.',
      logoPath: 'google_logo.png',
      certificateLink: 'https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/000000000019ffc6',
      altName: 'Google Kick Start',
      colorCode: 'rgba(15, 157, 88, 0.2)',
    },
    {
      title: 'National Blockchain Workshop',
      subtitle: 'TÜBİTAK Blockchain Workshop.',
      logoPath: 'bilgem.jpg',
      certificateLink: '#',
      altName: 'Blockchain Workshop',
      colorCode: 'rgba(252, 163, 17, 0.2)',
    },
  ] as CertificationData[],

  experienceSections: [
    {
      title: 'Work Experience',
      experiences: [
        {
          title: 'Technical Lead / Senior Software Engineer',
          company: 'Yapı Kredi Teknoloji',
          companyUrl: 'https://www.yapikrediteknoloji.com.tr/',
          logoPath: '', // No specific logo
          duration: 'April 2023 - Present',
          location: 'Istanbul(Asia), TURKEY',
          color: '#0077B5',
          description: [
            'Leading the "Cosmos" banking framework\'s Workflow and Post Office teams, managing multi-region deployments (Germany, Azerbaijan, Netherlands, Factoring) utilizing Java 17, Spring Boot, Kafka, Redis, and RabbitMQ.',
            'Architected domain task lifecycles (ownership, history, filtering) and a centralized notification/email template routing system.',
            'Created an LLM-based UI tracker to analyze user behavior, automatically generating Selenide/Cucumber test scenarios, UX improvements, and API optimizations.',
            'Developed AI tools: a repository compliance agent, a custom Copilot code review extension, and automated Grafana reporting.',
            'Designed common service libraries and led the test automation team in implementing multi-region test strategies.',
          ],
        },
        {
          title: 'Senior Software Engineer / System Architect',
          company: 'TÜBİTAK BİLGEM',
          companyUrl: 'https://bilgem.tubitak.gov.tr/',
          logoPath: 'bilgem.jpg',
          duration: 'October 2020 - April 2023',
          location: 'Istanbul(Asia), TURKEY',
          color: '#ee3c26',
          description: [
            'Led the Real-Time Operating System (RTOS) core team and managed system integrations.',
            'Defined CI/CD pipelines and architectural roadmaps for embedded software platforms.',
            'Acted as a Field Application Engineer (FAE) overseeing critical on-site system implementations.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'HUAWEI',
          companyUrl: 'https://www.huawei.com/',
          logoPath: 'huawei.png',
          duration: 'June 2020 - August 2020',
          location: 'Istanbul, TURKEY',
          color: '#fc1f20',
          description: [
            'Engineered full-stack components and microservices.',
            'Developed a custom media player component integrated into an e-interview platform.',
          ],
        },
        {
          title: 'Software Engineer',
          company: 'TÜBİTAK BİLGEM',
          companyUrl: 'https://bilgem.tubitak.gov.tr/',
          logoPath: 'bilgem.jpg',
          duration: 'December 2015 - May 2020',
          location: 'Istanbul(Asia), TURKEY',
          color: '#ee3c26',
          description: [
            'Developed an automated RTOS testing tool with host-target communication.',
            'Optimized the clock/timer packages, reducing idle CPU usage from 30% to 5%.',
          ],
        },
      ],
    },
  ] as ExperienceSection[],

  projects: [
    {
      name: 'Monster Block Blast',
      description: 'A fun block puzzle game released on mobile platforms, developed using Flutter and Flame Game Engine.',
      githubLink: 'https://github.com/OkanUysal',
      tags: ['Flutter', 'Flame Engine', 'Dart', 'Game Dev'],
    },
    {
      name: 'Draftio',
      description: 'A conceptual mobile/web tool designed for drafting and diagram prototyping.',
      githubLink: 'https://github.com/OkanUysal',
      tags: ['React', 'TypeScript', 'App Design'],
    },
    {
      name: 'Histora',
      description: 'An interactive historical timeline application concept.',
      githubLink: 'https://github.com/OkanUysal',
      tags: ['Flutter', 'Dart', 'Timeline UI'],
    },
    {
      name: 'World Cup Predict',
      description: 'A gamified predictor application built for team motivation during tournament seasons.',
      githubLink: 'https://github.com/OkanUysal',
      tags: ['Golang', 'Spring Boot', 'Team Motivation'],
    },
  ] as ProjectItem[],

  interests: {
    gameAppDev: 'Released "Monster Block Blast" (Flutter/Flame); designed concepts for "Draftio" & "Histora". Built "World Cup Predict" for team motivation.',
    backend: 'Building high-performance microservices and simulation servers using Golang (Go) and Railway.',
    hobbies: ['3D Printing (FDM)', 'Table Tennis', 'Hiking', 'Skiing'],
  },
};
