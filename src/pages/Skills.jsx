import React, { useEffect, useRef, useState } from 'react'
import { skills, coreCS, tools, softSkills } from '../data/skillsData.jsx'

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

const SkillCard = ({ skill }) => (
  <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-black/95 to-slate-950/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/70 hover:shadow-[0_25px_70px_rgba(34,197,94,0.35)] overflow-hidden">
    <div className="pointer-events-none absolute -top-10 right-0 h-20 w-20 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="pointer-events-none absolute -bottom-12 left-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-3xl text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500/20">
        {skill.icon}
      </div>
      <p className="mt-4 text-center text-sm md:text-base font-medium text-gray-100 tracking-wide">
        {skill.name}
      </p>
    </div>
  </div>
)

const Section = ({ title, data, wide }) => (
  <div className="w-full">
    <div className="mb-8 text-center">
      <p className="text-[11px] uppercase tracking-[0.35em] text-green-400/80">
        {title === 'Technical Skills'
          ? 'Primary Stack'
          : title === 'Core CS Skills'
          ? 'Computer Science'
          : title === 'Tools'
          ? 'Productivity'
          : 'Human Side'}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-green-400 tracking-wide">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
    </div>
    <div
      className={`max-w-7xl mx-auto grid gap-6 ${
        wide
          ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
          : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
      }`}
    >
      {data.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
)

const Skills = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white pt-28 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative space-y-24 md:space-y-28 max-w-7xl mx-auto">
        <FadeInSection>
          <Section title="Technical Skills" data={skills} wide />
        </FadeInSection>

        <FadeInSection>
          <Section title="Core CS Skills" data={coreCS} wide />
        </FadeInSection>

        <FadeInSection>
          <Section title="Tools" data={tools} wide />
        </FadeInSection>

        <FadeInSection>
          <Section title="Soft Skills" data={softSkills} wide={false} />
        </FadeInSection>
      </div>
    </div>
  )
}

export default Skills
