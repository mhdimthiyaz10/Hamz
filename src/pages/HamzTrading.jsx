import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Menu, X } from 'lucide-react';

// ── Scroll Animation Hook ──────────────────────────────────────────────────
function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-revealed');
                        observer.unobserve(entry.target); // animate once
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

const HamzTrading = () => {
    useScrollReveal();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="w-full bg-[#1A1B20] text-white font-sans selection:bg-[#FF7549] selection:text-white relative flex flex-col">

            {/* --- HERO SECTION --- */}
            <section id="hero" className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#0A0A0A]">
                {/* Background Pattern and Gradients */}
                <div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30H15L30 0zm0 60L15 30h30L30 60z' fill='%23141414' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                ></div>
                {/* Purple Glow Left */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(60,10,50,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>
                {/* Cyan Glow Right */}
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(5,60,70,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>

                {/* Subtle Wavy Lines Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none z-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-200,100 C100,20 400,200 800,100 C1200,0 1500,150 1800,100' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3Cpath d='M-100,150 C200,80 500,250 900,150 C1300,50 1600,200 1900,150' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom'
                    }}>
                </div>

                {/* Header / Navigation */}
                <nav className="w-full flex justify-between items-center py-8 px-6 md:px-12 lg:px-24 xl:px-40 z-50 relative">
                    
                    {/* Left: Responsive Space / Back to Hub */}
                    <div className="flex-1 flex justify-start">
                        <Link to="/" className="absolute left-4 md:left-8 flex items-center justify-center w-8 h-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:flex z-50">
                            <ArrowLeft size={14} strokeWidth={2} />
                        </Link>
                    </div>

                    {/* Logo (Centered explicitly on mobile, natural on desktop) */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <Link to="/" className="flex items-center">
                            <img src="/file88.png.png" alt="Hamz Trading Logo" className="h-[35px] md:h-[40px] lg:h-[45px] object-contain drop-shadow-lg relative z-50" />
                        </Link>
                    </div>

                    {/* Right: Hamburger Toggle & Desktop Links */}
                    <div className="flex-1 flex justify-end">
                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden text-white z-50 p-2 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Nav Links (Desktop) */}
                        <div className="hidden md:flex items-center gap-10 text-[12px] md:text-[13px] font-medium tracking-wide uppercase text-gray-300">
                            <Link to="/hamz-trading" className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                                Home
                            </Link>
                            <Link to="/hamz-trading/about" className="hover:text-white transition-colors duration-300">
                                About Us
                            </Link>
                            <Link to="/hamz-trading/products" className="hover:text-white transition-colors duration-300">
                                Our Products
                            </Link>
                            <Link to="/hamz-trading/contact" className="hover:text-white transition-colors duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Overlay Card */}
                {isMobileMenuOpen && (
                    <div className="absolute top-24 left-4 right-4 bg-[#12111A]/95 backdrop-blur-xl border border-white/5 rounded-3xl p-8 z-40 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:hidden">
                        <Link to="/hamz-trading" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[15px] uppercase tracking-widest font-normal hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">Home</Link>
                        <Link to="/hamz-trading/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">About Us</Link>
                        <Link to="/hamz-trading/products" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">Our Products</Link>
                        <Link to="/hamz-trading/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors">Contact Us</Link>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 z-10 relative pb-32 pt-10">
                    <style>{`
                        @keyframes heroFadeInUp {
                            from { opacity: 0; transform: translateY(40px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .animate-hero-text {
                            opacity: 0;
                            animation: heroFadeInUp 0.9s ease-out forwards;
                        }
                    `}</style>

                    <div className="max-w-4xl flex flex-col items-start w-full md:pl-8 lg:pl-16">
                        {/* Arabic Title */}
                        <div className="mb-4 md:mb-5 animate-hero-text" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-2xl md:text-[36px] text-gray-200 font-normal" dir="rtl" style={{ fontFamily: "Arial, Tahoma, sans-serif", wordSpacing: "6px" }}>
                                مؤسسة حسين حبيب بن يوسف السيهاتي للتجارة
                            </h2>
                        </div>

                        {/* English Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-[62px] font-semibold tracking-tight leading-[1.12]" style={{ fontFamily: "Outfit, Inter, sans-serif" }}>
                            <div className="text-gray-100 pb-2 animate-hero-text" style={{ animationDelay: '0.4s' }}>HUSSAIN HABEEB BIN</div>
                            <div className="text-[#FF7549] pb-2 animate-hero-text" style={{ animationDelay: '0.5s' }}>YOUSIF AL SAIHATI</div>
                            <div className="text-gray-100 animate-hero-text" style={{ animationDelay: '0.6s' }}>TRADING</div>
                        </h1>

                        {/* Quote */}
                        <div className="flex pl-4 md:pl-5 border-l-[3px] border-[#FF7549] mt-8 md:mt-12 max-w-[650px] py-2 animate-hero-text" style={{ animationDelay: '0.8s' }}>
                            <p className="text-[17px] md:text-[19px] text-gray-300 font-light leading-relaxed">
                                "With honesty and integrity in every transaction trading with purpose, guided by values"
                            </p>
                        </div>
                    </div>
                </main>

                {/* Navigation Buttons (Bottom Center) */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 z-20">
                    <button 
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-11 h-11 rounded-full border border-gray-400/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all cursor-pointer bg-black/30 backdrop-blur-sm">
                        <ChevronLeft className="w-4 h-4 ml-[-2px]" />
                    </button>
                    <button 
                        onClick={() => {
                            document.getElementById('who-we-are').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-11 h-11 rounded-full border border-gray-400/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all cursor-pointer bg-black/30 backdrop-blur-sm">
                        <ChevronRight className="w-4 h-4 mr-[-2px]" />
                    </button>
                </div>
            </section>

            {/* --- WHO WE ARE SECTION --- */}
            <section id="who-we-are" className="relative min-h-[90vh] w-full flex items-center justify-center py-24 px-8 md:px-16 xl:px-32 bg-[#0A0A0A] overflow-hidden">
                {/* Background Pattern and Gradients */}
                <div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30H15L30 0zm0 60L15 30h30L30 60z' fill='%23141414' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                ></div>
                {/* Purple Glow Left */}
                <div className="absolute top-[10%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(60,10,50,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>
                {/* Cyan Glow Right */}
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(5,60,70,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>

                {/* Subtle Wavy Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100' stroke='%23ffffff' stroke-width='1' fill='none' opacity='0.3'/%3E%3Cpath d='M0,150 C200,100 400,200 600,150 C800,100 1000,200 1200,150' stroke='%23ffffff' stroke-width='1' fill='none' opacity='0.2'/%3E%3Cpath d='M0,200 C300,300 600,50 900,200 C1200,350 1500,50 1800,200' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 xl:gap-20 w-full max-w-[1500px] items-center">

                    {/* Left Arrows Image Component (custom built) */}
                    <div className="scroll-reveal sr-slide-left hidden lg:flex w-full h-[600px] bg-gradient-to-b from-[#031d16] to-[#010a08] border border-white/5 relative overflow-hidden flex-col justify-end items-center px-4 pt-16 group shadow-[0_0_50px_rgba(52,211,153,0.05)]">
                        {/* Inner ambient glow */}
                        <div className="absolute inset-0 bg-[#34D399] opacity-10 mix-blend-screen blur-[60px] group-hover:opacity-20 transition-opacity duration-1000"></div>

                        {/* Custom Arrows using SVG */}
                        <svg viewBox="0 0 160 250" className="w-[85%] h-full absolute bottom-[-10px] drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
                            {/* Shortest Arrow (Left) */}
                            <path d="M40,260 L40,160 L20,160 L50,110 L80,160 L60,160 L60,260 Z" fill="url(#arrow-grad)" opacity="0.8" className="hover:translate-y-[-10px] transition-transform duration-500" />
                            {/* Medium Arrow (Middle) */}
                            <path d="M80,260 L80,120 L60,120 L90,60 L120,120 L100,120 L100,260 Z" fill="url(#arrow-grad)" opacity="0.9" className="hover:translate-y-[-10px] transition-transform duration-500 delay-75" />
                            {/* Tallest Arrow (Right) */}
                            <path d="M120,260 L120,70 L100,70 L130,10 L160,70 L140,70 L140,260 Z" fill="url(#arrow-grad)" opacity="1" className="hover:translate-y-[-10px] transition-transform duration-500 delay-150" />

                            {/* Connecting Paths styling (horizontal steps) */}
                            <path d="M50,210 L80,210" stroke="#34D399" strokeWidth="2" opacity="0.4" />
                            <path d="M90,170 L120,170" stroke="#34D399" strokeWidth="2" opacity="0.4" />

                            <defs>
                                <linearGradient id="arrow-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#86efac" />
                                    <stop offset="50%" stopColor="#34d399" />
                                    <stop offset="100%" stopColor="#064e3b" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Center Text Content */}
                    <div className="lg:col-span-2 flex flex-col justify-center space-y-7 px-4 lg:px-6">
                        <h2 className="scroll-reveal sr-fade-up text-3xl md:text-[34px] font-bold tracking-wider text-white uppercase" style={{ fontFamily: "Inter, sans-serif", transitionDelay: '0.05s' }}>
                            WHO WE ARE
                        </h2>

                        <p className="scroll-reveal sr-fade-up text-gray-300 font-light leading-relaxed text-[16px] md:text-[18px]" style={{ transitionDelay: '0.15s' }}>
                            Hussain Habeeb Yousif Al Saihati Trading is a leading industrial service provider based in Saudi Arabia, established in 2022. Our core business areas include:
                        </p>

                        <ul className="space-y-4 py-3">
                            {['Project Support', 'Personal Protective Solutions', 'Oil Field Supply Services', 'Industrial Equipment & Accessories'].map((item, i) => (
                                <li key={i} className="scroll-reveal sr-fade-up flex items-center gap-5 text-gray-200 font-light tracking-wide text-[16px] md:text-[17px] group cursor-default" style={{ transitionDelay: `${0.25 + i * 0.1}s` }}>
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-400 flex-shrink-0 group-hover:border-white transition-colors duration-300"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="scroll-reveal sr-fade-up text-gray-300 font-light leading-relaxed text-[16px] md:text-[18px]" style={{ transitionDelay: '0.65s' }}>
                            We strive to build long-term relationships with our clients, grounded in strong corporate ethics and mutual trust. Our clients consistently view us not just as a supplier, but as a strategic business partner.
                        </p>
                    </div>

                    {/* Right Worker Image Placeholder */}
                    <div className="scroll-reveal sr-slide-right hidden lg:block w-full h-[600px] relative rounded-md overflow-hidden shadow-2xl bg-transparent">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Industrial Service Team"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/30 pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* --- OUR MISSION AND VISION SECTION --- */}
            <section id="mission-vision" className="relative w-full py-24 px-8 md:px-16 xl:px-40 bg-[#0A0A0A] overflow-hidden flex justify-center border-t border-white/5">
                {/* Background Pattern and Gradients */}
                <div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30H15L30 0zm0 60L15 30h30L30 60z' fill='%23141414' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                ></div>
                {/* Purple Glow Left */}
                <div className="absolute top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(60,10,50,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>
                {/* Cyan Glow Right */}
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(5,60,70,0.6),transparent_60%)] blur-3xl pointer-events-none z-0"></div>

                <div className="w-full max-w-[1500px] z-10 relative">
                    {/* Section Header */}
                    <h2 className="scroll-reveal sr-fade-up text-3xl md:text-5xl lg:text-[42px] font-semibold tracking-wide text-white mb-16 uppercase" style={{ fontFamily: "Inter, sans-serif", transitionDelay: '0.05s' }}>
                        OUR MISSION AND VISION
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                        {/* Image Left */}
                        <div className="scroll-reveal sr-slide-left w-full lg:w-1/2 flex items-center justify-center overflow-hidden shadow-2xl rounded-md bg-transparent" style={{ transitionDelay: '0.15s' }}>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Mission and Vision Planning"
                                className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-[1.03]"
                            />
                        </div>

                        {/* Text Content Right */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-14 py-4 lg:py-8 lg:pl-6">
                            {/* Mission */}
                            <div className="scroll-reveal sr-fade-up space-y-4" style={{ transitionDelay: '0.25s' }}>
                                <h3 className="text-2xl md:text-[28px] font-medium tracking-wider text-gray-200 uppercase">
                                    OUR MISSION
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed text-[16px] md:text-[18px]">
                                    Industrial solutions that enhance operational performance, ensure safety, and support sustainable growth for our clients across diverse industries. We are committed to excellence, integrity, and building long-term partnerships through superior service and technical expertise.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="scroll-reveal sr-fade-up space-y-4" style={{ transitionDelay: '0.45s' }}>
                                <h3 className="text-2xl md:text-[28px] font-medium tracking-wider text-gray-200 uppercase">
                                    OUR VISION
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed text-[16px] md:text-[18px]">
                                    To be the preferred industrial service partner recognized for driving operational excellence, advancing innovation, and setting the standard for quality and reliability in every industry we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BRANDS SCROLLER SECTION --- */}
            <section className="py-20 bg-[#010302] overflow-hidden">
                <style>{`
                    @keyframes brands-marquee-rtl {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .brands-marquee-track {
                        display: flex;
                        width: max-content;
                        animation: brands-marquee-rtl 70s linear infinite;
                    }
                `}</style>
                


                <div className="w-full overflow-hidden">
                    <div className="brands-marquee-track">
                        {/* Render brand logos for a seamless loop (duplicate the array to ensure smooth -50% translation) */}
                        {(() => {
                            const brands = [
                                { src: "/3m-logo.jpg", alt: "3M", bg: "bg-white" },
                                { src: "/fluke-logo.svg", alt: "Fluke", bg: "bg-[#FFC200]" },
                                { src: "/file3.png", alt: "Brand 3", bg: "bg-white", imgClass: "scale-[1.4]" },
                                { src: "/file4.png", alt: "Brand 4", bg: "bg-white" },
                                { src: "/file5.png", alt: "Brand 5", bg: "bg-white" },
                                { src: "/file6.png", alt: "Brand 6", bg: "bg-white" },
                                { src: "/file7.png", alt: "Brand 7", bg: "bg-white", imgClass: "scale-[2.2]" },
                                { src: "/file8.png", alt: "Brand 8", bg: "bg-white" },
                                { src: "/file9.png", alt: "Brand 9", bg: "bg-[#E4002B]", imgClass: "scale-[1.5]" },
                                { src: "/file11.png", alt: "Brand 11", bg: "bg-white", imgClass: "scale-[1.9]" },
                                { src: "/file12.png", alt: "Brand 12", bg: "bg-white", imgClass: "scale-[1.9]" },
                                { src: "/file13.png", alt: "Brand 13", bg: "bg-white", imgClass: "scale-[1.4]" },
                                { src: "/file14.png", alt: "Brand 14", bg: "bg-white" },
                                { src: "/file15.png", alt: "Brand 15", bg: "bg-white", imgClass: "scale-[1.4]" },
                                { src: "/file16.png", alt: "Brand 16", bg: "bg-white" },
                                { src: "/file17.png", alt: "Brand 17", bg: "bg-[#FFC200]", imgClass: "scale-[1.7]" },
                                { src: "/file18.png", alt: "Brand 18", bg: "bg-white" },
                                { src: "/file19.png", alt: "Brand 19", bg: "bg-white" },
                                { src: "/file20.png", alt: "Brand 20", bg: "bg-white", imgClass: "scale-[1.7]" },
                                { src: "/file21.png", alt: "Brand 21", bg: "bg-white" },
                                { src: "/file22.png", alt: "Brand 22", bg: "bg-white" },
                                { src: "/file24.png", alt: "Brand 24", bg: "bg-white" },
                                { src: "/file25.png", alt: "Brand 25", bg: "bg-white" },
                                { src: "/file26.png", alt: "Brand 26", bg: "bg-white" },
                                { src: "/file27.png", alt: "Brand 27", bg: "bg-white" },
                                { src: "/file28.png", alt: "Brand 28", bg: "bg-[#FFC907]", imgClass: "scale-[1.3]" },
                                { src: "/file29.png", alt: "Brand 29", bg: "bg-white" },
                                { src: "/file2.png", alt: "Brand 2", bg: "bg-[#E8572A]" },
                                { src: "/file30.png", alt: "Brand 30", bg: "bg-white", imgClass: "scale-[1.4]" },
                                { src: "/file31.png", alt: "Brand 31", bg: "bg-[#7B1040]" },
                                { src: "/file32.png", alt: "Brand 32", bg: "bg-[#D92B2B]", imgClass: "scale-[1.8]" }
                            ];
                            
                            // We need at least two full sets of brands for the marquee to loop seamlessly at 50%
                            return [...brands, ...brands].map((brand, i) => (
                                <div 
                                    key={i} 
                                    className={`w-48 h-24 mx-6 flex items-center justify-center ${brand.bg} rounded-lg flex-shrink-0 p-4 shadow-lg transition-all duration-300 hover:scale-110`}
                                >
                                    <img 
                                        src={brand.src} 
                                        alt={brand.alt} 
                                        className={`max-w-full max-h-full object-contain transition-transform duration-300 ${brand.imgClass || ''}`}
                                    />
                                </div>
                            ));
                        })()}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HamzTrading;
