import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      {/* Page Header */}
      <div className="w-full h-[350px] border-b border-[#2F2F2F] relative flex flex-col justify-center items-center">
         <span className="text-[#8A8A8A] text-xs font-light tracking-[0.3em] uppercase mb-4">Inquiries</span>
         <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.2em] text-[#F5F5F5]">Connect</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-32">
        
        {/* Contact Info & Maps */}
        <div className="space-y-16 border-r-0 lg:border-r border-[#2F2F2F] lg:pr-16">
           {/* Main Office */}
           <div>
              <span className="text-[#8A8A8A] text-[10px] uppercase tracking-[0.2em] block mb-2">Headquarters</span>
              <h3 className="text-2xl font-light text-[#F5F5F5] uppercase tracking-wide mb-6">Dammam Office</h3>
              <div className="h-[300px] w-full bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2F2F2F] mb-6">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.76189917387!2d50.007626966144865!3d26.371948496417753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb0749000001%3A0x7d6c6948512596be!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1710410000000!5m2!1sen!2sae" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HAMZ Location"
                 ></iframe>
              </div>
              
              <div className="space-y-4 text-sm font-light text-[#B0B0B0]">
                 <p className="flex items-start gap-4 leading-relaxed">
                    <MapPin size={16} className="text-[#8A8A8A] shrink-0 mt-1"/> 
                    <span>
                       Muadh Bin Jabal, Al Amamrah Dis P.B 6913 <br />
                       Dammam 32245, Kingdom Of Saudi Arabia
                    </span>
                 </p>
                 <p className="flex items-center gap-4">
                    <Phone size={16} className="text-[#8A8A8A] shrink-0"/> 
                    +966 58 328 3813
                 </p>
                 <p className="flex items-center gap-4">
                    <Mail size={16} className="text-[#8A8A8A] shrink-0"/> 
                    sales@hamzksa.com
                 </p>
              </div>
           </div>
        </div>

        {/* Contact Form Section */}
        <div>
            <h3 className="text-3xl font-light text-[#F5F5F5] mb-4">Start a Dialogue</h3>
            <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-12">Leave us a message, and our enterprise representatives will contact you discreetly to discuss your corporate requirments.</p>
            
            <form className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                      <input type="text" placeholder="Full Name" className="w-full h-12 bg-transparent border-b border-[#2F2F2F] text-[#F5F5F5] text-sm font-light focus:outline-none focus:border-[#8A8A8A] transition-colors placeholder-[#8A8A8A] pb-2" />
                  </div>
                  <div>
                      <input type="email" placeholder="Email Address" className="w-full h-12 bg-transparent border-b border-[#2F2F2F] text-[#F5F5F5] text-sm font-light focus:outline-none focus:border-[#8A8A8A] transition-colors placeholder-[#8A8A8A] pb-2" />
                  </div>
               </div>
               <div>
                  <input type="text" placeholder="Subject" className="w-full h-12 bg-transparent border-b border-[#2F2F2F] text-[#F5F5F5] text-sm font-light focus:outline-none focus:border-[#8A8A8A] transition-colors placeholder-[#8A8A8A] pb-2" />
               </div>
               <div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-transparent border-b border-[#2F2F2F] text-[#F5F5F5] text-sm font-light focus:outline-none focus:border-[#8A8A8A] transition-colors placeholder-[#8A8A8A] pb-2 resize-none pt-4"></textarea>
               </div>
               <div className="pt-4">
                  <button type="button" className="px-10 py-4 border border-[#2F2F2F] text-[#F5F5F5] text-xs font-light tracking-[0.2em] uppercase hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-300 rounded-sm">
                      Submit Request
                  </button>
               </div>
            </form>
        </div>
      </div>
    </div>
  )
}
