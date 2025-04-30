import React from 'react'
import { skills, coreCS, tools, softSkills } from '../data/skillsData.jsx'

const Skills = () => {
  console.log(skills, coreCS, tools, softSkills) 

  return (
    <div className="text-white min-h-screen py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-700 hover:border-cyan-400"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-cyan-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-5xl font-extrabold text-center mb-12 mt-16 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text">
        Core CS Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {coreCS.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-700 hover:border-cyan-400"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-cyan-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-extrabold text-center mb-12 mt-16 bg-gradient-to-r from-lime-400 to-yellow-400 text-transparent bg-clip-text">
        Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {tools.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-700 hover:border-cyan-400"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-cyan-300">
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
            className="flex flex-col items-center bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300 border-2 border-gray-700 hover:border-yellow-300"
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
