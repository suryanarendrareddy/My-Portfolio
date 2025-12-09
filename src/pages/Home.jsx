import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaPaintBrush, FaServer, FaRocket, FaCogs, FaUsers } from 'react-icons/fa'

const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const Typewriter = ({ texts = [], speed = 60, pause = 1200, className = '' }) => {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const curr = texts[idx % texts.length]
    let timeout

    if (!del) {
      const next = curr.slice(0, display.length + 1)
      timeout = setTimeout(() => {
        setDisplay(next)
        if (next === curr) setTimeout(() => setDel(true), pause)
      }, speed)
    } else {
      const next = curr.slice(0, display.length - 1)
      timeout = setTimeout(() => {
        setDisplay(next)
        if (next === '') {
          setDel(false)
          setIdx((i) => i + 1)
        }
      }, speed / 1.5)
    }

    return () => clearTimeout(timeout)
  }, [display, del, idx])

  return (
    <span className={className}>
      {display}
      <span className="blinking-cursor">|</span>
    </span>
  )
}

const CountUp = ({ end = 0, duration = 1400 }) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let raf

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end])

  return <span>{val}</span>
}


const ProfileImage = () => {
  const wrap = useRef(null)
  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    const el = wrap.current
    if (!el) return

    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5

      const M = 12
      blob1.current.style.transform = `translate(${x * M}px, ${y * M}px)`
      blob2.current.style.transform = `translate(${x * -M}px, ${y * -M}px)`
      img.current.style.transform = `translate(${x * 4}px, ${y * 4}px) rotate(${
        x * 6
      }deg)`
    }

    const leave = () => {
      blob1.current.style.transform = ''
      blob2.current.style.transform = ''
      img.current.style.transform = ''
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div ref={wrap} className="mt-10 md:mt-0 flex justify-center md:justify-end">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
        <div
          ref={blob1}
          className="absolute -left-6 -top-6 h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-green-500/20 blur-3xl"
        />
        <div
          ref={blob2}
          className="absolute -right-6 -bottom-6 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <img
          ref={img}
          src="/favIcon.png"
          alt="Surya"
          className="relative w-full h-full rounded-full border-4 border-green-500 shadow-[0_0_60px_rgba(34,197,94,0.65)] object-cover"
        />
      </div>
    </div>
  )
}

/* ---------- Stats Section ---------- */

const Stat = ({ num, label }) => (
  <div className="flex-1 text-center p-6 border-t md:border-t-0 md:border-l border-white/10">
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

/* ---------- Services Section ---------- */

const ServicesSection = () => {
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

  return (
    <FadeInSection className="mt-16 w-11/12 md:w-10/12 mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-300">
        Services I Offer
      </h2>
      <p className="text-center text-gray-400 mt-3">
        I build modern, scalable digital products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900/70 rounded-2xl border border-white/10 hover:border-green-400 shadow-xl transition hover:-translate-y-2"
          >
            <div className="text-green-400 text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold text-green-300 mt-3">{s.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}


const CapabilitiesSection = () => {
  const caps = [
    { title: 'Problem Solving', desc: 'Strong logic & debugging skills.' },
    { title: 'Clean Architecture', desc: 'Reusable components, scalable patterns.' },
    { title: 'UI/UX Thinking', desc: 'User-centered design approach.' },
    { title: 'Fast Learning', desc: 'Adapts quickly to new tech.' },
  ]

  return (
    <FadeInSection className="mt-16 w-11/12 md:w-10/12 mx-auto mb-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-300">
        What I Can Do
      </h2>
      <p className="text-center text-gray-400 mt-3">
        Beyond coding — real team contribution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {caps.map((c, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900/70 rounded-2xl border border-white/10 hover:border-green-400 transition"
          >
            <h3 className="text-xl font-semibold text-green-300">{c.title}</h3>
            <p className="text-gray-400 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-100 mt-10 overflow-hidden">
      <div className="relative px-4 py-16 max-w-6xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text */}
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
                  className="rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-7 py-2.5 text-lg font-semibold text-gray-900 shadow-lg hover:-translate-y-1 transition"
                >
                  View Resume
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-green-400/60 px-7 py-2.5 text-lg font-semibold text-green-300 hover:bg-green-400/10 transition"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Image */}
            <ProfileImage />
          </div>
        </FadeInSection>

        <FadeInSection className="mt-10">
          <StatsSection />
        </FadeInSection>

        <FadeInSection>
          <ServicesSection />
        </FadeInSection>

        <FadeInSection>
          <CapabilitiesSection />
        </FadeInSection>
      </div>

      <style>{`
        .blinking-cursor { animation: blink 1s infinite; }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  )
}

export default Home
