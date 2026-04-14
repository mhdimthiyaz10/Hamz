import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
const HamzTradingContact = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#F47920] selection:text-white pb-10">
            {/* Header / Navigation */}
            <nav className="w-full flex justify-between items-center py-8 px-6 md:px-12 lg:px-24 xl:px-40 z-50 relative">
                
                {/* Left: Responsive Space / Back to Hub */}
                <div className="flex-1 md:flex-none md:w-12 lg:w-16 flex justify-start">
                    <Link to="/" className="absolute left-4 md:left-8 flex items-center justify-center w-8 h-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex z-50">
                        <ArrowLeft size={14} strokeWidth={2} />
                    </Link>
                </div>

                {/* Logo (Centered explicitly on mobile, natural on desktop) */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <Link to="/hamz-trading" className="flex items-center">
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
                        <Link to="/hamz-trading" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Home
                        </Link>
                        <Link to="/hamz-trading/about" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                            About Us
                        </Link>
                        <Link to="/hamz-trading/products" className="hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Our Products
                        </Link>
                        <Link to="/hamz-trading/contact" className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay Card */}
            {isMobileMenuOpen && (
                <div className="absolute top-24 left-4 right-4 bg-[#12111A]/95 backdrop-blur-xl border border-white/5 rounded-3xl p-8 z-40 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:hidden">
                    <Link to="/hamz-trading" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#F47920] transition-colors pb-2 border-b border-white/5">Home</Link>
                    <Link to="/hamz-trading/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#F47920] transition-colors pb-2 border-b border-white/5">About Us</Link>
                    <Link to="/hamz-trading/products" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] uppercase tracking-widest font-normal text-gray-400 hover:text-[#F47920] transition-colors pb-2 border-b border-white/5">Our Products</Link>
                    <Link to="/hamz-trading/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[15px] uppercase tracking-widest font-normal hover:text-[#F47920] transition-colors">Contact Us</Link>
                </div>
            )}

            {/* --- Navigation / Breadcrumbs --- */}
            <div className="w-full py-8 px-8 md:px-16 xl:px-32 flex items-center gap-4 text-[13px] tracking-widest uppercase font-medium relative z-20">
                <Link to="/hamz-trading" className="hover:text-[#F47920] transition-colors duration-300">HOME</Link>
                <span className="w-12 h-[1px] bg-[#F47920]"></span>
                <span className="text-gray-500">CONTACT US</span>
            </div>

            <main className="w-full px-8 md:px-16 xl:px-32 relative z-10">
                {/* --- Section Title --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] uppercase">CONTACT US</h1>
                </motion.div>

                {/* --- Contact Info & Map --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Info & Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8 flex flex-col gap-10"
                    >
                        {/* Information Details */}
                        <div className="flex flex-col gap-6 text-[18px] md:text-[22px] font-light tracking-wide text-gray-300">
                            <p>
                                <span className="text-white font-medium">Address : </span>
                                Muadh Bin Jabal, Al Amamrah Dis P.B 6913 - Dammam 32245 Kingdom Of Saudi Arabia
                            </p>
                            <p>
                                <span className="text-white font-medium">Phone : </span>
                                +966 58 328 3813
                            </p>
                            <p>
                                <span className="text-white font-medium">Email : </span>
                                sales@hamzksa.com
                            </p>
                        </div>

                        {/* Map Section */}
                        <div className="w-full h-[450px] rounded-sm overflow-hidden border border-white/5 transition-all duration-700">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.76189917387!2d50.007626966144865!3d26.371948496417753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb0749000001%3A0x7d6c6948512596be!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1710410000000!5m2!1sen!2sae" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="HAMZ TRADING Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form Overlay */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-4 bg-[#050505] border border-white/5 rounded-sm p-8 md:p-12 shadow-2xl relative z-20 lg:-mt-24"
                    >
                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] text-gray-400 font-light tracking-wide">Your Name</label>
                                <input 
                                    type="text" 
                                    className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#F47920] transition-colors text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] text-gray-400 font-light tracking-wide">Email</label>
                                <input 
                                    type="email" 
                                    className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#F47920] transition-colors text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] text-gray-400 font-light tracking-wide">Your Name</label>
                                <input 
                                    type="text" 
                                    className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#F47920] transition-colors text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] text-gray-400 font-light tracking-wide">Subject</label>
                                <input 
                                    type="text" 
                                    className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#F47920] transition-colors text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] text-gray-400 font-light tracking-wide">Message</label>
                                <textarea 
                                    rows="1"
                                    className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#F47920] transition-colors text-white resize-none"
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#F47920] text-white py-4 mt-4 font-bold tracking-widest uppercase hover:bg-[#e66a41] transition-colors duration-300"
                            >
                                Submit Now
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </main>

            {/* Footer Background Effect */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#F47920]/5 to-transparent pointer-events-none z-0"></div>
        </div>
    );
};

export default HamzTradingContact;
