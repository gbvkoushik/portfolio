import { Skill, Project, ExperienceItem, EducationItem, CertificationItem, AchievementItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "G.B.V. Koushik",
  githubUsername: "gbvkoushik",
  pronouns: "he/him",
  roles: [
    "Computer Science Student",
    "Web Developer"
  ],
  statusBadge: "Available for Internships & Junior Roles",
  heroSummary: "Computer Science & Engineering student based in Hyderabad with skills in C and Java, currently learning HTML, CSS, and JavaScript. Creator of sinaimedicaldiagnostics.in.",
  careerObjective: "Driven Computer Science student seeking software development internships or entry-level roles. Focused on computer science fundamentals and web development.",
  location: "Hyderabad, India",
  socials: {
    github: "https://github.com/gbvkoushik",
    linkedin: "https://www.linkedin.com/in/g-b-v-koushik-237334391/",
    instagram: "https://instagram.com/__gbvk__"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "sinai-medical",
    title: "Sinai Medical Diagnostics",
    category: "Web",
    shortDescription: "A vibe-coded medical diagnostic web application (sinaimedicaldiagnostics.in / gbvkoushik/sinaimedical). Features lab test search, health checkup packages, doorstep sample collection booking, and report lookup.",
    fullDescription: "A modern medical diagnostic center web application built for Sinai Medical Diagnostics. Includes 50+ searchable pathology tests, health screening packages with discount savings, and doorstep sample collection booking.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Vibe Coding"],
    githubUrl: "https://github.com/gbvkoushik/sinaimedical",
    liveUrl: "https://sinaimedicaldiagnostics.in",
    featured: true,
    modalDetails: {
      features: [
        "Searchable lab test directory with sample preparation rules & turnaround times",
        "Doorstep sample pickup booking form with preferred date and time slot selector",
        "Digital test report status lookup simulator using Sample Barcode ID",
        "Responsive dark glassmorphism medical design aesthetic"
      ],
      architecture: "Responsive web application built with HTML5, CSS3, JavaScript, and Tailwind CSS glassmorphic components.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Lucide Icons"]
    }
  }
];

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: "C", category: "Programming Languages", level: 80, iconName: "Cpu", color: "#00599c" },
  { name: "Java", category: "Programming Languages", level: 75, iconName: "Coffee", color: "#5382a1" },

  // Web Development (Currently Learning)
  { name: "HTML5 & CSS3", category: "Frontend", level: 75, iconName: "Layout", color: "#e34f26" },
  { name: "JavaScript", category: "Frontend", level: 70, iconName: "Code2", color: "#f7df1e" },

  // Databases & Tools
  { name: "MySQL", category: "Databases", level: 70, iconName: "Database", color: "#00758f" },
  { name: "Git & GitHub", category: "Tools", level: 80, iconName: "GitBranch", color: "#f05032" }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Computer Science Student & Developer",
    company: "University Institute of Technology",
    location: "Hyderabad, India",
    period: "2024 - 2028 (Expected)",
    type: "Academic & Project Work",
    responsibilities: [
      "Built and deployed medical diagnostic web project sinaimedicaldiagnostics.in.",
      "Studying Data Structures, Algorithms, Object-Oriented Programming, and Relational Databases.",
      "Developing programming projects in C, Java, and learning HTML/CSS with JavaScript."
    ],
    contributions: "Created open-source GitHub repository at github.com/gbvkoushik/sinaimedical.",
    technologies: ["C", "Java", "HTML/CSS", "JavaScript", "MySQL", "Git"],
    companyLogo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&q=80"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "University Institute of Technology",
    cgpa: "Pursuing (Graduation 2028)",
    period: "2024 - 2028",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C/Java)",
      "Database Management Systems (MySQL)",
      "Web Technologies & Software Engineering"
    ],
    academicAchievements: [
      "Student Coordinator for Tech Workshop"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Programming in Java & OOPs",
    organization: "NPTEL",
    issueDate: "2023",
    credentialUrl: "https://nptel.ac.in",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    skillsVerified: ["Java", "OOP Principles"]
  },
  {
    id: "cert-2",
    title: "SQL & Relational Database Basics",
    organization: "Udemy",
    issueDate: "2024",
    credentialUrl: "https://udemy.com",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80",
    skillsVerified: ["MySQL", "SQL Queries"]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Contributions Last Year",
    count: 72,
    suffix: "",
    description: "GitHub contributions in 2026",
    iconName: "GitBranch"
  },
  {
    id: "ach-2",
    title: "Featured Web Project",
    count: 1,
    suffix: "",
    description: "sinaimedicaldiagnostics.in",
    iconName: "FolderGit2"
  },
  {
    id: "ach-3",
    title: "Commits Ratio",
    count: 100,
    suffix: "%",
    description: "100% commit activity distribution",
    iconName: "Code"
  },
  {
    id: "ach-4",
    title: "Coding Hours",
    count: 100,
    suffix: "+",
    description: "Hands-on development",
    iconName: "Clock"
  },
  {
    id: "ach-5",
    title: "DSA Problems Solved",
    count: 50,
    suffix: "+",
    description: "LeetCode & HackerRank",
    iconName: "Code"
  },
  {
    id: "ach-6",
    title: "Core Languages",
    count: 2,
    suffix: "",
    description: "C and Java",
    iconName: "Terminal"
  }
];

export const AI_CHATBOT_KNOWLEDGE = [
  {
    keywords: ["who", "about", "bio", "koushik", "name"],
    response: "G.B.V.Koushik (@gbvkoushik) is a Computer Science student (Graduation 2028) in Hyderabad, proficient in C and Java, currently learning HTML/CSS and JavaScript."
  },
  {
    keywords: ["github", "repo", "project", "sinai"],
    response: "Koushik's featured project is sinaimedicaldiagnostics.in (github.com/gbvkoushik/sinaimedical), with 72 contributions on GitHub in 2026."
  },
  {
    keywords: ["skill", "stack", "technology", "java", "c", "html", "css", "js", "mysql"],
    response: "Koushik knows C, Java, MySQL, and is learning HTML, CSS, and JavaScript."
  },
  {
    keywords: ["education", "degree", "college", "graduation"],
    response: "Koushik is pursuing a B.Tech in CSE with expected graduation in 2028."
  },
  {
    keywords: ["contact", "linkedin", "github", "instagram"],
    response: "You can reach Koushik via LinkedIn (https://www.linkedin.com/in/g-b-v-koushik-237334391/), GitHub (@gbvkoushik), or Instagram (@__gbvk__)."
  }
];
