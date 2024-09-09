'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import women from '/public/assets/women.svg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useScroll, useTransform, motion } from 'framer-motion';
import reviews from '/public/assets/reviews.svg'

// Dynamically import react-slick, to ensure it only runs on the client
const Slider = dynamic(() => import('react-slick'), { ssr: false });

function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <div
            onClick={onClick}
            className="absolute top-[10rem] md:top-[10rem] md:-right-12 right-0 z-40 text-gray-400 cursor-pointer"
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
            className="absolute top-[10rem] md:top-[10rem] md:-left-12 -left-2 z-40 text-gray-400 cursor-pointer"
        >
            <MdKeyboardArrowLeft className="text-5xl" />
        </div>
    );
}
const testimonials = [
    {
        id: 1,
        name: ' Andrew Mika',
        title: ' CEO at GoodRite',
        image: women,
        feedback: `As a growing business, we needed reliable software to streamline operations. Tech Bite Solution delivered beyond our expectations, and their support team was always there to help.`,
    },
    {
        id: 2,
        name: 'Nika Bernouseville',
        title: ' Business Partnership Manager at AmCash',
        image: women,
        feedback: `Their blockchain expertise has been a game-changer for us. The Tech Bite Solution team made the entire integration process effortless. Fantastic service!`,
    },
    {
        id: 3,
        name: 'Lisa Handerson',
        title: ' Co founder at Brainly',
        image: women,
        feedback: `Working with Tech Bite Solution on our AI project was an excellent experience. Their team's attention to detail and timely delivery helped us automate key processes and improve efficiency.`,
    },
];

// Carousel settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: '0', // Remove padding for a clean skew effect
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Reviews = () => {
    const [isClient, setIsClient] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [1000, 0]);


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div ref={ref} className="">

            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className=""
                >
                    <Image src={reviews} alt="review" className="py-6" />
                </motion.div>
                <h1 className="md:text-3xl font-bold absolute top-10 md:top-36">Here is what our Clients are saying About us</h1>
            </div>

            <Slider {...settings} className="max-w-6xl mx-auto">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="px-4 lg:px-0">
                        <div className="relative p-6 transform-gpu transition-transform duration-500 ease-in-out hover:scale-105">
                            <div className="bggradient rounded-3xl  p-6 flex flex-col items-start max-w-lg mx-auto relative">
                                <div className="absolute top-0 left-0 mt-4 px-8">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="mt-16">
                                    <h3 className=" text-xl font-bold">{testimonial.name}</h3>
                                    <p className="font-semibold mb-4">{testimonial.title}</p>
                                    <p className="text-left">
                                        {testimonial.feedback}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;
