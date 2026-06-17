import React, { useState } from 'react'
import logo from '../assets/bot_league_icon.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='relative bg-[#1A1919] w-full z-50'>
            <div className='flex justify-between items-center px-4 py-6 w-full max-w-9xl mx-auto'>
                <div>
                    <img src={logo} alt="logo" className='w-40 sm:w-48 md:w-55' />
                </div>

                {/* Desktop Navigation Links */}
                <div className='hidden md:flex gap-6 lg:gap-15 orbitron-normal text-[18px]'>
                    <a href="#events" className='hover:underline underline-offset-36 decoration-[#FF4C4C] hover:decoration-2 cursor-pointer'>Events</a>
                    <a href="#programs" className='hover:underline underline-offset-36 decoration-[#FF4C4C] hover:decoration-2 cursor-pointer'>Programs</a>
                    <a href="#community" className='hover:underline underline-offset-36 decoration-[#FF4C4C] hover:decoration-2 cursor-pointer'>Community</a>
                    <a href="#ranks" className='hover:underline underline-offset-36 decoration-[#FF4C4C] hover:decoration-2 cursor-pointer'>Ranks</a>
                </div>

                {/* Desktop Buttons */}
                <div className='hidden md:flex gap-2'>
                    <div className='border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer'>
                        Login
                    </div>
                    <div className='bg-[#FF4C4C] rounded-lg px-4 py-2 hover:bg-white hover:text-[#FF4C4C] transition-colors duration-200 cursor-pointer'>
                        Register Now
                    </div>
                </div>

                {/* Mobile Toggle Button */}
                <div className='md:hidden flex items-center'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-white hover:text-[#FF4C4C] p-2 focus:outline-none transition-colors duration-300'
                        aria-label='Toggle menu'
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer/Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-[#1A1919]/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                    }`}
            >
                <div className='px-6 py-6 flex flex-col gap-6 orbitron-normal text-center'>
                    <a
                        href="#events"
                        onClick={() => setIsOpen(false)}
                        className='text-lg text-white hover:text-[#FF4C4C] transition-colors duration-300 py-2'
                    >
                        Events
                    </a>
                    <a
                        href="#programs"
                        onClick={() => setIsOpen(false)}
                        className='text-lg text-white hover:text-[#FF4C4C] transition-colors duration-300 py-2'
                    >
                        Programs
                    </a>
                    <a
                        href="#community"
                        onClick={() => setIsOpen(false)}
                        className='text-lg text-white hover:text-[#FF4C4C] transition-colors duration-300 py-2'
                    >
                        Community
                    </a>
                    <a
                        href="#ranks"
                        onClick={() => setIsOpen(false)}
                        className='text-lg text-white hover:text-[#FF4C4C] transition-colors duration-300 py-2'
                    >
                        Ranks
                    </a>

                    <div className='h-px bg-gray-800 my-2'></div>

                    <div className='flex flex-col gap-3'>
                        <div
                            onClick={() => setIsOpen(false)}
                            className='w-full border border-white text-white rounded-lg py-3 hover:bg-white hover:text-black transition-all duration-200 text-center cursor-pointer'
                        >
                            Login
                        </div>
                        <div
                            onClick={() => setIsOpen(false)}
                            className='w-full bg-[#FF4C4C] text-white rounded-lg py-3 hover:bg-white hover:text-[#FF4C4C] border border-[#FF4C4C] hover:border-white transition-all duration-200 text-center cursor-pointer font-semibold'
                        >
                            Register Now
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar