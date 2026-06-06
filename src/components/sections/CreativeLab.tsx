import { motion } from 'motion/react';
import { Mail, Briefcase, Wrench, Shapes, Linkedin, Instagram, Monitor } from 'lucide-react';
import { MoveText } from '../AnimatedText';

export default function CreativeLab() {
  const tools = [
    "After Effects", "Photoshop", "Illustrator", "Premiere Pro", 
    "OBS Studio", "Social Media Strategy", "Video Editing", 
    "Motion Design", "Digital Product Creation"
  ];

  return (
    <div className="w-full flex flex-col pt-12 pb-24 text-black bg-[#00E5FF] px-4 sm:px-10 max-w-7xl mx-auto rounded-3xl mt-4 border-4 border-black outline outline-4 outline-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      {/* Proof Bar injected like HTML styling */}
      <div className="w-full h-10 bg-black flex items-center justify-center gap-6 px-4 rounded-xl mb-12 border-2 border-black">
        <span className="text-[10px] sm:text-xs font-black text-[#00E5FF] uppercase tracking-tighter">100+ Experiments</span>
        <span className="text-[10px] sm:text-xs font-black text-[#00E5FF] uppercase tracking-tighter hidden sm:inline">Always Learning</span>
        <span className="text-[10px] sm:text-xs font-black text-[#00E5FF] uppercase tracking-tighter">Web / Motion / Design</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-20 text-black">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
           className="mb-8"
        >
          <span className="text-[10px] font-black uppercase tracking-widest block text-white bg-black inline-block px-3 py-1 rounded border-2 border-black">Experimental</span>
        </motion.div>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight mb-8 leading-[1.1] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Test ideas & make visuals <MoveText>move.</MoveText>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-black/70 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          This is my personal playground. A space for creative experiments, side projects, discovering new tools, and connecting.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Core Info / Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 md:col-span-8 bg-black rounded-2xl p-8 sm:p-12 border border-black flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
        >
          <div>
            <div className="w-12 h-12 bg-white/10 rounded items-center justify-center mb-6 hidden md:flex border border-white/20">
              <Shapes className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tight">About Me</h2>
            <div className="space-y-4 text-white/70 font-medium leading-relaxed text-lg">
              <p>
                I am a Visual Content Creator and Motion Designer focusing on creating engaging digital experiences. Whether it's through dynamic short-form content that stops the scroll, or animated assets that bring live streams to life.
              </p>
              <p>
                As the founder of Solin Digital, I've built a library of motion graphics used by over 25,000 creators worldwide. When I'm not designing overlays, I'm consulting brands on social-first content strategies that prioritize human connection over corporate stiffness.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/hkaracan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-[#00E5FF] text-black hover:bg-white transition-colors text-[10px] uppercase font-black tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://instagram.com/hkaracan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-[#00E5FF] text-black hover:bg-white transition-colors text-[10px] uppercase font-black tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a href="https://solindigital.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-[#00E5FF] text-black hover:bg-white transition-colors text-[10px] uppercase font-black tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Monitor className="w-4 h-4" />
              Solin Digital
            </a>
          </div>
        </motion.div>

        {/* Experience mini-CV */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 md:col-span-4 bg-white rounded-2xl p-8 border-4 border-black flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
            <h2 className="text-xl font-black mb-8 border-b-2 border-black pb-4 text-black uppercase tracking-tight">Background</h2>
            
            <div className="space-y-6 flex-1 text-black">
              <div className="relative pl-6 border-l-2 border-black">
                <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00E5FF] border-2 border-black" />
                <h3 className="font-black text-sm tracking-wide uppercase">Founder & Motion Designer</h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-black/60 mb-2 mt-1">Solin Digital</p>
                <p className="text-xs text-black/80 font-medium leading-relaxed">Creating premium animated broadcast assets and overlays for global creators.</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-black">
                <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-black" />
                <h3 className="font-black text-sm tracking-wide uppercase">Visual Content Creator</h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-black/60 mb-2 mt-1">Freelance / Agencies</p>
                <p className="text-xs text-black/80 font-medium leading-relaxed">Directing, shooting, and editing social-first and B2B content marketing campaigns.</p>
              </div>
            </div>
        </motion.div>

        {/* Tools and Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 md:col-span-12 bg-[#00E5FF] outline outline-4 outline-black rounded-2xl p-8 sm:p-12 flex flex-col items-center mt-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="text-center mb-10 max-w-lg text-black">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Core Stack</h2>
            <p className="text-black/70 text-sm leading-relaxed font-medium">My trusted toolkit for bringing creative visions to life through motion, design, and digital experiences.</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
             {tools.map((tool, idx) => (
               <div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all duration-300 group cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                 <div className="w-2 h-2 rounded-full bg-[#00E5FF] border border-black transition-colors" />
                 <span className="text-xs font-black text-black group-hover:text-white transition-colors tracking-wide uppercase">{tool}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Contact CTA */}
       <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-2xl mx-auto text-center w-full"
      >
        <div className="p-12 sm:p-16 bg-white rounded-3xl border-4 border-black flex flex-col items-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-16 h-16 border-2 border-black bg-[#00E5FF] rounded-full flex items-center justify-center mb-6 relative z-10 transition-colors group-hover:bg-black">
            <Mail className="w-6 h-6 text-black group-hover:text-[#00E5FF] transition-colors" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 relative z-10 text-black uppercase tracking-tight">Let's talk <span className="font-mono text-black uppercase font-black text-2xl">ideas</span></h2>
          <p className="text-black/80 mb-8 text-lg relative z-10 font-medium max-w-md mx-auto">
            Available for selected freelance projects, collaborations, and coffee.
          </p>
          <a
            href="mailto:hasan@hasankaracan.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-[#00E5FF] text-[10px] font-black uppercase tracking-[0.2em] relative z-10 hover:bg-[#00E5FF] hover:text-black border-2 border-transparent hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
}
