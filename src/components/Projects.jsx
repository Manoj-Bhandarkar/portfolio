import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Django Blog Application",
    description: "A dynamic blogging platform built with Django. Features include user authentication (login/signup), role-based access control, a searchable post database, and a custom administrative dashboard for streamlined content management.",
    tech: ["Django", "Django ORM", "MVT", "SQLite"],
    image: "https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_auto/v1776784277/project1_ixv4hb.webp",
    link: "https://manojbhandarkar.pythonanywhere.com/",
    github: "https://github.com/Manoj-Bhandarkar/django-blog"

  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "A full-stack e-commerce platform built with FastAPI and Next.js, featuring secure authentication, product management, cart and order workflows, and integrated payment processing. Designed with a production-oriented architecture including background task processing, containerization, and cloud deployment. Key features include JWT-based authentication, product search & pagination, cart management, order checkout, payment integration, and email verification.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS", "Celery", "Redis"],
    image: "https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_auto/v1776784275/project2_vzhh0n.png",
    link: "#",
    github: "https://github.com/Manoj-Bhandarkar/fastapi-production-ecommerce"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-28 py-12 py-16 lg:py-32" id="projects">
      <h2 className="text-3xl lg:text-5xl text-center text-white mb-3">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex items-center flex-col gap-6 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="group lg:w-[500px] w-full max-w-md rounded-2xl overflow-hidden border border-zinc-800">
              <img
                className="w-full h-full group-hover:scale-110 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white/30 mt-5 lg:mt-0 text-4xl lg:text-6xl tracking-tighter">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl sm:text-2xl lg:text-3xl">{project.title}</p>
              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-zinc-800 text-white px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded text-sm font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded text-sm font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
