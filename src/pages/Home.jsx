import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socialLinks = [
    { Icon: BsGithub, href: "https://github.com/Manoj-Bhandarkar", label: "GitHub profile" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/manoj-bhandarkar-dev/", label: "LinkedIn profile" },
    { Icon: BiLogoGmail, href: "mailto:developer.manojbhandarkar@gmail.com", label: "Send email" },
    { Icon: IoLogoTwitter, href: "https://twitter.com", label: "Twitter profile" },
  ];

  return (
    <div className="min-h-[80vh] flex items-center mt-10 lg:mt-4" id="home">
      <div className="flex justify-between py-10 sm:py-10 items-center min-h-[420px] px-5 lg:px-28 lg:flex-row flex-col-reverse w-full gap-8 lg:gap-12">
        <motion.div
          className="lg:w-[55%] flex flex-col justify-center min-h-[300px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl sm:text-3xl lg:text-5xl flex flex-col gap-2 lg:gap-5 leading-tight"
            initial="false"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Hello, I'm {" "}
              {/* <span className="font-extrabold">Manoj</span>{" "} */}
              <span
                className="text-white font-extrabold text-3xl font-bold md:text-4xl lg:text-5xl whitespace-nowrap block sm:inline"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Manoj Bhandarkar
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <TypeAnimation
                sequence={[
                  'Python Developer',
                  1500,
                  'FastAPI Developer',
                  1500,
                  'Django Developer',
                  1500,
                  'Fullstack Developer',
                  1500,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <div className="flex flex-wrap gap-3 mt-6 text-sm text-gray-600">
              {["Python", "FastAPI", "Django", "AWS", "PostgreSQL", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-300 rounded-full bg-gray-50 hover:bg-black hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-zinc-400 text-sm lg:text-base mt-5 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >

            I build scalable backend systems and modern web applications using
            <strong> Python, FastAPI,  Django, AWS, PostgreSQL and Docker </strong>.
            Focused on performance, clean architecture, and solving real-world problems.  </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href} // Dynamic link here
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}   // Opens in a new tab
                rel="noreferrer"   // Security best practice
                aria-label={social.label}
                className="bg-white p-2 sm:p-2.5 lg:p-3 rounded border-2 border-zinc-200 text-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon className="w-6 h-6 lg:w-5 lg:h-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}

          </motion.div>

        </motion.div>

        <motion.div
          className="lg:w-[40%] w-[85%] sm:w-[70%] max-w-[420px]"
          initial={false}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >

          <img
            src="https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto/hero-vector_mrli7e.webp"
            width="800"
            height="600"
            class="h-full w-full object-cover"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>

  );
}
