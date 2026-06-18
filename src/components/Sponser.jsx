import React from "react";
import nitDelhiIcon from "../assets/nit_delhi_icon.png";
import indianBitIcon from "../assets/indian_bit.png";
import nitSilcharIcon from "../assets/nit_silchar_icon.png";
import delhiveryIcon from "../assets/delhivery_icon.png";
import iitBombayIcon from "../assets/iit_bombay_icon.png";
import generalRoboticsIcon from "../assets/general_robotics.png";

const sponsorsList = [
    {
        name: "NIT DELHI",
        logo: nitDelhiIcon
    },
    {
        name: "INDIAN BIT",
        logo: indianBitIcon
    },
    {
        name: "NIT SILCHAR",
        logo: nitSilcharIcon
    },
    {
        name: "ROBO COMPANY",
        logo: delhiveryIcon
    },
    {
        name: "IIT BOMBAY",
        logo: iitBombayIcon
    },
    {
        name: "ROBO COMPANY",
        logo: generalRoboticsIcon
    }
];

const Sponser = () => {
    return (
        <div className="relative w-full bg-black py-16 px-6 sm:px-12 md:py-24 md:px-16 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
                <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mb-16 text-left">
                    SPONSORS
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16 items-center">
                    {sponsorsList.map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 sm:gap-6 justify-start group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <div className="w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center shrink-0">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    className="w-full h-full object-contain filter grayscale brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                            <span className="orbitron-bold text-white text-base sm:text-lg lg:text-xl tracking-widest font-bold uppercase transition-colors duration-300 group-hover:text-[#FF4C4C]">
                                {sponsor.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponser;
