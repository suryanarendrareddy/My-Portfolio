import React, { memo, useRef, useEffect, useState } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { BsFileEarmarkText } from 'react-icons/bs'
import { certificationsData } from '../data/certifications.jsx'

const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const CertificationCard = memo(
  ({ title, duration, description, certificate }) => {
    return (
      <article className="group relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-900/80 to-black/90 p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-400 hover:-translate-y-2 hover:scale-[1.01]">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-slate-950/95 via-black/95 to-slate-950/95 px-6 py-5 md:px-7 md:py-6 overflow-hidden">
          <div className="absolute -inset-0.5 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-gradient-to-r from-green-400/18 to-transparent blur-3xl opacity-0 transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-100" />
          <div className="absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-400/12 to-transparent blur-3xl opacity-0 transition-all duration-500 group-hover:-translate-y-3 group-hover:opacity-100" />

          <div className="relative w-full md:w-3/4 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-green-400 tracking-tight leading-snug animate-[slideIn_600ms_ease-out]">
              {title}
            </h2>
            {duration && (
              <p className="mt-2 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs md:text-sm font-medium text-gray-300">
                Duration: {duration}
              </p>
            )}
            {description && (
              <p className="mt-3 text-sm md:text-base font-medium text-gray-200 leading-relaxed animate-[fadeIn_900ms_ease-out]">
                {description}
              </p>
            )}
          </div>

          <div className="relative flex flex-row md:flex-col gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-end">
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 px-5 py-2.5 text-sm md:text-base font-semibold text-black shadow-lg shadow-green-500/30 transition-all duration-300 transform translate-y-0 hover:-translate-y-1 hover:shadow-[0_30px_50px_rgba(34,197,94,0.12)]"
              aria-label={`View certificate for ${title}`}
            >
              <BsFileEarmarkText className="text-lg md:text-xl" />
              <span>View</span>
            </a>
            <a
              href={certificate}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm md:text-base font-semibold text-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-400/10 hover:text-green-100"
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
          <FadeInSection key={index} className="will-change-transform">
            <CertificationCard
              title={cert.title}
              duration={cert.duration}
              description={cert.description}
              certificate={cert.certificate}
            />
          </FadeInSection>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default Certifications
