'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import portfolio from '/public/assets/portfolio.svg';
import { motion, useScroll } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '/public/assets/logo.svg';

const Portfolio = () => {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [isMobile, setIsMobile] = useState(false);
    const { scrollY } = useScroll();
    const previousScrollY = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust for screens smaller than 768px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > previousScrollY.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            previousScrollY.current = latest;
        });
    }, [scrollY]);

    const cardData = [
        {
            id: 1,
            title: 'Frontline Ticketing',
            subtitle: 'Social Networking',
            description1: 'Frontline Ticketing provides a platform for event organizers to manage and sell tickets online. As a ticketing company, Frontline Ticketing likely requires IT services to develop and maintain a reliable, user-friendly platform that can handle high volumes of ticket sales and customer data.',
            description2: 'We assisted them with the development of Frontline Ticketing’s website and mobile applications, data analytics and reporting, as well as integrating payment processing and security measures to ensure the protection of sensitive customer information.',
            imageUrl: logo,
        },
        {
            id: 2,
            title: 'Another Project',
            subtitle: 'Project Management',
            description1: 'This is another project description.',
            description2: 'Details about the services provided for this project.',
            imageUrl: logo,
        },
        // Add more card objects here
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-6xl md:mx-auto">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    initial={{ x: isMobile ? 50 : 100 }}  // Adjust initial position for mobile
                    animate={{ x: scrollDirection === 'down' ? (isMobile ? 50 : 100) : (isMobile ? -150 : -300) }}  // Adjust animation values for mobile
                    transition={{ duration: 0.9 }}
                    className="overflow-hidden"
                >
                    <Image src={portfolio} alt='Portfolio' className='py-6 z-10 h-52' />
                </motion.div>
                <h1 className='text-3xl font-bold absolute top-28'>Portfolio</h1>
            </div>
            <div className="px-4 py-8">
                <Slider {...settings}>
                    {cardData.map((card) => (
                        <div key={card.id} className="px-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 shadow bg-gradient-to-l from-white to-[#EFF7F2] rounded p-6 gap-8 items-center">
                                <div className="space-y-4">
                                    <p className="text-base font-semibold text-gray-600">{card.subtitle}</p>
                                    <h1 className="text-4xl font-bold text-gray-900">{card.title}</h1>
                                    <p className="text-gray-700">{card.description1}</p>
                                    <p className="text-gray-700">{card.description2}</p>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src={card.imageUrl}
                                        alt={`Image of ${card.title}`}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;
