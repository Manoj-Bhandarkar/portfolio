import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-4 sm:px-6 lg:px-28 py-6 mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        <img src="/assets/footer-logo.webp" alt="Manoj Bhandarkar Logo" className="w-20 md:w-20 h-auto object-contain" />

        <div className="flex gap-6 text-gray-300 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-4 text-white text-lg">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>

      </div>

      <div className="text-gray-400 text-xs mt-6 text-center">
        © 2026 Manoj Bhandarkar. Built with React & FastAPI.
      </div>
    </footer>
  )
}
