import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <main
      role="main"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 px-6 text-center overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      {/* icon */}
      <div className="mb-8 motion-safe:animate-float" aria-hidden="true">
        <FaExclamationTriangle className="text-yellow-400 text-8xl drop-shadow-[0_0_20px_rgba(234,179,8,0.35)]" />
      </div>

      {/* heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-md motion-safe:animate-fadeIn">
        404 — Page Not Found
      </h1>

      {/* explanation */}
      <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-300 motion-safe:animate-fadeInUp">
        Oops — the page you’re looking for doesn’t exist or has been moved.
      </p>
      <p className="mt-1 max-w-xl text-sm sm:text-base text-gray-400 motion-safe:animate-fadeInUp">
        Try checking the URL, or return safely to the homepage.
      </p>

      {/* actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-black font-semibold shadow-lg shadow-yellow-500/30 transition-transform duration-200 hover:bg-yellow-300 hover:shadow-yellow-400/40 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-400/30"
        >
          Go to Homepage
          <span className="sr-only"> — navigate to homepage</span>
        </Link>

        <a
          href="mailto:support@yoursite.com?subject=Broken link found on site"
          className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 px-5 py-3 text-sm text-yellow-200 hover:bg-white/3 transition focus:outline-none focus:ring-4 focus:ring-yellow-300/20"
        >
          Report broken link
        </a>
      </div>

      {/* helpful links */}
      <nav className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link to="/projects" className="text-gray-300 underline hover:text-white">
          Projects
        </Link>
        <Link to="/resume" className="text-gray-300 underline hover:text-white">
          Resume
        </Link>
        <Link to="/contact" className="text-gray-300 underline hover:text-white">
          Contact
        </Link>
      </nav>

      {/* accessible hint */}
      <p className="sr-only" aria-live="polite">
        404 error — page not found.
      </p>

      {/* local keyframes (motion-safe only) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .motion-safe\\:animate-float { animation: float 3s ease-in-out infinite; }
          .motion-safe\\:animate-fadeIn { animation: fadeIn 700ms ease-out both; }
          .motion-safe\\:animate-fadeInUp { animation: fadeInUp 800ms ease-out both; }
        }
      `}</style>
    </main>
  )
}

export default NotFound
