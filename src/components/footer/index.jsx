'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import flogo from '/public/assets/flogo.svg';
import call from '/public/assets/call.svg';
import email from '/public/assets/email.svg';
import Link from 'next/link';
import { FaUpwork } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef(); // Defined form ref

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Updated to 'name' to match the form fields
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        // Prepare the template parameters based on formData
        const templateParams = {
            to_email: 'techbitesolution1@gmail.com',
            email: formData.email,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send('service_aoqc42c', 'template_g0mup3v', templateParams, '967MiBz30v5eHS8cE')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    subject: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                setError(true);
            });
    };

    return (
        <div id="contact" className="bg-black">
            <div className="px-10 mx-auto">
                <footer className="text-white">
                    <div className="py-10 grid grid-cols-1 md:grid-cols-4">
                        {/* Logo and Description */}
                        <div className="flex flex-col justify-center items-start">
                            <div className="flex items-center">
                                <Image src={flogo} alt="Tech-Bite Solution" className="" />
                            </div>
                            <p className="text-sm font-medium">Shaping technology for the future</p>
                        </div>
                        {/* Services */}
                        <div>
                            <h3 className="gradientText py-3 font-bold">Services</h3>
                            <ul className="space-y-2">
                                <li className="text-[#77808B]">Web App Development</li>
                                <li className="text-[#77808B]">Mobile App Development</li>
                                <li className="text-[#77808B]">SaaS Development</li>
                                <li className="text-[#77808B]">CMS Development</li>
                                <li className="text-[#77808B]">OpenAI Integration</li>
                                <li className="text-[#77808B]">UI/UX Design</li>
                            </ul>
                        </div>
                        {/* Contact Info and Social Media */}
                        <div>
                            <h3 className="font-bold py-3 gradientText">Contact</h3>
                            <div className="space-y-2">
                                <p className="text-[#77808B] text-sm flex items-center">
                                    <Image src={call} alt="" className="h-5" />
                                    <Link href="/">+61 452 130 266</Link>
                                </p>
                                <p className="text-[#77808B] text-sm flex items-center gap-2">
                                    <Image src={email} alt="" className="h-5" />
                                    <Link href="mailto:team@techbitesolution.com">team@techbitesolution.com</Link>
                                </p>
                            </div>
                            <h3 className="gradientText font-bold py-2">Our Social Media</h3>
                            <div className="space-y-2">
                                <p className="text-[#77808B]">
                                    <Link href="https://www.instagram.com/techbite_solution/">Instagram</Link>
                                </p>
                                <p className="text-[#77808B]">
                                    <Link href="https://www.facebook.com/profile.php?id=61561387413378">Facebook</Link>
                                </p>
                                <p className="text-[#77808B]">
                                    <Link href="https://www.linkedin.com/company/tech-bite-solution-pk/">LinkedIn</Link>
                                </p>
                                <p className="text-[#77808B]">
                                    <Link href="https://www.upwork.com/agencies/1828398087328567907/">Upwork</Link>
                                </p>
                            </div>
                        </div>

                        {/* Email Subscription */}
                        <div className="space-y-3">
                            <h3 className="gradientText font-semibold">Talk to a consultant</h3>
                            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className="p-2 rounded-lg placeholder:text-xs focus:outline-none text-black"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    className="p-2 rounded-lg placeholder:text-xs focus:outline-none text-black"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter Your Subject"
                                    className="p-2 rounded-lg placeholder:text-xs focus:outline-none text-black"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className="p-2 rounded-lg placeholder:text-xs focus:outline-none text-black"
                                    rows={4}
                                ></textarea>
                                <div>
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

                    <div className="flex md:flex-row gap-3 flex-col items-center py-5 justify-between text-center text-white">
                        <div className="text-sm">
                            <p>© 2024 All Rights Reserved</p>
                        </div>
                        <ul className="flex text-sm justify-center space-x-4">
                            <a href="/term-condition">Terms & Conditions</a>
                            <a href="/privacy-policey">Privacy policy</a>
                        </ul>
                        <ul className="flex text-center gap-5">
                            <li className="bg-white flex cursor-pointer justify-center text-black items-center w-7 h-7 rounded-full">
                                <Link href="https://www.instagram.com/techbite_solution/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="bg-white flex justify-center cursor-pointer text-black items-center w-7 h-7 rounded-full">
                                <Link href="https://www.facebook.com/profile.php?id=61561387413378">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="bg-white flex justify-center cursor-pointer text-black items-center w-7 h-7 rounded-full">
                                <Link href="https://www.linkedin.com/company/tech-bite-solution-pk/">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li className="bg-white flex justify-center cursor-pointer text-black items-center w-7 h-7 rounded-full">
                                <Link href="https://www.upwork.com/agencies/1828398087328567907/">
                                    <FaUpwork />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
