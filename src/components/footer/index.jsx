import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import flogo from '/public/assets/flogo.svg'
import call from "/public/assets/call.svg";
import email from "/public/assets/email.svg";

const Footer = () => {
    return (
        <>
            <div className="bg-black ">
                <div className="px-10 mx-auto">
                    <footer className="text-white">
                        <div className="py-10 grid grid-cols-1 md:grid-cols-4">
                            {/* Logo and Description */}
                            <div className="flex flex-col justify-center items-start">
                                <div className="flex items-center">
                                    <Image src={flogo} alt="Tech-Bite Solution" className="" />
                                </div>
                                <p className='text-sm font-medium'>Shaping technology for the future</p>
                            </div>
                            {/* Services */}
                            <div>
                                <h3 className="gradientText py-3 font-bold">Services</h3>
                                <ul className="space-y-2">
                                    <li className='text-[#77808B]'>Web App Development</li>
                                    <li className='text-[#77808B]'>Mobile App Development</li>
                                    <li className='text-[#77808B]'>SaaS Development</li>
                                    <li className='text-[#77808B]'>CMS Development</li>
                                    <li className='text-[#77808B]'>Openai Integration</li>
                                    <li className='text-[#77808B]'>UI/UX Design</li>
                                </ul>
                            </div>
                            {/* Services and Contact Info */}
                            <div className="">
                                {/* Contact Info */}
                                <div>
                                    <h3 className="font-bold py-3 gradientText">Contact</h3>
                                    <div className="space-y-2">
                                        <p className='text-[#77808B] text-sm flex items-center'><Image src={call} alt='' className='h-5' />+1 386-688-3295 </p>
                                        <p className='text-[#77808B] text-sm flex items-center gap-2'><Image src={email} alt='' className='h-5' />Ourstore@hello.com</p>
                                    </div>
                                    <h3 className="gradientText font-bold py-2 ">Our Social Media</h3>
                                    <div className="space-y-2">
                                        <p className='text-[#77808B]'>Instagram</p>
                                        <p className='text-[#77808B]'>Facebook</p>
                                        <p className='text-[#77808B]'>Twitter</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Subscription */}
                            <div className="space-y-3">
                                <h3 className="gradientText  font-semibold">Talk to a consultant</h3>
                                <p className='text-[#77808B] text-base'>Your Email</p>
                                <div className="flex space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="p-2 rounded-lg placeholder:text-xs focus:outline-none text-black"
                                    />
                                    <button className="bggradient hover:bg-green-600 font-semibold text-white px-6 rounded-lg">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex md:flex-row gap-3 flex-col items-center py-5  justify-between text-center text-white">
                            <div className="text-sm">
                                <p>© 2024 All Rights Reserved</p>
                            </div>
                            <ul className="flex text-sm justify-center space-x-4">
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Cookies</li>
                            </ul>
                            <ul className="flex text-center gap-5">
                                <li className='bg-white flex cursor-pointer justify-center text-black items-center w-6 h-6 rounded-full'><FaInstagram /></li>
                                <li  className='bg-white flex justify-center cursor-pointer text-black items-center w-6 h-6 rounded-full'><FaFacebookF /></li>
                                <li  className='bg-white flex justify-center cursor-pointer text-black items-center w-6 h-6 rounded-full'><FaTwitter /></li>
                                <li  className='bg-white flex justify-center cursor-pointer text-black items-center w-6 h-6 rounded-full'><FaYoutube /></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer