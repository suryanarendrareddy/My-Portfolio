import React, { useEffect, useRef, useState, memo } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { resumeSkills, hobbies } from '../data/skillsData.jsx'

const Reveal = ({
  children,
  className = '',
  rootMargin = '0px 0px -10% 0px',
}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return (
    <section
      ref={ref}
      className={`transform transition-all duration-700 ease-out will-change-transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </section>
  )
}

const SectionCard = memo(({ title, subtitle, children, accent }) => (
  <div className="relative rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/95 to-black/95 p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.75)] overflow-hidden">
    <div className="mb-5 flex items-center gap-4">
      <div
        className={`h-3 w-14 rounded-full ${
          accent ||
          'bg-gradient-to-r from-green-400 via-emerald-300 to-green-500'
        }`}
      />
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-green-400/80">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-2.5xl font-semibold text-green-300 -mt-1">
          {title}
        </h2>
      </div>
    </div>
    {children}
  </div>
))

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-4 border border-white/6 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/3 hover:bg-white/5 transition"
      >
        <span className="text-left text-sm md:text-base font-semibold text-white">
          {title}
        </span>
        <span
          className={`text-sm text-green-300 transform transition-transform ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`px-4 pb-4 transition-[max-height] duration-400 ease-out overflow-hidden ${
          open ? 'max-h-[600px] pt-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

const SkillTag = ({ children }) => (
  <span className="inline-block rounded-full border border-green-500/30 bg-green-500/8 px-3 py-1 text-xs md:text-sm font-semibold text-green-200 mr-2 mb-2">
    {children}
  </span>
)

const ProjectItem = ({ project }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-4 rounded-xl border border-white/6 bg-gradient-to-br from-black/60 to-slate-900/60 transition transform hover:-translate-y-1 shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="text-sm text-gray-300 mt-1 line-clamp-3">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className={`text-xs px-3 py-1 rounded-full ${
              hover ? 'bg-green-400 text-black' : 'bg-white/5 text-gray-200'
            }`}
          >
            {project.year || '2024'}
          </div>
          <a
            href={project.githubLink || '#'}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-300 hover:text-green-300 transition"
          >
            Code
          </a>
        </div>
      </div>
      <div className="mt-3">
        {project.technologiesUsed?.slice(0, 6).map((t, i) => (
          <SkillTag key={i}>{t}</SkillTag>
        ))}
      </div>
    </div>
  )
}

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-5 py-12 pt-28">
      <div className="pointer-events-none absolute -top-40 -left-24 h-80 w-80 rounded-full bg-green-500/12 blur-3xl transition-transform" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl transition-transform" />

      <Reveal className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400">
          Muli Surya Narendra Reddy
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-300">
          Full-Stack Developer focused on scalable, accessible web applications.
        </p>
      </Reveal>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Reveal>
            <SectionCard title="Education" subtitle="Academic Journey">
              <div className="space-y-4">
                {educationData.map((edu, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-white/6 bg-black/40"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-green-300">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {edu.field}
                        </p>
                      </div>
                      <div className="text-xs text-gray-300">{edu.year}</div>
                    </div>
                    <p className="mt-2 text-sm text-gray-200">
                      {edu.institution}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-xs text-gray-300">CGPA</span>
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-200">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Projects" subtitle="Selected Work">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.map((p, idx) => (
                  <Accordion key={idx} title={p.name}>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-200">{p.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.technologiesUsed?.map((t, i) => (
                          <SkillTag key={i}>{t}</SkillTag>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-2">
                        {p.liveLink && (
                          <a
                            href={p.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-gradient-to-r from-green-400 to-sky-400 px-3 py-1 text-sm font-semibold text-black shadow"
                          >
                            Live
                          </a>
                        )}
                        {p.githubLink && (
                          <a
                            href={p.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/8 px-3 py-1 text-sm font-semibold text-gray-200"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </Accordion>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard
              title="Internship Experience"
              subtitle="Industry Exposure"
              accent="bg-gradient-to-r from-amber-400 to-orange-400"
            >
              <div className="space-y-3">
                <div className="p-4 rounded-lg border border-white/6 bg-black/40">
                  <h3 className="text-lg font-semibold text-white">
                    Full Stack Developer Intern – Engineers World
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    1 Jan 2025 – 25 May 2025
                  </p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-300 space-y-1">
                    <li>
                      Contributed to frontend and backend features of production
                      web apps.
                    </li>
                    <li>
                      Built responsive UIs in React and REST APIs using Node.js.
                    </li>
                    <li>
                      Worked with databases, CI/CD and deployment workflows.
                    </li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </Reveal>
        </div>

        <aside className="space-y-6">
          <Reveal>
            <SectionCard title="Skills" subtitle="Tech Stack">
              <div className="flex flex-col gap-3">
                {Object.entries(resumeSkills).map(([cat, list], i) => (
                  <div key={i}>
                    <h4 className="text-sm font-semibold text-green-300 mb-2">
                      {cat}
                    </h4>
                    <div className="flex flex-wrap">
                      {list.map((s, j) => (
                        <SkillTag key={j}>{s}</SkillTag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Languages" subtitle="Communication">
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">English</h4>
                    <p className="text-sm text-gray-300">Fluent</p>
                  </div>
                  <div className="text-xs text-green-300 font-semibold">
                    Professional
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">తెలుగు</h4>
                    <p className="text-sm text-gray-300">Native</p>
                  </div>
                  <div className="text-xs text-green-300 font-semibold">
                    Native
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">हिंदी</h4>
                    <p className="text-sm text-gray-300">Fluent</p>
                  </div>
                  <div className="text-xs text-green-300 font-semibold">
                    Professional
                  </div>
                </div>
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Hobbies" subtitle="Beyond Code">
              <div className="flex flex-col gap-2">
                {hobbies.map((h, i) => (
                  <div key={i} className="text-sm text-gray-200">
                    • {h}
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <div className="sticky top-28">
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-black/60 to-slate-900/60 p-4 text-center shadow-md">
              <div className="text-sm text-green-300 font-semibold">
                Download
              </div>
              <a
                href="/Muli_Surya_Narendra_Reddy.pdf"
                download
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 px-4 py-2 text-sm font-bold text-black shadow hover:scale-105 transition"
              >
                <RiDownload2Fill /> Resume (PDF)
              </a>
              <p className="text-xs text-gray-300 mt-2">
                Printable, ATS friendly layout
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Resume
