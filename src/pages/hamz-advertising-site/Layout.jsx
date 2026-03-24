import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Facebook, Instagram, ArrowLeft, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0A0A0A] text-[#F5F5F5]" dir="ltr" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Header */}
      <header className="w-full bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#2F2F2F] sticky top-0 z-50 transition-all duration-300">
        {/* Main Nav */}
        <div className="container mx-auto px-6 py-4 md:py-8 flex justify-between items-center relative">
           
           {/* Left: Hub back button */}
           <div className="flex-1 flex justify-start z-50">
               <Link to="/" className="flex items-center justify-center w-8 h-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 text-[#F5F5F5] rounded-full hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <ArrowLeft size={14} strokeWidth={2} />
               </Link>
           </div>
           
           {/* Logo (Center) */}
           <div className="flex-[2] md:flex-1 flex justify-center flex-shrink-0 z-50">
              <Link to="/hamz-advertising" className="block text-center transition-opacity hover:opacity-80">
                <div className="text-[17px] md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase text-[#F5F5F5] whitespace-nowrap">
                  HAMZ <span className="font-bold text-[#8A8A8A]">ADVERTISING</span>
                </div>
              </Link>
           </div>
           
           {/* Right: Hamburger Toggle & Desktop Links */}
           <div className="flex-1 flex justify-end z-50">
               {/* Mobile Menu Toggle */}
               <button 
                   className="md:hidden text-[#F5F5F5] p-2 focus:outline-none"
                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                   {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>

               {/* Desktop Nav Links */}
               <nav className="hidden md:flex flex-wrap justify-end gap-8 md:gap-12 text-[13px] uppercase tracking-widest text-[#B0B0B0] items-center">
                  <Link to="/hamz-advertising" className="hover:text-[#F5F5F5] transition-colors duration-300">Home</Link>
                  <Link to="/hamz-advertising/about" className="hover:text-[#F5F5F5] transition-colors duration-300">About Us</Link>
                  <Link to="/hamz-advertising/projects" className="hover:text-[#F5F5F5] transition-colors duration-300">Gallery</Link>
                  <Link to="/hamz-advertising/contact" className="hover:text-[#F5F5F5] transition-colors duration-300 border border-white/10 px-6 py-2 rounded-sm -my-2 flex items-center">Contact</Link>
               </nav>
           </div>
        </div>

        {/* Mobile Menu Overlay Card */}
        {isMobileMenuOpen && (
            <div className="absolute top-20 left-4 right-4 bg-[#12111A]/95 backdrop-blur-xl border border-[#2F2F2F] rounded-3xl p-8 z-40 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:hidden">
                <Link to="/hamz-advertising" onClick={() => setIsMobileMenuOpen(false)} className="text-[#F5F5F5] text-[15px] uppercase tracking-widest font-normal hover:text-white transition-colors pb-2 border-b border-[#2F2F2F]">Home</Link>
                <Link to="/hamz-advertising/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#B0B0B0] text-[15px] uppercase tracking-widest font-normal hover:text-white transition-colors pb-2 border-b border-[#2F2F2F]">About Us</Link>
                <Link to="/hamz-advertising/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-[#B0B0B0] text-[15px] uppercase tracking-widest font-normal hover:text-white transition-colors pb-2 border-b border-[#2F2F2F]">Gallery</Link>
                <Link to="/hamz-advertising/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#B0B0B0] text-[15px] uppercase tracking-widest font-normal hover:text-white transition-colors">Contact</Link>
            </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full bg-[#0A0A0A]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-[#B0B0B0] py-20 border-t border-[#2F2F2F]">
         <div className="container mx-auto px-6">
             <div className="flex flex-col items-center justify-center space-y-10">
                  <div className="flex gap-6">
                     <a href="https://wa.me/966545636786" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-[#2F2F2F] hover:bg-[#1A1A1A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] transition-all duration-300 flex items-center justify-center">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                         </svg>
                     </a>
                     <a href="https://www.instagram.com/hamzadvertising?igsh=eTUwZjB2cnJ5bGZh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-[#2F2F2F] hover:bg-[#1A1A1A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] transition-all duration-300">
                         <Instagram size={18} strokeWidth={1.2} />
                     </a>
                 </div>
                 <p className="text-xs tracking-[0.15em] uppercase font-light text-[#8A8A8A]">© {new Date().getFullYear()} HAMZ ADVERTISING. All Rights Reserved.</p>
             </div>
         </div>
      </footer>
    </div>
  );
}
