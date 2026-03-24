import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HamzTradingProducts = () => {
    return (
        <div className="w-full min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF7549] selection:text-white relative flex flex-col overflow-x-hidden">

            {/* Premium Ambient Background */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[#FF7549] opacity-[0.05] blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#2a0e41] opacity-[0.1] blur-[150px] rounded-full pointer-events-none z-0"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

            {/* Navbar - Sticky */}
            <nav className="sticky top-0 w-full flex justify-between items-center py-6 px-8 md:px-16 xl:px-32 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                {/* Logo */}
                <Link to="/hamz-trading" className="flex items-center">
                    <div className="flex items-center h-8">
                        <img src="/file88.png.png" alt="HAMZ Logo" className="h-[32px] md:h-[40px] w-auto object-contain drop-shadow-md" />
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400">
                    <Link to="/hamz-trading" className="hover:text-white transition-colors duration-300">
                        HOME
                    </Link>
                    <Link to="/hamz-trading/about" className="hover:text-white transition-colors duration-300">
                        ABOUT US
                    </Link>
                    <Link to="/hamz-trading/products" className="px-6 py-2 bg-[#FF7549] text-white rounded-full font-bold shadow-[0_0_20px_rgba(255,117,73,0.3)] transition-all">
                        OUR PRODUCTS
                    </Link>
                    <Link to="/hamz-trading/contact" className="hover:text-white transition-colors duration-300">
                        CONTACT US
                    </Link>
                </div>
            </nav>

            <main className="flex-grow flex flex-col z-10 relative pt-10 min-h-[90vh]">

                {/* Breadcrumbs */}
                <div className="w-full px-8 md:px-16 xl:px-32 flex items-center gap-6 mb-8 max-w-[1600px] mx-auto z-30 font-sans font-bold">
                    <Link to="/hamz-trading" className="text-[14px] md:text-[16px] xl:text-[20px] tracking-[0.2em] text-gray-500 hover:text-white transition-colors duration-300 uppercase">Home</Link>
                    <div className="w-12 h-[1px] bg-[#FF7549]"></div>
                    <span className="text-[14px] md:text-[16px] xl:text-[20px] tracking-[0.2em] text-[#FF7549] uppercase">Our Products</span>
                </div>

                {/* Premium Exact Placeholder Layout matching Reference */}
                <div className="w-full flex-grow relative flex items-center justify-center min-h-[750px] lg:min-h-[800px]">

                    {/* Background Glows (Purple Left, Dark Green Right) */}
                    <div className="absolute top-[0%] left-[10%] w-[50%] h-[50%] bg-[#4c1d95] opacity-20 blur-[150px] rounded-full z-0 pointer-events-none"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[#064e3b] opacity-20 blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    {/* Diagonal Caution Tape Elements (Visual Decoration) */}
                    <div className="absolute top-[45%] left-[-10%] w-[120%] h-16 bg-[#FFD700] rotate-[-15deg] z-10 flex items-center justify-around overflow-hidden border-t-[8px] border-b-[8px] border-black border-dashed opacity-95">
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="text-black font-black text-sm sm:text-[1.1rem] tracking-[0.2em] uppercase whitespace-nowrap px-4 drop-shadow-sm">UNDER CONSTRUCTION</span>
                        ))}
                    </div>

                    <div className="absolute top-[40%] right-[-10%] w-[120%] h-16 bg-[#FFD700] rotate-[-10deg] z-10 flex items-center justify-around overflow-hidden border-t-[8px] border-b-[8px] border-black border-dashed opacity-95">
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="text-black font-black text-sm sm:text-[1.1rem] tracking-[0.2em] uppercase whitespace-nowrap px-4 drop-shadow-sm">UNDER CONSTRUCTION</span>
                        ))}
                    </div>

                    {/* EXACT PLACEHOLDERS */}

                    {/* Product 1: SAFETY LOCKS */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute top-[-5%] md:top-[-2%] left-[0%] md:left-[4%] lg:left-[8%] z-20 flex flex-col items-center group cursor-pointer"
                    >
                        <h3 className="text-lg md:text-2xl font-black tracking-widest text-[#F1F1F1] uppercase mt-8 mb-4 drop-shadow-2xl group-hover:text-[#FF2A2A] transition-all translate-y-4 md:translate-y-6">SAFETY LOCKS</h3>
                        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                            <img
                                src="/safety-locks.png"
                                alt="Safety Locks"
                                className="w-[110%] md:w-[120%] h-auto object-contain drop-shadow-2xl group-hover:scale-[1.05] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Product 2: OIL & CHEMICAL ABSORBENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute top-[-5%] md:top-[0%] right-[15%] md:right-[20%] lg:right-[28%] z-20 flex flex-row items-center group cursor-pointer"
                    >
                        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                            <img
                                src="/spill-kit.png"
                                alt="Oil & Chemical Absorbent Spill Kit"
                                className="w-[120%] md:w-[130%] h-auto object-contain drop-shadow-2xl group-hover:scale-[1.05] transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-black tracking-widest text-[#F1F1F1] uppercase ml-2 text-left max-w-[160px] leading-tight drop-shadow-2xl group-hover:text-[#FF5722] transition-colors">OIL & CHEMICAL ABSORBENT</h3>
                    </motion.div>

                    {/* Product 3: BARRICADE LIGHT — just below the stripes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute top-[75%] left-[42%] -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer"
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
                            <img
                                src="/barricade-light.png"
                                alt="Barricade Light"
                                className="w-full h-full object-contain rotate-[6deg] drop-shadow-[0_0_40px_rgba(255,160,50,0.35)] group-hover:drop-shadow-[0_0_60px_rgba(255,160,50,0.6)] transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Under Construction Sign Addition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute bottom-[2%] md:bottom-[4%] lg:bottom-[5%] left-[5%] md:left-[15%] lg:left-[20%] z-20 flex flex-col items-center group cursor-pointer"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
                            <img
                                src="/under-construction-sign.png"
                                alt="Under Construction Sign"
                                className="w-[120%] md:w-[130%] h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Windsock Addition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute bottom-[-30%] md:bottom-[-25%] left-[30%] md:left-[40%] lg:left-[44%] z-20 flex flex-col items-center group cursor-pointer"
                    >
                        <div className="relative w-80 h-[28rem] md:w-96 md:h-[38rem] lg:w-[28rem] lg:h-[48rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
                            <img
                                src="/windsock.png"
                                alt="Windsock"
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,100,100,0.3)] transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* File99 Image Addition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="absolute bottom-[2%] md:bottom-[5%] right-[-10%] md:right-[-5%] lg:right-[0%] z-20 flex flex-col items-center group cursor-pointer"
                    >
                        <div className="relative w-80 h-[30rem] md:w-96 md:h-[40rem] lg:w-[36rem] lg:h-[50rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
                            <img
                                src="/file99.png.PNG"
                                alt="Safety Equipment"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* --- SECOND SECTION: HEAD & HAND PROTECTION --- */}
                <section className="w-full bg-white text-black py-20 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start justify-center gap-16 md:gap-8 relative z-20">
                    <div className="w-full max-w-[1500px] flex flex-col md:flex-row mx-auto justify-between gap-12 lg:gap-20">

                        {/* Left Column - Head & Face */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
                        >
                            <div className="text-center md:text-left mb-8 md:mb-12 w-full">
                                <h4 className="text-[#3b4756] text-2xl md:text-3xl lg:text-4xl whitespace-nowrap" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>"Protect Your Head, Protect Your Life."</h4>
                                <h2 className="text-[#15202b] mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] leading-[1.1]">
                                    HEAD &amp; FACE<br />PROTECTION
                                </h2>
                            </div>
                            <div className="w-full flex justify-center pb-8 -mt-2 md:-mt-8 transform hover:scale-[1.03] transition-transform duration-500">
                                <img src="/filegm.txt.png" alt="Head and Face Protection" className="w-[90%] md:w-[100%] max-w-[600px] object-contain mix-blend-multiply" />
                            </div>
                        </motion.div>

                        {/* Right Column - Hand Protection */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="w-full md:w-1/2 flex flex-col"
                        >

                            <div className="w-full flex flex-row justify-between items-start mb-8 md:mb-12 px-2 md:px-0">
                                {/* Left text area of right column */}
                                <div className="flex flex-col md:mt-2">
                                    <span className="text-[#FF7549] text-4xl md:text-5xl lg:text-6xl leading-[0.8]" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>Safety</span>
                                    <span className="text-[#4b5563] text-[14px] md:text-[16px] lg:text-[18px] font-light tracking-[0.1em] uppercase mt-3 lg:mt-4 whitespace-nowrap">IS IN YOUR HAND</span>
                                </div>

                                {/* Right text area of right column */}
                                <div className="flex flex-col items-end">
                                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[1]">HAND</h2>
                                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[1]">PROTECTION</h2>
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-center mt-auto pb-8 transform hover:scale-[1.03] transition-transform duration-500">
                                <img src="/filegtm.txt.png" alt="Hand Protection Safety Gloves" className="w-[85%] md:w-[95%] max-w-[650px] object-contain" />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- THIRD SECTION: WELDING & WEAR PROTECTION --- */}
                <section className="w-full bg-[#000000] text-white py-12 px-4 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    {/* Subtle Glow Backgrounds */}
                    <div className="absolute top-[30%] left-[10%] w-[30%] h-[50%] bg-[#ff2a5f] opacity-[0.08] blur-[150px] rounded-full z-0 pointer-events-none"></div>
                    <div className="absolute top-[30%] right-[10%] w-[30%] h-[50%] bg-[#00ff88] opacity-[0.05] blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    <div className="w-full max-w-[1100px] flex flex-col md:flex-row mx-auto justify-center gap-10 lg:gap-16 relative z-10 px-4 md:px-8">

                        {/* Left Column - Welding */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="flex flex-col items-center flex-1 max-w-[450px] mx-auto"
                        >
                            <div className="text-center mb-6 w-full flex flex-col items-center gap-2">
                                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest uppercase mb-1 whitespace-nowrap">
                                    WELDING PROTECTION
                                </h2>
                                <h4 className="text-white text-base md:text-lg lg:text-xl whitespace-nowrap" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    No Shortcuts, Welding Safety Never Shuts.
                                </h4>
                            </div>

                            <div className="w-full flex justify-center mt-4 pb-4 transform hover:scale-[1.03] transition-transform duration-500">
                                <img src="/filetr.txt.png?v=2" alt="Welding Protection" className="w-[80%] md:w-[85%] max-w-[360px] object-contain drop-shadow-2xl" />
                            </div>
                        </motion.div>

                        {/* Right Column - Wear */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="flex flex-col items-center flex-1 max-w-[450px] mx-auto"
                        >
                            <div className="text-center mb-6 w-full flex flex-col items-center gap-2">
                                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest uppercase mb-1 whitespace-nowrap">
                                    WEAR PROTECTION
                                </h2>
                                <h4 className="text-white text-base md:text-lg lg:text-xl whitespace-nowrap" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    Do your work with pride, put safety in every stride.
                                </h4>
                            </div>

                            <div className="w-full flex justify-center mt-4 pb-4 transform hover:scale-[1.03] transition-transform duration-500">
                                <img src="/filetrc.txt.png?v=2" alt="Wear Protection" className="w-[80%] md:w-[85%] max-w-[360px] object-contain drop-shadow-2xl" />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- FOURTH SECTION: FOOT PROTECTION --- */}
                <section className="w-full bg-[#000000] text-white py-16 px-4 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    {/* Subtle Glow Backgrounds */}
                    <div className="absolute top-[50%] left-[20%] w-[30%] h-[50%] bg-[#facc15] opacity-[0.03] blur-[150px] rounded-full z-0 pointer-events-none"></div>
                    <div className="absolute top-[50%] right-[20%] w-[30%] h-[50%] bg-[#38bdf8] opacity-[0.03] blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    <div className="w-full max-w-[1300px] flex flex-col mx-auto items-center relative z-10 px-4 md:px-8">

                        {/* Section Headers */}
                        <div className="text-center mb-16 w-full flex flex-col items-center gap-2">
                            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest uppercase mb-1 whitespace-nowrap">
                                FOOT PROTECTION
                            </h2>
                            <h4 className="text-white text-base md:text-lg lg:text-xl whitespace-nowrap" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                "Step Up to Safety with Proper Footwear."
                            </h4>
                        </div>

                        {/* 4 Columns for product placeholders */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mt-4">

                            {/* Placeholder 1: V12 Safety Boot — real image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                className="flex justify-center items-center w-full"
                            >
                                <div className="w-full max-w-[280px] aspect-square rounded-full bg-[#3c566f] flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                                    <img
                                        src="/safety-boot-v12.jpg"
                                        alt="V12 Safety Boot"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Placeholder 2: Yellow Safety Shoe — real image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                                viewport={{ once: false, margin: "-50px" }}
                                className="flex justify-center items-center w-full"
                            >
                                <div className="w-full max-w-[280px] aspect-square rounded-full bg-[#3c566f] flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                                    <img
                                        src="/safety-shoe-yellow.jpg"
                                        alt="Yellow Safety Shoe"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Placeholder 3: Black Safety Boot — real image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: false, margin: "-50px" }}
                                className="flex justify-center items-center w-full"
                            >
                                <div className="w-full max-w-[280px] aspect-square rounded-full bg-[#3c566f] flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                                    <img
                                        src="/safety-boot-black.jpg"
                                        alt="Black Safety Boot"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Placeholder 4: Yellow Gumboot — real image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
                                viewport={{ once: false, margin: "-50px" }}
                                className="flex justify-center items-center w-full"
                            >
                                <div className="w-full max-w-[280px] aspect-square rounded-full bg-[#3c566f] flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                                    <img
                                        src="/yellow-gumboot.jpg"
                                        alt="Yellow Gumboot"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* --- FIFTH SECTION: EYE & EAR PROTECTION --- */}
                <section className="w-full bg-[#000000] text-white py-20 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center relative z-20 overflow-hidden">
                    {/* Subtle Glow Backgrounds */}
                    <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-[#ff5722] opacity-[0.03] blur-[150px] rounded-full z-0 pointer-events-none"></div>
                    <div className="absolute top-[10%] right-[10%] w-[30%] h-[50%] bg-[#22c55e] opacity-[0.03] blur-[150px] rounded-full z-0 pointer-events-none"></div>

                    <div className="w-full max-w-[1500px] flex flex-col xl:flex-row mx-auto justify-between items-center xl:items-center gap-16 lg:gap-20 relative z-10 px-4">

                        {/* Left Column (Text & 4 Circles) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="w-full xl:w-[60%] flex flex-col items-center xl:items-start text-center xl:text-left"
                        >
                            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide mb-4 xl:ml-8">
                                EYE &amp; EAR PROTECTION
                            </h2>
                            <p className="text-[#d1d5db] text-base md:text-lg lg:text-xl max-w-[850px] mb-12 font-normal leading-relaxed xl:ml-8">
                                Thousands of People are Blinded Each Year From Work-related Eye Injuries That Could Have Been Prevented With The Proper Selection and Use of Eye Protection.
                            </p>

                            {/* 4 Circular Placeholders */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8 w-full">

                                {/* Item 1: Helmet with Ear Protection */}
                                <div className="flex justify-center items-center w-full">
                                    <div className="w-full max-w-[240px] transition-transform duration-500 hover:scale-110 cursor-pointer">
                                        <img
                                            src="/helmet-ear-protection.png"
                                            alt="Helmet with Ear Protection"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Item 2: Safety Glasses */}
                                <div className="flex justify-center items-center w-full">
                                    <div className="w-full max-w-[240px] transition-transform duration-500 hover:scale-110 cursor-pointer">
                                        <img
                                            src="/safety-glasses.png"
                                            alt="Safety Glasses"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Item 3: Ear Plugs */}
                                <div className="flex justify-center items-center w-full">
                                    <div className="w-full max-w-[240px] transition-transform duration-500 hover:scale-110 cursor-pointer">
                                        <img
                                            src="/ear-plugs.png"
                                            alt="Ear Plugs"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Item 4: Eye Wash Station */}
                                <div className="flex justify-center items-center w-full">
                                    <div className="w-full max-w-[240px] transition-transform duration-500 hover:scale-110 cursor-pointer">
                                        <img
                                            src="/eye-wash-station.png"
                                            alt="Eye Wash Station"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* Right Column (Large Person Image) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="w-full xl:w-[40%] flex justify-center items-center mt-12 xl:mt-0"
                        >
                            <div className="w-full max-w-[320px] aspect-square flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                                <img
                                    src="/eye-ear-protection-person.jpg"
                                    alt="Eye and Ear Protection in Use"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- SIXTH SECTION: TOOLS & HARDWARE --- */}
                <section className="w-full bg-[#000000] text-white py-20 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">

                    <div className="w-full max-w-[1400px] flex flex-col items-center relative z-10">
                        {/* Main Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.1em] mb-16 text-center"
                        >
                            TOOLS &amp; HARDWARE
                        </motion.h2>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">

                            {/* Group 1: Tools & Hardware vertically + List + Jigsaw */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-row items-center gap-4"
                            >
                                <div className="hidden sm:flex items-center -ml-2">
                                    <h3
                                        className="text-[#FF7549] text-xl md:text-2xl whitespace-nowrap rotate-180"
                                        style={{ fontFamily: "'Dancing Script', cursive", writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 700 }}
                                    >
                                        Tools &amp; Hardware
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-1.5 flex-grow">
                                    {[
                                        "Pliers", "Sockets", "Hex Key", "Hammers", "Tool Boxes",
                                        "Screw Drivers", "Wrenches & Spanners", "Pry Bars",
                                        "Wood Saws & Handsaws", "Chisel Punches & Files", "Sheet Metal Tools"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-[#FF7549] text-[8px]">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Image 1 (Jigsaw) */}
                                <div className="relative w-60 h-60 flex-shrink-0 group">
                                    <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                                        <img
                                            src="/jigsaw-tool-black.png"
                                            alt="Jigsaw Tool"
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Group 2: List + Oscillating Tool */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="flex flex-row items-center gap-4"
                            >
                                <div className="flex flex-col gap-1.5 flex-grow">
                                    {[
                                        "threading Equipments", "Ladders", "Claw Bars", "Pipe Stands",
                                        "Bolt Cutters", "Feeler Gauges", "Hand Tools", "Storage System", "Vises"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-[#FF7549] text-[8px]">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Image 2 (Multi-Tool) */}
                                <div className="relative w-60 h-60 flex-shrink-0 group">
                                    <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                                        <img
                                            src="/multi-tool-black.png"
                                            alt="Multi-Tool"
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Group 3: Power Tools Title + List + Chainsaw */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-row items-start gap-4"
                            >
                                <div className="flex flex-col flex-grow">
                                    <h3
                                        className="text-[#FF7549] text-xl md:text-2xl mb-4"
                                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                                    >
                                        Power Tools
                                    </h3>
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            "Hammer Drills", "Drilling Machine", "Cutting Machine",
                                            "Grinding Machine", "Engraving Machine", "Welding Machine",
                                            "Heavy duty drilling Machin"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-[#FF7549] text-[8px]">★</span>
                                                <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Image 3 (Chainsaw) */}
                                <div className="relative w-60 h-60 flex-shrink-0 mt-6 group">
                                    <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden transition-transform duration-500 group-hover:scale-110">
                                        <img
                                            src="/chainsaw-black.png"
                                            alt="Chainsaw Tool"
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* --- SEVENTH SECTION: BOLT & NUTS --- */}
                <section className="w-full bg-[#000000] text-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">

                    <div className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">

                        {/* Left Column: Bolt & Nuts */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 md:items-start"
                        >
                            <h3
                                className="text-[#FF7549] text-3xl md:text-4xl"
                                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                            >
                                Bolt &amp; Nuts
                            </h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    "Brass & stainless steel", "Anchor Bolt", "Hex bolt (Brass & stainless steel)",
                                    "Gypsum Screws", "Black & Metal Screws", "Cap Screws",
                                    "Scrub Screws", "Self Drilling Screws"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="text-[#FF7549] text-[8px]">★</span>
                                        <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Middle Column: Toolbox Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center h-full group"
                        >
                            <div className="w-full max-w-[700px] flex items-center justify-center relative transition-transform duration-700 group-hover:scale-[1.05]">
                                <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden group">
                                    <img
                                        src="/toolbox-black.png"
                                        alt="Professional Toolbox"
                                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
                                    />
                                    {/* Subtle sheen overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Torque Wrenches */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 md:items-start md:pl-8"
                        >
                            <h3
                                className="text-[#FF7549] text-3xl md:text-4xl"
                                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                            >
                                Torque Wrenches
                            </h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    "Dial Torque Wrenches", "Electronic Torque Wrenches", "Torque Multiplyers"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="text-[#FF7549] text-[8px]">★</span>
                                        <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- EIGHTH SECTION: BUILDING MATERIALS --- */}
                <section className="w-full bg-[#000000] text-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    <div className="w-full max-w-[1500px] flex flex-col items-center relative z-10">
                        {/* Main Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.1em] mb-16 text-center"
                        >
                            BUILDING MATERIALS
                        </motion.h2>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">

                            {/* Group 1: Steel Product Range vertically + List */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-row items-center gap-6"
                            >
                                <div className="hidden sm:flex items-center -ml-4">
                                    <h3
                                        className="text-[#FF7549] text-2xl md:text-3xl whitespace-nowrap rotate-180"
                                        style={{ fontFamily: "'Dancing Script', cursive", writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 700 }}
                                    >
                                        Steel Product Range
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-1.5 flex-grow">
                                    {[
                                        { name: "Square Tube", bullet: "★" },
                                        { name: "Rectangular Tube", bullet: "★" },
                                        { name: "Stainless Steel Tube", bullet: "★" },
                                        { name: "Stainless Steel Pipe", bullet: "★" },
                                        { name: "Seamless Pipe", bullet: "★" },
                                        { name: "Stainless Steel Sheet", bullet: "★" },
                                        { name: "Stainless Steel Sheet Mirror", bullet: "★" },
                                        { name: "Steel Plate & Checked Plate", bullet: "★" },
                                        { name: "Aluminum Pipe", bullet: "★" },
                                        { name: "Insulation Polythene", bullet: "★" },
                                        { name: "Wire Net", bullet: "★" },
                                        { name: "Expanded Metal Sheet", bullet: "★" },
                                        { name: "Black Sheet", bullet: "★" },
                                        { name: "Galvanized Sheet", bullet: "★" },
                                        { name: "Corrugated Sheet", bullet: "★" },
                                        { name: "Grating", bullet: "★" },
                                        { name: "Black Pipe", bullet: "★" },
                                        { name: "H Beam", bullet: "★" },
                                        { name: "I Beam", bullet: "★" },
                                        { name: "U Beam", bullet: "★" },
                                        { name: "Round Bar", bullet: "★" },
                                        { name: "Square Bar", bullet: "★" },
                                        { name: "Angle Bar", bullet: "•" },
                                        { name: "Flat Bar", bullet: "•" },
                                        { name: "U Channel", bullet: "★" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-[#FF7549] text-[8px]">{item.bullet}</span>
                                            <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Middle Column: Crane & Steel Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex justify-center items-center h-full group order-first lg:order-none"
                            >
                                <div className="w-full max-w-[900px] lg:-ml-24 flex items-center justify-center relative transition-transform duration-700 group-hover:scale-[1.05]">
                                    <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden group">
                                        <img
                                            src="/crane-steel-black.png"
                                            alt="Construction Crane Lifting Steel"
                                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Group 3: Carpentry Accessories & Wood */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col gap-10"
                            >
                                {/* Carpentry Accessories */}
                                <div className="flex flex-col gap-4">
                                    <h3
                                        className="text-[#FF7549] text-2xl md:text-3xl"
                                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                                    >
                                        Carpentry Accessories
                                    </h3>
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            "Ordinary Plywood & Finishing Wood", "Water Proof Plywood",
                                            "Block Boards Ordinary & Finishing", "Oak Wood & Ash Wood",
                                            "Teak Wood & Maple Wood", "MDF Board"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-[#FF7549] text-[8px]">★</span>
                                                <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Carpentry Wood */}
                                <div className="flex flex-col gap-4">
                                    <h3
                                        className="text-[#FF7549] text-2xl md:text-3xl"
                                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                                    >
                                        Carpentry Wood
                                    </h3>
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            "Wood Glue", "Door Handle", "Beeding Roll", "Hinges"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-[#FF7549] text-[8px]">★</span>
                                                <span className="text-gray-400 text-[11px] md:text-[12px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* --- NINTH SECTION: ELECTRICAL & MEASURING --- */}
                <section className="w-full bg-[#000000] text-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                        {/* Group 1: Electrical Material */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8"
                        >
                            <h3
                                className="text-[#FF7549] text-3xl md:text-4xl"
                                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                            >
                                Electrical Material
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                                {/* Sub Column 1 */}
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        "Cable Trays & Accessories", "Bulbs", "Circuit Breakers & Contractors",
                                        "PVC Water proof Boxes", "Terminal Rail Strip", "Ballast",
                                        "Heat Shrinking Tubes", "Control & Circuits", "Overload Relays",
                                        "Rubber Cables", "Plug & Sockets", "Sodium Lamps", "Halogen Lamps"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-white text-[8px] opacity-80">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Sub Column 2 */}
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        "All types of Cables & Wires", "Tubelight", "Switches",
                                        "Florescent Tubes", "Projection Lamps", "Emergency Lightings",
                                        "Utility Box", "Transformers", "Voltage Regulators",
                                        "Insulators", "Rigid & GI Conducts", "Cable Gland & Legs", "Fuses"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-white text-[8px] opacity-80">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Group 2: Inspection & Measuring Gauges */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col md:flex-row gap-8 items-start flex-1"
                        >
                            <div className="flex flex-col gap-8 flex-1">
                                <h3
                                    className="text-[#FFC200] text-3xl md:text-4xl" // CHANGED TO FLUKE YELLOW
                                    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                                >
                                    Inspection &amp; Measuring Gauges
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                                    {/* Sub Column 1 */}
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            "Calibration Equipment & Component Testing", "Millimeters",
                                            "Magnetic Field Measurement", "Light & Sound Measurement",
                                            "Environmental Monitoring", "Laboratory Hot Plates & Stirrers",
                                            "Vibration Level Measurement", "Data Logging"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-white text-[8px] opacity-80">★</span>
                                                <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Sub Column 2 */}
                                    <div className="flex flex-col gap-1.5">
                                        {[
                                            "Electrical Testing", "Refractometer", "Leak & Emission Detector",
                                            "Lab Equipment", "nspection & Mechanical Measurement",
                                            "Digital Sound Level Meters", "Lab Equipment & Environmental Monitoring"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-white text-[8px] opacity-80">★</span>
                                                <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </motion.div>

                    </div>
                </section>

                {/* --- TENTH SECTION: INDUSTRIAL CHEMICALS & LUBRICANTS --- */}
                <section className="w-full bg-[#000000] text-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                        {/* Left Column: Industrial Chemicals & Lubricants List */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 md:items-start"
                        >
                            <h3
                                className="text-[#FF7549] text-3xl md:text-4xl"
                                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                            >
                                Industrial Chemicals &amp; Lubricants
                            </h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    "Industrial Lubricants",
                                    "Gear & Transmission Oil",
                                    "Contact Cleaner",
                                    "Greases",
                                    "Loctites",
                                    "Corrosion Inhibitors",
                                    "Cleaners",
                                    "Degreasers",
                                    "Cutting Fluids",
                                    "Hand Cleaners",
                                    "Industrial Hydraulic Oil",
                                    "Chemicals for Mould Releasing, Epoxy Silicon Molding & Solvents",
                                    "Pigments for PU, Paints & Plastics",
                                    "U Remover - For Cleaning of pu machinery/ parts and related application",
                                    "Sales of TDI, Polyosis, and Titanium Dioxide from world's leading producers."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="text-[#FF7549] text-[8px]">★</span>
                                        <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default leading-relaxed max-w-[500px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Industrial Plant Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center h-full group"
                        >
                            <div className="w-full max-w-[800px] flex items-center justify-center relative transition-transform duration-700 group-hover:scale-[1.05]">
                                <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden group">
                                    <img
                                        src="/industrial-plant-black.png"
                                        alt="Industrial Plant"
                                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
                                    />
                                    {/* Subtle sheen overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* --- ELEVENTH SECTION: ACCESSORIES & CLEANING --- */}
                <section className="w-full bg-[#000000] text-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-20 overflow-hidden">
                    <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                        {/* Group 1: Industrial Accessories */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8"
                        >
                            <h3
                                className="text-[#FF7549] text-3xl md:text-4xl"
                                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                            >
                                Industrial Accessories
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                                {/* Sub Column 1 */}
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        "Grinding & Cutting Disks", "Welding Rods", "Buffing Roll",
                                        "storage Bins", "WD-40", "Floor & Metal Paints",
                                        "Air Gun", "Safety Split Pin", "Pressure Gauges",
                                        "PART STREN", "DEWALT"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                                            <span className="text-[#FF7549] text-[8px]">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Sub Column 2 */}
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        "wire Brushes", "Emry Roll", "Buffing Wheel",
                                        "Spray Paints", "Cable Ties", "Trolley Wheel",
                                        "Barrel Pump", "Nylon Rope Shakles", "Bandit Buckle",
                                        "BLACK& DEC"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                                            <span className="text-[#FF7549] text-[8px]">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Group 2: Industrial Cleaning Material & Equipment */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col md:flex-row gap-10 items-start"
                        >
                            <div className="flex flex-col gap-8 flex-1 md:mt-16 md:-ml-12">

                                <div className="flex flex-col gap-1.5">
                                    {[
                                        "Decreasers & Liquids", "Perfumes", "Industrial Vacuum Machine",
                                        "Accessories & Tools", "Scotch Pads", "Floor Machines / Sweepers",
                                        "Carpet Vacuums", "Automatic Scrubbers", "Wet/Dry Vacuums",
                                        "Dryers", "Pressure Washers"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                                            <span className="text-[#FF7549] text-[8px]">★</span>
                                            <span className="text-gray-400 text-[11px] md:text-[13px] font-medium tracking-wide uppercase hover:text-white transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Placeholder on the right of the cleaning list */}
                            <div className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0 group md:mt-0 flex flex-col gap-6">
                                <h3
                                    className="text-[#FF7549] text-2xl md:text-3xl text-center md:text-left"
                                    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                                >
                                    Industrial Cleaning Material &amp; Equipment
                                </h3>
                                <div className="w-full aspect-square flex items-center justify-center relative transition-transform duration-700 group-hover:scale-[1.05]">
                                    <div className="absolute inset-0 bg-[#FF7549] opacity-[0.03] blur-3xl rounded-full"></div>
                                    <div className="w-full h-full flex items-center justify-center relative z-10 overflow-hidden group">
                                        <img
                                            src="/cleaning-supplies-black.png"
                                            alt="Industrial Cleaning Material & Equipment"
                                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                                        />
                                        {/* Subtle sheen overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="w-full bg-[#050505] border-t border-white/5 py-8 px-8 md:px-16 xl:px-32 flex justify-between items-center text-[12px] text-gray-500 font-light relative z-10 mt-auto">
                <p>Copyright © 2025 HAMZ. All Right Reserved</p>
                <div className="flex gap-4">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </footer>
        </div>
    );
};

export default HamzTradingProducts;
