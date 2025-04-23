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
    name: "Apartment Visitor Management",
    description:
      "This project is a digital Visitor Management System designed to securely store and manage visitor data for easy accessibility.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/Shivamkumar1352/AVMS",
  },
  {
    name: "Notes taking application",
    description:
      "A Notes taking application designed to help users organize their notes effectively. A website based on CRUD operations making notes on an online portal.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "MongoDb", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/Shivamkumar1352/Notes.me",
  },
  {
    name: "Auction Hunter",
    description:
      "A web application for real timeauction with auctioner and bidder dashboard",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDb", color: "blue-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/Shivamkumar1352/AuctionHunter",
  },
  {
    name: "Buy-sell",
    description:
      "An E-commerce website for seller and buyer at negotiable price",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/Shivamkumar1352/Buy-Sell",
  },
  {
    name: "Chat application",
    description:
      "A real time chat application for two users to interact with each other in real time.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "NodeJs", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/Shivamkumar1352/Realtime-NodeJs-Chat-App-MySpace",
  },
];
