import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '', // Student, Parent
        interest: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your interest! We will contact you shortly.");
        // Connect to backend here
        setFormData({ name: '', email: '', phone: '', role: '', interest: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get Free Guidance</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions? Our counseling team is here to help you choose the right path.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="bg-brand-blue text-white p-10 md:w-2/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-blue-100 mb-8">Fill up the form and our Team will get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-cyan-300" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-cyan-300" />
                                    <span>admissions@codeschool.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-5 h-5 text-cyan-300" />
                                    <span>Tech Park, Bangalore, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            {/* Social Icons Placeholder */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">FB</div>
                                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">TW</div>
                                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">IG</div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 md:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select Option</option>
                                        <option value="student">Student</option>
                                        <option value="parent">Parent</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select Program</option>
                                        <option value="school">School Programs (8-12)</option>
                                        <option value="college">College Programs (BTech/BCA)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" className="w-full">
                                    Get Free Career Guidance
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
