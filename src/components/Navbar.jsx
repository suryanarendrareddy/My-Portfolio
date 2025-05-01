import React, { useState, useEffect } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && navDrawerOpen) {
        setNavDrawerOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [navDrawerOpen])

  return (
    <div className="flex bg-gradient-to-t from-zinc-900 to-black p-4 w-full items-center justify-around shadow-md fixed top-0 left-0 z-50">
      <div className="flex gap-3 items-center">
        <img
          src="/Profile.jpg"
          alt="Surya image"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <h1 className="md:text-2xl font-extrabold text-white text-lg">
          Muli Surya Narendra Reddy
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-1 text-gray-200 font-semibold text-lg">
        {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map(
          (item, index) => (
            <Link
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white transition duration-300"
            >
              {item}
            </Link>
          )
        )}
      </nav>

      <a
        href="/surya_resume.pdf"
        download="Surya_Narendra_Resume.pdf"
        className="hidden md:flex items-center gap-2 font-semibold text-lg text-gray-100 bg-gradient-to-br from-[#1c1f26] via-[#262d38] to-[#1c1f26] p-2 rounded-lg hover:bg-lime-600 transition duration-300"
      >
        <RiDownload2Fill className="text-xl" />
        Resume
      </a>

      <button
        onClick={() => setNavDrawerOpen(!navDrawerOpen)}
        className="md:hidden text-white"
        aria-label="Toggle menu"
      >
        {navDrawerOpen ? (
          <IoMdClose className="w-7 h-7" />
        ) : (
          <IoMdMenu className="w-7 h-7" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/3 h-full bg-gradient-to-t from-zinc-900 to-black text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-hidden={!navDrawerOpen}
        aria-labelledby="menu"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 id="menu" className="text-xl font-semibold">
            Menu
          </h2>
          <button
            onClick={() => setNavDrawerOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setNavDrawerOpen(false)}
              className="block text-gray-300 hover:bg-zinc-800 hover:text-white py-2 transition duration-300"
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
