'use client'

import Image from 'next/image'
import React from 'react'
import clients from '/public/assets/clients.svg'
import { motion } from 'framer-motion';

const Clients = () => {
    return (
        <>
            <div className="">
                {/* <div className="flex py-5 relative justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.9 }}
                        className=""
                    >
                        <Image src={clients} alt='' className='py-6 z-10 h-52 ' />
                    </motion.div>
                    <h1 className='text-3xl font-bold absolute top-28'>Who our Clients are?</h1>
                </div> */}
            </div>
        </>
    )
}

export default Clients