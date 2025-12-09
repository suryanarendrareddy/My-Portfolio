// src/pages/Projects.jsx
import React, { useState, useRef, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOnlinePrediction } from 'react-icons/md'
import { projectsData } from '../data/projects.jsx'

/* ---------- small hook to detect in-view ---------- */
const useInView = (ref, opts = { threshold: 0.12 }) => {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, opts)
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, opts])
  return inView
}

/* ---------- Modal to show project details ---------- */
const Modal = ({ open, onClose, project }) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    window.addEventListener('keydown', closeOnEsc)
    return () => {
      window.removeEventListener('keydown', closeOnEsc)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open || !project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
    >
      <div className="max-w-4xl w-full rounded-2xl bg-gradient-to-br from-slate-900/95 to-black/95 border border-white/10 shadow-2xl overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/6">
          <h3 className="text-lg font-semibold text-green-300">{project.name}</h3>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="text-gray-200 px-3 py-1 rounded-md hover:bg-white/5 transition"
          >
            Close
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="min-h-[260px] rounded-md bg-black/40 flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="text-gray-400 text-sm">No preview available</div>
            )}
          </div>

          <div>
            <p className="text-gray-200 mb-4">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologiesUsed.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold bg-white/5 text-green-200 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-sky-400 px-4 py-2 text-sm font-semibold text-black shadow"
                >
                  <MdOnlinePrediction /> Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-100"
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-400">
              {project.role && (
                <div>
                  <strong className="text-gray-200">Role:</strong> {project.role}
                </div>
              )}
              {project.duration && (
                <div>
                  <strong className="text-gray-200">Duration:</strong> {project.duration}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Card = ({ project, index, onOpen }) => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <article
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-slate-900/80 to-black/80 p-0 shadow-lg transform transition-all duration-400 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:-translate-y-2`}
      aria-labelledby={`proj-${index}-title`}
    >
      <div className="relative h-48 md:h-44 w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400">
            Preview
          </div>
        )}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute left-4 bottom-4 z-10 max-w-[70%]">
          <h4
            id={`proj-${index}-title`}
            className="text-sm md:text-base font-bold text-green-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            {project.name}
          </h4>
          <p className="text-xs text-gray-300 line-clamp-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            {project.short || project.description?.slice(0, 80)}
          </p>
        </div>

        <div className="absolute right-4 top-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-400/90 text-black px-3 py-1 text-xs font-semibold shadow"
              aria-label={`Open ${project.name} live`}
            >
              Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/6 text-gray-200 px-3 py-1 text-xs font-semibold border border-white/8"
              aria-label={`Open ${project.name} source`}
            >
              Code
            </a>
          )}
        </div>
      </div>

      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex-1 pr-3">
          <div className="mb-2 hidden md:block">
            {project.technologiesUsed.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="inline-block text-xs text-green-200 bg-white/5 px-2 py-1 rounded-full mr-2"
                aria-hidden
              >
                {t}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-300 line-clamp-3">{project.description}</div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => onOpen(project)}
            className="rounded-full bg-gradient-to-r from-green-400 to-emerald-300 px-3 py-2 text-xs font-semibold text-black shadow hover:scale-105 transition"
            aria-label={`Open details for ${project.name}`}
          >
            Details
          </button>
          <span className="text-xs text-gray-400">#{index + 1}</span>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [openProject, setOpenProject] = useState(null)

  const allTech = Array.from(
    new Set(projectsData.flatMap((p) => p.technologiesUsed))
  ).slice(0, 12)

  const filtered = projectsData.filter((p) => {
    const matchesFilter = filter === 'All' || p.technologiesUsed.includes(filter)
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      (p.description || '').toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesQuery
  })

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white pt-24 pb-16 px-5">
      <div className="pointer-events-none absolute -top-32 -left-20 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-green-400/80">
            Work Showcase
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-green-400">
            Selected Projects
          </h1>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            Interactive, performant projects built with modern web technologies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => {
                setFilter('All')
                setQuery('')
              }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                filter === 'All' ? 'bg-green-500 text-black' : 'bg-white/6 text-gray-200'
              }`}
            >
              All
            </button>

            {allTech.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  filter === t ? 'bg-green-500 text-black' : 'bg-white/6 text-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto mt-3 md:mt-0">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              className="w-full md:w-64 rounded-full bg-white/5 px-4 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
              Filtered:{' '}
              <span className="ml-1 font-semibold text-green-300">{filter}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <Card key={i} project={project} index={i} onOpen={(p) => setOpenProject(p)} />
          ))}
        </div>
      </div>

      <Modal
        open={!!openProject}
        onClose={() => setOpenProject(null)}
        project={openProject}
      />
    </section>
  )
}

export default Projects
