import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 px-6 text-center overflow-hidden">
      
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="mb-8 animate-[float_3s_ease-in-out_infinite]">
        <FaExclamationTriangle className="text-yellow-400 text-8xl drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-[fadeIn_0.7s_ease-out]">
        404 – Page Not Found
      </h1>

      <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-300 animate-[fadeInUp_0.8s_ease-out]">
        Oops! The page you’re trying to reach doesn’t exist or may have been
        moved.
      </p>
      <p className="mt-1 max-w-xl text-sm sm:text-base text-gray-400 animate-[fadeInUp_1s_ease-out]">
        Please check the link or return safely to the homepage.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-black font-semibold shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:bg-yellow-300 hover:shadow-yellow-400/40 hover:-translate-y-1 animate-[fadeIn_1.2s_ease-out]"
      >
        Go to Homepage →
      </Link>

      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </section>
  )
}

export default NotFound
