import React from 'react'
import { RiMailAddLine, RiPhoneLine } from 'react-icons/ri'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-[#18181b] text-gray-300 py-10 border-none">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-5 text-center md:text-left">
        {/* Quick Contact */}
        <div className="flex-1">
          <h1 className="text-lime-500 text-2xl font-extrabold mb-4">
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
              <p>
                Cuddapah, Andhra Pradesh <br /> PIN: 516396
              </p>
            </div>
          </div>
        </div>

        {/* Connect with Me */}
        <div className="flex-1">
          <h1 className="text-lime-500 text-2xl font-extrabold mb-4">
            Connect With Me
          </h1>
          <div className="flex flex-col space-y-3 text-lg font-medium">
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

        <div className="flex-1">
          <h1 className="text-lime-500 text-2xl font-extrabold mb-4">
            Tech Stack
          </h1>
          <ul className="space-y-2 text-lg font-medium">
            <li>React.js </li>
            <li>Node.js & Express</li>
            <li>MongoDB, MySQL</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS, Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4 px-4">
        <p className="text-lg font-semibold text-gray-100">
          Let's build something amazing together!
        </p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Surya Narendra Reddy. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
