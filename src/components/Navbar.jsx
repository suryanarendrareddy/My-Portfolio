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
    <div className="flex bg-black/60 backdrop-blur-md p-4 w-full items-center md:justify-around justify-between shadow-lg fixed top-0 left-0 z-50">
      <div className="flex gap-3 items-center">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-lime-400 via-emerald-500 to-lime-400 p-1 shadow-lg">
          <img
            src="/Profile.jpg"
            alt="Surya image"
            className="w-full h-full object-cover rounded-full border-2 border-black"
          />
        </div>
        <h1 className="text-md md:text-2xl font-extrabold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent tracking-wider drop-shadow-sm">
          Muli Surya Narendra Reddy
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-10 text-white font-medium text-lg">
        {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map(
          (item, index) => (
            <Link
              key={index}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-transform group-hover:scale-105 group-hover:text-[#4ade80] duration-200">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full duration-300"></span>
            </Link>
          )
        )}
      </nav>
      <a
        href="/surya_resume.pdf"
        download="Surya_Narendra_Resume.pdf"
        className="hidden md:flex items-center gap-2 font-semibold text-white bg-white/10 border border-white/20 px-4 py-2 rounded-xl shadow-md hover:bg-[#4ade80] hover:text-black transition duration-300"
      >
        <RiDownload2Fill className="text-xl group-hover:animate-bounce" />
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
        className={`fixed top-0 left-0 w-[50%] sm:w-2/3 md:w-1/3 h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-hidden={!navDrawerOpen}
        aria-labelledby="menu"
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
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

        <nav className="p-4 space-y-5 text-lg font-medium bg-black">
          {['Home', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setNavDrawerOpen(false)}
              className="block px-2 py-2 rounded hover:bg-[#4ade80] hover:text-black transition duration-200"
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
