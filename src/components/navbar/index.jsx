"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from '/public/assets/logo.svg';

const menuItems = [
    { label: "Home", url: "/" },
    {
        label: "Services",
        url: "/Services",
        items: [
            { title: "AI Development", url: "/" },
            { title: "Machine Learning", url: "/" },
            { title: "Chat Bots", url: "/" },
            { title: "Integrated Solutions", url: "/" },
            { title: "Custom Web Development", url: "/" },
            { title: "Mobile App Development", url: "/" },
        ],
    },
    { label: "About Us", url: "/about-us" },
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
            <nav className="flex justify-center lg:w-4/5 mx-auto px-2 py-2 items-start relative top-0 w-full z-20 text-black bg-transparent">
                <div className="flex items-center justify-center w-full">
                    <div className="hidden md:flex items-center">
                        {menuItems.slice(0, 3).map((item, i) => (
                            <div key={i} className="relative" onMouseLeave={() => setActiveLabel(null)}>
                                {item.items ? (
                                    <>
                                        <button
                                            onMouseEnter={() => setActiveLabel(item.label)}
                                            onClick={() => setActiveLabel(null)}
                                            className={`hover:scale-105 text-gray-700  text-base duration-300 transition-all py-3 px-5 flex items-center gap-2 ${activeLabel === item.label ? "text-black font-bold" : ""}`}
                                        >
                                            {item.label}
                                        </button>
                                        {activeLabel === item.label && (
                                            <div className="absolute w-72 bg-white shadow-lg rounded-2xl p-4 flex flex-col justify-center items-start">
                                                {item.items.map((menu, j) => (
                                                    <Link
                                                        className="hover:bg-green-500 hover:text-white w-full px-3 py-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                                        href={menu.url}
                                                        key={j}
                                                    >
                                                        {menu.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={item.url}>
                                        <button
                                            className={`hover:scale-105 text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(item.url)}`}
                                        >
                                            {item.label}
                                        </button>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center flex-shrink-0">
                        <Link href="/">
                            <Image src={logo} alt="Logo" className="" />
                        </Link>
                    </div>

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

                        <div className="flex items-center ml-8">
                            <Link href="/login" className="text-base font-medium text-gray-700 hover:scale-105 duration-300 transition-all">Sign in</Link>
                            <div className="mx-2">/</div>
                            <Link href="/signUp" className="text-base font-medium text-gray-700 hover:scale-105 duration-300 transition-all">Sign up</Link>
                        </div>
                    </div>

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

            {isModalOpen && (
                <>
                    <div className="w-full h-screen fixed blurBg left-0 top-0" onClick={closeModal}></div>
                    <div className="bg-white absolute left-0 w-full px-5 z-20 py-5 shadow-2xl transition-all duration-300">
                        <div className="flex flex-col items-start">
                            {menuItems.map((item, i) => (
                                <div key={i} className="relative">
                                    {item.items ? (
                                        <>
                                            <button
                                                onClick={() => (activeLabel ? setActiveLabel(null) : setActiveLabel(item.label))}
                                                className={`hover:scale-105 text-base font-medium text-textBlack hover:text-primary duration-300 transition-all py-3 flex items-baseline gap-2 ${activeLabel === item.label ? "bg-background" : ""}`}
                                            >
                                                {item.label}
                                            </button>
                                            {activeLabel === item.label && (
                                                <div className="absolute w-48 z-10 bg-white shadow-lg rounded-2xl p-2 flex flex-col gap-4 justify-center items-start">
                                                    {item.items.map((menu, j) => (
                                                        <Link href={menu.url} key={j}>
                                                            {menu.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={item.url}>
                                            <button
                                                className={`hover:scale-105 text-base font-medium text-textBlack hover:text-primary duration-300 transition-all py-3 flex items-baseline gap-2 ${isActive(item.url)}`}
                                            >
                                                {item.label}
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className="lg:flex items-center  mt-5">
                                <Link href="/login" className="text-base block py-3  rounded-xl font-medium text-black bg-secondary hover:scale-105 duration-300 transition-all">Login</Link>
                                <Link href="/signUp" className="text-base block py-3 rounded-xl font-medium bg-primary hover:scale-105 duration-300 transition-all">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
