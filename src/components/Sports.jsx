import React from "react";
import roboRace from "../assets/robo_race.jpg";
import lineFollower from "../assets/robo_line.jpg";
import rcRacing from "../assets/rc_racing.jpg";
import fpvDrone from "../assets/drone.jpg";
import roboHockey from "../assets/robo_hockey.jpg";
import roboWar from "../assets/robo_war.jpg";
import compBg from "../assets/competition_bg.png";

const disciplinesData = [
  {
    title: "Robo Race",
    image: roboRace,
    alt: "Robo Race Image"
  },
  {
    title: "Line Follower",
    image: lineFollower,
    alt: "Line Follower Image"
  },
  {
    title: "RC Racing",
    image: rcRacing,
    alt: "RC Racing Image"
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: fpvDrone,
    alt: "FPV Drone Racing & Aeromodelling Image"
  },
  {
    title: "Robo Hockey",
    image: roboHockey,
    alt: "Robo Hockey Image"
  },
  {
    title: "Robo War",
    image: roboWar,
    alt: "Robo War Image"
  }
];

const Sports = () => {
  return (
    <div className="relative w-full bg-black py-20 px-6 sm:px-12 md:py-28 md:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <h2 className="orbitron-semibold text-xs sm:text-sm md:text-base text-[#FF4C4C] tracking-[0.2em] uppercase">
            SPORTS
          </h2>
          <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mt-2">
            COMPETITION DISCIPLINES
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplinesData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-[#1E1E1E]/40 hover:border-[#FF4C4C] hover:shadow-[0_0_20px_rgba(255,76,76,0.15)] hover:scale-[1.03] transition-all duration-300 group cursor-pointer z-10"
            >
              <div className="relative overflow-hidden w-full h-[180px] sm:h-[200px]">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="py-4 px-6 bg-[#181818]/90 border-t border-neutral-800 flex justify-center items-center text-center h-[76px]">
                <span className="font-semibold text-lg sm:text-lg text-white tracking-wide">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
          <div className="col-span-2 relative hidden lg:flex justify-end items-center w-full h-full rounded-2xl overflow-hidden bg-black/30 z-0">
            <img
              src={compBg}
              alt="Circuit Decorative Background"
              className="absolute right-0 bottom-0 h-full object-contain opacity-40 mix-blend-screen object-bottom-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
