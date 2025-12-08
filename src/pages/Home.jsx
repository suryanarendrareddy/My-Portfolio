import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Education from '../pages/Education'
import Certifications from '../pages/Certifications'

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
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const ProfileImage = () => (
  <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-green-500/25 blur-3xl" />
      <img
        src="/Profile.jpg"
        alt="Surya Image"
        className="relative w-52 md:w-64 lg:w-72 h-52 md:h-64 lg:h-72 rounded-full border-4 border-green-500 shadow-[0_0_60px_rgba(34,197,94,0.7)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-2"
      />
    </div>
  </div>
)

const StatsItem = ({ value, label, color }) => (
  <div className="text-center flex-1 px-6 py-4 md:py-6 border-t md:border-t-0 md:border-l border-white/10 transition-transform duration-300 hover:-translate-y-1">
    <h1 className={`text-4xl md:text-5xl font-semibold ${color}`}>{value}</h1>
    <p className="mt-2 text-base md:text-lg text-gray-400 font-medium">
      {label}
    </p>
  </div>
)

const StatsSection = () => (
  <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto my-12 p-6 md:p-8 bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
    <div className="flex flex-col md:flex-row items-stretch">
      <StatsItem value="15+" label="Modern Skills" color="text-green-400" />
      <StatsItem value="10+" label="Projects" color="text-green-400" />
      <StatsItem
        value="100+"
        label="DSA Problems Solved"
        color="text-green-400"
      />
    </div>
  </div>
)

const Home = () => (
  <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-100 overflow-hidden mt-10">
    <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
    <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-green-400/10 blur-3xl" />

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

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/resume"
                className="group inline-flex items-center gap-2 rounded-full bg-green-500/90 px-7 py-2.5 text-base md:text-lg font-semibold text-gray-900 shadow-lg shadow-green-500/30 transition-transform duration-300 hover:translate-y-[-2px] hover:bg-green-400"
              >
                <span>View Resume</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-green-400/60 bg-white/5 px-7 py-2.5 text-base md:text-lg font-semibold text-green-300 backdrop-blur-md transition-all duration-300 hover:bg-green-400/10 hover:border-green-300 hover:text-green-100"
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

      <FadeInSection className="mt-6 mb-4">
        <Certifications />
      </FadeInSection>
    </div>
  </div>
)

export default Home
