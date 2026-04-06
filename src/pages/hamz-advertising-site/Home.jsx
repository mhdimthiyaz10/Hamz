import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Settings, Layers, Box, Eye, Home as HomeIcon, Printer, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollCard from '../../components/ui/scroll-card';

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

const GlowCard = ({ children, gradientStops }) => {
  const cardRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    requestAnimationFrame(() => {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-[20px] bg-[#0A0A0A] border border-[#2F2F2F] overflow-hidden group flex transition-colors duration-500 hover:border-[#8A8A8A] shadow-lg w-full"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, ${gradientStops})`,
        }}
      />
      <div className="absolute inset-[1px] rounded-[19px] bg-[#0A0A0A] z-0 transition-opacity duration-500 group-hover:opacity-[0.5]" />
      
      <div className="relative z-10 flex w-full pl-5 py-6 pr-5">
        {children}
      </div>
    </div>
  );
};

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

      {/* Section 2 — Our Values + Services Overview (unified) */}
      <ScrollCard />


      {/* Premium Services Detail Section — Curved Flowing Lines Background */}
      <section className="relative py-24 md:py-32 px-6 bg-[#000000] border-t border-b border-[#1A1A1A] overflow-hidden">
        
        {/* Curved Lines Background — Premium Technical Aesthetic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ zIndex: 0 }}>
          <svg
            className="w-full h-full opacity-[0.15]"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Symmetrical line groups inspired by reference image */}
            <g className="lines-static" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5">
              {/* Top Left Quadrant */}
              <path d="M-100,0 C200,0 400,200 400,500" />
              <path d="M-100,50 C250,50 450,250 450,550" />
              <path d="M-100,100 C300,100 500,300 500,600" />
              <path d="M-100,150 C350,150 550,350 550,650" />
              
              {/* Top Right Quadrant */}
              <path d="M1540,0 C1240,0 1040,200 1040,500" />
              <path d="M1540,50 C1190,50 990,250 990,550" />
              <path d="M1540,100 C1140,100 940,300 940,600" />
              <path d="M1540,150 C1090,150 890,350 890,650" />

              {/* Bottom Left Quadrant */}
              <path d="M-100,800 C200,800 400,600 400,300" />
              <path d="M-100,750 C250,750 450,550 450,250" />
              <path d="M-100,700 C300,700 500,500 500,200" />
              
              {/* Bottom Right Quadrant */}
              <path d="M1540,800 C1240,800 1040,600 1040,300" />
              <path d="M1540,750 C1190,750 990,550 990,250" />
              <path d="M1540,700 C1140,700 940,500 940,200" />
            </g>

            {/* Glowing Flowing Lines */}
            <g className="lines-active" stroke="url(#flow-gradient)" strokeWidth="1.2">
              <path d="M-100,100 C300,100 500,300 500,600" style={{ animation: 'line-flow 12s linear infinite', strokeDasharray: '120, 1000' }} />
              <path d="M1540,100 C1140,100 940,300 940,600" style={{ animation: 'line-flow 15s linear infinite reverse', strokeDasharray: '120, 1000' }} />
              <path d="M-100,700 C300,700 500,500 500,200" style={{ animation: 'line-flow 18s linear infinite', strokeDasharray: '120, 1000' }} />
              <path d="M1540,700 C1140,700 940,500 940,200" style={{ animation: 'line-flow 14s linear infinite reverse', strokeDasharray: '120, 1000' }} />
            </g>

            <defs>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="active-line-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <style>{`
              @keyframes line-flow {
                0% { stroke-dashoffset: 1120; }
                100% { stroke-dashoffset: -1120; }
              }
            `}</style>
          </svg>

          {/* Central soft ambient glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]" 
            style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }} 
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="mb-20 text-center">
             <h3 
               className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E4E4E4] to-[#999999] tracking-wider mb-6 drop-shadow-md"
               style={{ fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Georgia', serif", fontWeight: 400, fontStyle: 'italic' }}
             >
                What we craft
             </h3>
             <h4 className="text-base md:text-lg font-light text-[#B0B0B0] leading-relaxed max-w-3xl mx-auto tracking-wide">
                 HAMZ ADVERTISING delivers great presentations and executes high-fidelity board works. Completed using sophisticated precision machinery and contemporary minimalist aesthetics.
             </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Service 1 - Timeline Layout */}
             <GlowCard gradientStops="rgba(139, 92, 246, 1) 0%, rgba(79, 70, 229, 1) 40%, rgba(0, 0, 0, 0.8) 80%, transparent 100%">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-4 shrink-0 relative z-10 w-14">
                   {/* Icon */}
                   <div className="w-14 h-14 flex items-center justify-center mb-2">
                     <Eye size={20} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-2 pointer-events-none">
                   <h4 className="text-lg font-medium text-[#F5F5F5] mb-6 tracking-wide">Signage Solutions</h4>

                   <ul className="text-[#8A8A8A] text-sm font-light space-y-3 relative pointer-events-none">
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Indoor &amp; Outdoor Signs
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Billboards
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         LED Displays
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Wayfinding
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Vehicle Wraps
                      </li>
                   </ul>
                </div>
             </GlowCard>

             {/* Service 2 - Timeline Layout */}
             <GlowCard gradientStops="rgba(244, 63, 94, 1) 0%, rgba(225, 29, 72, 1) 40%, rgba(0, 0, 0, 0.8) 80%, transparent 100%">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-4 shrink-0 relative z-10 w-14">
                   {/* Icon */}
                   <div className="w-14 h-14 flex items-center justify-center mb-2">
                     <ImageIcon size={20} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-2 pointer-events-none">
                   <h4 className="text-lg font-medium text-[#F5F5F5] mb-6 tracking-wide">Printing Services</h4>

                   <ul className="text-[#8A8A8A] text-sm font-light space-y-3 relative pointer-events-none">
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Brochures
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Flyers
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Business Cards
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Banners, Posters, Packaging
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         And other Marketings
                      </li>
                   </ul>
                </div>
             </GlowCard>

             {/* Service 3 - Timeline Layout */}
             <GlowCard gradientStops="rgba(16, 185, 129, 1) 0%, rgba(14, 165, 233, 1) 40%, rgba(0, 0, 0, 0.8) 80%, transparent 100%">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-4 shrink-0 relative z-10 w-14">
                   {/* Icon */}
                   <div className="w-14 h-14 flex items-center justify-center mb-2">
                     <Box size={20} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-2 pointer-events-none">
                   <h4 className="text-lg font-medium text-[#F5F5F5] mb-6 tracking-wide">Design and Branding</h4>

                   <ul className="text-[#8A8A8A] text-sm font-light space-y-3 relative pointer-events-none">
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Logo Design
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Brand Identity Development
                      </li>
                      <li className="flex items-center relative gap-2">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-1/2 -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         Layout Services Tailored to Your Audience
                      </li>
                   </ul>
                </div>
             </GlowCard>

             {/* Service 4 - Timeline Layout (Copy of Signboards) */}
             <GlowCard gradientStops="rgba(245, 158, 11, 1) 0%, rgba(217, 119, 6, 1) 40%, rgba(0, 0, 0, 0.8) 80%, transparent 100%">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-4 shrink-0 relative z-10 w-14">
                   {/* Icon */}
                   <div className="w-14 h-14 flex items-center justify-center mb-2">
                     <Eye size={20} className="text-[#B0B0B0] group-hover:text-[#F5F5F5] transition-colors duration-500" strokeWidth={2} />
                   </div>
                   {/* Vertical Line */}
                   <div className="w-[1px] flex-grow bg-[#2F2F2F] group-hover:bg-[#444] transition-colors duration-500"></div>
                </div>

                {/* Text Content Column */}
                <div className="flex-1 flex flex-col pt-2 pointer-events-none">
                   <h4 className="text-lg font-medium text-[#F5F5F5] mb-6 tracking-wide">Installation &amp; Maintenance</h4>

                   <ul className="text-[#8A8A8A] text-sm font-light space-y-3 relative pointer-events-none tracking-wide">
                      <li className="flex items-center relative gap-2 leading-loose">
                         <div className="absolute w-[8px] h-[8px] rounded-full border-2 border-[#8A8A8A] bg-[#1A1A1A] -left-[48px] top-[14px] -translate-y-1/2 group-hover:border-[#F5F5F5] transition-colors duration-500 z-20"></div>
                         End-to-End Execution including expert installation and ongoing support for your signage
                      </li>
                   </ul>
                </div>
             </GlowCard>
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
