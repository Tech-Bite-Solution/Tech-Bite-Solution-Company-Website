'use client'

import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import reviews from '/public/assets/reviews.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightarrow from '/public/assets/rightarrow.svg'
import leftarrow from '/public/assets/leftarrow.svg'
import women from '/public/assets/women.svg'


function SampleNextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide === slideCount - 1;

    return (
        <div
            onClick={!isLastSlide ? onClick : undefined}
            className={`absolute top-[9rem]  md:right-16 z-40 ${isLastSlide ? 'hidden' : 'cursor-pointer'}`}
        >
            <Image src={rightarrow} alt='arrow' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;

    return (
        <div
            onClick={!isFirstSlide ? onClick : undefined}
            className={`absolute top-[10rem]  md:left-16 z-40 ${isFirstSlide ? 'hidden' : 'cursor-pointer'}`}
        >
            <Image src={leftarrow} alt='arrow' />

        </div>
    );
}

const Reviews = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [300, 0]);

    const testimonials = [
        {
            name: 'Andrew Mika',
            title: 'CEO at GoodRite',
            description: 'As a growing business, we needed reliable software to streamline operations. Tech Bite Solution delivered beyond our expectations, and their support team was always there to help.',
            img: women,
        },
        {
            name: 'Lisa Handerson',
            title: 'Co founder at Brainly',
            description: "Working with Tech Bite Solution on our AI project was an excellent experience. Their team's attention to detail and timely delivery helped us automate key processes and improve efficiency.",
            img: women,
        },
        {
            name: 'Nika Bernouseville',
            title: 'Business Partnership Manager at AmCash',
            description: 'Their blockchain expertise has been a game-changer for us. The Tech Bite Solution team made the entire integration process effortless. Fantastic service!',
            img: women,
        },
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
        <div ref={ref} className="">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    initial={{ opacity: 0 }} // Ensure it starts invisible
                    whileInView={{ opacity: 1 }}
                    transition={.9}
                    className=""
                >
                    <Image src={reviews} alt='reviews' className='py-6 z-10 md:h-auto h-28' />
                </motion.div>
                <h1 className='md:text-4xl text-base font-bold absolute top-16 md:top-36'>Here is what our Clients are saying About us</h1>
            </div>
            <div className="">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="py-14">
                            <div className="flex md:flex-row flex-col items-center mx-auto bggradient text-black rounded-xl p-6 shadow-lg max-w-4xl w-full">
                                <div className="mr-4">
                                    <Image
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="rounded-full h-52 w-52"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-sm my-2">{testimonial.description}</p>
                                    <span className="text-sm font-medium text-gray-700">{testimonial.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Reviews;
