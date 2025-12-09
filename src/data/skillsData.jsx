
import React from 'react'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
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
  SiReact,
  SiNetlify,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import {
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiGitlab,
  SiJsonwebtokens,
  SiDjango,
} from 'react-icons/si'

export const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-400 text-6xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-sky-400 text-6xl" /> },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-300 text-6xl" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-400 text-6xl" />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-purple-400 text-6xl" />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="text-cyan-300 text-6xl" />,
  },
  { name: 'React.js', icon: <FaReact className="text-cyan-300 text-6xl" /> },
  { name: 'React (alt)', icon: <SiReact className="text-cyan-400 text-6xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-6xl" /> },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-gray-400 text-6xl" />,
  },
  { name: 'Java', icon: <FaJava className="text-orange-300 text-6xl" /> },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-lime-400 text-6xl" />,
  },
  { name: 'Python', icon: <FaPython className="text-teal-400 text-6xl" /> },
  { name: 'Django', icon: <SiDjango className="text-green-600 text-6xl" /> },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-emerald-400 text-6xl" />,
  },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-6xl" /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-sky-500 text-6xl" />,
  },
  { name: 'REST APIs', icon: <FaServer className="text-red-400 text-6xl" /> },
]

export const coreCS = [
  {
    name: 'Algorithms',
    icon: <FaProjectDiagram className="text-red-400 text-6xl" />,
  },
  {
    name: 'Data Structures (Java)',
    icon: <FaJava className="text-orange-300 text-6xl" />,
  },
  {
    name: 'Databases',
    icon: <FaDatabase className="text-blue-400 text-6xl" />,
  },
  {
    name: 'Software Engineering',
    icon: <FaProjectDiagram className="text-green-400 text-6xl" />,
  },
]

export const tools = [
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-6xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400 text-6xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-400 text-6xl" /> },
  { name: 'GitLab', icon: <SiGitlab className="text-orange-400 text-6xl" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-green-400 text-6xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white text-6xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-violet-400 text-6xl" /> },
  {
    name: 'JWT',
    icon: <SiJsonwebtokens className="text-yellow-400 text-6xl" />,
  },
]

export const softSkills = [
  {
    name: 'Communication',
    icon: <FaComments className="text-yellow-300 text-6xl" />,
  },
  { name: 'Teamwork', icon: <FaUsers className="text-purple-300 text-6xl" /> },
  {
    name: 'Leadership',
    icon: <FaLightbulb className="text-orange-300 text-6xl" />,
  },
  {
    name: 'Problem-Solving',
    icon: <FaCode className="text-red-300 text-6xl" />,
  },
  {
    name: 'Time Management',
    icon: <FaClock className="text-cyan-300 text-6xl" />,
  },
  {
    name: 'Public Speaking',
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
