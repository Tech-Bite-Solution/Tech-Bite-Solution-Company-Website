
'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import team from '/public/assets/team.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import waleed from '/public/assets/waleed.PNG'
import hamad from '/public/assets/hamad.jpg'


const TeamSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const xValue = useTransform(scrollYProgress, [0, 1], [900, -1200]);

    const cardData = [
        {
            id: 1,
            name: 'Waleed Akram',
            title: 'Chief Executive Officer',
            message:
                'At Tech Bite Solution, we have a skilled team to drive business success through strategic planning, custom software development, and brand design. Our goal is to help businesses thrive in the digital landscape by enhancing efficiency, security, and user experience.',
            imageUrl: waleed,
            linkedin: 'https://www.linkedin.com/in/waleed-akram-879827189/',
            email: 'waleedakram288@gmail.com',
        },
        {
            id: 2,
            name: 'Hammad Tariq',
            title: 'Chief Technology Officer',
            message:
                "It's not only about building modern interfaces but providing a solution that aligns with the business goals and helps optimize the operations for becoming future-proof and lead the industry in your own way.",
            imageUrl: hamad,
            linkedin: 'https://www.linkedin.com/in/mirzahammadtariq/',
            email: 'hammadt451@gmail.com',
        },
    ];

    return (
        <div id='portfolio' ref={ref} className="md:py-10">
            <div className="flex py-5 overflow-hidden relative justify-center">
                <motion.div
                    style={{ x: xValue }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={team} alt="team" className="py-6 md:h-auto h-28" />
                </motion.div>
                <h1 className="text-3xl font-bold absolute top-16 md:top-36">Our Team</h1>
            </div>
            <div className="px-4 py-8 md:grid-cols-2 grid grid-cols-1 max-w-6xl md:mx-auto">
                {cardData.map((card) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-2"
                    >
                        <div role="listitem" className="relative lg:mt-32 mt-20 mb-32">
                            <div className="rounded overflow-hidden lg:h-80 shadow-md bg-white" style={{ boxShadow: '0 4px 10px #3BDB00' }}>
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-36 w-36">
                                        <Image
                                            src={card.imageUrl}
                                            alt={`Display Picture of ${card.name}`}
                                            className="rounded-full object-cover h-full w-full shadow-lg"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <h1 className="font-bold text-2xl text-center gradientText mb-1">{card.name}</h1>
                                    <p className="text-gray-800 text-sm text-center">{card.title}</p>
                                    <p className="text-center lg:h-32 text-gray-600 text-base px-4 pt-3 font-normal">
                                        {card.message}
                                    </p>
                                    <div className="w-full flex justify-center py-6 gap-5">
                                        <a href={card.linkedin} className="" target="_blank" rel="noopener noreferrer">
                                            <div aria-label="LinkedIn" className='text-gray-500' role="img">
                                                <IoLogoLinkedin size={28} />
                                            </div>
                                        </a>
                                        <a href={`mailto:${card.email}`} className="">
                                            <div aria-label="Email" className='text-gray-500' role="img">
                                                <MdOutlineMailOutline size={28} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
