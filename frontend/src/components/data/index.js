// ─── Skills ───────────────────────────────────────────────
export const skills = [
  { name: "JavaScript", level: 82, color: "#FBBF24" },
  { name: "React.js", level: 85, color: "#38BDF8" },
  { name: "Node.js / Express.js", level: 78, color: "#86EFAC" },
  { name: "Tailwind CSS", level: 88, color: "#34D399" },
  { name: "MongoDB", level: 75, color: "#4ADE80" },
  { name: "MySQL", level: 68, color: "#F87171" },
  { name: "Java", level: 55, color: "#A78BFA" },
  { name: "Three.js", level: 50, color: "#FB923C" },
];

export const skillCategories = [
  { label: "Frontend", items: ["JavaScript", "React.js", "Tailwind CSS", "Redux", "Three.js"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "JWT Auth", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "VS Code", "Tableau", "Power BI", "Excel", "Razorpay API"] },
];

// ─── Projects ─────────────────────────────────────────────
export const projects = [
  // {
  //   title: "Job Portal – Mini LinkedIn",
  //   desc: "Full-stack job portal with role-based access for Job Seekers, Employers, and Admin using JWT authentication. Features job posting, application tracking, and candidate management with secure REST APIs.",
  //   tags: ["Java", "Spring Boot", "React.js", "MySQL", "JWT"],
  //   color: "#38BDF8",
  //   icon: "💼",
  //   roles: [
  //     "Job Seeker: Register, log in, search jobs, apply & track applications",
  //     "Employer: Post jobs and manage candidate applications",
  //     "Admin: Manage users, jobs, and platform operations",
  //   ],
  //   link: "https://github.com/pavankumarvn1818",
  // },

  {
    title: "Course Academy",
    desc: "MERN-based e-learning platform with user and admin roles. Includes course purchase via Razorpay, lecture uploads, and secure user access with a responsive frontend.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    color: "#34D399",
    icon: "🎓",
    roles: [
      "User: Register, log in, view & buy courses via Razorpay, study enrolled courses",
      "Admin: Add new courses, upload lectures, edit course details",
    ],
    link: "https://github.com/pavankumarvn1818",
  },
  {
    title: "Online Bookstore",
    desc: "MERN-based e-commerce platform with role-based authentication for customers and administrators. Features secure registration, book browsing, cart management, and order placement.",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "#FBBF24",
    icon: "📚",
    roles: [
      "User: Secure login, book browsing, cart & favourites, order placement",
      "Admin: Manage product catalog — add, update & remove books",
    ],
    link: "https://github.com/pavankumarvn1818",
  },

  // {
  //   title: "Job Portal System",
  //   desc: "Scalable job portal with Spring Boot backend, React frontend, and MySQL database. Implements keyword-based job matching, role-based dashboards, and optimised queries using indexing.",
  //   tags: ["Java", "Spring Boot", "MySQL", "React.js", "Redux"],
  //   color: "#A78BFA",
  //   icon: "🔍",
  //   roles: [
  //     "Job Seeker: Register, search jobs, apply & track applications",
  //     "Employer: Post jobs, manage listings, view candidate applications",
  //     "Admin: Manage users, jobs, and platform activities",
  //   ],
  //   link: "https://github.com/pavankumarvn1818",
  // },
];

// ─── Timeline ─────────────────────────────────────────────
export const timeline = [
  {
    year: "2023 – 2026",
    title: "B.E. in Information Science & Engineering",
    sub: "CMRIT, AECS Layout, Bengaluru — 6.0 CGPA (Pursuing)",
    icon: "🎓",
    type: "education",
  },
  {
    year: "Aug 2025",
    title: "National Hackathon – HackMedia",
    sub: "Participated in national-level hackathon conducted by HackMedia at National College, Bengaluru.",
    icon: "⚡",
    type: "achievement",
  },
  {
    year: "Sep 23, 2025",
    title: "🥇 1st Prize – Project Expo (Guardian X)",
    sub: "Won 1st Prize at CMR University's National Level Project Expo – Tech Utsav. Guardian X is India's first anti-theft mobile app that works without Internet — featuring Alarm Sensor, Recovery Code, Intruder Alert, and Women Safety SMS automation.",
    tags: ["Flutter", "AI", "Mobile Security", "Anti-Theft"],
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7425424654019878912",
    projectUrl: "https://lnkd.in/g_QbBS6m",
    icon: "🏆",
    type: "achievement",
    highlight: true,
  },
  {
    year: "Mar – Jun 2023",
    title: "Full-Stack Intern",
    sub: "Athreya Technologies Pvt. Ltd., Hubli — Designed & implemented full-stack modules in a production environment",
    icon: "💼",
    type: "work",
  },
  {
    year: "Oct 2021 – Jun 2023",
    title: "Diploma in Computer Science & Engineering",
    sub: "GPT Siddapura, Uttara Kannada, Karnataka",
    icon: "📜",
    type: "education",
  },
  {
    year: "2024",
    title: "Hackathon – AVYNA 2024",
    sub: "Attended 24-hour hackathon, collaborated on real-world problem solving",
    icon: "🏅",
    type: "achievement",
  },
  {
    year: "2021",
    title: "Pre-University Course – Science",
    sub: "GPUC Sagara, Shimogga",
    icon: "📖",
    type: "education",
  },
  {
    year: "2019",
    title: "SSLC",
    sub: "GHS Labapura, Siddapura, Uttara Kannada",
    icon: "🏫",
    type: "education",
  },
];

export const certifications = [
  { name: "JavaScript", platform: "Udemy" },
  { name: "React & Express", platform: "Udemy" },
  { name: "Java Spring Boot & Microservices", platform: "Udemy" },
];

// ─── Contact ──────────────────────────────────────────────
export const contactInfo = [
  { icon: "📧", label: "pavn22ise@cmrit.ac.in", href: "mailto:pavn22ise@cmrit.ac.in" },
  { icon: "📧", label: "pavankumarvn18@gmail.com", href: "mailto:pavankumarvn18@gmail.com" },
  { icon: "📞", label: "+91 94810 08089", href: "tel:+919481008089" },
  { icon: "📍", label: "Bengaluru, Karnataka — 560037", href: null },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pavankumarvn18/" },
  { label: "GitHub", href: "https://github.com/pavankumarvn1818" },
  { label: "LeetCode", href: "https://leetcode.com/u/pavankumarvn18/" },
];

export const navLinks = ["About", "Skills", "Projects", "Achievements", "Contact"];
