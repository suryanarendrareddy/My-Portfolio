import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { resumeSkills, hobbies } from '../data/skillsData.jsx'

const Resume = () => {
  return (
    <div className="text-white min-h-screen px-5 py-10 pt-32">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Muli Surya Narendra Reddy
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Full-Stack Developer | Passionate about scalable web applications
        </p>
      </header>

      <main>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Education
            </h2>
            {educationData.map((edu, index) => (
              <article key={index} className="mb-4">
                <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                <p className="text-gray-400">
                  {edu.institution} <span className="text-sm">{edu.year}</span>
                </p>
                <p className="text-sm text-green-300">{edu.cgpa}</p>
              </article>
            ))}
          </section>
          <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Skills
            </h2>
            {Object.entries(resumeSkills).map(
              ([category, skillList], index) => (
                <article key={index} className="mb-4">
                  <h3 className="text-xl text-white">{category}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillList.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold"
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

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
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
                <strong>Technologies:</strong>{' '}
                {project.technologiesUsed.join(', ')}
              </p>
            </article>
          ))}
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Certifications
          </h2>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">
              Full-Stack Web Development
            </h3>
            <p className="text-gray-400">
              Certification from Engineers world - 2025
            </p>
          </article>
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Professional Experience
          </h2>
          <article className="mb-4">
            <h3 className="text-xl font-medium text-white">
              Full Stack Developer at Engineers World
            </h3>
            <p className="text-gray-400">Duration: 1 Jan, 2025 - Present</p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>
                Developed and maintained both frontend and backend components of
                web applications.
              </li>
              <li>
                Utilized technologies such as React.js and Node.js to deliver
                scalable solutions.
              </li>
              <li>
                Collaborated with cross-functional teams to ensure seamless
                integration and optimize performance.
              </li>
              <li>
                Managed databases, conducted code reviews, and ensured timely
                delivery of features.
              </li>
            </ul>
          </article>
        </section>

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
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

        <section className="p-6 rounded-xl border-l-4 border-green-500 shadow-md bg-gradient-to-br from-black to-gray-900 max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Testimonials
          </h2>
          <article className="mb-4">
            <p className="text-gray-400 italic">
              "Surya is an outstanding full-stack developer. His attention to
              detail and problem-solving ability is commendable." - Akshay
              Kumar, CEO of Engineers World
            </p>
          </article>
        </section>

        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Hobbies
          </h2>
          <div className="flex justify-center gap-4 text-gray-300 flex-wrap">
            {hobbies.map((hobby, index) => (
              <span
                key={index}
                className="bg-green-500 text-black px-4 py-2 rounded-lg text-sm font-bold"
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
