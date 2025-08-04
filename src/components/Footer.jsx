import React from 'react'
import { addressData, socialMedia } from '../data/contactData'

const AddressList = ({ items }) => (
  <address className="not-italic">
    <h2 className="text-green-500 text-xl font-bold mb-4">Let's Connect</h2>
    <ul className="space-y-3 text-md">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon />
          <a
            href={href}
            className={className}
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
    <h2 className="text-green-500 text-xl font-bold mb-4">Find Me Online</h2>
    <ul className="flex flex-col gap-4 text-md">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} flex items-center gap-2 hover:text-green-400 transition`}
          >
            <Icon className="text-xl" />{text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-gray-200 px-6 py-16 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-green-500 mb-3">
            Surya Narendra Reddy
          </h2>
          <p className="text-md leading-relaxed">
            Full-Stack Developer specialized in building dynamic, scalable, and
            elegant web apps with the MERN stack. Let's create impact through
            code.
          </p>
        </div>

        <AddressList items={addressData} />
        <SocialMediaList items={socialMedia} />
      </div>

      <div className="mt-12 border-t border-zinc-700 pt-6 text-center">
        <p className="text-md text-green-400 font-medium">
          Building tech that matters 🚀
        </p>
        <p className="text-sm text-white mt-2">
          &copy; {year} Surya Narendra Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
