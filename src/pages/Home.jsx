import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, BookOpen, Users, Award, Layout, Headphones, CalendarCheck, Monitor } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    console.log("Rendering Home Component");
    const stats = [
        { number: "10,000+", label: "Happy Students", icon: Users },
        { number: "500+", label: "Projects Created", icon: Code },
        { number: "100%", label: "Placement Support", icon: Award },
        { number: "50+", label: "Expert Mentors", icon: BookOpen },
    ];

    const trustedPartners = ["TechHigh School", "St. Mary's College", "Future Kids Academy", "Innovation Labs"];
    const [activeTab, setActiveFeature] = useState('interface');

    return (
        <div className="pt-16 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue via-brand-darkBlue to-brand-purple text-white py-20 lg:py-32 px-6 overflow-hidden">
                {/* Abstract Background Pattern */}
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

                <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 border border-white/20"
                        >
                            🚀 Launching Future Tech Leaders
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
                        >
                            Master Coding & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                                Shape the Future
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl mb-8 text-blue-100 max-w-lg mx-auto md:mx-0 leading-relaxed"
                        >
                            A structured academy for school and college students to build strong foundations in Programming, AI, and Innovation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Link to="/programs">
                                <Button variant="primary" className="shadow-lg shadow-pink-900/20">
                                    Explore Curriculum <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" className="border-white/30 hover:bg-white/10">
                                    Book Free Counseling
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 flex justify-center perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -10, scale: 0.9 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative rounded-2xl p-2 bg-gradient-to-tr from-white/20 to-transparent backdrop-blur-md border border-white/20 shadow-2xl"
                        >
                            <img
                                src="/hero_students.png"
                                alt="Students learning specifically in an academy environment"
                                className="rounded-xl shadow-inner w-full max-w-lg object-cover"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -bottom-6 -right-6 bg-white text-brand-blue p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow"
                            >
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Award className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Certified</div>
                                    <div className="text-xs text-gray-500">Industry Recognized</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trusted By / Institutional Credibility */}
            <section className="bg-white py-10 border-b border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by Reputed Institutions</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {trustedPartners.map((partner, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold font-serif text-gray-700">{partner}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section with Cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                whileHover={{ y: -5 }}
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-gray-100"
                            >
                                <div className="inline-flex p-4 bg-brand-blue/5 text-brand-blue rounded-2xl mb-4">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{stat.number}</h3>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academy Advantage Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">The CodeSchool Advantage</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We go beyond just syntax. We teach algorithmic thinking, system design, and real-world problem solving.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Structured Learning Path",
                                desc: "A carefully curated curriculum that evolves with the student's age and ability.",
                                icon: "📚"
                            },
                            {
                                title: "Dual-Mentorship Model",
                                desc: "Every student gets a dedicated academic mentor and an industry guide.",
                                icon: "👥"
                            },
                            {
                                title: "Capstone Projects",
                                desc: "Students graduate with a portfolio of deployed applications.",
                                icon: "🚀"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-brand-magenta/30 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl select-none group-hover:scale-110 transition transform origin-top-right grayscale group-hover:grayscale-0">
                                    {feature.icon}
                                </div>
                                <div className="text-4xl mb-6 bg-brand-light w-16 h-16 rounded-2xl flex items-center justify-center text-brand-magenta shadow-sm group-hover:bg-brand-magenta group-hover:text-white transition-colors duration-300">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-brand-darkBlue group-hover:text-brand-magenta transition">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Features Section (New Request) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                        {/* Tabs Header */}
                        <div className="flex flex-col md:flex-row border-b border-gray-100">
                            {[
                                { id: 'interface', label: 'User Friendly Interface', icon: Layout },
                                { id: 'support', label: '24/7 Support', icon: Headphones },
                                { id: 'accessibility', label: 'Accessibility', icon: CalendarCheck }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFeature(tab.id)}
                                    className={`flex-1 py-8 px-6 text-center transition-all duration-300 relative group ${activeTab === tab.id ? 'bg-white text-brand-blue' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <div className={`flex flex-col items-center gap-3 ${activeTab === tab.id ? 'scale-110' : 'scale-100'} transition-transform`}>
                                        <div className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-brand-blue text-white shadow-lg shadow-blue-900/20' : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'}`}>
                                            <tab.icon className="w-6 h-6" />
                                        </div>
                                        <span className={`font-bold text-lg ${activeTab === tab.id ? 'text-brand-darkBlue' : ''}`}>{tab.label}</span>
                                    </div>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-brand-magenta"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="p-8 md:p-12 bg-gradient-to-b from-white to-blue-50/30 min-h-[500px] flex items-center">
                            <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                                {/* Text Content */}
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="lg:w-1/2 flex flex-col justify-center"
                                >
                                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-mono font-bold tracking-wider mb-6">
                                        <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
                                        SYSTEM_MODULE: {activeTab.toUpperCase()}
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold text-brand-darkBlue mb-6 tracking-tight">
                                        {activeTab === 'interface' && "Intuitive Control."}
                                        {activeTab === 'support' && "Always Online."}
                                        {activeTab === 'accessibility' && "Universal Access."}
                                    </h3>

                                    <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-brand-magenta/30 pl-6">
                                        {activeTab === 'interface' && "Experience a dashboard designed for clarity. Zero clutter, maximum efficiency. Navigate through complex curriculums with the simplicity of a modern app."}
                                        {activeTab === 'support' && "Technical hurdles shouldn't stop learning. Our engineering and academic teams are available 24/7. Average response time: < 5 minutes."}
                                        {activeTab === 'accessibility' && "Seamless synchronization across all devices. Start a project on the school lab PC, continue on your tablet on the bus, and finish on your laptop at home."}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {(activeTab === 'interface' ? [
                                            { title: "Smart Dashboard", desc: "Real-time progress tracking", icon: Layout },
                                            { title: "One-Click Nav", desc: "Simplified information architecture", icon: Monitor },
                                            { title: "Dark Mode", desc: "Easy on the eyes for night coding", icon: Award },
                                            { title: "Custom Layouts", desc: "Personalize your workspace", icon: Code }
                                        ] : activeTab === 'support' ? [
                                            { title: "Live Chat", desc: "Instant connection to mentors", icon: Headphones },
                                            { title: "Code Review", desc: "Get feedback on your commits", icon: Code },
                                            { title: "Video Solutions", desc: "Step-by-step problem solving", icon: Monitor },
                                            { title: "Community API", desc: "Peer-to-peer learning forum", icon: Users }
                                        ] : [
                                            { title: "Cloud Sync", desc: "Auto-save to secure cloud", icon: CalendarCheck },
                                            { title: "Offline Mode", desc: "Learn without internet", icon: BookOpen },
                                            { title: "Mobile Ready", desc: "Responsive design for all screens", icon: Layout },
                                            { title: "Low Bandwidth", desc: "Optimized for slow connections", icon: Monitor }
                                        ]).map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default group">
                                                <div className="mt-1 p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                                    <feature.icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-brand-darkBlue text-sm">{feature.title}</div>
                                                    <div className="text-xs text-slate-400 mt-0.5">{feature.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Image/Visual */}
                                <motion.div
                                    key={activeTab + "img"}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="lg:w-1/2 relative"
                                >
                                    {/* Browser Frame */}
                                    <div className="relative rounded-xl bg-slate-900 p-2 shadow-2xl shadow-blue-900/20 ring-1 ring-slate-900/5 group">
                                        <div className="flex items-center gap-2 mb-2 px-3 py-1 bg-slate-800/50 rounded-lg border border-white/5">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                            </div>
                                            <div className="flex-1 text-center">
                                                <div className="text-[10px] font-mono text-slate-500 bg-black/20 rounded-md py-0.5 max-w-[150px] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
                                                    app.codeschool.edu/dashboard
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-lg bg-slate-900">
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent pointer-events-none z-10"></div>
                                            <img
                                                src="/lms_dashboard.png"
                                                alt="LMS Dashboard"
                                                className="w-full rounded-lg opacity-90 transition duration-700 group-hover:opacity-100 group-hover:scale-[1.01]"
                                            />
                                        </div>

                                        {/* Floating Tech Spec Badge */}
                                        <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl animate-bounce-slow">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-magenta to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Engagement</div>
                                                <div className="text-xl font-bold text-slate-900">Top 1%</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-darkBlue">Popular Learning Tracks</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Focused curriculums designed to help you master specific domains.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Game Development", age: "Age 8-14", icon: "🎮", color: "bg-purple-100 text-purple-600" },
                            { title: "Web Development", age: "Age 12+", icon: "🌐", color: "bg-blue-100 text-brand-blue" },
                            { title: "AI & Data Science", age: "Age 15+", icon: "🤖", color: "bg-orange-100 text-orange-600" },
                            { title: "App Development", age: "Age 10-16", icon: "📱", color: "bg-green-100 text-green-600" },
                            { title: "Competitive Coding", age: "Age 14+", icon: "🏆", color: "bg-yellow-100 text-yellow-600" },
                            { title: "Cyber Security", age: "Age 15+", icon: "🔒", color: "bg-red-100 text-red-600" }
                        ].map((track, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mr-6 ${track.color}`}>
                                    {track.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase text-gray-400 mb-1">{track.age}</div>
                                    <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                                </div>
                                <ArrowRight className="ml-auto w-5 h-5 text-gray-300" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/programs">
                            <Button variant="outline" className="border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white">
                                View All Curriculums
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-darkBlue">Success Stories</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what our students and parents have to say about their learning journey.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Aravind K.",
                                role: "Class 10 Student",
                                content: "I built my first AI chatbot after just 3 months! The project-based learning method really works.",
                                rating: 5
                            },
                            {
                                name: "Priya S.",
                                role: "Parent of Class 8 Student",
                                content: "My son used to struggle with logic, but CodeSchool made it fun. He is now creating his own games.",
                                rating: 5
                            },
                            {
                                name: "Rahul M.",
                                role: "BTech 3rd Year",
                                content: "The Full Stack Bootcamp helped me crack my internship at a top MNC. The mentors are super helpful!",
                                rating: 5
                            }
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100"
                            >
                                <div className="flex gap-1 mb-4 text-yellow-400">
                                    {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-blue font-bold">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{t.name}</div>
                                        <div className="text-xs text-gray-500">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-darkBlue">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Do I need prior coding experience?", a: "No! We have specific beginner-friendly tracks for students with zero experience." },
                            { q: "Are the classes live or recorded?", a: "We offer a blend of live mentorship sessions and high-quality recorded content for self-paced learning." },
                            { q: "Is there a certificate provided?", a: "Yes, all students receive an industry-recognized certificate upon successful completion of their course." },
                            { q: "What is the batch size for live classes?", a: "We maintain a small batch size of 1:10 to ensure personal attention for every student." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white border text-left border-gray-200 rounded-2xl p-6 hover:border-brand-blue transition">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentor Spotlight */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-darkBlue">Meet Your Mentors</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Learn from alumni of top tech companies and universities.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: "Sarah J.", role: "Ex-Google, AI Expert", img: "👩‍💻" },
                            { name: "David R.", role: "Senior Dev, Amazon", img: "👨‍💻" },
                            { name: "Anjali P.", role: "Data Scientist, Microsoft", img: "👩‍🏫" },
                            { name: "James L.", role: "Game Dev Specialist", img: "👨‍🏫" }
                        ].map((mentor, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border border-gray-100 group">
                                <div className="w-24 h-24 bg-brand-light rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition pb-2">
                                    {mentor.img}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                                <p className="text-brand-magenta font-medium text-sm mb-2">{mentor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="bg-brand-purple rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Tech Journey?</h2>
                            <p className="text-xl text-purple-100 mb-10">
                                Whether you are in school or college, we have the right program for you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <button className="bg-white text-brand-purple px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition transform">
                                        Book Free Counseling
                                    </button>
                                </Link>
                                <Link to="/programs">
                                    <button className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                                        View All Programs
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
