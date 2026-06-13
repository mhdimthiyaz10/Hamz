'use client';
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards, ensuring every piece we produce reflects quality, precision, and innovation.',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)',
    shadowColor: 'rgba(124, 58, 237, 0.25)',
    glowColor: 'rgba(124, 58, 237, 0.6)',
    number: '01',
  },
  {
    title: 'Timeliness',
    description:
      'We understand the importance of deadlines. That\'s why we deliver on time — without compromising on quality.',
    gradient: 'linear-gradient(135deg, #2d0a14 0%, #9f1239 50%, #e11d48 100%)',
    shadowColor: 'rgba(225, 29, 72, 0.25)',
    glowColor: 'rgba(225, 29, 72, 0.6)',
    number: '02',
  },
  {
    title: 'Customer Focus',
    description:
      'Your vision is our mission. We listen, collaborate, and tailor our solutions to meet your unique branding needs.',
    gradient: 'linear-gradient(135deg, #022c22 0%, #065f46 50%, #059669 100%)',
    shadowColor: 'rgba(5, 150, 105, 0.25)',
    glowColor: 'rgba(5, 150, 105, 0.6)',
    number: '03',
  },
  {
    title: 'Integrity',
    description:
      'We believe in honest communication and transparent processes, building trust with every client we serve.',
    gradient: 'linear-gradient(135deg, #1c1200 0%, #92400e 50%, #d97706 100%)',
    shadowColor: 'rgba(217, 119, 6, 0.25)',
    glowColor: 'rgba(217, 119, 6, 0.6)',
    number: '04',
  },
  {
    title: 'Innovation',
    description:
      'From bold signage to vibrant print materials, we stay ahead of trends to deliver fresh, impactful results that stand out.',
    gradient: 'linear-gradient(135deg, #001a2c 0%, #0e4f6e 50%, #0891b2 100%)',
    shadowColor: 'rgba(8, 145, 178, 0.25)',
    glowColor: 'rgba(8, 145, 178, 0.6)',
    number: '05',
  },
];

const ScrollCard = forwardRef((props, ref) => {
  return (
    <main className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden" ref={ref}>
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
         <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[150px]" />
      </div>

      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Text Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 z-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left space-y-6"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#8A8A8A]"></span>
                Our Values
              </p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-snug text-[#F5F5F5] mb-6">
                What We<br />
                <span className="font-bold bg-gradient-to-r from-violet-400 via-rose-400 to-amber-400 bg-clip-text text-transparent pb-2">
                  Stand For
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#9A9A9A] leading-[1.8] font-light tracking-wide">
                At the core of our agency is a commitment to{' '}
                <span className="text-[#d4af37]">creativity</span>,{' '}
                <span className="text-[#c0c0c0]">reliability</span>, and{' '}
                <span className="text-[#d4af37]">results</span>. We believe that great design is more than just visuals — it&apos;s about{' '}
                <span className="text-[#c0c0c0]">communication</span>,{' '}
                <span className="text-[#d4af37]">impact</span>, and purpose. Our values guide every project we take on.
              </p>

              {/* Decorative graphic */}
              <div className="pt-8 opacity-40">
                 <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="49" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 10"/>
                    <circle cx="50" cy="50" r="30" stroke="url(#paint1_linear)" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="10" fill="#F5F5F5"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A78BFA"/>
                        <stop offset="0.5" stopColor="#FB7185"/>
                        <stop offset="1" stopColor="#FBBF24"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBBF24"/>
                        <stop offset="1" stopColor="#A78BFA"/>
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
             {servicesData.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-[24px] p-8 md:p-10 flex flex-col gap-5 overflow-hidden group cursor-default transition-all duration-300 ${
                     i === 4 ? "md:col-span-2" : ""
                  }`}
                  style={{
                    background: card.gradient,
                    boxShadow: `0 10px 30px ${card.shadowColor}, inset 0 0 0 1px rgba(255,255,255,0.05)`,
                  }}
                >
                  {/* Dynamic hover glow */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at top right, ${card.glowColor} 0%, transparent 70%)`,
                    }}
                  />
                  
                  {/* Glossy overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[24px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
                    }}
                  />
                  
                  <div className="flex justify-between items-start mb-2 relative z-10">
                     <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-wide drop-shadow-md">
                        {card.title}
                     </h3>
                     <span className="text-white/20 font-black text-4xl md:text-5xl select-none group-hover:text-white/40 transition-colors duration-500">
                        {card.number}
                     </span>
                  </div>

                  <div className="w-12 h-[2px] rounded-full bg-white/40 mb-2 relative z-10 group-hover:w-20 transition-all duration-500" />

                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-light relative z-10 group-hover:text-white transition-colors duration-300">
                     {card.description}
                  </p>
                </motion.div>
             ))}
          </div>

        </div>
      </section>
    </main>
  );
});

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;
