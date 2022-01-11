//SEO Related settings
const seo = {
  title: "Okan UYSAL",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Okan UYSAL Portfolio",
    type: "website",
    url: "https://okanuysal.com/",
  },
};

//Home Page
const greeting = {
  title: "Okan UYSAL",
  logo_name: "Okan UYSAL",
  nickname: "uysalokan",
  subTitle:
    "Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success. Highly skilled software development professional bringing more than 6 years in software design, development and integration. Offering advanced knowledge of C and Java programming languages.",
  resumeLink: "TO BE ADDED.",
  portfolio_repository: "https://github.com/OkanUysal/okanuysalcom",
  githubProfile: "https://github.com/OkanUysal",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/OkanUysal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/okanuysal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:uysal.okan.2010@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "TO BE ADDED",
      fileName: "DataScienceImg",
      skills: [],
      softwareSkills: [],
    },
    /*{
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "Coder Space",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hacettepe University",
      subtitle: "B.S in Computer Science",
      logo_path: "hacettepe.png",
      alt_name: "Hacettepe University",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Computer Networks, Data Science, OpenGL and Computer Vision etc. With the courses I completed, I took responsibility for a project aimed at preventing violence against women.",
      ],
      website_link: "https://www.cs.hacettepe.edu.tr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Hash Code",
      subtitle: "-",
      logo_path: "google_logo.png",
      certificate_link:
        "https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809",
      alt_name: "Google Hash Code",
      color_code: "#8C151599",
    },
    {
      title: "Google Code Jam",
      subtitle: "-",
      logo_path: "google_logo.png",
      certificate_link:
        "https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000004360f1",
      alt_name: "Google Code Jam",
      color_code: "#00000099",
    },
    {
      title: "Google Kick Start",
      subtitle: "-",
      logo_path: "google_logo.png",
      certificate_link:
        "https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/000000000019ffc6",
      alt_name: "Google Kick Start",
      color_code: "#0C9D5899",
    },
    /*{
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Hobby",
  description:
    "Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success. Highly skilled software development professional bringing more than 6 years in software design, development and integration. Offering advanced knowledge of C and Java programming languages.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer/Team Lead",
          company: "TÜBİTAK BİLGEM",
          company_url:
            "https://bilgem.tubitak.gov.tr/en/content/rtos/gis-real-time-operating-system",
          logo_path: "bilgem.jpg",
          duration: "October 2020 - PRESENT",
          location: "Istanbul(Asia), TURKEY",
          descriptions: [
            "⚡ Leading a 4-person RTOS core team. As the core team, memory, communication, scheduler, process/thread, smp ect. topics are being developed.",
            "⚡ Taking part in the CI/CD studies of the project. Jenkins has been integrated into the system. It has been ensured that the products are more controlled and healthier.",
            "⚡ Taking part in road map determination and design studies in the project.",
          ],
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "HUAWEI",
          company_url: "https://www.talent-interview.com/en/",
          logo_path: "huawei.png",
          duration: "June 2020 - August 2020",
          location: "Istanbul(Asia), TURKEY",
          descriptions: [
            "⚡ Developed a captcha system. Due to company policy, open source captcha system was not used. Backend and frontend part has been improved.",
            "⚡ Developed a media player that will display the videos stored in the database. By enabling it to send the ﬁles in a fragmented way, the download process is ensured to continue while watching large videos.",
            "⚡ Performed many database operations. Frontend and backend improvements have been made. Designs were made considering the advanced stages of the project.",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Engineer/RTOS Core Developer",
          company: "TÜBİTAK BİLGEM",
          company_url:
            "https://bilgem.tubitak.gov.tr/en/content/rtos/gis-real-time-operating-system",
          logo_path: "bilgem.jpg",
          duration: "September 2019 - May 2020",
          location: "Istanbul(Asia), TURKEY",
          descriptions: [
            "⚡ Improved clock/timer package.",
            "⚡ Design studies were carried out in the code tree of the project. Fixed unnecessary code snippets in proﬁles.",
            "⚡ The system to catch the leaks in the project was developed and the leaks were ﬁxed.",
          ],
          color: "#fc1f20",
        },
        {
          title: "Software Engineer/Test Automation Developer",
          company: "TÜBİTAK BİLGEM",
          company_url:
            "https://bilgem.tubitak.gov.tr/en/content/rtos/gis-real-time-operating-system",
          logo_path: "bilgem.jpg",
          duration: "December 2015 - September 2019",
          location: "Istanbul(Asia), TURKEY",
          descriptions: [
            "⚡ Developed full automatic tool for RTOS. This tool provided commination between host and target. So all written tests are run on the device and the results are reported in excel and html.",
            "⚡ Developed many unit tests and helped improve the quality of the product.",
            "⚡ Static analysis and dynamic analysis tools were integrated into the project within the scope of DO-178 Level A. LDRA was used as the tool.",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "ASELSAN",
          company_url: "https://www.aselsan.com.tr/",
          logo_path: "aselsan.jpg",
          duration: "August 2014 - September 2014",
          location: "Ankara, TURKEY",
          descriptions: [
            "⚡ Developed automation tool for the real time system with Java Spring.",
          ],
          color: "#ee3c26",
        },
        {
          title: "Software Engineer Intern",
          company: "HAVELSAN",
          company_url: "https://www.havelsan.com.tr/",
          logo_path: "havelsan.png",
          duration: "June 2014 - August 2014",
          location: "Ankara, TURKEY",
          descriptions: ["⚡ Developed GUI for submarina with Qt."],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "On this page, I will share the open source projects I have developed.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "If I have a publication one day, I will share it here :)",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  /*blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: "Gebze/Kocaeli TURKEY",
    avatar_image_path: "address_image.svg",
    location_map_link: "-",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "-",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
