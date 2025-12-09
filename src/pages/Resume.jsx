import React, { useEffect, useRef, useState, memo } from 'react'
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
  coreCS,
  softSkills,
  resumeSkills,
  hobbies,
} from '../data/skillsData.jsx'
import { educationData } from '../data/education.jsx'
import { projectsData } from '../data/projects.jsx'
import { certificationsData } from '../data/certifications.jsx'

const achievements = [
  'Reduced bundle size by 28% through code-splitting, lazy loading, and dependency optimization.',
  'Shipped 5+ production-quality features used by ~2,000 monthly users across internal and client-facing dashboards.',
  'Implemented CI/CD pipelines on Vercel & Netlify, improving deployment frequency by 60%.',
  'Designed reusable UI component patterns that reduced development time for new pages by ~35%.',
  'Improved API response time by optimizing MongoDB queries and implementing server-side caching.',
]

const Reveal = ({ children, className = '', rootMargin = '0px 0px -10% 0px' }) => {
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
      className={`transition-all duration-700 ease-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </section>
  )
}

const SectionCard = memo(({ title, subtitle, children }) => {
  const id = title.replace(/\s+/g, '-').toLowerCase()
  return (
    <div
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-black/90 p-7 md:p-9 shadow-xl"
      role="region"
      aria-labelledby={id}
    >
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.25em] text-green-400/70">
          {subtitle}
        </p>
        <h2 id={id} className="text-2xl md:text-3xl font-semibold text-green-300">
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
})

const Accordion = memo(({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 transition"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-medium text-white">{title}</span>
        <span
          className={`text-lg text-green-300 transition-transform ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`transition-all overflow-hidden ${
          open ? 'max-h-[600px] p-4' : 'max-h-0 px-4'
        }`}
      >
        {children}
      </div>
    </div>
  )
})

const SkillTag = ({ children }) => (
  <span className="inline-block rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs md:text-sm font-medium text-green-200 mr-2 mb-2">
    {children}
  </span>
)

/* ---------- simplified Skill display components (no proficiency shown) ---------- */

const SkillItem = ({ name }) => (
  <div className="flex items-center gap-3">
    <div className="text-sm font-semibold text-gray-100">{name}</div>
  </div>
)

const SkillListInline = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((s) => (
      <SkillTag key={s.name || s}>{s.name || s}</SkillTag>
    ))}
  </div>
)

const TopSkillsSummary = () => {
  const top = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot', 'MySQL']

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {top.map((skill, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="text-sm font-semibold text-gray-100">{skill}</div>
        </div>
      ))}
    </div>
  )
}



const Resume = () => {
  const defaultTop = [
    'React.js',
    'JavaScript',
    'Node.js',
    'TailwindCSS',
    'MongoDB',
    'Express.js',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-6 py-16 pt-28">
      <Reveal className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400">
          Muli Surya Narendra Reddy
        </h1>

        <p className="mt-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer skilled in building scalable web applications using React,
          Node.js, and modern tooling. I focus on performance, accessibility, clean UI
          engineering and solving real-world problems with maintainable code.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm text-gray-200">
          <span className="bg-white/5 px-3 py-1 rounded-full">
            suryanarendra1000@gmail.com
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full">+91 7993830599</span>
          <a
            href="https://github.com/suryanarendrareddy"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 px-3 py-1 rounded-full hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muli-surya-narendra-reddy"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 px-3 py-1 rounded-full hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Reveal>
            <SectionCard title="Professional Summary" subtitle="Overview">
              <p className="text-sm text-gray-300 leading-relaxed">
                Developer with hands-on experience in designing responsive UIs, reusable
                component architecture and scalable backend logic. Strong understanding of
                API design, state management, deployment workflows and performance
                optimization. I bring consistency, debugging skills and pragmatic
                engineering to teams.
              </p>

              <div className="mt-4 text-sm text-gray-300">
                <h4 className="text-green-300 font-semibold mb-2">
                  What I Bring to a Team:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Strong problem-solving mindset and debugging skills.</li>
                  <li>Convert ideas & Figma - pixel-perfect UI with accessibility.</li>
                  <li>Design and implement secure REST APIs and services.</li>
                  <li>Clean code, modular patterns and maintainability focus.</li>
                  <li>Fast learner - picks up new stacks and tools quickly.</li>
                </ul>
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Achievements" subtitle="Impact Delivered">
              <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                {achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Education" subtitle="Academics">
              <div className="space-y-4">
                {educationData.map((edu, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-black/40"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-green-300">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-300">{edu.field}</p>
                      </div>
                      <span className="text-xs text-gray-400">{edu.year}</span>
                    </div>

                    <p className="text-sm text-gray-300 mt-2">{edu.institution}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-gray-300">CGPA</span>
                      <span className="text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full text-green-200">
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
                {projectsData.map((p, i) => (
                  <Accordion key={i} title={p.name}>
                    <p className="text-sm text-gray-300">{p.description}</p>

                    <div className="flex flex-wrap mt-2">
                      {p.technologiesUsed.map((t, j) => (
                        <SkillTag key={j}>{t}</SkillTag>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-3">
                      {p.liveLink && (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-300 text-sm underline"
                        >
                          Live
                        </a>
                      )}
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 text-sm underline"
                      >
                        Code
                      </a>
                    </div>
                  </Accordion>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Internship Experience" subtitle="Industry Work">
              <div className="p-4 rounded-xl border border-white/10 bg-black/40">
                <h3 className="text-lg font-semibold text-white">
                  Full Stack Developer Intern — Engineers World
                </h3>
                <p className="text-sm text-gray-300 mt-1">Jan 2025 – May 2025</p>

                <ul className="list-disc pl-5 text-sm text-gray-300 mt-3 space-y-1">
                  <li>
                    Developed responsive frontend screens with reusable React components.
                  </li>
                  <li>
                    Created backend endpoints using Express.js and integrated MongoDB
                    models.
                  </li>
                  <li>Implemented JWT authentication & secure API access layers.</li>
                  <li>
                    Collaborated in Agile sprints, code reviews & debugging sessions.
                  </li>
                  <li>
                    Worked on deployment pipelines, staging builds and environment
                    configs.
                  </li>
                </ul>
              </div>
            </SectionCard>
          </Reveal>
        </div>

        <aside className="space-y-10">
          <Reveal>
            <SectionCard title="Skills" subtitle="Top & Quick View">
              <h4 className="text-sm font-semibold text-green-300 mb-4">Top Skills</h4>
              <TopSkillsSummary />

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-green-300 mb-3">Frontend</h4>
                <div className="grid grid-cols-2 gap-3">
                  {frontendSkills.map((s) => (
                    <SkillItem key={s.name} name={s.name} />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-green-300 mb-3">
                  Backend & Databases
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {backendSkills.concat(databaseSkills).map((s) => (
                    <SkillItem key={s.name} name={s.name} />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-green-300 mb-3">Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  {toolSkills.map((t) => (
                    <SkillItem key={t.name} name={t.name} />
                  ))}
                </div>
              </div>
            </SectionCard>
          </Reveal>
                  
          <Reveal>
            <SectionCard title="Certifications" subtitle="Credentials">
              <div className="grid gap-4">
                {certificationsData.map((c) => (
                  <Accordion key={c.id} title={c.title}>
                    <p className="text-xs text-gray-300 mt-1">
                      {c.duration} — {c.year}
                    </p>
                    <p className="text-xs font-medium text-gray-400">{c.description}</p>
                  </Accordion>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Core CS & Soft Skills" subtitle="Foundations">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-green-300 mb-2">
                    Core Computer Science
                  </h4>
                  <div className='grid grid-cols-2 '>
                    {coreCS.map((c) => (
                      <div key={c.name} className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <div className="flex items-center gap-3">
                            <div>{c.name}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-300 mb-2">
                    Soft Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-3 ">
                    {softSkills.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between text-sm text-gray-300"
                      >
                        <div className="flex items-center gap-3">
                          <div>{s.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Languages" subtitle="Communication">
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>English</span>
                  <span className="text-green-300 font-semibold">Fluent</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Telugu (తెలుగు)</span>
                  <span className="text-green-300 font-semibold">Native</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Hindi (हिंदी)</span>
                  <span className="text-green-300 font-semibold">Fluent</span>
                </div>
              </div>
            </SectionCard>
          </Reveal>

          <Reveal>
            <SectionCard title="Hobbies" subtitle="Personal Interests">
              <ul className="text-sm text-gray-300 space-y-1">
                {hobbies.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </SectionCard>
          </Reveal>
        </aside>
      </main>

      <style>{`
        @media print {
          .bg-gradient-to-b, .bg-gradient-to-br, .bg-gradient-to-r {
            background: white !important;
            color: black !important;
          }
          .rounded-2xl { border-radius: 0 !important; }
          .shadow-xl { box-shadow: none !important; }
          .text-transparent { color: black !important; -webkit-text-fill-color: black !important; }
        }
      `}</style>
    </div>
  )
}

export default Resume
