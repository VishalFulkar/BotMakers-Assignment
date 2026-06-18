import React from "react";

const joinOptions = [
    {
        title: "BECOME IN JUDGE"
    },
    {
        title: "VOLUNTEER"
    },
    {
        title: "COMMUNITY MEMBER"
    }
];

const Join = () => {
    return (
        <div className="relative w-full bg-black py-20 px-6 sm:px-12 md:py-28 md:px-16 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start items-stretch">
                <h1 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.08em] uppercase mb-16 text-left">
                    JOIN THE ECOSYSTEM
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {joinOptions.map((option, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-2xl border border-neutral-800 bg-[#1E1E1E]/40 p-8 hover:border-[#FF4C4C]/50 hover:shadow-[0_0_20px_rgba(255,76,76,0.08)] transition-all duration-300 group"
                        >
                            <h2 className="orbitron-bold text-lg sm:text-xl text-white tracking-widest uppercase mb-8 leading-tight">
                                {option.title}
                            </h2>
                            <form className="flex flex-col w-full gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#131313]/90 text-white placeholder-neutral-600 border border-neutral-800 focus:border-[#FF4C4C]/60 focus:outline-none rounded-xl py-3 px-4 text-sm sm:text-base font-medium transition-colors duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full bg-[#131313]/90 text-white placeholder-neutral-600 border border-neutral-800 focus:border-[#FF4C4C]/60 focus:outline-none rounded-xl py-3 px-4 text-sm sm:text-base font-medium transition-colors duration-200"
                                />
                                <input
                                    type="text"
                                    placeholder="Enroll"
                                    className="w-full bg-[#131313]/90 text-white placeholder-neutral-600 border border-neutral-800 focus:border-[#FF4C4C]/60 focus:outline-none rounded-xl py-3 px-4 text-sm sm:text-base font-medium transition-colors duration-200"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#FF4C4C] hover:bg-[#ff3b3b] text-white font-bold py-3.5 px-6 rounded-xl uppercase tracking-widest text-sm transition-all duration-200 mt-4 cursor-pointer hover:shadow-[0_0_15px_rgba(255,76,76,0.3)] active:scale-[0.98]"
                                >
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Join;
