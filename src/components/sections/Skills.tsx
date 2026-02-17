"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit } from "lucide-react";

export function Skills() {
    const cybersecuritySkills = [
        "Vulnerability Analysis",
        "Cryptography",
        "Secure Authentication Systems",
        "Access Management",
        "Ethical Security Practices",
        "Penetration Testing"
    ];

    const aiSkills = [
        "Machine Learning Models",
        "Statistical Analysis",
        "Data Cleaning Pipelines",
        "Predictive Modeling",
        "Churn Prediction",
        "Market Segmentation (K-Means)"
    ];

    return (
        <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-google-dark mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Bridging the gap between intelligent algorithms and secure infrastructure.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Cybersecurity Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <ShieldCheck className="w-8 h-8 text-google-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-google-dark">Cybersecurity</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {cybersecuritySkills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-google-green" />
                                    <span className="text-slate-700 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <BrainCircuit className="w-8 h-8 text-google-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-google-dark">Artificial Intelligence</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {aiSkills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-google-blue" />
                                    <span className="text-slate-700 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
