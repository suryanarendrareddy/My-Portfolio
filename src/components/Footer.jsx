import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addressData, socialMedia } from '../data/contactData'

const AddressList = ({ items }) => (
  <address className="not-italic">
    <h3 className="text-green-400 text-lg font-semibold mb-4">Let's Connect</h3>
    <ul className="space-y-3 text-sm">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon className="text-green-400 text-lg shrink-0" />
          <a
            href={href}
            className={`hover:text-green-300 transition-colors ${
              className || ''
            }`}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </address>
)

const SocialMediaList = ({ items }) => (
  <div>
    <h3 className="text-green-400 text-lg font-semibold mb-4">
      Find Me Online
    </h3>
    <ul className="flex flex-col gap-3 text-sm">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              className || ''
            } flex items-center gap-3 hover:text-green-300 transition-colors`}
          >
            <Icon className="text-green-400 text-xl" />
            <span>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const year = new Date().getFullYear()
  const orbRef = useRef(null)

  useEffect(() => {
    const el = orbRef.current
    if (!el) return
    let cx = window.innerWidth / 2
    const handle = (e) => {
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? cx
      const y = e.clientY ?? 0
      const rx = (x - cx) / cx
      el.style.transform = `translate3d(${rx * 8}px, ${-Math.abs(rx) * 6}px, 0)`
    }
    window.addEventListener('mousemove', handle)
    window.addEventListener('touchmove', handle, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handle)
      window.removeEventListener('touchmove', handle)
    }
  }, [])

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-200 px-6 pb-10 pt-5 overflow-hidden">
      <div
        ref={orbRef}
        className="pointer-events-none absolute -top-32 left-1/4 h-60 w-60 rounded-full bg-green-500/12 blur-3xl transition-transform duration-300"
      />
      <div className="pointer-events-none absolute bottom-6 right-10 h-48 w-48 rounded-full bg-emerald-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-green-400">
            Surya Narendra Reddy
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Full-Stack Developer building thoughtful, fast, and accessible web
            apps. I focus on UX, performance, and maintainable code.
          </p>
          <p className="italic text-green-300 text-sm">
            "Turning ideas into working experiences."
          </p>
        </div>

        <div>
          <AddressList items={addressData} />
        </div>

        <div>
          <SocialMediaList items={socialMedia} />
        </div>

        <div>
          <h3 className="text-green-400 text-lg font-semibold mb-4">
            Services I Offer
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-green-300 transition-colors">
              🔹 Full-Stack Web Development
            </li>
            <li className="hover:text-green-300 transition-colors">
              🔹 Frontend UI/UX Implementation
            </li>
            <li className="hover:text-green-300 transition-colors">
              🔹 Backend API Development
            </li>
            <li className="hover:text-green-300 transition-colors">
              🔹 Portfolio / Company Websites
            </li>
            <li className="hover:text-green-300 transition-colors">
              🔹 Performance & SEO Optimization
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/6 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <nav className="flex gap-4 text-sm font-medium">
            {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map(
              (item, i) => (
                <Link
                  key={i}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-green-300 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          <div className="text-center md:text-right">
            <p className="text-green-400 font-medium">
              Building tech that matters 🚀
            </p>
            <p className="text-sm text-gray-400 mt-1">
              © {year} Surya Narendra Reddy — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
