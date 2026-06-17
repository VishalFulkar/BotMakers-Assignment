import React from "react";
import bg from "../assets/main_bg.png";

const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] md:h-[88vh] min-h-[600px] bg-black overflow-hidden flex items-center">
            {/* Background Image Container - shifted to the right on desktop */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-[80%] lg:w-[72%] h-full">
                <div
                    style={{ backgroundImage: `url(${bg})` }}
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                />
                {/* Gradients to blend the image into the black background */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/1 to-transparent md:block hidden" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent md:hidden block" />
            </div>

            {/* Live Badge (Top Right) */}
            <div className="absolute top-6 right-6 md:right-12 z-20 flex items-center gap-2 bg-[#1A1919]/90 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-1.5 text-xs md:text-sm orbitron-normal text-white shadow-lg">
                <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF4C4C] animate-pulse"></span>
                    <span className="text-[#FF4C4C] font-semibold text-[11px] md:text-xs tracking-wider uppercase">LIVE :</span>
                </span>
                <span className="text-gray-300 text-[11px] md:text-xs">Episode 14 • Bengaluru Regionals</span>
                <a href="#live" className="text-[#FF4C4C] hover:text-white transition-colors duration-200 font-semibold text-[11px] md:text-xs border-l border-gray-800 pl-2 ml-1 tracking-wider uppercase">
                    WATCH LIVE
                </a>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-center items-start text-left">
                <div className="max-w-3xl">
                    <h1 className="orbitron-bold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white tracking-wider leading-[1.15]">
                        INDIA'S ULTIMATE <br />
                        <span className="text-white">ROBOTICS ARENA</span>
                    </h1>

                    <p className="mt-4 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                        Build. Compete. Rank. The National <br className="hidden sm:inline" />
                        Ecosystem for Robotics Arena.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 md:mt-10 flex flex-wrap gap-4 text-xs md:text-sm">
                        <div className="uppercase bg-linear-to-r from-[#FF4C4C] to-[#992E2E] hover:from-white hover:to-[#efefef] hover:text-[#FF4C4C] text-white rounded px-6 py-3.5 transition-all duration-300 cursor-pointer tracking-wider font-semibold shadow-lg shadow-[#FF4C4C]/10">
                            Create Account
                        </div>
                        <div className="uppercase border border-white/60 hover:border-white rounded px-6 py-3.5 hover:bg-white hover:text-black text-white transition-all duration-300 cursor-pointer tracking-wider font-semibold">
                            Explore Events
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;