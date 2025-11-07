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
    text: '+91 79938 3XXXX',
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
    text: 'linkedin.com/in/muli-surya-narendra-reddy',
    link: 'https://www.linkedin.com/in/muli-surya-narendra-reddy',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    text: 'github.com/suryanarendrareddy',
    link: 'https://github.com/suryanarendrareddy',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    text: 'TathiReddyPalli(Vlg.), Lingala(M), Cuddapah(Dist.), Andhra Pradesh - 516396',
    link: "https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E/@14.5229863,78.0300123,212m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x3bb4c3b006f144e7:0x3a8b474096cdb050!2sThathireddy+palli!8m2!3d15.254656!4d79.0274129!16s%2Fg%2F11jkt76tg6!3m3!8m2!3d14.522985!4d78.030656!5m1!1e4?entry=ttu",
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
    text: '+91799383XXXX',
  },
  {
    icon: FaMapMarkerAlt,
    className: 'hover:text-white transition',
    href: "https://www.google.com/maps/place/14%C2%B031'22.8%22N+78%C2%B001'50.4%22E",
    text: 'Cuddapah, Andhra Pradesh 516396',
  },
]

export const socialMedia = [
  {
    icon: FaGithub,
    href: 'https://github.com/suryanarendrareddy',
    className: 'flex gap-2 hover:text-gray-400 transition hover:underline',
    text: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/muli-surya-narendra-reddy',
    className: 'flex gap-2 hover:text-blue-500 transition hover:underline',
    text: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/SuryaNarendra17',
    className: 'flex gap-2 hover:text-blue-400 transition hover:underline',
    text: 'Twitter',
  },
]