import React from 'react';
import { motion } from 'framer-motion';
import { TbExternalLink, TbCertificate } from "react-icons/tb";

const certs = [
    {
        id: 1,
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        image: "https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_700/v1776784278/PythonEs1_movcce.webp", // Replace with your actual path
        viewLink: "https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776784284/PythonEss1_dvwvm5.pdf",
        verifylink: "https://www.credly.com/badges/349eabc9-fe8c-47ef-951f-481f133396b0/public_url"
    },
    {
        id: 2,
        title: "Python Essentials 2",
        issuer: "Cisco Networking Academy",
        image: "https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_700/v1776784279/PythonEs2_lgdgma.webp", // Replace with your actual path
        viewLink: "https://res.cloudinary.com/dpbjeqf4c/image/upload/v1776784285/PythonEss2_wa7hc5.pdf",
        verifylink: "https://www.credly.com/badges/d0e58590-3198-4564-97f8-bce5bb8e4c8a/public_url"
    },
    {
        id: 3,
        title: "FastAPI",
        issuer: "Udemy",
        image: "https://res.cloudinary.com/dpbjeqf4c/image/upload/f_auto,q_auto,w_700/v1776784277/FastAPI-Cert_ieopl9.webp", // Replace with your actual path
        viewLink: "https://www.udemy.com/certificate/UC-7eabe03f-d89b-410b-830c-1c89017128aa/"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-16 mt-12 px-4 sm:px-6 lg:py-24 lg:px-28 bg-white text-black text-3xl lg:text-5xl mb-3">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl lg:text-4xl font-bold">
                    Certifications
                </h2>
                <p className="text-gray-500 text-sm lg:text-base mt-3">
                    Professional certifications validating my knowledge in
                    Python programming, backend development and API design.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {certs.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="group overflow-hidden border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                        // Slide up animation matching your projects
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-video overflow-hidden bg-gray-50 border-b border-gray-100">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                                <a
                                    href={cert.viewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full max-w-[180px] bg-white text-black py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                                >
                                    View Certificate <TbCertificate size={16} />
                                </a>
                                {cert.verifylink && (
                                    <a
                                        href={cert.verifylink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full max-w-[180px] bg-blue-600 text-white py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                                    >
                                        Verify Credly <TbExternalLink size={16} />
                                    </a>
                                )};
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