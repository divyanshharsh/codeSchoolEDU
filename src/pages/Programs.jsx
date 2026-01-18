import React, { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import { motion } from 'framer-motion';
import { Blocks, Gamepad2, Layout, Globe, Code, Database } from 'lucide-react';

const Programs = () => {
    const [activeTab, setActiveTab] = useState('school'); // 'school' or 'college'

    const schoolPrograms = [
        {
            title: "Foundations of Programming",
            target: "Classes 8-10",
            duration: "3 Months",
            skills: ["Logic Building", "Scratch", "Basic Python"],
            description: "Start your coding journey with fun, interactive blocks and basic text-based coding.",
            icon: Blocks,
            color: "text-yellow-600"
        },
        {
            title: "Python for School Students",
            target: "Classes 9-12",
            duration: "4 Months",
            skills: ["Python", "Data Structures", "Simple Games"],
            description: "Master one of the world's most popular programming languages through game development.",
            icon: Gamepad2,
            color: "text-green-600"
        },
        {
            title: "Web Development Basics",
            target: "Classes 8-12",
            duration: "3 Months",
            skills: ["HTML", "CSS", "JavaScript Basics"],
            description: "Create your own websites and portfolios from scratch.",
            icon: Layout,
            color: "text-blue-600"
        }
    ];

    const collegePrograms = [
        {
            title: "Full Stack Web Development",
            target: "BTech / BCA",
            duration: "6 Months",
            skills: ["React", "Node.js", "MongoDB", "Express"],
            description: "Become a job-ready full stack developer with hands-on MERN stack projects.",
            icon: Globe,
            color: "text-indigo-600"
        },
        {
            title: "Data Structures & Algorithms",
            target: "Job Seekers",
            duration: "4 Months",
            skills: ["Java/C++", "Problem Solving", "Interview Prep"],
            description: "Crack technical interviews of top product-based companies.",
            icon: Code,
            color: "text-purple-600"
        },
        {
            title: "Data Science & AI",
            target: "BTech / BCA",
            duration: "6 Months",
            skills: ["Python", "Pandas", "Scikit-learn", "ML Basics"],
            description: "Dive into the world of data and artificial intelligence.",
            icon: Database,
            color: "text-rose-600"
        }
    ];

    return (
        <div className="font-sans min-h-screen bg-gray-50">
            {/* Immersive Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-blue via-brand-darkBlue to-brand-purple pt-32 pb-24 px-6 overflow-hidden text-center text-white">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="prog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#prog-grid)" />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-mono mb-6">
                        // COURSES_CATALOG_V2.0
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Find Your Path to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Tech Excellence</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Industry-relevant curriculum designed to take you from beginner to expert, specifically tailored for your academic stage.
                    </p>
                </motion.div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 -mt-10 relative z-20">
                <div className="container mx-auto">
                    {/* Tab Switcher */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-white p-1.5 rounded-full shadow-xl border border-gray-100 inline-flex relative">
                            {['school', 'college'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300 ${activeTab === tab ? 'text-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    {tab === 'school' ? 'School Programs' : 'College Programs'}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTabBg"
                                            className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Programs Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {(activeTab === 'school' ? schoolPrograms : collegePrograms).map((prog, idx) => (
                            <ProgramCard
                                key={idx}
                                {...prog}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
