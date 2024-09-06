'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import portfolio from '/public/assets/portfolio.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '/public/assets/logo.svg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


function SampleNextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide === slideCount - 1;

    return (
        <div
            onClick={!isLastSlide ? onClick : undefined}
            className={`absolute top-[15rem] md:top-[10rem] md:-right-12 right-0 z-40 ${isLastSlide ? 'hidden' : 'text-gray-400 cursor-pointer'}`}
        >
            <MdKeyboardArrowRight className='text-5xl' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;

    return (
        <div
            onClick={!isFirstSlide ? onClick : undefined}
            className={`absolute top-[15rem] md:top-[10rem]  md:-left-12 -left-2  z-40 ${isFirstSlide ? 'hidden' : 'text-gray-400 cursor-pointer'}`}
        >
            <MdKeyboardArrowLeft className='text-5xl' />
        </div>
    );
}

const Portfolio = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [200, 0]);


    const cardData = [
        {
            id: 1,
            title: ' EDU AI',
            subtitle: 'Ed Tech',
            description1: ' EDU AI is an AI powered platform that utilizes Open AI API and whisper to transcribe videos and generate transcriptions. The platform then utilizes a specialized Gen AI model to create specialized quizzes, summaries and important resources out of the video.',
            imageUrl: logo,
        },
        {
            id: 2,
            title: 'EGO WEB App',
            subtitle: 'Digital Marketing',
            description1: ' Ego is a platform specially designed for restaurants to allow them get public recognition through a fun game activity offering real prizes to the customers. The platform allows the users to spin a wheel and win free meals in return for a review on Google Maps',
            imageUrl: logo,
        },
        {
            id: 3,
            title: ' My Cover Letter',
            subtitle: 'Generative AI',
            description1: ' The platform is built for professionals to craft personalized cover letters based on the job description and professional history. The application front end is built on react.js and the backend is built in Python which utilizes the openAI API to craft personalized responses for the users.',
            imageUrl: logo,
        },
        {
            id: 4,
            title: 'IP Risk Analyzer',
            subtitle: 'E-commerce',
            description1: 'A specialized and game changer tool for ecommerce businesses accessible as a chrome extension that runs on Amazon product pages to help users identify the IP risk associated with that product. The platform is built in Python (Flask) utilizing a specialized model that runs the analysis based on multiple KPIs and real time data of the product to identify accurate IP risk for the given product',
            imageUrl: logo,
        },
        // Add more card objects here
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div ref={ref} className="max-w-6xl md:mx-auto">
            <div className="flex py-5  overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    initial={{ opacity: 0 }} // Ensure it starts invisible
                    whileInView={{ opacity: 1 }}
                    transition={.9}
                    className=""
                >
                    <Image src={portfolio} alt='Portfolio' className='py-6 z-10 md:h-auto h-28' />
                </motion.div>
                <h1 className='text-3xl font-bold absolute top-36'>Portfolio</h1>
            </div>
            <div className="px-4 py-8">
                <Slider {...settings}>
                    {cardData.map((card) => (
                        <div key={card.id} className="px-2">
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
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;
