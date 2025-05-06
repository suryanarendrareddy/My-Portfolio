import React from 'react'
import { addressData, socialMedia } from '../data/contactData'
const AddressList = ({ items }) => (
  <address className="not-italic">
    <h2 className="text-green-500 text-xl font-semibold mb-4">Contact</h2>
    <ul className="space-y-3 text-md">
      {items.map(({ icon: Icon, href, className, text }, index) => (
        <li key={index} className="flex items-center gap-2">
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
  <ul className="flex flex-col items-center space-y-3 text-md">
    <h1 className="text-green-500 text-xl font-semibold mb-1">Follow Me</h1>
    {items.map(({ icon: Icon, href, className, text }, index) => (
      <li key={index}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <Icon className="text-xl" /> {text}
        </a>
      </li>
    ))}
  </ul>
)
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-gray-200 px-6 py-12 shadow-inner text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <section>
          <h2 className="text-green-500 text-2xl font-bold mb-4">Farmaha360</h2>
          <p className="text-base leading-relaxed">
            Empowering farmers by directly connecting them with consumers.
            Tech-driven solutions for real-world agricultural challenges.
          </p>
        </section>
        <AddressList items={addressData} />
        <nav aria-label="Quick Links">
          <h2 className="text-green-500 text-xl font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-md">
            {['skills', 'resume', 'projects', 'contact'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link}`}
                  className="hover:text-white transition capitalize"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialMediaList items={socialMedia}/>
      </div>

      <div className="mt-16 border-t border-zinc-700 pt-6 text-center">
        <p className="text-lg font-semibold text-green-400">
          Let's build something amazing together!
        </p>
        <p className="text-sm text-white mt-2">
          &copy; {year} Surya Narendra Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
