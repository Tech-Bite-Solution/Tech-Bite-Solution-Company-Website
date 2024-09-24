/* eslint-disable @next/next/no-img-element */
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
import iprisk from '/public/assets/iprisk.svg';
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

const TeamSection = () => {
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
            imageUrl: iprisk,
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                >
                    <Image src={portfolio} alt="Portfolio" className="py-6 md:h-auto h-28" />
                </motion.div>
                <h1 className="text-3xl font-bold absolute top-16 md:top-36">Our Team</h1>
            </div>
            <div data-aos="zoom-out-left" className="px-4 py-8 max-w-6xl md:mx-auto">
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5].map((card) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="px-2"
                        >
                            <div role="listitem" className="relative lg:mt-32 mt-20 mb-32">
                                <div className="rounded overflow-hidden shadow-md bg-white" style={{ boxShadow: '0 4px 10px #3BDB00' }}>
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img
                                                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                                alt="Display Picture of Andres Berlin"
                                                className="rounded-full object-cover h-full w-full shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-2xl text-center gradientText mb-1">Andres Berlin</h1>
                                        <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                            The CEOs role in raising a companys corporate IQ is to establish an
                                            atmosphere that promotes knowledge sharing and collaboration.
                                        </p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#718096"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-github"
                                                    >
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#718096"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-twitter"
                                                    >
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0 1-2A10.86 10.86 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
            {/* Map Section */}
            <div className="flex justify-center">
                <h2 className="text-2xl font-bold my-10">Our Location</h2>
            </div>
            <div className="flex justify-center">
                {/* Replace with actual map component */}
                <div className="w-full h-60 bg-gray-200 rounded-lg shadow-lg">
                    {/* Placeholder for map */}
                    <p className="text-center text-gray-500 py-24">Map Placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
