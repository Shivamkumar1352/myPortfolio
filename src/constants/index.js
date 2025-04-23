import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Lovely Professional University",
    company_name: "Punjab, India",
    icon: eduskill,
    iconBg: "#161329",
    date: "2022 - 2026",
    points: [
      "Pursuing Bachelor of Technology in Computer Science and Engineering.",
      "Achieved a CGPA of 8.22 while engaging in both academic and practical projects.",
      "Built multiple full-stack web applications using MERN stack, showcasing real-world application skills.",
    ],
  },
  {
    title: "Himalayan International School",
    company_name: "Bihar, India",
    icon: eduskill,
    iconBg: "#161329",
    date: "2020-2021",
    points: [
      "Completed Intermediate (Class XII) with a strong academic record.",
      "Focused on foundational subjects crucial for Computer Science studies.",
    ],
  },
  {
    title: "Dr. D.Ram D.A.V. Public School",
    company_name: "Bihar, India",
    icon: eduskill,
    iconBg: "#161329",
    date: "2018-2019",
    points: [
      "Completed High School (Class X), building a solid base in Science and Mathematics.",
      "Developed early problem-solving and analytical thinking skills."
    ],
  },
];


export const projects = [
  {
    name: "Online Cart System",
    description:
      "Web-based platform that allows users to add items to cart with proper razorpay payment gateway",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
      { name: "Razorpay API", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/Shivamkumar1352/OnlineShoppingCart",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
