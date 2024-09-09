'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import industry from '/public/assets/industry.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsHeartPulse } from "react-icons/bs";
import { TbShoppingCart } from "react-icons/tb";
import { FaHeart } from 'react-icons/fa';
import { MdInventory2, MdOutlineTrackChanges, MdRealEstateAgent } from 'react-icons/md';
import { IoMdSchool } from "react-icons/io";


const services = [
    {
        icon: <BsHeartPulse className="h-12 w-12 text-gray-500" />,
        title: 'Health Care',
        description: 'The healthcare industry relies on efficient patient management, data security, and compliance with regulations.',
        backContent: ' Our solutions offer hospitals and clinics a comprehensive platform for managing patient records, appointments, and billing processes. We also integrate telemedicine features, enhance data security, and ensure HIPAA compliance, allowing healthcare providers to focus on delivering quality care while improving operational efficiency.',
    },
    {
        icon: <TbShoppingCart className="h-12 w-12 text-gray-500" />,
        title: 'E-Commerce',
        description: 'The E-commerce industry has transformed the way businesses sell products and services online, offering endless opportunities for growth.',
        backContent: 'Our solutions streamline online store management, integrate payment gateways, enhance customer engagement through personalized experiences, and optimize inventory management. By leveraging advanced analytics and marketing tools, we help e-commerce businesses scale, increase sales, and improve customer retention.',
    },
    {
        icon: <MdOutlineTrackChanges className="h-10 w-10 text-gray-500" />,
        title: 'Construction',
        description: 'The construction industry involves complex project management, coordination, and resource allocation. ',
        backContent: 'Our solutions help construction companies streamline project planning, manage budgets, track progress, and collaborate seamlessly with contractors and suppliers. By digitizing workflows and offering real-time updates, we improve project efficiency, reduce costs, and help businesses complete projects on time and within budget.',
    },
    {
        icon: <IoMdSchool className="h-10 w-10 text-gray-500" />,
        title: 'Education & Schools',
        description: 'Educational institutions, from schools to universities, are increasingly relying on technology for learning management, student administration, and communication.',
        backContent: 'Our solutions offer powerful learning management systems (LMS), student portals, virtual classrooms, and assessment tools. We help educational institutions enhance their digital infrastructure, provide remote learning capabilities, and improve student-teacher collaboration for a more interactive learning experience.',
    },
    {
        icon: <MdInventory2 className="h-10 w-10 text-gray-500" />,
        title: 'Retail & Consumer Goods',
        description: 'The retail industry is competitive and fast-paced, requiring businesses to adapt to customer demands quickly.',
        backContent: 'Our solutions offer retailers tools for inventory management, point-of-sale systems, customer loyalty programs, and personalized marketing. By optimizing supply chain management and enhancing customer experiences, we help retail businesses grow, retain customers, and increase profitability.',
    },
    {
        icon: <MdRealEstateAgent className="h-10 w-10 text-gray-500" />,
        title: 'Real Estate',
        description: 'The real estate industry involves managing properties, clients, and transactions',
        backContent: 'Our  platforms offer real estate businesses solutions for CRM, property listings, virtual tours, and contract management. By automating workflows and offering seamless client management tools, we help real estate companies improve client relationships, close deals faster, and manage properties more efficiently.',
    },
];

const Industry = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const xValue = useTransform(scrollYProgress, [0, 1], [900, -1200]); // Adjust values here

    return (
        <div className="relative md:py-10">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    transition={{ duration: 0.8}} // Adjust the duration if needed
                    className="flex justify-center"
                >
                    <Image src={industry} alt="industry" className="py-6" />
                </motion.div>
                <h1 className="text-3xl font-bold absolute top-16 md:top-36">Industries</h1>
            </div>
            <div className="">

                <div data-aos="fade-up" className="max-w-6xl p-8 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group h-96 hover:scale-105 transform transition duration-500 ease-in-out"
                            data-aos="fade-left"
                        >
                            {/* Card */}
                            <div className="relative w-full h-full bg-[#a5d2b6] p-8 rounded-lg shadow-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out group-hover:h-full">
                                {/* Front Side */}
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-semibold mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-800 text-center">
                                    {service.description}
                                </p>

                                {/* Hover Expansion */}
                                <div className="absolute top-0 left-0 w-full h-full bggradient p-8 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center">
                                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                    <p className="">{service.backContent}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industry;
