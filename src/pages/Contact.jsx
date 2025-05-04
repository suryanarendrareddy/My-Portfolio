import React from 'react'
import { contactData } from '../data/contactData.jsx'

const Contact = () => {
  const ContactCard = React.memo(({ data }) => {
    const { icon: IconComponent, label, text, link } = data

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contact via ${label}`}
        className="group flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-black hover:bg-black/80 transition-all duration-300 shadow-xl hover:shadow-lime-400/30 border border-lime-500/20 hover:border-green-400"
      >
        <div className="text-3xl text-green-400 mb-2 group-hover:scale-110 transition-transform">
          {IconComponent && <IconComponent />}
        </div>
        <p className="text-sm text-green-300">{label}</p>
        <p className="text-white text-md font-semibold group-hover:text-green-400 break-words mt-1">
          {text}
        </p>
      </a>
    )
  })

  return (
    <section className="text-white pb-20 pt-32 px-6 min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 sm:p-10 rounded-2xl bg-black border border-lime-400/30 shadow-2xl hover:shadow-lime-500/20 transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-green-500 mb-4">
            Let's Talk!
          </h1>
          <p className="text-white mb-6 leading-relaxed text-lg">
            I'm a{' '}
            <span className="text-green-400 font-semibold">
              Full-Stack Developer
            </span>{' '}
            passionate about solving real-world problems and building smooth
            user experiences.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">
              Availability
            </h2>
            <p className="text-white leading-relaxed">
              🟢 Open for freelance & full-time roles
              <br />
              ⏰ Weekdays: 10 AM - 8 PM IST
              <br />
              📆 Weekends: Flexible
            </p>
          </div>
          <button className="w-full max-w-fit px-6 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-500 shadow-md hover:shadow-green-400 transition-transform hover:scale-105 flex gap-2 items-center">
            <span>Message me via links</span>
            <span className="hidden md:inline">Beside ➡️</span>
            <span className="md:hidden">Below ⬇️</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactData.map((item, index) => (
            <ContactCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
