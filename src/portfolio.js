/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ibrahim's Portfolio",
  description:
    "A Versatile and passionate Software Engineering Student currently in my 6th Semester",
};

//Home Page
const greeting = {
  title: "Ibrahim Iyaz",
  logo_name: "Ibrahim Iyaz",
  nickname: "",
  subTitle:
    "Versatile and passionate Software Engineering Student currently in my 6th Semester",
  resumeLink:
    "https://drive.google.com/file/d/17xOG00sCaajDcamTt7P2RRbyhpjQoKY3/view?usp=sharing",
  
  githubProfile: "https://github.com/Ibrahim-Iyaz"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Ibrahim-Iyaz",
  // linkedin: "https://www.linkedin.com/in/ibrahim-iyaz/",
  // gmail: "221400027@gift.edu.pk",
  // instagram: "https://www.instagram.com/ibbi.mov/"

  {
    name: "Github",
    link: "https://github.com/Ibrahim-Iyaz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ibrahim-iyaz/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:221400027@gift.edu.pk",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ibbi.mov/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built full-stack web applications using PHP, MySQL, HTML, CSS, and Tailwind CSS",
        "⚡ Developed a secure railway ticket booking system with frontend and backend logic",
        "⚡ Created academic Java-based applications including a terminal banking system"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" }
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#38B2AC" }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" }
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" }
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" }
        }
      ]
    },
    {
      title: "Software Engineering & ERP",
      fileName: "ERPImg",
      skills: [
        "⚡ Hands-on experience with SAP S/4HANA ERP modules including FICO, MM, and HRM",
        "⚡ Worked alongside ABAP developers at Abacus Consulting on ERP implementations",
        "⚡ Applied SDLC principles and created technical documentation for academic projects"
      ],
      softwareSkills: [
        {
          skillName: "SAP S/4HANA",
          fontAwesomeClassname: "simple-icons:sap",
          style: { color: "#0FAAFF" }
        },
        {
          skillName: "ABAP",
          logo_path: "abap-logo.jpeg",
          style: { color: "#E2231A" }
        },
        {
          skillName: "MS Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: { color: "#2B579A" }
        },
        {
          skillName: "MS Visio",
          fontAwesomeClassname: "simple-icons:microsoftexcel", // no official Visio icon, Excel used as placeholder
          style: { color: "#217346" }
        }
      ]
    },
    {
      title: "UI/UX Design & Multimedia",
      fileName: "DesignImg",
      skills: [
        "⚡ Created user-friendly interfaces and mockups using Figma",
        "⚡ Edited videos using Adobe AfterEffects and Premiere Pro for marketing campaigns",
        "⚡ Designed visual content for branding, automotive videos, and social media"
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" }
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: { color: "#31A8FF" }
        },
        {
          skillName: "Adobe Lightroom",
          fontAwesomeClassname: "simple-icons:adobelightroom",
          style: { color: "#31A8FF" }
        },
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: { color: "#9999FF" }
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: { color: "#9999FF" }
        }
      ]
    }
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/Ibrahim_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@Ibrahim391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "GIFT University",
      subtitle: "BS in Software Engineering",
      logo_path: "gift-logo.png",
      alt_name: "GIFT UNIVERSITY",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core software engineering subjects such as Object-Oriented Programming, Data Structures and Algorithms, Database Systems, Software Design and Architecture, and HCI.",
        "⚡ Built full-stack projects like a railway ticket booking system using PHP, MySQL, and Tailwind CSS, and a terminal-based banking application in Java.",
      ],
      website_link: "https://gift.edu.pk",
    },
    {
      title: "GIFT College",
      subtitle: "F.S.C Pre-Engineering",
      logo_path: "giftC-logo.png",
      alt_name: "GIFT COLLEGE",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Completed intermediate education in Pre-Engineering stream with focus on Physics, Chemistry, and Mathematics.",
        "⚡ Participated in extracurricular tech-related learning activities and early programming exploration",
  
      ],
      website_link: "https://www.gift.edu.pk/",
    },
    {
      title: "Science Locus School",
      subtitle: "Matriculation",
      logo_path: "sls-logo.png",
      alt_name: "SLS",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Completed Matriculation with major subjects in Biology, Physics, Chemistry, and Mathematics.",
        "⚡ Built early problem-solving foundations and participated in science competitions.",
  
      ],
      website_link: "https://www.facebook.com/sciencelocusschool.edu.pk/",
    },
    {
      title: "Roots Millennium Schools",
      subtitle: "Primary to 8th Grade",
      logo_path: "rms-logo.png",
      alt_name: "RMS",
      duration: "2005 - 2018",
      descriptions: [
        "⚡ Received early education in a structured O-Level curriculum environment.",
        "⚡ Built strong foundation in English, Mathematics, Science, and Digital Literacy.",
  
      ],
      website_link: "https://www.millenniumschools.edu.pk",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Adobe Graphic Designer",
      subtitle: "Adobe",
      logo_path: "adobe-logo.jpeg",
      certificate_link:
        "https://coursera.org/verify/professional-cert/SG0ZKL1V6YMJ",
      alt_name: "Adobe",
      color_code: "#ff0000ff",
    },
    {
      title: "AI for Everyone",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "SAP Professional Fundamentals",
      subtitle: "SAP",
      logo_path: "sap-logo.png",
      certificate_link:
        "https://coursera.org/verify/170328X22BX8",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Data Analytics in Google Cloud",
      subtitle: "GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://coursera.org/verify/UWMA8FO6LNK9",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Creative Thinking Skills",
      subtitle: "Imperial College London",
      logo_path: "im-logo.jpg",
      certificate_link:
        "https://coursera.org/verify/G78ED6KQPMNB",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Generative AI Content Creation",
      subtitle: "Adobe",
      logo_path: "adobe-logo.jpeg",
      certificate_link:
        "https://coursera.org/verify/9KAU31LJPKA1",
      alt_name: "Coursera",
      color_code: "#ff000ff",
    },
    {
      title: "Design Fundamentals with AI",
      subtitle: "Adobe",
      logo_path: "adobe-logo.jpeg",
      certificate_link:
        "https://coursera.org/verify/2BA JCD6SVX62",
      alt_name: "Coursera",
      color_code: "#ff0000ff",
    },
    {
      title: "Graphic Design",
      subtitle: "Coursera",
      logo_path: "adobe-logo.jpeg",
      certificate_link:
        "https://coursera.org/verify/M2ALBGZHRXE3",
      alt_name: "Coursera",
      color_code: "#ff0000ff",
    },
    
    {
      title: "Image Editing",
      subtitle: "Adobe",
      logo_path: "adobe-logo.jpeg",
      certificate_link:
        "https://coursera.org/verify/PNA6SCFUL4IX",
      alt_name: "Coursera",
      color_code: "#ff0000ff",
    },
    
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Proficient software engineering student with hands-on experience in ERP systems, social media management, full-stack development, graphic design, and video editing. Strong background in SAP S/4HANA, Java-based applications, and collaborative software projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Social Media Manager",
          company: "SKANS School of Accountancy",
          company_url: "",
          logo_path: "skans-logo.jpeg",
          duration: "Ongoing",
          location: "on-site",
          description:
            "Increased social media engagement of SKANS by 75% through strategic content management and targeted campaigns. Designed creative visual content using Adobe Creative Suite, boosting brand visibility by 50%.",
          color: "#808080",
        },
        {
          title: "Graphic Designer & Video Editor",
          company: "Freelance",
          company_url: "",
          logo_path: "adobe-logo.png",
          duration: "Contract Based",
          location: "Remote",
          description:
            "Created engaging visual designs, packaging, and marketing material for clients using Adobe Photoshop, Illustrator, Premiere Pro, and After Effects. Edited promotional videos, reels, and branded content for social media and corporate use.",
          color: "#FFA500",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "ERP Intern",
          company: "GEPCO ERP Directorate",
          company_url: "",
          logo_path: "gepco-logo.png",
          duration: "October 2024 - November 2024",
          location: "Gujranwala, Pakistan",
          description:
            "Worked with SAP S/4HANA modules including FICO, MM, HRM. Collaborated with ABAP developers from Abacus Consulting on ERP customization. Participated in workshops and meetings regarding module integration.",
          color: "#004B87"
        }
      ],
    }
  ]
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "no-publications-yet",
      name: "Publications Under Construction⚙️",
      createdAt: "2025-08-01T00:00:00Z",
      description: "Currently building my empire of publications. Stay tuned.🚧",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ibrahim.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java Code, Cisco, React, Android Dev, Graphic Design, Video Editing and Social Media Management.",
  },
  blogSection: {
    title: "Artworks",
    subtitle:
      "Some of my Artwork in My Freelancing journey.",
    link: "https://ibrahimiyaz5673.artstation.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gujranwala, Pakistan",
    locality: "Gujranwala",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "52250",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/H9K9nMA5amkZ5Py86",
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
