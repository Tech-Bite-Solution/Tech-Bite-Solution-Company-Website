'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import whyus from '/public/assets/whyus.svg';

const WhyUs = () => {
    const [selectedTab, setSelectedTab] = useState('AI-Powered HIMS');

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [200, 0]);

    // Data for each tab
    const tabs = [
        {
            title: 'AI-Powered HIMS',
            description1: 'One of our esteemed clients required a Hospital Information Management System (HIMS) to overcome challenges, including high costs, medical staff shortages, and security risks, all impacting patient care and efficiency.',
            description2: 'Xeven Solutions delivered an AI-powered Hospital Information Management System that makes hospital tasks smoother, simplifies record management, and automates scheduling to ensure top-notch patient care and smooth operations.',
            image: '', // Change this to the appropriate image path
            imageAlt: 'AI-Powered Hospital System',
        },
        {
            title: 'GP-Pod',
            description1: 'Our client requested an advanced General Practitioner (GP) Pod solution that incorporates AI to handle patient diagnostics and consultations remotely, improving accessibility and reducing waiting times.',
            description2: 'The GP-Pod solution by Xeven Solutions is a fully AI-driven platform for remote diagnosis, appointment scheduling, and record management, designed to enhance healthcare delivery and operational efficiency.',
            image: '', // Change this to the GP-Pod image
            imageAlt: 'GP-Pod Image',
        },
        {
            title: 'AI-Powered Law GPT',
            description1: 'A law firm approached us seeking an AI-powered Law GPT solution that could assist with legal research, document drafting, and client communication, all while maintaining confidentiality and accuracy.',
            description2: 'Our AI-powered Law GPT offers real-time legal advice and research capabilities, helping law firms automate tasks, reduce errors, and streamline communication with clients.',
            image: '', // Change this to the Law GPT image
            imageAlt: 'AI-Powered Law GPT Image',
        }
    ];

    // Find the current tab data
    const currentTab = tabs.find(tab => tab.title === selectedTab);

    return (
        <div ref={ref} className="bg-white py-10">
            <div className="flex py-5  overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    initial={{ opacity: 0 }} // Ensure it starts invisible
                    whileInView={{ opacity: 1 }}
                    transition={.9}
                    className=""
                >
                    <Image src={whyus} alt='whyus' className='py-6 z-10 md:h-auto h-28' />
                </motion.div>
                <h1 className='text-4xl font-bold absolute top-28'>Why Choose us?</h1>
            </div>
            <div className="md:max-w-6xl md:mx-auto px-4 flex flex-col gap-10 lg:flex-row items-center">
                {/* Left Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold gradientText">
                        Our Client-Centric AI Solutions
                    </h2>

                    {/* Tabs Section */}
                    <div className="flex mt-6 space-x-3">
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

                    {/* Content Section */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-gray-800">
                            {currentTab.title}
                        </h3>
                        <p className="mt-4 text-gray-600">
                            {currentTab.description1}
                        </p>
                        <p className="mt-4 text-gray-600">
                            {currentTab.description2}
                        </p>

                        <button className="mt-6 px-6 py-3 bggradient text-white rounded-lg font-medium">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2 lg:mt-0">
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
    )
}

export default WhyUs
