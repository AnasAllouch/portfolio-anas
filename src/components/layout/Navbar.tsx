"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    // { name: "Research & AI", href: "#research" },
    // { name: "Cybersecurity", href: "#cybersecurity" },
    { name: "Skills", href: "#skills" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-google-blue rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                        A
                    </div>
                    <span className="text-xl font-bold font-sans text-slate-800 tracking-tight">
                        Anas<span className="text-google-blue">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-google-blue transition-colors group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-google-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </Link>
                    ))}

                    <div className="pl-4 ml-2 border-l border-slate-200">
                        <Link
                            href="#contact"
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-google-blue transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-google-blue/30"
                        >
                            Contact <Send size={14} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 font-medium hover:text-google-blue hover:pl-2 transition-all block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 rounded-lg bg-google-blue text-white font-bold shadow-md active:scale-95 transition-transform"
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
