'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const servicesData = [
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards, ensuring every piece we produce reflects quality, precision, and innovation.',
    rotation: 'rotate-[-6deg]',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)',
    shadowColor: 'rgba(124, 58, 237, 0.5)',
    number: '01',
  },
  {
    title: 'Timeliness',
    description:
      'We understand the importance of deadlines. That\'s why we deliver on time — without compromising on quality.',
    rotation: 'rotate-[0deg]',
    gradient: 'linear-gradient(135deg, #2d0a14 0%, #9f1239 50%, #e11d48 100%)',
    shadowColor: 'rgba(225, 29, 72, 0.5)',
    number: '02',
  },
  {
    title: 'Customer Focus',
    description:
      'Your vision is our mission. We listen, collaborate, and tailor our solutions to meet your unique branding needs.',
    rotation: 'rotate-[5deg]',
    gradient: 'linear-gradient(135deg, #022c22 0%, #065f46 50%, #059669 100%)',
    shadowColor: 'rgba(5, 150, 105, 0.5)',
    number: '03',
  },
  {
    title: 'Integrity',
    description:
      'We believe in honest communication and transparent processes, building trust with every client we serve.',
    rotation: 'rotate-[-4deg]',
    gradient: 'linear-gradient(135deg, #1c1200 0%, #92400e 50%, #d97706 100%)',
    shadowColor: 'rgba(217, 119, 6, 0.5)',
    number: '04',
  },
  {
    title: 'Innovation',
    description:
      'From bold signage to vibrant print materials, we stay ahead of trends to deliver fresh, impactful results that stand out.',
    rotation: 'rotate-[3deg]',
    gradient: 'linear-gradient(135deg, #001a2c 0%, #0e4f6e 50%, #0891b2 100%)',
    shadowColor: 'rgba(8, 145, 178, 0.5)',
    number: '05',
  },
];

const ScrollCard = forwardRef((props, ref) => {
  return (
    <ReactLenis root>
      <main className="bg-black" ref={ref}>
        <section className="text-white w-full bg-black py-16">
          {/* Our Values Header — Premium */}
          <style>{`
            @keyframes shimmer-title {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
            @keyframes glow-line {
              0%, 100% { box-shadow: 0 0 6px 1px rgba(212,175,55,0.4), 0 0 18px 3px rgba(212,175,55,0.15); opacity: 0.7; }
              50%       { box-shadow: 0 0 12px 3px rgba(212,175,55,0.7), 0 0 30px 6px rgba(212,175,55,0.25); opacity: 1; }
            }
            @keyframes blob-pulse {
              0%, 100% { transform: translateX(-50%) scale(1);   opacity: 0.13; }
              50%       { transform: translateX(-50%) scale(1.1); opacity: 0.20; }
            }
            @keyframes fade-up {
              from { opacity: 0; transform: translateY(14px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes line-flow {
              0% { left: -60px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
          `}</style>

          <div className="text-center flex flex-col items-center mb-20 px-6 relative">

            {/* Ambient glow blob behind heading */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '480px',
                height: '180px',
                background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(140,100,255,0.10) 50%, transparent 75%)',
                filter: 'blur(32px)',
                pointerEvents: 'none',
                animation: 'blob-pulse 5s ease-in-out infinite',
                zIndex: 0,
              }}
            />

            {/* Shimmer heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-8 relative z-10"
              style={{
                background: 'linear-gradient(90deg, #c0c0c0 0%, #f5f5f5 20%, #d4af37 40%, #f5f5f5 60%, #c0c0c0 80%, #d4af37 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer-title 6s linear infinite',
              }}
            >
              Our Values
            </h2>

            {/* Glowing accent line container */}
            <div
              className="mb-10 self-center rounded-full overflow-hidden"
              style={{
                width: '120px',
                height: '2px',
                background: 'rgba(212,175,55,0.15)',
                position: 'relative',
                zIndex: 10,
                boxShadow: '0 0 10px rgba(212,175,55,0.1)',
              }}
            >
              {/* Flowing glow beam */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-60px',
                  width: '60px',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, #d4af37, #ffffff, #d4af37, transparent)',
                  animation: 'line-flow 1.8s linear infinite',
                  boxShadow: '0 0 15px 4px rgba(212, 175, 55, 0.6)',
                  borderRadius: '50px'
                }}
              />
            </div>

            {/* Paragraph with keyword highlights */}
            <p
              className="text-lg md:text-xl lg:text-2xl leading-[1.9] font-light tracking-wide max-w-4xl mx-auto px-4 text-[#9A9A9A] relative z-10"
              style={{
                fontFamily: "'Montserrat', 'Inter', 'Helvetica Neue', sans-serif",
                animation: 'fade-up 0.9s ease both',
                animationDelay: '0.15s',
              }}
            >
              At the core of our agency is a commitment to{' '}
              <span style={{ color: '#d4af37', fontWeight: 400 }}>creativity</span>,{' '}
              <span style={{ color: '#c0c0c0', fontWeight: 400 }}>reliability</span>, and{' '}
              <span style={{ color: '#d4af37', fontWeight: 400 }}>results</span>. We believe that great design is more than just visuals — it&apos;s about{' '}
              <span style={{ color: '#c0c0c0', fontWeight: 400 }}>communication</span>,{' '}
              <span style={{ color: '#d4af37', fontWeight: 400 }}>impact</span>, and purpose. Our values guide every project we take on.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 max-w-7xl mx-auto gap-8 items-start">

            {/* Stacking Cards Column */}
            <div className="grid gap-0 flex-1">
              {servicesData.map((card, i) => (
                <figure key={i} className="sticky top-0 h-screen grid place-content-center">
                  {/* Stack shadow cards behind */}
                  <div className="relative flex items-center justify-center" style={{ width: '36rem', maxWidth: '90vw' }}>
                    {/* Back card 2 */}
                    <div
                      className="absolute rounded-2xl"
                      style={{
                        background: servicesData[(i + 2) % servicesData.length].gradient,
                        width: '90%',
                        height: '230px',
                        transform: 'rotate(6deg) translateY(10px)',
                        opacity: 0.4,
                        zIndex: 1,
                        boxShadow: `0 20px 60px ${card.shadowColor}`,
                      }}
                    />
                    {/* Back card 1 */}
                    <div
                      className="absolute rounded-2xl"
                      style={{
                        background: servicesData[(i + 1) % servicesData.length].gradient,
                        width: '95%',
                        height: '240px',
                        transform: 'rotate(3deg) translateY(5px)',
                        opacity: 0.6,
                        zIndex: 2,
                        boxShadow: `0 20px 60px ${card.shadowColor}`,
                      }}
                    />

                    {/* Main front card */}
                    <article
                      className={`relative z-10 w-full rounded-2xl p-8 flex flex-col gap-5 overflow-hidden ${card.rotation}`}
                      style={{
                        background: card.gradient,
                        boxShadow: `0 30px 80px ${card.shadowColor}, 0 0 0 1px rgba(255,255,255,0.08)`,
                        minHeight: '260px',
                      }}
                    >
                      {/* Gloss overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
                        }}
                      />



                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-wide relative z-10 drop-shadow-lg">
                        {card.title}
                      </h2>

                      {/* Divider */}
                      <div
                        className="w-14 h-[2px] rounded-full"
                        style={{ background: 'rgba(255,255,255,0.5)' }}
                      />

                      {/* Description */}
                      <p className="text-white/80 text-base md:text-lg leading-relaxed font-light relative z-10">
                        {card.description}
                      </p>
                    </article>
                  </div>
                </figure>
              ))}
            </div>

            {/* Sticky side panel */}
            <div className="sticky top-0 h-screen grid place-content-center lg:w-64 shrink-0">
              <div className="text-center space-y-5 px-4">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase">
                  Our Values
                </p>
                <h2 className="text-3xl lg:text-4xl font-light text-center tracking-tight leading-snug text-[#F5F5F5]">
                  What We<br />
                  <span className="font-bold bg-gradient-to-r from-violet-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                    Stand For
                  </span>
                </h2>
              </div>
            </div>

          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;
