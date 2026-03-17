import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Leaping Frog Solutions",
            role: "Technical Consultant",
            period: "Dec 2023 - Jun 2024",
            description:
                "At Leaping Frog Solutions, I worked as a Technical Consultant supporting ERP system implementations and customizations. I collaborated with functional teams to understand business requirements and helped translate them into technical solutions. My responsibilities included working with ERP workflows, assisting in data migration tasks, and supporting reporting and system integration requirements.",
            logo: "/assets/leaping.webp",
        },
       
    ];

    return (

        <div className="mt-2 lg:mt-4 mx-auto my-auto lg:py-0" id="experience">

            {/* Experience Section */}
            <div className="bg-black w-full my-8 py-16 lg:py-32 scroll-mt-20" id="experience">
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
                            className="bg-zinc-900 p-5 border border-zinc-700 rounded-md hover:bg-zinc-800"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
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
                                    <img className="w-10 h-10 object-contain" width="28" height="28" src={exp.logo} alt="" />
                                    <h2 className="font-semibold text-white text-lg lg:text-xl">
                                        {exp.role}
                                    </h2>
                                    <p className="text-zinc-400 text-sm">
                                        {exp.company}
                                    </p>
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