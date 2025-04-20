import React, { useState } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  return (
    <div className="flex bg-gradient-to-t from-zinc-900 to-black p-3 w-full items-center justify-around shadow-md">
      <div className="flex gap-3 items-center">
        <img
          src="/Profile.jpg"
          alt="Surya image"
          className="w-10 h-10 rounded-full border border-white"
        />
        <h1 className="text-xl font-bold text-white">
          Muli Surya Narendra Reddy
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-5 text-gray-200 font-semibold text-lg">
        <Link
          to="/"
          className="px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="/skills"
          className="px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition"
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition"
        >
          Contact
        </Link>
      </nav>

      <a
        href="/surya_resume.pdf"
        download="Surya_Narendra_Resume.pdf"
        className="hidden md:flex items-center gap-1 font-semibold text-lg text-gray-100 bg-gradient-to-br from-[#1c1f26] via-[#262d38] to-[#1c1f26] p-2 rounded-lg hover:bg-lime-600 transition"
      >
        <RiDownload2Fill />
        Resume
      </a>

      <button
        onClick={() => setNavDrawerOpen(!navDrawerOpen)}
        className="md:hidden text-white"
      >
        {navDrawerOpen ? (
          <IoMdClose className="w-7 h-7" />
        ) : (
          <IoMdMenu className="w-7 h-7" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/3 h-full bg-gradient-to-t from-zinc-900 to-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => setNavDrawerOpen(false)}
            className="text-white"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setNavDrawerOpen(false)}
            className="block text-gray-300 hover:bg-zinc-800 hover:text-white py-2 transition"
          >
            Home
          </Link>
          {['Skills', 'Projects', 'Resume', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-300 hover:bg-zinc-800 hover:text-white py-2 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
