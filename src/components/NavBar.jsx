import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { LuSun } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "contact",
        },
    ];
    return (
        <header className="w-full h-20 dark:bg-[#101010] dark:text-white px-4">
            <section className="h-full flex justify-end items-center max-w-screen-lg mx-auto">
                <nav className="flex h-full justify-center items-center">
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 text-lg cursor-pointer capitalize font-medium hover:text-[#08D9D6] duration-200"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {darkMode ? (
                        <button
                            onClick={() => toggleDarkMode()}
                            className="dark:text-white ml-2 text-lg"
                        >
                            <LuSun />
                        </button>
                    ) : (
                        <button
                            onClick={() => toggleDarkMode()}
                            className=" dark:text-white ml-2"
                        >
                            <BsFillMoonStarsFill />
                        </button>
                    )}

                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer pl-4 relative z-50 text-gray-500 md:hidden"
                    >
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>

                    {nav && (
                        <ul className="flex flex-col justify-center items-center z-20 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                >
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        to={link}
                                        smooth
                                        duration={500}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </section>
        </header>
    );
};

export default NavBar;
