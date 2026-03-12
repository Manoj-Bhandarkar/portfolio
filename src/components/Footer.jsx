import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-4 sm:px-6 lg:px-28 py-6 mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between item-center lg:items-center gap-8 text-center lg:text-left">

        <img src="/assets/footer-logo.webp" alt="Manoj Bhandarkar Logo" className="w-20 md:w-20 h-auto object-contain brightness-110" />

        <div className="flex flex-wrap justify-center font-medium gap-6 text-gray-300 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-6 text-white text-lg">
          <a href="https://github.com/Manoj-Bhandarkar" className="hover:scale-110 transition-transform"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/manoj-bhandarkar" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
          <a href="mailto:manoj.bhandarkar@gmail.com" className="hover:scale-110 transition-transform"><FaEnvelope /></a>
          <a href="https://twitter.com" className="hover:scale-110 transition-transform"><FaTwitter /></a>
        </div>

      </div>

      <div className="text-gray-500 text-xs mt-10 text-center border-t border-zinc-900 pt-6">
        © 2026 Manoj Bhandarkar. Built with React & FastAPI.
      </div>
    </footer>
  )
}
