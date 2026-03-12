import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

  return (
    <div className="px-5 sm:px-6 lg:px-28 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-12 lg:py-20 scroll-mt-10" id="about">
      <motion.div
        className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[420px] lg:max-w-md flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.webp" width="800" height="600" alt="About Me Illustration" className="w-full max-h-[400px] lg:max-h-[550px] h-auto object-contain" loading='lazy' />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
          About <span className="text-black">Me</span>
        </h2>
        
        <p className="text-zinc-500 text-sm mt-2 text-center lg:text-left">
          Backend Developer | API Specialist | FastAPI Enthusiast
        </p>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 lg:mt-8 leading-6">
          Backend-focused developer specializing in Python, FastAPI, and Django with experience building scalable APIs and modern full-stack applications using React.
        </p>

        <p className="text-zinc-500 text-sm sm:text-base mt-4 leading-6">
          I enjoy designing clean system architecture, developing high-performance backend services, and building reliable web applications powered by RESTful APIs.
        </p>

        <p className="text-zinc-500 text-sm sm:text-base mt-4 leading-6">
          Currently focused on building production-ready projects using FastAPI, PostgreSQL, Docker, and modern developer workflows.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {["Python", "FastAPI", "Django", "React", "PostgreSQL", "Docker"].map((tech) => (
            <span
              key={tech}
              className="text-xs bg-zinc-100 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
