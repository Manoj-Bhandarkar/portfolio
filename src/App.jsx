import React from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import Certifications from "./components/Cerifications"
import Experience from './components/Experience'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor />
      <Navbar />
      <Home />
      <Certifications />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
