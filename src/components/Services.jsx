'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';
import services from '/public/assets/services.svg';
import { motion } from 'framer-motion';

const servicesData = [
    {
        title: "Data Engineering",
        content: 'We offer comprehensive data engineering services, designing and implementing robust solutions to efficiently manage, process, and transform large datasets for actionable insights.',
    },
    { title: "Data Analytics", content: "We provide advanced data analytics services, turning complex data into actionable insights that drive informed decision-making and business growth." },
    { title: "AI/ML", content: "We deliver cutting-edge AI/ML solutions, enabling businesses to leverage artificial intelligence and machine learning for smarter automation, predictive insights, and enhanced decision-making." },
    { title: "OpenAI Integrations", content: "We specialize in integrating OpenAI technologies, harnessing the power of advanced language models and AI capabilities to enhance your applications with intelligent, conversational, and automated solutions." },
    { title: "UI/UX Design", content: "We offer expert UI/UX design services, creating visually appealing and user-centric interfaces that deliver exceptional user experiences and drive engagement." },
    { title: "Graphics Design", content: "We provide professional graphic design services, crafting visually compelling and impactful designs that effectively communicate your brand’s message and captivate your audience." },
    { title: "Social Media Design and Management", content: "We deliver engaging social media design and management, boosting your brand’s online presence with creative content and strategic campaigns." },
    { title: "Custom Software Development", content: "Custom Software Development content here." },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [sidebarHeight, setSidebarHeight] = useState('auto');

    useEffect(() => {
        // Adjust the content area's height to match the sidebar height
        const sidebarElement = document.querySelector('#sidebar');
        if (sidebarElement) {
            setSidebarHeight(sidebarElement.clientHeight);
        }
    }, [selectedService]);

    return (
        <div className="">

            <div className="flex py-5 relative justify-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, }}
                    transition={{ duration: 0.9 }}
                    className=""
                >
                    <Image src={services} alt='Services' className='py-6 z-10 h-52' />
                </motion.div>
                <h1 className='text-3xl font-bold absolute top-28'>Our Services</h1>
            </div>
            <div className="flex flex-col max-w-6xl mx-auto relative lg:flex-row p-8">
                {/* Sidebar */}
                <div
                    id="sidebar"
                    className="w-full lg:w-1/4 md:absolute left-10 bottom-5 bg-[#000037] rounded-lg"
                >
                    <ul className="p-4">
                        {servicesData.map((service, index) => (
                            <li key={index} className="my-2">
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className={`block w-full text-left px-4 py-2 rounded-lg ${selectedService.title === service.title
                                        ? "bggradient text-white font-bold"
                                        : "text-gray-300 hover:bggradient hover:text-white"
                                        }`}
                                >
                                    {service.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div
                    className="w-full bg-gradient-to-r py-6 from-white to-[#EFF7F2] md:pl-[23rem] bg-white text-black p-6 shadow-lg"
                    style={{ minHeight: sidebarHeight }}
                >
                    <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
                    <p className="text-lg">{selectedService.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Services