import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOnlinePrediction } from 'react-icons/md'
import { projectsData } from '../data/projects.jsx'

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
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const ProjectCard = ({ project, index }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-black/95 to-slate-950/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-2 hover:border-green-400/70 hover:shadow-[0_25px_70px_rgba(34,197,94,0.35)]">
    <div className="pointer-events-none absolute -top-16 right-0 h-28 w-28 rounded-full bg-green-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="pointer-events-none absolute -bottom-16 left-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-green-400 tracking-tight">
          {project.name}
        </h2>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
          #{index + 1}
        </span>
      </div>

      <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologiesUsed.map((tech, i) => (
          <span
            key={i}
            className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-sky-400 px-5 py-2 text-sm font-semibold text-gray-900 shadow-lg shadow-green-500/30 transition-all duration-300 hover:shadow-green-400/40 hover:-translate-y-0.5"
          >
            <MdOnlinePrediction className="text-lg" />
            <span>Live Demo</span>
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-gray-100 backdrop-blur-md transition-all duration-300 hover:border-green-300 hover:bg-green-400/10 hover:text-green-100 hover:-translate-y-0.5"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white pt-24 pb-16 px-5 mt-3">
      <div className="pointer-events-none absolute -top-32 -left-20 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <FadeInSection className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-green-400/80">
          Work Showcase
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-green-400">
          My Projects
        </h1>
        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          A collection of applications I&apos;ve built using modern web
          technologies, focused on performance, usability, and clean UI.
        </p>
      </FadeInSection>

      <FadeInSection className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Projects
