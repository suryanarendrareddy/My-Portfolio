import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { resumeSkills, hobbies } from '../data/skillsData.jsx'

const Resume = () => {
  return (
    <div className="text-white min-h-screen px-5 py-10 pt-32">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-green-500">
          Muli Surya Narendra Reddy
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Full-Stack Developer | Passionate about scalable web applications
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-10">
        
        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Education
          </h2>
          {educationData.map((edu, index) => (
            <article key={index} className="mb-4">
              <h3 className="text-xl font-medium text-green-400">
                {edu.degree}
              </h3>
              <p className="text-gray-400">
                {edu.institution}{' '}
                <span className="text-sm text-black bg-green-500 px-3 py-1 rounded-lg font-bold">
                  {edu.year}
                </span>
              </p>
              <p className="text-sm text-white mt-1">{edu.cgpa}</p>
            </article>
          ))}
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Skills</h2>
          {Object.entries(resumeSkills).map(([category, skillList], index) => (
            <article key={index} className="mb-4">
              <h3 className="text-xl text-white">{category}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Projects
          </h2>
          {projectsData.map((project, index) => (
            <article key={index} className="mb-5">
              <h3 className="text-xl text-white font-semibold">
                {project.name}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-sm text-green-300 mt-1">
                <strong className="text-[17px]">Technologies:</strong>{' '}
                {project.technologiesUsed.join(', ')}
              </p>
            </article>
          ))}
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Certifications
          </h2>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">
              Full-Stack Web Development
            </h3>
            <p className="text-gray-400">
              Certification from Engineers World - 2025
            </p>
          </article>
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Internship Experience
          </h2>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">
              Full Stack Developer Intern at Engineers World
            </h3>
            <p className="text-gray-400">
              Duration: 1 Jan, 2025 - 25 May, 2025
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>
                Worked on frontend and backend components of web applications.
              </li>
              <li>
                Built responsive UIs with React.js and developed APIs using
                Node.js.
              </li>
              <li>
                Gained practical experience with databases and deployment.
              </li>
            </ul>
          </article>
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Languages
          </h2>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">English</h3>
            <p className="text-gray-400">Fluent</p>
          </article>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">తెలుగు</h3>
            <p className="text-gray-400">Native</p>
          </article>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">हिंदी</h3>
            <p className="text-gray-400">Fluent</p>
          </article>
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-950">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Hobbies
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3 text-gray-300">
            {hobbies.map((hobby, index) => (
              <span key={index} className="text-gray-300 text-md font-bold">
                {hobby}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6 flex justify-center gap-4">
          <a
            href="/Muli_Surya_Narendra_Reddy.pdf"
            download
            className="flex items-center text-black bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 gap-2 transition duration-300 font-bold"
          >
            <RiDownload2Fill />
            Download Resume
          </a>
        </section>
      </main>
    </div>
  )
}

export default Resume
