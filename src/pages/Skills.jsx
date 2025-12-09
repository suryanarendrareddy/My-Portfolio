import React, { useEffect, useRef, useState } from 'react'
import { skills, coreCS, tools, softSkills } from '../data/skillsData.jsx'

const useInView = (ref, options = { threshold: 0.15 }) => {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
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
    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
      active
        ? 'bg-green-500 text-black shadow-lg'
        : 'bg-white/4 text-gray-200 hover:bg-white/6'
    }`}
  >
    {children}
  </button>
)

const SkillPill = ({ name, icon, level = 85 }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const pct = Math.max(6, Math.min(100, level))
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/85 to-black/85 p-4 flex flex-col items-center gap-3 text-center shadow-lg transform transition hover:-translate-y-2 hover:scale-[1.02]"
      role="article"
      aria-label={name}
    >
      <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-tr from-green-500/10 to-transparent text-3xl text-green-300 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="text-sm font-semibold text-gray-100">{name}</div>
      <div className="w-full mt-1">
        <div className="h-2 rounded-full bg-white/6 overflow-hidden">
          <div
            className={`h-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400 transition-all duration-900 ease-out`}
            style={{ width: inView ? `${pct}%` : '4%' }}
            aria-hidden
          />
        </div>
        <div className="mt-2 text-xs text-gray-400">Proficiency: {pct}%</div>
      </div>
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent to-green-400/6 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

const SkillGrid = ({ data, wide }) => (
  <div
    className={`grid gap-6 ${
      wide
        ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
        : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
    }`}
  >
    {data.map((s, i) => (
      <SkillPill
        key={i}
        name={s.name}
        icon={s.icon}
        level={s.level ?? s.proficiency ?? 80}
      />
    ))}
  </div>
)

const Skills = () => {
  const tabs = [
    { id: 'tech', label: 'Technical', data: skills, wide: true },
    { id: 'core', label: 'Core CS', data: coreCS, wide: false },
    { id: 'tools', label: 'Tools', data: tools, wide: true },
    { id: 'soft', label: 'Soft Skills', data: softSkills, wide: false },
  ]
  const [active, setActive] = useState(tabs[0].id)
  const activeTab = tabs.find((t) => t.id === active) || tabs[0]
  const containerRef = useRef(null)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [active])
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white pt-28 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-green-500/12 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-green-400/80">
            Skillset Overview
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-green-400 tracking-wide">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            Organized, animated and interactive presentation of your technical
            and soft skills. Click tabs to filter.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-3">
            {tabs.map((t) => (
              <Tag
                key={t.id}
                active={t.id === active}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </Tag>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="text-xs text-gray-300">View</div>
            <div className="inline-flex items-center gap-2 bg-white/4 px-3 py-1 rounded-full text-sm">
              <span className="text-green-300 font-semibold">
                {activeTab.label}
              </span>
              <svg
                className="w-4 h-4 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="space-y-10">
          <div className="bg-gradient-to-br from-slate-900/80 to-black/80 rounded-3xl p-6 md:p-8 border border-white/8 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <SkillGrid data={activeTab.data} wide={activeTab.wide} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/85 to-black/85 p-5 shadow-lg">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                Design Focus
              </h3>
              <p className="text-sm text-gray-300">
                I prioritize clarity, spacing, and accessible color contrast. I
                craft UI that feels deliberate and polished.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/85 to-black/85 p-5 shadow-lg">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                Tooling
              </h3>
              <p className="text-sm text-gray-300">
                Fast local dev with Vite, Tailwind for speed, React for UI
                structure, and Git + CI for deployment workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/85 to-black/85 p-5 shadow-lg">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                Learning
              </h3>
              <p className="text-sm text-gray-300">
                I practice micro-clones from Dribbble, build small UIs daily,
                and convert designs into responsive React components.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1280px) {
          .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  )
}

export default Skills
