import React from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import Experience from './components/Experience'
import { lazy, Suspense } from "react"
const CertificationsLazy = lazy(() => import("./components/Certifications"))
const ProjectsLazy = lazy(() => import("./components/Projects"))

export default function App() {

  return (
    <div className='font-sora overflow-x-hidden'>
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading section...</div>}>
          <CertificationsLazy />
          <ProjectsLazy />
        </Suspense>
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
