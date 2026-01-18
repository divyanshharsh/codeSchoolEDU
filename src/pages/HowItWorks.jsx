import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Video, Code2, Users, FileCheck } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "01. System Calibration",
            subtitle: "Skill Assessment",
            desc: "We analyze your current coding parameters to recommend the perfect starting configuration."
        },
        {
            icon: Video,
            title: "02. Knowledge Download",
            subtitle: "Live & Recorded Classes",
            desc: "High-bandwidth learning through interactive live sessions and on-demand repository access."
        },
        {
            icon: Code2,
            title: "03. Build & Compile",
            subtitle: "Hands-on Projects",
            desc: "Execute your knowledge by building real-world applications. Commit code, debug, and deploy."
        },
        {
            icon: Users,
            title: "04. Debug & Refine",
            subtitle: "Mentorship",
            desc: "Get 1:1 patch updates from industry experts. Resolve exceptions and optimize your learning path."
        },
        {
            icon: FileCheck,
            title: "05. Deploy Career",
            subtitle: "Certification",
            desc: "Earn a verified industry certificate. Push your profile to production and land your dream job."
        }
    ];

    return (
        <div className="font-sans min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue via-brand-darkBlue to-brand-purple pt-32 pb-24 px-6 overflow-hidden text-center text-white">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-mono mb-6 animate-pulse">
                        // PROCESS_INITIATED
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Your Journey to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Becoming a Pro</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        A structured 5-step algorithm designed for mastery. From initialization to deployment.
                    </p>
                </motion.div>
            </section>

            <section className="py-20 px-6 overflow-hidden">
                <div className="container mx-auto max-w-5xl relative">
                    {/* Central History Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-blue via-brand-purple to-brand-magenta"></div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-16 md:pl-0">
                                    <div className={`relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-brand-blue/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        {/* Connector Arrow */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45 border-gray-100 ${index % 2 === 0 ? '-right-2 border-t border-r' : '-left-2 border-b border-l'}`}></div>

                                        <div className="text-sm font-bold text-brand-magenta tracking-widest uppercase mb-2">{step.subtitle}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-darkBlue mb-4">{step.title}</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Timeline Node (Absolute Centered) */}
                                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center`}>
                                    <div className="w-12 h-12 rounded-full bg-brand-darkBlue border-4 border-white shadow-lg flex items-center justify-center z-10 relative">
                                        <step.icon className="w-5 h-5 text-white" />
                                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-brand-magenta"></div>
                                    </div>
                                </div>

                                {/* Empty Spacer for Grid Balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-32 relative z-10">
                        <Link to="/programs">
                            <Button className="px-12 py-4 text-xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:scale-105 transform transition">
                                <span className="mr-2">⚡</span> Initialize Your Journey
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
