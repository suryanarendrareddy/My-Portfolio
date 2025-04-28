import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOnlinePrediction } from 'react-icons/md'

const projects = [
  {
    name: 'Amazon-Clone',
    description:
      "Built a responsive clone of Amazon's homepage using HTML, CSS and JavaScript, replicating real-world UI components like navbar, product listings, and banners to strengthen frontend development skills.",
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://narendra-017.github.io/amazon-clone/',
    githubLink: 'https://github.com/Narendra-017/amazon-clone',
  },
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
    liveLink: 'https://trend-reserve.vercel.app',
    githubLink: 'https://github.com/Narendra-017/trend-reserve',
  },
  {
    name: 'Portfolio Website',
    description:
      'Built a personal portfolio website using modern web technologies to showcase my projects and skills in an engaging manner.',
    technologiesUsed: ['React.js', 'TailwindCSS', 'Vercel'],
    liveLink: 'https://surya-narendra-portfolio.vercel.app/',
    githubLink: 'https://github.com/Narendra-017/My-Portfolio',
  },
  {
    name: 'Engineers World',
    description:
      'Engineers World is a platform for engineers to collaborate, share knowledge, and access career opportunities.',
    technologiesUsed: ['React.js', 'CSS', 'Hostinger', 'Framer Motion'],
    liveLink: 'https://engineersworld.in',
    githubLink: 'https://github.com/Narendra-017/engineersworld',
  },
  {
    name: 'Shadow Fax',
    description:
      'A logistics platform specializing in fast and reliable last-mile delivery.',
    technologiesUsed: [
      'React.js',
      'TailwindCSS',
      'Spring Boot',
      'MySQL',
      'REST APIs',
    ],
    liveLink: 'https://shadow-fax-1.netlify.app',
    githubLink:
      'https://github.com/Narendra-017/shadowFax/tree/main/Online-Booking/frontend',
  },
  {
    name: 'Online Job Application Tracker',
    description:
      'A platform to efficiently manage and track job applications with status updates and notifications.',
    technologiesUsed: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB','Express.js'],
    liveLink: 'https://your-tracker-app-link.com', 
    githubLink: 'https://github.com/Narendra-017/online-job-tracker',
  },
]

const Projects = () => {
  return (
    <div className="text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-lime-400 mb-14">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-700 hover:scale-[1.03] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4 md:text-[17px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologiesUsed.map((tech, i) => (
                <span
                  key={i}
                  className="bg-lime-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
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
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                >
                  <MdOnlinePrediction />Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
