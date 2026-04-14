import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function DottedWorldMap({ className = '' }) {
  return (
    <div className={`relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden ${className}`}>
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
            transform: 'translate(-50%, -50%) rotateX(55deg) rotateZ(-20deg)',
            transformOrigin: 'center center',
          }}
        >
          <ComposableMap
            projectionConfig={{
              scale: 180,
            }}
            width={800}
            height={600}
            style={{ width: "100%", height: "100%", opacity: 0.6, filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.4))' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke="#00e5ff"
                    strokeWidth={1.2}
                    style={{
                      default: { outline: "none", strokeDasharray: "2 4", strokeLinecap: "round" },
                      hover: { outline: "none", strokeDasharray: "2 4" },
                      pressed: { outline: "none", strokeDasharray: "2 4" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </motion.div>
      
      {/* Deep ambient background glow behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none z-0" />
    </div>
  );
}
