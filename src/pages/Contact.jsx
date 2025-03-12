import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { RiPhoneFill } from 'react-icons/ri'

const contactDetails = [
  {
    icon: <FaEnvelope className="text-yellow-500 text-5xl" />,
    text: 'suryanarendra1000@gmail.com',
    link: 'mailto:suryanarendra1000@gmail.com',
  },
  {
    icon: <RiPhoneFill className="text-yellow-500 text-5xl" />,
    text: '+91 79938 3XXXX',
    link: 'tel:+917993830599',
  },
  {
    icon: <FaWhatsapp className="text-green-500 text-5xl" />,
    text: 'Chat on WhatsApp',
    link: 'https://wa.me/917993830599',
  },
  {
    icon: <FaLinkedin className="text-yellow-500 text-5xl" />,
    text: 'linkedin.com/in/muli-surya-narendra-reddy',
    link: 'https://www.linkedin.com/in/muli-surya-narendra-reddy-217386337',
  },
  {
    icon: <FaGithub className="text-yellow-500 text-5xl" />,
    text: 'github.com/Narendra-017',
    link: 'https://github.com/Narendra-017',
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 text-5xl" />,
    text: 'Faridabad, Haryana',
    link: 'https://goo.gl/maps/faridabad',
  },
]

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-gray-100 px-6 my-10">
      <h1 className="text-5xl font-extrabold text-lime-500 mb-8 animate-bounce">
        Let's Connect!
      </h1>

      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-3xl text-center border-2 border-gray-700">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I'm always open to exciting projects, collaborations, and discussions.
          Feel free to reach out!
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate{' '}
          <span className="text-lime-500 font-semibold">
            Full-Stack Developer
          </span>{' '}
          specializing in building interactive and user-friendly web
          applications. If you have an idea, let's bring it to life together!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-left">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-x-3 p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {item.icon}
              <span className="text-lime-400 hover:text-lime-500 transition text-lg font-medium text-center">
                {item.text}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-bold text-yellow-400">Availability</h2>
          <p className="text-gray-300 mt-2 text-lg font-medium flex items-center space-x-2">
            <span className="text-green-400 text-xl">🟢</span>
            <span>
              Available for freelance work and full-time roles. ⏳ Weekdays: 10
              AM - 8 PM (IST) | Weekends: Flexible
            </span>
          </p>
        </div>

        <button className="mt-8 px-8 py-3 bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-full shadow-lg transition-transform transform hover:scale-110">
          Say Hello 👋
        </button>
      </div>
    </div>
  )
}

export default Contact