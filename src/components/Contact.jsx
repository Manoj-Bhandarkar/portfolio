import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const socialLinks = [
    { Icon: BsGithub, href: "https://github.com/Manoj-Bhandarkar" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/manoj-bhandarkar/" },
    { Icon: BiLogoGmail, href: "mailto:developer.manojbhandarkar@gmail.com" },
    { Icon: IoLogoTwitter, href: "https://twitter.com" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='py-16 lg:py-24 px-4 sm:px-6 lg:px-28 lg:my-16'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[40%] bg-white p-6 rounded-lg shadow"
        >
          <form className='w-full space-y-3 lg:space-y-5 ' onSubmit={handleSubmit}>
            <input className='border-2 px-4 py-3 border-zinc-300 focus:border-black focus:outline-none rounded placeholder:text-[#71717A] sm:text-base w-full' type="text" placeholder='Your name' required />
            <input className='border-2 px-4 py-3 border-zinc-300 focus:border-black focus:outline-none rounded placeholder:text-[#71717A] sm:text-base w-full' type="email" placeholder='Email' required />
            <input className='border-2 px-4 py-3 border-zinc-300 focus:border-black focus:outline-none rounded placeholder:text-[#71717A] sm:text-base w-full' type="text" placeholder='Your website (If exists)' />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-zinc-300 focus:border-black focus:outline-none placeholder:text-[#71717A]  rounded text-sm w-full' placeholder='How can I help?*'></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-black justify-center w-full lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>
              <motion.div
                className="flex items-center gap-x-2 lg:gap-x-5 "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="bg-white p-2 sm:p-3 rounded border-2 border-black text-black"
                    whileHover={{ scale: 1.15, y: -3, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>Work</span> Together</h2>

          </div>
          <p className="text-green-600 font-medium mt-3">
            🟢 Open to backend / full-stack opportunities
          </p>
          <p className="text-zinc-500 text-sm mt-2">
            📍 Maharashtra, India
          </p>
          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:developer.manojbhandarkar@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              developer.manojbhandarkar@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:+918788796066"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +91 8788796066
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
