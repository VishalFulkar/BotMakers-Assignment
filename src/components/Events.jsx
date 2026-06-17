import React from 'react'

const Events = () => {
    return (
        <div className='relative w-full min-h-[85vh] bg-[#131313] overflow-hidden py-16 px-6 md:px-12 flex flex-col justify-start items-center'>
            {/* Ambient Brown Glow in the Background */}
            <div
                className="absolute top-[-20%] right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#5f2f2f] opacity-40 blur-[120px] md:blur-[160px] pointer-events-none z-0"
            />
            <div
                className="absolute top-[30%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#5F2F2F] opacity-40 blur-[120px] md:blur-[160px] pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-7xl w-full">
                {/* Title */}
                <h2 className="orbitron-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mb-12 uppercase text-left">
                    Competitions & Events
                </h2>

                {/* Columns Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {/* Live Now Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="orbitron-semibold text-lg md:text-xl text-[#FF4C4C] tracking-widest uppercase">
                            Live Now
                        </h3>
                        <div className="min-h-[450px] bg-[#181818] border border-[#45454584] rounded-xl p-6 shadow-xl flex flex-col justify-between overflow-x-auto">
                            {/* Header */}
                            <div className="text-xl">
                                <div className='flex items-center justify-between'>
                                    <h1 className='font-semibold text-white'>Bengaluru Regionals</h1>
                                    <h3 className='bg-[#FF4C4C] text-xs text-white px-2 py-0.5 rounded font-sans'>Ongoing</h3>
                                </div>
                                <div className='text-[18px] text-gray-500 mt-1'>
                                    Lorem Ipsum
                                </div>
                            </div>
                            <hr className="h-px my-4 bg-gray-700 border-0" />

                            {/* Tournament Bracket Graph Container */}
                            <div className="flex items-center justify-center w-full mt-6 h-[260px] relative">
                                <div className="flex items-center justify-start w-[316px] h-full shrink-0">
                                    <div className="flex flex-col justify-between h-full w-[108px] shrink-0 z-10">
                                        <div className="flex items-center h-[110px] w-full">
                                            <div className="flex flex-col justify-between h-full py-1 w-20 shrink-0">
                                                <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800" />
                                                <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800" />
                                            </div>
                                            {/* Vertical Bracket */}
                                            <div className="w-2 h-[66px] border-y border-r border-[#FF4C4C] shrink-0" />
                                            {/* Horizontal Output Line */}
                                            <div className="w-[20px] h-px bg-[#FF4C4C] shrink-0" />
                                        </div>

                                        <div className="flex items-center h-[110px] w-full">
                                            <div className="flex flex-col justify-between h-full py-1 w-20 shrink-0">
                                                <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800" />
                                                <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800" />
                                            </div>
                                            {/* Vertical Bracket */}
                                            <div className="w-2 h-[66px] border-y border-r border-[#FF4C4C] shrink-0" />
                                            {/* Horizontal Output Line */}
                                            <div className="w-[20px] h-px bg-[#FF4C4C] shrink-0" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between h-full w-[100px] shrink-0 z-10">
                                        <div className="flex items-center justify-start h-[110px] w-full">
                                            <div className="w-20 h-9 bg-[#2B2B2B] border border-gray-800 rounded shrink-0" />
                                            <div className="w-[20px] h-px bg-[#FF4C4C] shrink-0" />
                                        </div>

                                        <div className="flex items-center justify-start h-[110px] w-full">
                                            <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800 shrink-0" />
                                            <div className="w-[20px] h-px bg-[#FF4C4C] shrink-0" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center h-full w-[28px] shrink-0 z-10">
                                        <div className="flex items-center w-full">
                                            {/* Vertical Bracket */}
                                            <div className="w-2 h-[150px] border-y border-r border-[#FF4C4C] shrink-0" />
                                            {/* Horizontal Output Line */}
                                            <div className="w-[20px] h-px bg-[#FF4C4C] shrink-0" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center h-full w-20 shrink-0 z-10">
                                        <div className="w-20 h-9 bg-[#2B2B2B] rounded border border-gray-800 shrink-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="orbitron-semibold text-lg md:text-xl text-white tracking-widest uppercase">
                            Upcoming
                        </h3>
                        <div className="flex flex-col gap-5">
                            <div className="min-h-[213px] flex flex-col justify-around bg-[#181818] border border-[#45454584] rounded-xl p-6 shadow-xl">
                                {/* Content card placeholder */}
                                <h1 className='text-xl font-semibold text-white'>Event in Mumbai</h1>
                                <div className="w-full grid grid-cols-3 gap-y-1">
                                    <span className="text-gray-400 text-sm font-semibold text-left">Date</span>
                                    <span className="text-gray-400 text-sm font-semibold text-center">Location</span>
                                    <span className="text-gray-400 text-sm font-semibold text-right">Category</span>

                                    <span className="text-white text-base text-left">11/11/25</span>
                                    <span className="text-white text-base text-center">BKC</span>
                                    <span className="text-white text-base text-right">Lorem</span>
                                </div>
                                <button className='uppercase bg-[#FF4C4C] text-lg text-white p-2 rounded mt-6 cursor-pointer hover:scale-102 active:scale-98 transition-all duration-200'>Register</button>
                            </div>
                            <div className="min-h-[213px] flex flex-col justify-around bg-[#181818] border border-[#45454584] rounded-xl p-6 shadow-xl">
                                {/* Content card placeholder */}
                                <h1 className='text-xl font-semibold text-white'>Event in Delhi</h1>
                                <div className="w-full grid grid-cols-3 gap-y-1">
                                    <span className="text-gray-400 text-sm font-semibold text-left">Date</span>
                                    <span className="text-gray-400 text-sm font-semibold text-center">Location</span>
                                    <span className="text-gray-400 text-sm font-semibold text-right">Category</span>

                                    <span className="text-white text-base text-left">11/11/25</span>
                                    <span className="text-white text-base text-center">BKC</span>
                                    <span className="text-white text-base text-right">Lorem</span>
                                </div>
                                <button className='uppercase bg-[#FF4C4C] text-lg text-white p-2 rounded mt-6 cursor-pointer hover:scale-102 active:scale-98 transition-all duration-200'>Register</button>
                            </div>
                        </div>
                    </div>

                    {/* Past Results Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="orbitron-semibold text-lg md:text-xl text-white tracking-widest uppercase">
                            Past Results
                        </h3>
                        <div className="min-h-[450px] bg-[#181818] border border-[#45454584] rounded-xl p-6 shadow-xl">
                            {/* Content card placeholder */}
                            <div className='flex flex-col gap-5 items-start justify-around'>
                                {[1, 2, 3].map((item, idx) => {
                                    return (
                                        <div key={item} className='w-full'>
                                            <h1 className='text-xl font-semibold text-white'>Bengaluru Regionals</h1>
                                            <p className='text-[18px] text-gray-500'>Lorem Ipsum</p>
                                            {idx < 2 && <hr className="h-px my-4 bg-gray-700 border-0" />}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events