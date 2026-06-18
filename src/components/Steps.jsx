import React from "react";
import laTools from "../assets/la_tools.svg";
import tajMahal from "../assets/taj_mahal.svg";
import rankIcon from "../assets/rank.svg";
import peopleIcon from "../assets/people.svg";

const stepsData = [
  {
    step: "STEP 1",
    title: "BUILD YOUR TEAM",
    icon: laTools,
    alt: "Tools Icon"
  },
  {
    step: "STEP 2",
    title: "COMPETE ACROSS INDIA",
    icon: tajMahal,
    alt: "Taj Mahal Icon"
  },
  {
    step: "STEP 3",
    title: "EARN NATIONAL RANKING & VALUE",
    icon: rankIcon,
    alt: "Rank Icon"
  },
  {
    step: "STEP 4",
    title: "JOIN THE LEAGUE",
    icon: peopleIcon,
    alt: "People Icon"
  }
];

const Steps = () => {
  return (
    <div className="relative w-full bg-black py-16 px-6 sm:px-12 md:py-24 md:px-16 overflow-hidden">
      {/* Headers */}
      <div className="relative z-10 flex flex-col items-center text-center mb-16 md:mb-20">
        <h2 className="orbitron-semibold text-xs sm:text-sm md:text-base text-[#FF4C4C] tracking-[0.2em] uppercase">
          USER JOURNEY
        </h2>
        <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white tracking-[0.08em] leading-tight mt-3">
          YOUR PATH TO THE LEAGUE
        </h1>
        <p className="text-gray-500 font-medium text-xs sm:text-sm mt-3 tracking-wider max-w-md">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="relative z-10 max-w-5xl mx-auto hidden md:flex justify-between items-start mt-8">
        <div className="absolute h-[3.5px] bg-[#0022FF] top-[56px] left-[12.5%] right-[12.5%] z-0 shadow-[0_0_12px_rgba(0,34,255,0.6)]" />

        {stepsData.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center flex-1 z-10 group">
            <div className="w-28 h-28 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center relative transition-all duration-300 group-hover:scale-105 group-hover:border-neutral-700 shadow-lg cursor-pointer">
              <div className="w-[82%] h-[82%] rounded-full border-[3px] border-[#0022FF] bg-[#070707] flex items-center justify-center relative shadow-[inset_0_0_12px_rgba(0,34,255,0.4)] transition-all duration-300 group-hover:border-[#3B5CFF] group-hover:shadow-[inset_0_0_20px_rgba(0,34,255,0.6),0_0_15px_rgba(0,34,255,0.4)]">
                <img
                  src={step.icon}
                  alt={step.alt}
                  className="w-12 h-12 object-contain filter brightness-100 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="w-px h-10 bg-neutral-700 my-4 group-hover:bg-neutral-500 transition-colors duration-300" />

            {/* Step Content */}
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-[#FF4C4C] text-[13px] font-semibold tracking-widest uppercase mb-1">
                {step.step}
              </span>
              <h3 className="text-white text-xs md:text-sm font-bold tracking-wider uppercase max-w-[180px] leading-snug">
                {step.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout (< md) */}
      <div className="relative z-10 max-w-sm mx-auto md:hidden flex flex-col items-stretch pl-6 pr-4 mt-8">
        <div className="absolute left-[36px] top-[28px] bottom-[28px] w-[3px] bg-[#0022FF] z-0 shadow-[0_0_8px_rgba(0,34,255,0.5)]" />

        {stepsData.map((step, index) => (
          <div key={index} className="relative flex items-center gap-6 mb-10 last:mb-0 z-10 group">
            <div className="w-18 h-18 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <div className="w-[82%] h-[82%] rounded-full border-[2.5px] border-[#0022FF] bg-[#070707] flex items-center justify-center relative shadow-[inset_0_0_8px_rgba(0,34,255,0.3)]">
                <img
                  src={step.icon}
                  alt={step.alt}
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-[#FF4C4C] text-xs font-semibold tracking-widest uppercase">
                {step.step}
              </span>
              <h3 className="text-white text-sm font-bold tracking-wider uppercase mt-1 leading-tight text-left">
                {step.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
