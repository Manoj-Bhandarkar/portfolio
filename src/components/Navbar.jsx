import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 1. Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActive(id);
    setIsOpen(false);
  };


  // Animation Variants
  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    opened: { x: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1 },
    }),
  };

  const navLinks = ["about", "skills", "projects", "contact"];


  return (
     <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed px-4 sm:px-6 lg:px-24 top-0 left-0 w-full z-50 bg-white/40 backdrop-xl p-6 transition-all duration-300 ${
        hasShadow ? "shadow-lg border-b border-white/20" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/logo.webp"
          alt="Manoj Bhandakr Logo"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-x-8 font-semibold">
          {navLinks.map((section) => (
            <li key={section} className="relative group">
              <button
                onClick={() => scrollToSection(section)}
                className={`transition-colors ${
                  active === section ? "text-blue-600" : "text-black hover:text-blue-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                animate={active === section ? { width: "100%" } : { width: "0%" }}
                className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Desktop CTA / Resume */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href="/assets/manoj-bhandarkar-resume.pdf"
            download
            target="_blank"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black"></span>
            <span className="relative text-black group-hover:text-black transition-colors duration-200 flex items-center gap-x-2">
              Resume <TbDownload size={16} />
            </span>
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <motion.button
          className="lg:hidden text-3xl z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX className="text-black" /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[85%] bg-white/70 backdrop-blur-2xl z-40 shadow-2xl lg:hidden flex flex-col p-12 border-l border-white/30"
            >
              <ul className="flex flex-col gap-y-6 mt-20 font-bold text-l">
                {navLinks.map((section, i) => (
                  <motion.li
                    key={section}
                    custom={i}
                    variants={linkVariants}
                  >
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`${
                        active === section ? "text-blue-600" : "text-black"
                      } active:scale-95 transition-transform`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </motion.li>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.li custom={navLinks.length} variants={linkVariants}>
                  <a
                    href="/assets/manoj-bhandarkar-resume.pdf"
                    download
                    className="flex items-center gap-2 text-sm bg-black text-white px-6 py-3 rounded-xl w-fit"
                  >
                    Resume <TbDownload />
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

