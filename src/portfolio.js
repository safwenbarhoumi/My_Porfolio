/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Safwen_Barhoumi Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Safwen Barhoumi  Portfolio",
    type: "website",
    url: "http://SafwenBarhoumi .com/",
  },
};

//Home Page
const greeting = {
  title: "Safwen Barhoumi",
  logo_name: "Safwen_Barhoumi",
  nickname: "Full stack mobile developer",
  subTitle:
    " Hello, I'm Safwen Barhoumi, a 24-year-old in my fifth year of engineering studies at ESPRIT, focusing on web and mobile development. I enjoy combining technical expertise with creativity to create digital solutions. Let's connect to create and improve the dynamic world of web and mobile development ! ",
  resumeLink:
    "https://drive.google.com/file/d/1VnRj5xEb-X4Di0orn2DhYhXBCsQ4fwC_/view?usp=sharing",
  portfolio_repository: "https://github.com/safwenbarhoumi",
  githubProfile: "https://github.com/safwenbarhoumi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "SafwenBarhoumi 98@gmail.com",
  // gitlab: "https://gitlab.com/SafwenBarhoumi 98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/safwenbarhoumi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/safwen-barhoumi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /* {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  }, */
  {
    name: "Gmail",
    link: "mailto:Safwen.barhoumi@esprit.tn.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /* {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  }, */
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100004156489424",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/safwenbarhoumi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building seamless cross-platform mobile apps with Flutter for iOS and Android.",
        "⚡  Crafting feature-rich Android apps with Kotlin, leveraging the latest advancements.",
        "⚡  Proficient in iOS development with Swift, utilizing both storyboard and SwiftUI for intuitive interfaces.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos-kotlin",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos-swift",
          style: {
            backgroundColor: "transparent",
          },
        },
        /* {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        }, */
      ],
    },
    {
      title: "Web Develpment",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building interactive websites with Angular for a dynamic user experience.",
        "⚡ Creating engaging and responsive web applications using React.",
        "⚡ Crafting visually appealing and structured websites with HTML5 and CSS3.",
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
          skillName: "Angular",
          fontAwesomeClassname: "logos-angular",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend develpment",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Using Node.js to handle server-side logic for efficient and scalable web applications.",
        "⚡ Developing powerful and streamlined backend systems with Spring Boot.",
        "⚡ Leveraging Firebase for a quick and flexible backend solution for web and mobile apps.",
        //"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos-spring",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos-php",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "logos-dotnet",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "DevOps",
      fileName: "DevopsImg",
      skills: [
        "⚡ Streamlining software deployment with Docker for consistent and portable applications.",
        "⚡ Automating and managing the continuous integration and delivery process with Jenkins.",
        "⚡ Ensuring code quality and security with SonarQube for efficient development practices.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos-jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "logos-sonarqube",
          style: {
            backgroundColor: "transparent",
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
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
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
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Higher Institute of Technological Studies of Kairouan",
      subtitle: "Industrial automation and IT",
      logo_path: "IsetKr.png",
      alt_name: "Iset Kairouan",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I've studied important subjects like Data Structures, Algorithms, and more, honing my problem-solving skills.",
        "⚡ I explored advanced areas such as Deep Learning, Data Science, Cloud Computing, and Full Stack Development in additional courses.",
        "⚡ Skilled in problem-solving, particularly in embedded systems like Arduino, and proficient in programming languages like C++ and Python.",
      ],
      website_link: "http://www.isetkr.rnu.tn/new/",
    },
    {
      title: "ESPRIT Private Higher School of Engineering and Technology",
      subtitle: "Full Stack Develpment",
      logo_path: "Esprit3.png",
      alt_name: "Esprit",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Skilled in making user interfaces with Flutter, Kotlin, iOS, Angular, and Swift. Also, good at using Node.js, Spring Boot, and .NET for behind-the-scenes work.",
        "⚡ Skilled in Back-end with Node.js, Spring Boot, and .NET. Well-versed in integration, deployment, and optimizing project architecture.",
        "⚡ Simplifying the process of deploying applications to ensure efficient and smooth launches.",
      ],
      website_link: "https://esprit.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    /* {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
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
    }, */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Projects and Internships ",
  description:
    "I've worked on various web and mobile development projects, enjoying my time in university, startups, and companies. Even now, I'm still having fun learning and getting better at what I do.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "Mini Project (Android)",
          company: "Kotlin, NodeJs, MongoDB",
          //company_url: "https://legatohealthtech.com/",
          logo_path: "Kotlin.jpg",
          duration: "02/2023 - 03/2023",
          //location: "Hyderabad, Telangana",
          description:
            "This mobile application, designed for Android, is developed using Kotlin and Node.js. It serves as a specialized platform for exploring the intricacies of the blockchain hub. Users can actively participate in discussions, fostering interaction and engagement within the community.",
          color: "#0879bf",
        },
        {
          title: "Mini Projet (IOS)",
          company: "Swift (SwiftUI,Storyboard), NodeJs, MongoDB",
          //company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "Swift.png",
          duration: "04/2023 - 05/2023",
          //location: "Pune, Maharashtra",
          description:
            "It's an iOS mobile application developed in Swift and Node.js, utilizing both Storyboard and SwiftUI interfaces. This application is a platform dedicated to learning about the blockchain hub, offering users the ability to interact and engage in discussions with each other. It also provides several features such as messaging, facial recognition (Face ID), light/dark theme, mapping (MapKit), animations, and multi-language internationalization (Arabic, French, and English)",
          color: "#9b1578",
        },
        {
          title: "Education platform",
          company: "Angular , ReactJs , NodeJs, MongoDB",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "Angular.jpg",
          duration: "Nov 2017 - Dec 2017",
          //location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Employee management platform",
          company: "National Informatics Center (CNI)",
          company_url: "http://www.cni.tn/index.php/fr/?view=page&id=44",
          logo_path: "cni.png",
          duration: "06/2022 - 07/2022",
          location: "Beb El Khadhra, Tunis",
          description:
            "I have developed an employee management platform that facilitates the registration of employees. Additionally, the platform incorporates an administrative service for overseeing and controlling various aspects such as employee addition, updates, deletions, and the integration of additional services. \n I possess experience working with HTML5, CSS3, JavaScript, and PHP.",
          color: "#000000",
        },
        {
          title: "Mobile delivery App",
          company: "E-Build",
          company_url: "https://www.e-build.tn/",
          logo_path: "EBuild.png",
          duration: "06/2023 - 09/2023",
          location: "Work From Home",
          description:
            "c'est une application de livraison développé par flutter . L'application permettait aux livreurs de gérer et de livrer des colis répertoriés dans des feuilles de route, avec des fonctionnalités telles que la recherche de colis par code-barres, des filtres de calendrier, une chronologie des colis, une interface de ramassage, des diagrammes circulaires pour visualiser les données des colis, et la possibilité de modifier les informations du profil utilisateur. L'application comprenait également un scanner pour les codes QR et les codes-barres. I possess experience working with Flutter, SpringBoot, Xampp , Docker",
          color: "#ee3c26",
        },
        {
          title: "Mobile agricultural App",
          company: "Blue Jet Engeneering",
          company_url: "https://www.bluejetengineering.com/#/",
          logo_path: "BlueJet.png",
          duration: "05/2024 ",
          location: "Tunis - Lac1",
          description:
            "I designed and developed a mobile application tailored for agriculture, specifically targeting farmers and farm management. This application empowers users to exercise control over various electrical components within the farm, including sensors, valves, and walls, through a user-friendly interface. I possess experience working with Flutter, NodeJs, Docker and CI/CD",
          color: "#0071C5",
        },
      ],
    },
    /* {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    }, */
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I use modern tools for web and mobile development. My favorite part is creating and deploying Data Science projects on the web using cloud technology.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /* {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    }, */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Safwen.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.SafwenBarhoumi.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tunisia - Ariana - City El Ghazela",
    locality: "Ariana",
    country: "Tunisia",
    region: "Ariana",
    postalCode: "3100",
    //streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/search/Tunisia+-+Ariana+-+City+El+Ghazela/@36.8901384,10.1808534,16z?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
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
  publications,
  contactPageData,
};
