import React from "react";
import youtubeIcon from "../assets/youtube.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

const quickLinksLeft = [
    { text: "The Arena", href: "#" },
    { text: "Episodes", href: "#" },
    { text: "National Rankings", href: "#" },
    { text: "Programs", href: "#" },
    { text: "Rulebooks", href: "#" }
];

const quickLinksRight = [
    { text: "Join the Team", href: "#" },
    { text: "Sponsorships", href: "#" },
    { text: "Help Center", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Legal", href: "#" }
];

const Footer = () => {
    return (
        <footer className="w-full bg-black py-12 px-6 sm:px-12 md:px-16 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col justify-start items-stretch">
                <div className="w-full h-px bg-neutral-800 mb-12 md:mb-16" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8 flex flex-col items-start w-full">
                        <h3 className="orbitron-bold text-white text-base sm:text-lg tracking-widest uppercase mb-6">
                            QUICK LINKS
                        </h3>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-3 w-full max-w-lg">
                            <div className="flex flex-col gap-3">
                                {quickLinksLeft.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer text-left"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                {quickLinksRight.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer text-left"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-start md:items-end w-full">
                        <h3 className="orbitron-bold text-white text-base sm:text-lg tracking-widest uppercase mb-6">
                            SOCIAL MEDIA
                        </h3>

                        <div className="flex items-center gap-6">
                            <a href="#" aria-label="YouTube" className="group">
                                <img
                                    src={youtubeIcon}
                                    alt="YouTube"
                                    className="w-12 h-12 object-contain filter grayscale brightness-200 group-hover:brightness-100 group-hover:scale-110 transition-all duration-200 cursor-pointer"
                                />
                            </a>
                            <a href="#" aria-label="Instagram" className="group">
                                <img
                                    src={instagramIcon}
                                    alt="Instagram"
                                    className="w-8 h-8 object-contain filter grayscale brightness-200 group-hover:brightness-100 group-hover:scale-110 transition-all duration-200 cursor-pointer"
                                />
                            </a>
                            <a href="#" aria-label="Facebook" className="group">
                                <img
                                    src={facebookIcon}
                                    alt="Facebook"
                                    className="w-8 h-8 object-contain filter grayscale brightness-200 group-hover:brightness-100 group-hover:scale-110 transition-all duration-200 cursor-pointer"
                                />
                            </a>
                            <a href="#" aria-label="Twitter" className="group">
                                <svg
                                    width="36"
                                    height="32"
                                    viewBox="0 0 51 45"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[36px] h-[32px] group-hover:scale-110 transition-all duration-200 cursor-pointer"
                                >
                                    <path
                                        d="M48.6581 8.98756C48.3944 9.95131 47.2222 12.3753 45.2295 14.6824C43.9108 40.032 19.2361 48.2677 2.32725 39.7692C0.0121652 36.7027 10.6791 37.9585 14.5767 32.0884C-0.163663 24.5828 1.00853 4.51926 3.96831 5.33698C10.9136 14.6532 22.108 15.5002 23.9249 14.6532C23.9249 12.5213 23.0164 7.87778 28.0569 3.99357C30.958 1.92005 37.0241 0.0801598 42.5041 6.00869C43.4419 6.62199 44.7899 6.88483 46.8119 6.44676C48.0134 5.83346 49.5959 6.24233 48.7754 8.37426L48.6581 8.98756Z"
                                        stroke="white"
                                        strokeOpacity="0.55"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:stroke-white group-hover:stroke-opacity-100 transition-all duration-200"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

