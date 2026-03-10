import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
<div className="px-5 lg:px-28 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20" id="about">
      <motion.div
        className="w-full max-w-[300px] lg:max-w-md flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/manoj1.png" alt="About Me Illustration" className="w-full max-h-[300px] lg:max-h-[450px] h-auto object-contain"/>
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a passionate backend-focused developer specializing in Python, FastAPI, and Django, with experience building modern full-stack applications using React for the frontend. I enjoy designing scalable APIs and developing clean, efficient systems that power reliable web applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey into software development began with exploring web technologies and backend architecture, and since then I’ve continuously improved my skills by building practical projects and learning modern development tools.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Today, I focus on creating high-performance backend services, RESTful APIs, and full-stack applications using technologies like Python, FastAPI, Django, React, PostgreSQL, Docker, and Git.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I’m particularly interested in building scalable web systems, API-driven applications, and modern developer workflows. I enjoy learning new technologies, solving real-world problems through code, and sharing my work through GitHub projects and technical experimentation.
        </p>

      </motion.div>
    </div>
  );
}
