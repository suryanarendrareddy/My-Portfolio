// skillsData.js
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaJava,
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
import { TbBrandReactNative } from 'react-icons/tb'
import {
  SiNetlify,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiHttpie,
  SiPostman,
  SiRedux,
  SiGitlab,
} from 'react-icons/si'

export const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-400 text-6xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-sky-400 text-6xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300 text-6xl" /> },
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
  {
    name: 'React Native',
    icon: <TbBrandReactNative className="text-cyan-400 text-6xl" />,
  },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-6xl" /> },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-emerald-400 text-6xl" />,
  },
  { name: 'Java', icon: <FaJava className="text-orange-300 text-6xl" /> },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-gray-400 text-6xl" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-lime-400 text-6xl" />,
  },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-6xl" /> },
  { name: 'REST APIs', icon: <FaServer className="text-red-400 text-6xl" /> },
]

export const coreCS = [
  {
    name: 'Algorithms',
    icon: <FaProjectDiagram className="text-red-400 text-6xl" />,
  },
  {
    name: 'Data Structures through Java',
    icon: <FaJava className="text-orange-300 text-6xl" />,
  },
  { name: 'Databases', icon: <SiMysql className="text-blue-400 text-6xl" /> },
  {
    name: 'Software Engineering',
    icon: <FaProjectDiagram className="text-green-400 text-6xl" />,
  },
]

export const tools = [
  { name: 'Http', icon: <SiHttpie className="text-blue-400 text-6xl" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-green-400 text-6xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white text-6xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400 text-6xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-400 text-6xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-6xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-300 text-6xl" /> },
  { name: 'GitLab', icon: <SiGitlab className="text-orange-400 text-6xl" /> },
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
    'Bootstrap',
    'TailwindCSS',
    'React.js',
  ],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Java', 'Spring Boot'],
  Tools: ['Git/GitHub', 'Netlify', 'Vercel'],
}

export const hobbies = [
  'Coding',
  'Learning New Technologies',
  'Online Games',
  'Volley Ball',
  'Travelling',
  'Volunteering',
  'Origami',
  'Reading',
  'Public Speaking',
  'Watching Movies',
]