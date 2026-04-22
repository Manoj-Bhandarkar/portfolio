import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

  return (
    <div className="px-5 sm:px-6 lg:px-28 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-12 lg:py-20 py-16 lg:py-24" id="about">
      <motion.div
        className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[420px] lg:max-w-md flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        viewport={{ once: true }}
      >
        <img src="https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_auto/v1776784281/about-me_odb2dx.webp" width="800" height="600" alt="About Me Illustration" className="w-full max-h-[400px] lg:max-h-[550px] h-auto object-contain" loading='lazy' />
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
        <p className="text-zinc-300 text-sm mt-2 text-center lg:text-left">
          Backend Developer | FastAPI | Django | AWS | PostgreSQL | Docker
        </p>
        <p className="text-zinc-300 text-sm sm:text-base mt-4 lg:mt-8 leading-6">
          I am a backend-focused developer specializing in Python, FastAPI, and Django, with hands-on experience building scalable APIs and production-ready web applications.
        </p>
        <p className="text-zinc-300 text-sm sm:text-base mt-4 lg:mt-8 leading-6">
          I have worked in an enterprise environment as a Technical Consultant, where I collaborated with business teams on ERP systems and database-driven solutions. This experience helped me understand real-world workflows and how backend systems support business operations.
        </p>
        <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-6">
          I enjoy designing clean backend architectures, optimizing performance, and building systems that are reliable and scalable.
        </p>
        <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-6">
          I am actively seeking opportunities as a Python Backend Developer to contribute to real-world applications and grow in modern backend technologies.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {["Python", "FastAPI", "Django", "AWS", "React", "PostgreSQL", "Docker"].map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-300 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

      </motion.div>
    </div >
  );
}
