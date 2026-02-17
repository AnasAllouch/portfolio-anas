"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
    {
        role: "Freelancer",
        company: "Fiverr",
        period: "2021 – Present",
        description: "Delivering production-ready applications and e-commerce systems for international clients. Strengthening technical and communication skills.",
    },
    {
        role: "Web Development Intern",
        company: "CHU Ibn Sina (Rabat)",
        period: " Internship",
        description: "System architecture & development support for the university hospital center.",
    },
    {
        role: "Field Investigator",
        company: "Haut-Commissariat au Plan",
        period: "Mission",
        description: "Data collection and analysis for national statistics.",
    },
];

const education = [
    {
        degree: "Master in AI & Cybersecurity",
        school: "Université Ibn Tofail",
        period: "Current",
    },
    {
        degree: "Bachelor in Web & Mobile Development",
        school: "ISMAGI – Rabat",
        period: "Graduated",
    },
    {
        degree: "Diploma in IT Development",
        school: "ISTA Hay Nahda – Rabat",
        period: "Graduated",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-white relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-google-dark mb-16 text-center">
                    Experience & Education
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-8 h-8 text-google-blue" />
                            <h3 className="text-2xl font-bold text-google-dark">Professional Experience</h3>
                        </div>

                        <div className="border-l-2 border-slate-200 pl-8 space-y-12">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-google-blue border-4 border-white" />
                                    <h4 className="text-xl font-bold text-google-dark">{job.role}</h4>
                                    <p className="text-google-blue font-medium mb-2">{job.company} • {job.period}</p>
                                    <p className="text-slate-600 leading-relaxed">
                                        {job.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="w-8 h-8 text-google-green" />
                            <h3 className="text-2xl font-bold text-google-dark">Education</h3>
                        </div>

                        <div className="border-l-2 border-slate-200 pl-8 space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-google-green border-4 border-white" />
                                    <h4 className="text-xl font-bold text-google-dark">{edu.degree}</h4>
                                    <p className="text-google-green font-medium mb-2">{edu.school} • {edu.period}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
