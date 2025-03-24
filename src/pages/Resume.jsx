import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { RiDownload2Fill } from 'react-icons/ri'

const Resume = () => {
  const education = [
    {
      degree: 'B.Tech - CSE',
      institution: 'Manav Rachna International University',
      year: '2022 - 2026',
      cgpa: 'CGPA: 6.5',
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'NRI Junior College',
      year: '2020 - 2022',
      cgpa: 'Marks: 941/1000',
    },
    {
      degree: 'SSC',
      institution: 'Sri Vivekananda High School',
      year: '2019 - 2020',
      cgpa: 'Marks: 589/600',
    },
  ]

  const skills = {
    Frontend: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'TailwindCSS',
      'React.js',
    ],
    Backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Java', 'Spring Boot'],
    Tools: ['Git/GitHub', 'Netlify', 'Git', 'Vercel'],
  }

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
      liveLink: '',
      githubLink: '',
    },
    {
      name: 'Engineers World',
      description:
        'Engineers World is a platform for engineers to collaborate, share knowledge, and access career opportunities.',
      technologiesUsed: ['React.js', 'CSS', 'Hostinger', 'Framer Motion'],
      liveLink: '',
      githubLink: '',
    },
    {
      name: 'Shadow Fax',
      description:
        'Shadowfax is a tech-driven logistics company specializing in fast and reliable last-mile delivery for e-commerce, food, and pharmaceuticals.',
      technologiesUsed: [
        'React.js',
        'CSS',
        'Spring Boot',
        'MySQL',
        'RESTful APIs',
      ],
      liveLink: '',
      githubLink: '',
    },
  ]

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-lime-500">
          Muli Surya Narendra Reddy
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Full-Stack Developer | Passionate about scalable web applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-lime-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 border-b border-gray-700 pb-2">
              <h3 className="text-xl font-semibold text-lime-400">
                {edu.degree}
              </h3>
              <p className="text-gray-300">
                {edu.institution} ({edu.year})
              </p>
              <p className="text-gray-400">{edu.cgpa}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-lime-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Skills</h2>
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-lime-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-lime-600 text-gray-900 px-3 py-1 rounded-lg font-semibold text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-lime-500 mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-2">
            <h3 className="text-xl font-bold text-lime-400">{project.name}</h3>
            <p className="text-gray-300 text-lg">{project.description}</p>
            <p className="text-gray-400">
              <strong>Technologies:</strong>{' '}
              {project.technologiesUsed.join(', ')}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-lime-500 mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <p className="flex items-center space-x-3">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <a
              href="mailto:suryanarendra1000@gmail.com"
              className="text-lime-400"
            >
              suryanarendra1000@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhone className="text-yellow-500 text-2xl" />
            <a href="tel:+917993830599" className="text-lime-400">
              +91 79938 3XXXX
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <a
              href="https://linkedin.com/in/muli-surya-narendra-reddy"
              className="text-lime-400"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaGithub className="text-gray-500 text-2xl" />
            <a href="https://github.com/Narendra-017" className="text-lime-400">
              GitHub
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span>Faridabad, Haryana</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/resume.pdf"
          download="Muli_Surya_Resume.pdf"
          className="flex items-center gap-2 font-medium bg-lime-500 text-black px-5 py-3 rounded-lg shadow-md hover:bg-lime-400 transition-transform duration-300 hover:scale-105"
        >
          <RiDownload2Fill className="text-xl" /> Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume
