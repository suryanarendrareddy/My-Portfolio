import React, { Suspense } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOnlinePrediction } from 'react-icons/md'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projects.jsx'

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-black bg-opacity-30 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-700 hover:scale-[1.03] transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h2 className="text-2xl font-bold text-green-400 mb-3">{project.name}</h2>
    <p className="text-gray-300 mb-4 md:text-[17px]">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologiesUsed.map((tech, i) => (
        <span
          key={i}
          className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          <MdOnlinePrediction />
          Live
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          <FaGithub /> GitHub
        </a>
      )}
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <div className="text-white pt-24 px-5 mb-10">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-14">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <Suspense
          fallback={
            <div className="text-center text-lg text-gray-400">
              Loading Projects...
            </div>
          }
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}

export default Projects
