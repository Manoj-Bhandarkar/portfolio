import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

 const socialLinks = [
    { Icon: BsGithub, href: "https://github.com/Manoj-Bhandarkar", label: "GitHub profile" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/manoj-bhandarkar-dev/", label: "LinkedIn profile" },
    { Icon: BiLogoGmail, href: "mailto:developer.manojbhandarkar@gmail.com", label: "Send email" },
    { Icon: IoLogoTwitter, href: "https://twitter.com", label: "Twitter profile" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      e.target,
      import.meta.env.VITE_EMAIL_KEY
    )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          setIsSent(true); // This hides the button and shows the success message
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message");
          setLoading(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      // scroll-mt-28 fixes the navbar overlap issue
      className='py-16 lg:py-24 px-4 sm:px-6 lg:px-28 lg:py-16 '
      id='contact'
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-start mt-8 lg:mt-16 flex-col lg:flex-row gap-10'>
        {/* FORM SECTION */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] bg-white p-6 rounded-lg shadow-sm border border-zinc-100"
        >
          <form className='w-full space-y-4' onSubmit={handleSubmit}>
            <input className='border-2 px-4 py-3 border-zinc-200 focus:border-black focus:outline-none rounded w-full transition-colors' name="name" type="text" placeholder='Your name' required />
            <input className='border-2 px-4 py-3 border-zinc-200 focus:border-black focus:outline-none rounded w-full transition-colors' name="email" type="email" placeholder='Your Email' required />
            <input className='border-2 px-4 py-3 border-zinc-200 focus:border-black focus:outline-none rounded w-full transition-colors' name="subject" type="text" placeholder='Subject' />
            <textarea className='resize-none border-2 px-4 py-3 h-32 border-zinc-200 focus:border-black focus:outline-none rounded w-full transition-colors' name="message" placeholder='Your Message' required></textarea>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-2'>
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.button
                    key="submit-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    type='submit'
                    disabled={loading}
                    className='bg-black text-white px-8 py-3 rounded font-medium w-full sm:w-auto disabled:bg-zinc-400 hover:shadow-lg transition-all'
                  >
                    {loading ? "Sending..." : "Get In Touch"}
                  </motion.button>
                ) : (
                  <motion.div
                    key="success-msg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-600 font-bold flex items-center gap-2 py-2"
                  >
                    ✅ Message sent! I'll be in touch.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SOCIAL LINKS - Always visible */}
              <div className="flex items-center gap-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="bg-white p-2 rounded border border-zinc-200 text-black hover:border-black transition-colors"
                    whileHover={{ y: -3, backgroundColor: "#000", color: "#fff" }}
                  >
                    <social.Icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </form>
        </motion.div>

        {/* INFO SECTION */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>Work</span> Together</h2>
          </div>
          <p className="text-green-600 font-medium mt-4 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to Python Backend Developer / Full-Stack opportunities
          </p>
          <p className="text-zinc-400 text-sm mt-2">
            📍 Chhatrapati Sambhaji Nagar, Maharashtra, India
          </p>
          <p className='text-zinc-400 text-sm lg:text-base mt-6 leading-relaxed'>
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className='font-semibold text-sm lg:text-lg flex flex-col mt-8 gap-4'>
            <motion.a whileHover={{ x: 5 }} className='flex items-center gap-3 group' href="mailto:developer.manojbhandarkar@gmail.com">
              <span className='border border-zinc-200 group-hover:border-black rounded-full p-2 transition-colors'>
                <IoMdMail className="w-5 h-5" />
              </span>
              developer.manojbhandarkar@gmail.com
            </motion.a>

            <motion.a whileHover={{ x: 5 }} className='flex items-center gap-3 group' href="tel:+918788796066">
              <span className='border border-zinc-200 group-hover:border-black rounded-full p-2 transition-colors'>
                <FaPhone className="w-4 h-4" />
              </span>
              +91 8788796066
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
