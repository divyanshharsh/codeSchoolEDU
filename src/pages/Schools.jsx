import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Schools = () => {
    return (
        <div className="font-sans min-h-screen bg-slate-50">
            {/* Tech Hero Section */}
            <section className="relative bg-slate-900 pt-32 pb-24 px-6 overflow-hidden text-white">
                {/* Abstract Tech Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/30 to-transparent"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 font-mono text-xs rounded-full mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                INSTITUTIONAL_PARTNERSHIP_V1
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                                Upgrade Your School to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-magenta">Future OSC</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Deploy world-class coding labs, integrate AI curriculum, and empower your faculty with next-gen technical skills.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button className="px-8 py-4 text-lg bg-gradient-to-r from-brand-blue to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 border-none group">
                                    <span className="mr-2">📅</span> Schedule a Live Demo
                                </Button>
                                <Button variant="outline" className="px-8 py-4 text-lg border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Partner Login
                                </Button>
                            </div>
                            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Free Consultation</span>
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Instant Access</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/20 border border-slate-700 bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                                <img
                                    src="/school_lab.png"
                                    alt="High-tech School Lab"
                                    className="w-full h-auto object-cover opacity-80 group-hover:scale-105 transition duration-700"
                                />
                                {/* Overlay UI */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="flex items-center gap-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <div className="text-3xl font-bold text-cyan-400">500+</div>
                                        <div className="text-xs text-slate-400 font-mono uppercase border-l border-white/20 pl-4">
                                            Active<br />Nodes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Tech Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-20 h-20 bg-brand-magenta/20 rounded-full blur-xl border border-brand-magenta/30"
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Tiers / Offerings (Technology Stack Selection) */}
            <section className="py-20 px-6 bg-slate-900 text-white relative border-t border-slate-800">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">System Configurations</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Partnership Protocols</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Select the offering tier that aligns with your institutional objectives.</p>
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-12 border-b border-slate-700 bg-slate-800/80">
                            <div className="col-span-6 md:col-span-4 p-6 flex items-center">
                                <span className="font-mono text-slate-400 uppercase tracking-wider text-sm">Offerings / Modules</span>
                            </div>
                            <div className="col-span-3 md:col-span-4 p-6 text-center border-l border-slate-700">
                                <h3 className="text-xl font-bold text-white">CS Basic</h3>
                                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Core Foundations</div>
                            </div>
                            <div className="col-span-3 md:col-span-4 p-6 text-center border-l border-slate-700 bg-brand-magenta/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-magenta/20 to-transparent"></div>
                                <h3 className="text-xl font-bold text-brand-magenta">CS Premium</h3>
                                <div className="text-xs text-brand-magenta/80 mt-1 uppercase tracking-wider">Full Stack Suite</div>
                            </div>
                        </div>

                        {/* Table Rows */}
                        {[
                            { feature: "Curriculum Books", basic: true, premium: true },
                            { feature: "Teachers Training", basic: true, premium: true },
                            { feature: "Online Coding Platform", basic: true, premium: true },
                            { feature: "Student Skill Certification", basic: true, premium: true },
                            { feature: "Implementation Support", basic: true, premium: true },
                            { feature: "Assessment Report", basic: true, premium: true },
                            { feature: "Hour of Code / Codeon", basic: false, premium: true },
                            { feature: "Code Challenges", basic: false, premium: true },
                            { feature: "Students Workshop", basic: false, premium: true },
                            { feature: "Annual Project", basic: false, premium: true },
                            { feature: "Cyber Olympiad Assistance", basic: false, premium: true },
                            { feature: "Entrepreneurship", basic: false, premium: true },
                            { feature: "Teacher's Certification", basic: false, premium: true },
                        ].map((row, idx) => (
                            <div key={idx} className={`grid grid-cols-12 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors ${idx % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                                <div className="col-span-6 md:col-span-4 p-4 md:p-6 flex items-center text-slate-300 text-sm md:text-base font-medium">
                                    {row.feature}
                                </div>
                                <div className="col-span-3 md:col-span-4 p-4 md:p-6 flex items-center justify-center border-l border-slate-700/50">
                                    {row.basic ?
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500" /> :
                                        <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                                    }
                                </div>
                                <div className="col-span-3 md:col-span-4 p-4 md:p-6 flex items-center justify-center border-l border-slate-700/50 bg-brand-magenta/5">
                                    {row.premium ?
                                        <div className="bg-brand-magenta/20 p-1.5 rounded-full">
                                            <CheckCircle2 className="w-6 h-6 text-brand-magenta" />
                                        </div> :
                                        <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                                    }
                                </div>
                            </div>
                        ))}

                        {/* CTA Row */}
                        <div className="grid grid-cols-12 p-8 bg-slate-800/80">
                            <div className="col-span-6 md:col-span-4 hidden md:block"></div>
                            <div className="col-span-6 md:col-span-4 px-4">
                                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700">
                                    Select Basic
                                </Button>
                            </div>
                            <div className="col-span-6 md:col-span-4 px-4">
                                <Button className="w-full bg-brand-magenta hover:bg-pink-600 border-none shadow-lg shadow-brand-magenta/20">
                                    Select Premium
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Features Grid */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold tracking-widest text-sm uppercase">System Modules</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Infrastructure Upgrade</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: BookOpen, title: "Curriculum Core", desc: "Grade 1-12 full stack learning path.", color: "text-blue-500", bg: "bg-blue-50" },
                            { icon: Users, title: "Faculty Training", desc: "Real-time skill updates for teachers.", color: "text-purple-500", bg: "bg-purple-50" },
                            { icon: Cpu, title: "Lab Hardware", desc: "IoT kits, Robotics & AI workstations.", color: "text-cyan-500", bg: "bg-cyan-50" },
                            { icon: ShieldCheck, title: "Global Certs", desc: "Industry recognized validation.", color: "text-green-500", bg: "bg-green-50" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all group"
                            >
                                <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2 font-mono">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Holographic Dashboard Section */}
            <section className="py-20 px-6 bg-[#0B1120] text-white relative overflow-hidden">
                {/* Glowing Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-magenta/20 rounded-full blur-[100px] animate-pulse"></div>

                <div className="container mx-auto relative z-10">
                    <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative group">
                        {/* Scanning Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-full group-hover:translate-y-[500%] transition-transform duration-[3s] ease-in-out"></div>

                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Left Panel: System Modules */}
                            <div className="lg:w-1/2 space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-mono text-green-400 tracking-widest uppercase">System Online</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight">
                                        Command Center <span className="text-slate-600">v2.0</span>
                                    </h2>
                                    <p className="text-slate-400 mt-4 leading-relaxed">
                                        Centralized control for your school's coding infrastructure. Monitor progress, manage curriculum, and deploy assessments.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "LMS Portal", status: "Active" },
                                        { label: "AI Modules", status: "Deployed" },
                                        { label: "Hardware Kits", status: "Ready" },
                                        { label: "Hackathons", status: "Scheduled" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-lg flex justify-between items-center hover:bg-white/10 transition">
                                            <span className="font-mono text-sm text-slate-300">{item.label}</span>
                                            <span className="text-xs font-bold text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">{item.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Panel: Live Stats */}
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                                {[
                                    { val: "10,240", label: "Active Nodes", sub: "Students Online", color: "text-cyan-400", bar: "bg-cyan-400" },
                                    { val: "99.99%", label: "Uptime", sub: "Server Stability", color: "text-green-400", bar: "bg-green-400" },
                                    { val: "512", label: "Partner Hubs", sub: "Schools Connected", color: "text-brand-magenta", bar: "bg-brand-magenta" },
                                    { val: "< 24ms", label: "Latency", sub: "Global Response", color: "text-brand-yellow", bar: "bg-brand-yellow" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col justify-between bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group/card relative overflow-hidden">
                                        <div className={`absolute top-0 right-0 p-3 opacity-20 group-hover/card:opacity-100 transition duration-500`}>
                                            <Cpu className={`w-8 h-8 ${stat.color}`} />
                                        </div>
                                        <div>
                                            <div className={`text-3xl md:text-4xl font-bold font-mono mb-1 ${stat.color}`}>{stat.val}</div>
                                            <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                                            <div className="text-xs text-slate-500 font-mono">{stat.sub}</div>
                                        </div>
                                        <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                                className={`h-full ${stat.bar}`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 p-1 bg-gradient-to-br from-slate-200 to-slate-100">
                        <div className="bg-white rounded-xl p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">Initialize Partnership</h2>
                                <p className="text-slate-500">Submit your school's configuration details below.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">School Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="Enter school name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="City / State" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Node</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="Principal Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Designation</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="Role" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Communication Channel</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="Phone Number" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Electronic Mail</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="official@school.edu" />
                                    </div>
                                </div>

                                <Button className="w-full py-4 text-lg font-bold shadow-lg shadow-blue-500/30 hover:scale-[1.01] transform transition">
                                    Transmit Request
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schools;
