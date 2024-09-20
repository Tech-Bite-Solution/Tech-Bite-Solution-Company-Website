'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import treva from '/public/assets/treva.png'
import tower from '/public/assets/tower.png'
import snow from '/public/assets/snow.png'
import power from '/public/assets/power.png'
import docker from '/public/assets/docker.png'
import azure from '/public/assets/azure.jpg'
import aws from '/public/assets/aws.jpg'
import algolia from '/public/assets/algolia.jpg'
import Image from 'next/image';


const icons = [
    { src: algolia, alt: 'Icon 1', style: 'top-5 left-20' },
    { src: aws, alt: 'Icon 2', style: 'top-5 right-40' },
    { src: azure, alt: 'Icon 3', style: 'top-48 left-24' },
    { src: docker, alt: 'Icon 4', style: 'top-20 right-20' },
    { src: snow, alt: 'Icon 5', style: 'top-20 left-40' },
    { src: power, alt: 'Icon 6', style: 'top-64 left-48' },
    { src: tower, alt: 'Icon 7', style: 'top-44 right-36' },
    { src: treva, alt: 'Icon 8', style: 'top-60 right-60' },
];

const HeroSection = () => {
    const ref = useRef(null);

    return (
        <>
            <div ref={ref} className="lg:py-16 py-5">
                <div className="relative md:block hidden">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${icon.style}`}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.75, ease: 'easeInOut' }}
                        >
                            <Image src={icon.src} alt={icon.alt} width={50} height={50} className='' />
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div data-aos="fade-right" className="max-w-4xl px-2 py-12 mx-auto">
                        <p className='md:text-5xl text-3xl py-5 font-bold text-center '>Your Partner in cutting edge <span className='gradientText'> software development</span></p>
                        <p className='font-medium py-6 text-center'>Empowering Industries with Scalable Solutions.
                            Transform your business operations with tailored software solutions that streamline processes, enhance efficiency, and drive growth.
                        </p>
                        <p className='font-medium text-center'>
                            Bites of Business for your Business
                        </p>
                    </div>
                    <a href='#meeting' className='bggradient block px-6 lg:px-16 hover:scale-105 transition-all duration-300 py-3 rounded-full text-center font-semibold'>Get Quote</a>
                </div>
            </div>
        </>
    )
}

export default HeroSection