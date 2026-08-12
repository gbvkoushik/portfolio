export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools' | 'Cloud';
  level: number;
  iconName: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Web' | 'Python' | 'Java' | 'C/C++';
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  modalDetails: {
    features: string[];
    architecture: string;
    technologies: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  contributions: string;
  technologies: string[];
  companyLogo?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  coursework: string[];
  academicAchievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialUrl: string;
  image: string;
  skillsVerified: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  count: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  quickActions?: {
    label: string;
    action: string;
  }[];
}
