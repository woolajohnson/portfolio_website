import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
    return (
        <main
            name="contact"
            className="min-h-screen dark:bg-slate-900 bg-white"
        >
            <article className="flex px-4 justify-between items-center min-h-screen max-w-screen-lg mx-auto">
                <section className="px-5 w-full">
                    <h2 className=" text-3xl font-semibold mb-12 dark:text-white underline underline-offset-8">
                        Contact me
                    </h2>
                    <div className=" mx-auto max-w-[30rem] bg-[#101010] text-white dark:bg-[#fafafa] dark:text-black flex flex-col justify-center rounded-lg shadow-xl gap-6 px-5 sm:px-10 md:px-20 py-6 md:py-10">
                        <div>
                            <div className="flex items-center gap-2 text-lg">
                                <MdEmail />
                                <h4>E-mail</h4>
                            </div>

                            <p className="text-gray-400">
                                edward.andrade27@gmail.com
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-lg">
                                <FaMobileAlt />
                                <h4>Mobile Number</h4>
                            </div>

                            <p className="text-gray-400">09978705634</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-lg">
                                <BsFillPeopleFill />
                                <h4>Socials</h4>
                            </div>

                            <div className="mt-3">
                                <a
                                    className="py-2 px-4 bg-white text-black dark:bg-[#101010] dark:text-white rounded mr-2 font-semibold shadow-md"
                                    href="https://github.com/woolajohnson"
                                    target="_blank"
                                >
                                    <FaGithub className=" inline-block mr-1" />
                                    Github
                                </a>

                                <a
                                    className="py-2 px-4 bg-white text-blue-600 dark:bg-blue-600 dark:text-white rounded mr-2 font-semibold shadow-md"
                                    href="https://www.linkedin.com/in/edwardson-andrade-jr/"
                                    target="_blank"
                                >
                                    <FaLinkedin className=" inline-block mr-1" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            <Footer />
        </main>
    );
};

export default Contact;
