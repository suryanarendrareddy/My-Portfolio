import React from 'react'
import { Link } from 'react-router-dom'
import Education from './Education'
import Certifications from './Certifications'

const ProfileImage = () => (
  <div className="mt-6 md:mt-24 flex justify-center">
    <img
      src="/Profile.jpg"
      alt="Surya Image"
      className="w-52 md:w-64 lg:w-72 h-52 md:h-64 lg:h-72 rounded-full border-4 border-green-500 shadow-xl transition-transform duration-300 hover:scale-105"
    />
  </div>
)

const StatsItem = ({ value, label, color }) => (
  <div className="text-center flex-1 px-4 py-4 md:py-0 border-t md:border-t-0 md:border-l border-gray-700">
    <h1 className={`text-4xl font-extrabold ${color}`}>{value}</h1>
    <p className="text-lg md:text-xl text-gray-300 font-medium">{label}</p>
  </div>
)

const StatsSection = () => (
  <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto my-12 p-6 md:p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-xl border border-gray-700 flex flex-col md:flex-row items-center justify-between">
    <StatsItem value="15+" label="Modern Skills" color="text-green-500" />
    <StatsItem value="10+" label="Projects" color="text-yellow-400" />
    <StatsItem value="100+" label="DSA Problems Solved" color="text-pink-400" />
  </div>
)

const Home = () => (
  <div className="min-h-screen flex flex-col justify-center px-4 my-16">
    <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto">
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-extrabold text-green-500 my-5 mt-20">
          Welcome
        </h3>
        <h1 className="text-xl md:text-4xl font-extrabold text-gray-100 mx-5">
          I'm{' '}
          <span className="text-3xl md:text-5xl font-bold text-green-500 tracking-tight heading">
            Muli Surya Narendra Reddy
          </span>
        </h1>
        <p className="text-lg font-medium max-w-2xl text-gray-300 mx-auto md:mx-0 mt-4">
          I'm a passionate{' '}
          <span className="text-green-500 font-bold">Full-Stack Developer</span>{' '}
          and the founder of{' '}
          <span className="text-green-500 font-bold">Farmaha360</span>, an
          agri-tech startup. I create modern, seamless, and impactful web
          experiences using{' '}
          <span className="text-green-500 font-bold">React</span> and{' '}
          <span className="text-green-500 font-bold">Node.js</span>.
        </p>
        <p className="text-lg text-gray-400 italic mt-4">
          "Empowering farmers with technology, one code at a time."
        </p>
        <div className="mt-6 flex space-x-4 justify-center md:justify-start">
          <Link
            to="/resume"
            className="bg-green-500 text-gray-900 px-6 py-2 rounded-lg text-lg font-extrabold hover:bg-green-400 transition duration-300 transform hover:scale-105"
          >
            View Resume
          </Link>
          <Link
            to="/contact"
            className="bg-green-500 text-gray-900 px-6 py-2 rounded-lg text-lg font-bold hover:bg-green-400 transition duration-300 transform hover:scale-105"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <ProfileImage />
    </div>

    <StatsSection />

    <div className="mt-12 text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-500 mb-2">My Journey</h2>
      <p className="text-white text-lg">
        As the founder of{' '}
        <span className="font-extrabold text-green-500">Farmaha360</span>, I'm
        committed to revolutionizing the agricultural sector. My focus is on
        developing innovative solutions for farmers using cutting-edge web
        technologies, AI, and data-driven insights.
      </p>
    </div>

    <div className="mt-12 text-center text-gray-300 mb-4">
      <p>
        Fun Fact: I don't just code for fun — I build with purpose, aiming to
        make tech that actually matters.
      </p>
    </div>

    <Education />
    <Certifications />
  </div>
)

export default Home
