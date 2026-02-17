"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-google-dark rounded-3xl p-8 md:p-16 relative overflow-hidden text-white"
                >
                    {/* Background glow effects */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-google-blue/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-google-green/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">

                        {/* Contact Info */}
                        <div className="text-left space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">
                                Let's Work Together
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                I am ready to learn, build, and push boundaries. Contact me to discuss how we can work together.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <Mail className="w-6 h-6 text-google-blue" />
                                    </div>
                                    <span className="text-slate-200">anasallouch77@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <Phone className="w-6 h-6 text-google-green" />
                                    </div>
                                    <span className="text-slate-200">+212 641316318</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <span className="text-slate-200">Rabat, Morocco</span>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8">
                                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-google-blue text-white placeholder-slate-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-google-blue text-white placeholder-slate-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-google-blue text-white placeholder-slate-400 resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === "success"
                                        ? "bg-green-500 text-white cursor-default"
                                        : "bg-google-blue hover:bg-blue-600 text-white"
                                        }`}
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="animate-spin" />
                                    ) : status === "success" ? (
                                        "Message Sent!"
                                    ) : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center mt-2">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
