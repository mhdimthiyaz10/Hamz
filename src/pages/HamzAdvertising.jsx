import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HamzAdvertising = () => {
    return (
        <div className="min-h-screen w-full bg-[#020806] text-white flex flex-col pt-32 px-6 items-center selection:bg-[#4ADE80] selection:text-white">
            <Link to="/" className="fixed top-8 left-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors z-50 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold tracking-widest uppercase text-sm">Back</span>
            </Link>

            <div className="max-w-4xl w-full mx-auto text-center mt-20 relative z-10">

                {/* Geometric Logo Placeholder */}
                <div className="h-24 w-40 mx-auto mb-8 relative z-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 80" className="w-full h-full fill-[#4ADE80] drop-shadow-md">
                        {/* Stylized Arabic Logomark base shapes */}
                        <rect x="25" y="60" width="55" height="4" />
                        <rect x="25" y="25" width="4" height="35" />
                        <rect x="35" y="30" width="4" height="30" />
                        <rect x="45" y="15" width="4" height="45" />
                        <rect x="55" y="35" width="4" height="25" />
                        <rect x="65" y="20" width="4" height="40" />
                        <rect x="76" y="28" width="4" height="32" />
                        {/* Cross bars */}
                        <rect x="25" y="45" width="10" height="4" />
                        <rect x="35" y="30" width="20" height="4" />
                        <rect x="55" y="45" width="14" height="4" />
                        <rect x="65" y="28" width="15" height="4" />
                        {/* Dots/Accents */}
                        <rect x="23" y="15" width="8" height="4" />
                        <rect x="33" y="20" width="8" height="4" />
                        <path d="M76 60 Q85 60 85 45 L81 45 Q81 56 76 56 Z" />
                    </svg>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-4" dir="rtl" style={{ fontFamily: "'Traditional Arabic', 'Arial', sans-serif" }}>
                    هامز للدعاية والاعلان
                </h1>
                <p className="text-sm md:text-lg uppercase text-[#4ADE80] tracking-[0.2em] font-semibold mb-12">
                    Hamz Advertising
                </p>

                <div className="w-full h-[1px] bg-white/10 mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-4 text-[#4ADE80]">Creative Campaigns</h2>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Engaging advertising campaigns that capture attention and convert audiences, combining modern digital channels with classical aesthetic sensibilities.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-4 text-[#4ADE80]">Brand Identity</h2>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Developing powerful branding solutions that establish dominant market presence and communicate your core enterprise values effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamzAdvertising;
