import React from 'react'
import { RiMailAddLine, RiPhoneLine } from 'react-icons/ri'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-gray-200 py-12 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-center">
        <div>
          <h2 className="text-green-500 text-2xl font-bold mb-4">Farmaha360</h2>
          <p className="text-base leading-relaxed">
            Empowering farmers by directly connecting them with consumers.
            Tech-driven solutions for real-world agricultural challenges.
          </p>
        </div>

        <div>
          <h2 className="text-green-500 text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-md">
            <li className="flex items-center justify-center gap-2 hover:text-white transition">
              <RiMailAddLine />{' '}
              <a href="mailto:suryanarendra1000@gmail.com">
                suryanarendra1000@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 hover:text-white transition">
              <RiPhoneLine /> <a href="tel:+917993830599">+91 79938 3XXXX</a>
            </li>
            <li className="flex items-center justify-center gap-2 hover:text-white transition">
              <FaMapMarkerAlt />{' '}
              <a
                href="https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E"
                target="_blank"
                rel="noreferrer"
              >
                Cuddapah, Andhra Pradesh 516396
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-500 text-xl font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-md">
            <li>
              <a href="/skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/resume" className="hover:text-white transition">
                Resume
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-green-500 text-xl font-semibold mb-4">
            Follow Me
          </h2>
          <div className="flex flex-col items-center space-y-3 text-md">
            <a
              href="https://github.com/Narendra-017"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muli-surya-narendra-reddy-217386337"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
            <a
              href="https://twitter.com/SuryaNarendra17"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaTwitter className="text-xl" /> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-6 text-center">
        <p className="text-lg font-bold text-green-400">
          Let's build something amazing together!
        </p>
        <p className="text-sm text-white mt-1 tracking-wide">
          © {new Date().getFullYear()} Surya Narendra Reddy. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
