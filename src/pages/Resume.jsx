import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFilePdf,
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
    Backend: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'Java',
      'Spring Boot',
    ],
    Tools: ['Git/GitHub', 'Netlify', 'Vercel'],
  }

  const projects = [
    {
      name: 'Trend Reserve',
      description:
        'An interactive e-commerce platform for seamless clothing purchases, featuring secure payments, fast delivery, and an intuitive UI.',
      technologiesUsed: [
        'React.js',
        'TailwindCSS',
        'Redux',
        'Express.js',
        'MongoDB',
        'Node.js',
      ],
    },
    {
      name: 'Portfolio Website',
      description:
        'A modern and engaging portfolio site showcasing projects and skills.',
      technologiesUsed: ['React.js', 'TailwindCSS', 'Netlify'],
    },
    {
      name: 'Engineers World',
      description:
        'A platform for engineers to collaborate, share knowledge, and access career opportunities.',
      technologiesUsed: ['React.js', 'CSS', 'Hostinger', 'Framer Motion'],
    },
    {
      name: 'Shadow Fax',
      description:
        'A logistics platform specializing in fast and reliable last-mile delivery.',
      technologiesUsed: [
        'React.js',
        'CSS',
        'Spring Boot',
        'MySQL',
        'RESTful APIs',
      ],
    },
  ]

  const hobbies = [
    'Coding',
    'Learning New Technologies',
    'Gaming',
    'UI Designing',
  ]

  return (
    <div
      className="text-gray-200 min-h-screen px-6 py-10 font-sans"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-lime-400">
          Muli Surya Narendra Reddy
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Full-Stack Developer | Passionate about scalable web applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <section className=" p-6 rounded-xl border-l-4 border-lime-400 shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium text-lime-300">
                {edu.degree}
              </h3>
              <p className="text-gray-300">
                {edu.institution} <span className="text-sm">({edu.year})</span>
              </p>
              <p className="text-sm text-gray-400">{edu.cgpa}</p>
            </div>
          ))}
        </section>

        <section className=" p-6 rounded-xl border-l-4 border-lime-400 shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Skills
          </h2>
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl text-lime-300">{category}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-lime-500 text-black px-3 py-1 rounded-lg text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className=" p-6 rounded-xl border-l-4 border-lime-400 shadow-md max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-xl text-lime-300 font-semibold">
              {project.name}
            </h3>
            <p className="text-gray-300">{project.description}</p>
            <p className="text-sm text-gray-400 mt-1">
              <strong>Technologies:</strong>{' '}
              {project.technologiesUsed.join(', ')}
            </p>
          </div>
        ))}
      </section>

      <section className=" p-6 rounded-xl border-l-4 border-lime-400 shadow-md max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <a
              href="mailto:suryanarendra1000@gmail.com"
              className="text-lime-300"
            >
              suryanarendra1000@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:+917993830599" className="text-lime-300">
              +91 79938 3XXXX
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://linkedin.com/in/muli-surya-narendra-reddy"
              className="text-lime-300"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaGithub className="text-gray-400" />
            <a href="https://github.com/Narendra-017" className="text-lime-300">
              GitHub
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            Faridabad, Haryana
          </p>
        </div>
      </section>

      <section className=" p-6 rounded-xl border-l-4 border-lime-400 shadow-md max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Hobbies</h2>
        <ul className="list-disc list-inside text-gray-300">
          {hobbies.map((hobby, index) => (
            <li key={index} className="text-lime-300">
              {hobby}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex justify-center mt-10 gap-5">
        <a
          href="/surya_resume.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-lime-500 text-black px-5 py-3 rounded-lg font-medium shadow hover:bg-lime-400 transition-transform duration-300 hover:scale-105"
        >
          <FaFilePdf /> View Resume
        </a>
        <a
          href="/surya_resume.pdf"
          download="Surya_Narendra_Resume.pdf"
          className="flex items-center gap-2 bg-lime-500 text-black px-5 py-3 rounded-lg font-medium shadow hover:bg-lime-400 transition-transform duration-300 hover:scale-105"
        >
          <RiDownload2Fill /> Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume
