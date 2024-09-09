"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import tbite from '/public/assets/tbite.png';

const menuItems = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "About Us", url: "/about-us" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Industries", url: "/industries" },
    { label: "Contact", url: "/contactUs" },
];

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeLabel, setActiveLabel] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        closeModal();
    }, [pathname]);

    const isActive = (path) => (pathname === path ? "text-black font-bold" : "");

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full px-5">
            <nav className="flex lg:justify-center 2xl:w-full lg:w-4/5 mx-auto px-2 py-2 items-center relative top-0 w-full z-20 text-black bg-transparent">
                <div className="flex items-center justify-between w-full">
                    {/* First Three Buttons */}
                    <div className="hidden md:flex items-center">
                        {menuItems.slice(0, 3).map((item, i) => (
                            <Link href={item.url} key={i}>
                                <button
                                    className={`hover:scale-105 text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(item.url)}`}
                                >
                                    {item.label}
                                </button>
                            </Link>
                        ))}
                    </div>

                    {/* Logo in the Center */}
                    <div className="flex justify-center md:w-96 flex-shrink-0">
                        <Link href="/">
                            <Image src={tbite} alt="Logo" className="md:w-full w-28" />
                        </Link>
                    </div>

                    {/* Last Three Buttons */}
                    <div className="hidden md:flex items-center">
                        {menuItems.slice(3).map((item, i) => (
                            <Link href={item.url} key={i}>
                                <button
                                    className={`hover:scale-105 text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(item.url)}`}
                                >
                                    {item.label}
                                </button>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={handleModal} className="md:hidden block text-secondary">
                        {isModalOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isModalOpen && (
                <>
                    <div className="w-full h-screen fixed bg-black bg-opacity-50 left-0 top-0" ></div>
                    <div onClick={closeModal} className="bg-white absolute left-0 w-full px-5 z-20 py-5 shadow-2xl transition-all duration-300">
                        <div className="flex flex-col items-start">
                            {menuItems.map((item, i) => (
                                <Link href={item.url} key={i}>
                                    <button
                                        className={`hover:scale-105 text-base font-medium text-black hover:text-primary duration-300 transition-all py-3 flex items-baseline gap-2 ${isActive(item.url)}`}
                                    >
                                        {item.label}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
