"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 pt-32 md:pt-20 pb-20"
        >
            {/* Background Floating Elements (Anti-Gravity Effect) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-32 h-32 bg-google-blue/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-48 h-48 bg-google-green/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left pt-10 md:pt-0"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-google-blue/10 text-google-blue font-medium text-sm mb-6 border border-google-blue/20">
                            AI & Cybersecurity Engineer
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-google-dark leading-tight mb-6">
                            Engineering Intelligence. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-purple-600">
                                Securing the Future.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 font-roboto leading-relaxed mx-auto md:mx-0">
                            Building scalable, secure, and intelligent digital systems that reshape how humans interact with technology.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-3 bg-google-blue text-white rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-google-blue/20 hover:bg-blue-700 transition-colors"
                            >
                                View Projects <ArrowRight size={18} />
                            </motion.a>
                            <motion.a
                                href="/cv.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                            >
                                Download CV <Download size={18} />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                            >
                                Contact Me <Mail size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative max-w-md md:max-w-lg w-full flex justify-center"
                    >
                        {/* Abstract blobs behind image */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-google-blue/20 to-purple-500/20 rounded-full blur-3xl -z-10 transform translate-x-10 -translate-y-10" />

                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-h-[600px]">
                            <Image
                                src="/profile.png"
                                alt="Anas Allouch"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-bold text-google-dark text-sm whitespace-nowrap">Open for Work</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
