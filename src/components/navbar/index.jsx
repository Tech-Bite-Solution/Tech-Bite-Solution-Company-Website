"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import tbite from "/public/assets/tbite.png";
import { DownArrow } from "../../app/svg/index";
import { categories } from "./data";

const menuItems = [
    { label: "Home", url: "#" },
    { label: "Services", url: "#services" },
    { label: "About Us", url: "#about-us" },
    { label: "Portfolio", url: "#portfolio" },
    { label: "Industries", url: "#industries" },
    { label: "Contact", url: "#contact" },
];


const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
    const pathname = usePathname();

    const sectionRefs = useRef(menuItems.map(() => React.createRef())); // Create refs for each section

    useEffect(() => {
        closeModal();
    }, [pathname]);

    const isActive = (url) => (activeSection === url ? "text-black font-bold" : "");

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Detect scroll and toggle shadow
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Intersection Observer to detect which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.7 } // 70% of the section must be visible
        );

        sectionRefs.current.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <div
            className={`w-full sticky z-30 top-0 left-0 right-0 bg-white transition-all duration-400 ease-out ${hasShadow ? "shadow-lg" : "shadow-none"
                }`}
        >
            <nav className="flex lg:justify-center 2xl:w-full lg:w-4/5 mx-auto px-2 py-4 items-center relative top-0 w-full z-20 text-black bg-transparent">
                <div className="flex items-center justify-between w-full">
                    {/* First Three Buttons */}
                    <div className="hidden md:flex items-center">
                        {menuItems.slice(0, 3).map((item, i) => (
                            <a href={item.url} key={i}>
                                <button
                                    className={`hover:scale-105 text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(
                                        item.url
                                    )}`}
                                >
                                    {item.label}
                                </button>
                            </a>
                        ))}

                        {/* Category Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className={`text-base text-gray-700 hover:scale-105 hover:text-[#3BDB00] duration-300 transition-all bg-background py-2 px-4 rounded-full flex items-center gap-2`}
                            >
                                Products <DownArrow />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute  top-full grid lg:grid-cols-3 grid-cols-1  lg:w-[900px] w-56 p-5 bg-white shadow-lg rounded-lg z-50">
                                    {categories.map((category, index) => (
                                        <div key={index} className="p-2">
                                            <div className="text-[#3BDB00] font-semibold">
                                                {category.category}
                                            </div>
                                            <ul className="pl-4 pt-2">
                                                {category.services.map((service, i) => (
                                                    <li key={i} className="hover:text-[#3BDB00] text-sm ">
                                                        <a href="#"><span className="text-[#3BDB00] font-medium">{i + 1}.</span> {service}</a>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Logo in the Center */}
                    <div className="flex justify-center md:w-96 flex-shrink-0">
                        <Link href="/">
                            <Image src={tbite} alt="Logo" className="w-36" />
                        </Link>
                    </div>

                    {/* Last Three Buttons */}
                    <div className="hidden md:flex items-center">
                        {menuItems.slice(3).map((item, i) => (
                            <a href={item.url} key={i}>
                                <button
                                    className={`hover:scale-105 text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(
                                        item.url
                                    )}`}
                                >
                                    {item.label}
                                </button>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={handleModal} className="md:hidden z-50 block text-black">
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

            {/* Mobile Menu Modal */}
            {isModalOpen && (
                <div
                    className="fixed top-20 left-0 w-full h-screen bg-white z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="flex flex-col gap-4">
                        {menuItems.map((item, i) => (
                            <a href={item.url} key={i} onClick={closeModal}>
                                <button
                                    className={`text-base text-gray-700 hover:text-primary duration-300 transition-all py-3 px-5 flex items-baseline gap-2 ${isActive(
                                        item.url
                                    )}`}
                                >
                                    {item.label}
                                </button>
                            </a>
                        ))}
                        {/* Category Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className={`text-base text-gray-700 hover:scale-105 hover:text-[#3BDB00] duration-300 transition-all bg-background py-2 px-4 rounded-full flex items-center gap-2`}
                            >
                                Products <DownArrow />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute  top-full grid lg:grid-cols-3 grid-cols-1  lg:w-[900px] w-56 p-5 bg-white shadow-lg rounded-lg z-50">
                                    {categories.map((category, index) => (
                                        <div key={index} className="p-2">
                                            <div className="text-[#3BDB00] font-semibold">
                                                {category.category}
                                            </div>
                                            <ul className="pl-4">
                                                {category.services.map((service, i) => (
                                                    <li key={i} className="hover:text-[#3BDB00]">
                                                        <a href="#"><span className="text-[#3BDB00] font-medium">{i + 1}.</span> {service}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
