import React, { useEffect, useRef, useState } from 'react'
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
  coreCS,
  softSkills,
} from '../data/skillsData.jsx'

const useInView = (ref, options = { threshold: 0.15 }) => {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, options])
  return inView
}

const Tag = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
      active
        ? 'bg-green-500 text-black shadow-lg'
        : 'bg-white/5 text-gray-200 hover:bg-white/10'
    }`}
  >
    {children}
  </button>
)

const SkillCard = ({ name, level, icon }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-black/40 p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-green-500/10 transition"
    >
      <div className="text-4xl mb-2 text-green-300">{icon}</div>
      <p className="font-semibold text-gray-100">{name}</p>

      <div className="w-full mt-3">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-sky-400 transition-all duration-700"
            style={{ width: inView ? `${level}%` : '0%' }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Proficiency {level}%</p>
      </div>
    </div>
  )
}

const SkillGrid = ({ data }) => (
  <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {data.map((s, i) => (
      <SkillCard key={i} {...s} />
    ))}
  </div>
)

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
  const activeTab = tabs.find((t) => t.id === active)

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-green-400">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-10">
          Explore my technical strengths across all domains.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((t) => (
            <Tag key={t.id} active={t.id === active} onClick={() => setActive(t.id)}>
              {t.label}
            </Tag>
          ))}
        </div>

        <SkillGrid data={activeTab.data} />
      </div>
    </section>
  )
}

export default Skills
