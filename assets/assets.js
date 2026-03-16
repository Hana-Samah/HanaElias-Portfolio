import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import game_img from "./game_img.png";
import app_img from "./app_img.png";
import hotel_img from "./hotel_img.png";
import ai_img from "./ai_img.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// أولاً، استورد الأيقونات المطلوبة في أعلى الملف
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import {
  FaJava,
  FaPython,
  FaReact,
  FaUnity,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  game_img,
  app_img,
  hotel_img,
  ai_img,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Experience",
    description: "+4 years programmer",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Information Technology",
  },
];

export const toolsData = [
  assets.vscode,
  assets.figma,
  assets.git,
];
// ثانياً، عدلي المصفوفة لاستخدام مكون الأيقونة بدلاً من مسار الصورة
export const skillsData = [
  {
    name: "Java",
    IconComponent: FaJava, // نمرر اسم المكون نفسه
    color: "#5382a1", // اللون الرسمي
  },
  {
    name: "Python",
    IconComponent: FaPython,
    color: "#3776ab",
  },
  {
    name: "JavaScript",
    IconComponent: IoLogoJavascript,
    color: "#f7df1e",
  },
  {
    name: "React Native",
    IconComponent: FaReact,
    color: "#61dafb",
  },
  {
    name: "MySQL",
    IconComponent: GrMysql,
    color: "#00758f",
  },
  {
    name: "Unity",
    IconComponent: FaUnity,
    color: "#000000", // أو الأبيض إذا الخلفية داكنة
  },
  {
    name: "Figma",
    IconComponent: FaFigma,
    color: "#F24E1E",
  },
  {
    name: "Git",
    IconComponent: FaGitAlt,
    color: "#f1502f",
  },
];

// في آخر ملف assets.js

export const projectsData = [
  {
    title: "Animals Memory Match",
    description: "Educational matching game with progressive difficulty.",
    // أضيفي هذا الحقل الجديد "details"
    details:
      "This game, built specifically to sharpen children's cognitive abilities, provides an entertaining and highly effective platform for memory skill development. Developed using the robust Unity engine and C#, it features a dynamic difficulty system with multiple tiers (Easy, Medium, Hard) that intelligently adapt to the player. To ensure maximum replayability and engagement, the cards are algorithmically randomized with every session. I personally drove the end-to-end development process, overseeing all core game logic, intuitive UI/UX design, and seamless integration of sound effects and animations to deliver a polished and superior user experience.",
    bgImage: assets.game_img,
    link: "https://hanaelias.itch.io/animals-memory-match",
    tools: ["Unity", "C#"],
  },
  {
    title: "Linoo - Autism Support App",
    description: "Mobile app with communication tools for children.",
    // أضيفي هذا الحقل الجديد "details"
    details:
      "A high-impact, cross-platform mobile application developed using React Native and Expo, carefully designed to support Arabic-speaking children with Autism Spectrum Disorder (ASD) and their caregivers. This specialized tool addresses key communication barriers by integrating essential features, including Picture Exchange Communication System (PECS) boards, interactive Social Stories for daily task sequencing, and a comprehensive resource hub tailored to support and guide parents. The project has been successfully completed.",
    bgImage: assets.app_img,
    link: "https://expo.dev/accounts/hanasamah/projects/linoo/builds/f4344689-4488-4c98-b6c8-ddcc8e252a97",
    tools: ["React Native", "Expo", "Figma"],
  },
  {
    title: "Hotel Management System",
    description: "Full booking system for users and admins.",
    // أضيفي هذا الحقل الجديد "details"
    details:
      "A robust and comprehensive web-based management system engineered to streamline operations for small to medium-sized hotels. The platform provides distinct, secure dashboards: a user-facing portal for seamless room booking, and a dedicated administrator dashboard for efficient management of reservations, inventory (rooms), and staff oversight. Architected using the highly scalable Laravel PHP framework and optimized with MySQL, this project powerfully demonstrates advanced competence in secure backend architecture design, relational database modeling, and implementing robust authentication protocols.",
    bgImage: assets.hotel_img,
    link: "https://github.com/Hana-Samah/ROSE-Hotel.git",
    tools: ["Laravel", "MySQL", "PHP"],
  },
  {
    title: "AI Laptop & Phone Price Prediction",
    description: "ML model to estimate laptop prices for e-commerce.",
    // أضيفي هذا الحقل الجديد "details"
    details:
      "A sophisticated Machine Learning project focused on predictive pricing analytics for high-demand electronic devices, specifically mobile phones and laptops. Utilizing Python, along with industry-standard libraries like Scikit-learn and Pandas, I executed a rigorous process encompassing extensive data cleaning and preprocessing, advanced feature engineering, and the training of multiple regression models. The culmination was a highly accurate final model that provides reliable price predictions based on detailed device specifications, significantly exceeding baseline performance benchmarks.",
    bgImage: assets.ai_img,
    link: "https://github.com/Hana-Samah/ai-ml-with-python-and-knime-2024.git",
    tools: ["Python", "Machine Learning"],
  },
];
