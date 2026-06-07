// SHYAMVERSE content data
// All copy lives here so chapters stay focused on layout / animation.

export const HERO = {
  name: "F. SHYAM SUNDAR",
  role: "Full Stack Developer",
  location: "Chennai, India",
  tagline: "I build scalable web applications that solve real problems.",
  stats: [
    { label: "Code Power", value: 95, color: "red" },
    { label: "Logic", value: 92, color: "cyan" },
    { label: "Creativity", value: 88, color: "yellow" },
    { label: "Problem Solving", value: 94, color: "red" },
    { label: "Coffee Power", value: 99, color: "yellow" },
  ],
};

export const RESUME_FILE = "/Shyam_Sundar_Resume.pdf";

export const ORIGIN_PANELS = [
  {
    chapter: "01",
    title: "The Spark",
    text: "A curious engineering student opens his first IDE. Lines of code light up like neon signs over a sleeping city.",
    accent: "yellow",
  },
  {
    chapter: "02",
    title: "The Training",
    text: "Nights become days. Bugs become teachers. He learns React, Node and the dark arts of debugging at 3 AM.",
    accent: "cyan",
  },
  {
    chapter: "03",
    title: "The Mission Call",
    text: "Internships arrive like distress signals. Production code, real users, real deadlines - the hero answers.",
    accent: "red",
  },
  {
    chapter: "04",
    title: "The Full Stack Hero",
    text: "Frontend, backend, databases, real-time, auth, payments - one developer, end-to-end shipping power.",
    accent: "navy",
  },
];

export const SKILLS = [
  { name: "React.js", power: 95, color: "cyan", icon: "R" },
  { name: "Redux Toolkit", power: 86, color: "red", icon: "RT" },
  { name: "HTML5", power: 90, color: "yellow", icon: "HTML" },
  { name: "CSS3", power: 90, color: "cyan", icon: "CSS" },
  { name: "Tailwind CSS", power: 93, color: "cyan", icon: "~" },
  { name: "Responsive Design", power: 88, color: "yellow", icon: "RD" },
  { name: "Vite", power: 85, color: "red", icon: "VITE" },
  { name: "JavaScript (ES6+)", power: 96, color: "yellow", icon: "JS" },
  { name: "Node.js", power: 92, color: "yellow", icon: "NODE" },
  { name: "Express.js", power: 90, color: "red", icon: "EXP" },
  { name: "RESTful APIs", power: 89, color: "cyan", icon: "API" },
  { name: "MVC Architecture", power: 87, color: "navy", icon: "MVC" },
  { name: "Socket.io", power: 84, color: "yellow", icon: "SOCK" },
  { name: "WebRTC", power: 80, color: "red", icon: "RTC" },
  { name: "JWT Authentication", power: 88, color: "navy", icon: "JWT" },
  { name: "MongoDB (Mongoose)", power: 88, color: "cyan", icon: "MNG" },
  { name: "MySQL", power: 82, color: "yellow", icon: "SQL" },
  { name: "Figma", power: 82, color: "yellow", icon: "FIG" },
  { name: "AWS", power: 78, color: "cyan", icon: "AWS" },
  { name: "npm", power: 88, color: "red", icon: "NPM" },
];

export const MISSIONS = [
  {
    code: "MISSION 001",
    title: "Focus-Room",
    role: "Lead Full Stack Engineer",
    status: "Completed",
    accent: "cyan",
    story:
      "A real-time virtual study room where heroes-in-training collaborate, share video, and crush deadlines together.",
    features: [
      "WebRTC group video & audio rooms",
      "Real-time chat over Socket.io",
      "Pomodoro timers & focus analytics",
      "JWT auth & secure room invites",
    ],
    stack: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "Tailwind",
    ],
    links: {
      demo: "https://focus-room-frontend.vercel.app/",
      code: "https://github.com/FShyamsundar/FocusRoom",
      study: "https://github.com/FShyamsundar/FocusRoom",
    },
  },
  {
    code: "MISSION 002",
    title: "Online Food Delivery System",
    role: "Full Stack Developer",
    status: "Completed",
    accent: "red",
    story:
      "An end-to-end ordering universe - customers, restaurants and a dispatch dashboard, all under one MERN roof.",
    features: [
      "Cart, checkout & payment integration",
      "Role-based dashboards (admin / vendor / user)",
      "Live order tracking",
      "Image uploads & menu management",
    ],
    stack: ["React", "Redux Toolkit", "Node", "Express", "MongoDB", "Stripe"],
    links: {
      demo: "https://foodhubappbyshyam.netlify.app/",
      code: "https://github.com/FShyamsundar/fooddeliveryappfrontend",
      study: "https://github.com/FShyamsundar/fooddeliveryappfrontend",
    },
  },
  {
    code: "MISSION 003",
    title: "Role-Based Task Management Dashboard",
    role: "Full Stack Developer",
    status: "Completed",
    accent: "yellow",
    story:
      "A productivity command-center where managers assign quests, members report progress and admins control the whole HQ.",
    features: [
      "Granular role-based access control",
      "Kanban + list views with drag & drop",
      "JWT auth + refresh-token rotation",
      "Activity feed & notifications",
    ],
    stack: ["React", "Tailwind", "Node", "Express", "MongoDB", "JWT"],
    links: {
      demo: "https://taskflow-management-hazel.vercel.app/login",
      code: "https://github.com/FShyamsundar/Rolebased-Task-Management",
      study: "https://github.com/FShyamsundar/Rolebased-Task-Management",
    },
  },
];

export const CERTIFICATIONS = [
  {
    issuer: "IIT Madras Pravartak",
    title: "Certified Full Stack Development with AI Tools",
    year: "2025",
    accent: "cyan",
    mainImage: "/IIT-M Full Stack Certificate.png",
    supportingImages: [],
    tags: ["IIT-M", "AI Tools", "Full Stack"],
  },
  {
    issuer: "GUVI",
    title: "MERN Stack Development Certification",
    year: "2025",
    accent: "yellow",
    mainImage: "/React js Certificate.png",
    supportingImages: ["/Node Js Certificate.png", "/Database Certificate.png"],
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    issuer: "GUVI",
    title:
      "Full Stack Web Development Fundamentals (React, Node, Express, MongoDB)",
    year: "2025",
    accent: "red",
    mainImage: "/Html,CSS & Tailwind CSS Certificate.png",
    supportingImages: ["/Js Basics Certificate.png", "/Advanced Js Certificate.png"],
    tags: ["HTML/CSS", "JavaScript", "Web Fundamentals"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Internships Shipped",
    sub: "2 production-grade tours of duty",
    icon: "🏅",
  },
  {
    title: "Real-World Projects",
    sub: "From spec -> deploy -> support",
    icon: "🛰",
  },
  {
    title: "Production Deployments",
    sub: "CI/CD, monitoring, rollback",
    icon: "🚀",
  },
  {
    title: "Real-Time Applications",
    sub: "Socket.io & WebRTC in production",
    icon: "⚡",
  },
  {
    title: "Authentication Systems",
    sub: "JWT, refresh tokens, RBAC",
    icon: "🔐",
  },
  {
    title: "Payment Integrations",
    sub: "Cart -> checkout -> webhook",
    icon: "💳",
  },
  {
    title: "Role-Based Systems",
    sub: "Admin / vendor / user flows",
    icon: "👥",
  },
];

export const BATTLES = [
  {
    company: "Re-tech Pvt. Ltd.",
    role: "Full Stack Development Intern",
    period: "June 2024 - July 2024",
    wins: [
      "Shipped role-based dashboards used in production",
      "Built REST APIs with Node + Express + MongoDB",
      "Improved page load times with code-splitting",
    ],
  },
  {
    company: "BUYP Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Aug 2023 - Sep 2023",
    wins: [
      "Owned end-to-end features across MERN stack",
      "Integrated auth flows & secure payment screens",
      "Collaborated in agile sprints with design + QA",
    ],
  },
];

export const EDUCATION = {
  degree: "B.E. EEE",
  college: "St. Joseph's College of Engineering, Chennai",
  cgpa: "8.34",
  period: "2021 - 2025",
};

export const POWER_UPS = CERTIFICATIONS;

export const ARSENAL = [
  { name: "VS Code", tag: "Cockpit", icon: "⌘" },
  { name: "GitHub", tag: "Vault", icon: "⎇" },
  { name: "Postman", tag: "Scanner", icon: "✉" },
  { name: "MongoDB", tag: "Memory Core", icon: "🍃" },
  { name: "AWS", tag: "Sky Fortress", icon: "☁" },
  { name: "Figma", tag: "Blueprint", icon: "✎" },
  { name: "npm", tag: "Armory", icon: "⎈" },
];
