import React, { useEffect, useRef, useState, memo } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { resumeSkills, hobbies } from '../data/skillsData.jsx'

const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </section>
  )
}

const SectionCard = memo(({ title, subtitle, children }) => (
  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-black/95 to-slate-950/95 p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
    <div className="mb-5">
      <p className="text-[11px] uppercase tracking-[0.3em] text-green-400/80">
        {subtitle}
      </p>
      <div className="mt-1 flex items-center gap-3">
        <h2 className="text-2xl md:text-2.5xl font-semibold text-green-400">
          {title}
        </h2>
        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
      </div>
    </div>
    {children}
  </div>
))

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-5 py-10 pt-28">
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <FadeInSection className="relative max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
          Muli Surya Narendra Reddy
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-300">
          Full-Stack Developer focused on scalable, user-centric web
          applications
        </p>
      </FadeInSection>

      <main className="relative max-w-6xl mx-auto space-y-8 md:space-y-10">
        <FadeInSection>
          <SectionCard title="Education" subtitle="Academic Journey">
            {educationData.map((edu, index) => (
              <article key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg md:text-xl font-semibold text-green-300">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm md:text-base text-gray-300">
                  {edu.institution}{' '}
                  <span className="ml-2 inline-block rounded-full bg-green-500 px-3 py-1 text-[11px] md:text-xs font-bold text-black">
                    {edu.year}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-200">{edu.cgpa}</p>
              </article>
            ))}
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard title="Skills" subtitle="Tech Stack">
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(resumeSkills).map(
                ([category, skillList], index) => (
                  <article key={index}>
                    <h3 className="text-lg font-semibold text-white">
                      {category}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs md:text-sm font-semibold text-green-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              )}
            </div>
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard title="Projects" subtitle="Selected Work">
            {projectsData.map((project, index) => (
              <article key={index} className="mb-5 last:mb-0">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm md:text-base text-gray-300">
                  {project.description}
                </p>
                <p className="mt-2 text-xs md:text-sm text-green-300">
                  <span className="text-[13px] md:text-sm font-semibold text-green-200">
                    Technologies:
                  </span>{' '}
                  {project.technologiesUsed.join(', ')}
                </p>
              </article>
            ))}
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard title="Certifications" subtitle="Credentials">
            <article className="mb-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Full-Stack Web Development
              </h3>
              <p className="mt-1 text-sm md:text-base text-gray-300">
                Engineers World, 2025
              </p>
            </article>
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard
            title="Internship Experience"
            subtitle="Industry Exposure"
          >
            <article>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Full Stack Developer Intern – Engineers World
              </h3>
              <p className="mt-1 text-sm md:text-base text-gray-300">
                1 Jan 2025 – 25 May 2025
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm md:text-base text-gray-300">
                <li>
                  Contributed to frontend and backend features of production web
                  apps.
                </li>
                <li>
                  Built responsive UIs in React and REST APIs using Node.js.
                </li>
                <li>
                  Worked with databases and deployment workflows in real
                  projects.
                </li>
              </ul>
            </article>
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard title="Languages" subtitle="Communication">
            <div className="grid gap-3 md:grid-cols-3">
              <article>
                <h3 className="text-base md:text-lg font-semibold text-white">
                  English
                </h3>
                <p className="text-sm text-gray-300">Fluent</p>
              </article>
              <article>
                <h3 className="text-base md:text-lg font-semibold text-white">
                  తెలుగు
                </h3>
                <p className="text-sm text-gray-300">Native</p>
              </article>
              <article>
                <h3 className="text-base md:text-lg font-semibold text-white">
                  हिंदी
                </h3>
                <p className="text-sm text-gray-300">Fluent</p>
              </article>
            </div>
          </SectionCard>
        </FadeInSection>

        <FadeInSection>
          <SectionCard title="Hobbies" subtitle="Beyond Code">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-gray-300">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="text-sm md:text-base font-semibold text-gray-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </SectionCard>
        </FadeInSection>

        <FadeInSection className="flex justify-center pt-2 pb-4">
          <a
            href="/Muli_Surya_Narendra_Reddy.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-green-500/90 px-7 py-3 text-sm md:text-base font-bold text-black shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:shadow-green-400/40 hover:-translate-y-0.5"
          >
            <RiDownload2Fill className="text-lg md:text-xl" />
            <span>Download Resume</span>
          </a>
        </FadeInSection>
      </main>
    </div>
  )
}

export default Resume
