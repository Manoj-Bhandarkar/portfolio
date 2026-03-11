import React from 'react';
import { motion } from 'framer-motion';
import { TbExternalLink } from "react-icons/tb";

const certs = [
    {
        id: 1,
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        image: "/assets/PythonEs1.webp", // Replace with your actual path
        link: "https://www.credly.com/badges/349eabc9-fe8c-47ef-951f-481f133396b0/public_url"
    },
    {
        id: 2,
        title: "Python Essentials 2",
        issuer: "Cisco Networking Academy",
        image: "/assets/PythonEs2.webp", // Replace with your actual path
        link: "https://www.credly.com/badges/d0e58590-3198-4564-97f8-bce5bb8e4c8a/public_url"
    },
    {
        id: 3,
        title: "FastAPI",
        issuer: "Udemy",
        image: "/assets/FastAPI-Cert.webp", // Replace with your actual path
        link: "https://www.udemy.com/certificate/UC-7eabe03f-d89b-410b-830c-1c89017128aa/"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-10 px-5 lg:px-28 bg-white text-black">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Certifications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certs.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="group overflow-hidden border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                        // Slide up animation matching your projects
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-video overflow-hidden bg-gray-50 border-b border-gray-100">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a
                                    href={cert.link}            // This uses the link from your certs array
                                    target="_blank"            // Opens in a new tab
                                    rel="noopener noreferrer"  // Security best practice
                                    className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                                    
                                >
                                    View Certificate <TbExternalLink size={16} />
                                </a>

                            </div>
                        </div>

                        {/* Text Content - PADDING ADDED HERE INSTEAD */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">
                                {cert.issuer}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}