import React from 'react'
import { addressData, socialMedia } from '../data/contactData'
import { Link } from 'react-router-dom'

const AddressList = ({ items }) => (
  <address className="not-italic">
    <h2 className="text-green-400 text-xl font-bold mb-4">Let's Connect</h2>
    <ul className="space-y-3 text-md">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon className="text-green-400 text-lg" />
          <a
            href={href}
            className={`hover:text-green-300 transition ${className}`}
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
    <h2 className="text-green-400 text-xl font-bold mb-4">Find Me Online</h2>
    <ul className="flex flex-col gap-4 text-md">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} flex items-center gap-2 hover:text-green-300 transition`}
          >
            <Icon className="text-xl text-green-400" />
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-200 px-6 py-20 shadow-inner overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-60 w-60 rounded-full bg-green-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-green-400 mb-3">
            Surya Narendra Reddy
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Full-Stack Developer crafting modern, scalable & high-performance
            web apps with a focus on clean UI, smooth UX, and meaningful digital
            impact.
          </p>

          <p className="mt-4 text-green-300 text-sm italic">
            "Turning ideas into working experiences."
          </p>
        </div>

        {/* Address */}
        <AddressList items={addressData} />

        {/* Social media */}
        <SocialMediaList items={socialMedia} />

        {/* NEW SECTION: Services Offered */}
        <div>
          <h2 className="text-green-400 text-xl font-bold mb-4">
            Services I Offer
          </h2>
          <ul className="space-y-3 text-md tracking-wide">
            <li className="hover:text-green-300 transition">
              🔹 Full-Stack Web Development
            </li>
            <li className="hover:text-green-300 transition">
              🔹 Frontend UI/UX Implementation
            </li>
            <li className="hover:text-green-300 transition">
              🔹 Backend API Development
            </li>
            <li className="hover:text-green-300 transition">
              🔹 Portfolio / Company Website Creation
            </li>
            <li className="hover:text-green-300 transition">
              🔹 Bug Fixing & Optimization
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <h2 className="text-center text-green-400 font-semibold mb-5">
          Quick Links
        </h2>

        <div className="flex justify-center gap-6 md:gap-10 text-sm md:text-md font-medium flex-wrap">
          {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map(
            (item, i) => (
              <Link
                key={i}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-green-300 transition"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center">
        <p className="text-green-400 font-medium text-md">
          Building tech that matters 🚀
        </p>
        <p className="text-sm text-gray-400 mt-2">
          © {year} Surya Narendra Reddy — All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
