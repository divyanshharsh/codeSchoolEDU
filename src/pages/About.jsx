import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20 px-6">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About CodeSchool</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Democratizing tech education for the next generation of innovators.
                    </p>
                    <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="prose lg:prose-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Vision</h2>
                        <p className="text-gray-600 mb-6">
                            We believe that coding is a fundamental skill for the future, akin to reading and writing.
                            Our vision is to empower every student, from school to college, with the technical foundations
                            required to thrive in the digital age.
                        </p>
                        <p className="text-gray-600">
                            By bridging the gap between theoretical academic knowledge and practical industry application,
                            CodeSchool builds future-ready talent capable of solving real-world problems.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden"
                    >
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-blue-200">
                            <span className="text-6xl font-bold opacity-20">TEAM</span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team working"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                    </motion.div>
                </div>

                <div className="bg-brand-blue rounded-3xl p-12 text-white text-center">
                    <h2 className="text-3xl font-bold mb-8">Committed to Quality</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-cyan-300 mb-2">5+</div>
                            <div className="text-blue-100">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-cyan-300 mb-2">50+</div>
                            <div className="text-blue-100">Industry Instructors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-cyan-300 mb-2">10k+</div>
                            <div className="text-blue-100">Students Impacted</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
