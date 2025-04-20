import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import ScrollToTop from './pages/ScrollToTop'

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Surya Narendra Reddy | Full Stack Developer</title>
          <meta
            name="description"
            content="Hi, I'm Surya Narendra Reddy – a Full Stack Developer specializing in React, Node.js, and modern web projects."
          />
          <meta
            name="keywords"
            content="Surya Narendra Reddy, Full Stack Developer, React, Node.js, Portfolio, Web Developer, India"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Surya Narendra Reddy" />
          <link rel="canonical" href="https://surya-portfolio.vercel.app" />
        </Helmet>

        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
