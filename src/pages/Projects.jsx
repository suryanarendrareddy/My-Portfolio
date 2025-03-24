import React from 'react'

const projects = [
  {
    name: 'Trend Reserve',
    description:
      'Developed an interactive e-commerce platform for seamless clothing purchases, featuring secure payments, fast delivery, and an intuitive UI.',
    technologiesUsed: [
      'React.js',
      'TailwindCSS',
      'Redux',
      'Express.js',
      'MongoDB',
      'Node.js',
    ],
    liveLink: '',
    githubLink: '',
  },
  {
    name: 'Portfolio Website',
    description:
      'Built a personal portfolio website using modern web technologies to showcase my projects and skills in an engaging manner.',
    technologiesUsed: ['React.js', 'TailwindCSS', 'Netlify'],
    liveLink: 'https://surya-narendra-portfolio.vercel.app/',
    githubLink: 'https://github.com/Narendra-017/My-Portfolio',
  },
  {
    name: 'Engineers World',
    description:
      'Engineers World is a platform for engineers to collaborate, share knowledge, and access career opportunities.',
    technologiesUsed: ['React.js', 'CSS', 'Hostinger', 'Framer Motion'],
    liveLink: 'https://engineersworld.in',
    githubLink: '',
  },
  {
    name: 'Shadow Fax',
    description:
      'Shadowfax is a tech-driven logistics company specializing in fast and reliable last-mile delivery for e-commerce, food, and pharmaceuticals.',
    technologiesUsed: ['React.js', 'CSS', 'Spring Boot', 'MySQL', 'REST APIs'],
    liveLink: '',
    githubLink: '',
  },
]

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center text-lime-400 mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4 font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologiesUsed.map((tech, i) => (
                <span
                  key={i}
                  className="bg-lime-600 text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition duration-300 shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
