import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 px-6 sm:px-6 lg:px-28 py-4 mt-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-8 text-center lg:text-left">

        <img src="https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776784279/footer-logo_akpvum.webp" alt="Manoj Bhandarkar Logo" className="w-12 md:w-14 h-auto object-contain brightness-110" />

        <div className="flex flex-wrap justify-center font-medium gap-x-8 gap-y-4 text-zinc-300  text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-8 text-zinc-300 text-xs">
          <a href="https://github.com/Manoj-Bhandarkar" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/manoj-bhandarkar-dev" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaLinkedin /></a>
          <a href="mailto:manoj.bhandarkar@gmail.com" aria-label="Send email" className="hover:text-white hover:scale-110 transition-all"><FaEnvelope /></a>
          <a href="https://twitter.com" aria-label="Twitter profile" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaTwitter /></a>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-zinc-300 text-xs text-center tracking-wide">
        © 2026 Manoj Bhandarkar. Built with React & FastAPI.
      </div>
    </footer>
  )
}
