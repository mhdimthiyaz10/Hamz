import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Settings, Layers, Box, Eye, Home as HomeIcon, Printer, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  "https://images.unsplash.com/photo-1541888086082-cd2bd3e43f01?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80"
];

// Placeholder slots — replace each entry with real gallery items when ready
const items = [
  {}, {}, {}, {}, {}, {},
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-[#0A0A0A] group">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Removed black shade gradient overlay */}
        
        


        {/* Slider Controls */}
        <button 
          onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#1A1A1A]/40 backdrop-blur-md border border-[#2F2F2F] text-[#F5F5F5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-[#242424] hover:border-[#8A8A8A]"
        >
          <ChevronLeft size={24} strokeWidth={1} />
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#1A1A1A]/40 backdrop-blur-md border border-[#2F2F2F] text-[#F5F5F5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-[#242424] hover:border-[#8A8A8A]"
        >
          <ChevronRight size={24} strokeWidth={1} />
        </button>
      </div>

      {/* Services Summary Section */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="w-16 h-[1px] bg-[#F5F5F5] opacity-50 mb-8 self-start md:self-center ml-4 md:ml-0"></div>
          <p 
            className="text-lg md:text-xl lg:text-[22px] leading-[1.8] font-medium tracking-wide max-w-5xl mx-auto px-4 text-[#F5F5F5]" 
            style={{ fontFamily: "'Montserrat', 'Inter', 'Helvetica Neue', sans-serif" }}
          >
            Specializing in the manufacture, design and installation of advertising and advertising boards<br className="hidden md:block" />
            for government departments and commercial<br className="hidden md:block" />
            companies Hidden or front-facing LED Stereoscopic Steel Lettering Boards + Acrylic Face<br className="hidden md:block" />
            Hidden or Front Lighting<br className="hidden md:block" />
            LED Painted Zancore Letter Boards + Acrylic Face Lighting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg md:text-xl font-light text-[#B0B0B0] leading-loose">
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-[#8A8A8A] mt-3.5 opacity-60 flex-shrink-0"></div>Design & installation of cladding & wooden facades</li>
            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-[#8A8A8A] mt-3.5 opacity-60 flex-shrink-0"></div>Premium styling and corporate installations</li>
          </ul>
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-[#8A8A8A] mt-3.5 opacity-60 flex-shrink-0"></div>Advanced Neon and tailored Acrylic signs</li>
            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-[#8A8A8A] mt-3.5 opacity-60 flex-shrink-0"></div>Minimalist iron stand structures for projects</li>
          </ul>
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-[#8A8A8A] mt-3.5 opacity-60 flex-shrink-0"></div>Zincore and precise steel signs with subtle LED lighting</li>
          </ul>
        </div>
      </section>

      {/* Services Detail Section — Glowing Wave Background */}
      <section className="relative py-24 md:py-32 px-6 bg-[#000000] border-t border-b border-[#1A1A1A] overflow-hidden">
        {/* Animated glowing sine-wave SVG — matches reference image */}
        <svg
          className="pointer-events-none select-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main white glow filter */}
            <filter id="wave-glow" x="-30%" y="-80%" width="160%" height="260%">
              <feGaussianBlur stdDeviation="14" result="blur1" />
              <feGaussianBlur stdDeviation="28" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Softer outer halo */}
            <filter id="wave-halo" x="-50%" y="-200%" width="200%" height="500%">
              <feGaussianBlur stdDeviation="38" result="halo" />
            </filter>
          </defs>

          {/* === Outer halo pass (very soft) === */}
          <path
            d="M-100,250 C120,80 360,420 720,250 C1080,80 1320,420 1540,250"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="80"
            filter="url(#wave-halo)"
          />

          {/* === Mid glow pass === */}
          <path
            d="M-100,250 C120,80 360,420 720,250 C1080,80 1320,420 1540,250"
            fill="none"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth="32"
            filter="url(#wave-glow)"
          />

          {/* === Sharp bright crest line === */}
          <path
            d="M-100,250 C120,80 360,420 720,250 C1080,80 1320,420 1540,250"
            fill="none"
            stroke="rgba(255,255,255,0.70)"
            strokeWidth="1.2"
            filter="url(#wave-glow)"
          />

          {/* === Inline CSS animation for a slow drift === */}
          <style>{`
            @keyframes wave-drift {
              0%   { d: path("M-100,250 C120,80 360,420 720,250 C1080,80 1320,420 1540,250"); }
              50%  { d: path("M-100,270 C140,60 380,440 720,270 C1060,60 1300,440 1540,270"); }
              100% { d: path("M-100,250 C120,80 360,420 720,250 C1080,80 1320,420 1540,250"); }
            }
          `}</style>
        </svg>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-24 text-center">
             <h3 
               className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E4E4E4] to-[#999999] tracking-wider mb-6 drop-shadow-md"
               style={{ fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Georgia', serif", fontWeight: 400, fontStyle: 'italic' }}
             >
                Our Core Expertise
             </h3>
             <h4 className="text-base md:text-lg font-light text-[#B0B0B0] leading-relaxed max-w-3xl mx-auto tracking-wide">
                 HAMZ ADVERTISING delivers great presentations and executes high-fidelity board works. Completed using sophisticated precision machinery and contemporary minimalist aesthetics.
             </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Service 1 - Timeline Layout */}
             <div className="bg-[#1A1A1A] border border-[#2F2F2F] rounded-xl pl-6 py-8 pr-10 hover:border-[#8A8A8A] transition-colors duration-500 group flex">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-8 shrink-0 relative z-10 w-16">
                   {/* Outer Circle & Icon */}
                   <div className="w-16 h-16 rounded-full border-[2.5px] border-[#8A8A8A]/40 flex items-center justify-center bg-[#1A1A1A] group-hover:border-[#F5F5F5] transition-colors duration-500 mb-2">
                     <Eye size={22} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-3">
                   <h4 className="text-xl font-medium text-[#F5F5F5] mb-4 tracking-wide">Signboards</h4>
                   <p className="text-[#B0B0B0] text-[15px] leading-relaxed font-light mb-8">
                      Advertising is one of the most usable identity of the business. We use only high quality of the work of this forum.
                   </p>
                   <ul className="text-[#8A8A8A] text-[15px] font-light space-y-4 relative">
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Neon Works
                      </li>
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Zincore Works
                      </li>
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Works Led
                      </li>
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Stainless Steel
                      </li>
                   </ul>
                </div>
             </div>

             {/* Service 2 - Timeline Layout */}
             <div className="bg-[#1A1A1A] border border-[#2F2F2F] rounded-xl pl-6 py-8 pr-10 hover:border-[#8A8A8A] transition-colors duration-500 group flex">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-8 shrink-0 relative z-10 w-16">
                   {/* Outer Circle & Icon */}
                   <div className="w-16 h-16 rounded-full border-[2.5px] border-[#8A8A8A]/40 flex items-center justify-center bg-[#1A1A1A] group-hover:border-[#F5F5F5] transition-colors duration-500 mb-2">
                     <ImageIcon size={22} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-3">
                   <h4 className="text-xl font-medium text-[#F5F5F5] mb-4 tracking-wide">Flex Works</h4>
                   <p className="text-[#B0B0B0] text-[15px] leading-relaxed font-light mb-8">
                      Every entrepreneur should be needed to highlight their business brand. So we offer quality affinity and print output.
                   </p>
                   <ul className="text-[#8A8A8A] text-[15px] font-light space-y-4 relative">
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Works Sticker
                      </li>
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Printing Works
                      </li>
                   </ul>
                </div>
             </div>

             {/* Service 3 - Timeline Layout */}
             <div className="bg-[#1A1A1A] border border-[#2F2F2F] rounded-xl pl-6 py-8 pr-10 hover:border-[#8A8A8A] transition-colors duration-500 group flex">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-8 shrink-0 relative z-10 w-16">
                   {/* Outer Circle & Icon */}
                   <div className="w-16 h-16 rounded-full border-[2.5px] border-[#8A8A8A]/40 flex items-center justify-center bg-[#1A1A1A] group-hover:border-[#F5F5F5] transition-colors duration-500 mb-2">
                     <Box size={22} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-3">
                   <h4 className="text-xl font-medium text-[#F5F5F5] mb-4 tracking-wide">Acrylic and Plastic Work</h4>
                   <p className="text-[#B0B0B0] text-[15px] leading-relaxed font-light mb-8">
                      Acrylic is a type of board sign that signifies to give information about the way in which you can search. In other words, a path sign is to choose where you can go.
                   </p>
                   <ul className="text-[#8A8A8A] text-[15px] font-light space-y-4 relative">
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Acrylic Paintings
                      </li>
                      <li className="flex items-center relative">
                         <div className="absolute w-[10px] h-[10px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[69px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Plastic Works Board
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery — 3D Fan Layout (reference image theme) */}
      <section className="relative bg-[#000000] py-28 md:py-36 overflow-hidden">
        <style>{`
          .fan-scene {
            perspective: 1200px;
          }
          .fan-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
          }
          .fan-card:hover {
            transform: none !important;
            z-index: 20 !important;
            box-shadow: 0 0 40px 6px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.2) !important;
            border-color: rgba(255,255,255,0.3) !important;
          }
          /* Subtle white center glow */
          .fan-glow {
            position: absolute;
            left: 50%;
            top: 44%;
            transform: translate(-50%, -50%);
            width: 520px;
            height: 520px;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%);
            pointer-events: none;
            z-index: 1;
          }
        `}</style>

        {/* Section header */}
        <div className="max-w-[1400px] mx-auto px-6 mb-20 relative z-10">
          <div className="flex justify-between items-end px-4">
            <div>
              <p className="text-[#8A8A8A] text-sm tracking-widest uppercase mb-2">Gallery</p>
              <h3 className="text-3xl font-light text-[#F5F5F5] tracking-wide">Recent Gallery</h3>
            </div>
            <Link to="/hamz-advertising/projects" className="text-sm text-[#F5F5F5] tracking-widest uppercase pb-1 border-b border-[#2F2F2F] hover:border-[#F5F5F5] transition-colors duration-300">
              Explore All
            </Link>
          </div>
        </div>

        {/* Green center glow */}
        <div className="fan-glow" />

        {/* 3D Fan of cards */}
        <div className="fan-scene relative flex items-center justify-center w-full" style={{ height: '480px' }}>

          {/* Card config: [rotateY, translateX, translateZ, rotateZ, opacity] */}
          {[
            { ry: -52, tx: -560, tz: -260, rz:  6,  op: 0.40, scale: 0.82 },
            { ry: -34, tx: -370, tz: -140, rz:  4,  op: 0.60, scale: 0.88 },
            { ry: -18, tx: -195, tz:  -50, rz:  2,  op: 0.82, scale: 0.94 },
            { ry:   0, tx:    0, tz:   30, rz:  0,  op: 1.00, scale: 1.00 }, // center
            { ry:  18, tx:  195, tz:  -50, rz: -2,  op: 0.82, scale: 0.94 },
            { ry:  34, tx:  370, tz: -140, rz: -4,  op: 0.60, scale: 0.88 },
            { ry:  52, tx:  560, tz: -260, rz: -6,  op: 0.40, scale: 0.82 },
          ].map((c, i) => (
            <div
              key={i}
              className="fan-card absolute w-[170px] h-[280px] md:w-[190px] md:h-[310px] rounded-2xl border border-dashed border-[#2a2a2a] bg-[#0d0d0d] flex flex-col items-center justify-center cursor-pointer group"
              style={{
                transform: `translateX(${c.tx}px) translateZ(${c.tz}px) rotateY(${c.ry}deg) rotateZ(${c.rz}deg) scale(${c.scale})`,
                opacity: c.op,
                zIndex: i === 3 ? 10 : 5 - Math.abs(i - 3),
                boxShadow: i === 3
                  ? '0 0 60px 10px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.12)'
                  : '0 8px 40px rgba(0,0,0,0.7)',
                borderColor: i === 3 ? 'rgba(255,255,255,0.20)' : undefined,
              }}
            >
              {/* Plus circle */}
              <div
                className="w-11 h-11 rounded-full border border-dashed flex items-center justify-center mb-4 transition-colors duration-500"
                style={{ borderColor: i === 3 ? 'rgba(255,255,255,0.40)' : '#2e2e2e' }}
              >
                <span
                  className="text-2xl leading-none transition-colors duration-500"
                  style={{ color: i === 3 ? 'rgba(255,255,255,0.70)' : '#2e2e2e' }}
                >+</span>
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.22em] transition-colors duration-500"
                style={{ color: i === 3 ? 'rgba(255,255,255,0.50)' : '#2a2a2a' }}
              >Add Work</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps - Work Process In 3 Steps (Refined to match image) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4">

          {/* Panel 1 — Intro (Unified Black) */}
          <div className="bg-[#0A0A0A] flex flex-col justify-center px-12 py-16 text-left border-r border-white/5">
            <h3 className="text-xl font-normal text-white leading-tight">
              Our Work Process
            </h3>
            <h3 className="text-3xl font-black text-white leading-tight mb-6">
              In 3 Steps
            </h3>
            <p className="text-[#B0B0B0] text-[15px] font-light leading-relaxed">
              HAMZ ADVERTISING delivers high-quality outputs. Our work process depends on different stages: Planning and strategy, design and development, then testing and delivering the product.
            </p>
          </div>

          {/* Panel 2 — Planning & Strategy */}
          <div className="bg-[#333333] flex flex-col items-center justify-center px-8 py-16 text-center border-l border-white/5 group hover:bg-[#3d3d3d] transition-all duration-500">
            <div className="mb-8 text-white group-hover:scale-110 transition-transform duration-500">
              <HomeIcon size={56} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-white mb-5">Planning & Strategy</h4>
            <p className="text-[#B0B0B0] text-sm font-light leading-relaxed px-4">
              Planning and strategy is the most valuable step, which will help you go smoothly. We care about your company and ideas.
            </p>
          </div>

          {/* Panel 3 — Design & Development */}
          <div className="bg-[#333333] flex flex-col items-center justify-center px-8 py-16 text-center border-l border-white/5 group hover:bg-[#3d3d3d] transition-all duration-500">
            <div className="mb-8 text-white group-hover:scale-110 transition-transform duration-500">
              <Printer size={56} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-white mb-5">Design & Development</h4>
            <p className="text-[#B0B0B0] text-sm font-light leading-relaxed px-4">
              Our work is progressed in a calm atmosphere. Our workers are quite intelligent and highly experienced in their business.
            </p>
          </div>

          {/* Panel 4 — Testing & Delivery */}
          <div className="bg-[#333333] flex flex-col items-center justify-center px-8 py-16 text-center border-l border-white/5 group hover:bg-[#3d3d3d] transition-all duration-500">
            <div className="mb-8 text-white group-hover:scale-110 transition-transform duration-500">
              <ImageIcon size={56} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-white mb-5">Testing & Delivery</h4>
            <p className="text-[#B0B0B0] text-sm font-light leading-relaxed px-4">
              After each work, we check all your material items. Our workers are always wary of that. Delivery and installation are very fast and fully covered.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h3 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-wide mb-8">Refined Vision.</h3>
           <p className="text-[#B0B0B0] text-lg font-light leading-relaxed mb-12">Elevate your corporate aesthetics to unprecedented levels.</p>
           <Link to="/hamz-advertising/contact" className="inline-block px-12 py-4 border border-[#2F2F2F] text-[#F5F5F5] text-sm tracking-[0.2em] uppercase hover:bg-[#F5F5F5] hover:text-[#0A0A0A] hover:border-[#F5F5F5] transition-all duration-500 rounded-sm">
               Initiate Dialogue
           </Link>
        </div>
      </section>

    </div>
  );
}
