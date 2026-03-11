import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaDocker, FaGitAlt, FaHtml5, FaCss3, FaReact, FaAws, FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiFastapi, SiDjango, SiSqlalchemy, SiSwagger, SiPostman,
  SiGithubactions, SiGunicorn, SiNginx,
  SiJsonwebtokens, SiMysql, SiTailwindcss,
  SiAkamai, SiMongodb, SiPydantic, SiAuth0,
} from "react-icons/si";
import { BsJavascript } from "react-icons/bs";



export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        { id: 1, name: "Python", icon: <FaPython />, color: "#3776AB" },
        { id: 2, name: "Django", icon: <SiDjango />, color: "#092E20" },
        { id: 3, name: "DRF", icon: <SiDjango />, color: "#A62C2C" },
        { id: 4, name: "FastAPI", icon: <SiFastapi />, color: "#05998B" },
        { id: 5, name: "SQLAlchemy", icon: <SiSqlalchemy />, color: "#f86c07" },
        { id: 6, name: "Pydantic", icon: <SiPydantic />, color: "#1E90FF" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { id: 7, name: "HTML", icon: <FaHtml5 />, color: "#FFA500" },
        { id: 8, name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { id: 9, name: "JavaScript", icon: <BsJavascript />, color: "#F7DF1E" },
        { id: 10, name: "React", icon: <FaReact />, color: "#61DAFB" },
        { id: 11, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#61DAFB" },
        { id: 12, name: "Bootstrap", icon: <FaBootstrap />, color: "#61DAFB" },

      ]
    },
    {
      title: "Database",
      skills: [
        { id: 13, name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#4169E1" },
        { id: 14, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { id: 15, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ]
    },
    {
      title: "Deployment",
      skills: [
        { id: 16, name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { id: 17, name: "Nginx", icon: <SiNginx />, color: "#009639" },
        { id: 18, name: "Gunicorn", icon: <SiGunicorn />, color: "#499848" },
        { id: 19, name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
        { id: 20, name: "Linode", icon: <SiAkamai />, color: "#2088FF" },
        { id: 21, name: "AWS", icon: <FaAws />, color: "#FF9900" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { id: 22, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { id: 23, name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { id: 24, name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
      ]
    }
  ];

  const [experiences] = useState([
    {
      id: 1,
      company: "Google",
      role: "Lead Software Engineer",
      period: "Nov 2019 - Present",
      description:
        "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience.",
      logo: "/assets/google.svg",
    },
    {
      id: 2,
      company: "Youtube",
      role: "Software Engineer",
      period: "Jan 2017 - Oct 2019",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: "/assets/youtube.svg",
    },
  ]);


  return (
    <div className="mt-3 lg:mt-16 mx-auto scroll-mt-20" id="skills">
      <div className="px-5 lg:px-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl mb-3">
            <span className="font-extrabold">Tech</span> Stack
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg">
            Technologies I use to build scalable web applications
          </p>
        </motion.div>

        {/* Vertical Groups Container */}
        <div className="flex flex-col gap-2">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={gIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Added border, padding, and rounded corners to each section
              className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-white shadow-sm"
            >
              {/* Compact Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  {group.title}
                </h3>
                <div className="h-[1px] flex-1 bg-gray-200"></div>
              </div>

              {/* Tight Grid Layout */}
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      boxShadow: `0px 8px 20px ${skill.color}33`, // Adds a subtle glow using skill color (33 is 20% opacity)
                      borderColor: skill.color, // Border changes to skill color
                    }}
                    className="bg-white border hover:bg-black border-black border-gray-300 rounded-lg p-3 h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 flex flex-col items-center justify-center gap-2 shadow-sm  transition-all cursor-pointer"
                  >
                    <motion.div
                      className="text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300"
                      style={{ color: skill.color }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.p
                      // Animate text color based on hover state
                      animate={{ color: activeSkill === skill.name ? skill.color : "#374151" }}
                      className="text-[9px] lg:text-[10px] font-bold uppercase text-center"
                    >
                      {skill.name}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 scroll-mt-20" id="experience">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" width="28" height="28" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
