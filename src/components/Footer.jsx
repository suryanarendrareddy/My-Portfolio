import React from 'react'
import { RiMailAddLine, RiPhoneLine } from 'react-icons/ri'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-zinc-900 to-black text-gray-300 py-10 border-none shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly gap-8 px-5 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-yellow-600 text-2xl font-extrabold mb-4">
            About Farmaha360
          </h2>
          <p className="text-lg font-medium mb-4">
            At Farmaha360, our mission is to empower farmers by connecting them
            directly with consumers. We believe in using technology to solve
            real-world problems and improve the livelihoods of farmers.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Contact
          </h2>
          <div className="space-y-3 text-lg font-medium">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiMailAddLine className="text-xl" />
              <a
                href="mailto:suryanarendra1000@gmail.com"
                className="hover:text-gray-400 transition"
              >
                suryanarendra1000@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiPhoneLine className="text-xl" />
              <a
                href="tel:+917993830599"
                className="hover:text-gray-400 transition"
              >
                +91 79938 3XXXX
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-xl" />
              <a
                href="https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E"
                className="hover:text-gray-400 transition"
              >
                Cuddapah, Andhra Pradesh, 516396
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-lg font-medium">
            <li>
              <a href="/skills" className="hover:text-gray-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/resume" className="hover:text-gray-400 transition">
                Resume
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Follow Us
          </h2>
          <div className="space-y-3 text-lg font-medium">
            <a
              href="https://github.com/Narendra-017"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-400"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muli-surya-narendra-reddy-217386337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
            <a
              href="https://twitter.com/SuryaNarendra17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400"
            >
              <FaTwitter className="text-2xl" /> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center pt-2 px-4 border-t border-gray-400">
        <p className="text-lg font-bold text-gray-100 pt-2">
          Let's build something amazing together!
        </p>
        <p className="text-sm text-gray-400 font-bold">
          © {new Date().getFullYear()} Surya Narendra Reddy. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
