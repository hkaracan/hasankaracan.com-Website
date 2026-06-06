import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { AttentionText } from '../AnimatedText';

export default function ContentMarketing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const instagramLinks = [
    "https://www.instagram.com/p/DZIFZWoKmgK/",
    "https://www.instagram.com/p/DXRbFw7BHi5/",
    "https://www.instagram.com/p/DYXKPIxBINS/",
    "https://www.instagram.com/p/DWq_AibNL4K/",
    "https://www.instagram.com/p/DWl3QA2MCcc/",
    "https://www.instagram.com/p/DVvyp23jCAU/",
    "https://www.instagram.com/p/DW343CMMyhe/",
    "https://www.instagram.com/p/DXEw18jgRNV/",
    "https://www.instagram.com/p/DXJ7W8Xs1xP/",
    "https://www.instagram.com/p/DVi6lFLDAiU/",
    "https://www.instagram.com/p/DUlHhVIDV-e/",
    "https://www.instagram.com/p/DUQ38-dja4V/"
  ];

  const getShortcode = (url: string) => {
    const match = url.match(/\/p\/([^\/]+)/) || url.match(/\/reel\/([^\/]+)/);
    return match ? match[1] : '';
  };

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % instagramLinks.length);
  };

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + instagramLinks.length) % instagramLinks.length);
  };

  const services = [
    "Instagram Reels",
    "Short-form video concepts",
    "B2B content",
    "UGC-style videos",
    "Carousel concepts",
    "Social media campaign ideas",
    "Video editing",
    "Creative marketing"
  ];

  return (
    <div className="w-full flex flex-col pt-12 pb-24 text-white bg-[#FF3366] px-4 sm:px-10 max-w-7xl mx-auto rounded-3xl mt-4 border-4 border-black outline outline-4 outline-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      {/* Proof Bar injected like HTML styling */}
      <div className="w-full h-10 bg-black flex items-center justify-center gap-6 px-4 rounded-xl mb-12 border-2 border-black">
        <span className="text-[10px] sm:text-xs font-black text-[#FF3366] uppercase tracking-tighter">50M+ Organic Views</span>
        <span className="text-[10px] sm:text-xs font-black text-[#FF3366] uppercase tracking-tighter hidden sm:inline">30+ Brands Scaled</span>
        <span className="text-[10px] sm:text-xs font-black text-[#FF3366] uppercase tracking-tighter">Instagram / TikTok</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-20 text-white">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
           className="mb-8"
        >
          <span className="text-[10px] font-black uppercase tracking-widest block text-white bg-black inline-block px-3 py-1 rounded border-2 border-black">Content Marketing</span>
        </motion.div>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Content that converts <AttentionText>attention.</AttentionText>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl font-medium leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          I create short-form videos, Reels, carousel ideas, and social-first campaigns that help brands feel more human, memorable, and watchable.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2"
        >
          {services.map((service, index) => (
            <span key={index} className="px-4 py-2 bg-white border-2 border-black rounded-full text-[10px] font-mono tracking-wider uppercase text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {service}
            </span>
          ))}
        </motion.div>
      </div>

      {/* iPhone Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 mb-20 flex flex-col items-center w-full"
      >
        <div className="flex items-center justify-center gap-8 w-full max-w-4xl relative">
          
          <button 
            onClick={prevReel}
            className="hidden sm:flex absolute left-0 z-10 w-16 h-16 items-center justify-center rounded-full bg-white border-4 border-black text-black hover:bg-black hover:text-[#FF3366] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] mx-auto group">
            {/* iPhone Frame */}
            <div className="relative aspect-[9/19] w-full bg-black border-[12px] sm:border-[16px] border-black rounded-[40px] sm:rounded-[50px] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
               {/* Dynamic Island (iPhone 16/17 Pro) */}
               <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[90px] sm:w-[100px] h-[30px] bg-[#0a0a0a] rounded-full z-20 flex items-center justify-center border border-white/5">
                 <div className="absolute right-3 w-3 h-3 bg-black rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
               </div>
               
               {/* Side Buttons Mock */}
               <div className="absolute top-[100px] -left-[16px] w-[4px] h-[30px] bg-black rounded-l-md z-0" />
               <div className="absolute top-[150px] -left-[16px] w-[4px] h-[60px] bg-black rounded-l-md z-0" />
               <div className="absolute top-[220px] -left-[16px] w-[4px] h-[60px] bg-black rounded-l-md z-0" />
               <div className="absolute top-[120px] -right-[16px] w-[4px] h-[80px] bg-black rounded-r-md z-0" />
               
               {/* Screen wrapping the iframe to make it full screen-ish */}
               <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden rounded-[28px] sm:rounded-[34px] flex items-center justify-center pointer-events-none">
                   <iframe
                     key={currentIndex}
                     className="absolute w-[185%] h-[185%] max-w-none border-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[32%] pointer-events-auto"
                     src={`https://www.instagram.com/p/${getShortcode(instagramLinks[currentIndex])}/embed/?hidecaption=1&autoplay=1&theme=dark`}
                     scrolling="no"
                     allow="autoplay; encrypted-media; fullscreen"
                   />
               </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-6 mt-12 sm:hidden relative z-10 w-full">
              <button 
                onClick={prevReel}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-4 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={nextReel}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-4 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all"
                aria-label="Next reel"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            {/* View Original Link */}
            <div className="mt-8 text-center sm:hidden md:block">
              <a 
                href={instagramLinks[currentIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-[#FF3366] text-[10px] uppercase font-black tracking-widest border-2 border-black hover:bg-white transition-colors"
                >
                  View on Instagram
              </a>
            </div>
          </div>

          <button 
            onClick={nextReel}
            className="hidden sm:flex absolute right-0 z-10 w-16 h-16 items-center justify-center rounded-full bg-white border-4 border-black text-black hover:bg-black hover:text-[#FF3366] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
            aria-label="Next reel"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex gap-2 mt-8">
          {instagramLinks.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`w-3 h-3 rounded-full border-2 border-black transition-all ${idx === currentIndex ? 'bg-black scale-125' : 'bg-white/50'}`}
             />
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-2xl mx-auto text-center"
      >
        <div className="p-12 sm:p-16 bg-white rounded-3xl border-4 border-black flex flex-col items-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-16 h-16 border-2 border-black bg-[#FF3366] rounded-full flex items-center justify-center mb-6 relative z-10 transition-colors group-hover:bg-black">
            <Mail className="w-6 h-6 text-black group-hover:text-[#FF3366] transition-colors" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 relative z-10 text-black uppercase tracking-tight">Let's build <span className="font-mono text-black uppercase font-black text-2xl">together</span></h2>
          <p className="text-black/80 mb-8 text-lg relative z-10 font-medium">
            Ready to make content that actually works? Let's talk about your brand.
          </p>
          <a
            href="mailto:hasan@hasankaracan.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-[#FF3366] text-[10px] font-black uppercase tracking-[0.2em] relative z-10 hover:bg-[#FF3366] hover:text-black border-2 border-transparent hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Let's Create Content
          </a>
        </div>
      </motion.div>
    </div>
  );
}
