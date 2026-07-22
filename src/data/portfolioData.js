import {
  FaReact,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaGithub,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import heroImage from "../assets/hero.png";

// Temporary placeholders (replace later with real images)
const aboutImage = heroImage;
const projectOne = heroImage;
const projectTwo = heroImage;
const projectThree = heroImage;

export const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Journey", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Education", to: "education" },
  { label: "Strengths", to: "achievements" },
  { label: "Certificates", to: "certificates" },
  { label: "Contact", to: "contact" },
];

export const heroDetails = {
  name: "Arjun Gupta",
  title: "Fresher Software Engineer",
  subtitle: [
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Flask Developer",
  ],
  description:
    "B.Tech Computer Science Engineering student building clean, user-focused web and mobile applications.",
  image: heroImage,
};

export const aboutDetails = {
  image: aboutImage,
  paragraph:
    "I am a passionate fresher Software Engineer and third-year B.Tech Computer Science Engineering student with strong problem-solving skills and an interest in full-stack development. I build clean, responsive applications with React, React Native, Flask, and modern web tools. I value readable code, thoughtful teamwork, continuous learning, and learning in public through open-source communities.",
  stats: [
    { label: "Education", value: "B.Tech CSE" },
    { label: "Status", value: "Fresher" },
    { label: "Focus", value: "Projects" },
  ],
};

export const skillsData = [
  {
    category: "Languages",
    icon: FaCode,
    skills: [
      { name: "Java", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 93 },
    ],
  },
  {
    category: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React", level: 94 },
      { name: "React Native", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 86 },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    skills: [
      { name: "Flask", level: 88 },
      { name: "Node.js", level: 89 },
      { name: "Express", level: 84 },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "SQLite", level: 82 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "Tools",
    icon: FaLaptopCode,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 91 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Expo", level: 87 },
      { name: "Vite", level: 90 },
    ],
  },
];

export const experienceData = [
  {
    title: "Full-Stack Project Learning",
    company: "Personal and academic projects",
    period: "Current learning journey",
    description:
      "Building modern web applications using React, Vite, and Tailwind CSS.",
    focus: "Responsive interfaces & component systems",
  },
  {
    title: "Mobile Development Exploration",
    company: "College project work",
    period: "Current learning journey",
    description:
      "Developing React Native applications with Flask backend and SQLite database.",
    focus: "Mobile-first product development",
  },
];

export const projectsData = [
  {
    title: "Lost & Found Management System",
    category: "Mobile",
    image: projectOne,
    description:
      "React Native + Flask application for reporting, searching, and claiming lost items.",
    tags: ["React Native", "Flask", "SQLite", "Authentication"],
    github: "https://github.com/",
    demo: "#",
    details: { summary: "A cross-platform system that makes reporting, discovering, and reclaiming lost property clear and accountable.", features: ["Secure user registration and authentication", "Image-backed item reports with searchable metadata", "Category, date, and status filters", "Claim workflow that keeps item ownership traceable"], challenge: "The main challenge was making a mobile flow simple enough for quick reporting while keeping the API, uploaded images, and claim lifecycle consistent.", stack: ["React Native", "Flask", "SQLite", "REST API", "Authentication"] },
  },
  {
    title: "Leave Management System",
    category: "Web",
    image: projectTwo,
    description:
      "Attendance and leave management system with admin approval dashboard.",
    tags: ["React", "Dashboard", "Attendance", "Admin"],
    github: "https://github.com/",
    demo: "#",
    details: { summary: "A dashboard-driven leave workflow for tracking attendance, submitting requests, and approving time off in one place.", features: ["Role-aware dashboard overview", "Attendance visibility and leave balances", "Structured leave request submission", "Administrator approval and status management"], challenge: "The system needed to present operational data at a glance while ensuring leave states remain understandable for both employees and administrators.", stack: ["React", "Dashboard UI", "JavaScript", "Responsive Design"] },
  },
  {
    title: "TravelX Website",
    category: "Web",
    image: projectThree,
    description:
      "Responsive travel website built using React and modern UI design.",
    tags: ["React", "Responsive", "UI/UX"],
    github: "https://github.com/",
    demo: "#",
    details: { summary: "A polished travel discovery experience designed to make destination browsing feel fast, visual, and intuitive across screen sizes.", features: ["Responsive destination and package layouts", "Reusable UI sections and visual hierarchy", "Mobile navigation experience", "Modern call-to-action and content presentation"], challenge: "The focus was retaining a premium visual rhythm on small screens without losing the richness of the desktop browsing experience.", stack: ["React", "CSS", "Responsive Design", "UI/UX"] },
  },
];

export const educationData = [
  {
    title: "B.Tech Computer Science Engineering",
    school: "Shivaji Rao Kadam Institute of Technology and Management",
    period: "2024 - 2028",
    details:
      "Specializing in Software Engineering, Web Development, and Mobile Applications.",
  },
  {
    title: "Senior Secondary School",
    school: "Gyan Sagar Vidhya Niketan",
    period: "2022 - 2024",
    details:
      "Completed Higher Secondary with a focus on Science and Mathematics.",
  },
];

export const certificatesData = [
  {
    title: "React Development",
    icon: FaReact,
  },
  {
    title: "Full Stack Development",
    icon: FaCode,
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
  },
  {
    title: "Backend Development",
    icon: FaServer,
  },
];

export const achievementsData = [
  { title: "Project-focused builder", detail: "Built multiple web and mobile projects that translate real-world workflows into usable software." },
  { title: "Modern full-stack foundation", detail: "Developing practical understanding of React, React Native, Flask, databases, and RESTful application design." },
  { title: "Problem-solving mindset", detail: "Strengthening Data Structures and Algorithms knowledge through consistent practice and application." },
  { title: "Continuous learner", detail: "Actively explores new technologies, clean-code patterns, and open-source learning resources." },
];

export const contactDetails = [
  {
    label: "Email",
    value: "arjungupta4020@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 7805055538",
    icon: FaPhone,
  },
  {
    label: "Location",
    value: "Indore, Madhya Pradesh",
    icon: FaMapMarkerAlt,
  },
  {
    label: "GitHub",
    value: "https://github.com/arjungupta932",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "https://linkedin.com/in/arjungupta932",
    icon: FaLinkedin,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arjungupta932",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arjungupta932",
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: FaTwitter,
  },
];
