import React, { useState, useEffect } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && navDrawerOpen) {
        setNavDrawerOpen(false)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navDrawerOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] border-b border-white/10'
            : 'bg-black/40 backdrop-blur-lg shadow-md border-b border-white/5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400 p-[2px] shadow-lg">
              <div className="absolute -inset-1 rounded-full bg-green-500/10 blur-xl" />
              <img
                src="/Profile.jpg"
                alt="Surya image"
                className="relative z-10 h-full w-full rounded-full border-2 border-black object-cover"
              />
            </div>
            <div className="flex flex-col leading-snug">
              <span className="text-sm uppercase tracking-[0.25em] text-green-400/80">
                Full-Stack Developer
              </span>
              <h1 className="text-base md:text-lg font-semibold text-green-300">
                Muli Surya Narendra Reddy
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-8 text-sm md:flex md:text-[15px] lg:text-base font-medium"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link key={link.path} to={link.path} className="relative group">
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-green-400' : 'text-gray-100'
                    } group-hover:text-green-300`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Resume Button */}
          <a
            href="/Muli_Surya_Narendra_Reddy.pdf"
            download="Surya_Narendra_Resume.pdf"
            className="group hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-gray-100 shadow-lg shadow-black/40 transition-all duration-300 hover:border-green-300 hover:bg-green-400/90 hover:text-black md:inline-flex"
          >
            <RiDownload2Fill className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavDrawerOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/40 p-2 text-white shadow-md md:hidden"
            aria-label="Toggle menu"
          >
            {navDrawerOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoMdMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          navDrawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNavDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[70%] max-w-xs transform bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white shadow-[0_0_40px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-in-out ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-hidden={!navDrawerOpen}
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h2
            id="mobile-menu-title"
            className="text-lg font-semibold text-green-300"
          >
            Menu
          </h2>
          <button
            onClick={() => setNavDrawerOpen(false)}
            className="rounded-full border border-white/15 bg-black/40 p-1.5 text-white"
            aria-label="Close menu"
          >
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>

        <nav
          className="space-y-2 px-4 py-4 text-base font-medium"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setNavDrawerOpen(false)}
                className={`block rounded-xl px-3 py-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-green-500 text-black shadow-lg shadow-green-500/40'
                    : 'text-gray-100 hover:bg-green-500/15 hover:text-green-200'
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <a
            href="/Muli_Surya_Narendra_Reddy.pdf"
            download="Surya_Narendra_Resume.pdf"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-green-500/90 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-green-500/40 transition-all duration-300 hover:bg-green-400"
          >
            <RiDownload2Fill className="text-lg" />
            <span>Download Resume</span>
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Navbar
