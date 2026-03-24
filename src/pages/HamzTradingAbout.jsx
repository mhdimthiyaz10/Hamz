import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const HamzTradingAbout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-[#FF7549] selection:text-white relative flex flex-col overflow-x-hidden">

            {/* Background ambient light matching the image (purple/pink glow at top) */}
            <div className="absolute top-[-20%] left-[10%] w-[80%] h-[60%] bg-[#2a0e41] opacity-60 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>

            {/* Navbar - Sticky */}
            <nav className="sticky top-0 w-full flex justify-between items-center py-6 px-8 md:px-16 xl:px-32 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-white/5">
                {/* Logo */}
                <Link to="/hamz-trading" className="flex items-center">
                    <img src="/file88.png.png" alt="Hamz Trading Logo" className="h-[35px] md:h-[40px] lg:h-[45px] object-contain drop-shadow-lg relative z-50" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-white z-50 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Nav Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.1em] uppercase text-gray-300">
                    <Link to="/hamz-trading" className="hover:text-white transition-colors duration-300">
                        HOME
                    </Link>
                    <Link to="/hamz-trading/about" className="px-6 py-2 bg-gray-100 text-black rounded-full font-bold hover:bg-white transition-colors">
                        ABOUT US
                    </Link>
                    <Link to="/hamz-trading/products" className="hover:text-white transition-colors duration-300">
                        OUR PRODUCTS
                    </Link>
                    <Link to="/hamz-trading/contact" className="hover:text-white transition-colors duration-300">
                        CONTACT US
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay Card */}
            {isMobileMenuOpen && (
                <div className="fixed top-24 left-4 right-4 bg-[#12111A]/95 backdrop-blur-xl border border-white/5 rounded-3xl p-8 z-40 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:hidden">
                    <Link to="/hamz-trading" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[15px] uppercase tracking-widest font-normal hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">Home</Link>
                    <Link to="/hamz-trading/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">About Us</Link>
                    <Link to="/hamz-trading/products" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors pb-2 border-b border-white/5">Our Products</Link>
                    <Link to="/hamz-trading/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#FF7549] transition-colors">Contact Us</Link>
                </div>
            )}

            <main className="flex-grow flex flex-col z-10 relative">

                {/* Breadcrumbs */}
                <div className="w-full px-8 md:px-16 xl:px-32 flex items-center gap-6 mt-8 mb-12 max-w-[1400px] mx-auto text-[18px] md:text-[22px] font-extralight tracking-widest text-gray-400">
                    <Link to="/hamz-trading" className="hover:text-white transition-colors duration-300">HOME</Link>
                    <div className="w-16 h-[2px] bg-[#FF7549]"></div>
                    <span className="text-white">ABOUT US</span>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center px-0 md:px-0 xl:px-0">
                    {/* Left Image Placeholder matching reference style completely touching left edge or slightly padded */}
                    <div className="w-full md:flex-1 pl-8 md:pl-16 xl:pl-32 flex">
                        <div
                            className="w-full max-w-[400px] aspect-[4/5] md:aspect-square relative bg-cover bg-center overflow-hidden"
                            style={{
                                backgroundImage: `url('/hamz-building-cutout.png')`,
                                borderRadius: '40px'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                        </div>
                    </div>

                    {/* Right Quote & Arabic text */}
                    <div className="flex flex-col flex-1 pr-8 md:pr-16 xl:pr-32 h-full justify-center">
                        <h2 className="text-[22px] md:text-[30px] leading-tight font-medium text-white max-w-none tracking-wide">
                            <span className="md:whitespace-nowrap">
                                <span className="text-[#FF7549]">"</span>With honesty and integrity in every transaction
                            </span>
                            <br className="hidden md:block" />
                            <span className="md:whitespace-nowrap">
                                trading with purpose, guided by values.<span className="text-[#FF7549]">"</span>
                            </span>
                        </h2>

                        <div className="mt-16 flex flex-col items-start w-full max-w-[800px] text-left ml-6 md:ml-12">
                            <h4 className="text-[26px] md:text-[32px] text-white font-normal tracking-wide leading-none" dir="rtl" style={{ fontFamily: "Arial, Tahoma, sans-serif", wordSpacing: "6px" }}>
                                مؤسسة حسين حبيب بن يوسف السيهاتي <span className="text-[#FF7549]">للتجارة</span>
                            </h4>
                            <p className="text-[14px] md:text-[17px] text-white mt-1 font-bold tracking-[0.1em]" style={{ fontFamily: "Inter, sans-serif" }}>
                                HUSSAIN HABEEB BIN YOUSIF AL SAIHATI <span className="text-[#FF7549]">TRADING</span>
                            </p>
                        </div>

                    </div>
                </div>

                {/* Body Text & Cards */}
                <div className="mt-28 px-8 md:px-16 xl:px-32 max-w-[1400px] mx-auto w-full mb-24">
                    <p className="text-[15px] md:text-[17px] font-light text-[#E0E0E0] leading-relaxed mb-8">
                        Hussain Habeeb Yousif Al Saihati Trading is a leading industrial service provider based in Saudi Arabia, established in 2022. Our core<br className="hidden md:block" /> business areas include:
                    </p>

                    {/* 4 Cards in a row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {['Project Support', 'Personal Protective Solutions', 'Oil Field Supply Services', 'Industrial Equipment &\nAccessories'].map((title, idx) => (
                            <div key={idx} className="bg-[#12111A] rounded border border-white/5 relative p-6 min-h-[90px] flex items-center justify-center text-center group shadow-[0_0_15px_rgba(76,29,149,0.05)] hover:border-white/10 transition-all duration-300 hamz-flowing-glow">
                                {/* Top inner highlight */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF7549]/40 to-transparent opacity-80 z-20"></div>
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-[#4c1d95] opacity-[0.05] group-hover:opacity-[0.08] transition-opacity rounded z-0"></div>
                                <p className="text-[14px] font-light text-[#D1D1D1] group-hover:text-white transition-colors z-10 whitespace-pre-line tracking-wide relative">{title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-[15px] md:text-[17px] font-light text-[#E0E0E0] leading-relaxed max-w-[1400px]">
                        <p>We strive to build long-term relationships with our clients, grounded in strong corporate ethics and mutual trust. Our clients consistently<br className="hidden lg:block" /> view us not just as a supplier, but as a strategic business partner.</p>

                        <p>To support our customers in crafting effective business strategies, we offer detailed oversight — monitoring crops from sowing to harvest<br className="hidden lg:block" /> and providing fortnightly reports. Our commitment to maintaining the highest quality standards in all products and services sets us apart.</p>

                        <p>Transparency, honesty, and customer satisfaction are at the heart of our operations. We take pride in delivering high-quality products and<br className="hidden lg:block" /> ensuring on-time shipments — values that have helped us earn the reputation of being a dependable and trustworthy partner.</p>

                        <p>We are dedicated to exceeding customer expectations through exceptional service and quality. Our team of experienced professionals<br className="hidden lg:block" /> oversees procurement, finance, marketing, and sales with efficiency and precision, ensuring that every client receives the best support<br className="hidden lg:block" /> possible.</p>
                    </div>
                </div>

                {/* CEO Section */}
                <div className="w-full px-8 md:px-16 xl:px-32 max-w-[1400px] mx-auto mb-32 flex flex-col md:flex-row gap-8 items-start relative z-10">
                    {/* CEO Image */}
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex-shrink-0 overflow-hidden relative">
                        <img
                            src="/arabi.png"
                            alt="Hussain Habeeb Yousif Al Saihati"
                            className="w-full h-full object-cover scale-[1.05]"
                        />
                    </div>
                    {/* CEO Info & Quote */}
                    <div className="flex flex-col flex-1 pt-2">
                        <h3 className="text-[19px] md:text-[21px] font-bold text-white tracking-wide">
                            Hussain Habeeb Yousif Al Saihati
                        </h3>
                        <p className="text-[14px] text-gray-400 mt-1 mb-8">
                            CEO
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#E0E0E0] font-light leading-relaxed max-w-[850px]">
                            "Quality is our prime asset. With this principle at our core, we strive to lead the market as a bulk <br className="hidden lg:block" /> supplier by delivering exemplary products and solutions across all safety and consumable <br className="hidden lg:block" /> materials."
                        </p>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="w-full bg-[#111111] py-5 px-8 md:px-16 xl:px-32 text-left text-[11px] text-gray-500 font-light relative z-10 mt-auto">
                <p>Copyright © 2025 HAMZ. All Right Reserved</p>
            </footer>
        </div>
    );
};

export default HamzTradingAbout;
