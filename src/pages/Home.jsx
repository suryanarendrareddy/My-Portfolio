import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Education from './Education'
import Certifications from './Certifications'

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center px-6 my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto"
      >
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-lime-600 my-5">
            Welcome
          </h3>
          <h1 className="text-4xl font-extrabold text-gray-100 mx-5 my-0">
            I'm{' '}
            <span className="text-yellow-600 text-5xl font-bold">
              <Typewriter
                words={['Muli Surya Narendra Reddy']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl font-medium max-w-2xl text-gray-300 mx-auto md:mx-0 mt-4">
            I am a passionate{' '}
            <span className="text-yellow-600 font-bold">
              Full-Stack Developer
            </span>{' '}
            dedicated to building modern, seamless, and interactive web
            experiences using{' '}
            <span className="text-yellow-600 font-bold">React</span> and{' '}
            <span className="text-yellow-600 font-bold">Node.js.</span> My
            commitment to clean, maintainable code and problem-solving drives me
            to create innovative solutions.
          </p>
          <p className="text-lg text-gray-400 italic mt-4">
            "Building seamless web experiences, one line of code at a time."
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to="/resume"
              className="bg-lime-600 text-gray-900 px-6 py-2 rounded-lg text-lg font-bold hover:bg-lime-500 transition duration-300 transform hover:scale-105"
            >
              View Resume
            </Link>
            <Link
              to="/contact"
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg text-lg font-bold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 md:mt-0 flex justify-center"
        >
          <img
            src="/Profile.jpg"
            alt="Surya Image"
            className="w-52 md:w-64 lg:w-80 rounded-full border-4 border-lime-500 shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-11/12 md:w-3/4 lg:w-1/2 mx-auto p-8 md:p-10 mt-10 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-lg border border-gray-200"
      >
        <div className="text-center flex-1 px-4 py-2 md:py-0">
          <h1 className="text-4xl font-extrabold text-gray-900">15+</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Modern Skills
          </p>
        </div>
        <div className="text-center flex-1 px-4 py-2 md:py-0 border-t md:border-t-0 md:border-l border-gray-300">
          <h1 className="text-4xl font-extrabold text-gray-900">5+</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Projects
          </p>
        </div>
        <div className="text-center flex-1 px-4 py-2 md:py-0 border-t md:border-t-0 md:border-l border-gray-300">
          <h1 className="text-4xl font-extrabold text-gray-900">50+</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            DSA Problems
            <br />
            Solved
          </p>
        </div>
      </motion.div>

      <div>
        <Education />
        <Certifications />
      </div>
    </div>
  )
}

export default Home
