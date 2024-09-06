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
            className={`absolute top-[9rem] right-16 z-40 ${isLastSlide ? 'hidden' : 'cursor-pointer'}`}
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
            className={`absolute top-[10rem] left-16 z-40 ${isFirstSlide ? 'hidden' : 'cursor-pointer'}`}
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
            name: 'Hannah Schmitt',
            date: 'May 8, 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            img: women,
        },
        {
            name: 'John Doe',
            date: 'Jun 12, 2020',
            description: 'Suspendisse sed magna eget nibh in turpis...',
            img: women,
        },
        {
            name: 'Jane Smith',
            date: 'Jul 24, 2020',
            description: 'Faucibus venenatis felis id augue sit cursus...',
            img: women,
        },
        // Add more testimonials as needed
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
                <h1 className='text-4xl font-bold absolute top-36'>Here is what our Clients are saying About us</h1>
            </div>
            <div className="">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="py-14">
                            <div className="flex items-center mx-auto bggradient text-black rounded-xl p-6 shadow-lg max-w-4xl w-full">
                                <div className="mr-4">
                                    <Image
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-sm my-2">{testimonial.description}</p>
                                    <span className="text-sm text-gray-700">{testimonial.date}</span>
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
