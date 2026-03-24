import React from 'react';

const items = [
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
];

export default function Projects() {
  return (
    <div className="w-full bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      {/* Page Header */}
      <div className="w-full h-[350px] border-b border-[#2F2F2F] relative flex flex-col items-center justify-center">
         <span className="text-[#8A8A8A] text-xs font-light tracking-[0.3em] uppercase mb-4">Portfolio</span>
         <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.2em] text-[#F5F5F5]">Gallery</h2>
      </div>

      {/* Filter / Search section */}
      <section className="py-16">
         <div className="max-w-7xl mx-auto px-6">
             <div className="bg-[#0D0D0D] border border-[#2F2F2F] p-8 rounded-xl">
                 <form className="flex flex-wrap gap-6 items-end">
                     
                     <div className="flex-1 min-w-[200px]">
                        <label className="block text-xs uppercase tracking-[0.1em] text-[#8A8A8A] mb-3">Category</label>
                        <select className="w-full h-12 px-4 bg-[#0A0A0A] border border-[#2F2F2F] text-[#F5F5F5] text-sm font-light rounded-md focus:outline-none focus:border-[#8A8A8A] transition-colors appearance-none">
                            <option>All Disciples</option>
                            <option>Steel Structure</option>
                            <option>Illuminated Signs</option>
                            <option>Zinc Fabrication</option>
                        </select>
                     </div>
                     
                     <div className="flex-1 min-w-[200px]">
                        <label className="block text-xs uppercase tracking-[0.1em] text-[#8A8A8A] mb-3">Search</label>
                        <input type="text" className="w-full h-12 px-4 bg-[#0A0A0A] border border-[#2F2F2F] text-[#F5F5F5] text-sm font-light rounded-md focus:outline-none focus:border-[#8A8A8A] transition-colors" placeholder="Search gallery..." />
                     </div>
                     
                     <div className="flex gap-4">
                        <button className="h-12 px-8 bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#B0B0B0] rounded-md transition-colors text-xs tracking-[0.1em] uppercase">
                           Search
                        </button>
                        <button type="button" className="h-12 px-8 bg-transparent border border-[#2F2F2F] text-[#F5F5F5] hover:border-[#8A8A8A] rounded-md transition-colors text-xs tracking-[0.1em] uppercase">
                           Reset
                        </button>
                     </div>
                 </form>
             </div>
         </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((_, i) => (
                 <div key={i} className="group overflow-hidden rounded-xl bg-[#0D0D0D] border border-dashed border-[#2F2F2F] relative h-[350px] flex flex-col items-center justify-center hover:border-[#555] transition-colors duration-500">
                      {/* Plus icon */}
                      <div className="w-12 h-12 rounded-full border border-dashed border-[#3A3A3A] flex items-center justify-center mb-4 group-hover:border-[#8A8A8A] transition-colors duration-500">
                        <span className="text-[#3A3A3A] text-2xl leading-none group-hover:text-[#8A8A8A] transition-colors duration-500">+</span>
                      </div>
                      <span className="text-[#3A3A3A] text-[11px] uppercase tracking-[0.2em] group-hover:text-[#8A8A8A] transition-colors duration-500">Add Work</span>
                 </div>
              ))}
          </div>

          <div className="flex justify-center mt-20 gap-3">
              <button className="w-10 h-10 border border-[#8A8A8A] text-[#F5F5F5] text-sm font-light rounded-full transition-colors">1</button>
              <button className="w-10 h-10 border border-[#2F2F2F] text-[#8A8A8A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] text-sm font-light rounded-full transition-colors">2</button>
              <button className="w-10 h-10 border border-[#2F2F2F] text-[#8A8A8A] hover:border-[#8A8A8A] hover:text-[#F5F5F5] text-sm font-light rounded-full transition-colors">3</button>
          </div>
      </section>

    </div>
  )
}
