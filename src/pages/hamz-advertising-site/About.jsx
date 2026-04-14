import React from 'react';
import ceoPhoto from '../../../assets/araabi.png.png';

export default function About() {
  return (
    <div className="w-full bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Page Header */}
      <div className="w-full h-[400px] border-b border-[#2F2F2F] relative flex justify-center items-center overflow-hidden">
         <div className="absolute inset-0 z-0">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 filter grayscale"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
         </div>
         <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
             <span className="text-[#8A8A8A] text-xs font-light tracking-[0.3em] uppercase mb-4 block">Corporate Heritage</span>
             <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.2em] text-[#F5F5F5]">Our Narrative</h2>
         </div>
      </div>

      <section className="py-32">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-light text-[#F5F5F5] mb-12 text-center tracking-wide">The Legacy</h3>
            
            <p className="text-[#B0B0B0] text-base leading-relaxed font-light mb-10 text-center tracking-wide max-w-3xl mx-auto">
                HAMZ ADVERTISING stands as a premier architectural signage and corporate branding authority in the Kingdom. Founded on principles of meticulous design, we specialize in high-fidelity industrial billboard and signage fabrications. Since our inception, we have systematically embraced sophisticated technologies to provide an unprecedented aesthetic output.
            </p>

            <p className="text-[#B0B0B0] text-base leading-relaxed font-light text-center tracking-wide max-w-3xl mx-auto">
                Beyond initial design and deployment, our commitment is extended through precise after-sales stewardship. Our dedicated teams guarantee the integrity of our installations, maintaining the immaculate standard and profound trust that our esteemed clientele expects. We seamlessly orchestrate profound visual deployments across all regions of the Kingdom.
            </p>
         </div>
      </section>

      {/* Grid Images */}
      <section className="py-32 bg-[#0D0D0D] border-t border-[#2F2F2F]">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-8 flex-wrap">
           <div className="overflow-hidden rounded-lg w-full md:w-[30%]">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Gallery" className="w-full h-[250px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
           <div className="overflow-hidden rounded-lg w-full md:w-[30%] mt-8 md:mt-0">
             <img src="https://images.unsplash.com/photo-1541888086082-cd2bd3e43f01?auto=format&fit=crop&q=80" alt="Gallery" className="w-full h-[250px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
           <div className="overflow-hidden rounded-lg w-full md:w-[30%] mt-8 md:mt-16">
             <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" alt="Gallery" className="w-full h-[250px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#2F2F2F]">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[#8A8A8A] text-xs font-light tracking-[0.3em] uppercase mb-4 block text-center">Leadership</span>
          <h3 className="text-3xl font-light text-[#F5F5F5] mb-12 text-center tracking-wide">Words From The Top</h3>

          <div
            className="flex flex-col md:flex-row items-center gap-8 bg-[#111111] border border-[#2F2F2F] rounded-xl p-8 transition-all duration-500 hover:border-[#555] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
          >
            {/* CEO Image */}
            <div className="flex-shrink-0 w-[160px] h-[190px] rounded-lg overflow-hidden border border-[#2F2F2F]">
              <img
                src={ceoPhoto}
                alt="Hussain Habeeb Yousif Al Saihati - CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h4 className="text-[#F5F5F5] text-xl font-semibold tracking-wide mb-1">
                Hussain Habeeb Yousif Al Saihati
              </h4>
              <p className="text-[#8A8A8A] text-sm font-light tracking-[0.2em] uppercase mb-5">CEO</p>
              <p className="text-[#C0C0C0] text-base leading-relaxed font-light italic">
                "Quality is our prime asset. With this principle at our core, we strive to lead the market as a bulk supplier by delivering exemplary products and solutions across all safety and consumable materials."
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
