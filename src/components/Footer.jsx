import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#fafafa] dark:bg-[#101010] dark:text-white w-full">
            <div className="min-h-[8rem] max-w-screen-lg mx-auto container text-center flex justify-center items-center">
                <p className="text-md">
                    &copy; Edwardson Andrade Jr. {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
