import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

// Components
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Journey from './components/sections/Journey'
import Resources from './components/sections/Resources'
import Routine from './components/sections/Routine'
import Achievements from './components/sections/Achievements'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Chatbot from './components/chatbot/Chatbot'
import CustomCursor from './components/ui/CustomCursor'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-cinematic-black text-white' : 'bg-white text-black'}`}>
      <CustomCursor />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Resources />
        <Routine />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
      
      <Chatbot />
    </div>
  )
}

export default App
