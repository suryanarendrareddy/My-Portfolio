import React, { useEffect, useRef, useState } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ]
  const burgerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const doc = document.documentElement
      const scrolledPct =
        (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
      setProgress(Number.isFinite(scrolledPct) ? Math.round(scrolledPct) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnRoute = () => setNavDrawerOpen(false)
    closeOnRoute()
    // close drawer when route changes (location)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-350 backface-hidden ${
          scrolled
            ? 'bg-black/75 backdrop-blur-xl shadow-[0_14px_50px_rgba(2,6,23,0.75)] border-b border-white/8'
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 top-full h-1 bg-gradient-to-r from-green-400 to-emerald-300"
            style={{
              width: `${Math.min(Math.max(progress, 0), 100)}%`,
              transition: 'width 220ms linear',
            }}
          />

          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400 p-[2px] shadow-xl transform transition-transform duration-500 hover:scale-105">
                <div className="absolute -inset-1 rounded-full blur-sm opacity-30 bg-gradient-to-r from-green-400 to-emerald-300" />
                <img
                  src="/Profile.jpg"
                  alt="Surya image"
                  className="relative z-10 h-full w-full rounded-full border-2 border-black object-cover"
                />
                <span className="absolute -right-2 -bottom-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-black/60 text-[10px] text-green-300 border border-white/10">
                  Dev
                </span>
              </div>

              <div className="flex flex-col leading-snug select-none">
                <span className="md:text-xs uppercase tracking-[0.25em] text-green-400/80 text-[10px]">
                  Full-Stack Dev
                </span>
                <h1 className="text-sm md:text-base font-semibold text-green-300 leading-tight">
                  Muli Surya Narendra Reddy
                </h1>
              </div>
            </div>

            <nav
              className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium"
              aria-label="Primary"
            >
              {links.map((link, idx) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group px-1"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        active
                          ? 'text-green-300'
                          : 'text-gray-100 group-hover:text-green-300'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-350 ${
                        active
                          ? 'w-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500'
                          : 'w-0 group-hover:w-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500'
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`absolute -left-3 -top-3 h-2 w-2 rounded-full transition-all duration-300 transform ${
                        active
                          ? 'scale-100 opacity-100 bg-green-400'
                          : 'scale-0 opacity-0 bg-green-400'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Muli_Surya_Narendra_Reddy.pdf"
                download="Surya_Narendra_Resume.pdf"
                className="group hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-gray-100 shadow hover:scale-[1.02] transition-transform duration-300"
              >
                <RiDownload2Fill className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Resume</span>
              </a>

              <button
                ref={burgerRef}
                onClick={() => setNavDrawerOpen((p) => !p)}
                className="md:hidden inline-flex items-center justify-center rounded-full border border-white/12 bg-black/40 p-2 text-white shadow-md hover:scale-105 transition-transform duration-250"
                aria-expanded={navDrawerOpen}
                aria-label="Toggle menu"
              >
                <span className={`relative w-6 h-6 inline-block`}>
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-transform duration-300 transform ${
                      navDrawerOpen
                        ? 'rotate-45 translate-y-0'
                        : ' -translate-y-2'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-all duration-300 transform ${
                      navDrawerOpen ? 'opacity-0' : 'opacity-100 translate-y-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-transform duration-300 transform ${
                      navDrawerOpen
                        ? '-rotate-45 translate-y-0'
                        : ' translate-y-2'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          navDrawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNavDrawerOpen(false)}
        aria-hidden={!navDrawerOpen}
      />

      <aside
        aria-hidden={!navDrawerOpen}
        role="dialog"
        aria-label="Mobile menu"
        className={`fixed top-0 left-0 z-50 h-full w-[78%] max-w-xs transform bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white shadow-2xl transition-transform duration-350 ease-in-out ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full p-[2px] bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400">
                <img
                  src="/Profile.jpg"
                  alt="Surya"
                  className="h-full w-full rounded-full object-cover border-2 border-black"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-green-300">
                  Muli Surya Narendra
                </div>
                <div className="text-xs text-gray-300">Full-Stack Dev</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setNavDrawerOpen(false)}
            className="rounded-full border border-white/12 bg-black/40 p-1.5 text-white"
            aria-label="Close menu"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-3" aria-label="Mobile navigation">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setNavDrawerOpen(false)}
                className={`block rounded-xl px-3 py-2 transition-all duration-250 ${
                  isActive
                    ? 'bg-green-500/90 text-black shadow-lg shadow-green-500/30'
                    : 'text-gray-100 hover:bg-white/6 hover:text-green-300'
                }`}
                style={{ transitionDelay: `${i * 35}ms` }}
              >
                {link.label}
              </Link>
            )
          })}

          <div className="mt-4">
            <a
              href="/Muli_Surya_Narendra_Reddy.pdf"
              download="Surya_Narendra_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-black shadow-lg"
            >
              <RiDownload2Fill className="text-lg" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="mt-6 px-1">
            <div className="text-xs text-gray-400 mb-2">Quick actions</div>
            <div className="flex gap-2 flex-wrap">
              <a
                href="mailto:your-email@example.com"
                className="px-3 py-1 rounded-full bg-white/5 text-sm hover:bg-white/7"
              >
                Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-white/5 text-sm hover:bg-white/7"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-white/5 text-sm hover:bg-white/7"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </nav>
      </aside>

      <style>{`
        @supports (backdrop-filter: blur(4px)) {
          .backface-hidden { -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
        }
        .duration-350 { transition-duration: 350ms; }
        .duration-250 { transition-duration: 250ms; }
        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
      `}</style>
    </>
  )
}

export default Navbar
