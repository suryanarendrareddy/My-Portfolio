
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Education from '../pages/Education'
import Certifications from '../pages/Certifications'

const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const childrenEls = Array.from(el.children[0]?.children || el.children)
    childrenEls.forEach((child, i) => {
      child.style.transitionDelay = `${i * 110}ms`
    })
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const Typewriter = ({
  texts = [],
  speed = 60,
  pause = 1400,
  className = '',
}) => {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let mounted = true
    let timeout

    const current = texts[index % texts.length]

    if (!deleting) {
      const next = current.slice(0, display.length + 1)
      timeout = setTimeout(() => {
        if (!mounted) return
        setDisplay(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), pause)
        }
      }, speed)
    } else {
      const next = current.slice(0, display.length - 1)
      timeout = setTimeout(() => {
        if (!mounted) return
        setDisplay(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }, Math.max(30, speed / 1.5))
    }

    return () => {
      mounted = false
      clearTimeout(timeout)
    }
  }, [display, deleting, index, texts, speed, pause])

  return (
    <span className={className}>
      {display}
      <span className="blinking-cursor">|</span>
    </span>
  )
}

const CountUp = ({ end = 0, duration = 1400, className = '' }) => {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)

  useEffect(() => {
    let rafId
    const start = performance.now()
    const from = 0
    const to = end
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = Math.floor(from + (to - from) * eased)
      setValue(current)
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration])

  return <span className={className}>{value}</span>
}

const ProfileImage = () => {
  const wrapperRef = useRef(null)
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      const move = 14
      const rot = 6
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${x * move}px, ${
          y * move
        }px) scale(1.05)`
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${x * -move}px, ${
          y * -move
        }px) scale(1.02)`
      }
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${x * move * 0.3}px, ${
          y * move * 0.3
        }px) rotate(${x * rot}deg)`
      }
    }

    const handleLeave = () => {
      if (blob1Ref.current) blob1Ref.current.style.transform = ''
      if (blob2Ref.current) blob2Ref.current.style.transform = ''
      if (imgRef.current) imgRef.current.style.transform = ''
    }

    wrapper.addEventListener('mousemove', handleMove)
    wrapper.addEventListener('mouseleave', handleLeave)
    return () => {
      wrapper.removeEventListener('mousemove', handleMove)
      wrapper.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="mt-10 md:mt-0 flex justify-center md:justify-end"
    >
      <div className="relative w-max">
        <div
          ref={blob1Ref}
          className="pointer-events-none absolute -left-6 -top-6 h-44 w-44 rounded-full bg-green-500/20 blur-3xl transition-transform duration-300"
        />
        <div
          ref={blob2Ref}
          className="pointer-events-none absolute -right-6 -bottom-6 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl transition-transform duration-300"
        />
        <img
          ref={imgRef}
          src="/Profile.jpg"
          alt="Surya Image"
          className="relative w-56 md:w-64 lg:w-72 h-56 md:h-64 lg:h-72 rounded-full border-4 border-green-500 shadow-[0_0_70px_rgba(34,197,94,0.65)] transition-transform duration-500 will-change-transform"
        />
        <div className="absolute -bottom-3 -left-3 h-3 w-3 rounded-full bg-green-300 animate-pulse opacity-80" />
        <div className="absolute -top-3 -right-3 h-2 w-2 rounded-full bg-emerald-300 animate-ping opacity-60" />
      </div>
    </div>
  )
}

const StatsItem = ({ end, label, color }) => (
  <div className="text-center flex-1 px-6 py-4 md:py-6 border-t md:border-t-0 md:border-l border-white/10 transition-transform duration-300 hover:-translate-y-1">
    <h1 className={`text-4xl md:text-5xl font-semibold ${color}`}>
      <CountUp end={end} duration={1200} />
      {String(end).includes('+') ? '+' : ''}
    </h1>
    <p className="mt-2 text-base md:text-lg text-gray-400 font-medium">
      {label}
    </p>
  </div>
)

const StatsSection = () => (
  <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto my-12 p-6 md:p-8 bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
    <div className="flex flex-col md:flex-row items-stretch">
      <div className="text-center flex-1 px-6 py-4 md:py-6 border-t md:border-t-0 md:border-l border-white/10">
        <h1 className="text-4xl md:text-5xl font-semibold text-green-400">
          <CountUp end={15} duration={1100} />+
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-400 font-medium">
          Modern Skills
        </p>
      </div>
      <div className="text-center flex-1 px-6 py-4 md:py-6 border-t md:border-t-0 md:border-l border-white/10">
        <h1 className="text-4xl md:text-5xl font-semibold text-green-400">
          <CountUp end={10} duration={1200} />+
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-400 font-medium">
          Projects
        </p>
      </div>
      <div className="text-center flex-1 px-6 py-4 md:py-6 border-t md:border-t-0 md:border-l border-white/10">
        <h1 className="text-4xl md:text-5xl font-semibold text-green-400">
          <CountUp end={100} duration={1400} />+
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-400 font-medium">
          DSA Problems Solved
        </p>
      </div>
    </div>
  </div>
)

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-100 overflow-hidden mt-10">
      
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-green-500/20 blur-3xl transition-transform duration-300" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl transition-transform duration-300" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-green-400/10 blur-3xl transition-transform duration-300" />

      <div className="relative flex flex-col justify-center px-4 py-16">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto">
            <div className="text-center md:text-left max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs md:text-sm uppercase tracking-[0.25em] text-green-400">
                Full-Stack Developer
                <span className="h-1 w-1 rounded-full bg-green-400" />
              </p>

              <h3 className="text-2xl md:text-4xl font-extrabold text-green-400 mt-6">
                Welcome
              </h3>

              <h1 className="mt-2 text-2xl md:text-5xl font-semibold text-gray-100 leading-tight">
                I&apos;m{' '}
                <span className="block text-3xl md:text-[44px] font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Muli Surya Narendra Reddy
                </span>
              </h1>

              <p className="mt-4 text-base md:text-lg font-medium text-gray-300">
                I&apos;m a passionate{' '}
                <span className="text-green-400 font-semibold">
                  Full-Stack Developer
                </span>{' '}
                crafting modern, seamless, and impactful web experiences using{' '}
                <span className="text-green-400 font-semibold">React</span> and{' '}
                <span className="text-green-400 font-semibold">Node.js</span>.
              </p>

              <div className="mt-3 text-left">
                <p className="text-sm text-gray-400 inline-flex items-center gap-2">
                  <span className="text-gray-300">Also:</span>{' '}
                  <Typewriter
                    texts={[
                      'React Enthusiast',
                      'MERN Stack Builder',
                      'UI Addict',
                      'DSA Solver',
                    ]}
                    speed={55}
                    pause={1200}
                    className="text-green-300 font-medium"
                  />
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/resume"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-7 py-2.5 text-base md:text-lg font-semibold text-gray-900 shadow-lg shadow-green-500/30 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10">View Resume</span>
                  <span className="absolute right-0 top-0 h-full w-24 translate-x-24 -rotate-12 bg-white/10 transform transition-transform duration-400 group-hover:translate-x-0" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-green-400/60 bg-white/3 px-7 py-2.5 text-base md:text-lg font-semibold text-green-300 backdrop-blur-md transition-all duration-300 hover:bg-green-400/10 hover:border-green-300 hover:text-green-100"
                >
                  <span>Hire Me</span>
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:scale-125 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <ProfileImage />
          </div>
        </FadeInSection>

        <FadeInSection className="mt-10">
          <StatsSection />
        </FadeInSection>

        <FadeInSection className="mt-6">
          <Education />
        </FadeInSection>

        <FadeInSection className="mt-6 mb-8">
          <Certifications />
        </FadeInSection>
      </div>
      <style>{`
        .blinking-cursor {
          display:inline-block;
          width:10px;
          margin-left:6px;
          animation: blink 1s step-end infinite;
          opacity:0.9;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes floatSmall {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSmall {
          animation: floatSmall 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
