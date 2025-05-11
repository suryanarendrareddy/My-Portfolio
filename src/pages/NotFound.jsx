import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black animate-fadeIn">
      <div className="floating-icon mb-8 animate-floatUp">
        <FaExclamationTriangle className="text-yellow-500 text-8xl animate-pulse" />
      </div>
      <h1 className="text-5xl font-bold text-red-600 mb-4 animate-bounceIn">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-100 mb-2 animate-fadeInUp">
        Oops! The page you're looking for doesn't exist or might have been
        moved.
      </p>
      <p className="text-gray-100 mb-6 text-lg animate-fadeInUp delay-300">
        Please check the URL or head back to the homepage.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-lime-400 text-black rounded-md hover:bg-lime-500 transition-all transform hover:scale-105 ease-out duration-300 animate-slideInFromBottom"
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound
