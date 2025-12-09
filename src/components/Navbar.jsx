import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiDownload2Fill } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { HiHome, HiUser, HiDocumentText } from 'react-icons/hi'
import { FaTools } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const burgerRef = useRef(null)

  const links = [
    { label: 'Home', path: '/', icon: <HiHome className="text-lg" /> },
    { label: 'Skills', path: '/skills', icon: <FaTools className="text-lg" /> },
    { label: 'Projects', path: '/projects', icon: <HiUser className="text-lg" /> },
    { label: 'Resume', path: '/resume', icon: <HiDocumentText className="text-lg" /> },
    { label: 'Contact', path: '/contact', icon: <MdContactMail className="text-lg" /> },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const doc = document.documentElement
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
      setProgress(Math.min(Math.max(pct, 0), 100))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] border-b border-white/10'
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        {/* Progress Bar */}
        <div
          aria-hidden
          className="absolute left-0 top-full h-[3px] bg-gradient-to-r from-green-400 to-emerald-300 transition-all"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative h-14 w-14 rounded-full p-[2px] bg-gradient-to-tr from-green-400 via-emerald-500 to-green-400 shadow-lg hover:scale-105 transition">
              <img
                src="/favIcon.png"
                alt="Profile"
                className="h-full w-full rounded-full border-2 border-black object-cover"
              />
            </div>

            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.25em] text-green-400/80">
                Full-Stack Developer
              </div>
              <div className="text-green-300 font-semibold text-sm md:text-base">
                Muli Surya Narendra Reddy
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link key={link.path} to={link.path} className="group relative">
                  <div className="flex items-center gap-2">
                    <span
                      className={`transition ${
                        active
                          ? 'text-green-300'
                          : 'text-gray-200 group-hover:text-green-300'
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all ${
                      active
                        ? 'w-full bg-gradient-to-r from-green-400 to-emerald-300'
                        : 'w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-300'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/Muli_Surya_Narendra_Reddy.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-white/15 bg-white/10 hover:bg-white/20 transition"
            >
              <RiDownload2Fill />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              ref={burgerRef}
              onClick={() => setOpen((p) => !p)}
              className="md:hidden p-2 rounded-xl bg-black/40 border border-white/15 hover:scale-110 transition"
            >
              {open ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[78%] max-w-xs bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full p-[2px] bg-gradient-to-tr from-green-400 to-emerald-500">
              <img
                src="/Profile.jpg"
                alt="Surya"
                className="h-full w-full rounded-full object-cover border-2 border-black"
              />
            </div>
            <div>
              <div className="text-green-300 font-bold">Surya Narendra</div>
              <div className="text-xs text-gray-400">Full-Stack Dev</div>
            </div>
          </div>

          <IoMdClose
            size={24}
            onClick={() => setOpen(false)}
            className="p-1 rounded-full bg-black/40 border border-white/10 cursor-pointer"
          />
        </div>

        <nav className="mt-4 px-3 space-y-2">
          {links.map((link, i) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? 'bg-green-500 text-black font-bold shadow-lg'
                    : 'hover:bg-white/10 text-gray-200'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.icon}
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="px-4 mt-6">
          <a
            href="/Muli_Surya_Narendra_Reddy.pdf"
            download
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full text-black font-semibold shadow-lg"
          >
            <RiDownload2Fill />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar
