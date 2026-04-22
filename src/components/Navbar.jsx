import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "skills", "projects", "experience", "contact"];
  const navLinks = ["about", "skills", "projects", "contact", "experience"];

  // ✅ Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // ✅ Optimized scroll shadow (no reflow issue)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHasShadow(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED: Active section using Intersection Observer (NO reflow)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Smooth scroll
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

  // Animations
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 transition-all duration-500 ease-in-out 
        ${hasShadow && "lg:top-4 lg:right-6 lg:left-auto lg:w-auto lg:rounded-full lg:bg-white/80 lg:backdrop-blur-md lg:shadow-lg lg:border lg:border-gray-200"} 
        top-0 left-0 w-full px-4 sm:px-4 lg:px-18 py-2`}
    >
      <div className={`container mx-auto flex items-center justify-end ${hasShadow ? "gap-4" : "lg:justify-between gap-4"}`}>

        {/* Logo */}
        {!hasShadow && (
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="h-7 cursor-pointer hidden lg:block"
            src="https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776784274/logo_nczbzv.webp"
            alt="Manoj Logo"
          />
        )}

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex items-center font-semibold ${hasShadow ? "gap-x-6 text-sm" : "gap-x-10"}`}>
          {navLinks.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`transition-colors ${active === section ? "text-blue-600" : "text-black hover:text-blue-500"
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        {!hasShadow && (
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776859020/Manoj_Bhandarkar_Resume_cetbvr.pdf"
              target="_blank"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black"></span>
              <span className="relative text-black flex items-center gap-x-2">
                Resume <TbDownload size={16} />
              </span>
            </motion.a>
          </div>
        )}

        {/* Mobile Toggle */}
        <motion.button
          className="lg:hidden text-2xl z-[60]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[85%] bg-white/70 backdrop-blur-2xl z-40 shadow-2xl flex flex-col p-12 border-l border-white/30"
            >
              <ul className="flex flex-col gap-y-6 mt-20 font-bold text-lg">
                {navLinks.map((section, i) => (
                  <motion.li key={section} custom={i} variants={linkVariants}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`${active === section ? "text-blue-600" : "text-black"
                        }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </motion.li>
                ))}

                <motion.li custom={navLinks.length} variants={linkVariants}>
                  <a
                    href="https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776784276/manoj-bhandarkar-resume_qsu9xj.pdf"
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