import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b z-50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-2xl font-extrabold text-brand-blue tracking-tight">
                    CodeSchool
                </Link>
                <div className="hidden md:flex gap-8 items-center text-brand-darkBlue font-semibold">
                    <Link to="/programs" className="hover:text-brand-magenta transition">Programs</Link>
                    <Link to="/how-it-works" className="hover:text-brand-magenta transition">How It Works</Link>
                    <Link to="/schools" className="hover:text-brand-magenta transition">For Schools</Link>
                    <Link to="/about" className="hover:text-brand-magenta transition">About Us</Link>
                    <Link to="/contact" className="px-5 py-2.5 bg-brand-magenta text-white rounded-full hover:bg-pink-700 hover:shadow-lg transition transform hover:-translate-y-0.5">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
