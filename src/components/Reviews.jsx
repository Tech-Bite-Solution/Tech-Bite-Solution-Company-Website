'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useScroll, useTransform, motion } from 'framer-motion';
import reviews from '/public/assets/reviews.svg';
import women from '/public/assets/women.svg';
import male from '/public/assets/male.jpg';
import maxime from '/public/assets/maxime.jpg';
import pauline from '/public/assets/pauline.jpg';
import female from '/public/assets/female.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import effect-specific styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        name: 'Andrew Mika',
        title: 'CEO at VividBloom Media',
        image: male,
        feedback: `As a growing business, we needed reliable software to streamline operations. Tech Bite Solution delivered beyond our expectations, and their support team was always there to help.`,
    },
    {
        id: 2,
        name: 'Nika Bernouseville',
        title: 'Business Partnership Manager at Aqualine Fitness',
        image: female,
        feedback: `Their blockchain expertise has been a game-changer for us. The Tech Bite Solution team made the entire integration process effortless. Fantastic service!`,
    },
    {
        id: 3,
        name: 'Lisa Handerson',
        title: 'Co-founder at STS Labs',
        image: women,
        feedback: `Working with Tech Bite Solution on our AI project was an excellent experience. Their team's attention to detail and timely delivery helped us automate key processes and improve efficiency.`,
    },
    {
        id: 4,
        name: 'Pauline Buatista',
        title: 'Co-founder at GreenGrocer',
        image: pauline,
        feedback: `I had the pleasure of working closely with TBS on a project involving Database Migration, and I must say, it was an exceptional experience from start to finish. Their Data Engineering team is truly commendable, and their contributions were invaluable to the success of the project.`,
    },
    {
        id: 5,
        name: 'Maxime',
        title: 'Director of Marketing at DipRack',
        image: maxime,
        feedback: `The onboarding process is pretty smooth yet efficient. The engineering team is highly qualified and collaborative. I have been working with TBS for months now and I feel it was the best decision so far!`,
    }
];

const Reviews = () => {
    const [isClient, setIsClient] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const xValue = useTransform(scrollYProgress, [0, 1], [1000, 0]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div ref={ref} className="py-10 ">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image src={reviews} alt="review" className="py-6" />
                </motion.div>
                <h1 className="md:text-3xl font-bold absolute top-10 md:top-36">Here is what our Clients are saying About us</h1>
            </div>

            <Swiper
                modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{ delay: 5000 }} // Set autoplay delay
                loop={true} // Enable infinite loop
                breakpoints={{
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                className="max-w-6xl mx-auto relative"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="px-4 lg:px-0 ">
                        <div className="transform-gpu transition-transform duration-500 ease-in-out  ">
                            <div className="bggradient rounded-3xl p-6 flex flex-col items-start max-w-lg mx-auto relative">
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
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="font-semibold mb-4">{testimonial.title}</p>
                                    <p className="text-left">{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Reviews;

