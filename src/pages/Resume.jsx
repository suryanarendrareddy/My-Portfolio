import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { resumeSkills, hobbies } from '../data/skillsData.jsx'

const Resume = () => {
  return (
    <div className="text-white min-h-screen px-5 py-10 pt-32">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-lime-400">
          Muli Surya Narendra Reddy
        </h1>
        <p className="text-lg text-lime-200 mt-2">
          Full-Stack Developer | Passionate about scalable web applications
        </p>
      </header>

      <main>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <section className="p-6 rounded-xl border-l-4 border-lime-400 shadow-md bg-gradient-to-br from-black to-gray-900">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Education
            </h2>
            {educationData.map((edu, index) => (
              <article key={index} className="mb-4">
                <h3 className="text-xl font-medium text-lime-300">
                  {edu.degree}
                </h3>
                <p className="text-lime-200">
                  {edu.institution}{' '}
                  <span className="text-sm">({edu.year})</span>
                </p>
                <p className="text-sm text-lime-400">{edu.cgpa}</p>
              </article>
            ))}
          </section>
          <section className="p-6 rounded-xl border-l-4 border-lime-400 shadow-md bg-gradient-to-br from-black to-gray-900">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Skills
            </h2>
            {Object.entries(resumeSkills).map(
              ([category, skillList], index) => (
                <article key={index} className="mb-4">
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
                </article>
              )
            )}
          </section>
        </div>
        <section className="p-6 rounded-xl border-l-4 border-lime-400 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Projects
          </h2>
          {projectsData.map((project, index) => (
            <article key={index} className="mb-5">
              <h3 className="text-xl text-lime-300 font-semibold">
                {project.name}
              </h3>
              <p className="text-lime-200">{project.description}</p>
              <p className="text-sm text-lime-400 mt-1">
                <strong>Technologies:</strong>{' '}
                {project.technologiesUsed.join(', ')}
              </p>
            </article>
          ))}
        </section>

        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Hobbies
          </h2>
          <div className="flex justify-center gap-4 text-lime-200 flex-wrap">
            {hobbies.map((hobby, index) => (
              <span
                key={index}
                className="bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-semibold"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>
        <section className="mt-6 flex justify-center gap-4">
          <a
            href="/surya_resume.pdf"
            download
            className="flex items-center text-black bg-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-600 gap-2 transition duration-300"
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
