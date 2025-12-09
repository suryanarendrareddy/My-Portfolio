import React, { memo, useEffect, useRef, useState } from 'react'
import { contactData } from '../data/contactData.jsx'
import { RiDownload2Fill } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'

const ContactCard = memo(({ data }) => {
  const { icon: Icon, label, text, link } = data
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      setTilt({ x: -y * 8, y: x * 8 })
    }
    const leave = () => setTilt({ x: 0, y: 0 })

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-center items-center p-6 text-center
      rounded-2xl border border-white/10 bg-gradient-to-br
      from-slate-950/90 via-black/90 to-slate-950/90 shadow-xl overflow-hidden
      transition-all duration-300"
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div
        className="absolute -top-14 right-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl opacity-0
      transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        className="absolute -bottom-16 left-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl opacity-0
      transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-col items-center">
        <div
          className="mb-3 h-14 w-14 flex items-center justify-center rounded-2xl
        bg-green-500/10 text-2xl text-green-400 group-hover:scale-110 transition-transform duration-300"
        >
          <Icon />
        </div>

        <p className="text-xs tracking-[4px] uppercase text-green-300/90">
          {label}
        </p>

        <p className="mt-2 text-sm sm:text-base font-semibold text-white group-hover:text-green-300">
          {text}
        </p>
      </div>
    </a>
  )
})

const Contact = () => {
  const titleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const animate = (ref, delay) => {
      if (!ref.current) return
      setTimeout(() => {
        ref.current.classList.add('opacity-100', 'translate-y-0')
      }, delay)
    }

    animate(titleRef, 150)
    animate(descRef, 350)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center
    bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-6 pb-20 pt-28"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-24 h-64 w-64
      rounded-full bg-green-500/12 blur-3xl"
      />

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72
      rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div
          className="rounded-2xl border border-white/10 backdrop-blur-xl
        bg-gradient-to-b from-black/70 to-slate-950/70 shadow-2xl p-10"
        >
          <h1
            ref={titleRef}
            className="text-4xl font-bold text-green-400 opacity-0 translate-y-4
            transition-all duration-700"
          >
            Let's Connect
          </h1>

          <p
            ref={descRef}
            className="opacity-0 translate-y-4 transition-all duration-700
            text-gray-200 mt-4 text-lg leading-relaxed"
          >
            Whether it's a project idea, collaboration, hiring, or just tech
            talk — I'm always excited to connect and build meaningful
            experiences.
          </p>

          <div className="mt-8 space-y-5">
            <h2 className="text-xl font-semibold text-green-300">
              Availability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              🟢 Open for Freelance & Full-Time Roles <br />
              ⏰ Weekdays: 10 AM – 8 PM IST <br />
              📆 Weekends: Flexible
            </p>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/Muli_Surya_Narendra_Reddy.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-3
              text-black font-bold shadow-lg hover:bg-green-400
              hover:shadow-green-400/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <RiDownload2Fill className="text-lg" />
              Resume
            </a>

            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/20
              bg-white/5 px-6 py-3 text-green-300 font-semibold
              hover:bg-green-400/10 hover:border-green-300 hover:text-green-100
              transition-all duration-300"
            >
              <MdAlternateEmail className="text-xl" />
              Email Me
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {contactData.map((item, i) => (
            <ContactCard key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
