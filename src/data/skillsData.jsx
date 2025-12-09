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

const iconClass = 'text-5xl md:text-6xl'

export const frontendSkills = [
  { name: 'HTML', level: 95, icon: <FaHtml5 className={iconClass} /> },
  { name: 'CSS', level: 92, icon: <FaCss3Alt className={iconClass} /> },
  { name: 'JavaScript', level: 90, icon: <FaJsSquare className={iconClass} /> },
  { name: 'TypeScript', level: 80, icon: <SiTypescript className={iconClass} /> },
  { name: 'React.js', level: 93, icon: <FaReact className={iconClass} /> },
  { name: 'Redux', level: 75, icon: <SiRedux className={iconClass} /> },
  { name: 'TailwindCSS', level: 88, icon: <SiTailwindcss className={iconClass} /> },
  { name: 'Bootstrap', level: 78, icon: <FaBootstrap className={iconClass} /> },
]

export const backendSkills = [
  { name: 'Node.js', level: 85, icon: <FaNodeJs className={iconClass} /> },
  { name: 'Express.js', level: 82, icon: <SiExpress className={iconClass} /> },
  { name: 'REST APIs', level: 90, icon: <FaServer className={iconClass} /> },
  { name: 'JWT Auth', level: 75, icon: <SiJsonwebtokens className={iconClass} /> },
  { name: 'Python', level: 78, icon: <FaPython className={iconClass} /> },
  { name: 'Java', level: 70, icon: <FaJava className={iconClass} /> },
]

export const databaseSkills = [
  { name: 'MongoDB', level: 82, icon: <SiMongodb className={iconClass} /> },
  { name: 'MySQL', level: 78, icon: <SiMysql className={iconClass} /> },
  { name: 'PostgreSQL', level: 75, icon: <SiPostgresql className={iconClass} /> },
]

export const toolSkills = [
  { name: 'Git', level: 90, icon: <FaGitAlt className={iconClass} /> },
  { name: 'GitHub', level: 92, icon: <FaGithub className={iconClass} /> },
  { name: 'GitLab', level: 76, icon: <SiGitlab className={iconClass} /> },
  { name: 'Postman', level: 88, icon: <SiPostman className={iconClass} /> },
  { name: 'Netlify', level: 70, icon: <SiNetlify className={iconClass} /> },
  { name: 'Vercel', level: 68, icon: <SiVercel className={iconClass} /> },
]

export const coreCS = [
  { name: 'Data Structures', level: 85, icon: <FaDatabase className={iconClass} /> },
  { name: 'Algorithms', level: 82, icon: <FaProjectDiagram className={iconClass} /> },
  {
    name: 'Object-Oriented Programming (OOP)',
    level: 80,
    icon: <FaJava className={iconClass} />,
  },
  { name: 'Operating Systems', level: 78, icon: <FaServer className={iconClass} /> },
]

export const softSkills = [
  { name: 'Communication', level: 90, icon: <FaComments className={iconClass} /> },
  { name: 'Teamwork', level: 85, icon: <FaUsers className={iconClass} /> },
  { name: 'Leadership', level: 78, icon: <FaLightbulb className={iconClass} /> },
  { name: 'Problem Solving', level: 88, icon: <FaCode className={iconClass} /> },
  { name: 'Time Management', level: 72, icon: <FaClock className={iconClass} /> },
  { name: 'Public Speaking', level: 70, icon: <FaMicrophone className={iconClass} /> },
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
  Backend: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'Java', 'Spring Boot'],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
  CoreCS: ['Data Structures & Algorithms (DSA)', 'OOP', 'DBMS', 'Operating Systems'],
  Tools: ['Git & GitHub', 'Postman', 'VS Code', 'Netlify', 'Vercel', 'JWT'],
}

export const hobbies = [
  'Coding',
  'Learning new technologies',
  'Building full-stack projects',
  'Volleyball',
  'Travelling',
  'Reading tech blogs',
  'Public speaking',
]
