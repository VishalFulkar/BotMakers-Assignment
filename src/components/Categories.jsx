import React from "react";
import miniMaker from "../assets/mini_maker.svg";
import innovation from "../assets/innovation.svg";
import enginner from "../assets/enginner.svg";
import mindsBitcoin from "../assets/minds_bitcoin.svg";

const categoriesData = [
  {
    title1: "MINI",
    title2: "MAKERS",
    desc: "Where Creativity Meets Logic.",
    icon: miniMaker,
    alt: "Mini Makers Icon",
    isActive: false
  },
  {
    title1: "JUNIOR",
    title2: "INNOVATORS",
    desc: "Engineering & Strategy Fundamentals.",
    icon: innovation,
    alt: "Junior Innovators Icon",
    isActive: false
  },
  {
    title1: "YOUNG",
    title2: "ENGINEERS",
    desc: "Advanced Wireless & Autonomous Control.",
    icon: enginner,
    alt: "Young Engineers Icon",
    isActive: false
  },
  {
    title1: "ROBO",
    title2: "MINDS",
    desc: "Elite Professional Sports & Robotics.",
    icon: mindsBitcoin,
    alt: "Robo Minds Icon",
    isActive: false
  }
];

const Categories = () => {
  return (
    <div className="relative w-full bg-[#1A1919] py-20 px-6 sm:px-12 md:py-28 md:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
        <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mb-16 text-left">
          CATEGORIES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((card, index) => {
            const cardBgStyle = card.isActive
              ? "bg-[#221F16]/50 border-[#FFC702] shadow-[0_0_25px_rgba(255,199,2,0.12)]"
              : "bg-[#ffffff]/5 border-[#ffffff]/30 hover:border-[#FFC702] hover:bg-[#221F16]/40 hover:shadow-[0_0_25px_rgba(255,199,2,0.12)]";

            return (
              <div
                key={index}
                className={`relative w-full border rounded-2xl p-8 flex flex-col justify-between items-start min-h-[350px] transition-all duration-300 hover:scale-[1.03] group cursor-pointer z-10 ${cardBgStyle}`}
              >
                <div className="flex flex-col items-start w-full">
                  <div className="mb-6 w-16 h-16 flex items-center justify-start">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className="w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(255,199,2,0.15)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="orbitron-bold text-xl sm:text-2xl text-white tracking-widest uppercase mb-3 leading-[1.2]">
                    {card.title1}
                    <br />
                    {card.title2}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {card.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#FF4C4C] text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer hover:text-white transition-colors duration-200 mt-auto pt-4 w-full">
                  <span>LEARN MORE</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
