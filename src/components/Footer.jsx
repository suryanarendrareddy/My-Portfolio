import React, { useRef, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { addressData, socialMedia } from '../data/contactData'

const AddressList = memo(function AddressList({ items = [] }) {
  return (
    <address className="not-italic">
      <h3 className="text-green-400 text-lg font-semibold mb-4">Let's Connect</h3>
      <ul className="space-y-3 text-sm">
        {items.map(({ icon: Icon, href, className, text }, idx) => (
          <li key={href ?? text ?? idx} className="flex items-center gap-3">
            <Icon className="text-green-400 text-lg shrink-0" aria-hidden />
            <a
              href={href}
              className={`hover:text-green-300 transition-colors ${className || ''}`}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </address>
  )
})

const SocialMediaList = memo(function SocialMediaList({ items = [] }) {
  return (
    <div>
      <h3 className="text-green-400 text-lg font-semibold mb-4">Find Me Online</h3>
      <ul className="flex flex-col gap-3 text-sm">
        {items.map(({ icon: Icon, href, className, text }, idx) => (
          <li key={href ?? text ?? idx}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                className || ''
              } flex items-center gap-3 hover:text-green-300 transition-colors`}
            >
              <Icon className="text-green-400 text-xl" aria-hidden />
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
})

const useOrbMotion = (orbRef) => {
  useEffect(() => {
    const el = orbRef.current
    if (!el) return
    let cx = window.innerWidth / 2
    const handleMove = (e) => {
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? cx
      const rx = (x - cx) / cx
      el.style.transform = `translate3d(${rx * 8}px, ${-Math.abs(rx) * 6}px, 0)`
    }
    const rafHandler = (e) => requestAnimationFrame(() => handleMove(e))
    const onMove = (e) => rafHandler(e)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    const onResize = () => (cx = window.innerWidth / 2)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [orbRef])
}

const Footer = () => {
  const year = new Date().getFullYear()
  const orbRef = useRef(null)
  useOrbMotion(orbRef)

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-950 to-black text-gray-200 px-6 pb-10 pt-6 overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <div
        ref={orbRef}
        className="pointer-events-none absolute -top-32 left-1/4 h-60 w-60 rounded-full bg-green-500/12 blur-3xl transition-transform will-change-transform"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-6 right-10 h-48 w-48 rounded-full bg-emerald-500/8 blur-3xl"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 id="footer-heading" className="text-2xl font-extrabold text-green-400">
            Surya Narendra Reddy
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Full-Stack Developer building thoughtful, fast and accessible web apps. I
            focus on UX, performance and maintainable code.
          </p>
          <p className="italic text-green-300 text-sm">
            Turning ideas into working experiences.
          </p>
        </div>

        <div>
          <AddressList items={addressData} />
        </div>

        <div>
          <SocialMediaList items={socialMedia} />
        </div>

        <div>
          <h3 className="text-green-400 text-lg font-semibold mb-4">Services I Offer</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-green-300 transition-colors">
              Full-Stack Web Development
            </li>
            <li className="hover:text-green-300 transition-colors">
              Frontend UI / UX Implementation
            </li>
            <li className="hover:text-green-300 transition-colors">
              Backend API Development
            </li>
            <li className="hover:text-green-300 transition-colors">
              Portfolio & Company Websites
            </li>
            <li className="hover:text-green-300 transition-colors">
              Performance & SEO Optimization
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/6 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <nav aria-label="Footer navigation" className="flex gap-4 text-sm font-medium">
            {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/20 rounded-sm px-1"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p className="text-green-400 font-medium">Building tech that matters 🚀</p>
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
