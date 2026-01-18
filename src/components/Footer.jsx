import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">CodeSchool</h3>
                        <p className="text-gray-400 text-sm">Building Future-Ready Tech Talent</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} CodeSchool. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
