import React from "react";
import bot_league from "../assets/bot_league.png";

const pointsData = [
    {
        num: "1.",
        title: "STRUCTURED EVENTS",
        desc: '"From one-off events to a year-round competitive season."'
    },
    {
        num: "2.",
        title: "DIGITAL IDENTITY",
        desc: '"Your professional robotics legacy, tracked and verified."'
    },
    {
        num: "3.",
        title: "NATIONAL RANKING",
        desc: '"Benchmark your skills against the best engineers in India."'
    },
    {
        num: "4.",
        title: "CAREER PATHWAY",
        desc: '"Turning arena victories into real-world industry opportunities."'
    }
];

const Botleague = () => {
    return (
        <div className="relative w-full bg-[#1A1919] py-20 px-6 sm:px-12 md:py-28 md:px-16 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
                <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mb-16 text-left">
                    WHAT IS BOTLEAGUE?
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                        {pointsData.map((point, index) => (
                            <div key={index} className="flex flex-col items-start group">
                                <span className="text-[#FF4C4C] text-3xl sm:text-4xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                                    {point.num}
                                </span>
                                <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider uppercase mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-full p-4">
                            <img
                                src={bot_league}
                                alt="Botleague Schematic Graphic"
                                className="relative z-10 w-full object-contain filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Botleague;
