import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
  coreCS,
  softSkills,
} from '../data/skillsData.jsx'

const useInView = (ref, opts = { threshold: 0.15, once: true }) => {
  const [inView, setInView] = useState(false)
  const saved = useRef(opts)
  useEffect(() => {
    saved.current = opts
  }, [opts])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const { threshold = 0.15, once = true } = saved.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])

  return inView
}


const Tag = memo(({ children, active, onClick, id }) => (
  <button
    id={id}
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-green-300 ${
      active
        ? 'bg-green-500 text-black shadow-lg'
        : 'bg-white/5 text-gray-200 hover:bg-white/10'
    }`}
  >
    {children}
  </button>
))

const SkillCard = memo(({ name = '—', level = 0, icon = null }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2, once: true })
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const width = reducedMotion ? `${level}%` : inView ? `${level}%` : '0%'

  return (
    <article
      ref={ref}
      aria-label={`${name} proficiency ${level}%`}
      className="rounded-xl border border-white/10 bg-black/40 p-5 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-4xl mb-2 text-green-300">
        {icon ?? <span className="w-10 h-10 inline-block" />}
      </div>
      <p className="font-semibold text-gray-100">{name}</p>

      <div className="w-full mt-3">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-green-400 to-sky-400 transition-all ${
              reducedMotion ? '' : 'duration-700'
            }`}
            style={{ width }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Proficiency {level}%</p>
      </div>
    </article>
  )
})


const SkillGrid = ({ data = [] }) => {
  if (!Array.isArray(data) || !data.length) {
    return <p className="text-center text-sm text-gray-400">No skills to display</p>
  }

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.map((s) => (
        <SkillCard key={s.name ?? JSON.stringify(s)} {...s} />
      ))}
    </div>
  )
}


const Skills = () => {
  const tabs = [
    { id: 'frontend', label: 'Frontend', data: frontendSkills },
    { id: 'backend', label: 'Backend', data: backendSkills },
    { id: 'database', label: 'Databases', data: databaseSkills },
    { id: 'tools', label: 'Tools', data: toolSkills },
    { id: 'core', label: 'Core CS', data: coreCS },
    { id: 'soft', label: 'Soft Skills', data: softSkills },
  ]

  const [active, setActive] = useState('frontend')
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0]

  const onKeyNav = useCallback(
    (e) => {
      const idx = tabs.findIndex((t) => t.id === active)
      if (e.key === 'ArrowRight') {
        setActive(tabs[(idx + 1) % tabs.length].id)
      } else if (e.key === 'ArrowLeft') {
        setActive(tabs[(idx - 1 + tabs.length) % tabs.length].id)
      }
    },
    [active, tabs]
  )

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-green-400">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-10">
          Explore my technical strengths across all domains.
        </p>

        <div
          role="tablist"
          aria-label="Skill categories"
          onKeyDown={onKeyNav}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {tabs.map((t) => (
            <Tag
              key={t.id}
              id={`tab-${t.id}`}
              active={t.id === active}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </Tag>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-green-300 font-semibold mb-4">{activeTab.label}</h3>
          <SkillGrid data={activeTab.data} />
        </div>
      </div>
    </section>
  )
}

export default Skills
