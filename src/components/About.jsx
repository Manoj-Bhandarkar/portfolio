import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

  return (
    <div className="px-5 sm:px-6 lg:px-28 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 py-10 lg:py-16" id="about">
      <motion.div
        className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-md flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.webp" alt="About Me Illustration" className="w-full max-h-[400px] lg:max-h-[550px] h-auto object-contain" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-center lg:text-left">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm leading-6 sm:text-base mt-4 lg:mt-8">
          I'm a passionate backend-focused developer specializing in Python, FastAPI, and Django, with experience building modern full-stack applications using React for the frontend. I enjoy designing scalable APIs and developing clean, efficient systems that power reliable web applications.
        </p>

        <p className="text-[#71717A] text-sm leading-6 sm:text-base mt-4 lg:mt-8">
          My journey into software development began with exploring web technologies and backend architecture, and since then I’ve continuously improved my skills by building practical projects and learning modern development tools.
        </p>

        <p className="text-[#71717A] text-sm leading-6 sm:text-base mt-4 lg:mt-8">
          Today, I focus on creating high-performance backend services, RESTful APIs, and full-stack applications using technologies like Python, FastAPI, Django, React, PostgreSQL, Docker, and Git.
        </p>

        <p className="text-[#71717A] text-sm leading-6 sm:text-base mt-4 lg:mt-8">
          I’m particularly interested in building scalable web systems, API-driven applications, and modern developer workflows. I enjoy learning new technologies, solving real-world problems through code, and sharing my work through GitHub projects and technical experimentation.
        </p>

      </motion.div>
    </div>
  );
}
