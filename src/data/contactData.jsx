import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { RiMailAddLine, RiPhoneLine } from 'react-icons/ri'

export const contactData = [
  {
    icon: FaEnvelope,
    label: 'Email',
    text: 'suryanarendra1000@gmail.com',
    link: 'mailto:suryanarendra1000@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    text: '+91 79938 30599',
    link: 'tel:+917993830599',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    text: 'Chat on WhatsApp',
    link: 'https://wa.me/917993830599',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    text: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/muli-surya-narendra-reddy',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    text: 'View GitHub Profile',
    link: 'https://github.com/suryanarendrareddy',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    text: 'Tathireddypalli, Andhra Pradesh',
    link: "https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E",
  },
]

export const addressData = [
  {
    icon: RiMailAddLine,
    className: 'hover:text-white transition',
    href: 'mailto:suryanarendra1000@gmail.com',
    text: 'suryanarendra1000@gmail.com',
  },
  {
    icon: RiPhoneLine,
    className: 'hover:text-white transition',
    href: 'tel:+917993830599',
    text: '+91 79938 30599',
  },
  {
    icon: FaMapMarkerAlt,
    className: 'hover:text-white transition',
    href: "https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E",
    text: 'Cuddapah, Andhra Pradesh — 516396',
  },
]

export const socialMedia = [
  {
    icon: FaGithub,
    href: 'https://github.com/suryanarendrareddy',
    className: 'flex gap-2 hover:text-gray-400 transition hover:underline',
    text: 'GitHub Profile',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/muli-surya-narendra-reddy',
    className: 'flex gap-2 hover:text-blue-500 transition hover:underline',
    text: 'LinkedIn Profile',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/SuryaNarendra17',
    className: 'flex gap-2 hover:text-blue-400 transition hover:underline',
    text: 'Twitter',
  },
]
