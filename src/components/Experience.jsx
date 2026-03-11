import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
    const [experiences] = useState([
        {
            id: 1,
            company: "Leaping Frog Solutions",
            role: "Technical Consultant",
            period: "Dec 2023 - Jun 2024",
            description:
                "At Leaping Frog Solutions, I served as a Technical Consultant, acting as the primary bridge between functional teams and stakeholders to translate complex business requirements into scalable system deployments. Working on projects that involved large-scale data migrations and custom web service architecture, I leveraged my expertise to ensure seamless cross-platform data exchange and robust technical functionality.",
            logo: "/assets/leaping.webp",
        },
        {
            id: 2,
            company: "Shalom ERP",
            role: "Software Engineer",
            period: "May 2020 - Nov 2023",
            description:
           "At ShalomERP, I served as an ERP Consultant, focusing on the end-to-end execution of full-cycle Business Central/NAV implementations for diverse organizational scales. Working on projects that involved complex AL language development and core module configuration, I leveraged my expertise to provide critical post-go-live support and performance optimizations to ensure seamless system functionality",
            logo: "/assets/shalom.webp",
        },
    ]);

    return (

        <div className="mt-3 lg:mt-16 mx-auto scroll-mt-20" id="skills">

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
                                    <img className="w-7 h-7" width="28" height="28" src={exp.logo} alt="" />
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
    )
}