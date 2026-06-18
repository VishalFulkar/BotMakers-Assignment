import React from "react";
import awardIcon from "../assets/award.svg";
import gavelIcon from "../assets/gavel.svg";
import briefcaseIcon from "../assets/breifcase.svg";
import boltIcon from "../assets/bolt.svg";
import leaderboardImg from "../assets/leaderboard.png";

const benefitsData = [
  {
    title: "NATIONAL RECOGNITION",
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
    icon: awardIcon,
    alt: "National Recognition Icon"
  },
  {
    title: "FAIR JUDGING",
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
    icon: gavelIcon,
    alt: "Fair Judging Icon"
  },
  {
    title: "CAREER OPS",
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
    icon: briefcaseIcon,
    alt: "Career Ops Icon"
  },
  {
    title: "HIGH - ENERGY ECO",
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
    icon: boltIcon,
    alt: "High Energy Eco Icon"
  }
];

const WhyRegister = () => {
  return (
    <div className="relative w-full bg-[#1A1919] py-20 px-6 sm:px-12 md:py-28 md:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
        <div className="flex flex-col items-start mb-16">
          <h2 className="orbitron-semibold text-xs sm:text-sm md:text-base text-[#FF4C4C] tracking-[0.2em] uppercase">
            WHY REGISTER ?
          </h2>
          <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mt-2">
            THE LEAGUE ADVANTAGE
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-10">
            {benefitsData.map((item, index) => (
              <div key={index} className="flex items-start gap-5 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-full p-4">
              <img
                src={leaderboardImg}
                alt="Leaderboard Preview Graphic"
                className="relative z-10 w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
