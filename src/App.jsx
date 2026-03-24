import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls, Scroll } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll as useFramerScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2, Play, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HamzTrading from './pages/HamzTrading';
import HamzTradingAbout from './pages/HamzTradingAbout';
import HamzTradingProducts from './pages/HamzTradingProducts';
import HamzTradingContact from './pages/HamzTradingContact';
import HamzAdvertising from './pages/HamzAdvertising';
import HamzAdvLayout from './pages/hamz-advertising-site/Layout';
import HamzAdvHome from './pages/hamz-advertising-site/Home';
import HamzAdvAbout from './pages/hamz-advertising-site/About';
import HamzAdvProjects from './pages/hamz-advertising-site/Projects';
import HamzAdvContact from './pages/hamz-advertising-site/Contact';
import SpotlightCard from './SpotlightCard';
import VariableProximity from './VariableProximity';
import TiltedCard from './TiltedCard';
import Galaxy from './Galaxy';
import LightPillar from './LightPillar';

// --- UI Components ---

const HeroSection = () => {
    const containerRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="relative h-screen w-full flex flex-col justify-between items-center z-10 pointer-events-none pt-32 pb-12 overflow-hidden">

            {/* LightPillar Background inside Hero Section */}
            <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen opacity-80">
                <LightPillar
                    topColor="#050505"
                    bottomColor="#a3a3a3"
                    intensity={0.9}
                    rotationSpeed={0.2}
                    interactive={true}
                    glowAmount={0.015}
                    pillarWidth={4.5}
                    pillarHeight={0.25}
                    noiseIntensity={0.5}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>

            {/* Main Foreground Title Overlay over 3D Center */}
            <div className="relative z-10 w-full flex-grow flex items-start justify-center pointer-events-auto mt-0">
                <div className="text-center hover:-translate-y-2 transition-transform duration-300">
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, scale: 0.4, y: 40, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1
                            className="text-2xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-2xl cursor-default"
                            dir="rtl"
                            style={{
                                fontFamily: "'Amiri', serif",
                                lineHeight: "1.6",
                                fontWeight: 400,
                                fontStyle: "italic",
                                textShadow: "0 4px 8px rgba(0,0,0,0.9)",
                            }}
                        >
                            مؤسسة حسين حبيب بن يوسف السيهاتي.
                        </h1>
                        <h2 className="text-[10px] md:text-sm lg:text-base font-medium text-white tracking-[0.3em] uppercase drop-shadow-md cursor-default">
                            <VariableProximity
                                label="Hussein Habib Bin Yousef Al-Sihati Foundation"
                                containerRef={containerRef}
                                radius={150}
                                falloff="gaussian"
                                fromFontVariationSettings="'wght' 500, 'wdth' 100"
                                toFontVariationSettings="'wght' 900, 'wdth' 150"
                            />
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Glassmorphism Cards */}
            <motion.div
                className="w-full max-w-[850px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-20 pointer-events-auto pb-16 px-6 relative"
                initial={{ opacity: 0, y: 80, filter: 'blur(15px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 2.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >

                {/* Left Card: HAMZ Trading */}
                <div
                    onMouseEnter={() => setHoveredCard('left')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative transition-all duration-700 w-full rounded-[24px]"
                    style={{
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: hoveredCard === 'left' ? 'scale(1.4)' : hoveredCard === 'right' ? 'scale(0.95)' : 'scale(1)',
                        zIndex: hoveredCard === 'left' ? 50 : 10,
                        filter: hoveredCard === 'right' ? 'blur(2px) grayscale(30%)' : 'blur(0px) grayscale(0%)',
                        opacity: hoveredCard === 'right' ? 0.6 : 1,
                    }}
                >
                    <TiltedCard
                        containerHeight="220px"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        scaleOnHover={1}
                        rotateAmplitude={12}
                        showMobileWarning={false}
                        showTooltip={false}
                    >
                        <Link to="/hamz-trading" className="block w-full h-[220px] rounded-[24px] shadow-[0_30px_50px_rgba(0,0,0,0.6)] group transition-shadow duration-300 relative cursor-pointer">
                            <SpotlightCard className="relative w-full h-full rounded-[24px] border border-white/5 bg-gradient-to-br from-[#020806]/95 to-[#061A16]/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-colors duration-500" spotlightColor="rgba(255, 255, 255, 0.1)">
                                {/* Very subtle glow in top left corner of the card */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none" />

                                <h3 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 z-10 transition-transform duration-500 group-hover:-translate-y-2" style={{ fontFamily: "Impact, 'Arial Black', sans-serif", letterSpacing: "-0.02em" }}>
                                    H<span style={{ clipPath: "polygon(50% 0%, 0% 100%, 20% 100%, 50% 30%, 80% 100%, 100% 100%)", display: "inline-block", padding: "0 2px" }}>A</span>MZ
                                </h3>
                                <p className="text-[8px] md:text-[9.5px] uppercase text-white tracking-[0.1em] font-semibold text-center mt-1 z-10 w-full px-4 transition-transform duration-500 group-hover:translate-y-1" style={{ fontFamily: "Arial, sans-serif" }}>
                                    Hussain Habeeb Yousif Al Saihati Trading
                                </p>
                            </SpotlightCard>
                        </Link>
                    </TiltedCard>
                </div>

                {/* Right Card: Hamz Advertising */}
                <div
                    onMouseEnter={() => setHoveredCard('right')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative transition-all duration-700 w-full rounded-[24px]"
                    style={{
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: hoveredCard === 'right' ? 'scale(1.4)' : hoveredCard === 'left' ? 'scale(0.95)' : 'scale(1)',
                        zIndex: hoveredCard === 'right' ? 50 : 10,
                        filter: hoveredCard === 'left' ? 'blur(2px) grayscale(30%)' : 'blur(0px) grayscale(0%)',
                        opacity: hoveredCard === 'left' ? 0.6 : 1,
                    }}
                >
                    <TiltedCard
                        containerHeight="220px"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        scaleOnHover={1}
                        rotateAmplitude={12}
                        showMobileWarning={false}
                        showTooltip={false}
                    >
                        <Link to="/hamz-advertising" className="block w-full h-[220px] rounded-[24px] shadow-[0_30px_50px_rgba(0,0,0,0.6)] group transition-shadow duration-300 relative cursor-pointer">
                            <SpotlightCard className="relative w-full h-full rounded-[24px] border border-white/5 bg-gradient-to-br from-[#020806]/95 to-[#061A16]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-500" spotlightColor="rgba(255, 255, 255, 0.1)">
                                {/* Very subtle glow in top left corner of the card */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none" />

                                {/* Stylized Arabic Logomark base shapes */}
                                <div className="h-20 w-32 mb-4 relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                                    <svg viewBox="0 0 100 80" className="w-full h-full fill-[#4ADE80] drop-shadow-md">
                                        {/* Stylized Arabic Logomark base shapes */}
                                        <rect x="25" y="60" width="55" height="4" />
                                        <rect x="25" y="25" width="4" height="35" />
                                        <rect x="35" y="30" width="4" height="30" />
                                        <rect x="45" y="15" width="4" height="45" />
                                        <rect x="55" y="35" width="4" height="25" />
                                        <rect x="65" y="20" width="4" height="40" />
                                        <rect x="76" y="28" width="4" height="32" />
                                        {/* Cross bars */}
                                        <rect x="25" y="45" width="10" height="4" />
                                        <rect x="35" y="30" width="20" height="4" />
                                        <rect x="55" y="45" width="14" height="4" />
                                        <rect x="65" y="28" width="15" height="4" />
                                        {/* Dots/Accents */}
                                        <rect x="23" y="15" width="8" height="4" />
                                        <rect x="33" y="20" width="8" height="4" />
                                        <path d="M76 60 Q85 60 85 45 L81 45 Q81 56 76 56 Z" />
                                    </svg>
                                </div>
                                <h4 className="text-[14px] md:text-[16px] font-bold text-white mb-1 tracking-wider z-10 transition-transform duration-500 group-hover:translate-y-1" dir="rtl" style={{ fontFamily: "'Traditional Arabic', 'Arial', sans-serif" }}>
                                    هامز للدعاية والاعلان
                                </h4>
                                <p className="text-[9px] md:text-[10px] uppercase text-[#4ADE80] tracking-[0.2em] font-semibold z-10 transition-transform duration-500 group-hover:translate-y-1">
                                    Hamz Advertising
                                </p>
                            </SpotlightCard>
                        </Link>
                    </TiltedCard>
                </div>

            </motion.div>
        </div>
    );
};


const TrustedSection = () => {
    const logos = ["Startup Brands", "E-commerce Companies", "SaaS Platforms", "Local Businesses", "Enterprise Clients"];
    return (
        <section className="py-24 px-6 relative z-10 w-full border-y border-white/5">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-500 font-semibold tracking-widest uppercase mb-10">Trusted By The Ambitious</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {logos.map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl md:text-2xl font-black text-gray-700 hover:text-white transition-colors duration-300 cursor-default"
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="py-32 px-6 relative z-10 w-full min-h-screen flex items-center pb-40">
            <div className="max-w-5xl mx-auto w-full glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#4ADE80] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Let’s Build Something <span className="neon-text">Powerful</span> Together.</h2>
                        <p className="text-gray-400 text-lg mb-8">Ready to dominate your industry? Drop us a line and let's craft a tailored growth strategy for your brand.</p>

                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center gap-4">
                                <Briefcase className="text-accent" /> info@fourart.agency
                            </div>
                            <div className="flex items-center gap-4">
                                <Users className="text-accent" /> +1 (555) 123-4567
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        {['Name', 'Email', 'Company'].map((field, i) => (
                            <motion.div
                                key={field}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <input
                                    type={field === 'Email' ? 'email' : 'text'}
                                    placeholder={field}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                />
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <textarea
                                placeholder="Project Details"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-accent text-white font-bold rounded-xl neon-glow transition-all"
                        >
                            Start Your Growth Journey
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default function App() {

    return (
        <div className="w-full min-h-screen bg-transparent relative selection:bg-accent selection:text-white">

            {/* Routes for Different Pages */}
            <Routes>
                <Route path="/" element={
                    <main className="relative z-10 w-full">
                        <nav className="fixed top-0 left-0 p-6 px-10 z-50 w-full flex justify-between items-center pointer-events-auto mix-blend-screen text-white">
                            {/* Brand / Logo (Removed) */}
                            <div></div>

                            {/* Centered Nav Links (Removed) */}
                            <div></div>

                            {/* Action Button (Removed) */}
                            <div></div>
                        </nav>

                        <HeroSection />
                        <TrustedSection />
                        <ContactSection />
                    </main>
                } />
                <Route path="/hamz-trading" element={<HamzTrading />} />
                <Route path="/hamz-trading/about" element={<HamzTradingAbout />} />
                <Route path="/hamz-trading/products" element={<HamzTradingProducts />} />
                <Route path="/hamz-trading/contact" element={<HamzTradingContact />} />
                
                {/* HAMZ ADVERTISING ROUTES - CLONED SITE */}
                <Route path="/hamz-advertising" element={<HamzAdvLayout />}>
                    <Route index element={<HamzAdvHome />} />
                    <Route path="about" element={<HamzAdvAbout />} />
                    <Route path="projects" element={<HamzAdvProjects />} />
                    <Route path="contact" element={<HamzAdvContact />} />
                </Route>
            </Routes>


        </div>
    );
}
