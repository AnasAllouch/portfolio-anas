"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Cloud, Globe, Lock } from "lucide-react";

export function About() {
    const features = [
        { icon: <Lock className="w-6 h-6 text-google-green" />, text: "Secure System Architecture" },
        { icon: <Cpu className="w-6 h-6 text-google-blue" />, text: "Artificial Intelligence Models" },
        { icon: <Cloud className="w-6 h-6 text-purple-500" />, text: "Cloud Infrastructure (Azure)" },
        { icon: <Globe className="w-6 h-6 text-cyan-500" />, text: "Full-stack Development" },
    ];

    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-google-dark mb-8 text-center">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-slate-600 font-roboto leading-relaxed">
                            <p>
                                I am a <span className="font-bold text-google-dark">23-year-old AI & Cybersecurity Engineer</span> based in Rabat, Morocco.
                                Currently pursuing my Master’s degree at Université Ibn Tofail.
                            </p>
                            <p>
                                My journey in technology is driven by a deep curiosity for innovation, security, and intelligent systems that reshape how humans interact with digital environments.
                            </p>
                            <p>
                                I believe technology should be: <br />
                                <span className="font-semibold text-google-blue">Intelligent</span>,{" "}
                                <span className="font-semibold text-google-green">Secure</span>,{" "}
                                <span className="font-semibold text-purple-600">Scalable</span>, and{" "}
                                <span className="font-semibold text-slate-800">Ethical</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <span className="font-medium text-slate-700">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
