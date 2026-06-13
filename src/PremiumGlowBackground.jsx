import React from 'react';
import { motion } from 'framer-motion';

const PremiumGlowBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#051A11]">
            {/* Ambient Base Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A3D26] via-[#051A11] to-[#030F0A]"></div>
            
            {/* Animated Glow Orb 1 */}
            <motion.div
                animate={{
                    x: [0, 50, 0, -50, 0],
                    y: [0, 60, 0, -60, 0],
                    scale: [1, 1.15, 1, 0.85, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[60%] md:w-[40%] h-[60%] md:h-[50%] rounded-full bg-[#2E8B57]/30 blur-[120px] mix-blend-lighten"
            />
            
            {/* Animated Glow Orb 2 */}
            <motion.div
                animate={{
                    x: [0, -60, 0, 60, 0],
                    y: [0, -50, 0, 50, 0],
                    scale: [1, 1.2, 1, 0.9, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[50%] h-[60%] rounded-full bg-[#3CB371]/20 blur-[140px] mix-blend-lighten"
            />

            {/* Subtle Noise / Grain Texture for premium matte finish */}
            <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
                style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                }}
            ></div>
        </div>
    );
};

export default PremiumGlowBackground;
