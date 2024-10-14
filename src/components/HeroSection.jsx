'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import treva from '/public/assets/treva.png'
import tower from '/public/assets/tower.png'
import snow from '/public/assets/snow.png'
import power from '/public/assets/power.png'
import docker from '/public/assets/docker.png'
import azure from '/public/assets/azure.jpg'
import aws from '/public/assets/aws.jpg'
import algolia from '/public/assets/algolia.jpg'
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast'; 

const icons = [
    { src: algolia, alt: 'Icon 1', style: 'top-5 left-20' },
    { src: aws, alt: 'Icon 2', style: 'top-5 right-40' },
    { src: azure, alt: 'Icon 3', style: 'top-48 left-24' },
    { src: docker, alt: 'Icon 4', style: 'top-20 right-20' },
    { src: snow, alt: 'Icon 5', style: 'top-20 left-40' },
    { src: power, alt: 'Icon 6', style: 'top-64 left-48' },
    { src: tower, alt: 'Icon 7', style: 'top-44 right-36' },
    { src: treva, alt: 'Icon 8', style: 'top-60 right-60' },
];

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
        file: null, // Add a file field
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value // Handle file upload
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        const templateParams = {
            to_email: 'techbitesolution1@gmail.com',
            email: formData.email,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
            file: formData.file ? formData.file.name : 'No file uploaded', 
        };

        emailjs.send('service_aoqc42c', 'template_g0mup3v', templateParams, '967MiBz30v5eHS8cE')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                    file: null, // Reset file field
                });
                toast.success('Email sent successfully!');
                toggleModal(); // Close the modal
            }, (err) => {
                console.log('FAILED...', err);
                setError(true);
                toast.error('Failed to send email. Please try again.'); 
            });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* React Hot Toast Toaster */}
            <Toaster />

            <div className="lg:py-16 py-5">
                <div className="relative md:block hidden">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${icon.style}`}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.75, ease: 'easeInOut' }}
                        >
                            <Image src={icon.src} alt={icon.alt} width={50} height={50} className='' />
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div data-aos="fade-right" className="max-w-4xl px-2 py-12 mx-auto">
                        <p className='md:text-5xl text-3xl py-5 font-bold text-center '>Your Partner in cutting edge <span className='gradientText'> software development</span></p>
                        <p className='font-medium py-6 text-center'>Empowering Industries with Scalable Solutions.
                            Transform your business operations with tailored software solutions that streamline processes, enhance efficiency, and drive growth.
                        </p>
                        <p className='font-medium text-center'>
                            Bites of Business for your Business
                        </p>
                    </div>
                    <button
                        type='button'
                        onClick={toggleModal}
                        className='bggradient block px-6 lg:px-16 hover:scale-105 transition-all duration-300 py-3 rounded-full text-center font-semibold'>
                        Get Quote
                    </button>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white w-11/12 lg:w-1/3 p-6 rounded-lg shadow-lg">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold">Request a Quote</h2>
                                    <button onClick={toggleModal} className="text-4xl font-medium">&times;</button>
                                </div>

                                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            rows="4"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Upload File (optional)</label>
                                        <input
                                            type="file"
                                            name="file"
                                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" // Accept specific file types
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className='flex justify-end'>
                                        <button
                                            type="submit"
                                            className="bggradient hover:bg-green-600 font-semibold text-white px-6 py-3 rounded-lg"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HeroSection;
