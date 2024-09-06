'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import consultation from '/public/assets/consultation.svg'
import calendar from '/public/assets/calendar.svg'
import calendarPlus from '/public/assets/calendarPlus.svg'
import notification from '/public/assets/notification.svg'
import consult from '/public/assets/consult.svg'
import clock from '/public/assets/clock.svg'
import video from '/public/assets/video.svg'

const icons = [
    { src: consultation, alt: 'Icon 1', style: 'top-10 left-5' },
    { src: notification, alt: 'Icon 2', style: 'top-5 right-5' },
    { src: calendar, alt: 'Icon 3', style: 'top-48 left-5' },
    { src: calendarPlus, alt: 'Icon 4', style: 'top-40 right-5' },
];

const Consultation = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x and opacity value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const opacityValue = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div ref={ref} className="py-8">
            <div className="relative max-w-6xl mx-auto p-6 rounded-lg">
                {/* Background Icons with Animation */}
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${icon.style}`}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.75, ease: 'easeInOut' }}
                    >
                        <Image src={icon.src} alt={icon.alt} width={40} height={40} />
                    </motion.div>
                ))}

                {/* Main Content */}
                <div className="flex py-5 overflow-hidden relative justify-center">
                    <motion.div
                        style={{ x: xValue, opacity: opacityValue }}
                        initial={{ opacity: 0 }} // Ensure it starts invisible
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className=""
                    >
                        <Image src={consult} alt='consult' className='py-6 z-10 md:h-auto h-28' />
                    </motion.div>
                    <h1 className='text-3xl font-bold absolute top-36'>Schedule Your Free Consultation</h1>
                </div>
                <p className="md:text-3xl text-xl md:text-center text-[#4C5267] md:py-2 py-5">
                    Choose from the available timeslots below to mark your calendar
                </p>
                <div className="grid md:grid-cols-2 gap-10 py-10">
                    <div className="text-left space-y-2">
                        <h2 className="text-6xl py-2 font-bold gradientText">BOOK <br /> NOW!</h2>
                        <p className=" text-xl font-medium py-3 text-[#4C5267]">
                            Scheduling a consultation with our team is fast and simple. Just pick a convenient time and book a meeting with one of our experts.
                        </p>
                        <p className="font-bold text-3xl py-3">30 Free Consultation</p>
                        <p className="flex gap-2 items-center">
                            <Image src={clock} alt='clock' />
                            <span className='text-[#4C5267] text-xl font-medium'> 30 Min</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Image src={video} alt='' className='pb-8' />
                            <span className='text-[#4C5267] text-xl font-medium'>Web conferencing details will be sent once your booking is confirmed.</span>
                        </p>
                    </div>

                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800">Select Date and Time</h3>
                        <div className="bg-white p-4 rounded-lg shadow mt-4">
                            <p>Calendar goes here</p> {/* Replace with your calendar component */}
                        </div>
                        <div className="mt-4 text-gray-600">
                            <p>Timezone</p>
                            <select className="mt-2 border border-gray-300 p-2 rounded-lg">
                                <option>Pakistan, Maldives Time (4:00am)</option>
                                {/* Other timezone options */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
