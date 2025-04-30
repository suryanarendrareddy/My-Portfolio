import React from 'react'
import { RiMailAddLine, RiPhoneLine } from 'react-icons/ri'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-zinc-900 to-black text-gray-300 py-10 border-none shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-5 text-center md:text-left">
        <div className="flex-1">
          <h1 className="text-yellow-600 text-2xl font-extrabold mb-4">
            About Farmaha360
          </h1>
          <p className="text-lg font-medium mb-4">
            At Farmaha360, our mission is to create a platform that empowers
            farmers by connecting them directly to consumers. We believe in
            leveraging technology to solve real-world problems and improve the
            livelihoods of farmers.
          </p>
        </div>

        <div className="flex-1">
          <h1 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Contact
          </h1>
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
                +91 79938 3<span>XXXX</span>
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-xl" />
              <a
                href="https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E/@14.5229863,78.0300123,212m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x3bb4c3b006f144e7:0x3a8b474096cdb050!2sThathireddy+palli!8m2!3d15.254656!4d79.0274129!16s%2Fg%2F11jkt76tg6!3m3!8m2!3d14.522985!4d78.030656!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                className="hover:text-gray-400 transition"
              >
                Cuddapah, Andhra Pradesh <br /> PIN: 516396
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Quick Links
          </h1>
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
              <a
                href="/contact"
                className="hover:text-gray-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="text-yellow-600 text-2xl font-extrabold mb-4">
            Follow Us
          </h1>
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
