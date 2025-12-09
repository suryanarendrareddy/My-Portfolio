// ../data/skillsData.jsx
import React from 'react'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaJava,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaComments,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaServer,
  FaClock,
  FaMicrophone,
  FaGithub,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiGitlab,
  SiJsonwebtokens,
  SiNetlify,
  SiVercel,
} from 'react-icons/si'

/* ---------------- FRONTEND ---------------- */

export const frontendSkills = [
  { name: 'HTML', level: 95, icon: <FaHtml5 className="text-orange-400 text-6xl" /> },
  { name: 'CSS', level: 92, icon: <FaCss3Alt className="text-blue-300 text-6xl" /> },
  {
    name: 'JavaScript',
    level: 90,
    icon: <FaJsSquare className="text-yellow-300 text-6xl" />,
  },
  {
    name: 'TypeScript',
    level: 80,
    icon: <SiTypescript className="text-blue-400 text-6xl" />,
  },
  { name: 'React.js', level: 93, icon: <FaReact className="text-cyan-300 text-6xl" /> },
  { name: 'Redux', level: 75, icon: <SiRedux className="text-violet-400 text-6xl" /> },
  {
    name: 'TailwindCSS',
    level: 88,
    icon: <SiTailwindcss className="text-cyan-300 text-6xl" />,
  },
  {
    name: 'Bootstrap',
    level: 78,
    icon: <FaBootstrap className="text-purple-400 text-6xl" />,
  },
]

/* ---------------- BACKEND ---------------- */

export const backendSkills = [
  { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-400 text-6xl" /> },
  {
    name: 'Express.js',
    level: 82,
    icon: <SiExpress className="text-gray-300 text-6xl" />,
  },
  { name: 'REST APIs', level: 90, icon: <FaServer className="text-red-400 text-6xl" /> },
  {
    name: 'JWT Auth',
    level: 75,
    icon: <SiJsonwebtokens className="text-yellow-300 text-6xl" />,
  },
  { name: 'Python', level: 78, icon: <FaPython className="text-teal-300 text-6xl" /> },
  { name: 'Java', level: 70, icon: <FaJava className="text-orange-300 text-6xl" /> },
]

/* ---------------- DATABASES ---------------- */

export const databaseSkills = [
  { name: 'MongoDB', level: 82, icon: <SiMongodb className="text-green-400 text-6xl" /> },
  { name: 'MySQL', level: 78, icon: <SiMysql className="text-blue-400 text-6xl" /> },
  {
    name: 'PostgreSQL',
    level: 75,
    icon: <SiPostgresql className="text-sky-400 text-6xl" />,
  },
]

/* ---------------- TOOLS ---------------- */

export const toolSkills = [
  { name: 'Git', level: 90, icon: <FaGitAlt className="text-red-400 text-6xl" /> },
  { name: 'GitHub', level: 92, icon: <FaGithub className="text-gray-300 text-6xl" /> },
  { name: 'GitLab', level: 76, icon: <SiGitlab className="text-orange-400 text-6xl" /> },
  {
    name: 'Postman',
    level: 88,
    icon: <SiPostman className="text-orange-400 text-6xl" />,
  },
  { name: 'Netlify', level: 70, icon: <SiNetlify className="text-green-400 text-6xl" /> },
  { name: 'Vercel', level: 68, icon: <SiVercel className="text-white text-6xl" /> },
]

/* ---------------- CORE CS ---------------- */

export const coreCS = [
  {
    name: 'Data Structures',
    level: 85,
    icon: <FaDatabase className="text-blue-400 text-6xl" />,
  },
  {
    name: 'Algorithms',
    level: 82,
    icon: <FaProjectDiagram className="text-red-400 text-6xl" />,
  },
  { name: 'OOPs', level: 80, icon: <FaJava className="text-orange-300 text-6xl" /> },
  {
    name: 'Operating Systems',
    level: 78,
    icon: <FaServer className="text-gray-400 text-6xl" />,
  },
]

/* ---------------- SOFT SKILLS ---------------- */

export const softSkills = [
  {
    name: 'Communication',
    level: 90,
    icon: <FaComments className="text-yellow-300 text-6xl" />,
  },
  { name: 'Teamwork', level: 85, icon: <FaUsers className="text-purple-300 text-6xl" /> },
  {
    name: 'Leadership',
    level: 78,
    icon: <FaLightbulb className="text-orange-300 text-6xl" />,
  },
  {
    name: 'Problem Solving',
    level: 88,
    icon: <FaCode className="text-red-300 text-6xl" />,
  },
  {
    name: 'Time Management',
    level: 72,
    icon: <FaClock className="text-cyan-300 text-6xl" />,
  },
  {
    name: 'Public Speaking',
    level: 70,
    icon: <FaMicrophone className="text-pink-400 text-6xl" />,
  },
]

export const resumeSkills = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React.js',
    'TailwindCSS',
    'Bootstrap',
  ],
  Backend: [
    'Python',
    'Django',
    'Django REST Framework',
    'Node.js',
    'Express.js',
    'Flask',
    'Java',
    'Spring Boot',
  ],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
  CoreCS: [
    'Data Structures & Algorithms (DSA)',
    'Object-Oriented Programming (OOPs)',
    'DBMS',
    'Operating Systems',
  ],
  Tools: [
    'Git & GitHub',
    'Postman',
    'VS Code',
    'Netlify',
    'Vercel',
    'JWT Authentication',
  ],
}

export const hobbies = [
  'Coding',
  'Learning New Technologies',
  'Building Full-Stack Projects',
  'Playing Volleyball',
  'Travelling',
  'Reading Tech Blogs',
  'Public Speaking',
]
