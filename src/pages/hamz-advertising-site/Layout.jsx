import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0A0A0A] text-[#F5F5F5]" dir="ltr" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Header */}
      <header className="w-full bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#2F2F2F] sticky top-0 z-50 transition-all duration-300">
        {/* Main Nav */}
        <div className="container mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
           {/* Logo */}
           <div className="mb-6 md:mb-0 flex-shrink-0">
              <Link to="/hamz-advertising" className="block text-center md:text-left transition-opacity hover:opacity-80">
                <div className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#F5F5F5]">
                  HAMZ <span className="font-bold text-[#8A8A8A]">ADVERTISING</span>
                </div>
              </Link>
           </div>
           
           {/* Links */}
           <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-[13px] uppercase tracking-widest text-[#B0B0B0]">
              <Link to="/hamz-advertising" className="hover:text-[#F5F5F5] transition-colors duration-300">Home</Link>
              <Link to="/hamz-advertising/about" className="hover:text-[#F5F5F5] transition-colors duration-300">About Us</Link>
              <Link to="/hamz-advertising/projects" className="hover:text-[#F5F5F5] transition-colors duration-300">Gallery</Link>
              <Link to="/hamz-advertising/contact" className="hover:text-[#F5F5F5] transition-colors duration-300 border border-white/10 px-6 py-2 rounded-sm -my-2 flex items-center">Contact</Link>
           </nav>
        </div>
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
                     <a href="#" className="p-3 rounded-full border border-[#2F2F2F] hover:bg-[#1A1A1A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] transition-all duration-300"><Facebook size={18} strokeWidth={1.2} /></a>
                     <a href="#" className="p-3 rounded-full border border-[#2F2F2F] hover:bg-[#1A1A1A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] transition-all duration-300"><Twitter size={18} strokeWidth={1.2} /></a>
                     <a href="#" className="p-3 rounded-full border border-[#2F2F2F] hover:bg-[#1A1A1A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] transition-all duration-300"><Instagram size={18} strokeWidth={1.2} /></a>
                 </div>
                 <p className="text-xs tracking-[0.15em] uppercase font-light text-[#8A8A8A]">© {new Date().getFullYear()} HAMZ ADVERTISING. All Rights Reserved.</p>
             </div>
         </div>
      </footer>
    </div>
  );
}
