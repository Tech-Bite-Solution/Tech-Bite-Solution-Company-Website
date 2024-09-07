'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeart } from 'react-icons/fa';

const services = [
    {
        icon: <FaHeart className="h-10 w-10 text-gray-400" />,
        title: 'Health Care',
        description: 'Digitization of clinics, Doctor-on-Demand apps, and other healthcare-related solutions.',
        backContent: 'More details about Health Care services.',
    },
    {
        icon: <FaHeart className="h-10 w-10 text-gray-400" />,
        title: 'E-Commerce',
        description: 'Resolved e-commerce industry challenges related to order fulfillment and logistics.',
        backContent: 'More details about E-Commerce services.',
    },
    {
        icon: <FaHeart className="h-10 w-10 text-gray-400" />,
        title: 'Finance',
        description: 'Securing fraud detection and regulatory compliance with AI-powered solutions.',
        backContent: 'More details about Finance services.',
    },
];

const Industry = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="py-12">
            <div data-aos="fade-up" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative group hover:scale-105 transform transition duration-500 ease-in-out"
                        data-aos="fade-left"
                    >
                        {/* Card */}
                        <div className="relative w-full h-full bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out group-hover:h-full">
                            {/* Front Side */}
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-white text-xl font-semibold mb-4 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-center">
                                {service.description}
                            </p>

                            {/* Hover Expansion */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 p-8 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center">
                                <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-400 text-center">{service.backContent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industry;
