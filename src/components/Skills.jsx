import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaDocker, FaGitAlt, FaHtml5, FaCss3, FaReact, FaAws, FaBootstrap, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiFastapi, SiDjango, SiSqlalchemy, SiSwagger, SiPostman,
  SiGithubactions, SiGunicorn, SiNginx,
  SiJsonwebtokens, SiMysql, SiTailwindcss,
  SiAkamai, SiMongodb, SiPydantic, SiAuth0, SiCelery, SiRedis,
  SiNextdotjs
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
        { id: 5, name: "SQLAlchemy", icon: <SiSqlalchemy />, color: "#D71F00" },
        { id: 6, name: "Pydantic", icon: <SiPydantic />, color: "#1E90FF" },
        { id: 7, name: "Celery", icon: <SiCelery />, color: "#D00000" },
        { id: 8, name: "Redis", icon: <SiRedis />, color: "#DC382D" },
        { id: 9, name: "Auth0", icon: <SiAuth0 />, color: "#EB5424" },
      ]
    },
    {
      title: "Deployment & DevOps",
      skills: [
        { id: 10, name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { id: 11, name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { id: 12, name: "Nginx", icon: <SiNginx />, color: "#009639" },
        { id: 13, name: "Gunicorn", icon: <SiGunicorn />, color: "#499848" },
        { id: 14, name: "CI/CD GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
        { id: 15, name: "Linode", icon: <SiAkamai />, color: "#00A95C" },
      ]
    },
    {
      title: "Database",
      skills: [
        { id: 16, name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#4169E1" },
        { id: 17, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { id: 18, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { id: 19, name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
        { id: 20, name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { id: 21, name: "JavaScript", icon: <BsJavascript />, color: "#F7DF1E" },
        { id: 22, name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
        { id: 23, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { id: 24, name: "React", icon: <FaReact />, color: "#61DAFB" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { id: 25, name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { id: 26, name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { id: 27, name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
      ]
    }
  ];
  return (
    <div className="py-12 lg:py-20 mx-auto " id="skills">
      <div className="px-4 sm:px-6 lg:px-28">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 }
            }
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl mb-3">
            <span className="font-extrabold">Tech</span> Stack
          </h2>
          <p className="text-gray-600 text-sm lg:text-lg">
            Technologies I use to build scalable web applications
          </p>
        </motion.div>

        {/* Vertical Groups Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="flex flex-col gap-6"
        >
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={gIndex}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              // Added border, padding, and rounded corners to each section
              className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-white shadow-sm"
            >
              {/* Compact Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-600">
                  {group.title}
                </h3>
                <div className="h-[1px] flex-1 bg-gray-200"></div>
              </div>

              {/* Tight Grid Layout */}
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 }
                  }
                }}
                className="flex flex-wrap gap-3"
              >  {group.skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}

                  // 🔥 ENTRY ANIMATION (NEW)
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }
                  }}

                  // 🔥 HOVER ANIMATION (YOURS, slightly tuned)
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                    boxShadow: `0px 8px 20px ${skill.color}33`,
                    borderColor: skill.color,
                  }}

                  className="bg-white border hover:bg-black border-gray-200 rounded-lg 
               p-3 h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 
               flex flex-col items-center justify-center gap-2 
               shadow-sm transition-all cursor-pointer"
                >
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl"
                    style={{ color: skill.color }}
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <motion.p
                    className="text-[10px] lg:text-xs font-bold text-center"
                    initial={{ color: "#374151" }}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                      rotate: 1
                    }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div >
  );
}
