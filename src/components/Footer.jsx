import React from 'react'
import { Link } from 'react-router-dom'
import { RiMailAddLine, RiPhoneLine, RiUserLocationFill, RiWhatsappFill } from "react-icons/ri"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 text-center md:text-left">
        
        <nav>
          <h1 className="text-lime-500 text-xl font-extrabold mb-4">Quick Links</h1>
          <Link to="/" className="hover:text-lime-400 hover:translate-x-1 transition-transform duration-200">Home</Link>
          <div className="flex flex-col space-y-2 text-lg font-medium">
            {["Skills", "Projects", "Resume", "Contact"].map((item, index) => (
              <Link 
                key={index} 
                to={`/${item.toLowerCase()}`} 
                className="hover:text-lime-400 hover:translate-x-1 transition-transform duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <h1 className="text-lime-500 text-xl font-extrabold mb-4">Social Media</h1>
          <div className="flex flex-col space-y-3 text-lg font-medium">
            <a 
              href="https://github.com/Narendra-017" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-400 duration-200 hover:scale-105"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/muli-surya-narendra-reddy-217386337" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-500 duration-200 hover:scale-105"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
            <a 
              href="https://twitter.com/yourtwitter" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 duration-200 hover:scale-105"
            >
              <FaTwitter className="text-2xl" /> Twitter
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-lime-500 text-xl font-extrabold mb-4">Contact</h1>
          <div className="space-y-3 text-lg font-medium">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiMailAddLine className="text-xl" />
              <a href="mailto:suryanarendra1000@gmail.com" className="hover:text-gray-400 transition">{' '}suryanarendra1000@gmail.com</a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiPhoneLine className="text-xl" />
              <a href='tel:+917993830599'>+91 79938 3<span>XXXX</span></a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiWhatsappFill className="text-green-400 text-xl" />
              <a href="https://wa.me/7993830599" target="_blank" className="hover:text-gray-400 transition">Connect with me</a>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <RiUserLocationFill className="text-xl" />
              <p>3-98A, ThathiReddy Palli, Komannuthala,<br />Cuddapah, Andhra Pradesh - 516396</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <h1 className="text-md font-bold text-gray-100">Surya Narendra Reddy</h1>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
