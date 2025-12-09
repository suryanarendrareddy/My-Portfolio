import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaRocket,
  FaCogs,
  FaUsers,
  FaArrowRight,
} from 'react-icons/fa'
import { projectsData } from '../data/projects.jsx'

const useReveal = (options = { threshold: 0.12, rootMargin: '0px' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])
  return [ref, visible]
}

const FadeIn = ({ children, className = '' }) => {
  const [ref, visible] = useReveal({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const Typewriter = ({ texts = [], speed = 60, pause = 1000, className = '' }) => {
  const [ref, visible] = useReveal({ threshold: 0.08 })
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (!visible) return
    const curr = texts[idx % texts.length] || ''
    let timeout
    if (!del) {
      const next = curr.slice(0, display.length + 1)
      timeout = setTimeout(() => {
        setDisplay(next)
        if (next === curr) setTimeout(() => setDel(true), pause)
      }, speed)
    } else {
      const next = curr.slice(0, Math.max(0, display.length - 1))
      timeout = setTimeout(() => {
        setDisplay(next)
        if (!next) {
          setDel(false)
          setIdx((i) => i + 1)
        }
      }, Math.max(25, speed / 1.5))
    }
    return () => clearTimeout(timeout)
  }, [display, del, idx, visible, texts, speed, pause])

  return (
    <span
      ref={ref}
      className={`${className} inline-flex items-center`}
      aria-hidden={!visible}
    >
      {display}
      <span className="ml-1 animate-blink">|</span>
      <style>{`.animate-blink{animation:blink 1s steps(2,end) infinite}@keyframes blink{50%{opacity:0}}`}</style>
    </span>
  )
}

const CountUp = ({ end = 0, duration = 1200, startOnView = true }) => {
  const [ref, visible] = useReveal({ threshold: 0.25 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (startOnView && !visible) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, visible, startOnView])
  return <span ref={ref}>{val}</span>
}

const IconCard = memo(({ icon, title, desc }) => (
  <div className="p-6 bg-gray-900/70 rounded-2xl border border-white/8 hover:border-green-400 transform transition-all hover:-translate-y-2 shadow-md">
    <div className="text-green-400 text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-green-300 mt-3">{title}</h3>
    <p className="text-gray-400 mt-2 text-sm">{desc}</p>
  </div>
))

const ProfileImage = () => {
  const wrap = useRef(null)
  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const img = useRef(null)
  const rafRef = useRef(null)

  const move = useCallback((e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = wrap.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const M = 12
      if (blob1.current)
        blob1.current.style.transform = `translate(${x * M}px, ${y * M}px)`
      if (blob2.current)
        blob2.current.style.transform = `translate(${x * -M}px, ${y * -M}px)`
      if (img.current)
        img.current.style.transform = `translate(${x * 4}px, ${y * 4}px) rotate(${
          x * 6
        }deg)`
    })
  }, [])

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const leave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (blob1.current) blob1.current.style.transform = ''
      if (blob2.current) blob2.current.style.transform = ''
      if (img.current) img.current.style.transform = ''
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [move])

  return (
    <div ref={wrap} className="mt-10 md:mt-0 flex justify-center md:justify-end">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
        <div
          ref={blob1}
          className="absolute -left-6 -top-6 h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-green-500/20 blur-3xl pointer-events-none"
        />
        <div
          ref={blob2}
          className="absolute -right-6 -bottom-6 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        />
        <img
          ref={img}
          src="/favIcon.png"
          alt="Surya Narendra"
          loading="lazy"
          className="relative w-full h-full rounded-full border-4 border-green-500 shadow-[0_0_60px_rgba(34,197,94,0.55)] object-cover"
        />
      </div>
    </div>
  )
}

const Stat = ({ num, label }) => (
  <div
    className="flex-1 text-center p-6 border-t md:border-t-0 md:border-l border-white/10"
    role="article"
    aria-label={`${label} stat`}
  >
    <h1 className="text-4xl md:text-5xl font-bold text-green-400">
      <CountUp end={num} />+
    </h1>
    <p className="mt-2 text-gray-400 text-lg">{label}</p>
  </div>
)

const StatsSection = () => (
  <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-12 rounded-3xl bg-gray-900/70 p-6 border border-white/10">
    <div className="flex flex-col md:flex-row">
      <Stat num={15} label="Modern Skills" />
      <Stat num={10} label="Projects" />
      <Stat num={100} label="DSA Problems Solved" />
    </div>
  </div>
)

const services = [
  {
    title: 'Full-Stack Development',
    icon: <FaCode />,
    desc: 'React + Node.js + MongoDB apps.',
  },
  {
    title: 'Frontend UI Engineering',
    icon: <FaPaintBrush />,
    desc: 'Animations, UX, UI systems.',
  },
  {
    title: 'Backend API Development',
    icon: <FaServer />,
    desc: 'Authentication, scalable APIs.',
  },
  { title: 'Deployment & DevOps', icon: <FaRocket />, desc: 'CI/CD, Vercel, Netlify.' },
  {
    title: 'Performance Optimization',
    icon: <FaCogs />,
    desc: 'Lazy loading, caching, speed.',
  },
  {
    title: 'Team Collaboration',
    icon: <FaUsers />,
    desc: 'Agile workflow, Git strategy.',
  },
]

const capabilities = [
  { title: 'Problem Solving', desc: 'Strong logic & debugging skills.' },
  { title: 'Clean Architecture', desc: 'Reusable components, scalable patterns.' },
  { title: 'UI/UX Thinking', desc: 'User-centered design approach.' },
  { title: 'Fast Learning', desc: 'Adapts quickly to new tech.' },
]

const IconGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {items.map((s, i) => (
      <IconCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
    ))}
  </div>
)

const FeaturedProjects = ({ items = projectsData, interval = 6000 }) => {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (!items.length) return
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items.length, interval])
  if (!items.length) return null
  const p = items[idx]
  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-green-300 text-center">
        Featured Project
      </h2>
      <div className="mt-4 p-6 bg-gray-900/70 rounded-2xl border border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={p.image}
            alt={p.name}
            className="w-full md:w-56 h-40 object-cover rounded-lg border border-white/6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <p className="text-gray-300 mt-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.technologiesUsed.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.liveLink && (
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-300 font-medium underline"
                >
                  Live
                </a>
              )}
              <a
                href={p.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 font-medium underline"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div>
            Project {idx + 1} of {items.length}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="previous project"
              onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
              className="px-2 py-1 rounded bg-white/5 hover:bg-white/10"
            >
              Prev
            </button>
            <button
              aria-label="next project"
              onClick={() => setIdx((i) => (i + 1) % items.length)}
              className="px-2 py-1 rounded bg-white/5 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = ({
  items = [
    {
      name: 'A. Manager',
      quote:
        'Delivered high-quality UI components on time — impressive attention to detail.',
    },
    { name: 'B. Lead', quote: 'Fast, communicative and great ownership of features.' },
    { name: 'C. Client', quote: 'Turned a vague idea into a polished product quickly.' },
  ],
  interval = 7000,
}) => {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items.length, interval])
  const cur = items[i]
  return (
    <div className="mt-12 max-w-3xl mx-auto text-center">
      <div className="p-6 bg-gray-900/70 rounded-2xl border border-white/10">
        <p className="text-gray-300 italic">“{cur.quote}”</p>
        <p className="mt-3 text-sm text-green-300 font-semibold">— {cur.name}</p>
      </div>
    </div>
  )
}

const FloatingHire = () => (
  <a
    href="/contact"
    className="fixed right-6 bottom-6 z-50 flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-400 text-gray-900 px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-green-300/30"
    aria-label="Hire me"
  >
    Hire Me <FaArrowRight />
  </a>
)

const Home = () => {
  return (
    <div className="relative mt-5 min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-100 pt-10 overflow-hidden">
      <div className="relative px-4 py-16 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <p className="inline-flex items-center bg-white/5 px-4 py-1 text-xs md:text-sm tracking-[0.25em] text-green-400 rounded-full">
                Full-Stack Developer
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-green-400 mt-6">
                Welcome
              </h3>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
                I'm{' '}
                <span className="block text-4xl md:text-[44px] font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Muli Surya Narendra Reddy
                </span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Passionate Full-Stack Developer crafting modern web experiences using{' '}
                <span className="text-green-400">React</span> &{' '}
                <span className="text-green-400">Node.js</span>.
              </p>
              <div className="mt-3">
                <p className="text-sm text-gray-400">
                  <span className="text-gray-300">Also:</span>{' '}
                  <Typewriter
                    texts={[
                      'React Enthusiast',
                      'MERN Stack Builder',
                      'UI Addict',
                      'DSA Solver',
                    ]}
                    className="text-green-300 font-medium"
                  />
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/resume"
                  className="rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-7 py-2.5 text-lg font-semibold text-gray-900 shadow-lg hover:-translate-y-1 transition focus:outline-none focus:ring-4 focus:ring-green-300/30"
                >
                  View Resume
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-green-400/60 px-7 py-2.5 text-lg font-semibold text-green-300 hover:bg-green-400/10 transition focus:outline-none focus:ring-4 focus:ring-green-300/20"
                >
                  Hire Me
                </Link>
              </div>
            </div>
            <ProfileImage />
          </div>
        </FadeIn>

        <FadeIn className="mt-10">
          <StatsSection />
        </FadeIn>
        <FadeIn className="mt-12">
          <FeaturedProjects />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>

        <FadeIn className="mt-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-300">
            Services I Offer
          </h2>
          <p className="text-center text-gray-400 mt-3">
            I build modern, scalable digital products.
          </p>
          <IconGrid items={services} />
        </FadeIn>

        <FadeIn className="mt-16 mb-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-300">
            What I Can Do
          </h2>
          <p className="text-center text-gray-400 mt-3">
            Beyond coding — real team contribution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900/70 rounded-2xl border border-white/8 hover:border-green-400 transition"
              >
                <h3 className="text-xl font-semibold text-green-300">{c.title}</h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-green-700/20 to-emerald-700/10 border border-white/8 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Have a project in mind?
                </h3>
                <p className="text-gray-300 mt-1">
                  I build production-ready web apps. Let's discuss your idea.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-5 py-2 font-semibold text-gray-900 hover:scale-105 transition"
                >
                  Get in touch
                </Link>
                <a
                  href="mailto:suryanarendra1000@gmail.com"
                  className="rounded-full border border-white/8 px-5 py-2 text-sm text-gray-300 hover:bg-white/5 transition"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <FloatingHire />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
        }
        .animate-blink{animation:blink 1s steps(2,end) infinite}
        @keyframes blink{50%{opacity:0}}
      `}</style>
    </div>
  )
}

export default Home
