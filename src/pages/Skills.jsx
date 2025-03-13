import React from 'react'
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
import {
  SiNetlify,
  SiVercel,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiHttpie,
  SiPostman,
  SiRedux,
  SiGitlab,
} from 'react-icons/si'

const skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 className="text-orange-500 text-6xl" />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="text-yellow-400 text-6xl" />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="text-purple-600 text-6xl" />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="text-cyan-500 text-6xl" />,
  },
  {
    name: 'React.js',
    icon: <FaReact className="text-blue-400 text-6xl" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500 text-6xl" />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-500 text-6xl" />,
  },
  {
    name: 'Java',
    icon: <FaJava className="text-red-500 text-6xl" />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-gray-400 text-6xl" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-green-500 text-6xl" />,
  },
  {
    name: 'DSA',
    icon: <FaProjectDiagram className="text-red-500 text-6xl" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-400 text-6xl" />,
  },
  {
    name: 'REST APIs',
    icon: <FaServer className="text-red-500 text-6xl" />,
  },
]

const softSkills = [
  {
    name: 'Communication',
    icon: <FaComments className="text-yellow-400 text-6xl" />,
  },
  {
    name: 'Teamwork',
    icon: <FaUsers className="text-purple-500 text-6xl" />,
  },
  {
    name: 'Leadership',
    icon: <FaLightbulb className="text-orange-400 text-6xl" />,
  },
  {
    name: 'Problem-Solving',
    icon: <FaCode className="text-red-400 text-6xl" />,
  },
  {
    name: 'Time Management',
    icon: <FaClock className="text-blue-500 text-6xl" />,
  },
  {
    name: 'Public Speaking',
    icon: <FaMicrophone className="text-red-500 text-6xl" />,
  },
]
const tools = [
  {
    name: 'Http',
    icon: <SiHttpie className="text-blue-500 text-6xl" />,
  },
  {
    name: 'Netlify',
    icon: <SiNetlify className="text-green-500 text-6xl" />,
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="text-white text-6xl" />,
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-red-500 text-6xl" />,
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-gray-500 text-6xl" />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className="text-orange-500 text-6xl" />,
  },
  {
    name: 'Redux',
    icon: <SiRedux className="text-blue-500 text-6xl" />,
  },
  {
    name: 'GitLab',
    icon: <SiGitlab className="text-orange-500 text-6xl" />,
  },
]

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text">
        Technical Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-lime-400"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-lime-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text mt-16">
        Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {tools.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-lime-400"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-lime-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-extrabold text-center mb-12 mt-16 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text">
        Soft Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-semibold text-yellow-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
