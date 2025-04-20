import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    text: 'suryanarendra1000@gmail.com',
    link: 'mailto:suryanarendra1000@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    text: '+91 79938 3XXXX',
    link: 'tel:+917993830599',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    text: 'Chat on WhatsApp',
    link: 'https://wa.me/917993830599',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    text: 'linkedin.com/in/muli-surya-narendra-reddy',
    link: 'https://www.linkedin.com/in/muli-surya-narendra-reddy-217386337',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    text: 'github.com/Narendra-017',
    link: 'https://github.com/Narendra-017',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    text: 'Faridabad, Haryana',
    link: 'https://goo.gl/maps/faridabad',
  },
]

const Contact = () => {
  return (
    <div className=" text-white py-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="backdrop-blur-xl bg-white/5 border border-gray-700 rounded-2xl p-8 shadow-2xl transition-all">
          <h1 className="text-4xl font-extrabold text-lime-400 mb-4">
            Let's Talk!
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
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
            <p className="text-gray-300">
              🟢 Open for freelance & full-time roles
              <br />
              ⏰ Weekdays: 10 AM - 8 PM IST
              <br />
              📆 Weekends: Flexible
            </p>
          </div>

          <button className="w-full max-w-fit px-6 py-3 bg-lime-500 text-gray-900 font-bold rounded-full hover:bg-lime-600 shadow-xl transition-transform hover:scale-110 flex flex-wrap justify-center items-center gap-2 text-center">
  <span>Message me via links</span>
  <span className="block md:hidden">below ⬇️</span>
  <span className="hidden md:block">beside ➡️</span>
</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-center items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-lime-500 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <div className="text-3xl text-lime-400 mb-2 group-hover:text-white">
                {item.icon}
              </div>
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-lime-300 text-md font-medium group-hover:text-white break-words">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
