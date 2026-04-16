import React from 'react';
import ceoPhoto from '../../../assets/araabi.png.png';

export default function About() {
  return (
    <div className="w-full bg-[#050505] text-[#E0E0E0]">

      {/* New About Us Header & Content */}
      <div className="w-full pb-20 relative overflow-hidden">
        {/* Shaded Design Background with Wavy Grid Net */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')", filter: "grayscale(100%) contrast(150%) brightness(120%)" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#1A1A1A] rounded-full blur-[150px] opacity-60"></div>
          <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#111111] rounded-full blur-[180px] opacity-80"></div>
        </div>

        {/* Banner Section */}
        <div className="relative w-full h-[200px] md:h-[260px] bg-[#0A0A0A] flex items-center shadow-xl border-b border-[#222222] z-10 overflow-hidden">
          {/* Decorative shapes */}
          {/* Main lighter shape */}
          <div className="absolute left-[5%] top-0 h-[200%] w-[100px] md:w-[150px] bg-[#161616] transform -skew-x-[30deg] -translate-y-1/4"></div>
          <div className="absolute left-[15%] md:left-[18%] top-0 h-[200%] w-[50px] md:w-[80px] bg-[#050505] transform -skew-x-[30deg] -translate-y-1/4"></div>
          <div className="absolute left-[20%] md:left-[23%] top-0 h-[200%] w-[100px] md:w-[150px] bg-[#1A1A1A] transform -skew-x-[30deg] -translate-y-1/4"></div>

          {/* About Us Content Container */}
          <div className="max-w-[1400px] mx-auto w-full pl-8 md:pl-20 pr-0 relative z-[15] flex items-center">
            <h1 className="text-[#F5F5F5] text-4xl md:text-6xl font-semibold tracking-widest" style={{ fontFamily: '"Cinzel", serif', textShadow: '2px 2px 15px rgba(0,0,0,0.9)' }}>
              ABOUT US
            </h1>
            <div className="flex-grow h-[2px] bg-[#444444] ml-6 md:ml-10 mt-1 md:mt-2 opacity-60"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex justify-center mt-12 md:mt-16 relative z-10">
          {/* Shaded grey lighting design behind the text box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] h-[110%] bg-[#555555] blur-[120px] opacity-40 z-0 pointer-events-none rounded-full"></div>

          {/* The dark grey background box */}
          <div className="w-[90%] md:w-[85%] bg-[#111111] rounded-xl px-8 py-12 md:px-24 md:py-20 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-sm relative z-10">
            <p className="text-[#CCCCCC] text-lg md:text-[20px] leading-[1.9] mb-8 font-light tracking-wide text-justify md:text-left">
              We are a full-service advertising agency specializing in signage and printing
              solutions that bring brands to life. With years of experience, a passion for design, and a
              commitment to excellence, we've helped countless businesses from startups to
              established companies stand out in competitive markets.
            </p>
            <p className="text-[#CCCCCC] text-lg md:text-[20px] leading-[1.9] font-light tracking-wide text-justify md:text-left">
              Our team blends creativity with precision, offering end-to-end services from
              concept to completion. Whether it's a one-time project or a long-term campaign, we
              deliver visual solutions that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>


      {/* Mission and Vision Section */}
      <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
        {/* Background Design Related to Vision and Mission */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Ethereal light burst representing clear vision and focus */}
          <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#0E6958] blur-[150px] opacity-[0.07] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#FFFFFF] blur-[150px] opacity-[0.04] rounded-full"></div>

          {/* Directional / Compass Watermark (Vision) */}
          <svg viewBox="0 0 400 400" className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] opacity-[0.04] transform rotate-12">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10,15" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            {/* 4 Point Star */}
            <path d="M200,10 L212,188 L390,200 L212,212 L200,390 L188,212 L10,200 L188,188 Z" fill="#FFFFFF"/>
            {/* Minor 4 Point Star */}
            <path d="M200,50 L206,194 L350,200 L206,206 L200,350 L194,206 L50,200 L194,194 Z" fill="#FFFFFF" transform="rotate(45 200 200)"/>
          </svg>

          {/* Global Target / Strategic Grid Watermark (Mission) */}
          <svg viewBox="0 0 400 400" className="absolute bottom-[5%] left-[-5%] w-[450px] h-[450px] opacity-[0.05] transform -rotate-12">
             <circle cx="200" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="4" />
             <circle cx="200" cy="200" r="100" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6,4" />
             <circle cx="200" cy="200" r="50" fill="none" stroke="#FFFFFF" strokeWidth="2" />
             <circle cx="200" cy="200" r="10" fill="#FFFFFF" />
             <line x1="200" y1="0" x2="200" y2="400" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="5,5" />
             <line x1="0" y1="200" x2="400" y2="200" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-12 md:gap-20 mt-4">
          
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-between max-w-5xl mx-auto w-full">
            <div className="flex-1 text-left w-full pl-0 md:pl-8">
              <div className="relative inline-block mb-6 pt-2 pr-6">
                 {/* The green bar behind text */}
                 <div className="absolute top-[48%] left-[-15px] right-[5px] h-[55%] bg-[#053b31] transform -translate-y-1/2 z-0"></div>
                 <h2 className="relative z-10 text-white font-bold text-4xl md:text-[45px] uppercase ml-4" style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '3px' }}>OUR MISSION</h2>
              </div>
              <p className="text-[#E0E0E0] text-[17px] leading-[2.0] tracking-wide font-normal text-justify pr-0 md:pr-12 md:ml-4">
                To &nbsp;empower &nbsp;businesses &nbsp;through<br className="hidden md:block" />
                innovative signage and printing solutions that<br className="hidden md:block" />
                captivate, communicate, and elevate their<br className="hidden md:block" />
                brand presence.
              </p>
            </div>
            {/* Box */}
            <div className="w-[100%] md:w-[360px] h-[280px] bg-[#054338] flex-shrink-0 flex justify-center items-center overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
               {/* Target SVG */}
               <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 w-[280px] h-[280px] transform -translate-x-[40%] -translate-y-[50%]">
                 <path d="M 50 15 A 35 35 0 1 0 50 85 A 35 35 0 0 0 82 65" fill="none" stroke="#0e6958" strokeWidth="22" strokeLinecap="butt"/>
                 <circle cx="50" cy="50" r="14" fill="#0e6958" />
                 <path d="M 50 50 L 120 42 L 120 58 Z" fill="#0e6958" />
               </svg>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-between max-w-5xl mx-auto w-full md:mt-8">
            {/* Box */}
            <div className="w-[100%] md:w-[360px] h-[280px] bg-[#054338] flex-shrink-0 relative overflow-hidden order-2 md:order-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
               {/* Telescope SVG */}
               <svg viewBox="0 0 100 100" className="absolute bottom-[-15px] left-[-0px] w-[240px] h-[240px]">
                 <g transform="rotate(-30 50 55) translate(-10, -5)">
                   <path d="M 5 35 Q 25 35 45 42 L 45 58 Q 25 65 5 65 Z" fill="#0e6958"/>
                   <rect x="45" y="44" width="15" height="12" fill="#0e6958" />
                   <path d="M 60 42 L 72 38 L 72 62 L 60 58 Z" fill="#0e6958" />
                   <path d="M 72 44 L 80 44 L 80 56 L 72 56 Z" fill="#0e6958" />
                 </g>
                 <path d="M 45 65 L 25 120 L 35 120 L 50 85 L 65 120 L 75 120 L 55 65 Z" fill="#0e6958" />
                 <circle cx="50" cy="65" r="8" fill="#0e6958" />
               </svg>
            </div>
            {/* Text Side */}
            <div className="flex-1 text-left w-full pl-0 md:pl-16 order-1 md:order-2">
              <div className="relative inline-block mb-6 pt-2 pr-6">
                 {/* The dark green bar behind text */}
                 <div className="absolute top-[48%] left-[-15px] right-[5px] h-[55%] bg-[#053b31] transform -translate-y-1/2 z-0"></div>
                 <h2 className="relative z-10 text-white font-bold text-4xl md:text-[45px] uppercase ml-4" style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '3px' }}>OUR VISION</h2>
              </div>
              <p className="text-[#E0E0E0] text-[17px] leading-[2.0] tracking-wide font-normal text-justify md:ml-4">
                To be a trusted leader in signage and<br className="hidden md:block"/>
                printing, known for delivering innovative and<br className="hidden md:block"/>
                impactful visual solutions that elevate brands and<br className="hidden md:block"/>
                connect them with their audiences.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden border-t border-[#1A1A1A]">
        {/* Background Design Related to Leadership */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Guiding / North Star (Leadership & Direction) */}
          <svg viewBox="0 0 200 200" className="absolute top-[5%] left-[15%] w-[500px] h-[500px] opacity-[0.03] transform -rotate-12">
             <path d="M100,0 L105,95 L200,100 L105,105 L100,200 L95,105 L0,100 L95,95 Z" fill="#FFFFFF"/>
             <circle cx="100" cy="100" r="40" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4,4" />
             <circle cx="100" cy="100" r="20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          </svg>

          {/* Ascending Peaks / Chevrons (Words From The Top & Growth) */}
          <svg viewBox="0 0 400 400" className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] opacity-[0.02]">
             <path d="M200,50 L400,350 L350,350 L200,120 L50,350 L0,350 Z" fill="#FFFFFF" />
             <path d="M200,150 L350,380 L300,380 L200,220 L100,380 L50,380 Z" fill="#FFFFFF" />
             <path d="M200,250 L300,400 L250,400 L200,320 L150,400 L100,400 Z" fill="#FFFFFF" />
             <line x1="200" y1="50" x2="200" y2="400" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10,10" />
          </svg>

          {/* Premium Glow around the content */}
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-[#FFFFFF] blur-[180px] opacity-[0.02] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#8A8A8A] text-xs font-light tracking-[0.3em] uppercase mb-4 block text-center">Leadership</span>
          <h3 className="text-3xl font-light text-[#F5F5F5] mb-12 text-center tracking-wide">Words From The Top</h3>

          <div
            className="flex flex-col md:flex-row items-center gap-8 bg-[#111111] rounded-xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
          >
            {/* CEO Image */}
            <div className="flex-shrink-0 w-[160px] h-[190px] rounded-lg overflow-hidden border border-[#2F2F2F]">
              <img
                src={ceoPhoto}
                alt="Hussain Habeeb Yousif Al Saihati - CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h4 className="text-[#F5F5F5] text-xl font-semibold tracking-wide mb-1">
                Hussain Habeeb Yousif Al Saihati
              </h4>
              <p className="text-[#8A8A8A] text-sm font-light tracking-[0.2em] uppercase mb-5">CEO</p>
              <p className="text-[#C0C0C0] text-base leading-relaxed font-light italic">
                "Quality is our prime asset. With this principle at our core, we strive to lead the market as a bulk supplier by delivering exemplary products and solutions across all safety and consumable materials."
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
