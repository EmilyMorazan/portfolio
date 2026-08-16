import { ImageSource } from "expo-image";

export const profile = {
  name: "Emily",
  title: "Bachelor's in Computer Science",
  tagline:
    "I build software that solves real problems — from network security tools to user-friendly mobile apps.",
  bio: "I studied Computer Science at California State University, Northridge, passionate about full-stack development, cybersecurity, and building tools that make technology more accessible.",
  email: "emily.morazan7@gmail.com",
  github: "https://github.com/EmilyMorazan",
  linkedin: "https://www.linkedin.com/in/emily-morazan-142bbb2a1/",
  // Replace public/pinkResume.pdf anytime to update the download link.
  resumeUrl: "/pinkResume.pdf",
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
  school: "California State University, Northridge (CSUN)",
  degree1: "B.S. in Computer Science",
  mostRecentEdu: "University of California, Santa Barbara (UCSB)",
  degree2: "M.S. in Computer Engineering",
  period: "Expected 2028",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: ImageSource;
};

export const projects: Project[] = [
  {
    id: "network-analyzer",
    title: "Network Traffic Analyzer & Firewall",
    description:
      "Built a web application that monitors real-time network activity — traffic volume, IP address details, and connection speed. Implemented a rule-based firewall to block suspicious connections and improve network security.",
    tech: ["Python", "Flask", "React", "SQLite"],
    github: "https://github.com/EmilyMorazan/FirePy/tree/main/",
    demo: "https://your-demo-url.com",
    image: require("@/assets/images/firewall_image.png"),
  },
  {
    id: "habit-tracker",
    title: "Gamified Habit Tracker for ADHD",
    description:
      "Designed a habit tracker with game-like rewards, challenges, and progress tracking to help users with ADHD stay motivated. Features personalized reminders and a clean, distraction-free interface.",
    tech: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/yourusername/habit-tracker",
  },

  {
    id: "data-structures",
    title: "Data-Structures",
    description:
      "Developed a web application to teach and visualize data structures such as arrays, linked lists, stacks, and queues. Includes interactive examples and real-time feedback to enhance learning.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/EmilyMorazan/DataStructures",
    demo: "https://data-structures-iota.vercel.app/",
    image: require("@/assets/images/homePageDataStr.png"),
  },

  {
    id: "tire-detector",
    title: "Tire-Thread-Detection",
    description:
      "Developed a deep learning model to detect tire thread patterns and identify potential wear or damage. Utilized computer vision techniques for accurate and efficient analysis.",
    // specific technologies used for this project:
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "React + JSX"],
    //Tooling for better development experience: Used Vite for fast dev server and builds, npm for dependency management, and ESLint for code quality.
    github: "https://github.com/EmilyMorazan/Tire_Tread_Detection/",
    demo: "https://my-tire-project.vercel.app/",
    image: require("@/assets/images/tireProjectHomePage.png"),
  },
];
