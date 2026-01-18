import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const ProgramCard = ({ title, description, duration, skills, target, icon: Icon, color }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative"
        >
            {/* Top Color Bar */}
            <div className={`h-2 w-full ${color.replace('text-', 'bg-')}`}></div>

            <div className="p-8 flex flex-col h-full">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${color.replace('text-', 'bg-').replace('600', '50')} ${color}`}>
                        {Icon && <Icon className="w-8 h-8" />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-mono font-bold uppercase tracking-wider">
                        {target}
                    </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-50">
                    <div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Duration</div>
                        <div className="font-mono text-sm font-semibold text-gray-700">{duration}</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Skills</div>
                        <div className="flex flex-wrap gap-1">
                            {skills.slice(0, 2).map((skill, i) => (
                                <span key={i} className="text-xs bg-gray-50 text-gray-600 px-1.5 py-0.5 rounded border border-gray-100">
                                    {skill}
                                </span>
                            ))}
                            {skills.length > 2 && <span className="text-xs text-gray-400 self-center">+{skills.length - 2}</span>}
                        </div>
                    </div>
                </div>

                <Link to="/contact">
                    <Button variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                        View Curriculum
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProgramCard;
