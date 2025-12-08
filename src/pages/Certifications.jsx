import React, { memo } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { BsFileEarmarkText } from 'react-icons/bs'
import { certificationsData } from '../data/certifications.jsx'

const CertificationCard = memo(
  ({ title, duration, description, certificate }) => {
    return (
      <article className="group relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-900/80 to-black/90 p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1 hover:border-green-400/70 hover:shadow-[0_25px_70px_rgba(34,197,94,0.35)]">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-slate-950/95 via-black/95 to-slate-950/95 px-6 py-5 md:px-7 md:py-6">
          <div className="pointer-events-none absolute -top-16 -right-10 h-32 w-32 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative w-full md:w-3/4 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-green-400 tracking-tight">
              {title}
            </h2>
            {duration && (
              <p
                className="mt-2 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs md:text-sm font-medium text-gray-300"
                aria-label={`Duration: ${duration}`}
              >
                Duration: {duration}
              </p>
            )}
            {description && (
              <p
                className="mt-3 text-sm md:text-base font-medium text-gray-200 leading-relaxed"
                aria-label={description}
              >
                {description}
              </p>
            )}
          </div>

          <div className="relative flex flex-row md:flex-col gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-end">
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500/90 px-5 py-2.5 text-sm md:text-base font-semibold text-gray-900 shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:shadow-green-400/40 hover:-translate-y-0.5"
              aria-label={`View certificate for ${title}`}
            >
              <BsFileEarmarkText className="text-lg md:text-xl" />
              <span>View</span>
            </a>
            <a
              href={certificate}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400/70 bg-transparent px-5 py-2.5 text-sm md:text-base font-semibold text-green-300 transition-all duration-300 hover:bg-green-400/10 hover:text-green-100 hover:-translate-y-0.5"
              aria-label={`Download certificate for ${title}`}
            >
              <RiDownload2Fill className="text-lg md:text-xl" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </article>
    )
  }
)

const Certifications = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-center">
      <div className="inline-flex flex-col items-center gap-2 mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-green-400/80">
          Learning Journey
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">
          Certifications
        </h1>
        <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
      </div>

      <div className="space-y-4">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            duration={cert.duration}
            description={cert.description}
            certificate={cert.certificate}
          />
        ))}
      </div>
    </section>
  )
}

export default Certifications
