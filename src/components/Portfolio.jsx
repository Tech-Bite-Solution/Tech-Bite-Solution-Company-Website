'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import portfolio from '/public/assets/portfolio.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import edu from '/public/assets/edu.svg';
import cover from '/public/assets/cover.svg';
import ego from '/public/assets/ego.svg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <div
            onClick={onClick}
            className="absolute top-[15rem] md:top-[10rem] md:-right-12 right-0 z-40 text-gray-400 cursor-pointer"
        >
            <MdKeyboardArrowRight className="text-5xl" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
        <div
            onClick={onClick}
            className="absolute top-[15rem] md:top-[10rem] md:-left-12 -left-2 z-40 text-gray-400 cursor-pointer"
        >
            <MdKeyboardArrowLeft className="text-5xl" />
        </div>
    );
}

const Portfolio = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const xValue = useTransform(scrollYProgress, [0, 1], [900, -1200]);

    const cardData = [
        {
            id: 1,
            title: 'EDU AI',
            subtitle: 'Ed Tech',
            description1:
                'EDU AI is an AI-powered platform that utilizes Open AI API and Whisper to transcribe videos and generate transcriptions. The platform then uses a specialized Gen AI model to create quizzes, summaries, and resources from the video.',
            imageUrl: edu,
        },
        {
            id: 2,
            title: 'EGO WEB App',
            subtitle: 'Digital Marketing',
            description1:
                'Ego is a platform designed for restaurants to help them gain public recognition through a game offering real prizes to customers. Users spin a wheel and win free meals in exchange for reviews on Google Maps.',
            imageUrl: ego,
        },
        {
            id: 3,
            title: 'My Cover Letter',
            subtitle: 'Generative AI',
            description1:
                'This platform helps professionals craft personalized cover letters based on job descriptions and professional history. It uses React.js for the frontend and Python (with OpenAI API) for backend processing.',
            imageUrl: cover,
        },
        {
            id: 4,
            title: 'IP Risk Analyzer',
            subtitle: 'E-commerce',
            description1:
                'A Chrome extension for e-commerce businesses that analyzes Amazon products and identifies IP risks. Built with Python (Flask) and powered by a specialized model that analyzes real-time data.',
            imageUrl: ego,
        },
    ];

    const settings = {
        infinite: true, // Make the carousel infinite
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Hide arrows for small screens
                    autoplay: true, // Add autoplay for small screens
                    autoplaySpeed: 3000,
                },
            },
        ],
    };

    return (
        <div id='portfolio' ref={ref} className="md:py-10">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <Image src={portfolio} alt="Portfolio" className="py-6 md:h-auto h-28" />
                </motion.div>
                <h1 className="text-3xl font-bold absolute top-16 md:top-36">Portfolio</h1>
            </div>
            <div data-aos="zoom-out-left" className="px-4 py-8 max-w-6xl md:mx-auto">
                <Slider {...settings}>
                    {cardData.map((card) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="px-2"
                        >
                            <div className="grid grid-cols-1 md:h-96 md:grid-cols-2 shadow bg-gradient-to-l from-white to-[#EFF7F2] rounded p-6 gap-8 items-center">
                                <div className="space-y-4">
                                    <p className="text-base font-semibold text-gray-600">{card.subtitle}</p>
                                    <h1 className="text-4xl font-bold text-gray-900">{card.title}</h1>
                                    <p className="text-gray-700">{card.description1}</p>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src={card.imageUrl}
                                        alt={`Image of ${card.title}`}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;
