'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import whyus from '/public/assets/whyus.svg';
import tailored from '/public/assets/tailored.jpg';
import support from '/public/assets/support.jpg';
import results from '/public/assets/results.jpg';

const WhyUs = () => {
    const [selectedTab, setSelectedTab] = useState('Expertise That Drives Results');

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [1000, -1200]);

    // Data for each tab
    const tabs = [
        {
            title: 'Expertise That Drives Results',
            description1: "At Tech Bite Solution, we don't just build software; we craft solutions that solve real-world problems. With a team of highly skilled developers, engineers, and AI specialists, we bring years of industry experience to every project. Whether you're looking to optimize workflows, enhance customer experience, or adopt new technologies like blockchain or AI, our expertise ensures you get results that matter. We don’t just deliver projects—we partner with you to create a long-term solution that supports your business goals and evolves with your needs.",
            image: results, // Change this to the appropriate image path
            imageAlt: 'resluts',
        },
        {
            title: 'Tailored Solutions for Every Business',
            description1: 'No two businesses are alike, and neither are the solutions we build. At Tech Bite Solution, we take a personalized approach to every project. From small-scale enterprises to startups and mid-sized companies, we carefully assess your needs and challenges before offering tailored software, mobile app, or web development solutions. Our goal is to align our services with your objectives, delivering a customized outcome that fits seamlessly into your operations and grows with you as your business expands.',
            image: tailored, // Change this to the appropriate image path
            imageAlt: 'tailored',
        },
        {
            title: 'Reliable Support and Timely Delivery',
            description1: 'In today’s fast-paced digital world, timing is everything. That’s why we pride ourselves on being reliable and delivering projects on time, every time. At Tech Bite Solution, we know that the success of your business often depends on timely execution, and our team works efficiently to meet deadlines without compromising on quality. Plus, our dedicated support team is always available to assist with any challenges or updates, ensuring your solutions remain effective long after launch.',
            description2: 'Our AI-powered Law GPT offers real-time legal advice and research capabilities, helping law firms automate tasks, reduce errors, and streamline communication with clients.',
            image: support, // Change this to the Law GPT image
            imageAlt: 'Support',
        }
    ];

    // Find the current tab data
    const currentTab = tabs.find(tab => tab.title === selectedTab);

    return (
        <div ref={ref} className="py-10">
            <div className="flex py-5  overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    initial={{ opacity: 0 }} // Ensure it starts invisible
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <Image src={whyus} alt='whyus' className='py-6' />
                </motion.div>
                <h1 className='text-4xl font-bold absolute top-10 md:top-28'>Why Choose us?</h1>
            </div>
            <div className="md:max-w-6xl md:mx-auto ">

                <h2 className="md:text-3xl font-bold gradientText">
                    Our Client-Centric AI Solutions
                </h2>

                {/* Tabs Section */}
                <div className="flex md:flex-row flex-col py-6 md:space-y-0 space-y-3 md:space-x-3">
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
                {/* Left Section */}
                <div className="px-4 flex md:h-96 flex-col gap-10 lg:flex-row items-center">
                    {/* Content Section */}
                    <div className="lg:w-1/2">
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

                    {/* Right Section - Image */}
                    <div className="lg:w-1/2 lg:mt-0">
                        <div className="relative">
                            <Image
                                src={currentTab.image} // Dynamic image based on the selected tab
                                alt={currentTab.imageAlt}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
