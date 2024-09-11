'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import clients from '/public/assets/clients.svg'
import startups from '/public/assets/startups.png'
import small from '/public/assets/small.png'
import medium from '/public/assets/medium.png'
import large from '/public/assets/large.png'
import { motion, useScroll, useTransform } from 'framer-motion';

const Clients = () => {
    const [selectedTab, setSelectedTab] = useState('Startups');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const xValue = useTransform(scrollYProgress, [0, 1], [800, -1200]);

    const tabs = [
        {
            title: 'Startups',
            description1: 'Startups thrive on innovation, and Tech Bite Solution is here to fuel that momentum. From building a powerful, user-friendly MVP to incorporating advanced AI/ML features, we help startups bring their vision to life quickly and efficiently. Our agile development process ensures that your software, mobile app, or blockchain solution is launched on time and within budget. We understand the fast-paced nature of startup life, and we’re committed to providing technology that accelerates your growth without sacrificing quality.',
            image: startups,
            imageAlt: 'startup',
        },
        {
            title: 'Small Businesses',
            description1: "At Tech Bite Solution, we understand the unique challenges faced by small business owners. With limited resources and tight budgets, every investment needs to count. Our tailored web development and software solutions are designed to give you the right digital tools without overwhelming your finances. Whether you're looking to establish an online presence, optimize internal processes, or introduce automation with AI, we provide scalable and cost-effective services that grow with you. Let us handle the technology while you focus on running your business.",
            image: small, // Change this to the GP-Pod image
            imageAlt: 'small',
        },
        {
            title: 'Medium Sized Companies',
            description1: 'Medium-sized companies often find themselves in the critical phase of expansion, where agility is just as important as structure. Tech Bite Solution offers cutting-edge mobile app development, blockchain integration, and data analytics to help you streamline operations and enhance customer experiences. Our expertise in AI/ML allows us to automate repetitive tasks and extract insights from data, giving you a competitive edge in your industry. We customize solutions that meet your specific needs, ensuring your digital transformation supports long-term growth.',
            image: medium, // Change this to the Law GPT image
            imageAlt: 'medium',
        },
        {
            title: 'Large Scale Enterprises',
            description1: "sAt Tech Bite Solution, we understand that large-scale enterprises require more than just off-the-shelf solutions to thrive in today's competitive landscape. That's why we offer customized IT services across web and software development, mobile app development, data analytics and engineering, AI/ML, and blockchain. Our team collaborates closely with enterprise clients, aligning technology with business goals to unlock new efficiencies, elevate customer experiences, and drive sustainable growth. Whether it’s building scalable platforms or leveraging AI for data-driven decisions, we’re here to deliver impactful solutions tailored to your enterprise’s unique needs.",
            image: large, // Change this to the Law GPT image
            imageAlt: 'large',
        },
    ];
    const currentTab = tabs.find(tab => tab.title === selectedTab);

    return (
        <>
            <div ref={ref} className="">
                <div className="flex py-5 overflow-hidden relative justify-center">
                    <motion.div
                        style={{ x: xValue }}
                        initial={{ opacity: 0 }} // Ensure it starts invisible
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className=""
                    >
                        <Image src={clients} alt='clients' className='py-6 z-10 ' />
                    </motion.div>
                    <h1 className='md:text-3xl font-bold absolute top-20 md:top-28'>Who our Clients are?</h1>
                </div>

                <div className="md:max-w-6xl md:px-0 px-4 md:mx-auto">
                    <div className="">
                        <h2 className="text-3xl font-bold gradientText">
                            Our Client
                        </h2>

                        {/* Tabs Section */}
                        <div className="flex md:flex-row flex-col py-5 md:space-y-0 space-y-3 md:space-x-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.title}
                                    onClick={() => setSelectedTab(tab.title)}
                                    className={`px-4 py-2 ${selectedTab === tab.title ? 'bg-green-200 text-green-600' : 'bg-gray-100 text-gray-500'} rounded-lg font-medium`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className="px-4 flex flex-col gap-10 lg:flex-row items-center">
                        {/* Left Section */}

                        {/* Content Section */}
                        <div data-aos="fade-right" className="lg:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {currentTab.title}
                            </h3>
                            <p className="mt-4 text-gray-600">
                                {currentTab.description1}
                            </p>
                            <button className="mt-6 px-6 py-3 bggradient text-white rounded-lg font-medium">
                                Read More
                            </button>
                        </div>

                        {/* Right Section - Image */}
                        <div data-aos="fade-left" className="lg:w-1/2">
                            <div className="relative">
                                <Image
                                    src={currentTab.image} // Dynamic image based on the selected tab
                                    alt={currentTab.imageAlt}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients;
