import React from "react";
import FlavorFinds from "../assets/images/flavorfinds.png";
import TaskLogger from "../assets/images/tasklogger.png";
import Chatroom from "../assets/images/chatroom.png";
import OnePunch from "../assets/images/onepunch.png";

const Projects = () => {
    const projectImages = [
        {
            id: 1,
            src: FlavorFinds,
            alt: "FlavorFinds",
            title: "FlavorFinds",
            stack: "React, Tailwind, Laravel, InertiaJS",
            demo: "https://youtu.be/Y0O-4IaqYYM",
            code: "https://github.com/woolajohnson/flavorfinds_capstone",
        },
        {
            id: 2,
            src: TaskLogger,
            alt: "Task Logger",
            title: "Dynamic Task Logger",
            stack: "React, Tailwind",
            demo: "https://youtu.be/PzngQnHkBiA",
            code: "https://github.com/woolajohnson/ReactJS-Projects/tree/main/task_logger",
        },
        {
            id: 3,
            src: Chatroom,
            alt: "Chatroom",
            title: "Chatroom App",
            stack: "NodeJS, ExpressJS, Socket.io",
            demo: "https://youtu.be/-HcfahJ4S8k",
            code: "https://github.com/woolajohnson/Javascript-Track/tree/main/chatroom",
        },
        {
            id: 4,
            src: OnePunch,
            alt: "React Bootstrap",
            title: "React-Bootstrap App",
            stack: "Tech Stack - Reactjs, React-Bootstrap",
            demo: "https://github.com/woolajohnson/flavorfinds_capstone",
            code: "https://github.com/woolajohnson/flavorfinds_capstone",
        },
    ];
    return (
        <main name="projects" className="min-h-screen dark:bg-[#101010] pt-20">
            <article className="px-4 py-2 max-w-screen-lg mx-auto">
                <h2 className=" text-3xl font-semibold px-5 mb-12 underline underline-offset-8 dark:text-white">
                    Projects
                </h2>
                <section className="grid grid-cols-1 gap-8 md:grid-cols-2 px-8 md:px-20 lg:px-28 py-4 md:gap-10 lg:gap-16 mb-11">
                    {projectImages.map(
                        ({ id, src, alt, title, stack, demo, code }) => {
                            return (
                                <div
                                    key={id}
                                    className="shadow-lg hover:scale-105 duration-1000 bg-white border border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <h4 className="text-center text-white bg-[#101010] py-3 text-xl font-semibold">
                                        {title}
                                    </h4>
                                    <img loading="lazy" src={src} alt={alt} />

                                    <div className="flex flex-col justify-between items-center py-4">
                                        <h4 className="p-4 text-lg font-semibold text-center">
                                            {stack}
                                        </h4>
                                        <div className="flex justify-center gap-4">
                                            <a
                                                href={demo}
                                                target="_blank"
                                                className="py-2 px-5 bg-[#101010] text-white rounded-md hover:bg-slate-800 duration-300"
                                            >
                                                Demo
                                            </a>
                                            <a
                                                href={code}
                                                target="_blank"
                                                className="py-2 px-5 bg-[#101010] text-white rounded-md hover:bg-slate-800 duration-300"
                                            >
                                                View code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </section>
            </article>
        </main>
    );
};

export default Projects;
