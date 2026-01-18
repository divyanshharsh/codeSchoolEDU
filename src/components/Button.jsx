import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition duration-200 inline-flex items-center justify-center";

    const variants = {
        primary: "bg-brand-magenta text-white hover:bg-pink-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary: "bg-white text-brand-blue border-2 border-brand-blue hover:bg-blue-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-brand-blue hover:bg-blue-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
