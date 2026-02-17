"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
    {
        title: "AI Sentiment Analysis Platform",
        description: "NLP preprocessing, TF-IDF, Logistic Regression & KNN with Flask Web Interface.",
        tags: ["NLP", "Python", "Flask", "Machine Learning"],
        color: "bg-blue-500",
    },
    {
        title: "HIMAYA-18",
        description: "Child Protection System with Ad detection risk model and privacy-first architecture.",
        tags: ["Security", "AI", "Privacy", "Encryption"],
        color: "bg-green-500",
    },
    {
        title: "Password Security Analyzer",
        description: "Statistical distribution analysis and password complexity evaluation with visualization.",
        tags: ["Cybersecurity", "React", "Data Viz"],
        color: "bg-purple-500",
    },
    {
        title: "Secure Web Applications",
        description: "Full-stack E-commerce systems with secure authentication and role-based access.",
        tags: ["Laravel", "React", "Auth", "Security"],
        color: "bg-slate-700",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-google-dark mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A selection of projects demonstrating my expertise in AI, Cybersecurity, and Secure Development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
                        >
                            {/* Decorative Gradient Background */}
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} to-transparent opacity-10 rounded-bl-full`}
                            />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-google-dark mb-3 group-hover:text-google-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href="#" className="flex items-center gap-1 text-google-blue font-medium hover:underline">
                                        <Code size={18} /> Code
                                    </a>
                                    <a href="#" className="flex items-center gap-1 text-slate-500 font-medium hover:text-google-dark transition-colors">
                                        <ExternalLink size={18} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
