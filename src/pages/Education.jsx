import React, { memo } from 'react'
import { educationData } from '../data/education.jsx'

const EducationCard = memo(
  ({ degree, field, institution, year, cgpa, index }) => {
    const isEven = index % 2 === 0

    return (
      <li
        className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-black/95 to-slate-950/90 p-5 sm:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/70 hover:shadow-[0_25px_70px_rgba(34,197,94,0.35)]"
        role="listitem"
      >
        {/* Accent glow on hover */}
        <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Timeline dot */}
        <span className="absolute -left-3 top-6 hidden h-3 w-3 rounded-full bg-gradient-to-br from-green-400 to-emerald-300 shadow-[0_0_0_6px_rgba(34,197,94,0.25)] sm:block" />

        {/* Colored accent bar */}
        <div
          className={`mb-3 h-1.5 w-20 rounded-full ${
            isEven
              ? 'bg-gradient-to-r from-green-400 via-emerald-300 to-green-500'
              : 'bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400'
          }`}
        />

        <h3 className="text-xl sm:text-2xl font-semibold text-green-400 tracking-tight">
          {degree}
        </h3>

        <p className="mt-1 text-base sm:text-lg font-medium text-gray-100">
          {field}
        </p>

        <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
          {institution}
        </p>

        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-300">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            {year}
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-green-300">
            CGPA:
            <span className="rounded-full bg-green-500/10 px-3 py-0.5 text-xs sm:text-sm">
              {cgpa}
            </span>
          </span>
        </div>
      </li>
    )
  }
)

const Education = () => {
  return (
    <section className="py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-green-400/80">
            Academic Journey
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-green-400 tracking-wide">
            Education
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-green-500/40 via-emerald-500/10 to-transparent sm:block" />

          <ul className="space-y-5">
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                degree={edu.degree}
                field={edu.field}
                institution={edu.institution}
                year={edu.year}
                cgpa={edu.cgpa}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
