import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Instagram, ArrowLeft, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',     to: '/hamz-advertising' },
  { label: 'About Us', to: '/hamz-advertising/about' },
  { label: 'Gallery',  to: '/hamz-advertising/projects' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/hamz-advertising'
      ? location.pathname === path
      : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0A0A0A] text-[#F5F5F5]" dir="ltr" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>

      {/* ── Header ── */}
      <header className="w-full sticky top-0 z-50" style={{ background: 'rgba(10,10,10,0.82)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* slim gold accent line at very top */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.45) 35%, rgba(212,175,55,0.45) 65%, transparent 100%)' }} />

        <div className="container mx-auto px-6 flex items-center justify-between relative" style={{ height: '58px' }}>

          {/* Left — back button & Logo */}
          <div className="flex items-center gap-5" style={{ flex: '0 0 auto' }}>
            <Link
              to="/"
              title="Back to Hub"
              className="flex items-center justify-center rounded-full transition-all duration-300"
              style={{ width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.10)'; e.currentTarget.style.borderColor='rgba(212,175,55,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; }}
            >
              <ArrowLeft size={13} strokeWidth={2} />
            </Link>

            <Link to="/hamz-advertising" className="transition-opacity hover:opacity-75">
              <span style={{ fontSize: '14px', fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#F5F5F5', whiteSpace: 'nowrap' }}>
                HAMZ&nbsp;<span style={{ fontWeight: 700, color: '#8A8A8A' }}>ADVERTISING</span>
              </span>
            </Link>
          </div>

          {/* Center — Desktop nav links (absolutely centered) */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{
                  padding: '6px 14px',
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: isActive(to) ? '#F5F5F5' : '#8A8A8A',
                  position: 'relative',
                  transition: 'color 0.25s',
                  textDecoration: 'none',
                  borderBottom: isActive(to) ? '1px solid rgba(212,175,55,0.7)' : '1px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F5F5F5'; }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive(to) ? '#F5F5F5' : '#8A8A8A'; }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right — Contact CTA & Mobile hamburger */}
          <div className="flex items-center gap-1" style={{ flex: '0 0 auto' }}>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#F5F5F5] p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Contact CTA (desktop only) */}
            <Link
              to="/hamz-advertising/contact"
              className="hidden md:block"
              style={{
                padding: '7px 18px',
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: isActive('/hamz-advertising/contact') ? '#d4af37' : '#c0c0c0',
                border: `1px solid ${isActive('/hamz-advertising/contact') ? 'rgba(212,175,55,0.7)' : 'rgba(255,255,255,0.14)'}`,
                borderRadius: '3px',
                background: isActive('/hamz-advertising/contact') ? 'rgba(212,175,55,0.07)' : 'transparent',
                transition: 'all 0.25s',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(212,175,55,0.7)'; e.currentTarget.style.color='#d4af37'; e.currentTarget.style.background='rgba(212,175,55,0.07)'; }}
              onMouseLeave={e => {
                const a = isActive('/hamz-advertising/contact');
                e.currentTarget.style.borderColor = a ? 'rgba(212,175,55,0.7)' : 'rgba(255,255,255,0.14)';
                e.currentTarget.style.color = a ? '#d4af37' : '#c0c0c0';
                e.currentTarget.style.background = a ? 'rgba(212,175,55,0.07)' : 'transparent';
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div style={{ position: 'absolute', top: '60px', left: '12px', right: '12px', background: 'rgba(14,13,22,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px 24px', zIndex: 40, display: 'flex', flexDirection: 'column', gap: '0px', boxShadow: '0 24px 60px rgba(0,0,0,0.7)' }}>
            {[...navLinks, { label: 'Contact', to: '/hamz-advertising/contact' }].map(({ label, to }, idx, arr) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  padding: '14px 0',
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive(to) ? '#d4af37' : '#9A9A9A',
                  borderBottom: idx < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </Link>
            ))}
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
