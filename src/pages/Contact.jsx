import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'
import contactData from '../data/contact.json'

const iconMap = {
  FaEnvelope: FaEnvelope,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaWhatsapp: FaWhatsapp,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaPhoneAlt: FaPhoneAlt,
};

const Contact = () => {
  return (
    <div className="text-white py-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 sm:p-10 rounded-xl border-l-4 transition-all duration-300 bg-black border-lime-500">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
            Let's Talk!
          </h1>
          <p className="text-lime-200 mb-6 leading-relaxed text-lg">
            I’m a{' '}
            <span className="text-lime-500 font-semibold">
              Full-Stack Developer
            </span>{' '}
            who loves crafting amazing user experiences and solving real-world
            problems with code.
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              Availability
            </h2>
            <p className="text-lime-200">
              🟢 Open for freelance & full-time roles
              <br />
              ⏰ Weekdays: 10 AM - 8 PM IST
              <br />
              📆 Weekends: Flexible
            </p>
          </div>

          <button className="w-full max-w-fit px-6 py-3 bg-lime-500 text-gray-950 font-extrabold rounded-full hover:bg-lime-600 shadow-xl transition-transform hover:scale-110 flex flex-wrap justify-center items-center gap-1 text-center">
            <span>Message me via links</span>
            <span className="block md:hidden">below ⬇️</span>
            <span className="hidden md:block">beside ➡️</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactData.map((item, index) => {
            const IconComponent = iconMap[item.icon]

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact via ${item.label}`}
                className={`group flex flex-col justify-center items-center text-center p-6 rounded-xl bg-gray-950 border-l-4 transition-all duration-300 ${
                  index % 2 === 0 ? 'border-lime-500' : 'border-yellow-400'
                } hover:border-lime-400 shadow-md`}
              >
                <div className="text-3xl text-yellow-400 mb-2 group-hover:text-white">
                  {IconComponent && <IconComponent />}
                </div>
                <p className="text-sm text-lime-200">{item.label}</p>
                <p className="text-lime-300 text-md font-medium group-hover:text-white break-words">
                  {item.text}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact
