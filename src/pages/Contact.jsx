import React, { memo } from 'react'
import { contactData } from '../data/contactData.jsx'

const ContactCard = memo(({ data }) => {
  const { icon: IconComponent, label, text, link } = data

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact via ${label}`}
      className="group relative flex flex-col justify-center items-center text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-black/95 to-slate-950/90 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/70 hover:shadow-[0_25px_70px_rgba(34,197,94,0.35)] overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-2xl text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500/20">
          {IconComponent && <IconComponent />}
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-green-300/80">
          {label}
        </p>
        <p className="mt-2 text-sm sm:text-base font-semibold text-white group-hover:text-green-300 break-words">
          {text}
        </p>
      </div>
    </a>
  )
})

const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute -top-32 -left-24 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-black/95 to-slate-950/95 p-8 sm:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
          <div className="mb-4 inline-flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.3em] text-green-400/80">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-400">
              Let&apos;s Talk!
            </h1>
          </div>

          <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-100">
            I&apos;m a{' '}
            <span className="text-green-400 font-semibold">
              Full-Stack Developer
            </span>{' '}
            passionate about solving real-world problems and building smooth,
            user-focused web experiences.
          </p>

          <div className="mb-7 space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-300">
              Availability
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              🟢 Open for freelance & full-time roles
              <br />
              ⏰ Weekdays: 10 AM – 8 PM IST
              <br />
              📆 Weekends: Flexible
            </p>
          </div>

          <button className="group relative inline-flex items-center gap-3 rounded-full bg-green-500/90 px-7 py-3 text-sm sm:text-base font-bold text-black shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:shadow-green-400/40 hover:-translate-y-0.5">
            <span className="relative z-10">Message me via links</span>
            <span className="relative z-10 hidden md:inline">
              Beside
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                ➡️
              </span>
            </span>
            <span className="relative z-10 md:hidden">
              Below
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                ⬇️
              </span>
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactData.map((item, index) => (
            <ContactCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
