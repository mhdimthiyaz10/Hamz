const fs = require('fs');
const https = require('https');

https.get('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Basic cleanup of SVG
    const cleanSvg = data.replace(/<\?xml.*?\?>/g, '')
                         .replace(/<!--.*?-->/gs, '')
                         .replace(/\n/g, ' ')
                         .trim();
    
    const base64Svg = Buffer.from(cleanSvg).toString('base64');
    const dataUri = `data:image/svg+xml;base64,${base64Svg}`;
    
    const jsxContent = `import React from 'react';
import { motion } from 'framer-motion';

export default function DottedWorldMap({ className = '' }) {
  return (
    <div className={\`relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden \${className}\`}>
      {/* 3D Perspective Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute inset-0 pointer-events-none"
        style={{
          perspective: '1200px',
        }}
      >
        <div
          className="w-[140%] h-[140%] absolute left-1/2 top-1/2"
          style={{
            transform: 'translate(-50%, -50%) rotateX(50deg) rotateZ(-15deg)',
            transformOrigin: 'center center',
          }}
        >
          {/* Glowing dotted mask container */}
          <div
            className="w-full h-full opacity-80 mix-blend-screen"
            style={{
              // The dot pattern
              backgroundImage: 'radial-gradient(circle, #00e5ff 25%, transparent 30%)',
              backgroundSize: '10px 10px',
              // Use the world map as a mask so dots only appear on land
              WebkitMaskImage: \`url(${dataUri})\`,
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              maskImage: \`url(${dataUri})\`,
              maskSize: 'contain',
              maskPosition: 'center',
              maskRepeat: 'no-repeat',
              filter: 'drop-shadow(0 0 12px rgba(0, 229, 255, 0.4))',
            }}
          />
        </div>
      </motion.div>
      
      {/* Deep ambient background glow behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#00e5ff]/5 blur-[150px] pointer-events-none z-0" />
    </div>
  );
}
`;

    fs.writeFileSync('src/components/ui/DottedWorldMap.jsx', jsxContent);
    console.log('Successfully created DottedWorldMap.jsx!');
  });
});
