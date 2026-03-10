import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socialLinks = [
    { Icon: BsGithub, href: "https://github.com/Manoj-Bhandarkar" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/manoj-bhandarkar/" },
    { Icon: BiLogoGmail, href: "mailto:developer.manojbhandarkar@gmail.com" },
    { Icon: IoLogoTwitter, href: "https://twitter.com" },
  ];

  return (
    <div className="min-h-[80vh] flex items-center mt-10 lg:mt-0" id="home">

      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse w-full gap-10">
        <motion.div
          className="lg:w-[50%] flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, I'm {" "}
              {/* <span className="font-extrabold">Manoj</span>{" "} */}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Manoj Bhandarkar
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <TypeAnimation
                sequence={[
                  'Backend Developer',
                  1000,
                  'FastAPI Developer',
                  1000,
                  'Fullstack Developer',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >

            <span className="font-extrabold">I build scalable APIs and modern web applications.</span><br></br>

            I’m passionate about backend development and building scalable web applications. I specialize in developing high-performance APIs using FastAPI and creating modern web applications with React. I enjoy solving real-world problems through clean, efficient code and continuously improving my skills in backend systems and full stack development.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href} // Dynamic link here
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}   // Opens in a new tab
                rel="noreferrer"   // Security best practice
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon className="w-6 h-6 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[40%] w-[70%] max-w-[450px]" // Reduced width and added a hard max-width
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img className="h-full w-full" src="/assets/manoj3.png" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
