import { ImageSource } from "expo-image";

export const profile = {
  name: "Emily",
  title: "Computer Science Student at CSUN",
  tagline:
    "I build software that solves real problems — from network security tools to user-friendly mobile apps.",
  bio: "I'm a Computer Science student at California State University, Northridge, passionate about full-stack development, cybersecurity, and building tools that make technology more accessible.",
  email: "emily.morazan7@gmail.com",
  github: "https://github.com/EmilyMorazan",
  linkedin: "https://www.linkedin.com/in/emily-morazan-142bbb2a1/",
  // resumeUrl: this might have to be fix",
  resumeUrl: "https://github.com/EmilyMorazan/resume.pdf",
  photo: require("@/assets/images/profile.png"),
};

export const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Flask",
  "SQL",
  "Git",
  "Networking",
  "Cybersecurity",
];

export const education = {
  school: "California State University, Northridge",
  degree: "B.S. in Computer Science",
  period: "Expected 2026",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: ImageSource;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "network-analyzer",
    title: "Network Traffic Analyzer & Firewall",
    description:
      "Built a web application that monitors real-time network activity — traffic volume, IP address details, and connection speed. Implemented a rule-based firewall to block suspicious connections and improve network security.",
    tech: ["Python", "Flask", "React", "SQLite"],
    image: require("@/assets/images/firewall_image.png"),
    github: "https://github.com/yourusername/network-analyzer",
    demo: "https://your-demo-url.com",
  },
  {
    id: "habit-tracker",
    title: "Gamified Habit Tracker for ADHD",
    description:
      "Designed a habit tracker with game-like rewards, challenges, and progress tracking to help users with ADHD stay motivated. Features personalized reminders and a clean, distraction-free interface.",
    tech: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/yourusername/habit-tracker",
  },
];
